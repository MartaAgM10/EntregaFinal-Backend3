//import { expect } from "chai";

//describe("Prueba inicial", () => {
// it("Debe funcionar correctamente", () => {
// expect(true).to.equal(true);
//});
//});
import request from "supertest";
import { expect } from "chai";
import app from "../src/app.js";

describe("Users Router", () => {
  it("GET /api/users debe responder correctamente", async () => {
    const response = await request(app).get("/api/users");

    //expect(response.status).to.be.oneOf([200, 500]);
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("array");
  });
  it("GET /api/users debe retornar contenido", async () => {
    const response = await request(app).get("/api/users");

    expect(response.body).to.not.equal(null);
  });
  it("GET /api/users/:uid debe devolver un usuario", async () => {
    const uid = "69c1ede94935c1fe06dc33fe";

    const response = await request(app).get(`/api/users/${uid}`);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("_id");
    expect(response.body.email).to.equal("marta@gmail.com");
  });
  it("PUT /api/users/:uid debe actualizar un usuario", async () => {
    const uid = "69c1ede94935c1fe06dc33fe";

    const response = await request(app).put(`/api/users/${uid}`).send({
      first_name: "MartaActualizada",
    });

    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal("updated");
  });
  it("DELETE /api/users/:uid debe eliminar un usuario", async () => {
    const uid = "69c4833195f60ebe4a91c772";

    const response = await request(app).delete(`/api/users/${uid}`);

    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal("deleted");
  });
});
