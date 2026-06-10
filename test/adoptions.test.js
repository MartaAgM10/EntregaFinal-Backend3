import request from "supertest";
import { expect } from "chai";
import app from "../src/app.js";

let adoptionId;

describe("Adoptions Router", () => {
  it("GET /api/adoptions debe devolver un array", async () => {
    const response = await request(app).get("/api/adoptions");

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("array");
  });

  it("POST /api/adoptions debe crear una adopción", async () => {
    const adoptionMock = {
      petId: "pet123",
      userId: "user123",
    };

    const response = await request(app)
      .post("/api/adoptions")
      .send(adoptionMock);

    expect(response.status).to.equal(201);
    expect(response.body.status).to.equal("success");
    expect(response.body.payload).to.have.property("_id");

    adoptionId = response.body.payload._id;
  });
  it("POST /api/adoptions debe fallar si faltan datos obligatorios", async () => {
    const response = await request(app).post("/api/adoptions").send({
      petId: "pet123",
    });

    expect(response.status).to.equal(500);
    expect(response.body.status).to.equal("error");
  });

  it("GET /api/adoptions/:aid debe devolver una adopción", async () => {
    const response = await request(app).get(`/api/adoptions/${adoptionId}`);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("_id");
  });
  it("GET /api/adoptions/:aid debe devolver 404 si la adopción no existe", async () => {
    const fakeId = "64ffffffffffffffffffffff";

    const response = await request(app).get(`/api/adoptions/${fakeId}`);

    expect(response.status).to.equal(404);
    expect(response.body.status).to.equal("error");
    expect(response.body.message).to.equal("Adoption not found");
  });

  it("DELETE /api/adoptions/:aid debe eliminar una adopción", async () => {
    const response = await request(app).delete(`/api/adoptions/${adoptionId}`);

    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal("deleted");
  });
});
