const sing = require("../assets/arrays/sing.json")
exports.run = (client, message, args) => {
    console.log(args);
    sing.lyrics.forEach(x =>{
        if(args === x.input.toLowerCase()) message.channel.send(x.reply);
    })
}