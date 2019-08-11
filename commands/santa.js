/* let help = require('../assets/arrays/text.json')
exports.run = (client, message, args) => {
    if(args === undefined || args.length === 0) message.channel.send(help.santa);
    else{
        const command = args[0].toLowerCase().replace(/[\W_]+/g,"");
        try{
            let commandFile = require(`../commands/santa/${command}.js`);
            commandFile.run(client, message, args);
        }
        catch (err) {
            console.log(err);
            message.channel.send('Sorry, I don\'t recognize that command.');
        }
    }
}*/
exports.run = (client, message, args) => {
  message.channel.send('Currently under construction.');
};
