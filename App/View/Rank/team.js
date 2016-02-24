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

var TeamRankView = React.createClass({
    onFetch: function(page=1, callback, options){
        var rows = ["1", "2", "3"];
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
                <View style={styles.header}>
                    <Text
                        style={[styles.flex, styles.headerText]}>
                        队伍排行
                    </Text>
                    <Text
                        style={[styles.headerText, {width: 70}]}>
                        积分
                    </Text>
                    <Text
                        style={[styles.headerText, {width: 70}]}>
                        状态
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
            <View key={row}
                style={[styles.box, styles.border,
                    {paddingTop: 15, paddingBottom: 15, marginLeft: 15, marginRight: 15}]}>
                <View style={styles.box}>
                    <View style={{width: 25}}>
                        <Text style={styles.number}>{row}</Text>
                    </View>
                    <View style={{width: 55, paddingLeft: 15}}>
                        <Image
                            style={styles.teamIcon}
                            source={require('../../../ImageAssets/team2.jpg')}>
                        </Image>
                    </View>
                    <View style={[styles.flex,
                            {alignItems: 'center', justifyContent: 'center'}]}>
                        <View>
                            <Text style={[styles.text, {paddingBottom: 5}]}>
                                Gravity
                            </Text>
                        </View>
                        <View style={[styles.flex, {flexDirection: 'row', alignItems: 'center'}]}>
                            <Image
                                style={styles.winIcon}
                                source={require('../../../ImageAssets/team1.jpg')}>
                            </Image>
                            <Text style={{color: 'rgb(213,128,28)'}}>win 80%</Text>
                        </View>
                    </View>
                </View>
                <View style={{width: 70}}>
                    <Text style={styles.text}>2012</Text>
                </View>
                <View style={{width: 70}}>
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
        backgroundColor: 'rgb(10,20,29)'
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
        paddingBottom: 10,
        paddingLeft: 10
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
        fontSize: 18,
        color: 'rgb(160,160,160)',
        textAlign: 'center'
    },
    container: {
        flex: 1,
    },
    number: {
        fontSize: 22,
        color: 'rgb(167,130,28)',
        textAlign: 'center'
    },
    teamIcon: {
        width: 40,
        height: 40
    },
    winIcon: {
        width: 20,
        height: 10
    },
    border: {
        borderColor: 'rgb(34,47,56)',
        borderBottomWidth: 1
    }
});

module.exports = TeamRankView;
