const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./api/routes/auth");
app = express();
app.use(bodyParser.json());

const corsOptions = {
  origin: process.env.SITE_URL,
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(authRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started at port ${port}`));
