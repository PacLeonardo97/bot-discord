require("dotenv/config");
const discord = require("discord.js");
const { Helper, strategy } = require("./src/helper/strategy");

const client = new discord.Client();

client.on("ready", () => {
  console.log("Initialize success");
});

const rand_imgs_guigui = [
  './src/assets/images/guigui/guigui1.jpg',
  './src/assets/images/guigui/guigui2.jpg',
  './src/assets/images/guigui/guigui3.jpg',
  './src/assets/images/guigui/guigui4.jpg',
  './src/assets/images/guigui/guigui5.jpg',
];

client.on("message", msg => {
  const message = msg.content.toLowerCase();
  if(message === "!kalango") {
    const voice =  msg.member.voice.channel;
    voice?.join().then(connection => {
        const dispatcher = connection.play('./src/assets/music/Vintage Culture - SOTRACKBOA (GOLD SERIES ) 2015 set.mp3');
        dispatcher.on("speaking", speaking => {
          if (!speaking) {
              voiceChannel.leave();
          }
      });
    }).catch(console.error);
  } else if (message == "!helpxandao") {
    msg.channel.send(String(Helper));
  } else if (strategy(message)) {
    msg.channel.send(strategy(message));
  } else if(message === "!guigui"){
    msg.channel.send("olha o guegue", { files: [rand_imgs_guigui[Math.floor(Math.random() * rand_imgs_guigui.length)]] })
  }
});

client.login(process.env.DISCORD_TOKEN);
