var Minilog = require('minilog');
require('engine.io-client');
window.navigator.userAgent = "react-native";

var RadarClient = require('radar_client');

Minilog.enable();

window.RadarClient = RadarClient;
