'use strict';

var React = require('react-native');
var {
    StyleSheet,
    ScrollView,
    View,
    ActivityIndicatorIOS
} = React;

var LoadingView = React.createClass({
    render: function() {
        return (
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.loading}>
                <View>
                    <ActivityIndicatorIOS
                        color="#356DD0"
                        />
                </View>
            </ScrollView>
        );
    }}
);

var styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
    }
});

module.exports = LoadingView;
