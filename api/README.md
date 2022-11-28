# Votewatch backend server

## First time setup

Install postgresql from any directory:

```
brew install postgresql
```

Create the database in a terminal

```
createdb votewatch
```

Install dependencies from inside the api directory :

```
npm install
```

Change USER to your local username in `api/app/config/config-db.js`

```bash
# inside config-db.js

module.exports = {
  HOST: "localhost",
  USER: "username", # Change this to your local username
  PASSWORD: "password",
  DB: "votewatch",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
```

## Running the backend server:

Run postgresql locally in a terminal

```
brew services start postgresql
```

Start the server:

```
npm start
```
