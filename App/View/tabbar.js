`use strict`

var React = require('react-native');
var {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} = React;

var ScrollTabBar = React.createClass({
    getInitialState: function(){
        return {
            page: 0
        }
    },
    onPress: function(page){
        this.setState({
            page: page
        });
        this.props.goToPage(page);
    },
    getTabStyle: function(page){
        if (page === this.state.page) {
            return {
                borderBottomWidth: 3,
                borderColor: 'rgb(52,136,245)'
            }
        } else{
            return {
                borderBottomWidth: 1,
                borderColor: 'rgb(200,200,200)'
            }
        }
    },
    getTextStyle: function(page){
        if (page === this.state.page) {
            return {
                color: 'rgb(52,136,245)'
            };
        } else{
            return {
                color: 'rgb(28,28,28)'
            };
        }
    },
    render: function(){
        return (
            <View style={styles.container}>
                {this.props.tabs.map((val, i) => this.renderTab(val, i))}
            </View>
        );
    },
    renderTab: function(title, i){
        return (
            <TouchableHighlight
                key={title}
                style={[styles.tab, this.getTabStyle(i)]}
                underlayColor='transparent'
                onPress={() => this.onPress(i)}>
                <Text
                    style={[styles.text, this.getTextStyle(i)]}>
                    {title}
                </Text>
            </TouchableHighlight>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 36
    },
    tab: {
        flex: 1,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 18
    }
});

module.exports = ScrollTabBar;
