`use strict`

var React = require('react-native');
var {
    View,
    Image,
    Text,
    StyleSheet
} = React;

var MOCK_DATA = ["1", "2", "3", "4"];

var RefreshListView = require('../../View/refreshList');
var Trans = require('../../I18n/translate');

var TransferView = React.createClass({
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
                key={item}
                style={styles.container}>
                <View style={[styles.box]}>
                    <Image
                        source={require('../../../ImageAssets/team2.jpg')}
                        style={{width: 30, height: 30}} />
                    <Text style={styles.person}>EDGClearlove</Text>
                    <Text style={styles.date}>2015/08/08</Text>
                </View>
                <View style={styles.box}>
                    <Image
                        source={require('../../../ImageAssets/team1.jpg')}
                        style={styles.img} />
                    <Text style={styles.club}>LGD Esport Club</Text>
                    <Image style={styles.arrow}>
                        <Text style={styles.arrowText}>
                            {Trans.t("transferTo")}</Text>
                    </Image>
                    <Image
                        source={require('../../../ImageAssets/team2.jpg')}
                        style={styles.img} />
                    <Text style={styles.club}>LGD Esport Club</Text>
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
        borderColor: 'rgb(20,40,54)',
        borderBottomWidth: 1,
        backgroundColor: 'rgb(10,20,29)',
        paddingTop: 5,
        paddingBottom: 5
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        height: 40,
    },
    img: {
        height: 25,
        width: 25
    },
    person: {
        flex: 1,
        textAlign: 'left',
        fontSize: 18,
        color: 'rgb(96,187,225)',
        paddingLeft: 5,
    },
    date: {
        textAlign: 'center',
        color: 'rgb(127,128,129)',
        fontSize: 12
    },
    club: {
        flex: 1,
        fontSize: 12,
        color: 'rgb(220,220,220)',
        paddingLeft: 5,
    },
    arrow: {
        flex: 1,
        justifyContent: 'center'
    },
    arrowText: {
        textAlign: 'center',
        fontSize: 12,
        color: 'rgb(220,220,220)'
    }
});

module.exports = TransferView;
