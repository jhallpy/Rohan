const util = require('../utils/db.js');
const moment = require('moment');
module.exports = {
  name: 'request',
  usage: '~santa request <text>',
  description: 'Enter the ideal gift you would like to receive. Character limit is 1000. ex. `I want a drawing of a 土豆`',
  async execute(client, message, args){
    const date = moment().format('YYYY/MM/DD ha');
    args.shift();
    const request = args.join(' ');
    if (message.guild === null){
      message.reply('This command does not work in DM\'s');
    } else {
      const row = await util.getUserSanta(message.guild.id, message.author.id);
      const userinfo = await util.getUserInfo(message.guild.id, message.author.id);
      const botPermissionManage = message.channel.guild.me.hasPermission('MANAGE_MESSAGES');
      if (!botPermissionManage){
        message.reply('Rohan needs the ability to delete messages for this command to work. Please contact the servers owner.');
      } else if (row.active === undefined || row.active === 'false'){
        message.reply('There is no active event in this guild.');
      } else if (userinfo === undefined || userinfo.uniqueid !== row.uniqueid){
        message.reply('You have not joined this event.');
      } else if (request === ''){
        message.reply(`'To use the request command use \`~santa request\` followed by the ideal gift you\'d like to receive up to 1500 characters. You can change this until the \`${row.cutoff}\`.'`
            + '\n ex. `~santa request I would like a short story about potatoes`');
      } else if (moment(row.cutoff, 'YYYY/M/D ha').isBefore(moment(date, 'YYYY/M/D ha'))){
        message.reply('You can not change your requested gift after the cutoff date.');
      } else if (request.length > 1500){
        if (message.deletable){
          message.delete();
          message.reply(`Your message was too long, length: \`${request.length}\` `);
        } else {
          message.reply('Can\'t delete users message. \n' + `Your message was too long, length: \`${request.length}\` `);
        }
      } else {
        if (message.deletable){
          util.addRequest(message.guild.id, message.author.id, request, row.uniqueid);
          message.author.send(`Your request was: \`${request}\`. If this is incorrect please try again. If the problem persists please join the help discord following the \`~help\` command link.`);
          message.delete();
          message.reply('Your request was added, check your DM from Rohan for more info. Thank you. 再見');
        } else {
          message.author.send(`Your request was: \`${request}\`. If this is incorrect please try again. If the problem persists please join the help discord following the \`~help\` command link.`);
          util.addRequest(message.guild.id, message.author.id, request, row.uniqueid);
          message.reply('Your request was added but, I was unable to delete your message. Please check channel permissions are setup correctly. \nYou can safely delete your message now. Check your DM from Rohan for more info ');
        }
      }
    }
  },
};
