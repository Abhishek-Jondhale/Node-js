
const userSchema = require('../module/config');

const examservice = {
  
    save: async (newuser) => {
      
        const data = userSchema(newuser);
        const user = await data.save();
        console.log("User saved successfully");
        return user;
    },

    
    
};

module.exports = examservice;



    

