'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const chalk = require('chalk')

const config = require('../config/webpack.config')
const paths = require('../config/paths')

const clearConsole = () =>  console.log(0o33)

const log = (log) => {
    clearConsole()
    console.log(log)
}

let run = (port, host='localhost', protocol='https') => {

    let setupCompiler = () => {
        let compiler = webpack(config)

        compiler.plugin('invalid', () => log('Compiling...'))

        compiler.plugin('done', () => {
            log(chalk.green('Compiled successfully!'))

            console.log()
            console.log('The app is running at:')
            console.log('   ' + chalk.cyan(protocol + '://' + host + ':' + port + '/'))
        })

        return compiler
    }

    let devServer = (compiler) => {
        let server = new WebpackDevServer(compiler, {
            compress: true,
            clientLogLeve: 'none',
            contentBase: paths.appPublic,
            hot: true,
            publicPath: config.output.publicPath,
            quiet: true,
            watchOptions: {
                ignored: /node_modules/
            },
            https: protocol === 'https',
            host: host
        })
        server.listen(port, err => {
            if (err) {
                return console.error(err)
            }

            log(chalk.cyan('Starting the development server...'))
            console.log()

        })
    }

    return devServer(setupCompiler())
}

run(3000);