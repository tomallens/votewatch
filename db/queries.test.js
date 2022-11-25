const request = require('supertest')
const app = require('../index')

describe("POST /users", () => {
  describe("given a username, password, email & postcode", () => {
    it("should respond with a 201 status code", async () => {
      const response = await request(app)
      .post("/users")
      .send({
        username: "username",
        password: "password",
        email: "one@two.com",
        mpName: "Boris Johnson"
      })
      expect(response.StatusCode).toBe(201)
    })
  })

  describe("when the username & password is missing", () => {
  })
})