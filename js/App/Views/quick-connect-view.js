define(
    ['react', 'jsx!Views/single-contact-view'],
    function (React, singleContact) {
        var quickConnectPage;

        quickConnectPage = React.createClass({
            render: function () {
                var contacts = this.props.dataSet.map(function (contact) {
                    return <singleContact contact={ contact } />;
                });
                return (
                    <div>
                        <h3>this is quickConnect</h3>
                        { contacts }
                        <div className='status'></div>
                        <button onClick={ this.returnToMain }>Return</button>
                    </div>
                );
            },
            returnToMain: function () {
                window.router.navigate('', { trigger: true });
            }
        });

        return quickConnectPage;
    }
);
