const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
const connectDb = require("./src/connection");
const Metric = require("./src/Metric.model");
const cors = require("cors");

const PORT = process.env.PORT || 80;
app.use(cors());

app.get("/metrics", async (req, res) => {
  const to = new Date();
  const from = new Date(to.getTime() - 60000 * 30); // default to last 30 min
  const { dateTimeStart, dateTimeEnd } = req.query; // parametric dates
  const metrics = await Metric.find({
    createdAt: {
      $gte: dateTimeStart || from,
      $lt: dateTimeEnd || to,
    },
  });

  res.json(metrics);
});

app.post("/metrics", async (req, res) => {
  let params = req.body;
  if (typeof params === "string") {
    params = JSON.parse(params);
  }
  const metric = new Metric(params);

  await metric.save().then(() => console.log("Metric created"));

  res.send("Metric created \n");
});

app.get("/perfanalytics.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client", "PerfAnalytics.js"));
});

app.get("/demo", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client", "demo", "index.html"));
});

app.get("/demo2", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client", "demo", "index2.html"));
});

app.use(express.static(path.join(__dirname, "./dashboard", "build")));
app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./dashboard", "build", "index.html"));
});

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
