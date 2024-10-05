const express = require("express");
const NodeCache = require( "node-cache" );

const app = express();
const port = 3001;
const cache = new NodeCache();

app.get("/", (req: any, res: any) => {
  res.send("Express is running!");
});

app.get("/api/current", async (req: any, res: any) => {
  console.log(req.query);
  const { q } = req.query;
  console.log(q);

  try {
    const current = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=943f200debf74ff8b4f93845240510&q=" +
        q,
      {
        method: "GET",
      }
    );
    const response = await current.json();
    console.log(response);
    res.send({
      response: response,
      ok: true,
    });
  } catch (error) {
    res.json({
      ok: false,
      error: error,
    });
  }
});

app.get("/api/history", async (req: any, res: any) => {
  console.log(req.query);
  const { q } = req.query;
  console.log(q);
  try {
    const history = await fetch(
      "https://api.weatherapi.com/v1/history.json?key=943f200debf74ff8b4f93845240510&q=" +
        q +
        "&dt=2024-09-01&end_dt=2024-09-02",
      {
        method: "GET",
      }
    );
    const response = await history.json();
    console.log(response);
    res.send({
      response: response,
      ok: true,
    });
  } catch (error) {
    res.json({
      ok: false,
      error: error,
    });
  }
});

app.get("/api/data", (req: any, res: any) => {
    const { location, temperature } = req.query;
    console.log(location, temperature);

    cache.set(location, temperature);

    const value = cache.get(location);
    console.log(value);
    
  res.json({
    response: "ok",
    ok: true,
    location: location,
    temperature: temperature,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
