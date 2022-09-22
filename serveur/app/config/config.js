require('dotenv').config(); // this is important!
module.exports = {
    "development": { //test
        "username": "postgres",
        "password": "mdpprom13",
        "database": "adductioneau",
        "host": "localhost",
        "dialect": "postgres"
    },
    "test": {
        "username": "postgres",
        "password": "mdpprom13",
        "database": "adductioneau",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "production": {
        "username": "postgres",
        "password": "mdpprom13",
        "database": "adductioneau",
        "host": "127.0.0.1",
        "dialect": "postgres"
    }
};


