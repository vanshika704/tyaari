let http = require("http"); // http naam ka ek variable bnaya , jisme require rkek http ko bulaya

http.createServer(function (req, res) { // http ka ek function ,  create server use kiya or usme ek function define kiya jiske pass resolution or requests hongi
    res.writeHead(200, {'Content-Type': 'text/plain'}); // abbhi res .writeHead ka use kiya or usme btaya ki content type text hai plain uska
    res.end('This is an example of a Node.js web-based application.\n'); // res.end krke server pr type kiya
}).listen(5000, () => console.log('Server running at http://localhost:5000')); // lsiten laya jisme 5000 server pr  arrow function bnaya , jo btayeg ki is server pr chlega


// steps to make a server :
// sabse phle http ko require use krke  include kro ya import kro 
//  fir http ki create server use krke uske ander ek fucntion bnao , jo do cheeje accept krega , requests and resolutions 

//  fir res.writehead krke , content specify kro ki kya type hogi content ki
//   res.end krkr vo likho jo tuymhe server pr printed chahiye 
//   .listen lgao , servr ka naam do ,  or console logg krwalo jis server pe bhi chlra h vo
