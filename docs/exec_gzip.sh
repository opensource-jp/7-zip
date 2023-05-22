#!/bin/bash

for i in *.noja *.html *.js *.css *.txt
do
gzip -c -9 $i > $i.gz
done

for i in howto/*.html
do
perl -07 -pe 's|<link rel="stylesheet" type="text/css" href="https://sevenzip.osdn.jp/style-howto.css">.*|<style type="text/css">|gs' $i > $i.temp
cat style-howto.css >> $i.temp
perl -07 -pe 's|.*<link rel="stylesheet" type="text/css" href="https://sevenzip.osdn.jp/style-howto.css">|</style>|gs' $i >> $i.temp
gzip -cc -9 $i.temp > $i.gz 
rm $i.temp
done

for i in download.html 7z.html sdk.html faq.html support.html logos.html links.html
do
perl -07 -pe 's|<link rel="stylesheet" type="text/css" href="/style-m.css">.*|<style type="text/css">|gs' $i > $i.temp
cat style-m.css >> $i.temp
perl -07 -pe 's|.*<link rel="stylesheet" type="text/css" href="/style-m.css">|</style>|gs' $i >> $i.temp
gzip -cc -9 $i.temp > $i.gz
rm $i.temp
done

