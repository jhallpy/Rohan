/*
Hello and welcome to Rohan!
*/
const Discord = require('discord.js');
const client = new Discord.Client();
const mysql = require('mysql');
const fs = require('fs');

const misc = require("./utils/misc");
const config = require ("./config.json");
client.config = config;

client.on('ready', () => {
  console.log(`I, ${client.user.username}, am ready.`);
});

const commandFolder = './commands/';
var commands = [];
fs.readdir(commandFolder, (err,files) => {
  files.forEach(file => {
    if(!file.endsWith('.js')) return;
    commands.push(file);
  })
});
const specialComFolder = './special_commands/';
var specialCommands = [];
fs.readdir(specialComFolder, (err,files) => {
  files.forEach(file => {
    if(!file.endsWith('.js')) return;
    specialCommands.push(file.slice(0, file.length-3));
  })
});

//TODO: Convert to async and make event handlers placed in a separate folder.
client.on('message', message => {
  let smallCommand = message.content.toLowerCase();
  //I think these are const for a reason. Might test later, not sure it matters honestly.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase().replace(/[\W_]+/g,"");
  //Ignores all bots, MUST BE AT THE TOP. Avoids infinite loops.
  if (message.author.bot) return;
  //additional expansion to the bot, still WIP
  else if(smallCommand.indexOf('valid') > -1){
    let test = smallCommand.match(/\bvalid\b/g);
    if(test === null) return;
    try{
      let commandFile = require('./special_commands/valid.js');
      commandFile.run(client, message);
    }
    catch (err) {
      console.log(err);
      message.channel.send('Sorry, something went wrong.');
      //add a log file later.
    }
  }
  //Ignores messages that don't start with prefix. 
  //Also to check if it occurs more than once for example `~~test~~` is a strikethrough, it would trigger the response if we didn't check.
  else if (message.content.indexOf(config.prefix) !== 0 || message.content.lastIndexOf(config.prefix) > 0) return;
  else if (misc.isCommand(commands, command)){
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  }
  else
    message.channel.send('Sorry, I don\'t recognize that command.');
});

client.login(config.token);