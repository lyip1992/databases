var request = require('request')


// request({ method: "POST",
//               uri: "http://127.0.0.1:3000/classes/messages",
//               json: { username: "bryabnnnn",message:"blabhalbah" }
//     });


request({ method: "GET",
              uri: "http://127.0.0.1:3000/classes/messages",
    });
