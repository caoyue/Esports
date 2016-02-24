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

var PredictionView = React.createClass({
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
                <View style={styles.tab}>
                    <View style={styles.flex}>
                        <Text style={styles.regRemark}>
                            查看预测详情请注册
                        </Text>
                    </View>
                    <TouchableHighlight
                        style={styles.touch}
                        underlayColor='transparent'>
                        <Text style={styles.reg}>注册</Text>
                    </TouchableHighlight>
                </View>
                <RefreshListView
                    onFetch={this.onFetch}
                    rowView={this.renderRow} />
            </View>
        );
    },
    renderRow: function(row){
        return (
            <View key={row} style={styles.container}>
                <View style={[styles.col, styles.row]}>
                    <Image
                        style={styles.icon} source={require('../../../ImageAssets/team1.jpg')}/>
                    <Text style={styles.team}>EDG</Text>
                </View>
                <View style={styles.col}>
                    <Text style={styles.time}>9 月 14 日 18:00</Text>
                    <Text style={styles.score}>3 : 2</Text>
                    <Text style={styles.remark}>官方预测</Text>
                </View>
                <View style={[styles.col, styles.row]}>
                    <Text style={styles.team}>EDG</Text>
                    <Image
                        style={styles.icon} source={require('../../../ImageAssets/team2.jpg')}/>
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white',
    },
    tab: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: 'rgb(225,225,245)',
        alignItems: 'center'
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
    regRemark: {
        fontSize: 12,
        color: 'gray',
        textAlign: 'left'
    },
    touch: {
        paddingRight: 20
    },
    reg: {
        fontSize: 16,
        backgroundColor: 'rgb(255,162,0)',
        color: 'white',
        textAlign: 'right',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 5
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'rgb(225,225,225)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    col: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
    },
    icon: {
        width: 45,
        height: 45
    },
    team: {
        fontSize: 20,
        color: 'rgb(100,100,100)',
        paddingLeft: 10,
        paddingRight: 10
    },
    time: {
        paddingBottom: 10
    },
    score: {
        fontSize: 18,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: 'rgb(167,203,252)',
        paddingLeft: 20,
        paddingRight: 20,
    },
    remark: {
        color: 'gray',
        fontSize: 12,
        paddingTop: 10
    }
});

module.exports = PredictionView;
