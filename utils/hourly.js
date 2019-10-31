'use strict';
const util = require('./db.js');
const misc = require('./misc.js');
const moment = require('moment');
const discord = require('discord.js');
module.exports = {
  name: 'midnight',
  async execute(client){
    // TODO: Check to start event, check if only one person then cancel the event.
    let date = moment().format('YYYY/M/D hh:mm a');
    let guild = await util.getAllActiveGuilds();
    if (guild !== undefined){
      guild.forEach(async(guild) => {
        if (moment(guild.enddate, 'YYYY/M/D ha').isBefore(moment(date, 'YYYY/M/D ha')) && guild.active !== 'false'){
          let eventMembers = await util.getAllActiveUsers(guild.uniqueid);
          let promise = new Promise((resolve) => {
            eventMembers.forEach(user => {
              let embed = new discord.RichEmbed()
                .setColor(0x3a8d31)
                .setAuthor(client.user.username, client.user.avatarURL)
                .setTitle('Rohan\'s Delivery Service')
                .addField('Your Gift!', `${user.gift}`);
              try {
                client.users.get(user.assigneduserid).send(embed);
              } catch (err){
                try {
                  client.users.get(guild.userid).send(embed);
                } catch (err){
                  console.log(err);
                  console.log('\n\n================================================================');
                  console.log(guild.guildid);
                  console.log(user.gift);
                  console.log(user.userid);
                  console.log('\n\n================================================================');
                }
              }
            });
            resolve();
          })
            .then(() => {
              util.end(guild.guildid);
            })
            .catch((err) => {
              console.log(err + ' hourly promise.');
            });
        } else if (moment(guild.startdate, 'YYYY/M/D ha').isBefore(moment(date, 'YYYY/M/D hh:mm a'))){
          let eventMembers = await util.getAllActiveUsers(guild.uniqueid);
          if (eventMembers !== undefined && eventMembers[0].assigneduserid === null){
            // shuffle array
            let promise = new Promise((resolve, reject) => {
              let memberids = [];
              eventMembers.forEach((user) => {
                memberids.push(user.userid);
              });
              resolve(misc.derange(memberids));
            })
              .then((result) => {
                eventMembers.forEach((user, index) => {
                  let promise = new Promise((resolve) => {
                    resolve(util.getRequest(result[index], guild.guildid, guild.uniqueid));
                  })
                    .then((request) => {

                      let embed = new discord.RichEmbed()
                        .setColor(0x3a8d31)
                        .setAuthor(client.user.username, client.user.avatarURL)
                        .setTitle(`Rohan\'s Delivery Service for ${user.username}`)
                        .addField('Your assigned request!', `\`${request.request}\`\n If you received your own request, please contact the event owner and submit a bug report in the help discord.`);
                      try {
                        client.users.get(user.userid).send(embed);
                      } catch (err){
                        try {
                          client.users.get(guild.userid).send(embed);
                        } catch (err){
                          console.log(err);
                          console.log('\n\n================================================================');
                          console.log(guild.guildid);
                          console.log(result[index]);
                          console.log(user.userid);
                          console.log('\n\n================================================================');
                        }
                      }
                      util.assignUser(guild.guildid, user.userid, result[index]);
                      return request;
                    })
                    .catch((err) => {
                      console.log(err + ' promise in hourly REQUEST');
                    });
                });
              });
          }
        }
      });
    }
  },
};
