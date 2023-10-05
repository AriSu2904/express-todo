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

describe('DELETE /api/v1/todolist/:id', () => {
    it("should delete data", async () => {
        const res = await request(app).delete('/api/v1/todolist/651d9f0af27661189e9bc07e');
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Successfully delete todo");
    })
});

describe('DELETE /api/v1/todolist/:id', () => {
    it("should return 404", async () => {
        const res = await request(app).delete('/api/v1/todolist/651d9f0af27661189e9bc07se');
        expect(res.statusCode).toBe(404);
    })
});

describe("UPDATE /api/v1/todolist", () => {
    it("Should return new data", async () => {
        const res = await request(app).put("/api/v1/todolist").send({
            id: "651d9fd41cb677317e2c4eee",
            title: "Belajar",
            description: "Belajar Java Dasar"
        })
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Belajar");
    })
})


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