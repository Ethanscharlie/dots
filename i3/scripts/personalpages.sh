#!/bin/bash

options=(
    "mail.proton.me/u/0/inbox" 
    "leetcode.com/" 
    "github.com/" 
    "chat.openai.com/?__cf_chl_f_tk=TdMIba1shGlFlsO_PcqQH_IMGCyjgUOfyHnyajq3N44-1681916376-0-gaNycGzNGKU"
)

selected=$(echo -e "${options[@]}" | dmenu -i -p "Select an option:")

if [[ -n "$selected" ]]; then
    eval 'firefox -P "personal" $selected'
fi
