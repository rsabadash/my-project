const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
	optimization: {
		runtimeChunk: {
			name: 'runtime'
		},
		splitChunks: {
			chunks: 'all',
			// cacheGroups: {
			// 	vendor: {
			// 		test: /[\\/]node_modules[\\/]/,
			// 		name: 'vendors',
			// 		chunks: 'all'
			// 	}
			// }
		}
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]__[local]__[hash:base64:5]'
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								require('autoprefixer')({
									'browsers': ['> 1%', 'last 2 versions']
								}),
								require('cssnano')()
							],
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		}),
		new webpack.HashedModuleIdsPlugin({
			hashFunction: 'md4',
			hashDigest: 'base64',
			hashDigestLength: 8
		})
	]
});