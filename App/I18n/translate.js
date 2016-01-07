`use strict`

var React = require('react-native');
var {
    AsyncStorage
} = React;

var I18n = require('react-native-i18n');
I18n.fallbacks = true;
I18n.translations = require('./translations.json');

var Trans = {
    getLang: async function () {
        try{
            var val = await AsyncStorage.getItem('LANGUAGE');
            return val !== null ? val : 'en-US'
        } catch(error){
            console.log(error.message);
            return 'en-US'
        }
    },
    getLocale: function(){
        return I18n.locale;
    },
    setLocale: function(){
        this.getLang().then(
            (val) => {I18n.locale=val;}
        ).done();
    },
    t: function(code){
        return I18n.t(code);
    }
};

Trans.setLocale();
module.exports = Trans;
