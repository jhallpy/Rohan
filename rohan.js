/*
Hello and welcome to Rohan!
*/
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.specialCommands = new Discord.Collection();
client.prefix = new Discord.Collection();


const { token, beta, prefix } = require('./config.json');
const sing = require('./assets/arrays/sing.json');

const { promisify } = require('util');
const readdir = promisify(require('fs').readdir);

const specialComFolder = './special_commands/';
const commandFolder = './commands/';

// TODO: Increment version numbers...
// TODO: Add Database
const init = async() => {
  client.prefix.set(prefix, prefix);
  var commandLoad = new Promise((resolve, reject) => {
    readdir(commandFolder, (err, files) => {
      files.forEach(file => {
        if (!file.endsWith('.js')) return;
        else {
          const command = require(`./commands/${file}`);
          client.commands.set(command.name, command);
        }
        if (err)
          throw err;
      });
    });
  })
    .then((value) => {
    })
    .catch((err) => {
      console.log(err);
    });
  var spCommmandLoad = new Promise((resolve, reject) => {
    readdir(specialComFolder, (err, files) => {
      files.forEach(file => {
        if (!file.endsWith('.js')) return;
        else {
          const specialCommand = require(`./special_commands/${file}`);
          client.specialCommands.set(specialCommand.name, specialCommand);
        }
        if (err)
          throw err;
      });
    });
  })
    .catch((err) => {
      console.log(err);
    });
  const evtFiles = await readdir('./events/');
  Promise.all([commandLoad, spCommmandLoad]).then(evtFiles.forEach(file => {
    const eventName = file.split('.')[0];
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
  }));
  client.login();
};
init();
