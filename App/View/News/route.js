`use strict`

var React = require('react-native');
var {
    Navigator
} = React;

var NewsRoute = React.createClass({
    render: function(){
        return (
            <Navigator
                initialRoute={{name: 'NewsView', index: 0, news: null}}
                configureScene={(route) =>
                    //Navigator.SceneConfigs.HorizontalSwipeJump
                    Navigator.SceneConfigs.FloatFromRight
                }
                renderScene={(route, navigator) => {
                    switch(route.name) {
                        case 'NewsDetailView':
                            var NewsDetailView = require('./newsDetail');
                            return <NewsDetailView
                                route={route}
                                navigator={navigator} />;
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
                            var NewsView = require('./index');
                            return <NewsView
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

module.exports = NewsRoute;
