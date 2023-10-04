const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../server");

require("dotenv").config();

beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URL)
})

afterEach(async () => {
    await mongoose.connection.close();
})

describe("GET /api/v1/todolist", () => {
    it("should return todolist", async () => {
        const res = await request(app).get('/api/v1/todolist');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});