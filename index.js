import "dotenv/config";
import discord from "discord.js";
import strategy, { Helper } from "./src/helper/strategy";

const client = new discord.Client();

client.on("ready", () => {
  console.log("Initialize success");
});

client.on("message", (msg) => {
  const message = msg.content.toLowerCase();
  if (message == "!helpxandao") {
    msg.channel.send(String(Helper));
  } else if (message == "!meunome".toLowerCase()) {
    const usuario =
      msg.author.username !== "Master of Calzinha" && msg.author.username;
    msg.channel.send(
      usuario && `o nome do arrombado que me chamou é: ${usuario}`
    );
  } else if (strategy(message)) {
    msg.channel.send(strategy(message));
  }
});

client.login(process.env.DISCORD_TOKEN);
