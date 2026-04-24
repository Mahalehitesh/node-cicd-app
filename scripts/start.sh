#!/bin/bash
cd /home/ec2-user/node-cicd-app
pkill node
nohup node app.js > output.log 2>&1 &