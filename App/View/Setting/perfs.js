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
var Trans = require('../../I18n/translate');

var SettingView = React.createClass({
    render: function(){
        var Trans = require('../../I18n/translate');
        return (
            <View style={styles.view}>
                <Navbar
                    left={'< ' + Trans.t('back')}
                    title={Trans.t('setting')}
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
                                {Trans.t('language')}
                            </Text>
                            <Text style={[styles.right, styles.text]}>></Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor='transparent'
                        onPress={
                            () => this.props.navigator.push({
                                name: 'AboutUsView'
                            })
                        }>
                        <View style={styles.row}>
                            <Text style={[styles.left, styles.text]}>
                                {Trans.t('aboutus')}
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
                                {Trans.t('feedback')}
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
    view: {
        flex: 1,
        backgroundColor: 'rgb(10,20,29)'
    },
    container: {
        flex: 1,
        backgroundColor: 'rgb(10,20,29)'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'rgb(10,20,29)',
        paddingLeft: 25,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'rgb(20,40,54)'
    },
    left: {
        flex: 1,
    },
    right: {
        width: 30,
    },
    text: {
        color: 'rgb(255,255,255)',
        fontSize: 18
    },
    first: {
        marginTop: 15,
        marginBottom: 15
    }
});

module.exports = SettingView;
