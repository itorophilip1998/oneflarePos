const swaggerAutogen = require("swagger-autogen");

const output = "./swaggerOutput.json";

routes = ["./routes/user"];

const doc = {
  info: {
    version: "1.0.0",
    title: "OneflarePOS",
    description: "",
  },
  host: "localhost:3080",
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "User",
      description: "Routes",
    },
    // { ... }
  ],
  securityDefinitions: {},
  definitions: {},

  components: {},
};

swaggerAutogen()(output, routes, doc).then(async () => {
  await import("./server.js");
});
