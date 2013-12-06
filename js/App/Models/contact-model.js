define(
    ['jbone', 'lodash', 'backbone'],
    function ($, _, Backbone) {
        var contact;

        contact = Backbone.Model.extend({
            defaults: {
                'name': 'John',
                'surname': 'Doe',
                'phoneNumber': '999-999'
            },

            url: '',
            urlRoot: '',

            getStatus: function () {
                return 'user ' + this.get('name') + ' ' +  this.get('surname') + ' has been added to list';
            }
        });

        return contact;
    }
);
