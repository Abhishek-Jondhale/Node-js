const Info = require('../module/info.model');
 const info={

    // post : async function(username,password){
          

    //     const user= new Info({
    //         username:username,
    //         password:password
    //     });

    //    const store= await  user.save();
    //    return store;
    // }

    save: async function (adminObject) {
        return await Info.create(adminObject);
      },
 }
//  put: async function(adminObject){
//   return await Info.update(adminObject)
//  }

//  module.exports=info
