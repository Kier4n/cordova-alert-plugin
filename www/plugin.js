function Plugin() {}
Plugin.alert = function(content) {
    var onSuccess = function() {};
    var onFail = function() {};
    cordova.exec(onSuccess, onFail, 'PlayerPlugin', 'play', [content]);
};
module.exports = Plugin;