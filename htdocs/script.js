<!--
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
var gads = document.createElement('script');
gads.async = true;
gads.type = 'text/javascript';
var useSSL = 'https:' == document.location.protocol;
gads.src = (useSSL ? 'https:' : 'http:') + 
'//www.googletagservices.com/tag/js/gpt.js';
var node = document.getElementsByTagName('script')[0];
node.parentNode.insertBefore(gads, node);
})();

googletag.cmd.push(function(){
var map1 = googletag.sizeMapping().
    addSize([740, 100], [728, 90]).
    addSize([480, 100], [468, 60]).
    build();
if(document.pagegroup=='top'){
	googletag.defineSlot('/9430482/tm7', [728,90], 'gpt-tm7').addService(googletag.pubads());
	googletag.defineSlot('/9430482/tmr', [300,250], 'gpt-tmr').addService(googletag.pubads());
	googletag.defineSlot('/9430482/tf7', [728,90], 'gpt-tf7').addService(googletag.pubads());
}else if(document.pagegroup=='search'){
	googletag.defineSlot('/9430482/sh4', [468,60], 'gpt-sh4').addService(googletag.pubads());
	googletag.defineSlot('/9430482/sfr-l', [300,250], 'gpt-sfr-l').addService(googletag.pubads());
	googletag.defineSlot('/9430482/sfr-r', [300,250], 'gpt-sfr-r').addService(googletag.pubads());
}else if(document.pagegroup=='howto'){
	googletag.defineSlot('/9430482/hhr', [300,250], 'gpt-hhr').addService(googletag.pubads());
	googletag.defineSlot('/9430482/hm7', [728,90], 'gpt-hm7').addService(googletag.pubads());
	googletag.defineSlot('/9430482/hf7', [728,90], 'gpt-hf7').addService(googletag.pubads());
}else if(document.pagegroup=='other'){
	googletag.defineSlot('/9430482/hhr', [300,250], 'gpt-omr').addService(googletag.pubads());
	googletag.defineSlot('/9430482/hm7', [728,90], 'gpt-om7').addService(googletag.pubads());
	googletag.defineSlot('/9430482/hf7', [320,50], 'gpt-of7').addService(googletag.pubads()).defineSizeMapping(map1);
}
googletag.pubads().enableSingleRequest();
googletag.enableServices();
});
// googletag.pubads().set("page_url", "http://sevenzip.osdn.jp/");

$('#search-box').append('<gcse:searchbox-only></gcse:searchbox-only>');
$('#search-results').append('<gcse:searchresults-only></gcse:searchresults-only>');


$(function(){
if(document.pagegroup=='top'){
	googletag.cmd.push(
function(){googletag.display('gpt-tm7');},
function(){googletag.display('gpt-tmr');},
function(){googletag.display('gpt-tf7');}
	);
}else if(document.pagegroup=='search'){
	googletag.cmd.push(
function(){googletag.display('gpt-sh4');},
function(){googletag.display('gpt-sfr-l');},
function(){googletag.display('gpt-sfr-r');}
	);
}else if(document.pagegroup=='howto'){
	googletag.cmd.push(
function(){googletag.display('gpt-hhr');},
function(){googletag.display('gpt-hm7');},
function(){googletag.display('gpt-hf7');}
	);
}else if(document.pagegroup=='other'){
	googletag.cmd.push(
function(){googletag.display('gpt-omr');},
function(){googletag.display('gpt-om7');},
function(){googletag.display('gpt-of7');}
	);
}

if($("#sidebar").height() < $("#contents").height())$("#sidebar").height($("#contents").height());

var ins ='<A href="http://www.7-zip.org/">English</A><BR>'+
'<A href="https://sparanoid.com/lab/7z/">Chinese Simpl.</A><BR>'+
'<A href="https://www.developershome.com/7-zip/">Chinese Trad.</A><BR>'+
'<A href="https://7zip-eo.rnbastos.com/">Esperanto</A><BR>'+
'<A href="https://www.7-zip.fr/">French</A><BR>'+
'<A href="https://www.7-zip.de/">German</A><BR>'+
'<A href="https://7zip.idfoss.org/">Indonesian</A><BR>'+
'<B>Japanese</B><BR>'+
'<A href="https://7-zip.ir/">Persian</A><BR>'+
'<A href="https://7zip.rnbastos.com/">Portuguese Brazil</A><BR>'+
'<A href="https://7zip-es.updatestar.com/">Spanish</A><BR>'+
'<A href="http://7zip-thai.inetbridge.net/">Thai</A><BR>'+
'<A href="https://7zip-vi.updatestar.com/">Vietnamese</A><BR>';
$("p#language").prepend(ins);


(function(w,d,s,n,f,js,p){
p=/^http:/.test(d.location)?'http:':'https:';
n=d.getElementsByTagName(s)[0];
f=function(url,id){if(!d.getElementById(id)){
	js=d.createElement(s);
	js.src=url;
	js.type='text/javascript';
	js.async=1;
	n.parentNode.insertBefore(js,n);
}}
if(d.pagegroup=='search' || d.pagegroup=='top')f(p+'//www.google.com/cse/cse.js?cx=008238061252304698836:WMX-51604225', 'js-gsearch');
})(window,document,'script');

});
// -->

