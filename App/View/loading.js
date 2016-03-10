'use strict';

var React = require('react-native');
var {
    View,
    Image
} = React;

var LoadingView = React.createClass({
    render: function() {
        return (
            <View style={{flex: 1, backgroundColor: 'rgb(10,20,29)'}}>
                <Image
                    style={{resizeMode: 'cover', backgroundColor: 'rgb(10,20,29)'}}
                    source={require('../../ImageAssets/launch.png')} />
            </View>
        );
    }}
);

module.exports = LoadingView;
