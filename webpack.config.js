module.exports = {
    context: __dirname + '/app',
    entry: {
        javascript: './app.jsx',
        html: './index.html'
    },

    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot',
                    'babel?presets[]=es2015&presets[]=react'
                ],
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    }
};
