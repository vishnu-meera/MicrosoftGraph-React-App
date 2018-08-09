const path          = require('path');
const merge         = require('webpack-merge');
const baseConfig    = require('./webpack.base');
const webpackExtrnl = require('webpack-node-externals');

const config = {
    //inform webpack that we are building a bundle
    //for nodejs, rather than for the browser.
    target:'node',
    //the root file of server application
    entry:'./src/index.js',
    //tell wbpacj where to put the output file that is generated
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
    },
    externals : [webpackExtrnl()]
};

module.exports = merge(baseConfig,config);