const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

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
			{
				test: /\.[s[ac]|c]ss$/i,
				use: [
					//压缩&优化css
					MiniCssExtractPlugin.loader,
					// 将 JS 字符串生成为 style 节点
					// 'style-loader',
					// 将 CSS 转化成 CommonJS 模块
					{
						loader: 'css-loader',
						options: {
							modules: true, // cssModules
						},
					},
					// 将 Sass 编译成 CSS
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'pure-react-app',
			template: 'public/index.html',
		}),
		new MiniCssExtractPlugin(),
		new CleanWebpackPlugin(),
	],
	optimization: {
		minimizer: [
			// 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
			// `...`,
			new CssMinimizerPlugin(),
		],
	},
	devServer: {
		// server: 'https',
		port: '9090',
		hot: true,
		client: {
			overlay: {
				errors: true,
				warnings: false,
			},
			progress: true,
		},
	},
}
