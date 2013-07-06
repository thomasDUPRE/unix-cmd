var exec = require('child_process').exec, fs = require('fs'), cmd;

var commandLine = function(action){
    cmd = exec(action, function(error, stdout, stderr){
        if (stdout.toString('uft8') !== '') {
                console.log(stdout);
        }
        if (stderr.toString('uft8') !== ''){
                console.log(stderr);
        }
        if (error !== null){
                console.log(error);
         }
    });
};

var commandFile = function (file){
  fs.readFile(file, 'utf8',  function (err, data) {
    if (err) throw err;
    var arr = data.toString("uft8").split('\n');
    for (var i = 0; i < arr.length; i++) {
        commandLine(arr[i]);
    }
 });
};

exports.commandLine = commandLine;
exports.commandFile = commandFile;
