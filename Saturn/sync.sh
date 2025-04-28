#!/bin/bash

source config.sh

# =======================================================================================
# Wallpapers
# =======================================================================================
cp background "$HOME/background"
cp lockbackground "$HOME/lockbackground"

# =======================================================================================
# Copy .bashrc
# =======================================================================================
cp bashrc "$HOME/.bashrc"

# =======================================================================================
# Copy .config
# =======================================================================================
USER_CONFIG_DIR="$HOME/.config"
COPY_FROM_CONFIG_DIR="config"
TMP_BACKUP_DIR="/tmp/config$RANDOM"
copy_from_config_names=( $(ls $COPY_FROM_CONFIG_DIR) )
user_config_names=( $(ls $USER_CONFIG_DIR) )

mkdir $TMP_BACKUP_DIR
for cf_config_name in ${copy_from_config_names[@]}; do
  if [ -d "$USER_CONFIG_DIR/$cf_config_name" ]; then
    echo "Removing old ${cf_config_name} to $TMP_BACKUP_DIR"
    mv "$USER_CONFIG_DIR/$cf_config_name" "$TMP_BACKUP_DIR/$cf_config_name"
  fi

  echo "Copying new ${cf_config_name} to ${USER_CONFIG_DIR}"
  cp -r "${COPY_FROM_CONFIG_DIR}/$cf_config_name" "${USER_CONFIG_DIR}/$cf_config_name"
done

hyprctl reload

# =======================================================================================
# Ensure yay is installed
# =======================================================================================
if which "yay" > /dev/null 2>&1; then
  echo "We have yay"
else
  echo "We do not have yay"
  sudo pacman -Sy git base-devel
  cwd=$(pwd)
  cd /tmp
  git clone https://aur.archlinux.org/yay.git
  cd yay
  makepkg -si
  cd $cwd
fi

# =======================================================================================
# Themeing
# =======================================================================================
wal -i ~/background.jpeg

# Slick greeter background
sudo cp "config/lightdm/slick-greeter.conf" "/etc/lightdm/slick-greeter.conf"
sudo mkdir /etc/backgrounds
sudo cp lockbackground /etc/backgrounds/lockbackground

# =======================================================================================
# Copy fonts
# =======================================================================================
mkdir ~/.fonts
cp -r fonts/* ~/.fonts

if [ "$2" == "copy" ]; then
  exit
fi

# =======================================================================================
# Install packages
# =======================================================================================
echo "Installing some base packages"

if which "flatpak" > /dev/null 2>&1; then
  echo "We do have flatpak"
else
  sudo yay -Sy flatpak --noconfirm --sudoloop
fi

echo "Installing from yay: ${package_list[@]}"
for package in ${package_list[@]}; do
  if which $package > /dev/null 2>&1; then
    echo "$package is already installed"
  else
    yay -S $package --noconfirm --sudoloop --needed
  fi
done

# flatpak packages
bash_alias_file="$HOME/.bashrc_flatpak_alias"
rm $bash_alias_file
touch $bash_alias_file
for package in ${flatpak_list[@]}; do
  if ! flatpak list --app | grep -q "$package"; then
    flatpak install $package --assumeyes --system --noninteractive
  else
    echo "$package is already installed, skipping..."
  fi

  app_name=$(echo $package | awk -F '.' '{print tolower($NF)}')
  echo "alias $app_name=\"flatpak run $package\"" >> $bash_alias_file
done
