const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../server");

require("dotenv").config();

beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URL)
})

afterEach(async () => {
    await mongoose.close();
})