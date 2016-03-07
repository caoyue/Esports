'use strict';

var React = require('react-native');
var {
    View,
    Image
} = React;

var LoadingView = React.createClass({
    render: function() {
        return (
            <View style={{flex: 1}}>
                <Image
                    style={{resizeMode: 'cover'}}
                    source={require('../../ImageAssets/launch.jpg')} />
            </View>
        );
    }}
);

module.exports = LoadingView;
