`use strict`

var React = require('react-native');
var {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    AsyncStorage
} = React;

var Navbar = require('../../View/navbar');
var Trans = require('../../I18n/translate');

var LangSwitchView = React.createClass({
    getInitialState: function(){
        return {
            lang: Trans.getLocale()
        }
    },
    onPress: async function(lang){
        try{
            await AsyncStorage.setItem('LANGUAGE', lang);
            //Trans.changeLocale(lang);
            this.setState({
                lang: lang
            });
        } catch(error) {
            console.log(error.message);
            React.AlertIOS.alert('Error', 'set storage failed!')
        }
    },
    reset: async function(){
        await AsyncStorage.removeItem('LANGUAGE');
    },
    render: function(){
        return (
            <View style={styles.view}>
                <Navbar
                    left={'< ' + Trans.t('back')}
                    title={Trans.t('language')}
                    right=''
                    onLeftPress={() => this.props.navigator.pop()}>
                </Navbar>
                <TouchableHighlight
                    underlayColor='transparent'
                    onPress={() => {this.onPress('zh-CN')}}>
                    <View style={styles.row}>
                        <Text style={[styles.left, styles.text]}>
                            简体中文
                        </Text>
                        <Text style={[styles.right, styles.text]}>
                            {this.state.lang === 'zh-CN' ? '√': ''}
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor='transparent'
                    onPress={() => {this.onPress('zh-HK')}}>
                    <View style={styles.row}>
                        <Text style={[styles.text, styles.left]}>
                            繁體中文
                        </Text>
                        <Text style={[styles.text, styles.right]}>
                            {this.state.lang === 'zh-HK' ? '√': ''}
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor='transparent'
                    onPress={() => {this.onPress('en-US')}}>
                    <View style={styles.row}>
                        <Text style={[styles.left, styles.text]}>
                            English
                        </Text>
                        <Text style={[styles.right, styles.text]}>
                            {this.state.lang === 'en-US' ? '√': ''}
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor='transparent'
                    onPress={() => {this.reset()}}>
                    <View style={styles.row}>
                        <Text style={[styles.left, styles.text]}>
                            Reset(For Develop)
                        </Text>
                        <Text style={[styles.right, styles.text]}></Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
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
        borderBottomWidth: 1,
        borderColor: 'rgb(20,40,54)'
    },
    left: {
        flex: 1,
        color: 'rgb(255,255,255)'
    },
    right: {
        width: 30,
        color: 'rgb(110,212,255)'
    },
    text: {
        fontSize: 18,
        fontWeight: 'normal'
    },
    first: {
        marginTop: 15,
        marginBottom: 15
    }
});

module.exports = LangSwitchView;
