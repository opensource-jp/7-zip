(function() {
var s = document.createElement('script');
s.async = true;
s.src = 'https://www.googletagmanager.com/gtag/js?id=UA-6708582-1';
document.getElementsByTagName('head')[0].appendChild(s);
})();

(function() {
var s = document.createElement('script');
s.async = true;
s.src = 'https://www.googletagservices.com/tag/js/gpt.js';
document.getElementsByTagName('head')[0].appendChild(s);
})();

(function() {
var s = document.createElement('script');
s.async = true;
s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
document.getElementsByTagName('head')[0].appendChild(s);
})();

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-6708582-1');

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

googletag.cmd.push(function(){
	var map7 = googletag.sizeMapping().addSize([740, 100], [728, 90]).addSize([480, 100], [468, 60]).build();
	var i="9430482";s=decodeURIComponent("%2f");s=s+i+s;
	googletag.defineSlot(s+'hhr', [300,250], 'gpt-hhr').addService(googletag.pubads());
	googletag.defineSlot(s+'hmr', [300,250], 'gpt-hmr').addService(googletag.pubads());
	googletag.defineSlot(s+'hm7', [320,50], 'gpt-hm7').addService(googletag.pubads()).defineSizeMapping(map7);
	googletag.defineSlot(s+'hf7', [320,50], 'gpt-hf7').addService(googletag.pubads()).defineSizeMapping(map7);
	googletag.pubads().enableSingleRequest();
	googletag.enableServices();
});

googletag.cmd.push(
function(){googletag.display('gpt-hhr');},
function(){googletag.display('gpt-hmr');},
function(){googletag.display('gpt-hm7');},
function(){googletag.display('gpt-hf7');}
);

(adsbygoogle = window.adsbygoogle || []).push({
	google_ad_client: "ca-pub-0405760482567529",
	enable_page_level_ads: true
});

