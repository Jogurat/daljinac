process.env.NODE_ENV = "test";

const mongoose = require("mongoose");
let User = require("../models/users");

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
let should = chai.should();

const usersUrl = "/users/";
const loginUrl = usersUrl + "login";

chai.use(chaiHttp);

describe("User routes", () => {
  //this.timeout(0);
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
        .get(usersUrl)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  //Register user
  describe("User Registration", () => {
    describe("successful POST/register one user", () => {
      it("should POST one user and return it", done => {
        const user = {
          username: "TestUser",
          password: "pass",
          email: "test@gmail.com"
        };

        chai
          .request(server)
          .post(usersUrl) //http://localhost:3000/users
          .send(user)
          .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.an("object");
            res.body.should.have.property("username").eql("TestUser");
            res.body.should.have.property("email").eql("test@gmail.com");
            res.body.should.have.property("password").not.eql("pass");
            done();
          });
      });
    });

    describe("failed user registration - username already exists", () => {
      it("should not post user and return status 409 - duplicate entry", done => {
        const user = {
          username: "TestUser",
          password: "pass",
          email: "test@gmail.com"
        };

        chai
          .request(server)
          .post(usersUrl)
          .send(user)
          .end((err, res) => {
            res.should.have.status(409);
            res.body.should.have
              .property("message")
              .eql("User with this username already exists!");
            res.body.message.should.be.a("string");
          });
        done();
      });
    });

    describe("failed user registration - no username", () => {
      it("should not post user and return status 500 - bad request", done => {
        const user = {
          password: "123",
          email: "test@gmail.com"
        };
        chai
          .request(server)
          .post(usersUrl)
          .send(user)
          .end((err, res) => {
            res.should.have.status(500);
            res.body.should.have.property("message");
            done();
          });
      });
    });

    describe("failed user registration - no password", () => {
      it("should not post user and return status 500 - bad request", done => {
        const user = {
          username: "123",
          email: "test@gmail.com"
        };
        chai
          .request(server)
          .post(usersUrl)
          .send(user)
          .end((err, res) => {
            res.should.have.status(500);
            res.body.should.have.property("message");
            done();
          });
      });
    });

    describe("failed user registration - no email", () => {
      it("should not post user and return status 500 - bad request", done => {
        const user = {
          username: "123",
          password: "test123"
        };
        chai
          .request(server)
          .post(usersUrl)
          .send(user)
          .end((err, res) => {
            res.should.have.status(500);
            res.body.should.have.property("message");
            done();
          });
      });
    });
  });

  //Get user by username
  describe("GET one user", () => {
    describe("successful GET one user", () => {
      it("should GET one user by username", done => {
        const username = "TestUser";
        const url = usersUrl + username;
        chai
          .request(server)
          .get(url)
          .end((err, res) => {
            res.should.have.status(200);
            res.should.be.an("object");
            res.body.should.have.property("username").eql("TestUser");
            res.body.should.have.property("password");
            res.body.should.have.property("email").eql("test@gmail.com");
            done();
          });
      });
    });

    //Get user by username - nonexisting user
    describe("failed GET one user - bad username", () => {
      it("should return status 404 - user not found with given username", done => {
        const username = "IDontExist";
        const url = usersUrl + username;
        chai
          .request(server)
          .get(url)
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.not.have.property("username");
            res.body.should.not.have.property("password");
            done();
          });
      });
    });
  });

  let token;

  describe("User Login", () => {
    describe("successful user login", () => {
      it("should return json web token", done => {
        const user = {
          username: "TestUser",
          password: "pass"
        };

        chai
          .request(server)
          .post(loginUrl)
          .send(user)
          .end((err, res) => {
            res.should.have.status(200);
            //res.body.should.have.property("token");
            res.body.should.be.a("string");
            token = res.body;
            done();
          });
      });
    });

    describe("failed user login - bad password", () => {
      it("should return 404 status and not log the user in", done => {
        const user = {
          username: "TestUser",
          password: "123"
        };

        chai
          .request(server)
          .post(loginUrl)
          .send(user)
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.not.have.property("token");
            done();
          });
      });
    });

    describe("failed user login - bad request", () => {
      it("should return 500 status because of bad request body", done => {
        const user = {
          password: "TestUser"
        };
        const url = "/users/";

        chai
          .request(server)
          .post(loginUrl)
          .send(user)
          .end((err, res) => {
            res.should.have.status(500);
            res.body.should.have.property("message");
            done();
          });
      });
    });
  });


  describe("Add New Room", () => {
    //Add room to user
    describe("successful CREATE room for user", () => {
      it("should PUT one room to user", done => {
        const username = "TestUser";
        const url = "/users/room/" + username;
        const newRoom = {
          name: "Test Room",
          deviceID: 42
        };
        chai
          .request(server)
          .put(url)
          .set("Authorization", `Bearer ${token}`)
          .send(newRoom)
          .end((err, res) => {
            res.should.have.status(202);
            res.should.be.an("object");
            res.body.should.have.property("rooms");
            const rooms = res.body.rooms;
            rooms.length.should.eql(1);
            rooms[0].should.have.property("name").eql(newRoom.name);
            rooms[0].should.have.property("deviceID").eql(newRoom.deviceID);
            done();
          });
      });
    });

    describe("failed add room - no room name", () => {
      it("should not add new room to user and return status 500", done => {
        const username = "TestUser";
        const url = "/users/room/" + username;
        const newRoom = {
          deviceID: 42
        };
        chai
          .request(server)
          .put(url)
          .set("Authorization", `Bearer ${token}`)
          .send(newRoom)
          .end((err, res) => {
            res.should.have.status(500);
            done();
          });
      });
    });

    describe("failed add room - no deviceID", () => {
      it("should not add new room to user and return status 500", done => {
        const username = "TestUser";
        const url = "/users/room/" + username;
        const newRoom = {
          name: "Room Name"
        };
        chai
          .request(server)
          .put(url)
          .set("Authorization", `Bearer ${token}`)
          .send(newRoom)
          .end((err, res) => {
            res.should.have.status(500);
            done();
          });
      });
    });

    describe("failed add room - no auth token", () => {
      it("should not add new room to user and return status 403", done => {
        const username = "TestUser";
        const url = "/users/room/" + username;
        const newRoom = {
          name: "Test Room",
          deviceID: 42
        };
        chai
          .request(server)
          .put(url)
          .end((err, res) => {
            res.should.have.status(403);
            done();
          })
      })
    })
  });

  describe("Password change", () => {
    describe("successful password change", () => {
      it("should send email with link and return status 200", done => {
        const username = "TestUser";
        const url = usersUrl + "/forgotPass/" + username;

        chai
          .request(server)
          .get(url)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });

    describe("failed password change - bad username", () => {
      it("should not send email and return status 500 - bad request", done => {
        const username = "IDontExist";
        const url = usersUrl + "/forgotPass/" + username;

        chai
          .request(server)
          .get(url)
          .end((err, res) => {
            res.should.have.status(500);
            done();
          });
      });
    });
  });

  after(done => {
    server.close();
    done();
  });
});
