var axios = require("axios");
require('dotenv').config();
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

// *************************************************************
// **   API Routines                                          **
// *************************************************************

// poll internal backend service
exports.pollBackend = async (req, res) => {
    console.log("Reached pollBackend");
    var req_data = {
        method: 'get',
        url: "http://" + req.body.backend_url + ":" + req.body.backend_port,
        proxy: false,
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
    };
    axios(req_data)
        .then(function (response) {
            console.log("Finished pollBackend API Call");
            console.log(response.data);
            console.log(JSON.stringify(response.data));
            if (response.data ) {
                res.send(response.data);
            } else {
                console.log("pollBackend API Response is Empty");
                res.send({});
            }
            console.log("Returned Res data ");
        })
        .catch(function (error) {
            console.log(error);
        });
};