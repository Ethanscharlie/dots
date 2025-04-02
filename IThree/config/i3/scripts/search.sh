#!/bin/bash

search=$(echo "" | dmenu -p "Search: ")

if [[ -n "$search" ]]; then
    # Replaces ' ' with +
    search=$(echo "${search[@]}" | tr ' ' '+')

    eval "firefox $1.com/search?q=$search"
fi
