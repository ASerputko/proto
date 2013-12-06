define(
    'router',
    ['jbone', 'lodash', 'backbone', 'react', 'jsx!Views/main-page-view',
        'jsx!Views/quick-connect-view', 'jsx!Views/circles-view'],
    function ($, _, Backbone, React, mainPage, quickConnectPage, circlesPage) {
        /** @jsx react.DOM */
        var AppRouter,
            landing = $('#landing')[0],
            pagesMap = {
                circles: circlesPage,
                quickConnect: quickConnectPage
            },
            contacts = [{
                name: 'Sherlock',
                surname: 'Holmes',
                phone: '(000) 555-55-55',
                address: 'London, Baker str., 226'
            }, {
                name: 'Ian',
                surname: 'Read',
                phone: '(555) 789-12-546',
                address: 'New-York, 5th av., 58/456'
            }, {
                name: 'David',
                surname: 'Tibet',
                phone: '777-888-0',
                address: 'Newcastle, Abbey rd., 100'
            }, {
                name: 'Massimo',
                surname: 'Magrini',
                phone: '(456) 4545-899',
                address: 'Pisa, Tower Garden sq., 2'
            }];

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
                React.renderComponent(
                    <quickConnectPage dataSet={ contacts } />,
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
