'use strict';
const util = require('../utils/db.js');
const moment = require('moment');
module.exports = {
  name: 'gift',
  usage: '~santa gift <text>',
  description: 'This command allows users to submit their gift. It should be a link to any hosting platform that the user can view.',
  async execute(client, message, args){
    const date = moment().format('YYYY/M/D ha');
    args.shift();
    const gift = args.join(' ');
    if (message.guild === null){
      message.reply('This command does not work in DM\'s');
    } else {
      const botPermissionManage = message.channel.guild.me.hasPermission('MANAGE_MESSAGES');
      const row = await util.getUserSanta(message.guild.id, message.author.id);
      const userinfo = await util.getUserInfo(message.guild.id, message.author.id);
      if (!botPermissionManage){
        message.reply('Rohan needs the ability to delete messages for this command to work. Please contact the servers owner.');
      } else if (row.active === undefined || row.active === 'false'){
        message.reply('There is no active event in this guild.');
      } else if (userinfo === undefined || userinfo.uniqueid !== row.uniqueid){
        message.reply('You have not joined this event.');
      } else if (gift === ''){
        message.reply(`'To use the gift command use \`~santa gift <text>\` followed by a link to your gift. You can change this until \`${moment(row.enddate, 'YYYY/M/D ha').format('LLL')}\`.'`
            + '\n ex. `~santa gift https://www.reddit.com/hot/`');
      } else if (moment(row.startdate, 'YYYY/M/D ha').isAfter(moment(date, 'YYYY/M/D ha'))){
        message.reply('You can not submit before the even starts!');
      } else if (gift.length > 200){
        if (message.deletable){
          message.delete();
          message.reply(`Your message was too long, length: \`${gift.length}\` `);
        } else {
          message.reply('Can\'t delete users message. \n' + `Your message was too long, length: \`${gift.length}\` `);
        }
      } else {
        if (message.deletable){
          util.addGift(message.guild.id, message.author.id, gift, row.uniqueid);
          message.author.send(`Your gift was: \`${gift}\`. If this is incorrect please try again. If the problem persists please join the help discord following the \`~help\` command link.`);
          message.delete();
          message.reply('Your gift was added, check your DM from Rohan for more info. Thank you. 再見');
        } else {
          message.author.send(`Your gift was: \`${gift}\`. If this is incorrect please try again. If the problem persists please join the help discord following the \`~help\` command link.`);
          util.addGift(message.guild.id, message.author.id, gift, row.uniqueid);
          message.reply('Your gift was added but, I was unable to delete your message. Please check channel permissions are setup correctly. \nYou can safely delete your message now. Check your DM from Rohan for more info ');
        }
      }
    }
  },
};
