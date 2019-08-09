
const username =["chalkers", "alenaholligan","davemcfarland"];
function getProfile(username){
    const https = require("https");
    https.get(`https://teamtreehouse.com/${username}.json`, response =>{
    console.log('statusCode', response.statusCode);
    let responseBody = "";
    response.on('data', data =>{
        responseBody += data.toString();
    });
    response.on('end', ()=>{
        // console.log(typeof(responseBody));
        // console.log(responseBody);
        const profile = JSON.parse(responseBody);
    //    console.dir(profile);
       dispalyData(profile)
    });
});
}

function dispalyData(data){
    return console.log(`${data.name} has ${data.points.total} and ${data.badges.length}`);
}
username.forEach(user => getProfile(user));
    
 

