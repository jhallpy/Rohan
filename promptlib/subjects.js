var rohan = require('../rohan.js')

var strange = ["ability", "abomination", "accident", "accomplishment", "accusation", "activist", "activity", "advertisment", "advisor", "aesthetic", "affair", "afterlife", "ahriman", "allegory", "ally", "amalgam", "amnesiac", "anathema", "aromatherapy",
"artifact", "audition", "aura", "avalanche", "bacteria", "balderdash", "ballad", "ballast", "ballot", "ban", "band", "bane", "bargain", "beast", "biohazard", "bioweapon", "blaze", "blitz", "bogeyman", "bomb",
"boom", "boon", "bootleg", "bounty", "brawl", "bribe", "brigade", "brood", "buffet", "burden", "cabal", "cadre", "calamity", "cameo", "camouflage", "campaign", "canopy", "cantrip", "caravan", "carcass",
"caricature", "case", "catalyst", "catastrophe", "celebration", "ceremony", "challenge", "charade", "choice", "chosen", "chronicle", "cipher", "circumstance", "client", "club", "clue", "code", "coincidence", "collection", "combination",
"commandment", "commitment", "committee", "competition", "conclusion", "confession", "conspiracy", "constellation", "cortege", "council", "coven", "covenant", "crew", "crisis",
];
  exports.strange = strange;
  console.log('strange:' + strange.length);

var fauna = ["aardvark", "abalone", "adder", "albatross", "alligator", "alpaca", "amoeba", "amphibian", "anchovy", "anemone", "anole", "ant", "anteater", "antelope", "armadillo", "ape", "axolotl", "aye aye", "baboon",
"badger", "bandicoot", "barnacle", "barracuda", "bass", "bat", "bear", "beaver", "bee", "beetle", "betta", "bilby", "bird", "bison", "bluebird", "boa", "boar", "bobcat", "bovid", "bream",
"buck", "budgie", "buffalo", "bug", "bull", "bullfrog", "bunny", "bustard", "butterfly", "buzzard", "calamari", "calf", "camel", "canary", "cane frog", "canine", "capybara", "caracal", "cardinal", "caribou",
"carp", "cassowary", "cat", "caterpillar", "catfish", "cattle", "cavefish", "cavy", "centipede", "chameleon", "cheetah", "chicken", "chimaera", "chimpanzee", "chinchilla", "chipmunk", "cicada", "civet", "clam", "clownfish",
"cobra", "cockatiel", "cockatoo", "cockroach", "cod", "coelacanth", "colt", "conch", "coral", "cormorant", "cougar", "cow", "coyote", "crab", "crane", "crayfish", "cricket", "crocodile", "crow", "cuckoo",
"cuttlefish",
];
  exports.fauna = fauna;
  console.log('fauna:' + fauna.length);

var unreals = ["ankylosaur", "basilisk", "brachiosaurus", "bunyip", "centaur", "chupacabra", "cockatrice", "coelurosaur", "creature", "critter",
];
  exports.unreals = unreals;
  console.log('unreal fauna:' + unreals.length);

var plants = ["acanthus", "acorn", "algae", "aloe", "amaranth", "artichoke", "azalea", "bamboo", "baneberry", "barley", "basil", "beech", "belladonna", "bergamot", "berry", "birch", "bloom", "blossom", "bluebell",
"bottlebrush", "bougainvillea", "bouquet", "bramble", "branch", "briar", "bud", "bulb", "bush", "buttercup", "cactus", "cane grass", "carambola", "cardamom", "carnation", "cassia", "cattail", "cedar", "clove", "clover",
"cotton", "cress",
];
  exports.plants = plants;
  console.log('plants:' + plants.length);

var meals = [ "ale", "alfalfa", "almond", "apple", "asparagus", "bacon", "bagel", "baguette", "banana", "beans", "beef",  "beer", "beetroot", "biscuit", "blueberry", "booze", "bourbon",  "brandy", "bratwurst",
"bread", "cabbage", "cantaloupe", "caper", "capsicum", "carrot", "cauliflower", "cake", "canapé", "candy", "caramel", "celery", "cherry", "chestnut", "chickpea", "chili", "chocolate", "cider", "cinnamon", "citron",
"cocktail", "coconut", "coffee", "confectionary", "cookie", "corn", "couscous", "cream", "crepe", "croissant",
];
  exports.meals = meals;
  console.log('meals:' + meals.length)

var objects = ["abacus", "accessory", "accordion", "acid", "aegis", "alarm", "alcohol", "alpenhorn", "altar", "ammunition", "amulet", "anchor", "armour", "armlet", "arrow", "ash", "athame", "axe", "badge",
"bag", "baggage", "bagpipes", "ball", "ballista", "balloon", "balm", "banjo", "banner", "barrel", "basin", "basket", "bassinet", "bassoon", "bath", "battery", "bauble", "bayonet", "bazooka", "beacon",
"bed", "bell", "bellows", "bench", "bible", "bicycle", "bin", "binoculars", "blade", "blimp", "bolas", "book", "boomerang", "bottle", "boulder", "bow", "bowl", "box", "brand", "brick",
"briefcase", "broom", "brush", "bucket", "bugle", "bullet", "bunting", "buoy", "bus", "cabinet", "cable", "cage", "calliope", "caltrop", "camera", "candelabra", "candle", "cane", "cannon", "canoe",
"canvas", "capsule", "car", "carafe", "cargo", "carousel", "carriage", "cart", "cash", "cask", "casket", "castanet", "catapult", "cauldron", "CD", "chain", "chair", "chalice", "chandelier", "chariot",
"chesspiece", "chest", "chime", "chisel", "chrysalis", "cigarette", "cinder", "cistern", "clasp", "claves", "clock", "cloud", "club", "cobweb", "cocoon", "codex", "coffer", "coffin", "cog", "coin",
"cologne", "column", "comb", "comet", "compass", "computer", "concertina", "concoction", "cord", "cornet", "couch", "cradle", "crate", "crayon",
];
  exports.objects = objects;
  console.log('objects:' + objects.length);

var locales = ["abbey", "abode", "abyss", "academy", "aery", "alley", "alp", "altar", "apartment", "aqueduct", "arboretum", "arcade", "arena", "arch", "armoury", "asteroid", "atmosphere", "aviary", "backstreet",
"badlands", "balcony", "ballet", "ballroom", "bank", "banquet", "baptism", "bar", "barbecue", "barge", "barn", "barracks", "barricade", "basilica", "bathhouse", "battleground", "bay", "bayou", "beach", "bedroom",
"beehive", "billet", "birthday party", "bistro", "bivouac", "blizzard", "board game", "boardroom", "boat", "bog", "boiler room", "boneyard", "bookshelf", "borderland", "boutique", "bower", "bridge", "brook", "bureau", "burial ground",
"burrow", "bypass", "cabana", "cabaret", "cabin", "cache", "café", "cafeteria", "caldera", "campsite", "campus", "canal", "cantina", "canyon", "cape", "car", "carnival", "cascade", "casino", "castle",
"catacombs", "cathedral", "cattery", "catwalk", "cave", "cavern", "cell", "cellar", "chamber", "chapel", "chessboard", "church", "cinema", "circus", "city", "class", "cliff", "clinic", "cloakroom", "cloister",
"closet", "cloudscape", "clubhouse", "coastline", "coliseum", "college", "complex", "compound", "concert", "conference", "consulate", "contest", "convent", "coronation", "cottage", "court", "courtyard", "crag", "crash site", "crater",
"creek", "crest", "crevasse",
];
  exports.locales = locales;
  console.log('locales:' + locales.length);
