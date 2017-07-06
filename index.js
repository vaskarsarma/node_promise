var express = require("express");
var app = express();
var path = require("path");
var fs = require("fs");

var dd = require("./test.js");

var fname = "test.txt";

var filePath = path.join(__dirname, fname);

app.get('/', function(req, response) {
    fs.readFile(filePath, { encoding: 'utf-8' }, function(err, data) {
        if (!err) {
            console.log('received data: ' + data);
            response.writeHead(200, { 'Content-Type': 'utf8' });
            response.write(data);
            response.end();
        } else {
            console.log(err);
        }
    });
});


let one = (a) => {
    return new Promise(
        (resolve) => {
            setTimeout(() => {
                console.log(a);
                resolve(a);
            }, 300);
        }
    )
}

let two = (a) => {
    return new Promise(
        (resolve) => {
            setTimeout(() => {
                a++;
                console.log(a);
                resolve(a);
            }, 300);
        }
    )
}

let three = (a) => {
    return new Promise(
        (resolve) => {
            setTimeout(() => {
                a++;
                console.log(a);
                resolve(a);
            }, 300);
        }
    )
}

let four = (a) => {
    return new Promise(
        (resolve) => {
            setTimeout(() => {
                a++;
                console.log(a);
                resolve(a);
            }, 300);
        }
    )
}

let rfile = (a) => {
    return new Promise(
        (resolve) => {
            fs.readFile(
                filePath, 'utf-8',
                function(err, data) {
                    console.log(data);
                    resolve(a, data);
                }
            );
        }
    )
}

app.get('/wp', function(req, response) {
    rfile(1).then(one).then(two).then(three).then(four).then(rfile)
        .then(function() {
            console.log("my test function");
        }).then(function() {
            fs.readFile(filePath, { encoding: 'utf-8' }, function(err, data) {
                if (!err) {
                    console.log('received data: ' + data);
                } else {
                    console.log(err);
                }
            })
        });

    var maybePromise = Math.random() > 0.5 ? Promise.reject("error") : Promise.resolve(10);
    var definitelyPromise = Promise.resolve(maybePromise);

    console.log(definitelyPromise);

    var s = "";
    dd.getData().then(dd.test1)
        .error(function(e) { console.log("error " + e) })
        .catch(function(e) { console.log("exception " + e) });
});

var port = "2222";
app.listen(port, function() {
    console.log("Server started at port " + port);
});