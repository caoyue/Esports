
'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    Image,
    View,
    ListView
} = React;

var LoadingView = require('./loading');

var MOCK_DATA = [
    {
        number: "1",
        team: "Fnatic",
        player: "YellOwStaR",
        gp: "18",
        kda: "16.33"
    }, {
        number: "2",
        team: "Fnatic",
        player: "YellOwStaR",
        gp: "18",
        kda: "16.33"
    },{
        number: "3",
        team: "Fnatic",
        player: "YellOwStaR",
        gp: "18",
        kda: "16.33"
    },{
        number: "4",
        team: "Fnatic",
        player: "YellOwStaR",
        gp: "18",
        kda: "16.33"
    }
];

var StandingsView = React.createClass({
    getInitialState: function() {
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        return {
            loaded:false,
            players: ds.cloneWithRows([])
        }
    },
    componentDidMount: function(){
        setTimeout(this.fetchData, 500);
    },
    fetchData: function(){
        this.setState({
            loaded:true,
            players: this.state.players.cloneWithRows(MOCK_DATA)
        })
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
                dataSource={this.state.players}
                renderRow={this.renderPlayer}
                renderHeader={this.renderHeader}
                automaticallyAdjustContentInsets={false}
            />
        );
    },
    renderHeader: function() {
        return (
            <View style={[styles.box, styles.header]}>
                <Text style={[styles.ts, styles.gray]}>League Leaders</Text>
                <Text style={[styles.wl, styles.gray]}>GP</Text>
                <Text style={[styles.wl, styles.gray]}>KDA</Text>
            </View>
        );
    },
    renderPlayer: function(player) {
        return (
            <View style={[styles.box, styles.border]}>
                <Text style={styles.number}>{player.number}</Text>
                <Image
                    source={require('../../ImageAssets/team1.jpg')}
                    style={styles.icon} />
                <View style={styles.player}>
                    <Text>
                        {player.player}
                    </Text>
                    <Text style={styles.team}>{player.team}</Text>
                </View>
                <Text style={styles.wl}>{player.gp}</Text>
                <Text style={styles.wl}>{player.kda}</Text>
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
        padding: 10,
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
    player: {
        flex: 1,
    },
    team: {
        color: 'gray',
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
    icon: {
        height: 25,
        width: 25,
        marginRight: 10
    }
});

module.exports = StandingsView;
