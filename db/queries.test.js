const request = require('supertest')
const server = require('./index')

describe("Routes for users", () => {
  it("Captures all users", (done) => {
    done()
    return request(server)
    .get("users")
    .expect(200)
   
  })
})