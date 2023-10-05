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

describe('GET /api/v1/todolist/:id', () => {
    it("should return todolist", async () => {
        const res = await request(app).get('/api/v1/todolist/651d9f0af27661189e9bc07e');
        expect(res.statusCode).toBe(200);
    })
});

describe('GET /api/v1/todolist/:id', () => {
    it("should return 404", async () => {
        const res = await request(app).get('/api/v1/todolist/651d9f0af27661189e9bc07eS');
        expect(res.statusCode).toBe(404);
    })
});


describe("POST /api/v1/todolist", () => {
    it("should return todolist", async () => {
        const res = await request(app).post("/api/v1/todolist").send({
            title: "Belajar",
            description: "Bejalar Java Oop"
        })
        expect(res.statusCode).toBe(201);
        expect(res.body.title).toBe("Belajar");
    })
})