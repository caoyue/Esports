`use strict`

var React = require('react-native');
var {
    ListView,
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} = React;

var Navbar = require('../../View/navbar');

var SettingView = React.createClass({
    render: function(){
        return (
            <View style={{flex: 1}}>
                <Navbar
                    left='< Back'
                    title='Setting'
                    right=''
                    onLeftPress={() => this.props.navigator.pop()}>
                </Navbar>
                <View style={styles.container}>
                    <TouchableHighlight
                        underlayColor='transparent'
                        onPress={
                            () => this.props.navigator.push({
                                name: 'LangSwitchView'
                            })
                        }>
                        <View style={[styles.row, styles.first]}>
                            <Text style={[styles.left, styles.text]}>
                                Language Switch
                            </Text>
                            <Text style={[styles.right, styles.text]}>></Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor='transparent'
                        onPress={
                            () => this.props.navigator.push({
                                name: 'LangSwitchView'
                            })
                        }>
                        <View style={styles.row}>
                            <Text style={[styles.left, styles.text]}>
                                About Us
                            </Text>
                            <Text style={[styles.right, styles.text]}>></Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor='transparent'
                        onPress={
                            () => this.props.navigator.push({
                                name: 'LangSwitchView'
                            })
                        }>
                        <View style={styles.row}>
                            <Text style={[styles.left, styles.text]}>
                                Feedback
                            </Text>
                            <Text style={[styles.right, styles.text]}>></Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(239,239,244)'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'white',
        paddingLeft: 25,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'rgb(206,206,206)'
    },
    left: {
        flex: 1,
    },
    right: {
        width: 30,
    },
    text: {
        color: 'rgb(28,28,28)',
        fontSize: 18
    },
    first: {
        marginTop: 15,
        marginBottom: 15
    }
});

module.exports = SettingView;
