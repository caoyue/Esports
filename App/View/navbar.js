
`use strict`

var React = require('react-native');
var {
    View,
    Text,
    Image,
    StyleSheet,
    Navigator,
    TouchableHighlight
} = React;

var Navbar = React.createClass({
    render: function(){
        var left;
        if (this.props.isLeftSetting) {
            left = <Image
                    style={styles.leftImage}
                    source={require('../../ImageAssets/settings.png')} />;
        } else {
            left = <Text style={styles.leftText}>{this.props.left}</Text>;
        }
        return (
            <View>
                <Image
                    style={styles.header}
                    source={{uri: 'http://gethdpic.com/wp-content/uploads/2013/12/Abstract-Circuit-Board-Mac-Wallpaper-960x250.jpg'}}>
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
                    <TouchableHighlight
                        underlayColor='transparent'
                        style={{width: 75}}
                        onPress={this.props.onRightPress}>
                        <Text style={styles.right}>{this.props.right}</Text>
                    </TouchableHighlight>
                </Image>
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
    right: {
        flex: 1,
        width: 80,
        fontSize: 18,
        color: 'rgb(110,212,255)',
        textAlign: 'center'
    }
});

module.exports = Navbar;
