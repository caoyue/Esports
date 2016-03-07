`use strict`

var React = require('react-native');
var {
    View,
    ListView,
    Text,
    StyleSheet
} = React;

var MOCK_DATA = ["1", "2", "3", "4"];

var RefreshListView = require('../../View/refreshList');
var Trans = require('../../I18n/translate');

var TopView = React.createClass({
    onFetch: function(page=1, callback, options){
        this.setState({
            loaded: true
        });
        var rows = MOCK_DATA;
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
                <RefreshListView
                    onFetch={this.onFetch}
                    rowView={this.renderRow} />
            </View>
            );
    },
    renderRow: function(item) {
        return (
            <View
                key={item.id}
                style={styles.container}>
                <View style={styles.left}>
                    <Text style={styles.point}>·</Text></View>
                <View style={styles.right}>
                    <View>
                        <Text style={styles.title}>
                            2016 英雄联盟职业联赛春季联赛即将于 2016 年 1 月 14 日正式开战
                        </Text>
                    </View>
                    <View><Text style={styles.time}>1 min ago</Text></View>
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
    container: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'rgb(20,40,54)',
        borderBottomWidth: 1,
        backgroundColor: 'rgb(10,20,29)',
        paddingTop: 5
    },
    left: {
        width: 20,
        justifyContent: 'center'
    },
    point: {
        color: 'rgb(53,53,53)',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 5
    },
    right: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 10
    },
    title: {
        color: 'rgb(205,205,205)',
        fontSize: 16,
        paddingTop: 6,
        paddingBottom: 6
    },
    time: {
        color: 'gray',
        fontSize: 12,
        paddingBottom: 6
    }
});

module.exports = TopView;
