"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  var text = _ref.text;
  return _react.default.createElement("button", null, text);
}