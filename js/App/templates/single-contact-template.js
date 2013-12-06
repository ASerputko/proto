define(['react'], function (React) {
	return function (data) {
		return (
			<div className='single-contact'>
				<div className='info-block'>
					<span className='info'>Name: { data.name }</span>
					<span className='info'>Surname: { data.surname }</span>
					<span className='info'>Phone: { data.phone }</span>
					<span className='info'>Phone: { data.address }</span>
				</div>
				<div className='button-container'>
					<button className='add-button' onClick={ this.addContact }>+</button>
				</div>
				<div class='clear'></div>
			</div>
		);
	}
});