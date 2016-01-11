
`use strict`

var React = require('react-native');
var {
    View,
    Text,
    StyleSheet,
    Navigator,
    TouchableHighlight
} = React;

var Navbar = React.createClass({
    render: function(){
        return (
            <View style={styles.header}>
                <TouchableHighlight
                    underlayColor='transparent'
                    style={{width: 75}}
                    onPress={this.props.onLeftPress}>
                    <Text style={styles.menu}>{this.props.left}</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor='transparent'
                    style={{flex: 1}}>
                    <Text style={styles.center}>{this.props.title}</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor='transparent'
                    style={{width: 75}}
                    onPress={this.props.onRightPress}>
                    <Text style={styles.right}>{this.props.right}</Text>
                </TouchableHighlight>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 15,
        height: 70,
        backgroundColor: 'rgb(52,136,245)',
    },
    menu: {
        flex: 1,
        width: 80,
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    center: {
        flex: 1,
        fontSize: 24,
        color: 'white',
        textAlign: 'center'
    },
    right: {
        flex: 1,
        width: 80,
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    }
});

module.exports = Navbar;
