#! /usr/bin/env node
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const merge = require('lodash.merge');

const fromPath = path.resolve(process.argv[2]);
const patchPath = path.resolve(process.argv[3]);

const original = yaml.safeLoad(fs.readFileSync(fromPath));
const patch = yaml.safeLoad(fs.readFileSync(patchPath));

var newObj = merge(original, patch);

console.log(yaml.safeDump(newObj));