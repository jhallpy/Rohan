const { adjectives } = require('../assets/arrays/adjectives.json');
const { expressions } = require('../assets/arrays/expressions.json');
const { verbs } = require('../assets/arrays/verbs.json');
const { transitive } = require('../assets/arrays/transitive.json');
const { clothing } = require('../assets/arrays/clothing.json');
const { strange } = require('../assets/arrays/strange.json');
const { fauna } = require('../assets/arrays/fauna.json');
const { unreals } = require('../assets/arrays/unreals.json');
const { plants } = require('../assets/arrays/plants.json');
const { meals } = require('../assets/arrays/meals.json');
const { locales } = require('../assets/arrays/locales.json');
const { jobs } = require('../assets/arrays/jobs.json');
const { objects } = require('../assets/arrays/objects.json');
const misc = require('../utils/misc.js');

module.exports = {
  name: 'random',
  usage: '~random <Any number of categories ex. ajevt>',
  description: '`~random` - generates random word prompts, assigned into categories: (A)djectives (J)obs (E)xpressions (V)erbs (T)ransitiveVerbs'
    + '(C)lothing (S)trange nouns (F)auna (U)nreal/unusual animals (P)lants (M)eals (O)bjects (L)ocales\nExample: typing `~random aj` might return `abducted basketballer`',
  execute(client, message, args){
    let msg = args.join(' ').replace(/\s+/g, '').toLowerCase();
    let output = '';
    for (var i = 0; i < msg.length; i++) {
      if (msg.charAt(i) === 'a') {
        output += misc.randomInArray(adjectives) + ' ';
      } else if (msg.charAt(i) === 'j') {
        output += misc.randomInArray(jobs) + ' ';
      } else if (msg.charAt(i) === 'e') {
        output += misc.randomInArray(expressions) + ' ';
      } else if (msg.charAt(i) === 'v') {
        output += misc.randomInArray(verbs) + ' ';
      } else if (msg.charAt(i) === 's') {
        output += misc.randomInArray(strange) + ' ';
      } else if (msg.charAt(i) === 'f') {
        output += misc.randomInArray(fauna) + ' ';
      } else if (msg.charAt(i) === 'u') {
        output += misc.randomInArray(unreals) + ' ';
      } else if (msg.charAt(i) === 'p') {
        output += misc.randomInArray(plants) + ' ';
      } else if (msg.charAt(i) === 'm') {
        output += misc.randomInArray(meals) + ' ';
      } else if (msg.charAt(i) === 'o') {
        output += misc.randomInArray(objects) + ' ';
      } else if (msg.charAt(i) === 'l') {
        output += misc.randomInArray(locales) + ' ';
      } else if (msg.charAt(i) === 'c') {
        output += misc.randomInArray(clothing) + ' ';
      } else if (msg.charAt(i) === 't') {
        output += misc.randomInArray(transitive) + ' ';
      }
    }
    // Throws exception if user inputs nothing. Example: '~random '.
    if (!output)
      message.channel.send('Please use the `~help` command if you need help with this command');
    else
      message.channel.send(output);
  },
};
