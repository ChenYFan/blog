var fs = require('fs');
var path = require('path');
var assert = require('assert');
var GAPI = require('../gapitoken.js');

var pemPath = path.join(__dirname, 'test-key.pem');

describe('Authenticating with Google', function() {
  it('should work with a .pem file', function(done) {
    var gapi = new GAPI({
        iss: "985952909795-p560igbg1r2hjaagrpeust4sqca9vhi8@developer.gserviceaccount.com",
        scope: 'https://www.googleapis.com/auth/bigquery',
        keyFile: pemPath
    }, function(error) {
        if (error) { return done(error); }

        gapi.getToken(function(error, token) {
            assert.ok(token, "Got a token");
            done(error);
        });
    });
  });

  it('should work with an RSA string', function(done) {
    var gapi = new GAPI({
        iss: "985952909795-p560igbg1r2hjaagrpeust4sqca9vhi8@developer.gserviceaccount.com",
        scope: 'https://www.googleapis.com/auth/bigquery',
        key: fs.readFileSync(pemPath)
    }, function(error) {
        if (error) { return done(error); }

        gapi.getToken(function(error, token) {
            assert.ok(token, "Got a token");
            done(error);
        });
    });
  });
});
