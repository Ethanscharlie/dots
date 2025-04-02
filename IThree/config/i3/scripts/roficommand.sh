#!/bin/bash

# Define a list of commands
commands=("ls" "echo hello world" "firefox")

# Use Rofi to prompt the user to select a command
selected_command=$(echo "${commands[@]}" | rofi -dmenu -p "Run command: ")

# Execute the selected command
eval "$selected_command"

