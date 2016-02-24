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

var Trans = require('../I18n/translate');

var HomeView = React.createClass({
    getInitialState: function() {
        Trans.changeLocale(this.props.lang);
        return {
            selectedTab: 'News',
        }
    },
    render: function() {
        StatusBarIOS.setStyle('light-content');
        var NewsRoute = require('../View/News/route');
        var MatchRoute = require('../View/Match/route');
        var RankRoute = require('../View/Rank/route');
        return (
            <TabBarIOS
                style={styles.tabBar}
                selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    accessibilityLabel={'News'}
                    selected={this.state.selectedTab === 'News'}
                    title={Trans.t('news')}
                    name='News'
                    icon={require('../../ImageAssets/tabbar3.png')}
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
                    icon={require('../../ImageAssets/tabbar.png')}
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
                    icon={require('../../ImageAssets/tabbar2.png')}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'Rank'
                        });
                    }}>
                    <RankRoute />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    accessibilityLabel={'Leaders'}
                    selected={this.state.selectedTab === 'Leaders'}
                    title='Leaders'
                    name='Leaders'
                    icon={require('../../ImageAssets/tabbar2.png')}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'Leaders'
                        });
                    }}>
                    <NavigatorIOS
                        style={styles.container}
                        translucent={false}
                        barTintColor={'#333333'}
                        tintColor={'white'}
                        titleTextColor={'white'}
                        initialRoute={{
                            title: 'Leaders',
                            component: require('./leaders')
                        }}/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
});

var styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'rgb(52,136,245)',
    },
    container: {
        flex: 1,
    }
});

module.exports = HomeView;
