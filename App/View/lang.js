
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
    getInitialState: function(){
        return {
            lang: 'none',
            selected: 'none'
        };
    },
    componentDidMount: function(){
        this.getLang().done();
    },
    getLang: async function() {
        try{
            var val = await AsyncStorage.getItem(LANG_KEY);
            this.setState({
                lang: val !== null ? val : 'none'
            });
        } catch(error){
            console.log(error.message);
        }
    },
    onPress: async function(lang){
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
        if (this.state.lang !== 'none') {
            return (
                <HomeView lang={this.state.lang}></HomeView>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Image style={styles.img}
                        source={{uri: 'http://www.publicdomainpictures.net/pictures/70000/nahled/corbet.jpg'}}>
                        <LangButton
                            code='zh-CN'
                            name='简体中文'
                            selected={this.state.selected}
                            onPress={() => {this.onPress('zh-CN')}}>
                        </LangButton>
                        <LangButton
                            code='zh-HK'
                            name='繁体中文'
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
        var f = this.props.selected == this.props.code ? {color: 'blue'} : {};
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
        color: 'blue'
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 20,
        textAlign: 'center'
    }
});

module.exports = LangView;
