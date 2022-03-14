const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: path.resolve('./', 'dist'),
		publicPath: '/',
		filename: 'static/js/[name].[contenthash:5].js',
		chunkFilename: 'static/js/[name].[contenthash:5].chunk.js',
	},
	resolve: {
		// Can't resolve './app' in 'xxx\pure-react-app\src'
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|ts|jsx|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-typescript',
								'@babel/preset-react',
								[
									'@babel/preset-env',
									{
										modules: false, // 会影响 dynamic-import
										corejs: 3,
										targets: {
											chrome: '90',
										},
										useBuiltIns: 'usage',
									},
								],
							],
						},
					},
				],
			},
		],
	},
}
