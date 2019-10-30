const util = require('../utils/db.js');
const moment = require('moment');
module.exports = {
  name: 'remove',
  usage: '~santa remove <@User>',
  description: 'Allows the removal of any user not wanted in the event. They will be informed of their removal. Please only input one user at a time.',
  async execute(client, message, args){
    let date = moment().format('YYYY/M/D hh:mm a');
    if (message.guild === null){
      message.reply('This command does not work in DM\'s');
    } else {
      const row = await util.getUserSanta(message.guild.id, message.author.id);
      const userinfo = await util.getUserInfo(message.guild.id, message.mentions.users.first().id);
      if (message.author.id !== row.userid){
        message.reply('You are not the owner of the event.');
      } else if (moment(row.startdate, 'YYYY/M/D ha').isBefore(moment(date, 'YYYY/M/D ha'))){
        message.reply('The event has already started. Use the `~santa check` command to sort this manually.');
      } else if (userinfo.uniqueid !== row.uniqueid){
        message.reply('This user is not in your event.');
      } else {
        if (message.deletable){
          util.removeUser(message.guild.id, message.mentions.users.first().id, row.uniqueid);
          message.author.send(`The user ${message.mentions.users.first().username} has been removed from the event.`);
          client.users.get(message.mentions.users.first().id).send(`You have been removed from ${message.author.username}'s event.`);
          message.delete();
        } else {
          console.log(message.guild.id);
          console.log(message.mentions.users.first().id);
          console.log(row.uniqueid);
          util.removeUser(message.guild.id, message.mentions.users.first().id, row.uniqueid);
          message.author.send(`The user ${message.mentions.users.first().username} has been removed from the event.`);
          client.users.get(message.mentions.users.first().id).send(`You have been removed from ${message.author.username}'s event.`);
        }
      }
    }
  },
};
