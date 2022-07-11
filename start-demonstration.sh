#!/usr/bin/sh
sudo docker-compose up -d
npm ci
npm start
