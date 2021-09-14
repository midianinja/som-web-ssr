cd /home/ubuntu/som-web/
npm run build

sudo /etc/init.d/nginx reload
sudo systemctl daemon-reload
sudo systemctl start som-web-ssr