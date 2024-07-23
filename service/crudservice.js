
const userSchema = require('../module/user.schema');

const Authservice = {
  
    save: async (newuser) => {
      
        const data = userSchema(newuser);
        const user = await data.save();
        console.log("User saved successfully");
        return user;
    },

    
    
};

module.exports = Authservice;



    

