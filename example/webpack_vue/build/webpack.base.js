/*
 * @Author: Aiden
 * @Date: 2021-06-11 10:03:35
 * @LastEditTime: 2021-06-11 14:29:55
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@vue/babel-preset-jsx'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|gif|bmp|ttf|woff)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[hash:10].[ext]',
                            esModule: false,
                            limit: 32 * 1024
                        }
                    }
                ]
            }
        ]
    }
}