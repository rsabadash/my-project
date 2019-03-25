const path = require('path');
const webpack = require('webpack');
const modeConfig = env => require(`./webpack/webpack.${env}`)();
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
	return webpackMerge(
		{
			mode: argv.mode,
			entry: {
				main: './src/index.js'
			},
			output: {
				filename: '[name].bundle.js',
				chunkFilename: '[name].lazy-chunk.js',
				path: path.resolve(__dirname, './dist')
			},
			module: {
				rules: [
					{
						test: /\.(js|jsx)$/,
						exclude: /node_modules/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env', '@babel/preset-react'],
								plugins: ['@babel/plugin-transform-runtime']
							}
						}
					}
				]
			},
			plugins: [
				new webpack.DefinePlugin({
					'process.env': {
						NODE_ENV: JSON.stringify(argv.mode)
					}
				}),
				new HtmlWebpackPlugin({
					template: './src/index.html'
				})
			],
			resolve: {
				extensions: ['.js', '.jsx']
			},
		},
		modeConfig(argv.mode)
	)
};