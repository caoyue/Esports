`use strict`

var React = require('react-native');
var {
    View,
    Text,
    Image,
    ListView,
    TouchableHighlight,
    StyleSheet
} = React;

var MOCK_DATA = [
    {
        "id": 1,
        "title": "Everything you need to konw about the 2015 World Championship",
        "image": "http://www.publicdomainpictures.net/pictures/70000/nahled/corbet.jpg",
        "author": "LoL",
        "time": "1 week ago"
    },
    {
        "id": 2,
        "title": "theScore eSports's 2015 World Championship Power Rankings",
        "image": "http://www.publicdomainpictures.net/pictures/10000/nahled/87-1265714548Otmq.jpg",
        "author": "LoL",
        "time": "5 days ago"
    },
    {
        "id": 3,
        "title": "Everything you need to konw about the 2015 World Championship",
        "image": "http://www.publicdomainpictures.net/pictures/70000/nahled/corbet.jpg",
        "author": "LoL",
        "time": "1 week ago"
    }
];

var NewsDetailView = require('./newsDetail');
var RefreshListView = require('../../View/refreshList');

var Api = require('../../Api/api');

var HotNews = React.createClass({
    onFetch: function(page=1, callback, options){
        this.setState({
            loaded: true
        });
        var rows = MOCK_DATA;
        if (page === 3) {
            callback(rows, {
                allLoaded: true
            });
        } else {
            callback(rows);
        }
    },
    onPress: function(data) {
        this.props.navigator.push({
            name: 'NewsDetailView',
            news: data
        });
    },
    render: function(){
        return (
            <RefreshListView
                onFetch={this.onFetch}
                rowView={this.renderNews} />
            );
        },
        renderNews: function(item) {
            return (
                <TouchableHighlight
                    key={item.id}
                    onPress={() => this.onPress(item)}>
                    <View style={[styles.box, styles.border]}>
                        <Image
                            style={styles.image}
                            source={{uri: item.image}}>
                            <View style={styles.backdrop}>
                                <Text style={[styles.title]}>
                                    {item.title}
                                </Text>
                                <Text style={[styles.tag]}>
                                    {item.author} Featured {item.time}
                                </Text>
                            </View>
                        </Image>
                    </View>
                </TouchableHighlight>
            );
        }
});

var styles = StyleSheet.create({
    list: {
        backgroundColor: 'white',
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

module.exports = HotNews;
