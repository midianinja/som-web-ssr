#!/bin/bash

#download node and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 14

sudo rm -rf /home/ubuntu/som-web/
sudo rm /etc/nginx/sites-enabled/default


sudo rm -rf /lib/systemd/system/som-web-ssr.service