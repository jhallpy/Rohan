module.exports = {
    //Returns a true or false. Used to make sure that a user is mentioned first. Explained in HD command.
    checkForOnlyUser: (args,message) => {
        return message.mentions.users.map(u=>u.id) == args[0].replace(/[^0-9]/g, "");
    },
    //Checks for User ID. This doesn't check args length due to NEEDING a user ID.
    checkUsers: (message)=> {
        let size = message.mentions.users.map(u=>u.id).length;
        if (size > 1)
            return true;
        else
            return false;    
    },
    //Only checks for User IDs to run a different set of instructions.
    checkTwoID: (message)=>{
        let size = message.mentions.users.map(u=>u.id).length;
        if (size == 2)
            return true;
        else
            return false;
    },
    //Only checks the passed args length because names outside Users can be used.
    checkTwoNoID: (args)=> {
        let size = args.length;
        if (size == 2)
            return true;
        else 
            return false;
    },
    //Only checks the passed args length because names outside Users can be used.
    checkThree: (args)=>{
        let size = args.length;
        if (size == 3)
            return true;
        else 
            return false;
    },
    checkRohan: (client,message) =>{
        //Must stay as loose comparison, one is string one is int.
        if (message.mentions.users.map(u=>u.id) == client.user.id)
            return true;
        else 
            return false;
    },
    //Potential no longer needed, keeping in for now.
    checkEmpty: (message)=>{
        let size = message.mentions.users.map(u=>u.id).length;
        if (message.mentions.users.map(u=>u.id).length < 1)
            return true;
        else 
            return false;
    }
    ,
    randomInArray: (array)=>{
        return array[Math.floor(Math.random() * array.length)];
    },
    shuffleArray: (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}