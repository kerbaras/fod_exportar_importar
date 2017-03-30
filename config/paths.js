const path = require('path')
const fs = require('fs')
const url = require('url')


const resolver = directory => route => path.resolve(directory, route)


const resolveApp = resolver(fs.realpathSync(process.cwd()))

module.exports = {
    appBuild: resolveApp('build'),
    appPublic: resolveApp('public'),
    appHtml: resolveApp('public/index.html'),
    appSrc: resolveApp('src'),
    appIndexJs: resolveApp('src/index.jsx'),
    appPackageJson: resolveApp('package.json'),
    appNodeModules: resolveApp('node_modules')
}