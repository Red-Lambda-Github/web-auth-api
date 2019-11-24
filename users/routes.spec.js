const request = require("supertest");
const server = require("./../server.js");
const db = require("./../data/dbConfig.js");

let cookie;

describe("GET /api/users", () => {
    it("Returns 200 Ok and sets cooke to header", () => {
        return request(server)
            .post("/api/auth/login")
            .send({
                username: "testing",
                password: "testing"
            })
            .expect(200)
            .then(res => {
                cookie = res.headers["set-cookie"]
            })

    })

    it("Returns 401 Unauthorized when no cookie passed", () => {
        return request(server)
            .get("/api/users")
            .expect(401)
            .expect("Content-Type", /json/)
            .then(res => {
                expect(res.body).toHaveProperty("message")
                expect(res.body).toMatchObject({ message: "You shall not pass!" })
            })
    })

    it("Returns 200 Ok when Cookie Provided", () => {
        return request(server)
            .get("/api/users")
            .expect(200)
            .set("cookie",cookie)
            .expect("Content-Type", /json/)
            .then(res => {
                expect(Array.isArray(res.body)).toBe(true);
            })
    })

    it("Checks Data Type Integrity", () => {
        return request(server)
            .get("/api/users")
            .expect(200)
            .set("cookie",cookie)
            .expect("Content-Type", /json/)
            .then(res => {
                expect(Array.isArray(res.body)).toBe(true);
                expect(res.body.length).toBeGreaterThan(0);
                expect(res.body[0]).toHaveProperty("id");
                expect(res.body[0]).toHaveProperty("username");
                expect(res.body[0]).toHaveProperty("password");

            })
    })

})