
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
var TabSliderView = require('./slider');

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
        }, {
            teamA: "Cloud9",
            teamB: "ahq e-Sports Club",
            scoreA: "",
            scoreB: "",
            remarkA: "~11:30",
            remarkB: ""
        }
    ]},
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
                <TabSliderView
                    tabWidth={0.5}
                    tabs={this.state.groups}
                    onTabChange={(t) => this.onTabChange(t)}
                    containerStyle={styles.tsContainer}
                    sliderStyle={styles.tsSlider}
                    textStyle={styles.tsText}>
                </TabSliderView>
                <GroupsView groups={this.state.teams} />
            </View>
        );
    },
    onTabChange: function(tab) {
        console.log(tab);
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
    },
    tsContainer: {
        backgroundColor: "#333",
    },
    tsSlider: {
        backgroundColor: '#333',
        paddingTop: 5,
        paddingBottom: 5,
    },
    tsText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '200',
        textAlign: 'center'
    },
});

module.exports = ScoresView;
