const sensorRoutes = (app, fs) => {
  const dataPath = "./data/sensors.json";

  const readFile = (
    callback,
    returnJson = false,
    filePath = dataPath,
    encoding = "utf8"
  ) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        throw err;
      }

      callback(returnJson ? JSON.parse(data) : data);
    });
  };

  const writeFile = (
    fileData,
    callback,
    filePath = dataPath,
    encoding = "utf8"
  ) => {
    fs.writeFile(filePath, fileData, encoding, (err) => {
      if (err) {
        throw err;
      }
      w;
      callback();
    });
  };

  app.get("/sensors", (req, res) => {
    readFile((data) => {
      res.send(data);
    }, true);
  });

  app.post("/sensors", (req, res) => {
    readFile((data) => {
      const newSensorId = Date.now().toString();

      data[newSensorId] = req.body;

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send("new user added");
      });
    }, true);
  });

  app.put("/sensors/:id", (req, res) => {
    readFile((data) => {
      const sensorId = req.params["id"];
      data[sensorId] = req.body;

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`sensors id:${sensorId} updated`);
      });
    }, true);
  });

  app.delete("/sensors/:id", (req, res) => {
    readFile((data) => {
      const sensorId = req.params["id"];
      delete data[sensorId];

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`sensors id:${sensorId} removed`);
      });
    }, true);
  });
};

module.exports = sensorRoutes;
