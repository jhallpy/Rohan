exports.run = (client, message, args) => {
    message.reply(`go away! \`${Date.now() - message.createdTimestamp} ms\``);
}