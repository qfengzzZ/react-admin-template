const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    babel: {
        plugins: [
          // 配置 babel-plugin-import
            [
                'import',
                {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: 'css',
                },
                'antd',
            ]
        ],
    },
    webpack: {
        configure: (config, { env, paths }) => {
            paths.appBuild = 'dist'
            config.output = {
                ...config.output,
                path: path.resolve(__dirname, 'dist')
            }
            config.devtool = env === 'production'? false : config.devtool;
            config.optimization.minimizer.map(plugin => {
                if (plugin instanceof TerserPlugin) {
                    Object.assign(plugin.options.terserOptions.compress, {
                        drop_debugger: true,
                        drop_console: true
                    })
                }
                return plugin
            })
            return config
        },
        alias: {
            "@": path.resolve("src")
        },
        // plugins: {
        //     add: [
        //         // Gzip
        //         new CompressionWebpackPlugin({
        //             algorithm: 'gzip',
        //             test: new RegExp(
        //                 '\\.(' +
        //                 ['js', 'css'].join('|') +
        //                 ')$'
        //             ),
        //             threshold: 1024,
        //             minRatio: 0.8
        //         }),
        //         new WebpackBar(),
        //     ]
        // },
        devServer: {
            proxy: {
                '/api': {
                    target: 'localhost:3000',
                    changeOrigin: true,
                    pathRewrite: {
                        '/api': ''
                    },
                    bypass: (req, res, proxyOptions) => {
                        console.log(req, res, proxyOptions)
                    }
                }
            }
        },
    },
}
