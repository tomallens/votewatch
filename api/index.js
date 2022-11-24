const {Client} = require('pg')

const client = new Client({
  user: "postgres",
  password: "postgress", // need a 
  host: "localhost", // local id
  port: 5432,
  database: "votewatch_test" //
})

await client.connect()

const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message)
await client.end()

