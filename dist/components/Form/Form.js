"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = Form;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  margin: 5px;\n  border-radius: 5px;\n  background: #f1f1f1;\n  color: #2d2d2d;\n  font-size: 20px;\n  outline: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledForm = _styledComponents.default.input(_templateObject());

function Form(_ref) {
  var rest = _extends({}, _ref);

  return _react.default.createElement(StyledForm, _extends({
    type: "text"
  }, rest));
}