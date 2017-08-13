'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _salocreativeReactUi = require('@salocreative/react-ui');

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var FetchFail = (function (_Component) {
  _inherits(FetchFail, _Component);

  function FetchFail() {
    _classCallCheck(this, FetchFail);

    _Component.apply(this, arguments);
  }

  FetchFail.prototype.render = function render() {
    if (this.props.display) {
      return _react2['default'].createElement(
        'div',
        { className: 'error-message__container' },
        _react2['default'].createElement(
          'h2',
          { className: 'error-message__text' },
          this.props.message
        ),
        _react2['default'].createElement(
          'p',
          { className: 'error-message__support' },
          'Press the button below to retry'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'error-navigation--links' },
          _react2['default'].createElement(
            'a',
            { className: 'navigation-overlay__link navigation-overlay__link--inverse', title: 'name', onClick: this.props.retryAction },
            _react2['default'].createElement(
              'span',
              { className: 'navigation-overlay__icon' },
              _react2['default'].createElement(_reactFontawesome2['default'], { name: 'refresh', size: '3x' })
            ),
            _react2['default'].createElement(
              'span',
              { className: 'navigation-overlay__link-text' },
              'Retry'
            )
          )
        )
      );
    }
    return null;
  };

  return FetchFail;
})(_react.Component);

exports['default'] = FetchFail;

FetchFail.propTypes = {
  message: _propTypes2['default'].string,
  retryAction: _propTypes2['default'].func
};

FetchFail.defaultProps = {
  message: 'Whoops! Something went wrong',
  display: false
};
module.exports = exports['default'];