
'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    Image,
    View,
    ListView,
} = React;

var GroupItemView = React.createClass({
    getInitialState: function(){
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        return {
            time: this.props.time,
            groups: ds.cloneWithRows(this.props.groups)
        }
    },
    render: function(){
        return (
            <ListView
                dataSource={this.state.groups}
                renderRow={this.renderGroup}
                renderHeader={this.renderHeader}>
            </ListView>
        );
    },
    renderHeader: function(group){
        return (
            <View style={styles.header}>
                <Text style={[styles.title]}>
                    {this.state.time}
                </Text>
            </View>
        );
    },
    renderGroup: function(group){
        return (
            <View style={styles.box}>
                <View style={styles.group}>
                    <Image
                        source={require('../../ImageAssets/team1.jpg')}
                        style={styles.icon} />
                    <Text style={styles.name}>{group.teamA}</Text>
                    <Text style={styles.remark}>{group.scoreA}</Text>
                    <Text style={styles.remark}>{group.remarkA}</Text>
                </View>
                <View style={styles.group}>
                    <Image source={require('../../ImageAssets/team2.jpg')}
                        style={styles.icon} />
                    <Text style={styles.name}>{group.teamB}</Text>
                    <Text style={styles.remark}>{group.scoreB}</Text>
                    <Text style={styles.remark}>{group.remarkB}</Text>
                </View>
            </View>
        );
    }
});

var styles= StyleSheet.create({
    box: {
        borderColor: '#eeeeee',
        borderBottomWidth: 1,
        paddingTop: 10,
    },
    group: {
        flex: 1,
        flexDirection: 'row',

        paddingTop: 10,
        paddingBottom: 10,
    },
    header: {
        height: 30,
        justifyContent: 'center',
    },
    title: {
        color: 'gray',
        fontWeight: 'bold',
    },
    name: {
        flex: 1,
    },
    remark: {
        width: 50,
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 10,
        marginRight: 10,
    }
});

module.exports = GroupItemView;
