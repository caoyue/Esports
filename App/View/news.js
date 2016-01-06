'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    ListView,
    ScrollView,
    TouchableHighlight,
    ActivityIndicatorIOS
} = React;

var NewsDetailView = require('./newsDetail');
var LoadingView = require('./loading');
var Api = require('../Api/api');


var NewsView = React.createClass({
    getInitialState: function() {
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        return {
            loaded: false,
            news: ds.cloneWithRows([])
        }
    },
    componentDidMount: function() {
        this.fetchData();
    },
    fetchData: function() {
        fetch(Api.News()).then((response) => {
            return response.json();
        }).
        catch((error) => {
            React.AlertIOS.alert("Loading News Error", "error:" + error.message);
        }).
        then((data) => {
            console.log(data);
            this.setState({
                loaded: true,
                news: this.state.news.cloneWithRows(data)
            })
        });
    },
    onPress: function(data) {
        this.props.navigator.push({
            title: data.author,
            component: NewsDetailView,
            passProps: {
                news: data
            }
        });
    },
    render: function() {
        if (!this.state.loaded) {
            return (
                <LoadingView />
            );
        }
        return (
            <ListView
                style={styles.list}
                dataSource={this.state.news}
                renderRow={this.renderNews}
                automaticallyAdjustContentInsets={false}
                />
        );
    },
    renderNews: function(item) {
        return (
            <TouchableHighlight
                onPress={() => this.onPress(item)}>
                <View
                    style={[styles.box, styles.border]}>
                    <Image
                        style={styles.image}
                        source={{uri: item.image}}>
                        <View style={styles.backdrop}>
                            <Text style={[styles.title]}>{item.title}</Text>
                            <Text style={[styles.tag]}>{item.author} Featured {item.time}</Text>
                        </View>
                    </Image>
                </View>
            </TouchableHighlight>
        );
    }
});

var styles = StyleSheet.create({
    list: {
        marginBottom: 112,
        backgroundColor: 'gray',
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        height: 240
    },
    image: {
        flex: 1,
    },
    backdrop: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0)',
        height: 240,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 30,
    },
    title: {
        color: 'white',
        fontSize: 24,
    },
    tag: {
        color: '#eeeeee',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10,
    }
});

module.exports = NewsView;
