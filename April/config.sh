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
  "gnome"
  "gnome-shell-extentions"
  "extension-manager"
  "xclip"
  "mpd"
  "pipewire"
  "mullvad-vpn-bin"
  "syncthing"
  "malcontent"

  "gdm"

  # Theming
  "python-pywal"
  "lxappearance"
  "adwaita-dark"
  "materia-gtk-theme"

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
  "video-trimmer"
  "steam"
  "ario"
  "ldtk"
  "gparted"
  "chromium"
  "veracrypt"
  "libresprite-bin"
  "rpi-imager"

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
  "org.mapeditor.Tiled"
)
