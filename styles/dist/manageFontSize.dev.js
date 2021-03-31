"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNativeResponsiveFontsize = require("react-native-responsive-fontsize");

var _reactNative = require("react-native");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    width = _Dimensions$get.width,
    height = _Dimensions$get.height;

var ManageFont =
/*#__PURE__*/
function () {
  function ManageFont() {
    _classCallCheck(this, ManageFont);
  }

  _createClass(ManageFont, null, [{
    key: "getSize",
    value: function getSize(size) {
      return (0, _reactNativeResponsiveFontsize.RFValue)(size, 600);
    }
  }]);

  return ManageFont;
}();

exports["default"] = ManageFont;

var widthToDp = function widthToDp(number) {
  var givenNumber = typeof number === 'number' ? number : parseFloat(number);
  return _reactNative.PixelRatio.roundToNearestPixel(width * givenNumber / 100);
}; // const getFontSize = (size) => {
//     return (
//      RFValue(size)
//     );
// }
//
// export default getFontSize;