#!/bin/bash

if [[ -d $1 ]]; then
    prettier $1/**/**.{ts,js,json,scss,css,html} --write --end-of-line lf
elif [[ (-f $1) && ($1 == *.json) ]]; then
    prettier $1 --write --end-of-line lf
else
    prettier *.{ts,js,json,scss,css,html} --write --end-of-line lf
fi
