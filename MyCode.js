
function lpGeneratorService(){
    var _this = this;
    _this.options = {};
    this.clicksObserver = function () {
        this.options.forms.toLoadPopUpButtons.forEach(function (buttonID) {
            jq_181(function ($) {
                $(buttonID).click(function (e) {
                    this.buttonID = buttonID;
                    e.preventDefault();
                    $('#byButtonsOverlay').overlay().load();
                });
            });
        });
        this.options.forms.formWithLoadFile.forEach(function (form) {
            jq_144(form).on('submit', '.our_form', function () {
                //TODO yandexTarget1
            });
        });
        jq_144(_this.options.forms.popUpFormSubmit).on('submit', '.our_form', function () {
            jq_144('#lp_form_target').on('load', function () {
                $('#form_submit_message').css('display', 'none');
                var fileType = 'price';
                if (_this.options.forms.downloadSpecial[_this.buttonID])  fileType = _this.options.forms.downloadSpecial[_this.buttonID];
                _this.getFileFromForm(fileType);
                jq_181('#byButtonsOverlay').overlay().close();
                //TODO yandexTarget
            });
        });
        jq_181(function ($) {
            $(_this.options.interface.mailSelector).click(function (e) {
                e.preventDefault();
                //TODO yandexTarget2
                $(_this.options.interface.mailSelector).html(_this.options.mail);
            });
            $(_this.options.interface.telefoneSelector).click(function (e) {
                e.preventDefault();
                //TODO yandexTarget3
                $(_this.options.interface.telefoneSelector).html(_this.options.telef);
            });
        });
    };
    this.haveQuerySource = function () {
      return this.queryString.source ? true : false;
    };
    this.setPhoneAndMailToDOM = function(source){
        switch (source) {
            case 'metalloprokat-armaseti':
                _this.options.telef="+7(383)239-09-65";
                _this.options.mail="armaseti-met@yandex.ru";
                _this.options.files.katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRa0w3QmN0ZEtwaUk";
                _this.options.files.katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRM2V0eWVaUU1Yb3c";
                _this.options.files.price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRN1N6M2J6TXVhWlk";
                break;
            case 'pulse':
                _this.options.telef="+7(383)207-86-72";
                _this.options.mail="prom-armatura@list.ru";
                _this.options.files.katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRRXlUdHptNEhQLTA";
                _this.options.files.katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRNVpua3NrZDRzWTA";
                _this.options.files.price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRdWp2dGxsRTF1Rlk";
                break;
            case 'ya':
                _this.options.telef="+7(383)207-86-29";
                _this.options.mail="armaseti-opt@yandex.ru";
                _this.options.files.katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPROWEzRW11OUQwTUU";
                _this.options.files.katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPReVFLb1dOREM3eFE";
                _this.options.files.price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRU3M4LUVLYW5UN0E";
                break;
            case 'mail':
                _this.options.telef="+7(383)292-36-84";
                _this.options.mail="sale@prodazha-optom.ru";
                _this.options.files.katalog_LD="http://armasetiopt.ru/files/mail/Каталог LD.pdf";
                _this.options.files.katalog_strizh="http://armasetiopt.ru/files/mail/Стриж LD.pdf";
                _this.options.files.price="http://armasetiopt.ru/files/mail/_%d0%b0%d1%80%d0%bc%d0%b0%d1%81%d0%b5%d1%82%d0%b8_%d0%bf%d1%80%d0%b0%d0%b8%cc%86%d1%81.xlsx";
                break;
            default:
                _this.options.telef="+7(383)209-56-40";
                _this.options.mail="armaseti-opt@yandex.ua";
                _this.options.files.katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRc1d2SWV6MElCZkk";
                _this.options.files.katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRUW1UTmhWR0lkMm8";
                _this.options.files.price="http://armasetiopt.ru/files/prices/rf/_%d0%b0%d1%80%d0%bc%d0%b0%d1%81%d0%b5%d1%82%d0%b8-%d0%b8%d0%bc%d0%bf%d0%be%d1%80%d1%82_%d0%bf%d1%80%d0%b0%d0%b8%cc%86%d1%81-%d0%bb%d0%b8%d1%81%d1%82.xlsx";
        }
        jq_144(function($){ // втавляет данные в форму страницы
            $(_this.options.interface.mailSelector).html('<a>'+mail.replace(/@(.+)/,'@...')+'</a>');
            $(_this.options.interface.telefoneSelector).html('<a>'+telef.replace(/(...)$/,'...')+'</a>');
        });
    };
    this.getCookie = function(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : "none";
    };
    this.setCookie = function(name, value, options) {
        options = options || {};
        var expires = new Date(new Date().getTime() + 30*24*60*60 * 1000).toUTCString();


        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);

        var updatedCookie = name + "=" + value;

        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }

        document.cookie = updatedCookie;
    };
    this.getQueryString = function () {
        var query_string = {};
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if (typeof query_string[pair[0]] === "undefined"){
                query_string[pair[0]] = decodeURIComponent(pair[1]);
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
                query_string[pair[0]] = arr;
            } else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return query_string;
    }();
    this.getFileFromForm = function (filename) {
        var tmpElem = document.createElement('div');
        tmpElem.innerHTML = '<iframe name="downloadfile" id="downloadfile" src="' + _this.options.files[filename] + '">';
        var iframe = tmpElem.firstChild;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        return iframe;
    };
    this.getFileFromRequest = function(filename) {
        var url;
        switch (filename) {
            case 'prise':
                url = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRWkVfYXI4SEx3NmM";
                break;
            case 'cat_ld':
                url = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRazd6VFR5SDhXNE0";
                break;
            case 'flanc':
                url = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRWWFBZEdVdHZfYnM";
                break;
            case 'cat_str':
                url = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRYlI1NWlMYUJOSDQ";
                break;
        }
        var tmpElem = document.createElement('div');
        tmpElem.innerHTML = '<iframe name="download" id="download" src="' + url + '">';
        var iframe = tmpElem.firstChild;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        return iframe;
    };
    this.buildOverlayByButtons = function(){
        jq_181(function($){
            $('body').append('<div style="display:none; z-index:10000; position:absolute;'+
            'background-color:#fff; width:675px; min-height:200px; max-height:400px;'+
            'border:1px solid #666; padding:10px; -moz-box-shadow:0 0 90px 5px #000;'+
            '-webkit-box-shadow: 0 0 90px #000;" id="byButtonsOverlay"></div>');
            for (var i = 0; i <_this.options.overlay.byButtons.elements.length; i ++ ){
            $('#byButtonsOverlay').append($(_this.options.overlay.byButtons.elements[i].id).css(_this.options.overlay.byButtons.elements[i].css));
            }
            $('#byButtonsOverlay').hide();
            $('#byButtonsOverlay').overlay(_this.options.overlay.byButtons.overlayOptions ||{ top: '10%', mask: { color:'#000', opacity:.5 } });
            $('#byButtonsOverlay').css(_this.options.overlay.byButtons.boxCss || { 'max-height': $(window).height() * 0.7 + 'px'});
        });
    };
    this.buildOverlaybyMouseScroll = function () {
        jq_181(function($){
            $('body').append('<div style="display:none; z-index:10000; position:absolute;'+
                'background-color:#fff; width:675px; min-height:200px; max-height:400px;'+
                'border:1px solid #666; padding:10px; -moz-box-shadow:0 0 90px 5px #000;'+
                '-webkit-box-shadow: 0 0 90px #000;" id="byMouseScroll"></div>');
            for (var i = 0; i <_this.options.overlay.byMouseScroll.elements.length; i ++ ){
                $('#byMouseScroll').append($(_this.options.overlay.byMouseScroll.elements[i].id).css(_this.options.overlay.byMouseScroll.elements[i].css));
            }
            $('#byMouseScroll').hide();
            $('#byMouseScroll').overlay(_this.options.overlay.byMouseScroll.overlayOptions ||{ top: '10%', mask: { color:'#000', opacity:.5 } });
            $('#byMouseScroll').css(_this.options.overlay.byMouseScroll.boxCss || { 'max-height': $(window).height() * 0.7 + 'px'});
        _this.popUpOverlay = new popUpOverlaySetter('#byMouseScroll', $);
        });
    };
    this.buildOverlayByVkInvite = function () {
        jq_181(function($){
            $('body').append('<div class="simple_overlay_p" id="vkInviteOverlay"></div>');/* слздал блок с крестом*/
            $('#vkInviteOverlay').html( '<div id="armaseti-vk"></div>' );
            VK.Widgets.Group("armaseti-vk", {mode: 3, width: "400", height: "400", color1: 'EEF2F3', color2: '213344', color3: '237BB3'}, 95767638);
            $('#vkInviteOverlay').hide();
            $('#vkInviteOverlay').overlay(_this.options.overlay.vkInviteOverlay.overlayOptions || { top: '10%', mask: { color:'#000', opacity:.5 }});
            $('#vkInviteOverlay').css(_this.options.overlay.vkInviteOverlay.boxCss || {'max-height':'220px' ,'width':'400px'});
        });
    };
    this.startMagicPliZi = function(options){
        this.options.interface.mailSelector = options.interface.mailSelector;
        this.options.interface.telefoneSelector = options.interface.telefoneSelector;
        this.options.yandex.yandexCounter = options.forms.yandexCounter;
        this.options.yandex.yandexTrigger = options.forms.yandexTrigger;
        this.options.forms.toLoadPopUpButtons = options.forms.toLoadPopUpButtons;
        this.options.forms.formWithLoadFile = options.forms.formWithLoadFile;
        this.options.forms.popUpFormSubmit = options.forms.popUpFormSubmit;
        this.options.forms.downloadSpecial = options.forms.downloadSpecial;
        this.options.overlay.byButtons = options.overlay.byButtons;
        this.options.overlay.byMouseScroll = options.overlay.byMouseScroll || false;
        this.options.overlay.vkInviteOverlay = options.overlay.vkInviteOverlay || false;
        var source = '';
        if (this.haveQuerySource){
            source = this.getQueryString.source;
            this.setCookie('source',source);
        } else if (this.getCookie('source') !== 'none') {
            source = this.getCookie('source');
        }
        this.setPhoneAndMailToDOM(source);
        this.buildOverlayByButtons();
        this.options.overlay.byMouseScroll ? this.buildOverlaybyMouseScroll() : null;
        this.options.overlay.vkInviteOverlay ? this.buildOverlayByVkInvite() : null;
        this.clicksObserver();
        this.getQueryString.download ? this.getFileFromRequest(this.getQueryString.download) : null;
    }
}
// Документация
// interface.mailSelector и interface.telefoneSelector - указываются селекторы объектов, для контактов
// forms = {
//      yandexCounter : {} - для яндекс целей, в качестве алиаса
//      yandexTrigger : true || false,
//      buttonsActions: [
//          {
//          id: '#id',
//          url : 'price', 'katalog_LD', 'katalog_strizh'
//          },
//          {...},
//          {...}
//          ],
//      formWithLoadFile : ['#id','#id1',...],
//        form : [
//          {
//              id: '#id',
//                widget_1: '#4134',
//              widget_2: '#143'
//          },
//          {...},
//          {...}
//       ]
//
//
// } !

class popUpOverlaySetter {
    constructor(overlayName, _$) {
        this.$ = _$;
        this.overlay = '';
        this.sum = 0;
        this.trigger = 0;
        this.scrollTrigger = 0;
        this.overlay = overlayName;
    }

    check(delta, scrollTop) {
        if (scrollTop > 300) {
            this.scrollTrigger = 1;
        }
        if (delta < 0) {
            this.sum+=delta;
        }
        if (delta > 0) {
            this.sum = 0;
        }
        if (
            (this.sum <= -300 && this.trigger === 0 && scrollTop >= 300) ||
            (scrollTop <= 50 && this.scrollTrigger === 1 && this.trigger === 0 )){
            this.trigger = 1;
            var buffer = this.overlay;
            jq_181(function($){
            $(buffer).overlay().load();
            });
        }
    }
}


if (window.addEventListener ){
    if ('onwheel' in document) {
        // IE9+, FF17+, Ch31+
        window.addEventListener("wheel", onWheel);
    } else if ('onmousewheel' in document) {
        // устаревший вариант события
        window.addEventListener("mousewheel", onWheel);
    } else {
        // Firefox < 17
        window.addEventListener("MozMousePixelScroll", onWheel);
    }
} else { // IE8-
    window.attachEvent("onmousewheel", onWheel);
}

function onWheel(e) {
    e = e || window.event;
    if (popUpOverlay) {
        // wheelDelta не дает возможность узнать количество пикселей
        var delta = e.deltaY || e.detail || e.wheelDelta;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        popUpOverlay.check(delta, scrollTop);
    }
}
//----
