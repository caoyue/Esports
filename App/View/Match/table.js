`use strict`

var React = require('react-native');
var {
    View,
    Text,
    Image,
    StyleSheet
} = React;

var RefreshListView = require('../../View/refreshList');

var TableView = React.createClass({
    onFetch: function(page=1, callback, options){
        var rows = [4*(page-1) + 1,4*(page-1) + 2,4*(page-1) + 3,4*(page-1) + 4];
        if (page === 3) {
            callback(rows, {
                allLoaded: true
            });
        } else {
            callback(rows);
        }
    },
    render: function(){
        return (
            <View style={styles.view}>
                <View style={styles.tab}>
                    <View style={styles.flex}>
                        <Text
                            style={[styles.text, {textAlign: 'left'}]}>
                            联赛类型
                        </Text>
                    </View>
                    <View style={styles.flex}>
                        <Text
                            style={[styles.text, {textAlign: 'right'}]}>
                            LOL ALl STAR▼
                        </Text>
                    </View>
                </View>
                <View style={styles.header}>
                    <Text
                        style={[styles.flex, styles.text, {textAlign: 'left'}]}>
                        战队排行
                    </Text>
                    <Text
                        style={[styles.flex, styles.text, {textAlign: 'right'}]}>
                        联赛积分
                    </Text>
                </View>
                <RefreshListView
                    onFetch={this.onFetch}
                    rowView={this.renderRow} />
            </View>
        );
    },
    renderRow: function(row){
        return (
            <View style={styles.container}>
                <View style={styles.rank}>
                    <Text style={styles.rankText}>{row}</Text>
                </View>
                <View style={styles.box}>
                    <Image
                        style={styles.icon}
                        source={require('../../../ImageAssets/team2.jpg')}>
                    </Image>
                    <View style={styles.center}>
                        <View>
                            <Text style={styles.title}>
                                LCD ESport Club
                            </Text>
                        </View>
                        <View style={styles.match}>
                            <View><Text style={styles.win}>win 20</Text></View>
                            <View style={styles.border}><Text style={styles.win}>draw 5</Text></View>
                            <View><Text style={styles.win}>lose 10</Text></View>
                        </View>
                    </View>
                    <View style={styles.points}>
                        <Text style={styles.pointText}>2200</Text>
                    </View>
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'rgb(10,20,29)'
    },
    tab: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: 'rgb(20,40,54)',
        backgroundColor: 'rgb(10,20,29)'
    },
    header: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    flex: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    text: {
        fontSize: 16,
        color: 'rgb(168,168,168)'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rank: {
        width: 36
    },
    rankText: {
        fontSize: 14,
        textAlign: 'center',
        color: 'gray'
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'rgb(20,40,54)'
    },
    icon: {
        width: 30,
        height: 30,
    },
    center: {
        flex: 1
    },
    title: {
        color: 'rgb(110,212,255)',
        fontSize: 16,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10
    },
    match: {
        flex: 1,
        flexDirection: 'row',
    },
    win: {
        color: 'rgb(131,131,131)',
        fontSize: 14,
        paddingLeft: 10,
        paddingRight: 10
    },
    border: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'rgb(131,131,131)'
    },
    points: {
        width: 100,
    },
    pointText: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        fontSize: 16
    }
});

module.exports = TableView;
