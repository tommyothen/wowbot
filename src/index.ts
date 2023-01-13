import { Client, GatewayIntentBits, Events, ActivityType } from "discord.js";
import axios from "axios";
require("dotenv").config();

var movies = [
  "Bottle Rocket",
  "The Cable Guy",
  "Anaconda",
  "Armageddon",
  "The Haunting",
  "Meet the Parents",
  "Zoolander",
  "Behind Enemy Lines",
  "I Spy",
  "Shanghai Noon",
  "The Royal Tenenbaums",
  "Zigzag",
  "The Big Bounce",
  "Starsky & Hutch",
  "Shanghai Knights",
  "Around the World in 80 Days",
  "Wedding Crashers",
  "You, Me and Dupree",
  "Night at the Museum",
  "The Darjeeling Limited",
  "Drillbit Taylor",
  "Marley & Me",
  "Night at the Museum: Battle of the Smithsonian",
  "Hall Pass",
  "Midnight in Paris",
  "The Intern",
  "Masterminds",
  "No Escape",
  "Zoolander 2",
  "Wonder",
  "Isle of Dogs",
  "The French Dispatch",
  "Loki",
];

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
  ],
});

client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase().includes("wow")) {
    try {
      const res = await axios.get("https://owen-wilson-wow-api.onrender.com/wows/random");

      const video = Object.keys(res.data[0].video);

      const buffer = await axios.get(res.data[0].video[video[0]], {
        responseType: "arraybuffer",
      });

      message.reply({
        files: [
          {
            name: `wow.mp4`,
            attachment: buffer.data,
          },
        ],
      });
    } catch (err) {
      console.error(err);
    }
  }
});

const changeActivity = () => {
  client.user?.setActivity(movies[Math.floor(Math.random() * movies.length)], {
    type: ActivityType.Streaming,
    url: "https://www.youtube.com/watch?v=mOkvkOAE7bA",
  });
};

client.on(Events.ClientReady, () => {
  console.log("Ready!");

  setTimeout(() => {
    changeActivity();
  }, 60 * 60 * 1000);
});

client.login(process.env.DISCORD_TOKEN);
