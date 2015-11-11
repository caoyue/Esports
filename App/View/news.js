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

var MOCK_DATA = [
    {
        id: 1,
        title: "Everything you need to konw about the 2015 World Championship",
        image: "http://www.publicdomainpictures.net/pictures/70000/nahled/corbet.jpg",
        author: 'LoL',
        time: '1 week ago'
    }, {
        id: 2,
        title: "theScore eSports's 2015 World Championship Power Rankings",
        image: "http://www.publicdomainpictures.net/pictures/10000/nahled/87-1265714548Otmq.jpg",
        author: 'LoL',
        time: '5 days ago'
    }, {
        id: 3,
        title: "Everything you need to konw about the 2015 World Championship",
        image: "http://www.publicdomainpictures.net/pictures/70000/nahled/corbet.jpg",
        author: 'LoL',
        time: '1 week ago'
    },
];

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
        setTimeout(this.fetchData, 500);
    },
    fetchData: function() {
        this.setState({
            loaded: true,
            news: this.state.news.cloneWithRows(MOCK_DATA)
        })
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
