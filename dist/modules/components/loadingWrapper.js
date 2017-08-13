'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fetchFail = require('./fetchFail');

var _fetchFail2 = _interopRequireDefault(_fetchFail);

var _salocreativeReactUi = require('@salocreative/react-ui');

var LoadingWrapper = (function (_Component) {
  _inherits(LoadingWrapper, _Component);

  function LoadingWrapper() {
    _classCallCheck(this, LoadingWrapper);

    _Component.apply(this, arguments);
  }

  LoadingWrapper.prototype.render = function render() {
    if (this.props.display && !this.props.loading) {
      return _react2['default'].createElement(
        _salocreativeReactUi.Row,
        null,
        this.props.children
      );
    }
    if (this.props.loading) {
      return _react2['default'].createElement(
        _salocreativeReactUi.Row,
        null,
        _react2['default'].createElement(_salocreativeReactUi.Loader, { display: this.props.loading })
      );
    }
    if (this.props.error) {
      return _react2['default'].createElement(
        _salocreativeReactUi.Row,
        null,
        _react2['default'].createElement(_fetchFail2['default'], { display: this.props.error, message: this.props.errorMessage, retryAction: this.props.retryAction })
      );
    }
    return null;
  };

  return LoadingWrapper;
})(_react.Component);

exports['default'] = LoadingWrapper;

LoadingWrapper.defaultProps = {
  display: false,
  loading: false,
  error: false,
  errorMessage: '',
  classes: '',
  children: _react2['default'].createElement(
    _salocreativeReactUi.Row,
    null,
    'Why no content?'
  )
};

LoadingWrapper.propTypes = {
  display: _propTypes2['default'].bool,
  loading: _propTypes2['default'].bool,
  error: _propTypes2['default'].bool,
  errorMessage: _propTypes2['default'].string,
  classes: _propTypes2['default'].string,
  retryAction: _propTypes2['default'].func
};
module.exports = exports['default'];