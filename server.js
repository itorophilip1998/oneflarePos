require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
const port = process.env.PORT || 8000,
  dbURL = process.env.DB_CONNECTION;

const mongoose = require("mongoose");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swaggerOutput.json");

const { handleError } = require("./helpers/error");

app.use(
  cors({
    origin: "*",
  })
);

const auth = require("./routes/auth");
const user = require("./routes/user")
const businessAdmin = require("./routes/admin")
const products = require("./routes/products")
const customerRoutes = require("./routes/customer")



//middlewares
app.use("/api/auth", auth);
app.use("/api/products", products)
app.use("/api/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.static(path.join(__dirname, "./frontEnd/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontEnd/build/index.html"));
});
app.get("/test", (req, res) => {
  res.send("testing route");
});

app.use((err, req, res, next) => {
  handleError(err, res);
});

const db_connect = () => {
  mongoose
    .connect(dbURL, {
      useNewUrlParser: true,
      serverSelectionTimeoutMS: 20000,
    })
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log(err, "db disconnected"));
};

db_connect();

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
