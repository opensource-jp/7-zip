(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-6708582-1', 'auto');
ga('send', 'pageview');

$('<body>').append('<div id="fb-root"></div>');
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


$(function(){
var ins ='<TABLE cellpadding=2 cellspacing=0 border=0 width="100%">'+
'<TR><TD><HR></TD></TR>'+
'<TR><TD><A href="http://sourceforge.net/projects/sevenzip/"><IMG src="http://sourceforge.net/sflogo.php?group_id=14481&amp;type=11" width=120 height=30 border=0 alt="7-Zip at SourceForge.net"></A></TD></TR>'+
'<TR><TD><a href="http://osdn.jp/projects/sevenzip/"><img src="http://osdn.jp/sflogo.php?group_id=3882&amp;type=1" width="96" height="31" border="0" alt="OSDN"></a></TD></TR>'+
'<TR><TD><HR></TD></TR>'+
'</TABLE>';

ins +='<A href="http://www.7-zip.org/">English</A><BR>'+
'<A href="http://7zip.usb-drivers.org/">Afrikaans</A><BR>'+
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
'<A href="http://7-zip.com.mx">Spanish</A><BR>'+
'<A href="http://7-zip.org.ua/">Ukrainian</A><BR>'+
'<A href="http://7zip-vi.updatestar.com/">Vietnamese</A><BR>';
$("p#language").prepend(ins);

var etitle = encodeURIComponent(document.title);
var rurl = $('link[rel=canonical]').attr('href');
if (typeof rurl == 'undefined') rurl = location.href;
var eurl = encodeURIComponent(rurl);

var ins ='<div id="links-panel">';

ins +='<div class="fb-like" data-href="' + rurl + '" data-send="false" data-layout="button_count"></div>';
ins +='<div class="tweet-button"><a href="http://twitter.com/share" class="twitter-share-button" data-count="horizontal" data-lang="ja"></a><scr'+'ipt type="text/javascript" src="http://platform.twitter.com/widgets.js"></scr'+'ipt></div>';
ins +='<div class="g-plusone" data-size="medium" data-href="http://sevenzip.osdn.jp/"></div>';
ins +='<a href="http://b.hatena.ne.jp/entry/'+eurl+'" class="hatena-bookmark-button" data-hatena-bookmark-layout="standard"><img src="http://b.st-hatena.com/images/entry-button/button-only.gif" width="20" height="20"></a><script type="text/javascript" src="http://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></scr'+'ipt>'
ins +='</div>';

$('body').prepend(ins);

if($("#sidebar").height() < $("#contents").height())$("#sidebar").height($("#contents").height());

window.___gcfg = {lang: 'ja'};
(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
po.src = 'https://apis.google.com/js/plusone.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

});

function adtest() {
location.href = "/adtest3.html";
}


