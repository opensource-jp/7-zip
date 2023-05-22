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
	var map1 = googletag.sizeMapping().addSize([740, 100], [728, 90]).addSize([480, 100], [468, 60]).build();
	googletag.defineSlot('/9430482/of7', [320,50], 'gpt-of7').addService(googletag.pubads()).defineSizeMapping(map1);
	googletag.defineSlot('/9430482/omr', [300,250], 'gpt-omr').addService(googletag.pubads());
	googletag.defineSlot('/9430482/ofr', [300,250], 'gpt-ofr').addService(googletag.pubads());
	googletag.pubads().enableSingleRequest();
	googletag.enableServices();
});

googletag.cmd.push(
function(){googletag.display('gpt-of7');},
function(){googletag.display('gpt-omr');},
function(){googletag.display('gpt-ofr');}
);

