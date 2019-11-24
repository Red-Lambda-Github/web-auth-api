const request = require("supertest");
const server = require("./../server.js");
const db = require("./../data/dbConfig.js");

function random(len = 6){
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let string = '';
    
    for(var i = 0; i < 15; i++){
        string += chars[Math.floor(Math.random() * len)];
    }

    return string;
}

describe("POST /api/auth/register", () => {
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
                username: random(),
                password: "flamingDoritos"
            })
            .expect(204)
    })
})