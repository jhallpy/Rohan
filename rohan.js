/*
Hello and welcome to Rohan!
*/
const Discord = require('discord.js');
//const Enmap = require("enmap");
//const fs = require("fs");

const config = require ("./config.json");
const client = new Discord.Client();
client.config = config;

client.on('ready', () => {
  console.log(`I, ${client.user.username}, am ready.`);
});
client.on('message', message => {
  //Ignores messages that don't start with prefix
  if (message.content.indexOf(config.prefix) !== 0) return;
  //Ignores all bots
  if (message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase().replace(/[\W_]+/g,"");

  try{
    let commandFile = require(`./commands/${command}.js`)
    commandFile.run(client, message, args);
  }
  catch (err) {
    console.log(err);
    message.channel.send('Sorry, I don\'t recognize that command.');
    //add a log file later.
}
});

client.login(config.rohanToken);
