/*
Hello and welcome to Rohan!
*/
const Discord = require('discord.js');
const client = new Discord.Client();

const { token, prefix } = require('./config.json');
const sing = require('./assets/arrays/sing.json');

const { promisify } = require('util');
const readdir = promisify(require('fs').readdir);

const specialComFolder = './special_commands/';
const commandFolder = './commands/';

var specialCommands = [];
var specialRegex = '';
var commands = [];
var regex = '';
var singingRegex = '';
// TODO: Convert to async and make event handlers placed in a separate folder.
// TODO: Add in escaping for the user input. Currently works well.
// TODO: Increment version numbers...
const init = async() => {
  var promise = new Promise((resolve, reject) => {
    readdir(commandFolder, (err, files) => {
      files.forEach(file => {
        if (!file.endsWith('.js')) return;
        commands.push(file.slice(0, file.length - 3));
        if (err)
          throw err;
      });
      resolve(commands);
    });
  })
    .then((value) => {
      value.forEach(x => regex += '\|\\b' + x + '\\b');
      regex = new RegExp(regex.slice(1), 'g');
    })
    .catch((err) => {
      console.log(err);
    });
  var promise1 = new Promise((resolve, reject) => {
    readdir(specialComFolder, (err, files) => {
      files.forEach(file => {
        if (!file.endsWith('.js')) return;
        specialCommands.push(file.slice(0, file.length - 3));
        if (err)
          throw err;
      });
      resolve(specialCommands);
    });
  })
    .then((value) => {
      value.forEach(x => specialRegex += '\|\\b' + x + '\\b');
      specialRegex = new RegExp(specialRegex.slice(1), 'g');
    })
    .catch((err) => {
      console.log(err);
    });
  var promise2 = new Promise((resolve, reject) => {
    sing.lyrics.forEach(x => {
      singingRegex += '\|\\b' + x.input.toLowerCase() + '\\b';
    });
    resolve(singingRegex);
  })
    .then(() => {
      singingRegex = new RegExp(singingRegex.slice(1), 'g');
    });
  const evtFiles = await readdir('./events/');
  Promise.all([promise, promise1, promise2]).then(evtFiles.forEach(file => {
    const eventName = file.split('.')[0];
    const event = require(`./events/${file}`);
    // I don't fully understand this yet but, it works.
    let x = {
      regex: regex,
      specialRegex: specialRegex,
      singingRegex: singingRegex,
      prefix: prefix,
    };
    client.on(eventName, event.bind(null, client, x));
  }));
  client.login(token);
};
init();
