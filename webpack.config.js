const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					// {
					// 	loader: MiniCssExtractPlugin.loader,
					// 	options: {
					// 		publicPath: '../',
					// 	},
					// },
					'style-loader',
					'css-loader',
					// 'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
};
