define(
	['react', 'jsx!views/single-contact-view', 'jsx!templates/quick-connect-template'],
	function (React, singleContact, template) {
		var quickConnectPage;

		quickConnectPage = React.createClass({
			render: function () {
				var contacts = this.props.dataSet.map(this.addOne, this);
				return template.call(this, contacts);
			},

			returnToMain: function () {
				window.router.navigate('', { trigger: true });
			},

			addOne: function (model) {
				return <singleContact model={ model } />;
			}
		});

		return quickConnectPage;
	}
);
