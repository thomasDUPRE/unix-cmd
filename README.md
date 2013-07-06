unix-cmd
========

A Node.js module for executing unix command line script
##Install
```bash
npm install unix-cmd
```
##Introduction

This Node.js module has been created for a comfort using of unix command line. This module works with base modules of Node.

Here is an example on how to use direct command line :
```js
bash = require('unix-cmd');
bash.commandLine("echo 'Hello World !' ");
```

In this example, commandLine function requires only one parameter, the unix command. If the command is wrong, the script displays the error.

This module provides means of executing file of commands.
```js
bash = require('unix-cmd');
bash.commandFile("/home/scripts/test1");
```
with test1 :
```bash
mkdir toto
touch toto/example
ls toto
```
In this second example, commandFile function requires the file's path.
