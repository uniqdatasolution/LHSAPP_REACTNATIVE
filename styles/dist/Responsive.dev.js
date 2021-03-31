"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hightToDp = exports.widthToDp = void 0;

var _reactNative = require("react-native");

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    width = _Dimensions$get.width,
    height = _Dimensions$get.height;

var widthToDp = function widthToDp(number) {
  var givenWidth = typeof number === 'number' ? number : parseFloat(number);
  return _reactNative.PixelRatio.roundToNearestPixel(width * givenWidth / 100);
};

exports.widthToDp = widthToDp;

var hightToDp = function hightToDp(number) {
  var givenHeight = typeof number === 'number' ? number : parseFloat(number);
  return _reactNative.PixelRatio.roundToNearestPixel(height * givenHeight / 100);
};

exports.hightToDp = hightToDp;