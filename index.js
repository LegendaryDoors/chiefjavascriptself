const Discord = require("discord.js");
require("dotenv").config();

const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

let bot = {
  client,
  prefix: "!",
  owners: ["361218637043859457"],
};

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload);
client.loadCommands = (bot, reload) =>
  require("./handlers/commands")(bot, reload);

client.loadEvents(bot, false);
client.loadCommands(bot, false);

module.exports = bot;

// Send welcome message to user on join
client.on("guildMemberAdd", async (member) => {
  const channelId = "935998668002185260";
  const welcomeMessage = `Brotha <@${member.id}> welcome`;
  member.guild.channels.fetch(channelId).then((channel) => {
    channel.send(welcomeMessage);
  });
});

client.login(process.env.TOKEN);
