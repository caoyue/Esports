'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TabBarIOS,
    NavigatorIOS,
    StatusBarIOS
} = React;

var EsportsView = React.createClass({
    getInitialState: function() {
        return {
            selectedTab: "News"
        }
    },
    render: function() {
        StatusBarIOS.setStyle("light-content");
        return (
            <TabBarIOS
                selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    accessibilityLabel={"Scores"}
                    selected={this.state.selectedTab === "Scores"}
                    title="Scores"
                    name="Scores"
                    icon={{
                        uri: 'scores.png',
                        isStatic: true
                    }}
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
                            component: require('./App/View/scores')
                        }}/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    accessibilityLabel={"Standings"}
                    selected={this.state.selectedTab === "Standings"}
                    title="Standings"
                    name="Standings"
                    icon={{
                        uri: 'standings.png',
                        isStatic: true
                    }}
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
                            component: require('./App/View/standings')
                        }} />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    accessibilityLabel={"News"}
                    selected={this.state.selectedTab === "News"}
                    title="News"
                    name="News"
                    icon={{
                        uri: 'icon.png',
                        isStatic: true
                    }}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'News'
                        });
                    }}>
                    <NavigatorIOS
                        style={styles.container}
                        translucent={false}
                        barTintColor={'#333333'}
                        tintColor={'white'}
                        titleTextColor={'white'}
                        initialRoute={{
                            title: 'News',
                            component: require('./App/View/news')
                        }}/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    accessibilityLabel={"Leaders"}
                    selected={this.state.selectedTab === "Leaders"}
                    title="Leaders"
                    name="Leaders"
                    icon={{
                        uri: 'leaders.png',
                        isStatic: true
                    }}
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
                            component: require('./App/View/leaders')
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

AppRegistry.registerComponent('Esports', () => EsportsView);
module.export = EsportsView;
