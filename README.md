# Welcome to Flights Service

## Project Setup

-clone the project on your local
-Execute `npm install` on the root directory and add the following environment variable. -`PORT = 3000`
-inside the `src/config` folder create a new file `config.json` and then add the following piece of json.

```
{
  "development": {
    "username": "Your_DB_Name",
    "password": "Your_Db_Passowrd",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
