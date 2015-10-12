src= "https://rawgit.com/github/fetch/master/fetch.js";
var geoip2=function(){"use strict";function Lookup(successCallback,errorCallback,options,type){this.successCallback=successCallback,this.errorCallback=errorCallback,this.geolocation=options&&options.hasOwnProperty("geolocation")?options.geolocation:navigator.geolocation,this.type=type}var exports={};Lookup.prototype.returnSuccess=function(location){this.successCallback&&"function"==typeof this.successCallback&&this.successCallback(this.fillInObject(this.objectFromJSON(location)))},Lookup.prototype.returnError=function(error){this.errorCallback&&"function"==typeof this.errorCallback&&(error||(error={error:"Unknown error"}),this.errorCallback(error))},Lookup.prototype.objectFromJSON=function(json){return"undefined"!=typeof window.JSON&&"function"==typeof window.JSON.parse?window.JSON.parse(json):eval("("+json+")")};var fillIns={country:[["continent","Object","names","Object"],["country","Object","names","Object"],["registered_country","Object","names","Object"],["represented_country","Object","names","Object"],["traits","Object"]],city:[["city","Object","names","Object"],["continent","Object","names","Object"],["country","Object","names","Object"],["location","Object"],["postal","Object"],["registered_country","Object","names","Object"],["represented_country","Object","names","Object"],["subdivisions","Array",0,"Object","names","Object"],["traits","Object"]]};return Lookup.prototype.fillInObject=function(obj){for(var fill="country"===this.type?fillIns.country:fillIns.city,i=0;i<fill.length;i++)for(var path=fill[i],o=obj,j=0;j<path.length;j+=2){var key=path[j];o[key]||(o[key]="Object"===path[j+1]?{}:[]),o=o[key]}try{Object.defineProperty(obj.continent,"continent_code",{enumerable:!1,get:function(){return this.code},set:function(value){this.code=value}})}catch(e){obj.continent.code&&(obj.continent.continent_code=obj.continent.code)}if("country"!==this.type)try{Object.defineProperty(obj,"most_specific_subdivision",{enumerable:!1,get:function(){return this.subdivisions[this.subdivisions.length-1]},set:function(value){this.subdivisions[this.subdivisions.length-1]=value}})}catch(e){obj.most_specific_subdivision=obj.subdivisions[obj.subdivisions.length-1]}return obj},Lookup.prototype.getGeoIPResult=function(){var param,request,that=this,uri="//js.maxmind.com/geoip/v2.1/"+this.type+"/me?",httpParams={referrer:location.protocol+"//"+location.hostname};if(!this.alreadyRan){this.alreadyRan=1,"Microsoft Internet Explorer"===navigator.appName&&window.XDomainRequest&&-1===navigator.appVersion.indexOf("MSIE 1")?(request=new XDomainRequest,uri=window.location.protocol+uri,request.onprogress=function(){}):(request=new window.XMLHttpRequest,uri="https:"+uri);for(param in httpParams)httpParams.hasOwnProperty(param)&&httpParams[param]&&(uri+=param+"="+encodeURIComponent(httpParams[param])+"&");uri=uri.substring(0,uri.length-1),request.open("GET",uri,!0),request.onload=function(){if("undefined"==typeof request.status||200===request.status)that.returnSuccess(request.responseText);else{var error,contentType=request.hasOwnProperty("contentType")?request.contentType:request.getResponseHeader("Content-Type");if(/json/.test(contentType)&&request.responseText.length)try{error=that.objectFromJSON(request.responseText)}catch(e){error={code:"HTTP_ERROR",error:"The server returned a "+request.status+" status with an invalid JSON body."}}else error=request.responseText.length?{code:"HTTP_ERROR",error:"The server returned a "+request.status+" status with the following body: "+request.responseText}:{code:"HTTP_ERROR",error:"The server returned a "+request.status+" status but either the server did not return a body or this browser is a version of Internet Explorer that hides error bodies."};that.returnError(error)}},request.ontimeout=function(){that.returnError({code:"HTTP_TIMEOUT",error:"The request to the GeoIP2 web service timed out."})},request.onerror=function(){that.returnError({code:"HTTP_ERROR",error:"There was a network error receiving the response from the GeoIP2 web service."})},request.send(null)}},exports.country=function(successCallback,errorCallback,options){var l=new Lookup(successCallback,errorCallback,options,"country");l.getGeoIPResult()},exports.city=function(successCallback,errorCallback,options){var l=new Lookup(successCallback,errorCallback,options,"city");l.getGeoIPResult()},exports.insights=function(successCallback,errorCallback,options){var l=new Lookup(successCallback,errorCallback,options,"insights");l.getGeoIPResult()},exports}();
var data_from_ip = {"ip":"","country_code":"","country_name":"","region_code":"","region_name":"","city":"","zip_code":"","time_zone":"","latitude":"","longitude":"","metro_code":""};
var company;
var onSuccess = function(location){
	data_from_ip.ip=location.traits.ip_address;
	data_from_ip.country_code=location.country.iso_code;
	data_from_ip.region_name=location.subdivisions[0].names.ru;
	data_from_ip.city=location.city.names.ru;
	data_from_ip.time_zone=location.location.time_zone;
	company = whatcompany(data_from_ip);
};
var onError = function(error){
scriptRequest('http://freegeoip.net/json/', ip_data_succ, ip_data_fail);
};
if (getCookie("ip_block")!="yes"){
geoip2.city(onSuccess, onError);}
function element_spy(id){ // закрывает поп-ап форму
var continue_spy = true;
if(jq_181(id + ':visible').length){ jq_181("#overlay1" ).dialog("close"); continue_spy = false; }
if(continue_spy){ setTimeout('element_spy("' + id + '")',1); }
}

function popupforlid(form1,form_butt1,button1){ 
jq_181(function($){// отвечает за создание поп-ап формы и его активации
/*-------------------------------------------*/
$('body').append('<div class="simple_overlay_p" id="overlay1"></div>');/* слздал блок с крестом*/
$('#overlay1').append($(form1).css('position', 'static').css('margin','auto'));  
$('#overlay1').append($(form_butt1).css('position', 'absolute').css('margin','auto').css('top','140px').css('left','70px'));
$('#overlay1').hide();
$('#overlay1').overlay({ top: '10%', mask: { color:'#000', opacity:.5 } });
$('.overlay_block, .simple_overlay_p')
.css({ 'max-height': $(window).height() * 0.7 + 'px'});
/*-------------------------------------------*/
$(button1).click(function(e){
    bpress= this.id;
    if (showpopup == 1){
		e.preventDefault();
		$('#overlay1').overlay().load();
		}else { gotohell(bpress)};});
});}
function form_with_load(block_id,name_of_lid,mail_of_lid ){
jq_144(block_id).on( 'submit', '.our_form', function (){ // block-newID - id формы
  mcsub(block_id,name_of_lid,mail_of_lid);
     var form = jq_144(this);
     jq_144('#lp_form_target').on( 'load', function(){
    	showpopup=0; 
	 if (yaCountwith == 0) {yaCounter31701781.reachGoal('NEW_LID_WHITHIN'); yaCountwith = 1;};
	 timerName255 = setInterval(function() {}, 1000);});});}
function form_for_pop_up(block_id,name_of_lid,mail_of_lid){
jq_144(block_id).on( 'submit', '.our_form', function (){ // оператор формы без вложения
mcsub(block_id,name_of_lid,mail_of_lid);
     jq_144('#lp_form_target').on( 'load', function(){
	$('#form_submit_message').css('display','none');
	jq_181('#overlay1').overlay().close();
    	gotohell(bpress);
    	if (yaCount == 0) {yaCounter31701781.reachGoal('NEW_LID');  yaCount = 1;};
    	showpopup=0;    
	timerName255 = setInterval(function() {
        if ( jq_144('#form_submit_message').css('display') == 'none' ) {
 	clearInterval(timerName255);
               }
           }, 1000);
       });
   });	
}
//-----------------------------------
var telef;
  var mail;
  var katalog_LD;
  var katalog_strizh;
  var price;
var showpopup=1;
var yaCount = 0;
var yaCountwith = 0;
var bpress;
var QueryString = function () {    
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
function SetInterface(param){ 
switch (param) { // распределяет ссылки и значения для доп параметров
  case 'krasnoyarsk':
  telef="+7(913)396-63-09";
  mail="arma-seti@yandex.com";
  katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRTkMxOVVyR2pGSWM";
  katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRcjR5aDVmSEFJVUE";
  price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRTjJYbFlzMzAtLUE";
  break;
  case 'tomsk':
  telef="+7(913)376-11-63";
  mail="arma-seti@narod.ru";
  katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRa0w3QmN0ZEtwaUk";
  katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRM2V0eWVaUU1Yb3c";
  price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRN1N6M2J6TXVhWlk";
  break;
  case 'omsk':
  telef="+7(913)376-22-19";
  mail="arma-seti@ya.ru";
  katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRelpXQ29WTW16Rnc";
  katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRZEJqS1NfVnBWU0U";
  price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRNUxWZXhRMGR3Ulk";
  break;
  case 'kemerovo':
  telef="+7(913)396-66-92";
  mail="arma-seti@yandex.by";
  katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRelA1emFwaFRmNEk";
  katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRRUxGQk1ndzRpbmM";
  price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRclFzWWxrSFRjbDQ";
  break;
  case 'barnaul':
  telef="+7(913)396-63-07";
  mail="arma-seti@yandex.kz";
  katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRUS1NM0Y3NmJ0cHM";
  katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRYzlidURDR0tReE0";
  price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRTmpPWXNBSDNuQVE";
  break;
  case 'other':
  telef="+7(913)376-10-38";
  mail="arma-seti@yandex.ru";
  katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRVWtIdVp0ZW1OX1U";
  katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRWnllUjdsV0gyR3M";
  price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRM3Utb204T0JMeEU";
  break;
  case 'ya':
  telef="+7(383)207-86-29";
  mail="armaseti-opt@yandex.ru";
  katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPROWEzRW11OUQwTUU";
  katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPReVFLb1dOREM3eFE";
  price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRU3M4LUVLYW5UN0E";
  break;
  case 'rsya':
  telef="+7(383)207-86-98";
  mail="armaseti-opt@narod.ru";
  katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRdlVTMFdQbGVPZ2c";
  katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRRl9Gek9QcWNFU28";
  price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRSnQ4UVprRGt0ZVE";
  break;
  case 'ga':
  telef="+7(383)207-98-93";
  mail="armaseti-opt@ya.ru";
  katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRdUZCNHNzcXpLNlU";
  katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRbThDTkhPRjRhMWc";
  price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRNGZVSU81LUw4TTA";
  break;
  case 'kms':
  telef="+7(383)209-53-40";
  mail="armaseti-opt@yandex.by";
  katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRc0hoZ25kb0FyZUE";
  katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRZ1pVOWJObXB4bms";
  price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRdnJ3Tmx0WC1kOE0";
  break;
  case 'vk':
  telef="+7(383)207-81-82";
  mail="armaseti154@narod.ru";
  katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPReWV4eGd0b1I3LXM";
  katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRbjBBLVhjcElRVUE";
  price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRbloyQ1hlRWtidTA";
  break;
  case 'mt':
  telef="+7(383)209-56-55";
  mail="armaseti154@ya.ru";
  katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRejE2UmpQUkRpX2s";
  katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRT28tRW1BbFBnRGM";
  price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRS1I4bzZSak80ajg";
  break;
  case 'mail':
  telef="+7(383)292-36-84";
  mail="mail-optom@yandex.ru";
  katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRazd6VFR5SDhXNE0";
  katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRYlI1NWlMYUJOSDQ";
  price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRWkVfYXI4SEx3NmM";
  break;
 default:
  telef="+7(383)209-56-40";
  mail="armaseti-opt@yandex.ua";
  katalog_LD="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRc1d2SWV6MElCZkk";
  katalog_strizh="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRUW1UTmhWR0lkMm8";
  price="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRc1lia0ZiVEJyczA";
};
jq_144(function(){ // втавляет данные в форму страницы
  jq_144('#tel_text').append(telef);
  	jq_144('#mail_text').append(mail);
});	
	
}

//--------------------------------------------

//--------------------------------------------

var CallbackRegistry = {};
function scriptRequest(url, onSuccess, onError) {
	var scriptOk = false;
	var callbackName = 'cb' + String(Math.random()).slice(-6);
	url += ~url.indexOf('?') ? '&' : '?';
  	url += 'callback=CallbackRegistry.' + callbackName;
	CallbackRegistry[callbackName] = function(data) {
    	scriptOk = true; 
    	delete CallbackRegistry[callbackName]; 
    	onSuccess(data); 
  	};

  	function checkCallback() {
    	if (scriptOk) return; 
    	delete CallbackRegistry[callbackName];
    	onError(url); 
	}

  	var script = document.createElement('script');
	script.onreadystatechange = function() {
    	if (this.readyState == 'complete' || this.readyState == 'loaded') {
      		this.onreadystatechange = null;
      		setTimeout(checkCallback, 0); 
    		}
  		}
	script.onload = script.onerror = checkCallback;
  	script.src = url;
	document.body.appendChild(script);
}
function ip_data_succ(data) {data_from_ip = data; company = whatcompany(data)} ;
function ip_data_fail(){company = "Армасети"};

//--------------------------------------------

//--------------------------------------------
function emailAddressValid(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};
function whatcompany(data){
	var anpan;
	switch (data.country_code) {
		case "RU":
			switch (data.region_name) {
				case "Томская область":
				anpan="Армторг";
				break;
				case "Омская область":
				anpan="АрмаГАРАНТ";
				break;
				case "Кемеровская область":
				anpan="Запорная арматура";
				break;
				case "Красноярский край":
				anpan="СантехКомплект";
				break;
				case "Алтайский край":
				anpan="СантехРегион";
				break;
				default:
				anpan="Армасети";
				break;
				}
			break;
		case "KZ":
			switch (data.region_name) {
			case "Almaty Qalasy":
			anpan="Алмата";
			break;
			default:
			anpan="Астана";
		}
			break;
		default:
			anpan="Армасети";
	}
	return anpan;
};
/*------------------*/
function whatsource(datas){
	var anpin;
	switch (datas.region_name) {
				case "Томская область":
				anpin="tomsk";
				break;
				case "Омская область":
				anpin="omsk";
				break;
				case "Кемеровская область":
				anpin="kemerovo";
				break;
				case "Красноярский край":
				anpin="krasnoyarsk";
				break;
				case "Алтайский край":
				anpin="barnaul";
				break;
				default:
				anpin="default";
				}
	return anpin;
};


/*-------------------*/


function mcupdate(){
	fetch('https://us11.api.mailchimp.com/2.0/lists/update-member', {
  mode: 'no-cors',
  method: 'post',
  headers: {	
    'Accept': 'application/json',
    'Content-Type': 'text/plain;charset=UTF-8',
    'Origin': 'http://xn--80aapmrxjj.xn--p1ai'
  },
  body: JSON.stringify({
    "apikey": "16dede8bc20c02074e9f18d740a129f7-us11",
    "id": "8afd69659c",
    "email": {
        "email": QueryString.mcmail
    },
    "merge_vars": {
        "MERGE4": data_from_ip.ip,
		"MERGE5": data_from_ip.city,
        "MERGE6": data_from_ip.region_name,
        "MERGE7": data_from_ip.time_zone,
        "MERGE8": company,
		"mc_language": "ru",
    },
})
    }).then(function(response) {return response}).then(function(user) {return user})
  .catch( console.log);
} 
function mcsub(block_id,name_widget, mail_widget){
	var mcfname = $(block_id).find('input[name="'+name_widget+'"]').val(); 
	var mcemail = $(block_id).find('input[name="'+mail_widget+'"]').val(); 
	var company = whatcompany(data_from_ip);
  if (emailAddressValid(mcemail)){
	fetch('https://us11.api.mailchimp.com/2.0/lists/subscribe', {
		  mode: 'no-cors',
		  method: 'post',
		  headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
			"apikey": "16dede8bc20c02074e9f18d740a129f7-us11",
			"id": "8afd69659c",
			"email": {
				"email": mcemail
			},
			"merge_vars": {
				"FNAME":mcfname,
				"MERGE4": data_from_ip.ip,
				"MERGE5": data_from_ip.city,
				"MERGE6": data_from_ip.region_name,
				"MERGE7": data_from_ip.time_zone,
				"MERGE8": company,
				"mc_language": "ru",
			}, 
			"double_optin": false,
			"update_existing": false,
			"replace_interests": false,
			"send_welcome": false
		})
    });}
}
function deleteCookie(name) {
  setCookie(name, "", {
    expires: -1
  })
}
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : "none";
}
function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

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
}
var life_time_source = new Date(new Date().getTime() + 30*24*60*60 * 1000);
var life_time_mail = new Date(new Date().getTime() + 3*24*60*60 * 1000);
if (QueryString.source){
	deleteCookie('source');	
	setCookie('source',QueryString.source, {expires: life_time_source.toUTCString(), path:"/"});
	}
  else {
		if (getCookie('source') != "none"){
			setCookie('source',getCookie('source'), {expires: life_time_source.toUTCString(), path:"/"} );
		}
  			else {setCookie('source',whatsource(data_from_ip), {expires: life_time_source.toUTCString(), path:"/"} );}
	}
SetInterface(getCookie('source'));

if (QueryString.mcmail){
	setCookie('from_mail','yepi', {expires: life_time_mail.toUTCString(), path:"/"} );
	mcupdate();}
if (getCookie('from_mail') == 'yepi'){showpopup=0};
	

if (QueryString.utm_source){
switch (QueryString.utm_source){
	case "direct":
	yaCounter31701781.reachGoal('direct');
	break;
	case "rsya":
	yaCounter31701781.reachGoal('rsya');
	break;
	case "adwords":
	yaCounter31701781.reachGoal('adwords');
	break;
	case "kskdir":
	yaCounter31701781.reachGoal('kskdir');
	break;
	case "tomskdir":
	yaCounter31701781.reachGoal('tomskdir');
	break;
	case "omskdir":
	yaCounter31701781.reachGoal('omskdir');
	break;
	case "barnauldir":
	yaCounter31701781.reachGoal('barnauldir');
	break;
	case "kemerovodir":
	yaCounter31701781.reachGoal('kemerovodir');
	break;
	case "sdvdir":
	yaCounter31701781.reachGoal('sdvdir');
	break;
	case "kskrsya":
	yaCounter31701781.reachGoal('kskrsya');
	break;
	case "tomskrsya":
	yaCounter31701781.reachGoal('tomskrsya');
	break;
	case "omskrsya":
	yaCounter31701781.reachGoal('omskrsya');
	break;
	case "barnaulrsya":
	yaCounter31701781.reachGoal('barnaulrsya');
	break;
	case "kemerovorsya":
	yaCounter31701781.reachGoal('kemerovorsya');
	break;
	case "sdvrsya":
	yaCounter31701781.reachGoal('sdvrsya');
	break;
	default:
	break;
};
};
if (QueryString.download){
	var url1;
	switch (QueryString.download){
		case 'prise': url1 = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRWkVfYXI4SEx3NmM";break;
		case 'cat_ld': url1 = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRazd6VFR5SDhXNE0";break;
		case 'cat_str': url1 = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRYlI1NWlMYUJOSDQ";break;}
function createIframe(name, src, debug) {src = src || 'javascript:false'; var tmpElem = document.createElement('div');tmpElem.innerHTML = '<iframe name="' + name + '" id="' + name + '" src="' + src + '">';var iframe = tmpElem.firstChild;if (!debug) {iframe.style.display = 'none';}document.body.appendChild(iframe);return iframe;}
createIframe('download', url1);
}
