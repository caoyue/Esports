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
            <View>
                <Navbar
                    left='< Back'
                    title='Setting'
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
                        <Text style={[styles.left, styles.text]}>
                            繁體中文
                        </Text>
                        <Text style={[styles.right, styles.text]}>
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
                            Reset
                        </Text>
                        <Text style={[styles.right, styles.text]}></Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
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
        fontSize: 18,
        fontWeight: 'normal'
    },
    first: {
        marginTop: 15,
        marginBottom: 15
    }
});

module.exports = LangSwitchView;
