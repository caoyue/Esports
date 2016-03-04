`use strict`

var React = require('react-native');
var {
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
    Dimensions
} = React;

var ScrollTabBar = React.createClass({
    getInitialState: function(){
        var width = Dimensions.get('window').width;
        var tabWidth =
        (width - 10*2 - this.props.tabs.length*2)/(this.props.tabs.length);
        return {
            tabWidth: tabWidth
        }
    },
    onPress: function(page){
        this.props.goToPage(page);
    },
    getRadius: function(i){
        if (i === 0) {
            return {
                borderTopLeftRadius: 3,
                borderBottomLeftRadius: 3
            }
        } else if(i === this.props.tabs.length - 1){
            return {
                borderTopRightRadius: 3,
                borderBottomRightRadius: 3
            }
        }
        return {
            borderRadius: 0
        }
    },
    render: function(){
        return (
            <View style={styles.view}>
                <View style={styles.container}>
                    {this.props.tabs.map((val, i) => this.renderTab(val, i))}
                </View>

            </View>
        );
    },
    renderTab: function(title, i){
        if (i === this.props.activeTab) {
            return (
                <TouchableHighlight
                    key={title}
                    style={[styles.tab, this.getRadius(i)]}
                    underlayColor='transparent'
                    onPress={() => this.onPress(i)}>
                    <Image
                        style={[styles.bg, {width: this.state.tabWidth}]}
                        source={require('../../ImageAssets/bg.png')}>
                        <Text style={[styles.text, {
                                fontWeight: 'bold',
                                color: 'white',
                            }]}>
                            {title}
                        </Text>
                    </Image>
                </TouchableHighlight>
            );
        }
        return (
            <TouchableHighlight
                key={title}
                style={[styles.tab, this.getRadius(i)]}
                underlayColor='transparent'
                onPress={() => this.onPress(i)}>
                <Text
                    style={[styles.text]}>
                    {title}
                </Text>
            </TouchableHighlight>
        );
    }
});

var styles = StyleSheet.create({
    view: {
        padding: 10,
        backgroundColor: 'rgb(10,20,29)',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 36,
    },
    tab: {
        flex: 1,
        height: 36,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgb(110,212,255)',
    },
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        color: 'rgb(110,212,255)'
    }
});

module.exports = ScrollTabBar;
