const { prompt } = require('../assets/arrays/prompt.json');
const misc = require('../utils/misc.js');

exports.run = (client, message, args) =>{
    console.log(args);
    if(args === undefined || args.length == 0){
        message.channel.send(misc.randomInArray(prompt.prompt));
    }
    else if(args.length == 1){
        message.channel.send(misc.randomInArray(prompt.onePrompt)
        .replace(/\$person/g, args[0]));
    }
    else if(args.length == 2){
        message.channel.send(misc.randomInArray(prompt.twoPrompt)
        .replace(/\$person1/g, args[0])
        .replace(/\$person2/g, args[1]));
    }
}