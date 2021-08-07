import path from 'path';
import nodeExternals from 'webpack-node-externals';
import webpack from "webpack";
import MinCssExtract from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin  from "copy-webpack-plugin";

const buildPath = 'build'
const srcPath = 'src'

export default <webpack.Configuration>{
    entry: './src/server/main.ts',

    target: 'node',
    mode: 'development',

    externals: [nodeExternals()],

    output: {
        path: path.resolve(buildPath),
        filename: 'build.js'
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
                options: {
                    configFile: './src/server/tsconfig.json',
                },
            },
            {
                test: /\.scss$/,
                use: [ 'css-loader', 'sass' ]
            }
        ]
    },

    // @ts-ignore
    plugins: [
        new MinCssExtract({
            filename: `${buildPath}/styles.css`
        }),

        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: path.resolve( __dirname, `${srcPath}/index.html` )
        // }),

        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, srcPath)
        //         }
        //     ]
        // })
    ],

    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.jsx', '.scss' ]
    },

    devtool: 'source-map'

};