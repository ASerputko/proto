define(['react'], function (React) {
	return function (contacts) {
		return (
			<div>
				<h3>this is quickConnect</h3>
				{ contacts }
				<div className='status'></div>
				<button onClick={ this.returnToMain }>Return</button>
			</div>
		);
	}
});