`use strict`

var React = require('react-native');
var {
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet
} = React;

var RefreshListView = require('../../View/refreshList');

var PlayerRankView = React.createClass({
    getInitialState: function(){
        return {
            select: "0"
        }
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
    render: function(){
        var filters = [
            {"name": "全部", "pos": "0"},
            {"name": "上单", "pos": "1"},
            {"name": "中单", "pos": "2"},
            {"name": "打野", "pos": "3"},
            {"name": "辅助", "pos": "4"},
            {"name": "ADC", "pos": "5"},
        ];
        return (
            <View style={styles.view}>
                <View style={styles.filter}>
                    {filters.map(this.renderFilter)}
                </View>
                <View style={styles.header}>
                    <Text
                        style={[styles.flex, styles.headerText, {
                            textAlign: 'left',
                            paddingLeft: 30
                        }]}>
                        选手排行
                    </Text>
                    <Text
                        style={[styles.headerText, {width: 60}]}>
                        积分
                    </Text>
                    <Text
                        style={[styles.headerText, {width: 60}]}>
                        KDA
                    </Text>
                </View>
                <RefreshListView
                    onFetch={this.onFetch}
                    rowView={this.renderRow} />
            </View>
        );
    },
    onPress: function(i){
        console.log(i);
        this.setState({
            select: i
        })
    },
    renderFilter: function(p){
        return (
            <TouchableHighlight
                key={p.pos}
                underlayColor='transparent'
                onPress={() => this.onPress(p.pos)}
                style={{flex: 1}}>
                <Text style={[styles.filterText,
                        this.state.select === p.pos ?
                        {color: 'rgb(88,170,200)'} : {}]}>
                        {p.name}
                </Text>
            </TouchableHighlight>
        );
    },
    renderRow: function(row){
        return (
            <View key={row}
                style={[styles.box, styles.border,
                    {paddingTop: 15, paddingBottom: 15}]}>
                <View style={styles.box}>
                    <View style={{width: 20}}>
                        <Text style={styles.number}>{row}</Text>
                    </View>
                    <View style={{width: 45, paddingLeft: 10}}>
                        <Image
                            style={styles.teamIcon}
                            source={require('../../../ImageAssets/team2.jpg')}>
                        </Image>
                    </View>
                    <View style={[styles.flex, {
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            paddingLeft: 15
                        }]}>
                        <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <View>
                                <Text style={{
                                        fontSize: 16,
                                        color: 'rgb(103,180,208)'}}>
                                        TenwowCarry
                                </Text>
                                <Text style={{
                                        color: 'rgb(160,160,160)',
                                        fontSize: 12}}>
                                        LGD 电子竞技俱乐部
                                </Text>
                            </View>
                            <View>
                                <Text style={{
                                        fontSize: 10,
                                        color: 'rgb(203,124,33)',
                                        paddingTop: 5,
                                        paddingLeft: 5
                                    }}>
                                    胜率 80%
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.flex, {
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingTop: 5
                                }]}>
                            <Text style={{
                                    color: 'rgb(160,160,160)',
                                    fontSize: 12,
                                    paddingRight: 5
                                }}>
                                打野｜常用英雄
                            </Text>
                            <Image
                                style={styles.heroIcon}
                                source={require('../../../ImageAssets/team1.jpg')}>
                            </Image>
                            <Image
                                style={styles.heroIcon}
                                source={require('../../../ImageAssets/team1.jpg')}>
                            </Image>
                            <Image
                                style={styles.heroIcon}
                                source={require('../../../ImageAssets/team1.jpg')}>
                            </Image>
                        </View>
                    </View>
                </View>
                <View style={{width: 60}}>
                    <Text style={styles.text}>2012</Text>
                </View>
                <View style={{width: 60}}>
                    <Text style={styles.text}>
                        Active
                    </Text>
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'rgb(10,20,29)',
        paddingLeft: 5,
        paddingRight: 5
    },
    tab: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: 'rgb(225,225,245)'
    },
    header: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 10
    },
    filter: {
        flexDirection: 'row',
        borderColor: 'rgb(34,47,56)',
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    filterText: {
        color: 'rgb(160,160,160)',
        textAlign: 'center',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    },
    flex: {
        flex: 1
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 16,
        color: 'rgb(160,160,160)',
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
        color: 'rgb(160,160,160)',
        textAlign: 'center'
    },
    container: {
        flex: 1,
    },
    number: {
        fontSize: 20,
        color: 'rgb(167,130,28)',
        textAlign: 'center'
    },
    teamIcon: {
        width: 35,
        height: 35
    },
    winIcon: {
        width: 20,
        height: 10
    },
    border: {
        borderColor: 'rgb(34,47,56)',
        borderBottomWidth: 1
    },
    heroIcon: {
        width: 15,
        height: 15,
        marginLeft: 5
    },
});

module.exports = PlayerRankView;
