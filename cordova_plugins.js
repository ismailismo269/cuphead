cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cocoon-plugin-common.Cocoon",
        "file": "plugins/cocoon-plugin-common/www/cocoon.js",
        "pluginId": "cocoon-plugin-common",
        "runs": true
    },
    {
        "id": "cocoon-plugin-canvasplus-common.CanvasPlus",
        "file": "plugins/cocoon-plugin-canvasplus-common/www/cocoon_canvasplus.js",
        "pluginId": "cocoon-plugin-canvasplus-common",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cocoon-plugin-common": "1.0.2",
    "cocoon-plugin-canvasplus-common": "1.2.0",
    "com.ludei.canvasplus.android": "2.6.1",
    "com.ludei.canvasplus.ios": "2.6.1",
    "com.ludei.defaultres.android": "1.0.1",
    "com.ludei.installlocation.android": "1.0.0",
    "com.ludei.splash.android": "1.1.0",
    "com.ludei.usericon.android": "1.0.1",
    "com.ludei.usersplash.android": "1.0.2",
    "cordova-plugin-whitelist": "1.3.3",
    "cocoon-plugin-android-architecture": "1.1.0"
};
// BOTTOM OF METADATA
});