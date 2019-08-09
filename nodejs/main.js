//  const users =["chalkers","davemcfarland"];
function getProfile(username) {
  try{
    const https = require("https");
    const http = require("http");
    const request = https.get(
        `https://teamtreehouse.com/${username}.json`,
        response => {
        if (response.statusCode === 200) {
            let responseBody = "";
            response.on("data", data => {
            responseBody += data.toString();
            });
        response.on("end", () => {
          try {
            const profile = JSON.parse(responseBody);
            dispalyData(profile);
          } catch (error) {
            printError(error);
          }
        });
        } else {
            const message = `There was an error for ${username}${
            http.STATUS_CODES[response.statusCode]
            }`;
            const statusCodeError = new Error(message);
            printError(statusCodeError);
        }
    }
  );

  request.on("error", error => {
    console.error(`error is : ${error.message}`);
    });
}catch(error){
    printError(error);
}  
} 

function printError(error) {
  console.error(error.message);
}
function dispalyData(data) {
  return console.log(
    `${data.name} has ${data.points.total} and ${data.badges.length}`
  );
}
module.exports.get= getProfile;
