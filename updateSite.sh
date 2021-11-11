#Pulls Changes from Github
sudo git pull

#Updates Static Files
sudo python manage.py collectstatic --noinput


#Restarts Apache Server
sudo /opt/bitnami/ctlscript.sh restart apache

$SHELL
