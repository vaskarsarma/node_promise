var Promise = require("bluebird");

var path = require("path");
var fs = require("fs");

var fname = "bluebirdtest.txt";
var filePath = path.join(__dirname, fname);

exports.getData = function() {
    return new Promise(function(resolve, reject) {
        fs.readFile(filePath, { encoding: 'utf-8' }, function(err, data) {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
};

exports.test1 = function(result) {
    return new Promise(function(resolve, reject) {
        s = result;
        response.writeHead(200, { 'Content-Type': 'utf8' });
        response.write("test " + result);
        response.end();
        resolve(s);
    }).then(
        console.log("test " + s)
    )
};