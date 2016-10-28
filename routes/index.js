var express = require('express');
var router = express.Router();
var Client = require('ssh2').Client;

/* GET home page. */
router.get('/', function (req, res, next) {


    var conn = new Client();
    conn.on('ready', function () {
        console.log('Client :: ready');
        conn.exec('all_start', function (err, stream) {
            if (err) throw err;
            stream.on('close', function (code, signal) {
                console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
                conn.end();
            }).on('data', function (data) {
                res.send(data + '');
                console.log('STDOUT: ' + data);
            }).stderr.on('data', function (data) {
                console.log('STDERR: ' + data);
            });
        });
    }).connect({
        host: '192.168.1.197',
        port: 22,
        username: 'root',
        password: '123456'
    });

});

router.get('/shutdown/:ip', function (req, res) {

    var ips = req.params.ip;

    ips.split("-").map(ip=> {
        var conn = new Client();
        conn.on('ready', function () {
            console.log('Client :: ready');
            conn.exec('shutdown -h now', function (err, stream) {
                if (err) throw err;
                stream.on('close', function (code, signal) {
                    console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
                    conn.end();
                }).on('data', function (data) {
                    res.send(data + '');
                    console.log('STDOUT: ' + data);
                }).stderr.on('data', function (data) {
                    console.log('STDERR: ' + data);
                });
            });
        }).connect({
            host: ip,
            port: 22,
            username: 'root',
            password: '123456'
        });
    })


});


module.exports = router;
