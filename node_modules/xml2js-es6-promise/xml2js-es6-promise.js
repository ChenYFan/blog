var xml2js = require('xml2js');

module.exports = function(input, options) {
    return new Promise(function(resolve, reject) {
        xml2js.parseString(input, options, function(err, result) {
            if (!err) {
                resolve(result);
            } else {
                reject(err);
            }
        });
    });
};
