const path = require('path');

module.exports = {
    entry: './src/script.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    mode: 'development'
}