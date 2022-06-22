import Express from "express";

import { PORT, AUTH_URL } from "./const/const.mjs";
import { connectDB } from "./common/moongose.mjs";
import { Crusade } from "./modules/crusade/crusade.mjs";
import axios from "axios";

const app = Express();

connectDB()
  .on("error", console.log)
  .on("disconnected", connectDB)
  .once("open", () => {
    app.listen(PORT, async () => {
      console.log(`api started ${PORT}`);

      const newCrusade = new Crusade({ name: new Date().toLocaleDateString() });
      await newCrusade.save();
    });
  });

app.get("/", (req, res) => {
  res.send(`root ${PORT}`);
});

app.get("/crusade", async (req, res) => {
  const list = await Crusade.find();
  const rez = await axios.get(`${AUTH_URL}/isAuth`);
  res.send(JSON.stringify(list));
  console.log(rez);
});
