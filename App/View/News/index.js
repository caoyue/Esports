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
        var Trans = require('../../I18n/translate');
        var HotNews = require('./hot');
        var Transfer = require('./transfer');
        var TabBar = require('../../View/tabbar');
        var tabs = [
            Trans.t('hotNews'),
            Trans.t('transferNews'),
            Trans.t('topNews')
        ];
        console.log(tabs);
        return (
            <View>
                <Navbar
                    left='Menu'
                    title={Trans.t('news')}
                    right='China'
                    onLeftPress={() => {this.toSetting()}}>
                </Navbar>
                <ScrollableTabView
                    renderTabBar={() => <TabBar tabs={tabs} />}>
                    <HotNews
                        tabLabel={Trans.t('hotNews')}
                        route={this.props.route}
                        navigator={this.props.navigator} />
                    <Transfer
                        tabLabel={Trans.t('transferNews')}
                        route={this.props.route}
                        navigator={this.props.navigator} />
                    <View tabLabel={Trans.t('topNews')}>
                        <Text>Rank</Text>
                    </View>
                </ScrollableTabView>
            </View>
        );
    }
});

module.exports = NewsView;
