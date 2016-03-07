'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TabBarIOS,
    Navigator,
    NavigatorIOS,
    StatusBarIOS
} = React;

var {MenuContext} = require('react-native-menu');

var Trans = require('../I18n/translate');

var HomeView = React.createClass({
    getInitialState: function() {
        Trans.changeLocale(this.props.lang);
        return {
            selectedTab: 'News'
        }
    },
    render: function() {
        StatusBarIOS.setStyle('light-content');
        var NewsRoute = require('../View/News/route');
        var MatchRoute = require('../View/Match/route');
        var RankRoute = require('../View/Rank/route');
        var HeroRoute = require('../View/Hero/route');
        return (
            <MenuContext style={{flex: 1}}>
                <TabBarIOS
                    style={styles.tabBar}
                    barTintColor='rgb(12,28,44)'
                    tintColor='rgb(110,212,255)'
                    selectedTab={this.state.selectedTab}>
                    <TabBarIOS.Item
                        accessibilityLabel={'News'}
                        selected={this.state.selectedTab === 'News'}
                        title={Trans.t('news')}
                        name='News'
                        icon={require('../../ImageAssets/news.png')}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'News'
                            });
                        }}>
                        <NewsRoute />
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        accessibilityLabel={'Matches'}
                        selected={this.state.selectedTab === 'Matches'}
                        title={Trans.t('match')}
                        name='Matches'
                        icon={require('../../ImageAssets/match.png')}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'Matches'
                            });
                        }}>
                        <MatchRoute />
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        accessibilityLabel={'Rank'}
                        selected={this.state.selectedTab === 'Rank'}
                        title={Trans.t('rank')}
                        name='Rank'
                        icon={require('../../ImageAssets/rank.png')}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'Rank'
                            });
                        }}>
                        <RankRoute />
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        accessibilityLabel={'Hero'}
                        selected={this.state.selectedTab === 'Hero'}
                        title={Trans.t('hero')}
                        name='Hero'
                        icon={require('../../ImageAssets/hero.png')}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'Hero'
                            });
                        }}>
                        <HeroRoute />
                    </TabBarIOS.Item>
                </TabBarIOS>
            </MenuContext>
        );
    }
});

var styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'rgb(110,212,255)'
    },
    container: {
        flex: 1,
    }
});

module.exports = HomeView;
