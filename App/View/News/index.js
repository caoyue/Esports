'use strict';

var React = require('react-native');
var {
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
        console.log(this.props.navigator.getCurrentRoutes());
    },
    render: function() {
        var Trans = require('../../I18n/translate');
        var HotNews = require('./hot');
        var TransferNews = require('./transfer');
        var TopNews = require('./top');
        var TabBar = require('../../View/tabbar');
        var tabs = [
            Trans.t('hotNews'),
            Trans.t('transferNews'),
            Trans.t('topNews')
        ];
        return (
            <View style={{
                    flex: 1,
                    backgroundColor: 'white'
                }}>
                <Navbar
                    left='Menu'
                    title={Trans.t('news')}
                    right='China'
                    onLeftPress={() => {this.toSetting()}}>
                </Navbar>
                <ScrollableTabView
                    locked={true}
                    renderTabBar={() => <TabBar tabs={tabs} />}>
                    <HotNews
                        tabLabel={Trans.t('hotNews')}
                        route={this.props.route}
                        navigator={this.props.navigator} />
                    <TransferNews
                        tabLabel={Trans.t('transferNews')}
                        route={this.props.route}
                        navigator={this.props.navigator} />
                    <TopNews
                        tabLabel={Trans.t('topNews')}
                        route={this.props.route}
                        navigator={this.props.navigator} />
                </ScrollableTabView>
            </View>
        );
    }
});

module.exports = NewsView;
