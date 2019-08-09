//  const users =["chalkers",  , ];
function getProfile(username) {
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
}
function printError(error) {
  console.error(error.message);
}
function dispalyData(data) {
  return console.log(
    `${data.name} has ${data.points.total} and ${data.badges.length}`
  );
}
// users.forEach(username => getProfile(username));
//when the function take one parameter and foreach passes one in we can shorten our code to :

// there is another way to use global object process
const users = process.argv.slice(2);
users.forEach(getProfile);
