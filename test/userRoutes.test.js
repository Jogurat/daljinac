process.env.NODE_ENV = "test";

const mongoose = require("mongoose");
let User = require("../models/users");

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
let should = chai.should();

chai.use(chaiHttp);

describe("User routes", () => {
  beforeEach(done => {
    User.deleteMany({}, err => {
      done();
    });
  });

  describe("GET all users", () => {
    it("should GET all users", done => {
      chai
        .request(server)
        .get("/users")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
});
