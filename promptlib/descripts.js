var rohan = require('../rohan.js')

var adjectives = ["abandoned", "abducted", "abominable", "absurd", "abysmal", "academic", "aeolian", "aerial", "alluring", "alpine", "anachronistic", "ancient", "animalistic", "anorexic", "antique", "apprentice", "aquatic", "arboreal", "arcane",
"arctic", "artificial", "astronomical", "asymmetrical", "automatic", "aureate", "autumnal", "avian", "babbling", "baby-faced", "babylonian", "backwards", "bad", "baffling", "baked", "balanced", "bald", "banal", "banished", "bankrupt",
"barbaric", "bare", "baroque", "barren", "basic", "basilic", "battered", "bawdy", "beady", "bearded", "beastly", "beatable", "beautiful", "belligerent",  "benevolent", "benign", "bent", "bewitched", "big", "bilious",
"bionic", "bizarre", "blended", "blessed", "blind", "blonde", "bloodcurdling", "bloodless", "blunt", "bodacious", "bohemian", "bold", "bombastic", "bony", "boreal", "botanical", "bouncy", "bound", "brass", "brash",
"bright", "brilliant", "brittle", "broad", "broken", "brutal", "buff", "buried", "burnt", "calamitous", "calculated", "calico", "callous", "calm", "candent", "candid", "capable", "carved", "casual", "caustic",
"celestial", "ceramic", "certified", "chaotic", "charismatic", "charming", "cheap", "chic", "chill", "chintzy", "chipped", "chiselled", "chromatic", "chubby", "civil", "clairvoyant", "classy", "classified", "clean", "closed",
"clumsy", "cold", "collectible",  "colossal", "colourful", "common", "compact", "complicated", "compressed", "concealed", "condemned", "confined", "consecrated", "conspicuous", "contemporary", "correct", "corroded", "corrupt", "cosmic", "covert",
"cracked", "cramped", "creepy",
];
  exports.adjectives = adjectives;
  console.log('adjectives:' + adjectives.length);

var jobs = ["acolyte", "acrobat", "actor", "acupuncturist", "addict", "adventurer", "advisor", "alchemist", "alien", "ancestor", "android", "angel", "apparition", "archeologist", "archer", "architect", "arsonist", "artilleryman", "artist",
"assassin", "athlete", "attorney", "augur", "author", "baby", "bachelor", "baker", "ballerina", "bandit", "banker", "banshee", "barber", "bard", "baritone", "baron", "barrista", "bartender", "baseballer", "basketballer",
"bastard", "beekeeper", "beggar", "belle", "bellhop", "bellwether", "benefactor", "biker", "blacksmith", "bodybuilder", "bombardier", "boss", "botanist", "bowler", "bowyer", "boxer", "boy scout", "brat", "brawler", "brewer",
"bride", "builder", "bumpkin", "bureaucrat", "bushwhacker", "butcher", "butler", "cadet", "calligrapher", "cameraman", "camper", "cannoneer", "cantor", "captain", "cardinal", "caroller", "carpenter", "carver", "cashier", "castaway",
"caterer", "cavalier", "caveman", "ceramist", "chairperson", "chamberlain", "champion", "chancellor", "changeling", "chaperone", "charlatan", "chef", "chemist", "chief", "child", "chirurgeon", "choreographer", "chorister", "chump", "citizen",
"cleaner", "cleric", "clone", "clown", "coach", "cobbler", "collector", "colonel", "colonist", "comedian", "commander", "companion", "composer", "comrade", "concierge", "conductor", "confectioner", "conjurer", "conqueror", "consort",
"convict", "cook", "coroner", "corporal", "counselor", "count", "courier", "courtier", "cowboy", "crewmate", "criminal",
];
  exports.jobs = jobs;
  console.log('jobs:' + jobs.length);

var expressions = ["adamant", "addled",  "admiring", "afflicted", "affronted", "admonishing", "adorable", "afraid", "agonised", "agreeable", "alarmed", "aloof", "amazed", "amused", "angry", "annoyed", "antsy", "anxious", "argumentative",
"arrogant", "baffled", "baleful", "befuddled", "bemused", "bereaved", "bewildered", "bitter", "blissful", "blithe", "blushing", "boasting", "boggled", "bored", "bothered", "brave", "brooding", "bubbly", "cackling", "calculating",
"capricious", "captivated", "carefree", "caring", "caterwauling", "chastising", "cheerful", "chiding", "chilling", "chortling", "chuffed", "clueless", "cocky", "comatose", "comfortable", "compassionate", "complaining", "conceited", "concentrating", "concerned",
"confident", "conflicted", "confounded", "confused", "contemplative", "contempt", "coughing", "courageous", "covetous", "cowering", "cowed", "coy", "crafty", "cranky", "crazed", "cringing",
];
  exports.expressions = expressions;
  console.log('expressions:' + expressions.length);

var verbs = ["abdicating", "absconding", "accelerating", "aching", "adapting", "adventuring", "advertising", "affronting", "appearing", "ascending", "atoning", "attenuating", "attuning", "awakening", "bailing", "baking", "balancing", "bantering", "barndancing",
"bartering", "basking", "bathing", "bawling", "beachcombing", "belching", "beleaguering", "bellowing", "biding [time]", "bleeding", "blogging", "bobsledding", "bowling", "boxing", "brewing", "building", "bungee jumping", "burning", "busking", "camping",
"capsizing", "carousing", "carving", "casting", "cavorting", "celebrating", "changing", "channeling", "chanting", "charging", "cheerleading", "clapping", "cleansing", "climbing", "collapsing", "communing", "competing", "conjuring", "crawling", "creeping",
];
  exports.verbs = verbs;
  console.log ('verbs:' + verbs.length);

var transitive = ["abandoning", "abducting", "abhorring", "abolishing", "absorbing", "abusing", "accusing", "acquiring", "activating", "adding", "addressing", "adjusting", "adopting", "aiding", "allying", "analysing", "annihilating", "antagonising", "anointing",
"amusing",  "appraising", "arming", "assaulting", "assembling", "astonishing", "augmenting", "backstabbing", "bagging", "baiting", "bamboozling", "barraging", "bashing", "battering", "bearing", "beautifying", "beguiling", "beholding", "bejewelling", "begging",
"bending", "believing", "belittling", "bequeathing", "berating", "beseeching", "bestowing", "betting", "betraying", "bidding", "binding", "biting", "blocking",  "blowing [on]", "bonding", "borrowing", "breaking", "bumping", "calibrating", "calling",
"capturing", "catching", "chaining", "chasing", "cheating", "checking", "choosing", "circling", "claiming", "cleaning", "coercing", "commanding", "compacting", "comparing", "compelling", "connecting", "consoling", "constructing", "constricting", "consuming",
"contaminating", "corralling", "crafting", "creating",
];
  exports.transitive = transitive;
  console.log ('transitive verbs:' + transitive.length);

//clothing (incomplete) needs letter a and a good source glossary
var clothing = ["babouche", "babushka", "backpack", "bangle", "bangs", "barbut", "bathers", "bathrobe", "belt", "beret", "bib", "bikini", "blazer", "blindfold", "bloomers", "bodice", "boot", "bow", "bowtie",
"bra", "bracelet", "bracer", "brassiere", "breeches", "burqa", "camisole", "cap", "cape", "capelet", "cardigan", "cardinal", "chausses", "chemise", "choker", "circlet", "cloak", "clogs", "coat", "coatee",
"coif", "collarette", "coronet", "corset", "costume", "cowl", "cravat",
];
  exports.clothing = clothing;
  console.log('clothing:' + clothing.length);
