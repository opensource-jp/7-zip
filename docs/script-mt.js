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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-6708582-1', 'auto');
ga('send', 'pageview');

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
var map1 = googletag.sizeMapping().addSize([480, 100], [300, 250]).build();
var map2 = googletag.sizeMapping().addSize([740, 100], [728, 90]).addSize([480, 100], [468, 60]).build();
googletag.defineSlot('/9430482/tm7', [320,50], 'gpt-tm7').addService(googletag.pubads()).defineSizeMapping(map2);
googletag.defineSlot('/9430482/tmr', [320,50], 'gpt-tmr').addService(googletag.pubads()).defineSizeMapping(map1);
googletag.defineSlot('/9430482/tf7', [320,50], 'gpt-tf7').addService(googletag.pubads()).defineSizeMapping(map2);
googletag.pubads().enableSingleRequest();
googletag.enableServices();
});

googletag.cmd.push(
	function(){googletag.display('gpt-tm7');},
	function(){googletag.display('gpt-tmr');},
	function(){googletag.display('gpt-tf7');}
);

