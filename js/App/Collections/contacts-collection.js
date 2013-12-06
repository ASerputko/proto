define(
    ['jbone', 'lodash', 'backbone', 'models/contact-model', 'mocks/contact'],
    function ($, _, Backbone, contactModel, contactMock) {
        var contacts;

        contacts = Backbone.Collection.extend({
            model: contactModel,

            initialize: function () {
            	this.add(contactMock);
            }
        });

        return contacts;
    }
);
