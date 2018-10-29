const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'docs/js'),
		filename: 'main.js',
	},
	devServer: {
		contentBase: path.join(__dirname, 'docs'),
		compress: true,
		port: 9000,
		watchContentBase: true,
		publicPath: '/js/',
	},
};
