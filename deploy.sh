#!/bin/bash

scp html/* root@camilladomain.chickenkiller.com:/var/www/html/
scp jsapp/* root@camilladomain.chickenkiller.com:/var/www/jsapp/
ssh root@camilladomain.chickenkiller.com systemctl restart jsapp
