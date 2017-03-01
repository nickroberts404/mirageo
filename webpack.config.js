const path = require('path');

module.exports = {
	entry: './lib/index',
	output: {
		filename: 'mirage.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{test: /\.js$/, loader: 'babel-loader', include: './lib'},
		]
	}
}