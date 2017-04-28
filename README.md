# training-js-libs
=============

## What is this?

To try various JS libs with ES6.

## Usage

1. Clone this repository.
2. Prepare the environment. You are recommended to use [asdf](https://github.com/asdf-vm/asdf) for installing [node.js](https://nodejs.org/en/).
```bash
$ npm install -g yarn
$ cd training-js-libs
$ yarn
$ yarn try src/es6.js
$ yarn try-all
```
3. Install libs which you want to try, and create new JS file or fix "src/\*.js" for trying them.
```bash
$ yarn add <TRIED_LIB>
$ yarn try <JS_FILE>
```
4. try REPL.
```bash
$ yarn try
> 1 + 1
```
