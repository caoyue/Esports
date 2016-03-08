var AppDispatcher = require('../Dispatchers/dispatchers');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _state = {
    place: 'cn'
};

var CHANGE_EVENT = 'change';

function setPlace(place) {
	_state.place = place;
}

var EsportsStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback)
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	getAll: function() {
		return _state;
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	}
});

function handleAction(action) {
	if (action.type === 'SET_PLACE') {
		setPlace(action.place);
		EsportsStore.emitChange();
	}
}

EsportsStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = EsportsStore;
