/*
Hello and welcome to Rohan!
*/
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const config = require ("./config.json");
client.config = config;
const sing = require('./assets/arrays/sing.json');

const specialComFolder = './special_commands/';
const commandFolder = './commands/';

var specialCommands = [];
var specialRegex = '';
var commands = [];
var regex = '';
var singingRegex = '';
console.log();
client.on('ready', () => {
  console.log(`I, ${client.user.username}, am ready.`);
  client.user.setActivity('~help');
});
var promise = new Promise((resolve, reject) => {
  fs.readdir(commandFolder, (err,files) => {
    files.forEach(file => {
      if(!file.endsWith('.js')) return;
      commands.push(file.slice(0, file.length-3));
    })
    resolve(commands);
  })
})
.then((value) => {
  value.forEach(x => regex += "\|\\b"+x+"\\b");
  regex = regex.slice(1);
  regex = new RegExp(regex, 'g');
})
.catch((err) =>{
  console.log(err);
});
var promise1 = new Promise((resolve, reject) => {
  fs.readdir(specialComFolder, (err,files) => {
    files.forEach(file => {
      if(!file.endsWith('.js')) return;
      specialCommands.push(file.slice(0, file.length-3));    
    })
    resolve(specialCommands);
  })
})
.then((value) => {
  value.forEach(x => specialRegex += "\|\\b"+x+"\\b");
  specialRegex = new RegExp(specialRegex.slice(1), 'g');
})
.catch((err) =>{
  console.log(err);
});
sing.lyrics.forEach(x =>{
  singingRegex += "\|\\b"+x.input.toLowerCase()+"\\b";
})
singingRegex = new RegExp(singingRegex.slice(1), 'g');
//TODO: Convert to async and make event handlers placed in a separate folder.
//TODO: Add in escaping for the user input. Currently works well.
//TODO: Increment version numbers...
client.on('message', message =>{
  let args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase().replace(/[\W_]+/g,"");
    
    console.log(message.content.toLowerCase().match(singingRegex));
    try{
      //Ignores all bots, MUST BE AT THE TOP. Avoids infinite loops.
      if (message.author.bot) return;
  
      //must check for prefix, will mess up other commands if it doesn't.
      else if(message.content.indexOf(config.prefix) !== 0){
        if (message.content.toLowerCase().match(specialRegex) !== null){
            let commandFile = require(`./special_commands/${message.content.toLowerCase().match(specialRegex)[0]}.js`);
            commandFile.run(client, message, args);
        }
        else if (message.content.toLowerCase().match(singingRegex) != null){
            args = message.content.toLowerCase().match(singingRegex)[0];
            let commandFile = require(`./special_commands/sing.js`);
            commandFile.run(client, message, args);
        }
      }
      //Ignores messages that don't start with prefix. Also checks against strikethroughs.
      else if (message.content.indexOf(config.prefix) !== 0 || message.content.lastIndexOf(config.prefix) > 0) return;
  
      else if (command.match(regex) !== null){
        let commandFile = require(`./commands/${command.match(regex)[0]}.js`);
        commandFile.run(client, message, args);
      }
      else
        message.channel.send('Sorry, I don\'t recognize that command.');
      }
      catch(err){
          console.log(err)
      }
});
client.login(config.token);