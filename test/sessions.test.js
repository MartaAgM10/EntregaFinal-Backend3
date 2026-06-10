import request from "supertest";
import { expect } from "chai";
import app from "../src/app.js";

let testEmail = `test${Date.now()}@gmail.com`;

describe("Sessions Router", () => {
  it("POST /api/sessions/register debe registrar un usuario", async () => {
    const userMock = {
      first_name: "UsuarioTest",
      last_name: "Backend3",
      email: testEmail,
      age: 30,
      password: "123456",
    };

    const response = await request(app)
      .post("/api/sessions/register")
      .send(userMock);

    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal("success");
  });

  it("POST /api/sessions/login debe devolver un token", async () => {
    const credentials = {
      email: testEmail,
      password: "123456",
    };

    const response = await request(app)
      .post("/api/sessions/login")
      .send(credentials);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("token");
  });
});
