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

var MatchView = React.createClass({
    toSetting: function(){
        this.props.navigator.push({
            name: 'SettingView'
        });
        console.log(this.props.navigator.getCurrentRoutes());
    },
    render: function() {
        var Trans = require('../../I18n/translate');
        var TabBar = require('../../View/tabbar');
        var TableView = require('./table');
        var tabs = [
            Trans.t('leagueTable'),
            Trans.t('matchProcess'),
            Trans.t('matchPrediction')
        ];
        return (
            <View style={{backgroundColor: 'rgb(255,255,255)'}}>
                <Navbar
                    left='Menu'
                    title={Trans.t('match')}
                    right='China'
                    onLeftPress={() => {this.toSetting()}}>
                </Navbar>
                <ScrollableTabView
                    locked={true}
                    renderTabBar={() => <TabBar tabs={tabs} />}>
                    <TableView
                        tabLabel={Trans.t('leagueTable')}
                        route={this.props.route}
                        navigator={this.props.navigator} />
                    <View tabLabel={Trans.t('matchProcess')}></View>
                    <View tabLabel={Trans.t('matchPrediction')}></View>
                </ScrollableTabView>
            </View>
        );
    }
});

module.exports = MatchView;
