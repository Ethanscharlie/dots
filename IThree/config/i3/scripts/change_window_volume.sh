#!/bin/bash

# Get the ID of the currently focused window
window_id=$(xdotool getwindowfocus)

# Get the name of the audio sink for the currently focused window
sink=$(pacmd list-sink-inputs | grep "application.process.binary" | grep -i "$(xprop -id $window_id | grep -m 1 "WM_CLASS" | awk -F '"' '{print $4}')" -B 1 | grep "name:" | awk '{print $NF}')

# Increase or decrease the volume of the sink by 5%
if [ "$1" == "up" ]; then
    pactl set-sink-input-volume "$sink" +5%
elif [ "$1" == "down" ]; then
    pactl set-sink-input-volume "$sink" -5%
fi

