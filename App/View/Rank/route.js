`use strict`

var React = require('react-native');
var {
    Navigator
} = React;

var RankRoute = React.createClass({
    render: function(){
        return (
            <Navigator
                initialRoute={{name: 'NewsView', index: 0, news: null}}
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
                            var RankView = require('./index');
                            return <RankView
                                route={route}
                                navigator={navigator} />;
                    }}
                }
                sceneStyle={{
                    flex: 1,
                    backgroundColor: 'white'
                }} />
        );
    }
});

module.exports = RankRoute;
