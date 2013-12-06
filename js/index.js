require.config({
    baseUrl : 'js/App',
    paths: {
        'jbone': '../lib/jbone',
        'lodash': '../lib/lodash',
        'backbone': '../lib/backbone',
        'react': '../lib/react',
        'JSXTransformer': '../lib/JSXTransformer',
        'jsx': '../lib/jsx'
    },
    shim: {
        'lodash': {
            exports: "_"
        },
        'backbone': {
            deps: ['lodash', 'jbone'],
            exports: 'Backbone'
        },
        'react': {
            deps: ['jsx'],
            exports: 'React'
        },
        'JSXTransformer': {
            exports: 'JSXTransformer'
        }
    }
});
require(
    ['jsx!app'],
    function (App) {
        App.start();
        return {};
    }
);