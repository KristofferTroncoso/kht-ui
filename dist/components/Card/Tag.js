"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  box-sizing: border-box;\n  opacity: 0.85;\n  margin-bottom: 5px;\n  filter: saturate(90%);\n  display: inline-block;\n  background: ", ";\n  color: white;\n  margin-right: 5px;\n  padding: 2px 3px;\n  border-radius: 3px;\n  border: none;\n  outline: none;\n\n  :hover {\n    cursor: pointer;\n    opacity: 1;\n    filter: none;\n    box-shadow: 1px 1px 1px #595959;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var tagPropTypes = {
  tag: _propTypes.default.string.isRequired,
  changeFilterTag: _propTypes.default.func.isRequired
};

var StyledButton = _styledComponents.default.button(_templateObject(), function (props) {
  return props.tagColor;
});

function Tag(_ref) {
  var tag = _ref.tag,
      changeFilterTag = _ref.changeFilterTag;
  var tagColors = {
    react: '#5d7eaa',
    redux: '#a664db',
    nodejs: '#219641',
    mongodb: '#2fbc8b',
    express: '#93e82c',
    api: '#c9c910',
    css: '#7fc1e2',
    flexbox: '#3da6e2',
    grid: '#3dc2e2',
    responsive: '#e2b931',
    ejs: '#9e7eba',
    rhea: '#fff',
    rest: '#a2bcd6',
    sass: '#cc6699',
    vanilla: '#ddcdbe',
    json: '#c0c444',
    PWA: '#fccb7b'
  };
  var tagColor = tagColors[tag] || '#c4c4c4';

  function handleTagClick(e) {
    changeFilterTag(tag);
  }

  return _react.default.createElement(StyledButton, {
    className: "Tag",
    onClick: handleTagClick,
    value: tag,
    tagColor: tagColor
  }, tag);
}

Tag.propTypes = tagPropTypes;
var _default = Tag;
exports.default = _default;