'use strict'

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Animated,
    PanResponder,
    Dimensions
} = React;

var deviceWidth = Dimensions.get('window').width;

var TabSlideView = React.createClass({
    getInitialState: function() {
        return {
            pan: new Animated.ValueXY(),
            index: 3
        };
    },
    componentWillMount: function() {
        this._animatedValueX = 0;
        this.state.pan.x.addListener(
            (value) => this._animatedValueX = value.value
        );
        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderGrant: (e, gestureState) => {
                this.state.pan.setOffset({
                    x: this._animatedValueX
                });
                this.state.pan.setValue({x: 0});
            },
            onPanResponderMove: Animated.event([
                null, {dx: this.state.pan.x},
            ]),
            onPanResponderRelease: (e, gestureState) => {
                var distance = 0;
                var relativeGestureDistance = gestureState.dx / deviceWidth;
                var vx = gestureState.vx;
                if (relativeGestureDistance < -0.5
                    || (relativeGestureDistance < 0 && vx <= -0.5)) {
                        if (this.state.index >= 1 && this.state.index < 5) {
                            this.state.index += 1;
                            distance = -200;
                        }
                } else if (relativeGestureDistance > 0.5
                    || (relativeGestureDistance > 0 && vx >= 0.5)) {
                    if (this.state.index > 1 && this.state.index <= 5) {
                        this.state.index -= 1;
                        distance = 200;
                    }
                }
                Animated.spring(this.state.pan, {
                    toValue: distance
                }).start();
            }
        });
    },
    componentWillUnmount: function() {
        this.state.pan.x.removeAllListener();
    },
    getStyle: function() {
        return [
            styles.slider,
            {
                transform: [
                    {
                        translateX: this.state.pan.x
                    }
                ]
            },
        ];
    },
    getTextColor: function(flag) {
        return {
            color: flag ? 'white' : 'gray'
        };
    },
    render: function() {
        return (
            <View style={styles.container}>
                <Animated.View
                    style={this.getStyle()}
                    {...this._panResponder.panHandlers}>
                    {this.props.groups.map(this.createGroup)}
                </Animated.View>
            </View>
        )
    },
    createGroup: function(item, i) {
        return (
            <Text style={[styles.text,this.getTextColor(i + 1 == this.state.index)]}>
            {item}
            </Text>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#333"
    },
    slider: {
        backgroundColor: '#333',
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 15,
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '200',
        width: 200,
        textAlign: 'center'
    }
});

module.exports = TabSlideView;
