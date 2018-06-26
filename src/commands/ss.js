const { sshelp } = require('../assets/arrays/text.json')
const misc = require('../utils/misc.js');

exports.run = (client, message, args) => {
    if(args[0] === 'help')
        message.channel.send(sshelp);
    else if(args[0] === 'info')
        message.channel.send('Placeholder for Info');
    else if (args[0] === 'ainfo')
        message.channel.send('Placeholder for admin info');
    else if (args[0] === 'begin')
        message.channel.send('Placeholder for begin date.');
    else if (args[0] === 'cutoff')
        message.channel.send('Placeholder cutoff date');
    else if (args[0] === 'end')
        message.channel.send('Placeholder end');
    else if (args[0] === 'rules')
        message.channel.send('Placeholder ruels');
    else if (args[0] === 'remove')
        message.channel.send('Placeholder remove');
    else if (args[0] === 'enter')
        message.channel.send('Placeholder Enter');
    else if (args[0] === 'exit')
        message.channel.send('Placeholder Exit');
    else if (args[0] === 'request')
        message.channel.send('Placeholder request');
    else if (args[0] === 'anon')
        message.channel.send('anon');
    else if (args[0] === 'upload')
        message.channel.send('upload');
    else
        message.channel.send('Please use the `~ss help` command if you need help.')   
}