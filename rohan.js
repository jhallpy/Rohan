/*
Hello and welcome to Rohan!
*/
'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.specialCommands = new Discord.Collection();
client.santaCommands = new Discord.Collection();
client.prefix = new Discord.Collection();
client.specialRegex = new Discord.Collection();

const sqlite3 = require('sqlite3').verbose();
const { token, beta, prefix } = require('./config.json');
const sing = require('./assets/arrays/sing.json');
const { promisify } = require('util');
const readdir = promisify(require('fs').readdir);
var cron = require('node-cron');
const hourly = require('./utils/hourly.js');


const specialComFolder = './special_commands/';
const commandFolder = './commands/';
const santaComFolder = './santa_commands';


// TODO: Increment version numbers...
const commandUsage = 'CREATE TABLE IF NOT EXISTS CommandUsage (command TEXT UNIQUE PRIMARY KEY, uses TEXT);';
const guilds = 'CREATE TABLE IF NOT EXISTS Guilds (guildid TEXT PRIMARY KEY, guildname TEXT, guildsize TEXT, guildusage TEXT, prefix TEXT);';
const user = 'CREATE TABLE IF NOT EXISTS User (userid TEXT PRIMARY KEY, rating TEXT, numberjoined TEXT);';
const secretSantaTable = 'CREATE TABLE IF NOT EXISTS SecretSanta (uniqueid INTEGER PRIMARY KEY, guildid TEXT, startdate TEXT, enddate TEXT, rules TEXT, cutoff TEXT, userid TEXT, ownername TEXT, active TEXT, started TEXT, numberedited TEXT);';
const entries = 'CREATE TABLE IF NOT EXISTS SantaEntries (uniqueid INTEGER, userid TEXT, guildid TEXT, request TEXT, assigneduserid TEXT, gift TEXT, username TEXT, received TEXT);';
const init = async() => {
  let specialRegex = '';
  let db = new sqlite3.Database('./assets/db/rohan.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
      console.error(err.message + ' init');
    }
    console.log('Connected to the Rohan Database.');
  });
  db.parallelize((err) => {
    db.run(commandUsage)
      .run(guilds)
      .run(user)
      .run(secretSantaTable)
      .run(entries);
    if (err)
      return console.message(err.message + ' run');
  });
  client.prefix.set(prefix, prefix);
  var commandLoad = new Promise((resolve, reject) => {
    readdir(commandFolder, (err, files) => {
      files.forEach(file => {
        if (!file.endsWith('.js')) return;
        else {
          const command = require(`./commands/${file}`);
          client.commands.set(command.name, command);
          if (command.name !== undefined){
            db.serialize((err) => {
              db.run('INSERT OR IGNORE INTO CommandUsage (command,uses) VALUES (?,0);', [command.name], (err) => {
                if (err)
                  return console.error(err.message);
              });
              if (err)
                return console.error(err.message);
            });
          }
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
          if (specialCommand.name !== undefined){
            specialRegex += '\|\\b' + specialCommand.name + '\\b';
            db.serialize((err) => {
              db.run('INSERT OR IGNORE INTO CommandUsage (command,uses) VALUES (?,0);', [specialCommand.name], (err) => {
                if (err)
                  return console.error(err.message);
              });
              if (err)
                return console.error(err.message);
            });
          }
        }
        if (err)
          throw err;
      });
      resolve(specialRegex);
    });
  })
  .then((value)=>{
    client.specialRegex.set('Regex', value);
  })
  .catch((err) => {
    console.log(err);
  });
  var santaCommandLoad = new Promise((resolve, reject) => {
    readdir(santaComFolder, (err, files) => {
      files.forEach(file => {
        if (!file.endsWith('.js')) return;
        else {
          const santaCommands = require(`./santa_commands/${file}`);
          client.santaCommands.set(santaCommands.name, santaCommands);
          if (santaCommands.name !== undefined){
            db.serialize((err) => {
              db.run('INSERT OR IGNORE INTO CommandUsage (command,uses) VALUES (?,0);', [santaCommands.name], (err) => {
                if (err)
                  return console.error(err.message);
              });
              if (err)
                return console.error(err.message);
            });
          }
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
  Promise.all([commandLoad, spCommmandLoad, santaCommandLoad])
    .then(() => {
      console.log(specialRegex);
      db.close((err) => {
        if (err)
          return console.error(err.message + ' close');
      });
    },
    evtFiles.forEach(file => {
      const eventName = file.split('.')[0];
      const event = require(`./events/${file}`);
      client.on(eventName, event.bind(null, client));
    }));
  client.login(beta);
  cron.schedule('1 */1 * * *', () => {
    hourly.execute(client);
  });
};
init();
