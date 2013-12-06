define(
    'app',
    ['jbone', 'lodash', 'backbone', 'react', 'app', 'jsx!router'],
    function ($, _, Backbone, React, App, Router) {
        /** @jsx react.DOM */
        function start() {
            window.router = new Router();
            Backbone.history.start();
        }

        return {
            start: start
        };
    }
);
