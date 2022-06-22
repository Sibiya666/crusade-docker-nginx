import Express from "express";

import { PORT } from "./const/const.mjs";
import { connectDB } from "./common/moongose.mjs";
import { Crusade } from './modules/crusade/crusade.mjs';

const app = Express();

connectDB()
  .on("error", console.log)
  .on("disconnected", connectDB)
  .once("open", () => {
    app.listen(PORT, async () => {
      console.log(`api auth started ${PORT}`);
      
      const newCrusade = new Crusade({name: new Date().toLocaleDateString()})
      await newCrusade.save();
      const list = await Crusade.find();
      
    });
  });

app.get("/", (req, res) => {
  res.send(`root ${PORT}`);
});

app.get("/isAuth", async (req, res) => {
  console.log('Auth');
  res.json({some: 'some'})
})