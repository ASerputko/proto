define(
    'views/single-contact-view',
    ['react', 'jsx!templates/single-contact-template'],
    function (React, template) {
        var singleContact;

        singleContact = React.createClass({
            render: function () {
                return template.call(this, this.props.model.attributes);
            },

            addContact: function () {
                $('.status').html(this.props.model.getStatus());
            }
        });

        return singleContact;
    }
);
