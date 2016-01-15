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

var Navbar = require('../../View/navbar');

var NewsDetailView = React.createClass({
    render: function() {
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
