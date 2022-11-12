const sensorRoutes = require("./sensors");

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("welcome to the development api-server");
  });

  sensorRoutes(app, fs);
};

module.exports = appRouter;
