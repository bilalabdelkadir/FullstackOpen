const bcrypt = require("bcrypt");
const User = require("../models/users");
const helper = require("./test_helper");

//...

describe("when there is initially one user in db", () => {
  beforeEach(async () => {
    await User.deleteMany({});

    const passwordHash = await bcrypt.hash("sekret", 10);
    const user = new User({ username: "root", passwordHash });

    await user.save();
  }, 10000);

  test("creation succeeds with a fresh username", async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: "bilal222",
      name: "bilal abdelkadir",
      password: "bilal",
    };

    await api
      .post("/api/users")
      .send(newUser)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1);

    const usernames = usersAtEnd.map((u) => u.username);
    expect(usernames).toContain(newUser.username);
  }, 10000);

  test("invalid username test", async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: "bi",
      name: "bilal abdelkadir",
      password: "bilal",
    };

    await api.post("/api/users").send(newUser).expect(400);
  }, 10000);

  test("invalid password test", async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: "bilal",
      name: "bilal abdelkadir",
      password: "bi",
    };

    await api.post("/api/users").send(newUser).expect(400);
  }, 10000);
});
