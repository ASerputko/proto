define(
    'Views/single-contact-view',
    ['react'],
    function (React) {
        var singleContact;

        singleContact = React.createClass({
            render: function () {
                return (
                    <div className='single-contact'>
                        <div className='info-block'>
                            <span className='info'>Name: { this.props.contact.name }</span>
                            <span className='info'>Surname: { this.props.contact.surname }</span>
                            <span className='info'>Phone: { this.props.contact.phone }</span>
                            <span className='info'>Phone: { this.props.contact.address }</span>
                        </div>
                        <div className='button-container'>
                            <button className='add-button' onClick={ this.addContact }>+</button>
                        </div>
                        <div class='clear'></div>
                    </div>
                );
            },

            addContact: function () {
                $('.status').html('user ' + this.props.contact.name + ' ' + this.props.contact.surname + ' has been added to list');
            }
        });

        return singleContact;
    }
);
