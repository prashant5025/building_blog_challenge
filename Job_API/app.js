require("dotenv").config();
require("express-async-errors");
//extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");

//Swagger
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerDocument = YAML.load("./swagger.yaml");

//packages
const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const authentication = require("./middleware/auth");
//Routers
const jobsRouter = require("./routes/job");
const usersRouter = require("./routes/user");

//Middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.static("./public"));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 10 minutes
    max: 100,
    message: "Too many requests from this IP, please try again in 15 minutes",
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.get("/", (req, res) => {
  res.send(`<h1>Job Tracker API</h1><a href="/api-docs">Documentation</a>`);
});
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
//routes
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/jobs", authentication, jobsRouter);

//Middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//local port
const PORT = process.env.PORT || 8080;

//start server
const start = async () => {
  try {
    //db connection
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
