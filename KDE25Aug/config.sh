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
  "plasma"
  # "udiskie" # Auto disk mounting

  # Background Services
  "pipewire"
  "mullvad-vpn-bin"
  "syncthing"
  "mpd"

  # Theming
  "python-pywal"
  "lxappearance"
  # "adwaita-dark"
  # "materia-gtk-theme"

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
  "xorg-xrandr"

  # # Code stuff
  # "maven"
  # "python-pipenv"
  # "nodejs"
  # "ruff"
  # "nlohmann-json"
  # "sdl2"
  # "sdl3"
  # "sdl3_gfx"
  # "sdl3_image"
  # "sdl3_mixer"
  # "sdl3_ttf"
  # "rust"
  # "glib2"
  # "nasm"

  # General Graphical software
  "steam"
  "ldtk"
  "gparted"
  "veracrypt"

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
  "io.gitlab.librewolf-community"
  "org.libreoffice.LibreOffice"
  "dev.vencord.Vesktop"
  "com.discordapp.Discord"
  "org.gimp.GIMP"
  "org.keepassxc.KeePassXC"
  "xyz.xclicker.xclicker"
  "com.obsproject.Studio"
  "io.gitlab.adhami3310.Impression"
  "tv.kodi.Kodi"
  "io.github.ungoogled_software.ungoogled_chromium"
  "org.pitivi.Pitivi"
  "org.onlyoffice.desktopeditors"
  "io.gitlab.news_flash.NewsFlash"
  "org.inkscape.Inkscape"
  "org.raspberrypi.rpi-imager"
  "com.github.libresprite.LibreSprite"
  "com.brave.Browser"
  "de.wagnermartin.Plattenalbum"
  "org.gnome.gitlab.YaLTeR.VideoTrimmer"

  # Code
  "com.jetbrains.IntelliJ-IDEA-Community"
  "com.vscodium.codium"
  "com.google.AndroidStudio"
)
