var path = require('path');
var webpack = require('webpack');

module.exports = {

	devtool: 'eval',

	entry: [
		'webpack-dev-server/client?http://localhost:3000', // Enables websocket connection (needs url and port)
		'webpack/hot/only-dev-server', // To perform HMR in the browser
		'./public/index.jsx' // Your app's entry point
	],

	output: {
		path: path.join(__dirname, 'dist'), // The output directory as an absolute path (required)
		filename: 'bundle.js',
		publicPath: '/' // Specifies the public URL address of the output files when referenced in a browser. If it would be '/static/', we will access localhost:3000/static
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],

	module: {
		loaders: [
		{
			test: /\.jsx$/,
			loaders:['react-hot', 'babel'], // That are modules, in that case react-hot-loader and babel-loader
			include: path.join(__dirname, 'public')
		},
		{
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass']
		}]
	},

	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}