const api = require('instagram-node').instagram();
const request = require('request');
const config = require('../../config/config');
const jsonexport = require('jsonexport');
const jsonToCSV = require('json-to-csv');
const fs = require('fs');
const myId = '699570416';
const sashaID = '1533777427';


api.use({
    client_id: config.instagram.client_id,
    client_secret: config.instagram.client_secret
});

var redirect_uri = config.instagram.redirect_uri;


function create_CSV_from_JSON(myJson, fileName) {
    myJson = JSON.stringify(myJson);
    const usersArray = [
        { myJson }
    ];
    jsonToCSV(usersArray, fileName)
        .then(() => {
            console.log('Json to CSV success!');
        })
        .catch(error => {
            console.log(error);
        })
}

exports.authorize_user = function (req, res) {
    res.redirect(api.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));
};

exports.handleauth = function (req, res) {
    api.authorize_user(req.query.code, redirect_uri, function (err, result) {
        if (err) {
            console.log(err.body);
            res.send(err);
        } else {
            console.log('Yay! Access token is ' + result.access_token);
            const options = 'https://api.instagram.com/v1/users/self/?access_token=' + result.access_token;
            request(options, { json: true }, (err, res, body) => {
                if (err) { return console.log(err); }
                else {
                    // If the Instagram API would work https://api.instagram.com/v1/users/{user-id}/follows?access_token=ACCESS-TOKEN
                    // I could get the followers, add them in array, then use this function
                    // to convert the array from JSON to CSV
                    // BUT it doesn't work anymore
                    // The API call "/users/{user-id}/follows" is not supported by Instagram, being disabled in 2016)
                    create_CSV_from_JSON(res.body, 'result.csv');
                }
            });
            res.send('You made it!!');

        }
    });
};



// const getUserDetails = (name) => {
    //     // link all the functionalities here
    //     console.log(name);
    // }
    
    // module.exports = {
    //     getUserDetails
    // }
    