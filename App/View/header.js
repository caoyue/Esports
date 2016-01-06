
`use strict`

var React = require('react-native');
var {
    View,
    Text,
    StyleSheet
} = React;

var HeaderView = React.createClass({
    render: function(){
        <View style={styles.header}>
            <View style={styles.menu}><Text>Menu</Text></View>
            <View style={styles.center}>LPL</View>
            <View style={styles.right}>+</View>
        </View>
    }
});

var styles = StyleSheet.create({
    header: {
        height: 30,
        flex: 1,
        flexDirection: "row"
    },
    menu: {
        widht: 30
    },
    center: {
        flex: 1
    },
    right: {
        width: 30
    }
});
