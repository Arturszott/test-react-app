'use strict';

require('babel-register');

var runTestCommand = require('./runTestCommand.js').default;
var exec = require('child_process').exec;
var args = process.argv.slice(2);

var executeShellCommand = function(command) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(stdout);
        console.log(stderr);
    });
};

runTestCommand(executeShellCommand, args);
