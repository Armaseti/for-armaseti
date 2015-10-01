//--------------------------------------------
var telef;
  var mail;
  var ref1;
  var ref2;
  var ref3;
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
    if (typeof query_string[pair[0]] === "undefined") {
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
  ref1="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRTkMxOVVyR2pGSWM";
  ref2="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRcjR5aDVmSEFJVUE";
  ref3="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRTjJYbFlzMzAtLUE";
  break;
  case 'tomsk':
  telef="+7(913)376-11-63";
  mail="arma-seti@narod.ru";
  ref1="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRa0w3QmN0ZEtwaUk";
  ref2="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRM2V0eWVaUU1Yb3c";
  ref3="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRN1N6M2J6TXVhWlk";
  break;
  case 'omsk':
  telef="+7(913)376-22-19";
  mail="arma-seti@ya.ru";
  ref1="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRelpXQ29WTW16Rnc";
  ref2="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRZEJqS1NfVnBWU0U";
  ref3="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRNUxWZXhRMGR3Ulk";
  break;
  case 'kemerovo':
  telef="+7(913)396-66-92";
  mail="arma-seti@yandex.by";
  ref1="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRelA1emFwaFRmNEk";
  ref2="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRRUxGQk1ndzRpbmM";
  ref3="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRclFzWWxrSFRjbDQ";
  break;
  case 'barnaul':
  telef="+7(913)396-63-07";
  mail="arma-seti@yandex.kz";
  ref1="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRUS1NM0Y3NmJ0cHM";
  ref2="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRYzlidURDR0tReE0";
  ref3="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRTmpPWXNBSDNuQVE";
  break;
  case 'other':
  telef="+7(913)376-10-38";
  mail="arma-seti@yandex.ru";
  ref1="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRVWtIdVp0ZW1OX1U";
  ref2="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRWnllUjdsV0gyR3M";
  ref3="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRM3Utb204T0JMeEU";
  break;
  case 'ya':
  telef="+7(383)207-86-29";
  mail="armaseti-opt@yandex.ru";
  ref1="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPROWEzRW11OUQwTUU";
  ref2="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPReVFLb1dOREM3eFE";
  ref3="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRU3M4LUVLYW5UN0E";
  break;
  case 'rsya':
  telef="+7(383)207-86-98";
  mail="armaseti-opt@narod.ru";
  ref1="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRdlVTMFdQbGVPZ2c";
  ref2="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRRl9Gek9QcWNFU28";
  ref3="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRSnQ4UVprRGt0ZVE";
  break;
  case 'ga':
  telef="+7(383)207-98-93";
  mail="armaseti-opt@ya.ru";
  ref1="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRdUZCNHNzcXpLNlU";
  ref2="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRbThDTkhPRjRhMWc";
  ref3="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRNGZVSU81LUw4TTA";
  break;
  case 'kms':
  telef="+7(383)209-53-40";
  mail="armaseti-opt@yandex.by";
  ref1="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRc0hoZ25kb0FyZUE";
  ref2="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRZ1pVOWJObXB4bms";
  ref3="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRdnJ3Tmx0WC1kOE0";
  break;
  case 'vk':
  telef="+7(383)207-81-82";
  mail="armaseti154@narod.ru";
  ref1="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPReWV4eGd0b1I3LXM";
  ref2="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRbjBBLVhjcElRVUE";
  ref3="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRbloyQ1hlRWtidTA";
  break;
  case 'mt':
  telef="+7(383)209-56-55";
  mail="armaseti154@ya.ru";
  ref1="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRejE2UmpQUkRpX2s";
  ref2="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRT28tRW1BbFBnRGM";
  ref3="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRS1I4bzZSak80ajg";
  break;
 default:
  telef="+7(383)209-56-40";
  mail="armaseti-opt@yandex.ua";
  ref1="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRc1d2SWV6MElCZkk";
  ref2="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRUW1UTmhWR0lkMm8";
  ref3="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0BwqEBfJv4yPRc1lia0ZiVEJyczA";
};}

//--------------------------------------------

//--------------------------------------------
var data_from_ip = {"ip":"","country_code":"","country_name":"","region_code":"","region_name":"","city":"","zip_code":"","time_zone":"","latitude":"","longitude":"","metro_code":""};
var company;
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
scriptRequest('http://freegeoip.net/json/', ip_data_succ, ip_data_fail);
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
    'Content-Type': 'application/json'
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
	var mcfname = $block_id.find('input[name="'+name_widget+'"]').val(); 
	var mcemail = $block_id.find('input[name="'+mail_widget+'"]').val(); 
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
var lifetime = new Date(new Date().getTime() + 30*24*60*60 * 1000);
lifetime.toUTCString();


if (QueryString.source){
  setCookie('source',QueryString.source, {expires: lifetime.toUTCString()})
	}
  else {
		if (getCookie('source') != "none"){
			setCookie('source',getCookie('source'), {expires: lifetime.toUTCString()} );
		}
  			else {setCookie('source',whatsource(data_from_ip), {expires: lifetime.toUTCString()} );}
	}
SetInterface(getCookie('source'));
console.log("установка интерфейса");
jq_144(function(){ // втавляет данные в форму страницы
  console.log("interf append"); 
  jq_144('#tel_text').append(telef);
  	jq_144('#mail_text').append(mail);
  
});
if (QueryString.mcmail){mcupdate()};

if (QueryString.utm_source){
switch (QueryString.utm_source){
	case "direct":
	yaCounter31701781.reachGoal('direct');
      console.log("profit");
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
 
