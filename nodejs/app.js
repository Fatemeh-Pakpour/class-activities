const userProfile = require('./main.js');
// users.forEach(username => getProfile(username));
//when the function take one parameter and foreach passes one in we can shorten our code to :
// there is another way to use global object process
const users = process.argv.slice(2);
users.forEach(userProfile.get);
