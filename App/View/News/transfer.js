`use strict`

var React = require('react-native');
var {
    View,
    ListView,
    Image,
    Text,
    StyleSheet
} = React;

var Trans = require('../../I18n/translate');

var TransferView = React.createClass({
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
