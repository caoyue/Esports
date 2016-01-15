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
            <RefreshListView
                onFetch={this.onFetch}
                rowView={this.renderRow} />
            );
    },
    renderRow: function(item) {
        return (
            <View
                key={item}
                style={styles.container}>
                <View style={[styles.box, styles.border]}>
                    <Image
                        source={require('../../../ImageAssets/team2.jpg')}
                        style={styles.img} />
                    <Text style={styles.person}>EDGClearlove</Text>
                    <Text style={styles.date}>2015/08/08</Text>
                </View>
                <View style={styles.box}>
                    <Image
                        source={require('../../../ImageAssets/team2.jpg')}
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
    container: {
        borderColor: 'rgb(225,225,225)',
        borderBottomWidth: 1.5
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
        fontSize: 16,
        paddingLeft: 5,
    },
    date: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 12
    },
    club: {
        flex: 1,
        fontSize: 12,
        paddingLeft: 5,
    },
    arrow: {
        flex: 1,
        justifyContent: 'center'
    },
    arrowText: {
        textAlign: 'center',
        fontSize: 10,
        color: 'gray'
    },
    border: {
        borderColor: 'rgb(225,225,225)',
        borderBottomWidth: 1
    }
});

module.exports = TransferView;
