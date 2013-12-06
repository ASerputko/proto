define(
    'Views/main-page-view',
    ['jbone', 'lodash', 'backbone', 'react', 'jsx!Views/button-view'],
    function ($, _, Backbone, React, buttonEl) {
        /** @jsx react.DOM */
        var mainPageView,
            names = [{
                name: 'Quick Connect',
                id: 'quickConnect',
                location: 'quickConnect'
            }, {
                name: 'Circles',
                id: 'circles',
                location: 'circles'
            }];

        mainPageView = React.createClass({
            getInitialState: function () {

            },
            render: function () {
                var buttons = names.map(function (button) {
                    return <buttonEl button={ button } />;
                });

                return (<menu>{ buttons }</menu>);
            }
        });

        return mainPageView;
    }
);
