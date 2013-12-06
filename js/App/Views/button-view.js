define(
    'Views/button-view',
    ['react'],
    function (React) {
        var buttonView;

        buttonView = React.createClass({
            render: function () {
                return (
                    <li className="button-container">
                        <button id={ this.props.button.id }
                            onClick={ this.handleClick }>
                            { this.props.button.name }
                        </button>
                    </li>
                );
            },
            handleClick: function () {
                var location = 'page/' + this.props.button.location;
                window.router.navigate(location, { trigger: true });
            }
        });

        return buttonView;
    }
);
