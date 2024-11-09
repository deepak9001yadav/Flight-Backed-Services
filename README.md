# Welcome to Flights Service

## Project Setup

- clone the project on your local

- Execute `npm install` on the root directory and add the following environment variable. -`PORT = 3000`

- create a `.env` files in the root directory and add the following environment variable

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

Once you added your db config as listed above,go to the src folder from your terminal and execute `npx sequelize db:create` and then execute

`npx sequelize db:migrate`

## Db Design

- Airplane Table
- Flights
- Airport
- City

- A flight belong to an airplane but one airplane can be used in multiple flights.
- A city have many Airports but one Airport belongs to a city
- One airport can have many flights, but a flight belongs to ine Airport

```

```
