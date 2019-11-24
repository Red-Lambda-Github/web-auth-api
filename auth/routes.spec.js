const request = require("supertest");
const server = require("./../server.js");
const db = require("./../data/dbConfig.js");

describe("POST /api/auth/register", () => {

    beforeEach(async () => {
       await db("users").truncate();
    })

    it("Returns 400 Bad Request if required fields not supplied", () => {
        return request(server)
            .post("/api/auth/register")
            .expect(400)
            .expect("Content-Type", /json/)
            .then(res => {
                expect(res.body).toHaveProperty("message")
                expect(res.body).toMatchObject({ message: 'Username and password required.' })
            })
    })

    it("Returns 204 No Content when required fields supplied", () => {
        return request(server)
            .post("/api/auth/register")
            .send({
                username: "rodpadev",
                password: "flamingDoritos"
            })
            .expect(204)
    })
})