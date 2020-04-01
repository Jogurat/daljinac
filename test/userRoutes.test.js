process.env.NODE_ENV = "test";

const mongoose = require("mongoose");
let User = require("../models/users");

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
let should = chai.should();

chai.use(chaiHttp);

describe("User routes", () => {
  before(done => {
    User.deleteMany({}, err => {
      done();
    });
  });

  //GET all users
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

  //Register user
  describe("POST/register one user", () => {
    it("should POST one user", done => {
      const user = {
        username: "TestUser",
        password: "pass",
        email: "test@gmail.com"
      };

      chai
        .request(server)
        .post("/users") //http://localhost:3000/users
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          res.body.should.have.property("username").eql("TestUser");
          res.body.should.have.property("email").eql("test@gmail.com");
          res.body.should.have.property("password").not.eql("pass");
          done();
        });
    });
  });

  //Get user by username
  describe("GET one user", () => {
    it("should GET one user by username", done => {
      const username = "TestUser";
      const url = "/users/" + username;
      chai
        .request(server)
        .get(url)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a("object");
          res.body.should.have.property("username").eql("TestUser");
          res.body.should.have.property("password");
          res.body.should.have.property("email").eql("test@gmail.com");
          done();
        });
    });
  });
});
