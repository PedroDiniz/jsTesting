const { describe, it } = require("mocha");
const request = require("supertest");
const app = require("./api");
const assert = require("assert");

describe("API Suite test", () => {
  describe("/contact", () => {
    it("should return contact us page and 200 HTTP status code", async () => {
      const res = await request(app).get("/contact").expect(200);
      assert.deepStrictEqual(res.text, "contact us page");
    });
  });
  describe("/404", () => {
    it("should request inexistent route /hi and redirect to /hello", async () => {
      const res = await request(app).get("/hi").expect(200);
      assert.deepStrictEqual(res.text, "hello");
    });
  });

  describe("/login", () => {
    it("should login successfuly on the login route and return HTTP status 200", async () => {
      const res = await request(app)
        .post("/login")
        .send({ userName: "Peter", password: "strongPass" })
        .expect(200);
      assert.deepStrictEqual(res.text, "Logging has succeeded!");
    });

    it("should unauthorize a request when requesting it using wrong credentials and retur HTTP status 401", async () => {
      const res = await request(app)
        .post("/login")
        .send({ userName: "Peter0", password: "strongPass0" })
        .expect(401);
      assert.ok(res.unauthorized);
      assert.deepStrictEqual(res.text, "Logging failed!");
    });
  });
});
