'use strict';
const util = require('../utils/db.js');
const moment = require('moment');
module.exports = {
  name: 'leave',
  usage: '~santa leave',
  description: 'Allows the user to leave up until the event starts.',
  async execute(client, message, args){
    const date = moment().format('YYYY-MM-DD ha');
    if (message.guild === null){
      message.reply('This command does not work in DM\'s');
    } else {
      const row = await util.getUserSanta(message.guild.id, message.author.id);
      const userinfo = await util.getUserInfo(message.guild.id, message.author.id);
      if (row.active === undefined || row.active === 'false'){
        message.reply('There is no active event in this guild.');
      } else if (userinfo.uniqueid !== row.uniqueid){
        message.reply('You have already left or have not joined this event.');
      } else if (moment(row.startdate, 'YYYY/M/D ha').isBefore(moment(date, 'YYYY/M/D ha'))){
        message.reply('You can\'t leave after the start date. Please contact the event owner.');
      } else {
        message.reply('You have successfully left the event.');
        util.userLeave(message.guild.id, message.author.id);
      }
    }
  },
};
