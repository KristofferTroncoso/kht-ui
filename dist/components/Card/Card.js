"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = Card;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  .Tag {\n    margin-right: 5px;\n  }\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n  }\n\n  font-family: sans-serif;\n\n  a {\n    text-decoration: none;\n  }\n\n\tmin-width: 300px;\n\twidth: 350px;\n\theight: 300px;\n\tmargin: 10px;\n\tbackground: white;\n\tbox-shadow: 1px 1px 4px #3a3a3a;\n\n\t@media (max-width: 992px) {\n\t\t.Card {\n\t\t\twidth: 500px;\n\t\t\tmargin: 5px;\n\t\t}\n\t}\n\n\t.Card__top {\n\t\theight: 70%;\n\t\tpadding: 8px 8px 0 8px;\n\t\t/* dynamic background styling in component's jsx */\n\t}\n\n\t.Card__screenshot {\n\t\theight: 100%;\n\t\tbox-shadow: inset 0px 0px 4px #424242;\n\t}\n\n\t.Card__description {\n\t\tpadding: 10px;\n\t\theight: 100%;\n\t\tcolor: white;\n\t\tbackground: rgba(0, 0, 0, 0.7);\n\t\topacity: 0;\n\t\tfont-size: 120%;\n\t}\n\n\t.Card__description:hover {\n\t\topacity: 1;\n\t\ttransition: opacity 0.1s linear 0.1s;\n\t}\n\n\t.Card__bottom {\n\t\tpadding: 5px 8px 8px 8px;\n\t\theight: 30%;\n\t\toverflow: hidden;\n\t}\n\n\t.Card__bottom a {\n\t\topacity: 0.8;\n\t}\n\n\t.Card__bottom a:hover {\n\t\topacity: 1;\n\t}\n\n\t.Card__title {\n\t\tmargin: 4px 0 4px 0;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
  title: _propTypes.default.string,
  sourceCodeUrl: _propTypes.default.string,
  liveDemoUrl: _propTypes.default.string,
  screenshot: _propTypes.default.string,
  description: _propTypes.default.string,
  tags: _propTypes.default.array,
  changeFilterTag: _propTypes.default.func
};
var defaultProps = {
  title: 'Default Title',
  sourceCodeUrl: 'https://www.google.com',
  liveDemoUrl: 'https://www.google.com',
  screenshot: 'https://s3.amazonaws.com/ktpublic-pics/reactTodoAppScreenshot.JPG',
  description: 'Hello this is the default description',
  tags: ['no', 'tags', 'available'],
  changeFilterTag: function changeFilterTag() {
    return console.log('hello');
  }
};

var StyledCard = _styledComponents.default.div(_templateObject());

function Card(_ref) {
  var title = _ref.title,
      url = _ref.url,
      sourceCodeUrl = _ref.sourceCodeUrl,
      liveDemoUrl = _ref.liveDemoUrl,
      screenshot = _ref.screenshot,
      description = _ref.description,
      tags = _ref.tags,
      changeFilterTag = _ref.changeFilterTag;
  return _react.default.createElement(StyledCard, {
    className: "Card"
  }, _react.default.createElement("div", {
    className: "Card__top"
  }, _react.default.createElement("div", {
    className: "Card__screenshot",
    style: {
      background: "url(".concat(screenshot, ")"),
      backgroundSize: 'cover',
      backgroundPosition: 'top'
    }
  }, _react.default.createElement("a", {
    href: sourceCodeUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, _react.default.createElement("p", {
    className: "Card__description"
  }, description)))), _react.default.createElement("div", {
    className: "Card__bottom"
  }, _react.default.createElement("h2", {
    className: "Card__title"
  }, title), _react.default.createElement("div", {
    className: "Tags__list"
  }, tags.map(function (tag, index) {
    return _react.default.createElement(_Tag.default, {
      key: index,
      tag: tag,
      changeFilterTag: changeFilterTag
    });
  })), _react.default.createElement("div", {
    style: {
      textAlign: 'right',
      margin: '0',
      color: '#4c4c4c'
    }
  }, _react.default.createElement("a", {
    href: sourceCodeUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: '#4c4c4c',
      fontSize: '90%',
      margin: '0 2px'
    }
  }, "Source"), "|", _react.default.createElement("a", {
    href: liveDemoUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: '#4c4c4c',
      fontSize: '90%',
      margin: '0 2px'
    }
  }, "Live Demo"))));
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
var _default = Card;
exports.default = _default;