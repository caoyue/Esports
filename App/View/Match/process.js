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

var ProcessView = React.createClass({
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
    goToDetail: function(){
        this.props.navigator.push({
            name: 'SettingView'
        });
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
                <RefreshListView
                    onFetch={this.onFetch}
                    rowView={this.renderRow} />
            </View>
        );
    },
    renderRow: function(row){
        var t = ["1", "2", "3"];
        return (
            <View key={row} style={styles.container}>
                <View style={styles.time}>
                    <Text style={styles.text}>2015/08/08 Manday</Text>
                </View>
                {t.map(this.renderItem)}
            </View>
        );
    },
    renderItem: function(r){
        return (
            <View key={r} style={styles.box}>
                <View style={[styles.flex, {paddingLeft: 30}]}>
                    <View style={styles.item}>
                        <Image
                            style={styles.icon} source={require('../../../ImageAssets/team2.jpg')} />
                        <Text style={styles.club}>LGD 电子竞技俱乐部</Text>
                    </View>
                    <View style={styles.item}>
                        <Image
                            style={styles.icon} source={require('../../../ImageAssets/team1.jpg')} />
                        <Text style={styles.club}>YG 电子竞技俱乐部</Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <View style={styles.itemRgt}>
                        <Text style={styles.rgtText}>2</Text>
                        <Text style={styles.rgtText}>BO5</Text>
                    </View>
                    <View style={styles.itemRgt}>
                        <Text style={styles.rgtText}>3</Text>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <TouchableHighlight
                                style={{width: 40}}>
                                <Text style={styles.detail}>详细</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white'
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
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    text: {
        fontSize: 16,
        color: 'gray'
    },
    container: {
        flex: 1,
    },
    time: {
        paddingTop: 15,
        paddingBottom: 10,
        paddingLeft: 10
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'rgb(225,225,225)',
        paddingBottom: 10
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },
    icon: {
        height: 30,
        width: 30,
    },
    club: {
        fontSize: 16,
        color: 'rgb(58,58,58)',
        paddingLeft: 10,
    },
    itemRgt: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
    },
    rgtText: {
        flex: 1,
        fontSize: 16,
        color: 'rgb(58,58,58)',
        textAlign: 'center',
    },
    detail: {
        color: 'white',
        backgroundColor: 'rgb(243,152,0)',
        textAlign: 'center',
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 3,
        paddingRight: 3
    }
});

module.exports = ProcessView;
