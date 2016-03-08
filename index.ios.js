'use strict';
//
// var React = require('react-native');
// var {
//     AppRegistry,
// } = React;
//
// var LangView = require("./App/View/lang");
//
// var EsportsView = React.createClass({
//     render: function(){
//         return (
//             <LangView></LangView>
//         )
//     }
// });
//
// AppRegistry.registerComponent('Esports', () => EsportsView);
// module.export = EsportsView;


import React, { AppRegistry } from 'react-native';
import App from './App/containers/app';

AppRegistry.registerComponent('Esports', () => App);
