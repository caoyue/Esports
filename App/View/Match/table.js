`use strict`

var React = require('react-native');
var {
    ListView,
    View,
    Text,
    Image,
    StyleSheet
} = React;

var RefreshableListView = require('react-native-refreshable-listview');

var TableView = React.createClass({
    getInitialState: function(){
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        return {
            dataSource: ds
        }
    },
    componentDidMount: function(){
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(["1", "2"])
        })
    },
    reload: function(){
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(["1,","2","3","4"])
        });
    },
    render: function(){
        return (
            <RefreshableListView
                style={styles.list}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                loadData={this.reload}
                refreshDescription='Refreshing' />
        );
    },
    renderRow: function(){
        return (
            <View style={styles.container}>
                <View style={styles.rank}>
                    <Text style={styles.rankText}>1</Text>
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
    list: {
        backgroundColor: 'white',
        height: 1000
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rank: {
        width: 40
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
        borderColor: 'rgb(200,200,200)'
    },
    icon: {
        width: 30,
        height: 30,
    },
    center: {
        flex: 1
    },
    title: {
        color: 'rgb(23,23,53)',
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
        color: 'gray',
        fontSize: 14,
        paddingLeft: 10,
        paddingRight: 10
    },
    border: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'gray'
    },
    points: {
        width: 60,
    },
    pointText: {
        color: 'gray',
        textAlign: 'center'
    }
});

module.exports = TableView;
