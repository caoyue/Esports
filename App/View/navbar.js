
`use strict`

var React = require('react-native');
var {
    View,
    Text,
    Image,
    StyleSheet,
    Navigator,
    TouchableHighlight,
    Dimensions
} = React;

var Menu= require('react-native-menu');
var {
    MenuContext,
    MenuTrigger,
    MenuOptions,
    MenuOption
} = Menu;

var Trans = require('../I18n/translate');

var Navbar = React.createClass({
    getInitialState: function(){
        var width = Dimensions.get('window').width;
        return {
            place: 'cn',
            width: width
        }
    },
    _changePlace: function(value) {
        this.setState({
            place: value
        });
    },
    _getPlace: function(){
        return ['cn', 'us', 'kr'];
    },
    render: function(){
        var left;
        if (this.props.isLeftSetting) {
            left = <Image
                    style={styles.leftImage}
                    source={require('../../ImageAssets/settings.png')} />;
        } else {
            left = <Text style={styles.leftText}>{this.props.left}</Text>;
        }

        var place = this._getPlace();
        return (
                <Image
                    style={[styles.header, {width: this.state.width}]}
                    source={require('../../ImageAssets/nav.png')}>
                    <TouchableHighlight
                        underlayColor='transparent'
                        style={styles.leftContainer}
                        onPress={this.props.onLeftPress}>
                        {left}
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor='transparent'
                        style={{flex: 1}}>
                        <Text style={styles.center}>{this.props.title}</Text>
                    </TouchableHighlight>
                    <View style={{width: 75}}>
                        <Menu onSelect={(value) => this._changePlace(value)}>
                            <MenuTrigger>
                                <Text style={[styles.menu, {backgroundColor: 'transparent'}]}>
                                    {Trans.t(this.state.place)}
                                </Text>
                            </MenuTrigger>
                            <MenuOptions optionsContainerStyle={styles.menuContainer}>
                                {place.map(this._renderOption)}
                            </MenuOptions>
                        </Menu>
                    </View>
                </Image>
        );
    },
    _renderOption: function(option){
        return (
            <MenuOption key={option} value={option}>
                <Text style={[styles.menu,
                        this.state.place === option
                        ? {color: 'rgb(255,255,255)'} : {}]}>
                    {Trans.t(option)}
                </Text>
            </MenuOption>
        );
    }
});

var styles = StyleSheet.create({
    header: {
        height: 70,
        paddingBottom: 15,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: 'rgb(10,20,29)',
        resizeMode: 'cover'
    },
    leftContainer: {
        width: 75,
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftImage: {
        width: 25,
        height: 25,
    },
    leftText: {
       flex: 1,
       width: 80,
       color: 'rgb(110,212,255)',
       fontSize: 18,
       textAlign: 'center'
   },
    center: {
        flex: 1,
        fontSize: 24,
        color: 'rgb(110,212,255)',
        textAlign: 'center'
    },
    menuContainer: {
        width: 80,
        backgroundColor: 'rgb(10,20,29)'
    },
    menu: {
        fontSize: 18,
        color: 'rgb(110,212,255)',
        textAlign: 'center'
    }
});

module.exports = Navbar;
