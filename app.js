const express = require("express");
const cors = require("cors");
const User = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/all", async (req, res) => {
  const snapshot = await User.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.post("/create", async (req, res) => {
  const data = req.body;

  const snapshot = await User.where("email", "==", req.body.email).get();
  if (snapshot.empty) {
    await User.add(req.body);
    res.send({ msg: "User Added" });
  }
  res.send("User already exists");
});

app.post("/update", async (req, res) => {
  console.log(req.body.email);
  const data = await User.where("email", "==", req?.body?.email);
  const snapshot = await User.where("email", "==", req.body.email).get();
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }

  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });

  res.send(data);
});

app.get("/user", async (req, res) => {
  // const id = req.body.id;
  // delete req.body.id;
  // const data = req.body;
  const data = await User.doc();
  res.json(data);
});

app.post("/delete", async (req, res) => {
  const id = req.body.id;
  await User.doc(id).delete();
  res.send({ msg: "Deleted" });
});
app.listen(8000, () => console.log("Up & RUnning *8000"));
