const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,  // Transpile JavaScript and JSX files
                exclude: /node_modules/,  // Exclude Node modules from transpilation
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        sourceMaps: true
                    }
                }
            },
            {
                test: /.css$/,  // Process CSS files
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']  // Allow importing without specifying extensions
    },
    devServer: {
        static: './dist',  // Changed from contentBase to static for webpack 5
        hot: true,
        compress: true,  // Added for better performance
        port: 9000,      // Added a specific port for development
        open: true,      // Automatically open the browser
        historyApiFallback: true // Added for handling client-side routing
    }
};