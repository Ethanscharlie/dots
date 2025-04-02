#!/bin/bash

essential_packages=(
  "yay"
)

package_list=(
  # System
  "grub" 
  "linux" 
  "base" 
  "pacman" 
  "systemd" 
  "coreutils" 
  "bash"
  "sudo"
  "base-devel"
  "lightdm"
  "lightdm-slick-greeter"
  "base"
  "linux"
  "linux-firmware"
  "linux-headers"
  "pipewire"
  "ca-certificates"
  "amd-ucode"
  "networkmanager"
  "flatpak"
  "efibootmgr"
  "mesa-utils"
  "spirv-tools"
  "exfat-utils"

  # Xorg
  "xorg"
  "xorg-xinit"

  # My system
  "i3"
  "nm-tray"
  "lightscreen"
  "feh"
  "xclip"
  "polybar"
  "i3lock-fancy"
  "mpd"
  "picom"
  "rofi"
  "bluez"
  "bluez-utils"
  "pipewire"
  "mullvad-vpn-bin"
  "brightnessctl"
  "syncthing"
  "arandr"
  "malcontent"
  "xdg-desktop-portal-gtk"
  "dunst"
  "blueman"
  "network-manager-applet"
  "nm-connection-editor"

  # My Wayland System
  "waybar"
  "wofi"
  "hyprland"
  "hyprpaper"
  "wdisplays"
  "wl-clipboard"
  "xorg-xwayland"
  "sddm"

  # Theming
  "python-pywal"
  "lxappearance"
  "adwaita-dark"
  "materia-gtk-theme"
  "lightdm-settings"

  # Fonts
  "ttf-roboto-mono"
  # "ttf-iosevka-nerd" # Needed
  "ttf-icomoon-feather-git"
  "ttf-dejavu" 
  "ttf-hack"
  "ttf-liberation"
  "noto-fonts"

  # CLI
  "gdb"
  "figlet"
  "zip"
  "neovim"
  "git"
  "neofetch"
  "nmtui"
  "unzip"
  "cmake"
  "wget"
  "ranger"
  "github-cli"
  "mpc"
  "tmux"
  "wine"
  "htop"
  "samba"
  "ncdu"
  "yt-dlp"
  "xorg-xrandr"

  # Code stuff
  "nodejs"
  "ruff"
  "nlohmann-json"
  "sdl2_gfx"
  "sdl2_image"
  "sdl2_mixer"
  "sdl2_ttf"
  "rust"
  "glib2"

  # General Graphical software
  "thunar"
  "thunar-archive-plugin"
  "video-trimmer"
  "kitty"
  "steam"
  "ario"
  "ldtk"
  "gparted"
  "chromium"
  "veracrypt"
  "libresprite-bin"
  "gnome-disks"
  "rpi-imager"
  "discord-canary"

  # Games
  "atlauncher-bin"
  "retroarch"
  "r2modman-appimage"
)

flatpak_list=(
  # Utils and basic software
  "io.github.flattool.Warehouse"
  "page.codeberg.libre_menu_editor.LibreMenuEditor"
  "org.pulseaudio.pavucontrol"
  "io.missioncenter.MissionCenter"
  "com.github.weclaw1.ImageRoll"
  "org.gnome.baobab"
  "org.gnome.Boxes"
  "org.gnome.Calendar"
  "org.freedesktop.Platform"

  # Games
  "io.github.shiiion.primehack" #1.0.7a

  # General Graphical software
  "org.qbittorrent.qBittorrent"
  "me.iepure.devtoolbox"
  "md.obsidian.Obsidian"
  "org.videolan.VLC"
  "org.mozilla.firefox"
  "org.libreoffice.LibreOffice"
  "dev.vencord.Vesktop"
  "com.discordapp.Discord"
  "org.gimp.GIMP"
  "org.keepassxc.KeePassXC"
  "xyz.xclicker.xclicker"
  "com.obsproject.Studio"
  "io.gitlab.adhami3310.Impression"
  "tv.kodi.Kodi"
)
