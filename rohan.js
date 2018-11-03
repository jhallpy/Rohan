/*
Hello and welcome to Rohan!
*/
const Discord = require('discord.js');

const config = require ("./config.json");
const client = new Discord.Client();

const mysql = require('mysql');
const pool = mysql.createPool({
  //Looking for a way to do this easier. This works for now.
  connectionLimit: 10,
  host : config.dbLogin.host,
  user : config.dbLogin.user,
  password : config.dbLogin.password
});

client.config = config;

client.on('ready', () => {
  console.log(`I, ${client.user.username}, am ready.`);
});

client.on('message', message => {

  //Ignores messages that don't start with prefix. 
  //Also to check if it occurs more than once for example `~~test~~` is a strikethrough, it would trigger the response if we didn't check.
  if (message.content.indexOf(config.prefix) !== 0 || message.content.lastIndexOf(config.prefix) > 0) return;

  //Ignores all bots
  if (message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase().replace(/[\W_]+/g,"");
  
  //currently throws error if command doesn't exist, looking for solution to test for this instead of catching it then leave this as a last resort.
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

client.login(config.token);
