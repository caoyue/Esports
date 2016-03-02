`use strict`

var React = require('react-native');
var {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} = React;

var GiftedListView = require('react-native-gifted-listview');

var RefreshListView = React.createClass({
    render: function(){
        return (
            <GiftedListView
                onFetch={this.props.onFetch}
                rowView={this.props.rowView}
                paginationAllLoadedView={this._renderPaginationAllLoadedView}
                paginationWaitingView={this._renderPaginationWaitingView}
                firstLoader={false}
                pagination={true}
                refreshable={true}
                customStyles={{
                    refreshableView: {
                        backgroundColor: 'white',
                    }
                }}
                style={styles.view} />
        );
    },
    _renderPaginationWaitingView(paginateCallback) {
        return (
            <TouchableHighlight
                style={styles.paginationView}
                underlayColor='#c8c7cc'
                onPress={paginateCallback}>
                <Text style={styles.paginationText}>
                    Load more
                </Text>
            </TouchableHighlight>
        );
    },
    _renderPaginationAllLoadedView() {
        return (
            <View style={styles.paginationView}>
                <Text style={styles.paginationText}>
                    ~
                </Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    view: {
        marginBottom: 48
    },
    paginationView: {
        alignItems: 'center'
    },
    paginationText: {
        fontSize: 16,
        color: 'rgb(152,192,255)',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
});

module.exports = RefreshListView;
