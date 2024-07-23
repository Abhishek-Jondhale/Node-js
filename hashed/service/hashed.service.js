
const bcrypt = require('bcrypt');
const UserModel = require('../module/hashed.module');

async function registerUser(username, email, password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = new UserModel({
    username,
    email,
    password: hashedPassword,
  });

  return user.save();
}

async function loginUser(username, password) {
  const user = await UserModel.findOne({ username });

  if (!user) {
    return null; 
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return null; 
  }

  return user; 
}

module.exports = {registerUser,loginUser,};
