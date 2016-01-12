`use strict`

var React = require('react-native');
var {
    View,
    ListView,
    Text,
    StyleSheet
} = React;

var Trans = require('../../I18n/translate');

var TopView = React.createClass({
    getInitialState: function() {
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        return {
            loaded: false,
            news: ds.cloneWithRows([])
        }
    },
    componentDidMount: function() {
        this.fetchData();
    },
    fetchData: function() {
        var Api = require('../../Api/api');
        fetch(Api.News()).then((response) => {
            return response.json();
        }).
        catch((error) => {
            React.AlertIOS.alert('Error',
            'error:' + error.message);
        }).
        then((data) => {
            this.setState({
                loaded: true,
                news: this.state.news.cloneWithRows(data)
            });
        });
    },
    render: function(){
        if (!this.state.loaded) {
            var LoadingView = require('../../View/loading');
            return (
                <LoadingView />
            );
        }
        return (
            <ListView
                style={styles.list}
                dataSource={this.state.news}
                renderRow={this.renderNews}
                automaticallyAdjustContentInsets={false}
            />
        );
    },
    renderNews: function(item) {
        return (
            <View style={styles.container}>
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
    container: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'rgb(225,225,225)',
        borderBottomWidth: 1
    },
    left: {
        width: 30,
        justifyContent: 'center'
    },
    point: {
        color: 'rgb(53,53,53)',
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 5
    },
    right: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        color: 'rgb(53,53,53)',
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
