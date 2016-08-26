'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../../demo/index');

var _index2 = _interopRequireDefault(_index);

var _ErrorInputDemo = require('./ErrorInputDemo');

var _ErrorInputDemo2 = _interopRequireDefault(_ErrorInputDemo);

var _DisabledInputDemo = require('./DisabledInputDemo');

var _DisabledInputDemo2 = _interopRequireDefault(_DisabledInputDemo);

var _RegularInputDemo = require('./RegularInputDemo');

var _RegularInputDemo2 = _interopRequireDefault(_RegularInputDemo);

var _pureRenderDecorator = require('pure-render-decorator');

var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputDemo = (0, _pureRenderDecorator2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(InputDemo, _Component);

  function InputDemo() {
    _classCallCheck(this, InputDemo);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputDemo).apply(this, arguments));
  }

  _createClass(InputDemo, [{
    key: 'render',
    value: function render() {
      var demos = [{ title: 'Regular Input', component: _RegularInputDemo2.default }, { title: 'Disabled Input', component: _DisabledInputDemo2.default }, { title: 'Error Input', component: _ErrorInputDemo2.default }];

      return _react2.default.createElement(_index2.default, { demoViews: demos });
    }
  }]);

  return InputDemo;
}(_react.Component), _class2.displayName = 'InputDemo', _temp)) || _class;

exports.default = InputDemo;