//update
require('dotenv').config();
// this is important!
module.exports = {
    "development": { //test
        "username": "postgres",
        "password": "root",
        "database": "projetMinistere",
        "host": "localhost",
        "dialect": "postgres"
    },
    "test": {
        "username": "postgres",
        "password": "root",
        "database": "projetMinistere",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "production": {
        "username": "postgres",
        "password": "root",
        "database": "projetMinistere",
        "host": "127.0.0.1",
        "dialect": "postgres"
    }
};


