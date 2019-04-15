const { override, fixBabelImports, addLessLoader, addBabelPlugin } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
    addBabelPlugin("@babel/plugin-syntax-dynamic-import")
);