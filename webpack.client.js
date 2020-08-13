const path = require('path');
const webpack = require('webpack');
const nodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry:'./src/client/index.js',	
	target:'node',
	output:{
		path:path.resolve('dist/public'),
		filename:'bundle.js',
		publicPath: '/'
	},
	module:{
		rules:[{
			test: /\.js$/,
			use:'babel-loader'
		}]
	},
	plugins: [
		new webpack.DefinePlugin({__isBrowser__:true}),
	]
};
