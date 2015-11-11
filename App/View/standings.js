
'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    ListView
} = React;

var LoadingView = require('./loading');

var MOCK_DATA = [
    {
        number: "1",
        name: "Fnatic",
        wl: "1-0",
        l5: "1-0"
    }, {
        number: "2T",
        name: "LGD-Gaming",
        wl: "1-0",
        l5: "1-0"
    },{
        number: "2T",
        name: "Test",
        wl: "1-0",
        l5: "1-0"
    },{
        number: "2T",
        name: "Test2",
        wl: "1-0",
        l5: "1-0"
    }
];

var StandingsView = React.createClass({
    getInitialState: function() {
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        return {
            loaded:false,
            teams: ds.cloneWithRows([])
        }
    },
    componentDidMount: function(){
        setTimeout(this.fetchData, 500);
    },
    fetchData: function(){
        this.setState({
            loaded:true,
            teams: this.state.teams.cloneWithRows(MOCK_DATA)
        })
    },
    onScroll: function(){
        console.log("scrolled!");
    },
    render: function() {
        if (!this.state.loaded){
            return (
                <LoadingView />
            );
        }
        return (
            <ListView
                style={styles.list}
                dataSource={this.state.teams}
                renderRow={this.renderTeam}
                renderHeader={this.renderHeader}
                automaticallyAdjustContentInsets={false}
            />
        );
    },
    renderHeader: function(){
        return (
            <View style={[styles.box, styles.header]}>
                <Text style={[styles.ts, styles.gray]}>Team Standings</Text>
                <Text style={[styles.wl, styles.gray]}>W-L</Text>
                <Text style={[styles.wl, styles.gray]}>L5</Text>
            </View>
        );
    },
    renderTeam: function(team) {
        return (
            <View style={[styles.box, styles.border]}>
                <Text style={styles.number}>{team.number}</Text>
                <Text style={[styles.name, styles.alignLeft]}>{team.name}</Text>
                <Text style={styles.wl}>{team.wl}</Text>
                <Text style={styles.wl}>{team.l5}</Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    list: {
        //paddingTop: 64,
    },
    box:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height:50,
    },
    border: {
        borderColor: '#eeeeee',
        borderBottomWidth: 1,
    },
    header: {
        paddingTop: 10,
    },
    gray: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 16,
    },
    ts: {
        flex: 1,
        paddingLeft: 10,
    },
    number: {
        width: 40,
        color: 'black',
        textAlign: 'center',
    },
    name: {
        flex: 1,
        textAlign: 'center',
    },
    wl: {
        width: 50,
        textAlign: 'center',
    },
    alignLeft: {
        paddingLeft: 20,
        textAlign: 'left'
    },
});

module.exports = StandingsView;
