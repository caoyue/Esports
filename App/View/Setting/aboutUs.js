`use strict`

var React = require('react-native');
var {
    View,
    Text,
    StyleSheet
} = React;

var AboutUsView = React.createClass({
    render: function(){
        var Navbar = require('../../View/navbar');
        var Trans = require('../../I18n/translate');
        return (
            <View style={styles.view}>
                <Navbar
                    left={'< ' + Trans.t('back')}
                    title={Trans.t("aboutus")}
                    right=''
                    onLeftPress={() => this.props.navigator.pop()} />
                <View>
                    <Text style={styles.title}>
                        About Lol Matrix
                    </Text>
                    <Text style={styles.content}>
                        Lol Matrix
                    </Text>
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'rgb(255,255,255)'
    },
    title: {
        fontSize: 18,
        color: 'rgb(28,28,28)'
    },
    content: {
        fontSize: 12,
        color: 'gray'
    }
});

module.exports = AboutUsView;
