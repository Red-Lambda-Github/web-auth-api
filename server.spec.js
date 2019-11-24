const request = require("supertest");
const server = require("./server.js");

describe("Test Server.Js", () => {
    it("GET / returns 200 Ok", () => {
        return request(server)
            .get("/")
            .expect(200)
            .expect("Content-Type", /html/)
            .then(res => {
                expect(res.text).toBe("API Server is running!")
            })
    })
})