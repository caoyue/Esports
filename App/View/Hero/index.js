'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    Image,
    View,
} = React;

var Navbar = require('../../View/navbar');
var ScrollableTabView = require('react-native-scrollable-tab-view');

var HeroView = React.createClass({
    toSetting: function(){
        this.props.navigator.push({
            name: 'SettingView'
        });
    },
    render: function() {
        var Trans = require('../../I18n/translate');
        return (
            <View style={{flex: 1}}>
                <Navbar
                    left='Menu'
                    title={Trans.t('hero')}
                    right='China'
                    onLeftPress={() => {this.toSetting()}}>
                </Navbar>
                <View></View>
            </View>
        );
    }
});

module.exports = HeroView;
