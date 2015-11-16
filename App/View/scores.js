
'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    ListView,
    ScrollView
} = React;

var LoadingView = require('./loading');
var GroupsView = require('./groups');
var TabSlideView = require('./slider');

var GROUPS_DATA = [
    "Group A", "Group B", "Group C", "Group D", "Group E"
];

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

var ScoresView = React.createClass({
    getInitialState: function() {
        return {
            loaded: false,
            groups: GROUPS_DATA,
            teams: MOCK_DATA,
            group: "A"
        }
    },
    componentDidMount: function() {
        setTimeout(this.fetchData, 500);
    },
    fetchData: function(){
        this.setState({
            loaded:true,
            group: "A"
        })
    },
    render: function() {
        return (
            <View style={styles.container}>
                <TabSlideView groups={this.state.groups}></TabSlideView>
                <GroupsView groups={this.state.teams} />
            </View>
        );
    },
    createGroup: function(item, i) {
        return (
            <View style={styles.group}>
                <Text style={styles.white}>{item}</Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        //marginTop: 64,
    },
    scroll: {
        backgroundColor: '#333333',
    },
    group: {
        backgroundColor: '#333333',
        padding: 10,
        width: 200,
    },
    white: {
        color: 'white',
        fontSize: 20,
        fontWeight: '200'
    }
});

module.exports = ScoresView;
