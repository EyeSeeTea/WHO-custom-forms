#!/bin/bash

if [[ -f $1 ]]; then
    prettier "$1" --write
elif [[ -d $1 ]]; then
    prettier "$1/**/*.{ts,js,json,css,html}" --write
else
    prettier "./**/*.{ts,js,json,css,html}" --write
fi
