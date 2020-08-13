const path = require('path');
const webpack = require('webpack');
const nodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry:'./src/server/index.js',	
	target:'node',
	externals:[nodeExternals()],
	output:{
		path:path.resolve('dist'),
		filename:'index.js',
		publicPath: '/'
	},
	module:{
		rules:[{
			test: /\.js$/,
			use:'babel-loader'
		}]
	},
	plugins: [
		new webpack.DefinePlugin({__isBrowser__:false}),
		new nodemonPlugin()
	]
};
