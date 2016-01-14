`use strict`

var React = require('react-native');
var {
    Navigator
} = React;

var MatchRoute = React.createClass({
    render: function(){
        return (
            <Navigator
                initialRoute={{name: 'MatchView', index: 0}}
                configureScene={(route) =>
                    Navigator.SceneConfigs.FloatFromRight
                }
                renderScene={(route, navigator) => {
                    switch(route.name) {
                        case 'SettingView':
                            var SettingView = require('../Setting/perfs');
                            return <SettingView
                                route={route}
                                navigator={navigator} />;
                        case 'LangSwitchView':
                            var LangSwitchView = require('../Setting/lang');
                            return <LangSwitchView
                                rout={route}
                                navigator={navigator} />;
                        case 'AboutUsView':
                            var AboutUsView = require('../Setting/aboutUs');
                            return <AboutUsView
                                route={route}
                                navigator={navigator} />
                        default:
                            var MatchView = require('./index');
                            return <MatchView
                                route={route}
                                navigator={navigator} />;
                    }}
            } />
        );
    }
});

module.exports = MatchRoute;
