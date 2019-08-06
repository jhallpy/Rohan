let { adjectives } = require('../assets/arrays/adjectives.json');
let { expressions } = require('../assets/arrays/expressions.json');
let { verbs } = require('../assets/arrays/verbs.json');
let { transitive } = require('../assets/arrays/transitive.json');
let { clothing } = require('../assets/arrays/clothing.json');
let { strange } = require('../assets/arrays/strange.json');
let { fauna } = require('../assets/arrays/fauna.json');
let { unreals } = require('../assets/arrays/unreals.json');
let { plants } = require('../assets/arrays/plants.json');
let { meals } = require('../assets/arrays/meals.json');
let { locales } = require('../assets/arrays/locales.json');
let { jobs } = require('../assets/arrays/jobs.json');
let { objects } = require('../assets/arrays/objects.json');
let misc = require('../utils/misc.js');

exports.run = (client, message, args) => {
    let msg = args.join(' ').replace(/\s+/g, '').toLowerCase();
    let output = '';
    for(i=0;i<msg.length;i++)
    {
      if (msg.charAt(i) === 'a') {
        output += misc.randomInArray(adjectives) + ' ';
      }
      else if (msg.charAt(i) === 'j') {
        output += misc.randomInArray(jobs) + ' ';
      }
      else if (msg.charAt(i) === 'e') {
        output += misc.randomInArray(expressions) + ' ';
      }
      else if (msg.charAt(i) === 'v') {
        output += misc.randomInArray(verbs) + ' ';
      }
      else if (msg.charAt(i) === 's') {
        output += misc.randomInArray(strange) + ' ';
      }
      else if (msg.charAt(i) === 'f') {
        output += misc.randomInArray(fauna) + ' ';
      }
      else if (msg.charAt(i) === 'u') {
        output += misc.randomInArray(unreals) + ' ';
      }
      else if (msg.charAt(i) === 'p') {
        output += misc.randomInArray(plants) + ' ';
      }
      else if (msg.charAt(i) === 'm') {
        output += misc.randomInArray(meals) + ' ';
      }
      else if (msg.charAt(i) === 'o') {
        output += misc.randomInArray(objects) + ' ';
      }
      else if (msg.charAt(i) === 'l') {
        output += misc.randomInArray(locales) + ' ';
      }
      else if (msg.charAt(i) === 'c') {
        output += misc.randomInArray(clothing) + ' ';
      }
      else if (msg.charAt(i) === 't') {
        output += misc.randomInArray(transitive) + ' ';
      }
    }
    //Throws exception if user inputs nothing. Example: '~random '.
    if(!output)
      message.channel.send('Please use the `~help` command if you need help with this command');
    else
      message.channel.send(output);
}