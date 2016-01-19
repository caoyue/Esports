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
    },
    render: function() {
        var Trans = require('../../I18n/translate');
        var TabBar = require('../../View/tabbar');
        var TableView = require('./table');
        var ProcessView = require('./process');
        var tabs = [
            Trans.t('leagueTable'),
            Trans.t('matchProcess'),
            Trans.t('matchPrediction')
        ];
        return (
            <View style={{flex: 1}}>
                <Navbar
                    left='Menu'
                    title={Trans.t('match')}
                    right='China'
                    onLeftPress={() => {this.toSetting()}}>
                </Navbar>
                <ScrollableTabView
                    locked={true}
                    renderTabBar={() => <TabBar tabs={tabs} />} >
                    <TableView style={{flex: 1}}
                        tabLabel={Trans.t('leagueTable')}
                        route={this.props.route}
                        navigator={this.props.navigator} />
                    <ProcessView tabLabel={Trans.t('matchProcess')}
                        style={{flex: 1}}
                        route={this.props.route}
                        navigator={this.props.navigator} />
                    <View tabLabel={Trans.t('matchPrediction')}></View>
                </ScrollableTabView>
            </View>
        );
    }
});

module.exports = MatchView;
