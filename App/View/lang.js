
`use strict`

var React = require('react-native');
var {
    AsyncStorage,
    TouchableHighlight,
    View,
    Text,
    StyleSheet,
    Image
} = React;

var HomeView = require('./home');
var LANG_KEY = 'LANGUAGE';

var LangView = React.createClass({
    getInitialState: function() {
        return {
            lang: 'none',
            selected: 'none'
        };
    },
    componentDidMount: function() {
        this.getLang().done();
    },
    getLang: async function() {
        try{
            var val = await AsyncStorage.getItem(LANG_KEY);
            this.setState({
                lang: val !== null ? val : 'done'
            });
        } catch(error){
            console.log(error.message);
        }
    },
    onPress: async function(lang) {
        this.setState({
            selected: lang
        });
        try{
            await AsyncStorage.setItem(LANG_KEY, lang);
            this.setState({
                lang: lang
            });
        } catch(error) {
            console.log(error.message);
            React.AlertIOS.alert('Error', 'set storage failed!')
        }
    },
    render: function() {
        if (this.state.lang === 'none') {
            var LoadingView = require('./loading');
            return (
                <LoadingView />
            );
        }
        else if (this.state.lang !== 'done') {
            return (
                <HomeView lang={this.state.lang} />
            );
        } else {
            return (
                <View style={styles.container}>
                    <Image style={styles.img}
                        source={require('../../ImageAssets/launch.jpg')}>
                        <LangButton
                            code='zh-CN'
                            name='简体中文'
                            selected={this.state.selected}
                            onPress={() => {this.onPress('zh-CN')}}>
                        </LangButton>
                        <LangButton
                            code='zh-HK'
                            name='繁體中文'
                            selected={this.state.selected}
                            onPress={() => {this.onPress('zh-HK')}}>
                        </LangButton>
                        <LangButton
                            code='en-US'
                            name='English'
                            selected={this.state.selected}
                            onPress={() => {this.onPress('en-US')}}>
                        </LangButton>
                    </Image>
                </View>
            );
        }
    }
});

var LangButton = React.createClass({
    render: function() {
        var f = this.props.selected == this.props.code
        ? {color: 'rgb(110,212,255)'} : {};
        return (
            <TouchableHighlight
                style={[styles.touch]}
                underlayColor='transparent'
                onPress={this.props.onPress}>
                    <Text style={[styles.text, f]}>{this.props.name}</Text>
            </TouchableHighlight>
        );
    }
});

var styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    img: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 150
    },
    touch: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 36,
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 20,
        textAlign: 'center'
    }
});

module.exports = LangView;
