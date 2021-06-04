# Wet Bat
A travel management platform that creates and visualizes quote data

## Set Up Backend
```
cd server
npm install
nodemon
```

## Set Up Frontend
```
cd client
npm install
npm start
```

## Start up DB
```
cd server/db
psql
CREATE DATABASE wetbat
\c wetbat
\i schema.sql
\i seeds.sql
```
