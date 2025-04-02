#!/bin/bash

# Define the command to check for updates using yay
updates=$(yay -Qu 2>/dev/null | wc -l)

# Output the updates count to Polybar
if [ "$updates" -gt 0 ]; then
    echo " %{F#FFFF00} $updates " # Change color and icon as desired
else
    echo " Up to date "
fi

