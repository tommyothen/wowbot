# Wow Bot

This is a silly Discord bot written in TypeScript that uses the [Owen Wilson Wow API](https://owen-wilson-wow-api.onrender.com) to play random movie clips of Owen Wilson saying "wow" in response to messages containing the word "wow" on a Discord channel.

### Installation

To run the bot, you will need to have Node.js and npm installed on your machine. Once you have those, you can clone the repository and install the dependencies by running:

```sh
git clone https://github.com/tommyothen/wowbot.git
cd wowbot
npm install
```

### Usage

Before running the bot, you will need to create a Discord bot and get its token. Once you have that, create a `.env` file in the root directory of the project and add the following line:

```env
DISCORD_TOKEN=[YOUR_DISCORD_BOT_TOKEN]
```

You can then run the bot by running the following command:

```sh
npm start
```

The bot will now be running and listening for messages containing the word "wow" in the Discord channels it has been added to.

### Customization

You can customize the bot's behavior by editing the `index.ts` file. For example, you can change the word that triggers the bot's response, or you can add additional logic to the bot's response.

### Contributing

If you would like to contribute to this project, feel free to fork the repository and create a pull request with your changes.

### License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
