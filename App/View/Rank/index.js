'use strict';

var React = require('react-native');
var {
    Text,
    Image,
    View,
} = React;

var Navbar = require('../../View/navbar');
var ScrollableTabView = require('react-native-scrollable-tab-view');

var RankView = React.createClass({
    toSetting: function(){
        this.props.navigator.push({
            name: 'SettingView'
        });
    },
    render: function() {
        var Trans = require('../../I18n/translate');
        var TabBar = require('../../View/tabbar');
        var TeamRankView = require('./team');
        var PlayerRankView = require('./player');
        var tabs = [
            Trans.t('teamRank'),
            Trans.t('playerRank'),
        ];

        return (
            <View style={{
                    flex: 1,
                    backgroundColor: 'white'
                }}>
                <Navbar
                    isLeftSetting={true}
                    left='Menu'
                    title={Trans.t('rank')}
                    right='China'
                    onLeftPress={() => {this.toSetting()}}>
                </Navbar>
                <ScrollableTabView
                    locked={true}
                    renderTabBar={() => <TabBar tabs={tabs} />}>
                    <TeamRankView
                        tabLabel={Trans.t('teamRank')}
                        route={this.props.route}
                        navigator={this.props.navigator} />
                    <PlayerRankView
                        tabLabel={Trans.t('playerRank')}
                        route={this.props.route}
                        navigator={this.props.navigator} />
                </ScrollableTabView>
            </View>
        );
    }
});

module.exports = RankView;
