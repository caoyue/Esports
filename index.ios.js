'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TabBarIOS,
    NavigatorIOS,
    StatusBarIOS
} = React;

var LangView = require("./App/View/lang");

var EsportsView = React.createClass({
    render: function(){
        return (
            <LangView></LangView>
        )
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

AppRegistry.registerComponent('Esports', () => EsportsView);
module.export = EsportsView;
