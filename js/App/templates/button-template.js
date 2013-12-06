define(['react'], function (React) {
	return function () {
		return (
			<li className="button-container">
				<button id={ this.props.button.id }
					onClick={ this.handleClick }>
					{ this.props.button.name }
				</button>
			</li>
		);
	}
});