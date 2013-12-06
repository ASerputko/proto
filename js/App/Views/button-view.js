define(
    'views/button-view',
    ['react', 'jsx!templates/button-template'],
    function (React, template) {
        var buttonView;

        buttonView = React.createClass({
            render: function () {
                return template.call(this);;
            },
            handleClick: function () {
                var location = 'page/' + this.props.button.location;
                window.router.navigate(location, { trigger: true });
            }
        });

        return buttonView;
    }
);
