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
	googletag.defineSlot('/9430482/hf7', [728,90], 'gpt-of7').addService(googletag.pubads());
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

var ins ='<TABLE cellpadding=2 cellspacing=0 border=0 width="100%">'+
'<TR><TD><HR></TD></TR>'+
'<TR><TD>'+
'<form action="https://www.paypal.com/cgi-bin/webscr" method="post">'+
'<input type="hidden" name="cmd" value="_s-xclick">'+
'<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">'+
'<input type="image" src="https://www.paypalobjects.com/ja_JP/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">'+
'<img alt="" border="0" src="https://www.paypalobjects.com/ja_JP/i/scr/pixel.gif" width="1" height="1">'+
'</form>'+
'</TD></TR>'+
'<TR><TD><A href="http://sourceforge.net/projects/sevenzip/"><IMG src="http://sourceforge.net/sflogo.php?group_id=14481&amp;type=11" width=120 height=30 border=0 alt="7-Zip at SourceForge.net"></A></TD></TR>'+
'<TR><TD><a href="http://osdn.jp/projects/sevenzip/"><img src="http://osdn.jp/sflogo.php?group_id=3882&amp;type=1" width="96" height="31" border="0" alt="OSDN"></a></TD></TR>'+
'<TR><TD><HR></TD></TR>'+
'</TABLE>';
ins +='<A href="http://www.7-zip.org/">English</A><BR>'+
'<A href="http://7zip.usb-drivers.org/">Afrikaans</A><BR>'+
'<A href="http://7zip-ar.com/">Arabic</A><BR>'+
'<A href="http://sparanoid.com/lab/7z/">Chinese Simpl.</A><BR>'+
'<A href="http://www.developershome.com/7-zip/">Chinese Trad.</A><BR>'+
'<A href="http://7zip-eo.rnbastos.com/">Esperanto</A><BR>'+
'<A href="http://www.spiroo.be/7zip/">French</A><BR>'+
'<A href="http://www.7-zip.de/">German</A><BR>'+
'<A href="http://7-zip.hu/">Hungarian</A><BR>'+
'<B>Japanease</B><BR>'+
'<A href="http://7-zip.ir/">Persian</A><BR>'+
'<A href="http://7-zip.org.pl/">Polish</A><BR>'+
'<A href="http://7zip.rnbastos.com/">Portuguese Brazil</A><BR>'+
'<A href="http://7-zip.org.ua/ru/">Russian</A><BR>'+
// '<A href="http://7-zip.com.mx">Spanish</A><BR>'+
'<A href="http://7zip-thai.inetbridge.net/">Thai</A><BR>'+
'<A href="http://7-zip.org.ua/">Ukrainian</A><BR>';
$("p#language").prepend(ins);

$('body').prepend('<div id="synd-link">'+
'<div class="twitter-button"><a href="http://twitter.com/share" class="twitter-share-button" data-count="horizontal" data-lang="ja"></a></div>'+
'<div class="facebook-button"><div class="fb-like" data-send="false" data-layout="button_count"></div></div>'+
'<div class="gplus-button"><div class="g-plusone" data-size="medium"></div></div>'+
'<div onClick="adtest()">ad</div>'+
'</div>');

(function(w,d,s,n,f,js,p){
p=/^http:/.test(d.location)?'http:':'https:';
n=d.getElementsByTagName(s)[0];
f=function(url,id){if(!d.getElementById(id)){
	js=d.createElement(s);
	js.src=url;
	js.async=1;
	n.parentNode.insertBefore(js,n);
}}
f(p+'//connect.facebook.net/ja_JP/all.js#xfbml=1&appId=621665304574119', 'facebook-jssdk');
if(d.pagegroup=='search' || d.pagegroup=='top')f(p+'//www.google.com/cse/cse.js?cx=008238061252304698836:WMX-51604225', 'js-gsearch');
f(p+'//platform.twitter.com/widgets.js', 'twitter-wjs');
w.___gcfg={lang:'ja'};
f('https://apis.google.com/js/plusone.js','plusonejs');
})(window,document,'script');

});
function adtest(){location.href='/adtest3.html';}

