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
                        LOL自09年在欧美上市以来，迅速在中国、韩国、美、欧洲大陆等全球范围掀起了全民英雄对战的狂潮，来自145个不同国家，数以千万计的玩家每天通过《英雄联盟》享受着在线电子竞技的快乐。
                    </Text>
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'rgb(20,10,29)'
    },
    title: {
        fontSize: 20,
        color: 'rgb(255,255,255)',
        paddingLeft: 10,
        paddingTop: 10
    },
    content: {
        fontSize: 14,
        color: 'rgb(226,226,226)',
        paddingTop: 10,
        paddingLeft: 10
    }
});

module.exports = AboutUsView;
