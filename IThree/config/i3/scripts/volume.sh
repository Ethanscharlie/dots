#!/bin/bash

# Get the window ID of the currently focused window
WINDOW_ID=$(xprop -root _NET_ACTIVE_WINDOW | awk -F'#' '{print $2}')

# Find the audio stream associated with the window ID, filtering out output related to the "profiler" module
STREAM_ID=$(pw-cli info all | grep -v "profiler" | grep -B 2 -e "window = $WINDOW_ID" | awk '/Stream/ {print $2}')

# Adjust the volume of the stream by the given amount
pactl set-sink-input-volume $STREAM_ID $1

