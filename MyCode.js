class lpGeneratorService{
    constructor(options){
        this.buttonID = '';
        this.source = '';
        this.popUpTrigger = false;
        this.popUpOverlay = {};
        this.options = {
            telef: '',
            mail: '',
            files: {
                katalog_LD: '',
                katalog_strizh: '',
                price: ''
            },
            interface: {
                mailSelector: options.interface.mailSelector,
                telefoneSelector: options.interface.telefoneSelector
            },
            yandex: {
                yandexCounter: options.yandex.yandexCounter,
                yandexTrigger: options.yandex.yandexCounter ? true : false
            },
            forms: {
                toLoadPopUpButtons: options.forms.toLoadPopUpButtons,
                formWithLoadFile: options.forms.formWithLoadFile,
                popUpFormSubmit: options.forms.popUpFormSubmit,
                downloadSpecial: options.forms.downloadSpecial,
                formFromOverlayByMouseScroll :  options.forms.formFromOverlayByMouseScroll
            },
            overlay: {
                byButtons: options.overlay.byButtons,
                byMouseScroll: options.overlay.byMouseScroll || false,
                vkInviteOverlay: options.overlay.vkInviteOverlay || false
            }
        };
        this.query = this.getQueryString();
        if (this.query.source){
            this.source = this.query.source;
            this.setCookie('source',this.query.source);
        } else if (this.getCookie('source') !== 'none' || this.getCookie('source') !== undefined) {
            this.source = this.getCookie('source');
        }
        this.setPhoneAndMailToDOM(this);
        this.buildOverlayByButtons(this);
        if (this.options.overlay.byMouseScroll) {
            this.buildOverlaybyMouseScroll(this)
        }
        this.options.overlay.vkInviteOverlay ? this.buildOverlayByVkInvite(this) : null;
        this.clicksObserver(this);
        //this.query.download ? this.getFileFromRequest(this.query.download) : null;
    }
    clicksObserver(obj) {
        obj.options.forms.toLoadPopUpButtons.forEach(function (buttonID) {
            if (obj.popUpTrigger){
                var fileType = 'price';
                if (obj.options.forms.downloadSpecial && obj.options.forms.downloadSpecial[obj.buttonID])  fileType = obj.options.forms.downloadSpecial[obj.buttonID];
                obj.getFileFromForm(fileType);
            } else {
                jq_181(function ($) {
                    $(buttonID).click(function (e) {
                        obj.buttonID = buttonID;
                        e.preventDefault();
                        $('#byButtonsOverlay').overlay().load();
                    });
                });
            }
        });
        jq_144(obj.options.forms.formFromOverlayByMouseScroll).on('submit', '.our_form', function () {
            jq_144('#lp_form_target').on('load', function () {
                $('#form_submit_message').css('display', 'none');
                var fileType = 'price';
                obj.popUpTrigger = true;
                if (obj.options.forms.downloadSpecial && obj.options.forms.downloadSpecial[obj.buttonID])  fileType = obj.options.forms.downloadSpecial[obj.buttonID];
                obj.getFileFromForm(fileType);
                jq_181('#byMouseScroll').overlay().close();
                if (obj.options.yandex.yandexTrigger) obj.options.yandex.yandexCounter.reachGoal('dwld_popprice');
            });
        });
        obj.options.forms.formWithLoadFile.forEach(function (form) {
            jq_144(form).on('submit', '.our_form', function () {
                if (obj.options.yandex.yandexTrigger) obj.options.yandex.yandexCounter.reachGoal('otpravte_zayavku');
            });
        });
        jq_144(obj.options.forms.popUpFormSubmit).on('submit', '.our_form', function () {
            
            jq_144('#lp_form_target').on('load', function () {
                $('#form_submit_message').css('display', 'none');
                var fileType = 'price';
                obj.popUpTrigger = true;
                if (obj.options.forms.downloadSpecial && obj.options.forms.downloadSpecial[obj.buttonID])  fileType = obj.options.forms.downloadSpecial[obj.buttonID];
                obj.getFileFromForm(fileType);
                jq_181('#byButtonsOverlay').overlay().close();
                if (obj.options.yandex.yandexTrigger) obj.options.yandex.yandexCounter.reachGoal('dwld_fullprice');
            });
        });
        jq_181(function ($) {
            $(obj.options.interface.mailSelector).click(function (e) {
                e.preventDefault();
                if (obj.options.yandex.yandexTrigger) obj.options.yandex.yandexCounter.reachGoal('show_mail');
                $(obj.options.interface.mailSelector).html(obj.options.mail);
            });
            $(obj.options.interface.telefoneSelector).click(function (e) {
                e.preventDefault();
                if (obj.options.yandex.yandexTrigger) obj.options.yandex.yandexCounter.reachGoal('show_phone');
                $(obj.options.interface.telefoneSelector).html(obj.options.telef);
            });
        });
    };
    setPhoneAndMailToDOM(obj){
        switch (obj.source) {
            case 'metalloprokat-armaseti':
                obj.options.telef="+7(383)239-09-65";
                obj.options.mail="armaseti-met@yandex.ru";
                obj.options.files.katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRa0w3QmN0ZEtwaUk";
                obj.options.files.katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRM2V0eWVaUU1Yb3c";
                obj.options.files.price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRN1N6M2J6TXVhWlk";
                break;
            case 'pulse':
                obj.options.telef="+7(383)207-86-72";
                obj.options.mail="prom-armatura@list.ru";
                obj.options.files.katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRRXlUdHptNEhQLTA";
                obj.options.files.katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRNVpua3NrZDRzWTA";
                obj.options.files.price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRdWp2dGxsRTF1Rlk";
                break;
            case 'ya':
                obj.options.telef="+7(383)207-86-29";
                obj.options.mail="armaseti-opt@yandex.ru";
                obj.options.files.katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPROWEzRW11OUQwTUU";
                obj.options.files.katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPReVFLb1dOREM3eFE";
                obj.options.files.price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRU3M4LUVLYW5UN0E";
                break;
            case 'mail':
                obj.options.telef="+7(383)292-36-84";
                obj.options.mail="sale@prodazha-optom.ru";
                obj.options.files.katalog_LD="http://armasetiopt.ru/files/mail/Каталог LD.pdf";
                obj.options.files.katalog_strizh="http://armasetiopt.ru/files/mail/Стриж LD.pdf";
                obj.options.files.price="http://armasetiopt.ru/files/mail/_%d0%b0%d1%80%d0%bc%d0%b0%d1%81%d0%b5%d1%82%d0%b8_%d0%bf%d1%80%d0%b0%d0%b8%cc%86%d1%81.xlsx";
                break;
            default:
                obj.options.telef="+7(499)704-21-01";
                obj.options.mail="opt-495@mail.ru";
                obj.options.files.katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRc1d2SWV6MElCZkk";
                obj.options.files.katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRUW1UTmhWR0lkMm8";
                obj.options.files.price="http://armasetiopt.ru/files/prices/rf/_%d0%b0%d1%80%d0%bc%d0%b0%d1%81%d0%b5%d1%82%d0%b8-%d0%b8%d0%bc%d0%bf%d0%be%d1%80%d1%82_%d0%bf%d1%80%d0%b0%d0%b8%cc%86%d1%81-%d0%bb%d0%b8%d1%81%d1%82.xlsx";
        }
        jq_144(function($){ // втавляет данные в форму страницы
            $(obj.options.interface.mailSelector).html('<a>'+obj.options.mail.replace(/@(.+)/,'@...')+'</a>');
            $(obj.options.interface.telefoneSelector).html('<a>'+obj.options.telef.replace(/(...)$/,'...')+'</a>');
        });
    };
    getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : "none";
    };
    setCookie(name, value, options) {
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
    getQueryString() {
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
    };
    getFileFromForm (filename) {
        var tmpElem = document.createElement('div');
        tmpElem.innerHTML = '<iframe name="downloadfile" id="downloadfile" src="' + this.options.files[filename] + '">';
        var iframe = tmpElem.firstChild;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        return iframe;
    };
    getFileFromRequest(filename) {
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
    buildOverlayByButtons(obj){
        jq_181(function($){
            $('body').append('<div class="simple_overlay_p" id="byButtonsOverlay"></div>');
            for (var i = 0; i <obj.options.overlay.byButtons.elements.length; i ++ ){
            $('#byButtonsOverlay').append($(obj.options.overlay.byButtons.elements[i].id).css(obj.options.overlay.byButtons.elements[i].css));
            }
            $('#byButtonsOverlay').hide();
            $('#byButtonsOverlay').overlay(obj.options.overlay.byButtons.overlayOptions ||{ top: '10%', mask: { color:'#000', opacity:.5 } });
            $('#byButtonsOverlay').css(obj.options.overlay.byButtons.boxCss || { 'max-height': $(window).height() * 0.7 + 'px'});
        });
    };
    buildOverlaybyMouseScroll (obj) {
        jq_181(function ($) {
            $('body').append('<div class="simple_overlay_p" id="byMouseScroll"></div>');
            for (var i = 0; i < obj.options.overlay.byMouseScroll.elements.length; i++) {
                $('#byMouseScroll').append($(obj.options.overlay.byMouseScroll.elements[i].id).css(obj.options.overlay.byMouseScroll.elements[i].css));
            }
            $('#byMouseScroll').hide();
            $('#byMouseScroll').overlay(obj.options.overlay.byMouseScroll.overlayOptions || {
                    top: '10%',
                    mask: {color: '#000', opacity: .5}
                });
            $('#byMouseScroll').css(obj.options.overlay.byMouseScroll.boxCss || {'max-height': $(window).height() * 0.7 + 'px'});
            obj.popUpOverlay = new popUpOverlaySetter('#byMouseScroll', $);
            if (window.addEventListener) {
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
                // wheelDelta не дает возможность узнать количество пикселей
                var delta = e.deltaY || e.detail || e.wheelDelta;
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                obj.popUpOverlay.check(delta, scrollTop);
            }
        });
    };
    buildOverlayByVkInvite (obj) {

    };
}
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
            this.sum += delta;
        }
        if (delta > 0) {
            this.sum = 0;
        }
        if (
            (this.sum <= -300 && this.trigger === 0 && scrollTop >= 300) ||
            (scrollTop <= 50 && this.scrollTrigger === 1 && this.trigger === 0 )) {
            this.trigger = 1;
            var buffer = this.overlay;
            jq_181(function ($) {
                $(buffer).overlay().load();
            });
        }
    }
}
