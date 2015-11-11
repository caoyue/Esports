
'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    ListView,
} = React;

var LoadingView = require('./loading');
var GroupItemView = require('./groupItem');

var MOCK_DATA = [
    {
        time: "星期四，10 月 1 日",
        scores: [{
            teamA: "Fnatic",
            teamB: "Invictus Gaming",
            scoreA: "1",
            scoreB: "0",
            remarkA: "30:34",
            remarkB: "Game 1"
        },
    {
        teamA: "Cloud9",
        teamB: "ahq e-Sports Club",
        scoreA: "",
        scoreB: "",
        remarkA: "~11:30",
        remarkB: ""
    }]
    }, {
        time: "星期四，10 月 1 日",
        scores: [{
            teamA: "Fnatic",
            teamB: "Invictus Gaming",
            scoreA: "1",
            scoreB: "0",
            remarkA: "30:34",
            remarkB: "Game 1"
        },
    {
        teamA: "Cloud9",
        teamB: "ahq e-Sports Club",
        scoreA: "",
        scoreB: "",
        remarkA: "~11:30",
        remarkB: ""
    }]
    }
];

var GroupsView = React.createClass({
    getInitialState: function() {
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        return {
            loaded: false,
            group: this.props.group,
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
    render: function() {
        if (!this.state.loaded){
            return (
                <LoadingView />
            );
        }
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.teams}
                renderRow={this.renderTeam}
                automaticallyAdjustContentInsets={false}
            />
        );
    },
    renderTeam: function(team) {
        return (
            <View style={styles.box}>
                <GroupItemView groups={team.scores} time={team.time} />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        //marginTop: 64,
    },
    box: {
        padding: 10
    }
});

module.exports = GroupsView;
