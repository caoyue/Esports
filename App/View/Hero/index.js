'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    Image,
    View,
} = React;

var Navbar = require('../../View/navbar');
var RefreshListView = require('../../View/refreshList');

var HeroView = React.createClass({
    toSetting: function(){
        this.props.navigator.push({
            name: 'SettingView'
        });
    },
    onFetch: function(page=1, callback, options){
        var rows = ["1", "2", "3", "4", "5"];
        if (page === 3) {
            callback(rows, {
                allLoaded: true
            });
        } else {
            callback(rows);
        }
    },
    render: function() {
        var Trans = require('../../I18n/translate');
        return (
            <View style={styles.view}>
                <Navbar
                    isLeftSetting={true}
                    left='Menu'
                    title={Trans.t('hero')}
                    right='China'
                    onLeftPress={() => {this.toSetting()}}>
                </Navbar>
                <RefreshListView
                    onFetch={this.onFetch}
                    rowView={this.renderRow} />
            </View>
        );
    },
    renderRow: function(row){
        return (
            <View key={row} style={styles.row}>
                <View>
                    <Image
                        style={styles.heroIcon}
                        source={require('../../../ImageAssets/team1.jpg')}>
                        <Image        source={require('../../../ImageAssets/hot_en.png')} />
                    </Image>
                </View>
                <View style={{
                        flex: 1,
                        paddingLeft: 10,
                        paddingRight: 10
                    }}>
                    <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingBottom: 6
                        }}>
                        <View style={{flex: 1}}>
                            <Text style={{
                                    fontSize: 16,
                                    color: 'rgb(110,212,255)'
                                }}>
                                暗裔剑魔 亚托克斯
                            </Text>
                        </View>
                        <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'}}>
                            <Image      source={require('../../../ImageAssets/win.png')} />
                            <Text style={{
                                    fontSize: 12,
                                    color: 'rgb(255,201,98)'
                                }}>
                                胜率 80%
                            </Text>
                        </View>
                    </View>
                    <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            paddingTop: 5
                        }}>
                        <View style={{flex: 1}}>
                            <Text style={styles.text}>总使用次数</Text>
                            <Text style={[styles.text,
                                    {fontSize: 10}]}>
                                近3个月
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.text}>胜率最高队伍</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.text}>胜率最高选手</Text>
                        </View>
                    </View>
                    <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            paddingTop: 5
                        }}>
                        <Text style={[{flex: 1},
                            styles.text, styles.bottomeText]}>
                            40
                        </Text>
                        <Text style={[{flex: 1},
                            styles.text, styles.bottomeText]}>
                            YG
                        </Text>
                        <Text style={[{flex: 1},
                            styles.text, styles.bottomeText]}>
                            EDGClearlove
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
});

var styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'rgb(10,20,29)',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 10,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderColor: 'rgb(36,63,83)'
    },
    heroIcon: {
        width: 60,
        height: 60,
        borderRadius: 5
    },
    text: {
        textAlign: 'center',
        fontSize: 12,
        color: 'rgb(255,255,255)'
    },
    bottomeText: {
        fontSize: 14
    }
});

module.exports = HeroView;
