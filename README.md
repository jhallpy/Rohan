![alt text](https://puu.sh/uXOWn/c5b7e29f81.jpg "AHAHAHA")
# Rohan Bot
Rohan is a discord bot for art prompts and... a few other things. But mostly art prompts. I swear. Even if we got sidetracked, and started adding more unrelated commands and there are only a few letters of the alphabet in the prompt lists. (this bot will be incomplete for several months, most likely; this upload is a very early build for convenience of collaborators.)

#CHANGE log
-expanded library with letter c
-added new word categories (c)"clothing", (m)"meals", (u)"unreals"(unreal animals),
-split verbs into (v) "verbs" non-transitive verbs, and (t) "transitive" transitive verbs
-renamed moods to (e)expressions to make room for (m)meals

# COMMANDS:
## ~ping
Does what you expect it to. Or does it?!
## ~help
Issues the help guide to the channel/DM where you asked for it. (but if you're reading this, you probably don't need it...)
## ~duwang
Gives one of Rohan's quotes from Duwang.
## ~hd @mention
(short for Heaven's Door) Takes the user mentioned, and makes up a secret about them. How embarrassing. (Secrets are stored in the "heaven" variable/array.) Don't use it on Rohan or he'll get angry.
## ~sp @mention
Like Heaven's Door, but returns the user's apparent favourite object (from the objects array)
## ~dj @mention
Like Heaven's Door, but returns the user's apparent dream job (from the jobs array)
## ~a|c|e|f|j|l|m|o|p|s|t|u|v
The actual prompts. Any single letter, or combination of letters, will return a random result from their associated arrays:

- a = adjectives
- c = clothing
- e = expressions
- f = fauna
- j = jobs
- l = locales
- m = meals
- o = objects
- p = plants
- s = strange nouns
- t = transitive verbs
- u = unusual, perhaps unreal (mythical) animals 
- v = (regular) verbs

(note: don't use spaces in this command)

# INSTALL GUIDE:
(tested with node.js 6.11.0 on Windows 10)
1. Settle the rohan master folder somewhere cool.
2. Download https://nodejs.org/en/
3. Open a command window and type "-npm install"
4. Then, type "npm install --save discord.js"
5. Shift right-click the rohan folder, select "open command window here", then type "node rohan.js" to run Rohan
(note: if this doesn't work, navigate to the folder using cd [path] (eg. I type cd C:\Users\Furii\Desktop\rohan), or download Git and use their integration in windows explorer to force the right click option to work with Git Bash)
6. Good stuff happens

Steps 3 and 4 might not be necessary. Please try without them and then get back to me if you're interested.

#ADDITIONAL STEPS FOR CONTRIBUTORS:
Here's a guide on how to set up Git. 
1. Follow the steps to download & configure. https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf
2. Create Gitlab account. Get it OK'd with me so I can make you a contributor before continuing.
3. Make SSH key for your account: https://docs.gitlab.com/ce/ssh/README.html (follow "Generating a new SSH key pair" all the way through)
4. To create your very own Rohan directory, open Git Bash in the folder you want Rohan to sit and type: 
git clone https://gitlab.com/Furiianda/rohan/ 
5. Enter your Gitlab user/pass, then wait for it to download. 
6. CONGRATS! He's all there! Here are some commands you can use to make a branch: https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html
7. I'll man the merges and master commits, I guess?? 
8. get too lazy to do all that, and just send it to Furii instead ;_;

# TODO:
```
split verb category into grammatically capable things
prompts (studies -
    anatomy, composition, lighting(time of day?), pose generator
wiki random links
mineral prompt bucket?
generator links
expression generator
  expression meme links ()
spitpainting prompts
```
# ADVANCED:
```
random colour integration
secret prompt exchange (like secret santa)
edible category??
```
## handy url dump
[neopet paintbrush meme](http://josukeban.tumblr.com/post/158243486058)

[unusual medieval occupations](http://thefrickinpyrasaur.tumblr.com/post/156200484520/common-occupations-in-the-middle-ages)

[some dinosaurs](http://glaucophane.tumblr.com/post/156383805288/evosaur)
## LETTERS to add
a (for clothing only)

c - in progress
