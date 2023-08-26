import cron from "node-cron";
import { GeneralSave } from "./save/index.js";
import express from "express";
import { PORT } from "./const.js";

const app = express();

cron.schedule("0 2 * * *", async () => {
  await GeneralSave();
});

app.get("/", async (req, res) => {
  res.send("Server of BackUps");
});

app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});
