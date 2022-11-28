npm install
brew install postgresql
brew services start postgresql

Create DB in terminal

```
createdb votewatch
```

Inside db directory

```
psql -h 127.0.0.1 votewatch < init.sql
```
