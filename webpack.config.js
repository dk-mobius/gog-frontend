const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|json)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            }
        ]
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, 'src/assets/'),
            components: path.resolve(__dirname, 'src/components/'),
            containers: path.resolve(__dirname, 'src/containers/'),
            pages: path.resolve(__dirname, 'src/pages/'),
            placeholders: path.resolve(__dirname, 'src/placeholders/'),
            scss: path.resolve(__dirname, 'src/scss/'),
            services: path.resolve(__dirname, 'src/services.js'),
            store: path.resolve(__dirname, 'src/store.js')
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};