"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = Navbar;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: sans-serif;\n  background: tomato;\n  color: white;\n  padding: 0 10px;\n  height: 60px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDiv = _styledComponents.default.div(_templateObject());

function Navbar(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? "Default Navbar" : _ref$children;
  return _react.default.createElement(StyledDiv, null, children);
}