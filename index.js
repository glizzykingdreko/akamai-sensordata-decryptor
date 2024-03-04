#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const fs = require('fs');
const { decryptSensorData } = require('./decryptor'); // Import your main module function

const argv = yargs(hideBin(process.argv))
    .usage('Usage: $0 <input file> [options]')
    .option('debug', {
        alias: 'd',
        type: 'boolean',
        description: 'Print debug output',
        default: false
    })
    .option('stringify', {
        alias: 's',
        type: 'boolean',
        description: 'Stringify the debug output',
        default: false
    })
    .option('outputfile', {
        alias: 'o',
        type: 'string',
        description: 'Specify the output file'
    })
    .help()
    .alias('help', 'h')
    .argv;

if (argv._.length === 0) {
    console.error('Error: Input file is required');
    process.exit(1);
}

const inputFile = argv._[0];
let inputData;

try {
    inputData = fs.readFileSync(inputFile, 'utf8');
} catch (error) {
    console.error(`Error reading input file: ${error.message}`);
    process.exit(1);
}

const result = decryptSensorData(inputData, argv.debug);

if (argv.outputfile) {
    fs.writeFileSync(argv.outputfile, JSON.stringify(result, null, 4), 'utf8');
    console.log(`Output written to ${argv.outputfile}`);
} else {
    console.log(argv.stringify ? JSON.stringify(result, null, 4) : result);
}
