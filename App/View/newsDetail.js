'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    ListView,
    TouchableHighlight,
} = React;

var LoadingView = require('./loading');

var NewsDetailView = React.createClass({
    getInitialState: function() {
        return {
            loaded: false,
            news: "null"
        }
    },
    componentDidMount: function() {
        setTimeout(this.fetchData, 500);
    },
    fetchData: function() {
        this.setState({
            loaded: true,
            news: this.props.news
        })
    },
    render: function() {
        if (!this.state.loaded) {
            return (
                <LoadingView />
            );
        }
        return (
            <View style={styles.list}>
                <Image
                    style={styles.image}
                    source={{uri: this.state.news.image}}>
                </Image>
                <Text>{this.props.news.title}</Text>
                <Text>{this.props.news.author}</Text>
                <Text>{this.props.news.time}</Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    list: {
        //marginTop: 64,
        marginBottom: 48
    },
    image: {
        height: 200
    }
});

module.exports = NewsDetailView;
