# try
=============

## What is *try*?

To try various JS libs with ES6.

## Usage

1. Clone this repository.
2. Prepare the environment. You are recommended to use [asdf](https://github.com/asdf-vm/asdf) for installing [node.js](https://nodejs.org/en/).
```bash
$ cd try
$ npm install
$ npm run try src/index.js
```
3. Install libs which you want to try, and create new JS file or fix "src/\*.js" for trying them.
```bash
$ npm install --save-dev <TRIED_LIB>
$ npm run try <JS_FILE>
```
