#!/usr/bin/env bash

# Add this script to your wm startup file.
#
sleep 1

DIR="$HOME/.config/polybar"

# Terminate already running bar instances
killall -q polybar

# Wait until the processes have been shut down
while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done

if type "xrandr"; then
  for m in $(xrandr --query | grep " connected" | cut -d" " -f1); do
     MONITOR=$m polybar -q top -c "$DIR"/config.ini &
#     MONITOR=$m polybar -q bottom -c "$DIR"/config.ini &
  done
else
  polybar --reload example &
fi
