const {Pool} = require('pg')

const pool = new Pool({
  user: "me",
  password: "password",
  host: "localhost", // local id
  database: "votewatch_test",
  port: 5432,
})
// need to put config details in a separate file w/ restrictive permissions
// when we hit production

// await client.connect()

// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message)
// await client.end()

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { name, email, password, postcode } = request.body

  pool.query('INSERT INTO users (name, email, password, postcode) VALUES ($1, $2, $3, $4)', [name, email, password, postcode], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email, password, postcode } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2, password = $3, postcode = $4 WHERE id = $3',
    [name, email, password, postcode, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}