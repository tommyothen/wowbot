import { Client, GatewayIntentBits, Events, ActivityType } from "discord.js";
import axios from "axios";
require("dotenv").config();

const wilsonMovies = {
  "Bottle Rocket": "tt0115734",
  "The Haunting": "tt0171363",
  "Breakfast of Champions": "tt0120618",
  "Shanghai Noon": "tt0184894",
  "Meet the Parents": "tt0212338",
  Zoolander: "tt0196229",
  "I Spy": "tt0297181",
  "Shanghai Knights": "tt0300471",
  "The Big Bounce": "tt0315824",
  "Starsky & Hutch": "tt0335438",
  "Wedding Crashers": "tt0396269",
  Cars: "tt0317219",
  "You, Me and Dupree": "tt0463034",
  "The Darjeeling Limited": "tt0838221",
  "Drillbit Taylor": "tt0817538",
  "Marley & Me": "tt0822832",
  Marmaduke: "tt8746404",
  "Little Fockers": "tt0970866",
  "Hall Pass": "tt0480687",
  "Midnight in Paris": "tt1605783",
  "Cars 2": "tt1216475",
  "The Big Year": "tt1053810",
  "The Internship": "tt2234155",
  "Free Birds": "tt1621039",
  "Are You Here": "tt1545754",
  "Night at the Museum: Secret of the Tomb": "tt2692250",
  "No Escape": "tt1781922",
  "Cars 3": "tt3606752",
  "Father Figures": "tt1966359",
} as const;

type Movie = keyof typeof wilsonMovies;

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
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
  const movie = Object.keys(wilsonMovies)[
    Math.floor(Math.random() * Object.keys(wilsonMovies).length)
  ] as Movie;

  client.user?.setActivity(movie, {
    type: ActivityType.Watching,
  });
};

client.on(Events.ClientReady, () => {
  console.log("Ready!");

  changeActivity();
  setTimeout(() => {
    changeActivity();
  }, 60 * 60 * 1000);
});

client.login(process.env.DISCORD_TOKEN);
