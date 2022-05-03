const { login, signup } = require("./api/controller/auth");

test("login", async () => {
  const req = {
    body: {
      email: "milankatira26@gmail.com",
      password: "123456",
    },
  };
  const res = {
    message: "Login successfully",
  };
  await login(req, res)
    .then((data) => {
      expect(data.status).toEqual(200);
      expect(data.message).toEqual("Login successfully");
    })
    .catch((e) => {
      expect(e.message)
    });
});

test("signup", async () => {
  const req = {
    body: {
      email: "milankatira26@gmail.com",
      password: "123456",
    },
  };
  const res = {
    message: "Signup successfully",
  };
  await signup(req, res)
    .then((data) => {
      expect(data.status).toEqual(200);
      expect(data.message).toEqual("Signup successfully");
    })
    .catch((e) => {
      expect(e.message)
    });
});
