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
var Navbar = require('./navbar');

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
        console.log("detail:" + this.props.route);
        this.setState({
            loaded: true
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
                <Navbar
                    left='< Back'
                    title='News'
                    right=''
                    onLeftPress={() => this.props.navigator.pop()}>
                </Navbar>
                <Image
                    style={styles.image}
                    source={{uri: this.props.route.news.image}}>
                </Image>
                <Text>{this.props.route.news.title}</Text>
                <Text>{this.props.route.news.author}</Text>
                <Text>{this.props.route.news.time}</Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    list: {
        marginBottom: 48
    },
    image: {
        height: 200
    }
});

module.exports = NewsDetailView;
