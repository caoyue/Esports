var AppDispatcher = require('../Dispatchers/dispatchers');

var EsportsActionCreators = {
	setPlace: function(place) {
		var action = {
			type: 'SET_PLACE',
			place: place
		};

		AppDispatcher.dispatch(action);
	}
};

module.exports = EsportsActionCreators;
