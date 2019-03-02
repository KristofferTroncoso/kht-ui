"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = Navbar;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: tomato;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Yo = _styledComponents.default.h1(_templateObject());

function Navbar() {
  return _react.default.createElement("nav", null, _react.default.createElement(Yo, null, "This the navbar"));
}