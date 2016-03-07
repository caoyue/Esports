`use strict`

var React = require('react-native');
var {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    Platform
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
                refreshableWaitingView={this._renderRefreshableWaitingView}
                refreshableWillRefreshView={this._renderRefreshableWillRefreshView}
                firstLoader={false}
                pagination={true}
                refreshable={true}
                refreshableDistance={20}
                style={styles.view} />
        );
    },
    _renderRefreshableWaitingView(refreshCallback) {
      if (Platform.OS !== 'android') {
        return (
          <View style={styles.refreshView}>
            <Text style={styles.refreshLabel}>
              ↓
            </Text>
          </View>
        );
      } else {
        return (
          <TouchableHighlight
            underlayColor='transparent'
            onPress={refreshCallback}
            style={styles.refreshView}>
            <Text style={styles.refreshLabel}>
              ↻
            </Text>
          </TouchableHighlight>
        );
      }
    },
    _renderRefreshableWillRefreshView() {
        return (
            <View style={styles.refreshView}>
              <Text style={styles.refreshLabel}>
                ↻
              </Text>
            </View>
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
                <Text style={[styles.paginationText,
                    {color: 'rgb(130,130,130)'}]}>
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
    refreshView: {
        backgroundColor: 'rgb(10,20,29)',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    refreshLabel: {
        fontSize: 20,
        color: 'rgb(110,212,255)',
        backgroundColor: 'rgb(10,20,29)',
    },
    paginationView: {
        alignItems: 'center'
    },
    paginationText: {
        fontSize: 16,
        color: 'rgb(110,212,255)',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
});

module.exports = RefreshListView;
