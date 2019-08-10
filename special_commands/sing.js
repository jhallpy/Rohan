const sing = require("../assets/arrays/sing.json")
exports.run = (client, message, args) => {
    sing.lyrics.forEach(x =>{
        if(args === x.input) message.channel.send(x.reply);
    })
}