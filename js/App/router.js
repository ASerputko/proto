define(
    'router',
    ['jbone', 'lodash', 'backbone', 'react', 'jsx!views/main-page-view',
        'jsx!views/quick-connect-view', 'jsx!views/circles-view', 'collections/contacts-collection'],
    function ($, _, Backbone, React, mainPage, quickConnectPage, circlesPage, contactsCollection) {
        /** @jsx react.DOM */
        var AppRouter,
            landing = $('#landing')[0],
            pagesMap = {
                circles: circlesPage,
                quickConnect: quickConnectPage
            };

        AppRouter = Backbone.Router.extend({
            routes: {
                '': 'startPage',
                '#': 'startPage',
                'page/:pageName': 'proceedToPage'
            },
            startPage: function () {
                console.log('defaultPage');
                this.clearLanding();
                React.renderComponent(
                    <mainPage />,
                    landing
                );
            },
            proceedToPage: function (pageName) {
                console.log('proceeding to ' + pageName);
                var page = pagesMap[pageName];
                this.clearLanding();
                var collection = new contactsCollection();
                React.renderComponent(
                    <quickConnectPage dataSet={ collection } />,
                    landing
                );
            },
            clearLanding: function () {
                $(landing).html('');
            }
        });

        return AppRouter;
    }
);
