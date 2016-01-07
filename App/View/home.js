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

var I18n = require('react-native-i18n');
I18n.fallbacks = true;
I18n.translations = require('../I18n/translations.json');
I18n.locale = 'zh-CN';

var HomeView = React.createClass({
    getInitialState: function() {
        return {
            selectedTab: 'News'
        }
    },
    render: function() {
        StatusBarIOS.setStyle('light-content');
        return (
            <TabBarIOS
                selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    accessibilityLabel={'Scores'}
                    selected={this.state.selectedTab === 'Scores'}
                    title={I18n.t('scores')}
                    name='Scores'
                    icon={require('../../ImageAssets/tabbar.png')}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'Scores'
                        });
                    }}>
                    <NavigatorIOS
                        style={styles.container}
                        translucent={false}
                        barTintColor={'#333333'}
                        tintColor={'white'}
                        titleTextColor={'white'}
                        translucent={false}
                        shadowHidden={true}
                        initialRoute={{
                            title: 'Scores',
                            component: require('./scores')
                        }}/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    accessibilityLabel={'Standings'}
                    selected={this.state.selectedTab === 'Standings'}
                    title='Standings'
                    name='Standings'
                    icon={require('../../ImageAssets/tabbar2.png')}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'Standings'
                        });
                    }}>
                    <NavigatorIOS
                        style={styles.container}
                        translucent={false}
                        barTintColor={'#333333'}
                        tintColor={'white'}
                        titleTextColor={'white'}
                        initialRoute={{
                            title: 'Standings',
                            component: require('./standings')
                        }} />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    accessibilityLabel={'News'}
                    selected={this.state.selectedTab === 'News'}
                    title='News'
                    name='News'
                    icon={require('../../ImageAssets/tabbar3.png')}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'News'
                        });
                    }}>
                    <Navigator
                        initialRoute={{name: 'NewsView', news: null}}
                        configureScene={(route) => Navigator.SceneConfigs.HorizontalSwipeJump}
                        renderScene={(route, navigator) => {
                            switch(route.name) {
                                case 'NewsDetailView':
                                    var NewsDetailView = require('./newsDetail');
                                    return <NewsDetailView route={route} navigator={navigator}></NewsDetailView>;
                                default:
                                    var NewsView = require('./news');
                                    return <NewsView route={route} navigator={navigator}></NewsView>;
                            }}
                        }>
                    </Navigator>
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
    container: {
        flex: 1,
    }
});

module.exports = HomeView;
