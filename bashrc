#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '

source "$HOME/.bashrc_flatpak_alias"

alias update='yay -Syyu --noconfirm --sudoloop; flatpak update --assumeyes'
alias vim='nvim'
alias money='python3 ~/Documents/Projects/Code/Python/MoneyManage/main.py'
alias vimpad='nvim /tmp/$RANDOM.txt'
alias dotsync="cwd=$(pwd); cd ~/dotsync; bash ~/dotsync/sync.sh; cd $cwd"

neofetch

export GITHUB_USERNAME="Ethanscharlie"
# export QT_QPA_PLATFORMTHEME="qt5ct"

# Created by `pipx` on 2024-05-23 13:29:16
export PATH="$PATH:/home/ethanscharlie/.local/bin"

PATH="/home/ethanscharlie/perl5/bin${PATH:+:${PATH}}"; export PATH;
PERL5LIB="/home/ethanscharlie/perl5/lib/perl5${PERL5LIB:+:${PERL5LIB}}"; export PERL5LIB;
PERL_LOCAL_LIB_ROOT="/home/ethanscharlie/perl5${PERL_LOCAL_LIB_ROOT:+:${PERL_LOCAL_LIB_ROOT}}"; export PERL_LOCAL_LIB_ROOT;
PERL_MB_OPT="--install_base \"/home/ethanscharlie/perl5\""; export PERL_MB_OPT;
PERL_MM_OPT="INSTALL_BASE=/home/ethanscharlie/perl5"; export PERL_MM_OPT;

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
