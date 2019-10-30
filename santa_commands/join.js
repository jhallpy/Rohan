const util = require('../utils/db.js');
const moment = require('moment');
module.exports = {
  name: 'join',
  usage: '~santa join <text>',
  description: 'Join the current event. Also enter the ideal gift you would like to receive. Character limit is 1000. ex. `I want a drawing of a 土豆`\n'
    +'To change your request, run the command again with your new request. However, you can\'t change your request after the event has started.',
  async execute(client, message, args){
    let date = moment().format('YYYY/MM/DD ha');
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
      } 
      else if (request === ''){
        client.santaCommands.get('info').execute(client, message, args);
      }
      else if (moment(row.cutoff, 'YYYY/M/D ha').isBefore(moment(date, 'YYYY/M/D ha'))){
        message.reply('The cutoff date to join has passed.');
      } 
      else if (userinfo.uniqueid === row.uniqueid){
        if(moment(row.startdate, 'YYYY/M/D ha').isBefore(moment(date, 'YYYY/M/D ha'))){
          if (message.deletable){
            message.reply('You can\'t change your request after the event has started.');
            message.delete();
          }
          else{
            message.reply('You can\'t change your request after the event has started.');
          }
        }
        else{
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
      } else {
        if (message.deletable){
          util.addUser(message.guild.id, message.author.id, message.author.username, request);
          message.author.send(`Your request was: \`${request}\`. If this is incorrect please try again. If the problem persists please join the help discord following the \`~help\` command link.`);
          message.delete();
          message.reply('Your request was added, check your DM from Rohan for more info. Thank you. 再見');
        } else {
          message.author.send(`Your request was: \`${request}\`. If this is incorrect please try again. If the problem persists please join the help discord following the \`~help\` command link.`);
          util.addUser(message.guild.id, message.author.id, message.author.username, request);
          message.reply('Your request was added but, I was unable to delete your message. Please check channel permissions are setup correctly. \nYou can safely delete your message now. Check your DM from Rohan for more info ');
        }
      }
    }
  },
};
