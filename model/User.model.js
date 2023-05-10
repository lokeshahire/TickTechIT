const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    hobbies: {
      type: [String],
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};

/*  
 
get users  ++
get users/id ++
post users ++
put users/id ++
delete users/id ++

nonendpoint ++ 

---------

schema: - id username age hobbies ++

-------
 2 modes of running application
 horizontal scaling for application

*/
