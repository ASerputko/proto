define(
    'views/circles-view',
    ['jbone', 'lodash', 'backbone', 'react'],
    function ($, _, Backbone, React) {
        var circlesPage;

        circlesPage = React.createClass({
            render: function () {
                return (
                    <div>
                        <h3>This is Circles</h3>
                        <button onClick={ this.returnToMain }>Return</button>
                    </div>
                    );
            },
            returnToMain: function () {
                window.router.navigate('', { trigger: true });
            }
        });

        return circlesPage;
    }
);
