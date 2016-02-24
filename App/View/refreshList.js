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
                contentInset={{bottom: 48}}
                automaticallyAdjustContentInsets={false}
                onFetch={this.props.onFetch}
                rowView={this.props.rowView}
                paginationAllLoadedView={this._renderPaginationAllLoadedView}
                paginationWaitingView={this._renderPaginationWaitingView}
                firstLoader={false}
                pagination={true}
                refreshable={true}
                refreshableDistance={10}
                customStyles={{
                    refreshableView: {
                        backgroundColor: 'white',
                    }
                }} />
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
