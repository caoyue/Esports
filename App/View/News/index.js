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

var NewsView = React.createClass({
    toSetting: function(){
        this.props.navigator.push({
            name: 'SettingView'
        });
    },
    render: function() {
        var HotNews = require('./hot');
        var TabBar = require('../../View/tabbar');
        var tabs = ['Hot', 'Focus', 'Rank'];
        return (
            <View>
                <Navbar
                    left = 'Menu'
                    title = 'News'
                    right = '+'
                    onLeftPress={() => {this.toSetting()}}>
                </Navbar>
                <ScrollableTabView
                    renderTabBar={() => <TabBar tabs={tabs} />}>
                    <HotNews
                        tabLabel='Hot'
                        route={this.props.route}
                        navigator={this.props.navigator} />
                    <View tabLabel="Focus">
                        <Text>Focus</Text>
                    </View>
                    <View tabLabel="Rank">
                        <Text>Rank</Text>
                    </View>
                </ScrollableTabView>
            </View>
        );
    }
});

module.exports = NewsView;
