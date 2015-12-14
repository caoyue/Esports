'use strict';

var DOMAIN = "http://localhost:3000/";

var api = function(api) {
    return DOMAIN + api;
};

var getNews = function() {
    var NEWS_API = "news";
    return api(NEWS_API);
}


module.exports = {
    News : getNews
};
