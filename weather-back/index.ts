const express = require("express");
const NodeCache = require( "node-cache" );

const app = express();
const port = 3001;

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
  res.send({
    temperature: 10,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
