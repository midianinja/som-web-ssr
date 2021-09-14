sudo chown -R ubuntu.ubuntu /home/ubuntu/som-web
cd /home/ubuntu/som-web/

sudo /etc/init.d/nginx reload
sudo systemctl daemon-reload
sudo systemctl start som-web-ssr

