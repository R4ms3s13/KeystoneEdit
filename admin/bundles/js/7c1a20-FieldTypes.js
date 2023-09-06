require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  danger: _theme.default.alert.color.danger,
  error: _theme.default.alert.color.danger,
  info: _theme.default.alert.color.info,
  success: _theme.default.alert.color.success,
  warning: _theme.default.alert.color.warning
};

},{"../../../theme":78}],2:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// clone children if a class exists for the tagname
const cloneWithClassnames = c => {
  const type = c.type && c.type.displayName ? c.type.displayName : c.type || null;
  if (!type || !_styles.default[type]) return c;
  return /*#__PURE__*/(0, _react.cloneElement)(c, {
    className: (0, _glamor.css)(_styles.default[type])
  });
};

function Alert(_ref) {
  let {
    children,
    className,
    color,
    component: Component,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(_styles.default.alert, _styles.default[color], className);
  props.children = _react.Children.map(children, cloneWithClassnames);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, {
    "data-alert-type": color
  }));
}

;
Alert.propTypes = {
  color: _react.PropTypes.oneOf(Object.keys(_colors.default)).isRequired,
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string])
};
Alert.defaultProps = {
  component: 'div'
};
module.exports = Alert;

},{"./colors":1,"./styles":3,"glamor":undefined,"react":undefined}],3:[function(require,module,exports){
"use strict";

var _colors = _interopRequireDefault(require("./colors"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Alert
// ==============================

/* eslint quote-props: ["error", "as-needed"] */
// Prepare variants
const colorVariants = {};
Object.keys(_colors.default).forEach(color => {
  colorVariants[color] = {
    backgroundColor: _colors.default[color].background,
    borderColor: _colors.default[color].border,
    color: _colors.default[color].text
  };
}); // Prepare headings

const headingTagnames = {};
['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
  headingTagnames[tag] = {
    color: 'inherit'
  };
});
const linkStyles = {
  color: 'inherit',
  textDecoration: 'underline',
  ':hover': {
    color: 'inherit'
  },
  ':focus': {
    color: 'inherit'
  }
};
module.exports = {
  alert: {
    borderColor: 'transparent',
    borderRadius: _theme.default.alert.borderRadius,
    borderStyle: 'solid',
    borderWidth: _theme.default.alert.borderWidth,
    margin: _theme.default.alert.margin,
    padding: _theme.default.alert.padding
  },
  // tagnames
  a: linkStyles,
  Link: linkStyles,
  strong: {
    fontWeight: 500
  },
  // headings
  ...headingTagnames,
  // colors
  ...colorVariants
};

},{"../../../theme":78,"./colors":1}],4:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function BlankState(_ref) {
  let {
    className,
    children,
    heading,
    component: Component,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(classes.container, className);
  return /*#__PURE__*/_react.default.createElement(Component, props, !!heading && /*#__PURE__*/_react.default.createElement("h2", {
    "data-e2e-blank-state-heading": true,
    className: (0, _glamor.css)(classes.heading)
  }, heading), children);
}

;
BlankState.propTypes = {
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
  heading: _react.PropTypes.string
};
BlankState.defaultProps = {
  component: 'div'
};
/* eslint quote-props: ["error", "as-needed"] */

const classes = {
  container: {
    backgroundColor: _theme.default.blankstate.background,
    borderRadius: _theme.default.blankstate.borderRadius,
    color: _theme.default.blankstate.color,
    paddingBottom: _theme.default.blankstate.paddingVertical,
    paddingLeft: _theme.default.blankstate.paddingHorizontal,
    paddingRight: _theme.default.blankstate.paddingHorizontal,
    paddingTop: _theme.default.blankstate.paddingVertical,
    textAlign: 'center'
  },
  heading: {
    color: 'inherit',
    ':last-child': {
      marginBottom: 0
    }
  }
};
module.exports = BlankState;

},{"../../../theme":78,"glamor":undefined,"react":undefined}],5:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const commonClasses = _styles.default.common;
const stylesheetCache = {};

function getStyleSheet(variant, color) {
  const cacheKey = `${variant}-${color}`;

  if (!stylesheetCache[cacheKey]) {
    const variantStyles = _styles.default[variant](color);

    stylesheetCache[cacheKey] = variantStyles;
  }

  return stylesheetCache[cacheKey];
}

const BUTTON_SIZES = ['large', 'medium', 'small', 'xsmall'];
const BUTTON_VARIANTS = ['fill', 'hollow', 'link'];
const BUTTON_COLORS = ['default', 'primary', 'success', 'warning', 'danger', 'cancel', 'delete']; // NOTE must NOT be functional component to allow `refs`

class Button extends _react.Component {
  render() {
    var {
      active,
      cssStyles,
      block,
      className,
      color,
      component: Tag,
      disabled,
      size,
      variant,
      ...props
    } = this.props; // get the styles

    const variantClasses = getStyleSheet(variant, color);
    props.className = (0, _glamor.css)(commonClasses.base, commonClasses[size], variantClasses.base, block ? commonClasses.block : null, disabled ? commonClasses.disabled : null, active ? variantClasses.active : null, ...cssStyles);

    if (className) {
      props.className += ' ' + className;
    } // return an anchor or button


    if (!Tag) {
      Tag = props.href ? 'a' : 'button';
    } // Ensure buttons don't submit by default


    if (Tag === 'button' && !props.type) {
      props.type = 'button';
    }

    return /*#__PURE__*/_react.default.createElement(Tag, props);
  }

}

;
Button.propTypes = {
  active: _react.PropTypes.bool,
  block: _react.PropTypes.bool,
  color: _react.PropTypes.oneOf(BUTTON_COLORS),
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  cssStyles: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    _definition: _react.PropTypes.object,
    _name: _react.PropTypes.string
  })),
  disabled: _react.PropTypes.bool,
  href: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(BUTTON_SIZES),
  variant: _react.PropTypes.oneOf(BUTTON_VARIANTS)
};
Button.defaultProps = {
  cssStyles: [],
  color: 'default',
  variant: 'fill'
};
module.exports = Button;

},{"./styles":6,"glamor":undefined,"react":undefined}],6:[function(require,module,exports){
"use strict";

var _css = require("../../../utils/css");

var _color = require("../../../utils/color");

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Common Styles
// ----------------
exports.common = {
  // Base Button
  // ----------------
  base: {
    'appearance': 'none',
    'background': 'none',
    'borderWidth': _theme.default.button.borderWidth,
    'borderStyle': 'solid',
    'borderColor': 'transparent',
    'borderRadius': _theme.default.button.borderRadius,
    'cursor': 'pointer',
    'display': 'inline-block',
    'fontWeight': _theme.default.button.font.weight,
    'height': _theme.default.component.height,
    'lineHeight': _theme.default.component.lineHeight,
    'marginBottom': 0,
    'padding': `0 ${_theme.default.button.paddingHorizontal}`,
    'outline': 0,
    'textAlign': 'center',
    'touchAction': 'manipulation',
    'userSelect': 'none',
    'verticalAlign': 'middle',
    'whiteSpace': 'nowrap',
    ':hover': {
      color: _theme.default.button.default.textColor,
      textDecoration: 'none'
    },
    ':focus': {
      color: _theme.default.button.default.textColor,
      textDecoration: 'none'
    }
  },
  // Block Display
  // ----------------
  block: {
    display: 'block',
    width: '100%'
  },
  // Disabled
  // ----------------
  disabled: {
    opacity: 0.4,
    pointerEvents: 'none'
  },
  // Sizes
  // ----------------
  large: {
    fontSize: _theme.default.font.size.large
  },
  default: {
    fontSize: _theme.default.font.size.default
  },
  small: {
    fontSize: _theme.default.font.size.small
  },
  xsmall: {
    fontSize: _theme.default.font.size.xsmall,
    lineHeight: '1.9',
    paddingLeft: '.66em',
    paddingRight: '.66em'
  }
}; // Fill Variant
// ----------------

function buttonFillVariant(textColor, bgColor) {
  const hoverStyles = { ...(0, _css.gradientVertical)((0, _color.lighten)(bgColor, 10), (0, _color.darken)(bgColor, 5)),
    borderColor: `${(0, _color.darken)(bgColor, 5)} ${(0, _color.darken)(bgColor, 10)} ${(0, _color.darken)(bgColor, 15)}`,
    boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
    color: textColor,
    outline: 'none'
  };
  const focusStyles = { ...(0, _css.gradientVertical)((0, _color.lighten)(bgColor, 10), (0, _color.darken)(bgColor, 5)),
    borderColor: `${(0, _color.darken)(bgColor, 5)} ${(0, _color.darken)(bgColor, 10)} ${(0, _color.darken)(bgColor, 15)}`,
    boxShadow: `0 0 0 3px ${(0, _color.fade)(bgColor, 25)}`,
    color: textColor,
    outline: 'none'
  };
  const activeStyles = {
    backgroundColor: (0, _color.darken)(bgColor, 10),
    backgroundImage: 'none',
    borderColor: `${(0, _color.darken)(bgColor, 25)} ${(0, _color.darken)(bgColor, 15)} ${(0, _color.darken)(bgColor, 10)}`,
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)'
  };
  return {
    base: { ...(0, _css.gradientVertical)((0, _color.lighten)(bgColor, 5), (0, _color.darken)(bgColor, 10), bgColor),
      'borderColor': `${(0, _color.darken)(bgColor, 10)} ${(0, _color.darken)(bgColor, 20)} ${(0, _color.darken)(bgColor, 25)}`,
      'boxShadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      'color': textColor,
      'fontWeight': 400,
      'textShadow': '0 -1px 0 rgba(0, 0, 0, 0.25)',
      ':hover': hoverStyles,
      ':focus': focusStyles,
      ':active': activeStyles
    },
    active: activeStyles
  };
} // TODO: This is pretty hacky, needs to be consolidated with the Variant() method
// above (needs more theme variables to be implemented though)


function buttonFillDefault() {
  const borderColor = _theme.default.input.border.color.default;
  const hoverStyles = { ...(0, _css.gradientVertical)('#fff', '#eee'),
    borderColor: `${(0, _color.darken)(borderColor, 5)} ${(0, _color.darken)(borderColor, 5)} ${(0, _color.darken)(borderColor, 10)}`,
    boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
    color: _theme.default.color.text
  };
  const focusStyles = {
    borderColor: _theme.default.color.primary,
    boxShadow: `0 0 0 3px ${(0, _color.fade)(_theme.default.color.primary, 10)}`,
    color: _theme.default.color.text,
    outline: 'none'
  };
  const activeStyles = {
    background: '#e6e6e6',
    borderColor: (0, _color.darken)(borderColor, 10),
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
    color: _theme.default.color.text
  };
  return {
    base: { ...(0, _css.gradientVertical)('#fafafa', '#eaeaea'),
      'borderColor': `${borderColor} ${(0, _color.darken)(borderColor, 6)} ${(0, _color.darken)(borderColor, 12)}`,
      'color': _theme.default.color.text,
      'textShadow': '0 1px 0 white',
      ':hover': hoverStyles,
      ':focus': focusStyles,
      ':active': activeStyles
    },
    // gross hack
    active: { ...activeStyles,
      ':hover': activeStyles,
      ':focus': { ...activeStyles,
        ...focusStyles,
        boxShadow: `0 0 0 3px ${(0, _color.fade)(_theme.default.color.primary, 10)}, inset 0 1px 2px rgba(0, 0, 0, 0.1)`
      },
      ':active': activeStyles
    }
  };
}

exports.fill = color => {
  switch (color) {
    case 'default':
      return buttonFillDefault();

    case 'cancel':
    case 'delete':
      return buttonFillVariant('white', _theme.default.button.danger.bgColor);

    default:
      return buttonFillVariant('white', _theme.default.button[color].bgColor);
  }
}; // Hollow Variant
// ----------------


function buttonHollowVariant(textColor, borderColor) {
  const focusAndHoverStyles = {
    backgroundImage: 'none',
    backgroundColor: (0, _color.fade)(borderColor, 15),
    borderColor: (0, _color.darken)(borderColor, 15),
    boxShadow: 'none',
    color: textColor,
    outline: 'none'
  };
  const focusOnlyStyles = {
    boxShadow: `0 0 0 3px ${(0, _color.fade)(borderColor, 10)}`
  };
  const activeStyles = {
    backgroundColor: (0, _color.fade)(borderColor, 35),
    borderColor: (0, _color.darken)(borderColor, 25),
    boxShadow: 'none'
  };
  return {
    base: {
      'background': 'none',
      'borderColor': borderColor,
      'color': textColor,
      ':hover': focusAndHoverStyles,
      ':focus ': _extends({}, focusAndHoverStyles, focusOnlyStyles),
      ':active': activeStyles
    },
    active: activeStyles
  };
}

;

exports.hollow = color => {
  // TODO: better handling of cancel and delete colors
  if (color === 'cancel' || color === 'delete') color = 'danger';
  return buttonHollowVariant(_theme.default.button[color].bgColor, _theme.default.button[color].borderColor);
}; // Link Variant
// ----------------


function buttonLinkVariant(textColor, hoverColor) {
  const hoverStyles = {
    color: hoverColor,
    textDecoration: 'underline'
  };
  return {
    base: {
      'background': 'none',
      'border': 0,
      'boxShadow': 'none',
      'color': textColor,
      'fontWeight': 'normal',
      'outline': 'none',
      ':hover': hoverStyles,
      ':focus': hoverStyles,
      ':active': hoverStyles
    },
    active: hoverStyles
  };
}

;

function buttonLinkDelete() {
  const styles = buttonLinkVariant(_theme.default.color.gray40, _theme.default.color.danger);
  const hoverStyles = { ...(0, _css.gradientVertical)((0, _color.lighten)(_theme.default.color.danger, 10), (0, _color.darken)(_theme.default.color.danger, 10)),
    backgroundColor: _theme.default.color.danger,
    borderColor: `${(0, _color.darken)(_theme.default.color.danger, 4)} ${(0, _color.darken)(_theme.default.color.danger, 8)} ${(0, _color.darken)(_theme.default.color.danger, 12)}`,
    boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
    color: 'white',
    textDecoration: 'none'
  };
  const activeStyles = {
    backgroundColor: (0, _color.darken)(_theme.default.color.danger, 4),
    backgroundImage: 'none',
    borderColor: `${(0, _color.darken)(_theme.default.color.danger, 12)} ${(0, _color.darken)(_theme.default.color.danger, 8)} ${(0, _color.darken)(_theme.default.color.danger, 8)}`,
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
    color: 'white'
  };
  return {
    base: { ...styles.base,
      ':hover': hoverStyles,
      ':focus': hoverStyles,
      ':active': activeStyles
    },
    active: activeStyles
  };
}

exports.link = color => {
  switch (color) {
    case 'default':
      return buttonLinkVariant(_theme.default.color.link, _theme.default.color.linkHover);

    case 'cancel':
      return buttonLinkVariant(_theme.default.color.gray40, _theme.default.color.danger);

    case 'delete':
      return buttonLinkDelete();

    default:
      return buttonLinkVariant(_theme.default.color[color], _theme.default.color[color]);
  }
};

},{"../../../theme":78,"../../../utils/color":80,"../../../utils/css":82}],7:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Center(_ref) {
  let {
    className,
    component: Component,
    height,
    style,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(_styles.default.center, className);
  props.style = {
    height,
    ...style
  };
  return /*#__PURE__*/_react.default.createElement(Component, props);
}

;
Center.propTypes = {
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  height: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
Center.defaultProps = {
  component: 'div',
  height: 'auto'
};
module.exports = Center;

},{"./styles":8,"glamor":undefined,"react":undefined}],8:[function(require,module,exports){
"use strict";

// ==============================
// Center
// ==============================
module.exports = {
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

},{}],9:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

var _color = require("../../../utils/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const baseColors = {};
['danger', 'info', 'primary', 'success', 'warning'].forEach(color => {
  baseColors[color] = {
    background: (0, _color.fade)(_theme.default.color[color], 10),
    backgroundActive: (0, _color.fade)(_theme.default.color[color], 20),
    backgroundHover: (0, _color.fade)(_theme.default.color[color], 15),
    text: _theme.default.color[color]
  };
});
const invertedColors = {};
['danger', 'info', 'primary', 'success', 'warning'].forEach(color => {
  invertedColors[color + '__inverted'] = {
    background: _theme.default.color[color],
    backgroundActive: (0, _color.lighten)(_theme.default.color[color], 5),
    backgroundHover: (0, _color.lighten)(_theme.default.color[color], 15),
    text: 'white'
  };
});
module.exports = {
  default: {
    background: _theme.default.color.gray10,
    backgroundActive: _theme.default.color.gray20,
    backgroundHover: _theme.default.color.gray15,
    text: _theme.default.color.gray60
  },
  ...baseColors,
  // inverted
  default__inverted: {
    background: _theme.default.color.gray60,
    backgroundActive: (0, _color.lighten)(_theme.default.color.gray60, 5),
    backgroundHover: (0, _color.lighten)(_theme.default.color.gray60, 15),
    text: 'white'
  },
  ...invertedColors
};

},{"../../../theme":78,"../../../utils/color":80}],10:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Chip(_ref) {
  let {
    className,
    children,
    color,
    inverted,
    label,
    onClear,
    onClick,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(_styles.default.chip, className);
  const labelClassName = (0, _glamor.css)(_styles.default.button, _styles.default.label, _styles.default['button__' + color + (inverted ? '__inverted' : '')]);
  const clearClassName = (0, _glamor.css)(_styles.default.button, _styles.default.clear, _styles.default['button__' + color + (inverted ? '__inverted' : '')]);
  return /*#__PURE__*/_react.default.createElement("div", props, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: onClick,
    className: labelClassName
  }, label, children), !!onClear && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: onClear,
    className: clearClassName
  }, "\xD7"));
}

;
Chip.propTypes = {
  color: _react.PropTypes.oneOf(Object.keys(_colors.default)).isRequired,
  inverted: _react.PropTypes.bool,
  label: _react.default.PropTypes.string.isRequired,
  onClear: _react.default.PropTypes.func,
  onClick: _react.default.PropTypes.func
};
Chip.defaultProps = {
  color: 'default'
};
module.exports = Chip;

},{"./colors":9,"./styles":11,"glamor":undefined,"react":undefined}],11:[function(require,module,exports){
"use strict";

var _colors = _interopRequireDefault(require("./colors"));

var _theme = _interopRequireDefault(require("../../../theme"));

var _css = require("../../../utils/css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Alert
// ==============================

/* eslint quote-props: ["error", "as-needed"] */
// Prepare variants
const colorVariants = {};
Object.keys(_colors.default).forEach(color => {
  const hoverStyles = {
    backgroundColor: _colors.default[color].backgroundHover
  };
  colorVariants['button__' + color] = {
    backgroundColor: _colors.default[color].background,
    color: _colors.default[color].text,
    ':hover': hoverStyles,
    ':focus': hoverStyles,
    ':active': {
      backgroundColor: _colors.default[color].backgroundActive
    }
  };
});
module.exports = {
  chip: {
    display: 'inline-block',
    fontSize: _theme.default.font.size.small,
    fontWeight: 500,
    marginRight: '0.5em',
    overflow: 'hidden',
    lineHeight: '2.2em'
  },
  // tagnames
  button: {
    appearance: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'block',
    float: 'left',
    padding: '0 .9em',
    outline: 'none',
    // make pills - exaggerate the padding toward the radii so it looks even
    ':first-child': { ...(0, _css.borderLeftRadius)('3em'),
      paddingLeft: '1.1em'
    },
    ':last-child': { ...(0, _css.borderRightRadius)('3em'),
      paddingRight: '1.1em'
    }
  },
  // provide separation between the label and clear buttons
  // floating stops the margins from collapsing into eaching
  label: {
    marginRight: 1
  },
  clear: {
    marginLeft: 1
  },
  // colors
  ...colorVariants
};

},{"../../../theme":78,"../../../utils/css":82,"./colors":9}],12:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _sizes = _interopRequireDefault(require("./sizes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Container(_ref) {
  let {
    className,
    clearFloatingChildren,
    component: Component,
    width,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(_styles.default.container, _styles.default[width], clearFloatingChildren ? _styles.default.clearfix : null, className);
  return /*#__PURE__*/_react.default.createElement(Component, props);
}

;
Container.propTypes = {
  clearFloatingChildren: _react.PropTypes.bool,
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
  width: _react.PropTypes.oneOf(Object.keys(_sizes.default)).isRequired
};
Container.defaultProps = {
  component: 'div',
  width: 'large'
};
module.exports = Container;

},{"./sizes":13,"./styles":14,"glamor":undefined,"react":undefined}],13:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  small: _theme.default.container.size.small,
  medium: _theme.default.container.size.medium,
  large: _theme.default.container.size.large
};

},{"../../../theme":78}],14:[function(require,module,exports){
"use strict";

var _sizes = _interopRequireDefault(require("./sizes"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Container
// ==============================

/* eslint quote-props: ["error", "as-needed"] */
// Prepare sizes
const sizeVariants = {};
Object.keys(_sizes.default).forEach(size => {
  sizeVariants[size] = {
    maxWidth: _sizes.default[size]
  };
});
/*
	Micro clearfix hack
	1.	The space content is one way to avoid an Opera bug when the
			contenteditable attribute is included anywhere else in the document.
			Otherwise it causes space to appear at the top and bottom of elements
			that are clearfixed.
	2.	The use of `table` rather than `block` is only necessary if using
			`:before` to contain the top-margins of child elements.
*/

const clearfixStyles = {
  clear: 'both',
  content: '" "',
  // 1
  display: 'table' // 2

};
module.exports = {
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: _theme.default.container.gutter,
    paddingRight: _theme.default.container.gutter
  },
  // clear floating children
  clearfix: {
    ':before': clearfixStyles,
    ':after': clearfixStyles
  },
  // sizes
  ...sizeVariants
};

},{"../../../theme":78,"./sizes":13}],15:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint quote-props: ["error", "as-needed"] */
function DropdownButton(_ref) {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Button.default, props, children, /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _glamor.css)(classes.arrow)
  }));
}

; // NOTE
// 1: take advantage of `currentColor` by leaving border top color undefined
// 2: even though the arrow is vertically centered, visually it appears too low
//    because of lowercase characters beside it

const classes = {
  arrow: {
    borderLeft: '0.3em solid transparent',
    borderRight: '0.3em solid transparent',
    borderTop: '0.3em solid',
    // 1
    display: 'inline-block',
    height: 0,
    marginTop: '-0.125em',
    // 2
    verticalAlign: 'middle',
    width: 0,
    // add spacing
    ':first-child': {
      marginRight: '0.5em'
    },
    ':last-child': {
      marginLeft: '0.5em'
    }
  }
};
module.exports = DropdownButton;

},{"../Button":5,"glamor":undefined,"react":undefined}],16:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _FormLabel = _interopRequireDefault(require("../FormLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class FormField extends _react.Component {
  constructor() {
    super();
    this.formFieldId = generateId();
  }

  getChildContext() {
    return {
      formFieldId: this.formFieldId
    };
  }

  render() {
    const {
      formLayout = 'basic',
      labelWidth
    } = this.context;
    const {
      cssStyles,
      children,
      className,
      cropLabel,
      htmlFor,
      label,
      offsetAbsentLabel,
      ...props
    } = this.props;
    props.className = (0, _glamor.css)(_styles.default.FormField, _styles.default['FormField--form-layout-' + formLayout], offsetAbsentLabel ? _styles.default['FormField--offset-absent-label'] : null, cssStyles);

    if (className) {
      props.className += ' ' + className;
    }

    if (offsetAbsentLabel && labelWidth) {
      props.style = {
        paddingLeft: labelWidth,
        ...props.style
      };
    } // elements


    const componentLabel = label ? /*#__PURE__*/_react.default.createElement(_FormLabel.default, {
      htmlFor: htmlFor,
      cropText: cropLabel
    }, label) : null;
    return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
      htmlFor: htmlFor
    }), componentLabel, children);
  }

}

;
const stylesShape = {
  _definition: _react.PropTypes.object,
  _name: _react.PropTypes.string
};
FormField.contextTypes = {
  formLayout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline']),
  labelWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
FormField.childContextTypes = {
  formFieldId: _react.PropTypes.string
};
FormField.propTypes = {
  children: _react.PropTypes.node,
  cropLabel: _react.PropTypes.bool,
  cssStyles: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.shape(stylesShape)), _react.PropTypes.shape(stylesShape)]),
  htmlFor: _react.default.PropTypes.string,
  label: _react.default.PropTypes.string,
  offsetAbsentLabel: _react.default.PropTypes.bool
};

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

;
module.exports = FormField;

},{"../FormLabel":21,"./styles":17,"glamor":undefined,"react":undefined}],17:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Form Field
// ==============================
module.exports = {
  'FormField': {
    marginBottom: '1em',
    position: 'relative'
  },
  // when inside a horizontal form
  'FormField--form-layout-horizontal': {
    [`@media (min-width: ${_theme.default.breakpoint.tabletLandscapeMin})`]: {
      display: 'table',
      tableLayout: 'fixed',
      width: '100%'
    }
  },
  // inside horizontal form
  // typically for use with submit button inside
  'FormField--offset-absent-label': {
    paddingLeft: _theme.default.form.label.width
  },
  // when inside an inline form
  'FormField--form-layout-inline': {
    'display': 'inline-block',
    'paddingLeft': '0.25em',
    'paddingRight': '0.25em',
    'verticalAlign': 'top',
    ':first-child': {
      paddingLeft: 0
    },
    ':last-child': {
      paddingRight: 0
    }
  }
};

},{"../../../theme":78}],18:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _styles = _interopRequireDefault(require("./styles"));

var _concatClassnames = _interopRequireDefault(require("../../../utils/concatClassnames"));

var _noedit = _interopRequireDefault(require("./noedit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// NOTE must NOT be functional component to allow `refs`
class FormInput extends _react.Component {
  blur() {
    this.target.blur();
  }

  focus() {
    this.target.focus();
  }

  render() {
    const {
      cssStyles,
      className,
      disabled,
      id,
      multiline,
      noedit,
      size,
      ...props
    } = this.props; // NOTE return a different component for `noedit`

    if (noedit) return /*#__PURE__*/_react.default.createElement(_noedit.default, this.props);
    const {
      formFieldId,
      formLayout
    } = this.context;
    props.id = id || formFieldId;
    props.className = (0, _glamor.css)(_styles.default.FormInput, _styles.default['FormInput__size--' + size], disabled ? _styles.default['FormInput--disabled'] : null, formLayout ? _styles.default['FormInput--form-layout-' + formLayout] : null, ...(0, _concatClassnames.default)(cssStyles));

    if (className) {
      props.className += ' ' + className;
    }

    const setRef = n => this.target = n;

    const Tag = multiline ? 'textarea' : 'input';
    return /*#__PURE__*/_react.default.createElement(Tag, _extends({
      ref: setRef,
      disabled: props.disabled
    }, props));
  }

}

;
const stylesShape = {
  _definition: _react.PropTypes.object,
  _name: _react.PropTypes.string
};
FormInput.propTypes = {
  cssStyles: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.shape(stylesShape)), _react.PropTypes.shape(stylesShape)]),
  multiline: _react.PropTypes.bool,
  size: _react.PropTypes.oneOf(['default', 'small', 'large']),
  type: _react.PropTypes.string
};
FormInput.defaultProps = {
  size: 'default',
  type: 'text'
};
FormInput.contextTypes = {
  formLayout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline']),
  formFieldId: _react.PropTypes.string
};
module.exports = FormInput;

},{"../../../utils/concatClassnames":81,"./noedit":19,"./styles":20,"glamor":undefined,"react":undefined}],19:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _theme = _interopRequireDefault(require("../../../theme"));

var _color = require("../../../utils/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint quote-props: ["error", "as-needed"] */
function FormInputNoedit(_ref) {
  let {
    className,
    component: Component,
    cropText,
    multiline,
    noedit,
    // NOTE not used, just removed from props
    type,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(classes.noedit, cropText ? classes.cropText : null, multiline ? classes.multiline : null, props.href || props.onClick ? classes.anchor : null, className);
  return /*#__PURE__*/_react.default.createElement(Component, props);
}

;
FormInputNoedit.propTypes = {
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  cropText: _react.PropTypes.bool
};
FormInputNoedit.defaultProps = {
  component: 'span'
};
const anchorHoverAndFocusStyles = {
  backgroundColor: (0, _color.fade)(_theme.default.color.link, 10),
  borderColor: (0, _color.fade)(_theme.default.color.link, 10),
  color: _theme.default.color.link,
  outline: 'none',
  textDecoration: 'underline'
};
const classes = {
  noedit: {
    appearance: 'none',
    backgroundColor: _theme.default.input.background.noedit,
    backgroundImage: 'none',
    borderColor: _theme.default.input.border.color.noedit,
    borderRadius: _theme.default.input.border.radius,
    borderStyle: 'solid',
    borderWidth: _theme.default.input.border.width,
    color: _theme.default.color.gray80,
    display: 'inline-block',
    lineHeight: _theme.default.input.lineHeight,
    padding: `0 ${_theme.default.input.paddingHorizontal}`,
    transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
    verticalAlign: 'middle',
    // prevent empty inputs from collapsing by adding content
    ':empty:before': {
      color: _theme.default.color.gray40,
      content: '"(no value)"'
    }
  },
  multiline: {
    display: 'block',
    height: 'auto',
    lineHeight: '1.4',
    paddingBottom: '0.6em',
    paddingTop: '0.6em'
  },
  // indicate clickability when using an anchor
  anchor: {
    backgroundColor: (0, _color.fade)(_theme.default.color.link, 5),
    borderColor: (0, _color.fade)(_theme.default.color.link, 10),
    color: _theme.default.color.link,
    marginRight: 5,
    minWidth: 0,
    textDecoration: 'none',
    ':hover': anchorHoverAndFocusStyles,
    ':focus': anchorHoverAndFocusStyles
  }
};
module.exports = FormInputNoedit;

},{"../../../theme":78,"../../../utils/color":80,"glamor":undefined,"react":undefined}],20:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Form Input
// ==============================
module.exports = {
  'FormInput': {
    'appearance': 'none',
    'backgroundColor': _theme.default.input.background.default,
    'backgroundImage': 'none',
    'borderColor': _theme.default.input.border.color.default,
    'borderRadius': _theme.default.input.border.radius,
    'borderStyle': 'solid',
    'borderWidth': _theme.default.input.border.width,
    'boxShadow': _theme.default.input.boxShadow,
    'color': 'inherit',
    // FIXME
    'display': 'block',
    'height': _theme.default.input.height,
    'lineHeight': _theme.default.input.lineHeight,
    'padding': `0 ${_theme.default.input.paddingHorizontal}`,
    'transition': 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
    'width': '100%',
    ':hover': {
      borderColor: _theme.default.input.border.color.hover,
      outline: 0
    },
    ':focus': {
      borderColor: _theme.default.input.border.color.focus,
      boxShadow: _theme.default.input.boxShadowFocus,
      outline: 0
    }
  },
  'FormInput--disabled': {
    backgroundColor: _theme.default.input.background.disabled,
    pointerEvents: 'none'
  },
  // sizes
  'FormInput__size--small': {
    fontSize: _theme.default.font.size.small
  },
  'FormInput__size--large': {
    fontSize: _theme.default.font.size.large
  }
};

},{"../../../theme":78}],21:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function FormLabel(_ref, _ref2) {
  let {
    cssStyles,
    className,
    component: Component,
    cropText,
    htmlFor,
    ...props
  } = _ref;
  let {
    formFieldId,
    formLayout,
    labelWidth
  } = _ref2;
  props.htmlFor = htmlFor || formFieldId;
  props.className = (0, _glamor.css)(_styles.default.FormLabel, formLayout ? _styles.default['FormLabel--form-layout-' + formLayout] : null, cropText ? _styles.default['FormLabel--crop-text'] : null, cssStyles);

  if (className) {
    props.className += ' ' + className;
  }

  if (labelWidth) {
    props.style = {
      width: labelWidth,
      ...props.style
    };
  }

  return /*#__PURE__*/_react.default.createElement(Component, props);
}

;
const stylesShape = {
  _definition: _react.PropTypes.object,
  _name: _react.PropTypes.string
};
FormLabel.propTypes = {
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  cropText: _react.PropTypes.bool,
  cssStyles: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.shape(stylesShape)), _react.PropTypes.shape(stylesShape)])
};
FormLabel.defaultProps = {
  component: 'label'
};
FormLabel.contextTypes = {
  formLayout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline']),
  formFieldId: _react.PropTypes.string,
  labelWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
module.exports = FormLabel;

},{"./styles":22,"glamor":undefined,"react":undefined}],22:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Form Label
// ==============================
module.exports = {
  'FormLabel': {
    color: _theme.default.form.label.color,
    fontSize: _theme.default.form.label.fontSize,
    fontWeight: _theme.default.form.label.fontWeight,
    display: 'inline-block',
    marginBottom: '0.5em'
  },
  // when inside a horizontal form
  'FormLabel--form-layout-horizontal': {
    [`@media (min-width: ${_theme.default.breakpoint.tabletLandscapeMin})`]: {
      display: 'table-cell',
      lineHeight: _theme.default.component.lineHeight,
      // fix
      marginBottom: 0,
      paddingRight: 5,
      verticalAlign: 'top',
      width: _theme.default.form.label.width
    }
  },
  // crop long text
  'FormLabel--crop-text': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
};

},{"../../../theme":78}],23:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FormNote(_ref) {
  let {
    className,
    children,
    component: Component,
    html,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(_styles.default.note, className); // Property Violation

  if (children && html) {
    console.error('Warning: FormNote cannot render `children` and `html`. You must provide one or the other.');
  }

  return html ? /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, {
    dangerouslySetInnerHTML: {
      __html: html
    }
  })) : /*#__PURE__*/_react.default.createElement(Component, props, children);
}

;
FormNote.propTypes = {
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  html: _react.PropTypes.string
};
FormNote.defaultProps = {
  component: 'div'
};
module.exports = FormNote;

},{"./styles":24,"glamor":undefined,"react":undefined}],24:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Form Note
// ==============================
module.exports = {
  note: {
    color: _theme.default.form.note.color,
    fontSize: _theme.default.form.note.fontSize,
    marginTop: _theme.default.spacing.small
  }
};

},{"../../../theme":78}],25:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class FormSelect extends _react.Component {
  render() {
    const {
      children,
      id,
      options,
      ...props
    } = this.props;
    const {
      formFieldId
    } = this.context;
    props.className = (0, _glamor.css)(_styles.default.select, props.disabled ? _styles.default['select--disabled'] : null);
    props.id = id || formFieldId; // Property Violation

    if (options && children) {
      console.error('Warning: FormSelect cannot render `children` and `options`. You must provide one or the other.');
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _glamor.css)(_styles.default.container)
    }, options ? /*#__PURE__*/_react.default.createElement("select", props, options.map(opt => /*#__PURE__*/_react.default.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label))) : /*#__PURE__*/_react.default.createElement("select", props, children), /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _glamor.css)(_styles.default.arrows, props.disabled ? _styles.default['arrows--disabled'] : null)
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _glamor.css)(_styles.default.arrow, _styles.default.arrowTop)
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _glamor.css)(_styles.default.arrow, _styles.default.arrowBottom)
    })));
  }

}

;
FormSelect.contextTypes = {
  formFieldId: _react.PropTypes.string
};
FormSelect.propTypes = {
  onChange: _react.PropTypes.func.isRequired,
  options: _react.default.PropTypes.arrayOf(_react.default.PropTypes.shape({
    label: _react.default.PropTypes.string,
    value: _react.default.PropTypes.string
  })),
  value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
module.exports = FormSelect;

},{"./styles":26,"glamor":undefined,"react":undefined}],26:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

var _color = require("../../../utils/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Form Select
// ==============================

/* eslint quote-props: ["error", "as-needed"] */
module.exports = {
  container: {
    position: 'relative'
  },
  // select node
  select: {
    appearance: 'none',
    backgroundColor: _theme.default.input.background.default,
    backgroundImage: 'none',
    borderColor: _theme.default.input.border.color.default,
    borderBottomColor: (0, _color.darken)(_theme.default.input.border.color.default, 4),
    borderTopColor: (0, _color.lighten)(_theme.default.input.border.color.default, 4),
    borderRadius: _theme.default.input.border.radius,
    borderStyle: 'solid',
    borderWidth: _theme.default.input.border.width,
    boxShadow: _theme.default.select.boxShadow,
    color: 'inherit',
    // FIXME
    display: 'block',
    height: _theme.default.input.height,
    lineHeight: _theme.default.input.lineHeight,
    padding: `0 ${_theme.default.input.paddingHorizontal}`,
    transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
    width: '100%',
    ':hover': {
      borderColor: _theme.default.input.border.color.hover,
      outline: 0
    },
    ':focus': {
      borderColor: _theme.default.input.border.color.focus,
      boxShadow: _theme.default.input.boxShadowFocus,
      outline: 0
    }
  },
  'select--disabled': {
    backgroundColor: _theme.default.input.background.disabled,
    pointerEvents: 'none'
  },
  // arrows
  arrows: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: _theme.default.input.height,
    justifyContent: 'center',
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    top: 0,
    width: _theme.default.input.height
  },
  arrow: {
    borderLeft: '0.3em solid transparent',
    borderRight: '0.3em solid transparent',
    display: 'inline-block',
    height: 0,
    verticalAlign: 'middle',
    width: 0,
    zIndex: 1
  },
  arrowTop: {
    borderBottom: '0.3em solid',
    marginBottom: '0.1em'
  },
  arrowBottom: {
    borderTop: '0.3em solid',
    marginTop: '0.1em'
  }
};

},{"../../../theme":78,"../../../utils/color":80}],27:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Form extends _react.Component {
  getChildContext() {
    return {
      formLayout: this.props.layout,
      labelWidth: this.props.labelWidth
    };
  }

  render() {
    // NOTE `labelWidth` is declared to remove it from `props`, though never used
    const {
      className,
      component: Component,
      labelWidth,
      // eslint-disable-line no-unused-vars
      layout,
      ...props
    } = this.props;
    props.className = (0, _glamor.css)(_styles.default.Form, _styles.default['Form__' + layout], className);
    return /*#__PURE__*/_react.default.createElement(Component, props);
  }

}

;
Form.childContextTypes = {
  formLayout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline']),
  labelWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
Form.propTypes = {
  children: _react.PropTypes.node.isRequired,
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  layout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline'])
};
Form.defaultProps = {
  component: 'form',
  layout: 'basic'
};
module.exports = Form;

},{"./styles":28,"glamor":undefined,"react":undefined}],28:[function(require,module,exports){
"use strict";

// ==============================
// Form
// ==============================
module.exports = {
  Form: {}
};

},{}],29:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../Button"));

var _Glyph = _interopRequireDefault(require("../Glyph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint quote-props: ["error", "as-needed"] */
function GlyphButton(_ref) {
  let {
    children,
    glyph,
    glyphColor,
    glyphSize,
    glyphStyle,
    position,
    ...props
  } = _ref;
  const isDefault = position === 'default';
  const isLeft = position === 'left';
  const isRight = position === 'right';
  const offset = {};
  if (isLeft) offset.marginRight = '0.5em';
  if (isRight) offset.marginLeft = '0.5em';
  const glyphStyles = { ...offset,
    ...glyphStyle
  };

  const icon = /*#__PURE__*/_react.default.createElement(_Glyph.default, {
    cssStyles: classes.glyph,
    color: glyphColor,
    name: glyph,
    size: glyphSize,
    style: glyphStyles
  });

  return /*#__PURE__*/_react.default.createElement(_Button.default, props, (isDefault || isLeft) && icon, children, isRight && icon);
}

; // For props "glyph", "glyphColor", and "glyphSize":
// prop type validation will occur within the Glyph component, no need to
// duplicate, just pass it through.

GlyphButton.propTypes = {
  glyph: _react.PropTypes.string,
  glyphColor: _react.PropTypes.string,
  glyphSize: _react.PropTypes.string,
  glyphStyle: _react.PropTypes.object,
  position: _react.PropTypes.oneOf(['default', 'left', 'right'])
};
GlyphButton.defaultProps = {
  glyphStyle: {},
  position: 'default' // no margin, assumes no children

};
const classes = {
  glyph: {
    display: 'inline-block',
    marginTop: '-0.125em',
    // fix icon alignment
    verticalAlign: 'middle'
  }
};
module.exports = GlyphButton;

},{"../Button":5,"../Glyph":32,"react":undefined}],30:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _FormField = _interopRequireDefault(require("../FormField"));

var _Glyph = _interopRequireDefault(require("../Glyph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function GlyphField(_ref) {
  let {
    children,
    glyph,
    glyphColor,
    glyphSize,
    position,
    ...props
  } = _ref;
  const isLeft = position === 'left';
  const isRight = position === 'right';
  const glyphStyles = {};
  if (isLeft) glyphStyles.marginRight = '0.5em';
  if (isRight) glyphStyles.marginLeft = '0.5em';

  const icon = /*#__PURE__*/_react.default.createElement(_Glyph.default, {
    cssStyles: classes.glyph,
    color: glyphColor,
    name: glyph,
    size: glyphSize,
    style: glyphStyles
  });

  return /*#__PURE__*/_react.default.createElement(_FormField.default, _extends({
    cssStyles: classes.wrapper
  }, props), isLeft && icon, children, isRight && icon);
}

; // For props "glyph", "glyphColor", and "glyphSize":
// prop type validation will occur within the Glyph component, no need to
// duplicate, just pass it through.

GlyphField.propTypes = {
  glyph: _react.PropTypes.string,
  glyphColor: _react.PropTypes.string,
  glyphSize: _react.PropTypes.string,
  position: _react.PropTypes.oneOf(['left', 'right'])
};
GlyphField.defaultProps = {
  position: 'left'
};
const classes = {
  wrapper: {
    alignItems: 'center',
    display: 'flex'
  },
  glyph: {
    display: 'inline-block',
    marginTop: '-0.125em',
    // fix icon alignment
    verticalAlign: 'middle'
  }
};
module.exports = GlyphField;

},{"../FormField":16,"../Glyph":32,"react":undefined}],31:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  danger: _theme.default.glyph.color.danger,
  inherit: _theme.default.glyph.color.inherit,
  inverted: _theme.default.glyph.color.inverted,
  primary: _theme.default.glyph.color.primary,
  success: _theme.default.glyph.color.success,
  warning: _theme.default.glyph.color.warning
};

},{"../../../theme":78}],32:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _octicons = _interopRequireDefault(require("./octicons"));

var _colors = _interopRequireDefault(require("./colors"));

var _sizes = _interopRequireDefault(require("./sizes"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// FIXME static octicon classes leaning on Elemental to avoid duplicate
// font and CSS; inflating the project size
function Glyph(_ref) {
  let {
    cssStyles,
    className,
    color,
    component: Component,
    name,
    size,
    style,
    ...props
  } = _ref;
  const colorIsValidType = Object.keys(_colors.default).includes(color);
  props.className = (0, _glamor.css)(_styles.default.glyph, colorIsValidType && _styles.default['color__' + color], _styles.default['size__' + size], cssStyles) + ` ${_octicons.default[name]}`;

  if (className) {
    props.className += ' ' + className;
  } // support random color strings


  props.style = {
    color: !colorIsValidType ? color : null,
    ...style
  };
  return /*#__PURE__*/_react.default.createElement(Component, props);
}

;
Glyph.propTypes = {
  color: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(Object.keys(_colors.default)), _react.PropTypes.string // support random color strings
  ]),
  cssStyles: _react.PropTypes.shape({
    _definition: _react.PropTypes.object,
    _name: _react.PropTypes.string
  }),
  name: _react.PropTypes.oneOf(Object.keys(_octicons.default)).isRequired,
  size: _react.PropTypes.oneOf(Object.keys(_sizes.default))
};
Glyph.defaultProps = {
  component: 'i',
  color: 'inherit',
  size: 'small'
};
module.exports = Glyph;

},{"./colors":31,"./octicons":33,"./sizes":34,"./styles":35,"glamor":undefined,"react":undefined}],33:[function(require,module,exports){
"use strict";

/* eslint quote-props: ["error", "as-needed"] */
module.exports = {
  alert: 'octicon octicon-alert',
  'arrow-down': 'octicon octicon-arrow-down',
  'arrow-left': 'octicon octicon-arrow-left',
  'arrow-right': 'octicon octicon-arrow-right',
  'arrow-small-down': 'octicon octicon-arrow-small-down',
  'arrow-small-left': 'octicon octicon-arrow-small-left',
  'arrow-small-right': 'octicon octicon-arrow-small-right',
  'arrow-small-up': 'octicon octicon-arrow-small-up',
  'arrow-up': 'octicon octicon-arrow-up',
  microscope: 'octicon octicon-microscope',
  beaker: 'octicon octicon-beaker',
  bell: 'octicon octicon-bell',
  book: 'octicon octicon-book',
  bookmark: 'octicon octicon-bookmark',
  briefcase: 'octicon octicon-briefcase',
  broadcast: 'octicon octicon-broadcast',
  browser: 'octicon octicon-browser',
  bug: 'octicon octicon-bug',
  calendar: 'octicon octicon-calendar',
  check: 'octicon octicon-check',
  checklist: 'octicon octicon-checklist',
  'chevron-down': 'octicon octicon-chevron-down',
  'chevron-left': 'octicon octicon-chevron-left',
  'chevron-right': 'octicon octicon-chevron-right',
  'chevron-up': 'octicon octicon-chevron-up',
  'circle-slash': 'octicon octicon-circle-slash',
  'circuit-board': 'octicon octicon-circuit-board',
  clippy: 'octicon octicon-clippy',
  clock: 'octicon octicon-clock',
  'cloud-download': 'octicon octicon-cloud-download',
  'cloud-upload': 'octicon octicon-cloud-upload',
  code: 'octicon octicon-code',
  'color-mode': 'octicon octicon-color-mode',
  'comment-add': 'octicon octicon-comment-add',
  comment: 'octicon octicon-comment',
  'comment-discussion': 'octicon octicon-comment-discussion',
  'credit-card': 'octicon octicon-credit-card',
  dash: 'octicon octicon-dash',
  dashboard: 'octicon octicon-dashboard',
  database: 'octicon octicon-database',
  clone: 'octicon octicon-clone',
  'desktop-download': 'octicon octicon-desktop-download',
  'device-camera': 'octicon octicon-device-camera',
  'device-camera-video': 'octicon octicon-device-camera-video',
  'device-desktop': 'octicon octicon-device-desktop',
  'device-mobile': 'octicon octicon-device-mobile',
  diff: 'octicon octicon-diff',
  'diff-added': 'octicon octicon-diff-added',
  'diff-ignored': 'octicon octicon-diff-ignored',
  'diff-modified': 'octicon octicon-diff-modified',
  'diff-removed': 'octicon octicon-diff-removed',
  'diff-renamed': 'octicon octicon-diff-renamed',
  ellipsis: 'octicon octicon-ellipsis',
  'eye-unwatch': 'octicon octicon-eye-unwatch',
  'eye-watch': 'octicon octicon-eye-watch',
  eye: 'octicon octicon-eye',
  'file-binary': 'octicon octicon-file-binary',
  'file-code': 'octicon octicon-file-code',
  'file-directory': 'octicon octicon-file-directory',
  'file-media': 'octicon octicon-file-media',
  'file-pdf': 'octicon octicon-file-pdf',
  'file-submodule': 'octicon octicon-file-submodule',
  'file-symlink-directory': 'octicon octicon-file-symlink-directory',
  'file-symlink-file': 'octicon octicon-file-symlink-file',
  'file-text': 'octicon octicon-file-text',
  'file-zip': 'octicon octicon-file-zip',
  flame: 'octicon octicon-flame',
  fold: 'octicon octicon-fold',
  gear: 'octicon octicon-gear',
  gift: 'octicon octicon-gift',
  gist: 'octicon octicon-gist',
  'gist-secret': 'octicon octicon-gist-secret',
  'git-branch-create': 'octicon octicon-git-branch-create',
  'git-branch-delete': 'octicon octicon-git-branch-delete',
  'git-branch': 'octicon octicon-git-branch',
  'git-commit': 'octicon octicon-git-commit',
  'git-compare': 'octicon octicon-git-compare',
  'git-merge': 'octicon octicon-git-merge',
  'git-pull-request-abandoned': 'octicon octicon-git-pull-request-abandoned',
  'git-pull-request': 'octicon octicon-git-pull-request',
  globe: 'octicon octicon-globe',
  graph: 'octicon octicon-graph',
  heart: 'octicon octicon-heart',
  history: 'octicon octicon-history',
  home: 'octicon octicon-home',
  'horizontal-rule': 'octicon octicon-horizontal-rule',
  hubot: 'octicon octicon-hubot',
  inbox: 'octicon octicon-inbox',
  info: 'octicon octicon-info',
  'issue-closed': 'octicon octicon-issue-closed',
  'issue-opened': 'octicon octicon-issue-opened',
  'issue-reopened': 'octicon octicon-issue-reopened',
  jersey: 'octicon octicon-jersey',
  key: 'octicon octicon-key',
  keyboard: 'octicon octicon-keyboard',
  law: 'octicon octicon-law',
  'light-bulb': 'octicon octicon-light-bulb',
  link: 'octicon octicon-link',
  'link-external': 'octicon octicon-link-external',
  'list-ordered': 'octicon octicon-list-ordered',
  'list-unordered': 'octicon octicon-list-unordered',
  location: 'octicon octicon-location',
  'gist-private': 'octicon octicon-gist-private',
  'mirror-private': 'octicon octicon-mirror-private',
  'git-fork-private': 'octicon octicon-git-fork-private',
  lock: 'octicon octicon-lock',
  'logo-github': 'octicon octicon-logo-github',
  mail: 'octicon octicon-mail',
  'mail-read': 'octicon octicon-mail-read',
  'mail-reply': 'octicon octicon-mail-reply',
  'mark-github': 'octicon octicon-mark-github',
  markdown: 'octicon octicon-markdown',
  megaphone: 'octicon octicon-megaphone',
  mention: 'octicon octicon-mention',
  milestone: 'octicon octicon-milestone',
  'mirror-public': 'octicon octicon-mirror-public',
  mirror: 'octicon octicon-mirror',
  'mortar-board': 'octicon octicon-mortar-board',
  mute: 'octicon octicon-mute',
  'no-newline': 'octicon octicon-no-newline',
  octoface: 'octicon octicon-octoface',
  organization: 'octicon octicon-organization',
  package: 'octicon octicon-package',
  paintcan: 'octicon octicon-paintcan',
  pencil: 'octicon octicon-pencil',
  'person-add': 'octicon octicon-person-add',
  'person-follow': 'octicon octicon-person-follow',
  person: 'octicon octicon-person',
  pin: 'octicon octicon-pin',
  plug: 'octicon octicon-plug',
  'repo-create': 'octicon octicon-repo-create',
  'gist-new': 'octicon octicon-gist-new',
  'file-directory-create': 'octicon octicon-file-directory-create',
  'file-add': 'octicon octicon-file-add',
  plus: 'octicon octicon-plus',
  'primitive-dot': 'octicon octicon-primitive-dot',
  'primitive-square': 'octicon octicon-primitive-square',
  pulse: 'octicon octicon-pulse',
  question: 'octicon octicon-question',
  quote: 'octicon octicon-quote',
  'radio-tower': 'octicon octicon-radio-tower',
  'repo-delete': 'octicon octicon-repo-delete',
  repo: 'octicon octicon-repo',
  'repo-clone': 'octicon octicon-repo-clone',
  'repo-force-push': 'octicon octicon-repo-force-push',
  'gist-fork': 'octicon octicon-gist-fork',
  'repo-forked': 'octicon octicon-repo-forked',
  'repo-pull': 'octicon octicon-repo-pull',
  'repo-push': 'octicon octicon-repo-push',
  rocket: 'octicon octicon-rocket',
  rss: 'octicon octicon-rss',
  ruby: 'octicon octicon-ruby',
  'screen-full': 'octicon octicon-screen-full',
  'screen-normal': 'octicon octicon-screen-normal',
  'search-save': 'octicon octicon-search-save',
  search: 'octicon octicon-search',
  server: 'octicon octicon-server',
  settings: 'octicon octicon-settings',
  shield: 'octicon octicon-shield',
  'log-in': 'octicon octicon-log-in',
  'sign-in': 'octicon octicon-sign-in',
  'log-out': 'octicon octicon-log-out',
  'sign-out': 'octicon octicon-sign-out',
  squirrel: 'octicon octicon-squirrel',
  'star-add': 'octicon octicon-star-add',
  'star-delete': 'octicon octicon-star-delete',
  star: 'octicon octicon-star',
  stop: 'octicon octicon-stop',
  'repo-sync': 'octicon octicon-repo-sync',
  sync: 'octicon octicon-sync',
  'tag-remove': 'octicon octicon-tag-remove',
  'tag-add': 'octicon octicon-tag-add',
  tag: 'octicon octicon-tag',
  telescope: 'octicon octicon-telescope',
  terminal: 'octicon octicon-terminal',
  'three-bars': 'octicon octicon-three-bars',
  thumbsdown: 'octicon octicon-thumbsdown',
  thumbsup: 'octicon octicon-thumbsup',
  tools: 'octicon octicon-tools',
  trashcan: 'octicon octicon-trashcan',
  'triangle-down': 'octicon octicon-triangle-down',
  'triangle-left': 'octicon octicon-triangle-left',
  'triangle-right': 'octicon octicon-triangle-right',
  'triangle-up': 'octicon octicon-triangle-up',
  unfold: 'octicon octicon-unfold',
  unmute: 'octicon octicon-unmute',
  versions: 'octicon octicon-versions',
  watch: 'octicon octicon-watch',
  'remove-close': 'octicon octicon-remove-close',
  x: 'octicon octicon-x',
  zap: 'octicon octicon-zap'
};

},{}],34:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  small: _theme.default.glyph.size.small,
  medium: _theme.default.glyph.size.medium,
  large: _theme.default.glyph.size.large
};

},{"../../../theme":78}],35:[function(require,module,exports){
"use strict";

var _colors = _interopRequireDefault(require("./colors"));

var _sizes = _interopRequireDefault(require("./sizes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Glyph
// ==============================
// Prepare variants
const colorVariants = {};
Object.keys(_colors.default).forEach(color => {
  colorVariants[`color__${color}`] = {
    color: _colors.default[color]
  };
}); // Prepare sizes

const sizeVariants = {};
Object.keys(_sizes.default).forEach(size => {
  sizeVariants[`size__${size}`] = {
    fontSize: _sizes.default[size]
  };
});
module.exports = {
  glyph: {},
  // Colors
  ...colorVariants,
  // Sizes
  ...sizeVariants
};

},{"./colors":31,"./sizes":34}],36:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const WIDTHS = {
  'one-whole': '100%',
  'one-half': '50%',
  'one-third': '33.33%',
  'two-thirds': '66.66%',
  'one-quarter': '25%',
  'three-quarters': '75%',
  'one-fifth': '20%',
  'two-fifths': '40%',
  'three-fifths': '60%',
  'four-fifths': '80%',
  'one-sixth': '16.66%',
  'five-sixths': '83.33%'
};

const GridCol = (props, context) => {
  const gutter = props.gutter || context.gutter;
  const xsmall = props.xsmall || context.xsmall;
  const small = props.small || context.small;
  const medium = props.medium || context.medium;
  const large = props.large || context.large;
  const className = (0, _glamor.css)(classes['xsmall-' + xsmall], classes['small-' + small], classes['medium-' + medium], classes['large-' + large]);
  const componentClassName = `${className}${props.className ? ' ' + props.className : ''}`;
  const componentStyles = gutter ? {
    paddingLeft: gutter / 2,
    paddingRight: gutter / 2
  } : {};
  return /*#__PURE__*/_react.default.createElement("div", {
    className: componentClassName,
    style: componentStyles
  }, props.children);
};

GridCol.contextTypes = {
  gutter: _react.PropTypes.number,
  large: _react.PropTypes.string,
  medium: _react.PropTypes.string,
  small: _react.PropTypes.string,
  xsmall: _react.PropTypes.string
};
GridCol.propTypes = {
  gutter: _react.PropTypes.number,
  large: _react.PropTypes.string,
  medium: _react.PropTypes.string,
  small: _react.PropTypes.string,
  xsmall: _react.PropTypes.string
};
const classes = { ...prepareWidths('xsmall', WIDTHS),
  ...prepareWidths('small', WIDTHS),
  ...prepareWidths('medium', WIDTHS),
  ...prepareWidths('large', WIDTHS)
};
/* eslint-disable guard-for-in */

function prepareWidths(prefix, obj) {
  let classes = {};

  switch (prefix) {
    case 'small':
      for (let prop in obj) {
        classes[prefix + '-' + prop] = {
          [`@media (min-width: ${_theme.default.breakpoint.tabletPortraitMin})`]: {
            width: obj[prop]
          }
        };
      }

      break;

    case 'medium':
      for (let prop in obj) {
        classes[prefix + '-' + prop] = {
          [`@media (min-width: ${_theme.default.breakpoint.tabletLandscapeMin})`]: {
            width: obj[prop]
          }
        };
      }

      break;

    case 'large':
      for (let prop in obj) {
        classes[prefix + '-' + prop] = {
          [`@media (min-width: ${_theme.default.breakpoint.desktopMin})`]: {
            width: obj[prop]
          }
        };
      }

      break;

    default:
      for (let prop in obj) {
        classes[prefix + '-' + prop] = {
          width: obj[prop]
        };
      }

  }

  return classes;
}

;
module.exports = GridCol;

},{"../../../theme":78,"glamor":undefined,"react":undefined}],37:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class GridRow extends _react.Component {
  getChildContext() {
    return {
      gutter: this.props.gutter,
      xsmall: this.props.xsmall,
      small: this.props.small,
      medium: this.props.medium,
      large: this.props.large
    };
  }

  render() {
    const {
      children,
      className,
      gutter,
      styles = {}
    } = this.props;
    const componentClassName = `${(0, _glamor.css)(classes.grid)}${className ? ' ' + className : ''}`;

    const componentStyles = _extends(styles, {
      marginLeft: gutter / -2,
      marginRight: gutter / -2
    });

    return /*#__PURE__*/_react.default.createElement("div", {
      className: componentClassName,
      style: componentStyles
    }, children);
  }

}

;
GridRow.childContextTypes = {
  gutter: _react.PropTypes.number,
  xsmall: _react.PropTypes.string,
  small: _react.PropTypes.string,
  medium: _react.PropTypes.string,
  large: _react.PropTypes.string
};
GridRow.propTypes = {
  gutter: _react.PropTypes.number,
  large: _react.PropTypes.string,
  medium: _react.PropTypes.string,
  small: _react.PropTypes.string,
  xsmall: _react.PropTypes.string
};
GridRow.defaultProps = {
  gutter: 0,
  xsmall: 'one-whole'
};
const classes = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};
module.exports = GridRow;

},{"glamor":undefined,"react":undefined}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Col", {
  enumerable: true,
  get: function () {
    return _GridCol.default;
  }
});
Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: function () {
    return _GridRow.default;
  }
});

var _GridCol = _interopRequireDefault(require("../GridCol"));

var _GridRow = _interopRequireDefault(require("../GridRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"../GridCol":36,"../GridRow":37}],39:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// NOTE: Inline Group Section accepts a single child
function InlineGroupSection(_ref) {
  let {
    active,
    cssStyles,
    children,
    className,
    contiguous,
    grow,
    position,
    ...props
  } = _ref;
  // evaluate position
  const separate = position === 'last' || position === 'middle'; // A `contiguous` section must manipulate it's child directly
  // A separate (default) section just wraps the child

  return contiguous ? /*#__PURE__*/(0, _react.cloneElement)(children, {
    cssStyles: [_styles.default.contiguous, _styles.default['contiguous__' + position], active ? _styles.default.active : null, grow ? _styles.default.grow : null, cssStyles],
    ...props
  }) : /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _glamor.css)(!!grow && _styles.default.grow, !!separate && _styles.default.separate, cssStyles)
  }, props), children);
}

;
InlineGroupSection.propTypes = {
  active: _react.PropTypes.bool,
  // buttons only
  children: _react.PropTypes.element.isRequired,
  contiguous: _react.PropTypes.bool,
  grow: _react.PropTypes.bool,
  position: _react.PropTypes.oneOf(['first', 'last', 'middle', 'only'])
};
module.exports = InlineGroupSection;

},{"./styles":40,"glamor":undefined,"react":undefined}],40:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Inline Group: Section
// ==============================
// Takes only FormInput and Button as children, rendering them as a
// tidy inline array
module.exports = {
  // pull active elements up
  active: {
    position: 'relative'
  },
  // stretch to fill available width
  grow: {
    flex: '1 1 0'
  },
  // separate applicable non-contiguous elements
  separate: {
    paddingLeft: '0.75em'
  },
  // Contiguous: manipulate children directly
  // pull focused contiguous elements up
  contiguous: {
    ':focus': {
      position: 'relative',
      zIndex: 1
    }
  },
  // position
  contiguous__middle: {
    borderRadius: 0,
    marginLeft: _theme.default.button.borderWidth * -1
  },
  contiguous__first: {
    borderBottomRightRadius: '0 !important',
    borderTopRightRadius: '0 !important'
  },
  contiguous__last: {
    borderBottomLeftRadius: '0 !important',
    borderTopLeftRadius: '0 !important',
    marginLeft: _theme.default.button.borderWidth * -1
  }
};

},{"../../../theme":78}],41:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// NOTE: only accepts InlineGroupSection as a single child
function InlineGroup(_ref) {
  let {
    cssStyles,
    block,
    children,
    className,
    component: Component,
    contiguous,
    ...props
  } = _ref;
  // prepare group className
  props.className = (0, _glamor.css)(classes.group, !!block && classes.block, cssStyles);

  if (className) {
    props.className += ' ' + className;
  } // convert children to an array and filter out falsey values


  const buttons = _react.Children.toArray(children).filter(i => i); // normalize the count


  const count = buttons.length - 1; // clone children and apply classNames that glamor can target

  props.children = buttons.map((c, idx) => {
    if (!c) return null;
    const isOnlyChild = !count;
    const isFirstChild = !isOnlyChild && idx === 0;
    const isLastChild = !isOnlyChild && idx === count;
    const isMiddleChild = !isOnlyChild && !isFirstChild && !isLastChild;
    let position;
    if (isOnlyChild) position = 'only';
    if (isFirstChild) position = 'first';
    if (isLastChild) position = 'last';
    if (isMiddleChild) position = 'middle';
    return /*#__PURE__*/(0, _react.cloneElement)(c, {
      contiguous: contiguous,
      position
    });
  });
  return /*#__PURE__*/_react.default.createElement(Component, props);
}

;
InlineGroup.propTypes = {
  block: _react.PropTypes.bool,
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  contiguous: _react.PropTypes.bool,
  cssStyles: _react.PropTypes.shape({
    _definition: _react.PropTypes.object,
    _name: _react.PropTypes.string
  })
};
InlineGroup.defaultProps = {
  component: 'div'
};
const classes = {
  group: {
    display: 'inline-flex'
  },
  block: {
    display: 'flex'
  }
};
module.exports = InlineGroup;

},{"glamor":undefined,"react":undefined}],42:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function LabelledControl(_ref) {
  let {
    className,
    inline,
    label,
    title,
    ...props
  } = _ref;
  const labelClassName = (0, _glamor.css)(_styles.default.wrapper, inline && _styles.default.wrapper__inline, className);
  return /*#__PURE__*/_react.default.createElement("label", {
    title: title,
    className: labelClassName
  }, /*#__PURE__*/_react.default.createElement("input", _extends({}, props, {
    className: (0, _glamor.css)(_styles.default.control)
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _glamor.css)(_styles.default.label)
  }, label));
}

;
LabelledControl.propTypes = {
  inline: _react.PropTypes.bool,
  title: _react.PropTypes.string,
  type: _react.PropTypes.oneOf(['checkbox', 'radio']).isRequired
};
module.exports = LabelledControl;

},{"./styles":43,"glamor":undefined,"react":undefined}],43:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Alert
// ==============================

/* eslint quote-props: ["error", "as-needed"] */
module.exports = {
  wrapper: {
    display: 'block',
    height: _theme.default.input.height,
    lineHeight: _theme.default.input.lineHeight
  },
  wrapper__inline: {
    display: 'inline'
  },
  // checkbox or radio
  control: {
    marginRight: '0.5em'
  }
};

},{"../../../theme":78}],44:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _Button = _interopRequireDefault(require("../Button"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function LoadingButton(_ref) {
  let {
    children,
    loading,
    ...props
  } = _ref;
  // determine the correct variant for the spinner,
  // fill is the default variant on Button
  const variant = props.variant || 'fill'; // determine the correct color for the spinner,
  // cancel and delete alias to "danger"

  let color;
  if (props.color === 'cancel' || props.color === 'delete') color = 'danger'; // merge all the variant/color together

  const formattedColor = variant === 'fill' && props.color !== 'default' ? 'inverted' : color; // render the spinner if required

  const spinner = loading && /*#__PURE__*/_react.default.createElement(_Spinner.default, {
    size: "small",
    color: formattedColor
  }); // slide the spinner in and out of view


  const spinnerStyles = {
    width: loading ? _theme.default.spinner.size.small * 5 + _theme.default.spacing.small : 0
  }; // render everything

  return /*#__PURE__*/_react.default.createElement(_Button.default, props, /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _glamor.css)(classes.spinner),
    style: spinnerStyles
  }, spinner), children);
}

;
LoadingButton.propTypes = {
  loading: _react.PropTypes.bool
};
LoadingButton.defaultProps = {
  loading: false
};
const classes = {
  spinner: {
    display: 'inline-block',
    overflow: 'hidden',
    textAlign: 'left',
    transition: 'width 200ms ease-out',
    verticalAlign: 'middle'
  }
};
module.exports = LoadingButton;

},{"../../../theme":78,"../Button":5,"../Spinner":61,"glamor":undefined,"react":undefined}],45:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ModalBody(_ref) {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _glamor.css)(classes.body, className)
  }, props));
}

;
const classes = {
  body: {
    paddingBottom: _theme.default.modal.padding.body.vertical,
    paddingLeft: _theme.default.modal.padding.body.horizontal,
    paddingRight: _theme.default.modal.padding.body.horizontal,
    paddingTop: _theme.default.modal.padding.body.vertical
  }
};
module.exports = ModalBody;

},{"../../../theme":78,"glamor":undefined,"react":undefined}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _ScrollLock = _interopRequireDefault(require("../ScrollLock"));

var _Portal = _interopRequireDefault(require("../Portal"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

class ModalDialog extends _react.Component {
  constructor() {
    super();
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleKeyboardInput = this.handleKeyboardInput.bind(this);
  }

  getChildContext() {
    return {
      onClose: this.props.onClose
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!canUseDom) return; // add event listeners

    if (nextProps.isOpen && nextProps.enableKeyboardInput) {
      window.addEventListener('keydown', this.handleKeyboardInput);
    }

    if (!nextProps.isOpen && nextProps.enableKeyboardInput) {
      window.removeEventListener('keydown', this.handleKeyboardInput);
    }
  }

  componentWillUnmount() {
    if (this.props.enableKeyboardInput) {
      window.removeEventListener('keydown', this.handleKeyboardInput);
    }
  } // ==============================
  // Methods
  // ==============================


  handleKeyboardInput(event) {
    if (event.keyCode === 27) this.props.onClose();
    return false;
  }

  handleBackdropClick(e) {
    if (e.target !== this.refs.container) return;
    this.props.onClose();
  } // ==============================
  // Renderers
  // ==============================


  renderDialog() {
    const {
      backdropClosesModal,
      children,
      isOpen,
      width
    } = this.props;
    if (!isOpen) return /*#__PURE__*/_react.default.createElement("span", {
      key: "closed"
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _glamor.css)(classes.container),
      key: "open",
      ref: "container",
      onClick: !!backdropClosesModal && this.handleBackdropClick,
      onTouchEnd: !!backdropClosesModal && this.handleBackdropClick
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _glamor.css)(classes.dialog),
      style: {
        width
      },
      "data-screen-id": "modal-dialog"
    }, children), /*#__PURE__*/_react.default.createElement(_ScrollLock.default, null));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_Portal.default, null, this.renderDialog());
  }

}

;
ModalDialog.propTypes = {
  backdropClosesModal: _react.PropTypes.bool,
  enableKeyboardInput: _react.PropTypes.bool,
  isOpen: _react.PropTypes.bool,
  onClose: _react.PropTypes.func.isRequired,
  width: _react.PropTypes.number
};
ModalDialog.defaultProps = {
  enableKeyboardInput: true,
  width: 768
};
ModalDialog.childContextTypes = {
  onClose: _react.PropTypes.func.isRequired
};
const classes = {
  container: {
    alignItems: 'center',
    backgroundColor: _theme.default.modal.background,
    boxSizing: 'border-box',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: _theme.default.modal.zIndex
  },
  dialog: {
    backgroundColor: 'white',
    borderRadius: _theme.default.borderRadius.default,
    maxHeight: '90%',
    overflowY: 'auto',
    paddingBottom: _theme.default.modal.padding.dialog.vertical,
    paddingLeft: _theme.default.modal.padding.dialog.horizontal,
    paddingRight: _theme.default.modal.padding.dialog.horizontal,
    paddingTop: _theme.default.modal.padding.dialog.vertical,
    position: 'relative'
  }
};
var _default = ModalDialog;
exports.default = _default;

},{"../../../theme":78,"../Portal":53,"../ScrollLock":56,"glamor":undefined,"react":undefined}],47:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ModalFooter(_ref) {
  let {
    align,
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: (0, _glamor.css)(classes.footer, classes['align__' + align], className)
  }));
}

;
ModalFooter.propTypes = {
  align: _react.PropTypes.oneOf(['center', 'left', 'right']),
  children: _react.PropTypes.node,
  onClose: _react.PropTypes.func,
  showCloseButton: _react.PropTypes.bool,
  text: _react.PropTypes.string
};
ModalFooter.defaultProps = {
  align: 'left'
};
const classes = {
  footer: {
    borderTop: `2px solid ${_theme.default.color.gray10}`,
    display: 'flex',
    paddingBottom: _theme.default.modal.padding.footer.vertical,
    paddingLeft: _theme.default.modal.padding.footer.horizontal,
    paddingRight: _theme.default.modal.padding.footer.horizontal,
    paddingTop: _theme.default.modal.padding.footer.vertical
  },
  // alignment
  align__left: {
    justifyContent: 'flex-start'
  },
  align__center: {
    justifyContent: 'center'
  },
  align__right: {
    justifyContent: 'flex-end'
  }
};
module.exports = ModalFooter;

},{"../../../theme":78,"glamor":undefined,"react":undefined}],48:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _GlyphButton = _interopRequireDefault(require("../GlyphButton"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ModalHeader(_ref, _ref2) {
  let {
    children,
    className,
    showCloseButton,
    text,
    ...props
  } = _ref;
  let {
    onClose
  } = _ref2;

  // Property Violation
  if (children && text) {
    console.error('Warning: ModalHeader cannot render `children` and `text`. You must provide one or the other.');
  }

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: (0, _glamor.css)(classes.header, className)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _glamor.css)(classes.grow)
  }, text ? /*#__PURE__*/_react.default.createElement("h4", {
    className: (0, _glamor.css)(classes.text)
  }, text) : children), !!onClose && showCloseButton && /*#__PURE__*/_react.default.createElement(_GlyphButton.default, {
    cssStyles: classes.close,
    color: "cancel",
    glyph: "x",
    onClick: onClose,
    variant: "link"
  }));
}

;
ModalHeader.propTypes = {
  children: _react.PropTypes.node,
  onClose: _react.PropTypes.func,
  showCloseButton: _react.PropTypes.bool,
  text: _react.PropTypes.string
};
ModalHeader.contextTypes = {
  onClose: _react.PropTypes.func.isRequired
};
const classes = {
  header: {
    alignItems: 'center',
    borderBottom: `2px solid ${_theme.default.color.gray10}`,
    display: 'flex',
    paddingBottom: _theme.default.modal.padding.header.vertical,
    paddingLeft: _theme.default.modal.padding.header.horizontal,
    paddingRight: _theme.default.modal.padding.header.horizontal,
    paddingTop: _theme.default.modal.padding.header.vertical
  },
  // fill space to push the close button right
  grow: {
    flexGrow: 1
  },
  // title text
  text: {
    color: 'inherit',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1,
    margin: 0
  }
};
module.exports = ModalHeader;

},{"../../../theme":78,"../GlyphButton":29,"glamor":undefined,"react":undefined}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Body", {
  enumerable: true,
  get: function () {
    return _body.default;
  }
});
Object.defineProperty(exports, "Dialog", {
  enumerable: true,
  get: function () {
    return _dialog.default;
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function () {
    return _footer.default;
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function () {
    return _header.default;
  }
});

var _body = _interopRequireDefault(require("./body"));

var _dialog = _interopRequireDefault(require("./dialog"));

var _footer = _interopRequireDefault(require("./footer"));

var _header = _interopRequireDefault(require("./header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./body":45,"./dialog":46,"./footer":47,"./header":48}],50:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _page = _interopRequireDefault(require("./page"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Pagination extends _react.Component {
  renderCount() {
    let count = '';
    const {
      currentPage,
      pageSize,
      plural,
      singular,
      total
    } = this.props;

    if (!total) {
      count = 'No ' + (plural || 'records');
    } else if (total > pageSize) {
      let start = pageSize * (currentPage - 1) + 1;
      let end = Math.min(start + pageSize - 1, total);
      count = `Showing ${start} to ${end} of ${total}`;
    } else {
      count = 'Showing ' + total;

      if (total > 1 && plural) {
        count += ' ' + plural;
      } else if (total === 1 && singular) {
        count += ' ' + singular;
      }
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _glamor.css)(classes.count),
      "data-e2e-pagination-count": true
    }, count);
  }

  renderPages() {
    const {
      currentPage,
      limit,
      onPageSelect,
      pageSize,
      total
    } = this.props;
    if (total <= pageSize) return null;
    let pages = [];
    let totalPages = Math.ceil(total / pageSize);
    let minPage = 1;
    let maxPage = totalPages;

    if (limit && limit < totalPages) {
      let rightLimit = Math.floor(limit / 2);
      let leftLimit = rightLimit + limit % 2 - 1;
      minPage = currentPage - leftLimit;
      maxPage = currentPage + rightLimit;

      if (minPage < 1) {
        maxPage = limit;
        minPage = 1;
      }

      if (maxPage > totalPages) {
        minPage = totalPages - limit + 1;
        maxPage = totalPages;
      }
    }

    if (minPage > 1) {
      pages.push( /*#__PURE__*/_react.default.createElement(_page.default, {
        key: "page_start",
        onClick: () => onPageSelect(1)
      }, "..."));
    }

    for (let page = minPage; page <= maxPage; page++) {
      let selected = page === currentPage;
      /* eslint-disable no-loop-func */

      pages.push( /*#__PURE__*/_react.default.createElement(_page.default, {
        key: 'page_' + page,
        selected: selected,
        onClick: () => onPageSelect(page)
      }, page));
      /* eslint-enable */
    }

    if (maxPage < totalPages) {
      pages.push( /*#__PURE__*/_react.default.createElement(_page.default, {
        key: "page_end",
        onClick: () => onPageSelect(totalPages)
      }, "..."));
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _glamor.css)(classes.list)
    }, pages);
  }

  render() {
    const className = (0, _glamor.css)(classes.container, this.props.className);
    return /*#__PURE__*/_react.default.createElement("div", {
      className: className,
      style: this.props.style
    }, this.renderCount(), this.renderPages());
  }

}

;
const classes = {
  container: {
    display: 'block',
    lineHeight: _theme.default.component.lineHeight,
    marginBottom: '2em'
  },
  count: {
    display: 'inline-block',
    marginRight: '1em',
    verticalAlign: 'middle'
  },
  list: {
    display: 'inline-block',
    verticalAlign: 'middle'
  }
};
Pagination.propTypes = {
  className: _react.PropTypes.string,
  currentPage: _react.PropTypes.number.isRequired,
  limit: _react.PropTypes.number,
  onPageSelect: _react.PropTypes.func,
  pageSize: _react.PropTypes.number.isRequired,
  plural: _react.PropTypes.string,
  singular: _react.PropTypes.string,
  style: _react.PropTypes.object,
  total: _react.PropTypes.number.isRequired
};
module.exports = Pagination;

},{"../../../theme":78,"./page":51,"glamor":undefined,"react":undefined}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Page(_ref) {
  let {
    disabled,
    selected,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(classes.page, !!disabled && classes.disabled, !!selected && classes.selected);
  return /*#__PURE__*/_react.default.createElement("button", props);
}

;
Page.propTypes = {
  disabled: _react.PropTypes.bool,
  onClick: _react.PropTypes.func.isRequired,
  selected: _react.PropTypes.bool
};
/* eslint quote-props: ["error", "as-needed"] */

const selectedStyle = {
  backgroundColor: _theme.default.pagination.selected.background,
  borderColor: _theme.default.pagination.selected.border,
  color: _theme.default.pagination.selected.color,
  cursor: 'default',
  zIndex: 2
};
const pseudoStyle = {
  backgroundColor: _theme.default.pagination.hover.background,
  borderColor: _theme.default.pagination.hover.border,
  color: _theme.default.pagination.hover.color,
  outline: 'none'
};
const classes = {
  page: {
    appearance: 'none',
    background: 'none',
    border: '1px solid transparent',
    borderRadius: _theme.default.borderRadius.default,
    color: _theme.default.pagination.color,
    cursor: 'pointer',
    display: 'inline-block',
    float: 'left',
    // Collapse white-space
    marginRight: '0.25em',
    padding: '0 .7em',
    position: 'relative',
    textDecoration: 'none',
    // handle hover and focus
    ':hover': pseudoStyle,
    ':focus': pseudoStyle
  },
  // selected page
  selected: { ...selectedStyle,
    ':hover': selectedStyle,
    ':focus': selectedStyle
  },
  // disabled page
  disabled: {
    backgroundColor: _theme.default.pagination.disabled.background,
    borderColor: _theme.default.pagination.disabled.background,
    color: _theme.default.pagination.disabled.color,
    cursor: 'default'
  }
};
var _default = Page;
exports.default = _default;

},{"../../../theme":78,"glamor":undefined,"react":undefined}],52:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

// Pass the Lightbox context through to the Portal's descendents
// StackOverflow discussion http://goo.gl/oclrJ9
class PassContext extends _react.Component {
  getChildContext() {
    return this.props.context;
  }

  render() {
    return _react.Children.only(this.props.children);
  }

}

;
PassContext.propTypes = {
  context: _react.PropTypes.object.isRequired
};
PassContext.childContextTypes = {
  onClose: _react.PropTypes.func
};
var _default = PassContext;
exports.default = _default;

},{"react":undefined}],53:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactAddonsCssTransitionGroup = _interopRequireDefault(require("react-addons-css-transition-group"));

var _reactDom = require("react-dom");

var _PassContext = _interopRequireDefault(require("../PassContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class Portal extends _react.Component {
  constructor() {
    super();
    this.portalElement = null;
  }

  componentDidMount() {
    const p = document.createElement('div');
    document.body.appendChild(p);
    this.portalElement = p;
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    // Animate fade on mount/unmount
    const duration = 200;
    const styles = `
				.fade-enter { opacity: 0.01; }
				.fade-enter.fade-enter-active { opacity: 1; transition: opacity ${duration}ms; }
				.fade-leave { opacity: 1; }
				.fade-leave.fade-leave-active { opacity: 0.01; transition: opacity ${duration}ms; }
		`;
    (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(_PassContext.default, {
      context: this.context
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", null, styles), /*#__PURE__*/_react.default.createElement(_reactAddonsCssTransitionGroup.default, _extends({
      component: "div",
      transitionName: "fade",
      transitionEnterTimeout: duration,
      transitionLeaveTimeout: duration
    }, this.props)))), this.portalElement);
  }

  componentWillUnmount() {
    document.body.removeChild(this.portalElement);
  }

  render() {
    return null;
  }

}

exports.default = Portal;
Portal.contextTypes = {
  onClose: _react.PropTypes.func
};

},{"../PassContext":52,"react":undefined,"react-addons-css-transition-group":undefined,"react-dom":undefined}],54:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Using window.innerWidth and state instead of CSS media breakpoints
// because we want to render null rather than an empty span. Allowing for
// CSS pseudo classes like :only-child to behave as expected.
// Return true if window + document
const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

class ResponsiveText extends _react.Component {
  constructor() {
    super();
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      windowWidth: canUseDOM ? window.innerWidth : 0
    };
  }

  componentDidMount() {
    if (canUseDOM) {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    }
  }

  componentWillUnmount() {
    if (canUseDOM) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  handleResize() {
    this.setState({
      windowWidth: canUseDOM ? window.innerWidth : 0
    });
  }

  render() {
    const {
      component: Component,
      hiddenLG,
      hiddenMD,
      hiddenSM,
      hiddenXS,
      visibleLG,
      visibleMD,
      visibleSM,
      visibleXS,
      ...props
    } = this.props;
    const {
      windowWidth
    } = this.state;
    let text; // set text value from breakpoint; attempt XS --> LG

    if (windowWidth < _theme.default.breakpointNumeric.mobile) {
      text = visibleXS || hiddenSM || hiddenMD || hiddenLG;
    } else if (windowWidth < _theme.default.breakpointNumeric.tabletPortrait) {
      text = hiddenXS || visibleSM || hiddenMD || hiddenLG;
    } else if (windowWidth < _theme.default.breakpointNumeric.tabletLandscape) {
      text = hiddenXS || hiddenSM || visibleMD || hiddenLG;
    } else {
      text = hiddenXS || hiddenSM || hiddenMD || visibleLG;
    }

    return text ? /*#__PURE__*/_react.default.createElement(Component, props, text) : null;
  }

}

;
ResponsiveText.propTypes = {
  hiddenLG: _react.PropTypes.string,
  hiddenMD: _react.PropTypes.string,
  hiddenSM: _react.PropTypes.string,
  hiddenXS: _react.PropTypes.string,
  visibleLG: _react.PropTypes.string,
  visibleMD: _react.PropTypes.string,
  visibleSM: _react.PropTypes.string,
  visibleXS: _react.PropTypes.string
};
ResponsiveText.defaultProps = {
  component: 'span'
};
module.exports = ResponsiveText;

},{"../../../theme":78,"react":undefined}],55:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ScreenReaderOnly(_ref) {
  let {
    className,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(classes.srOnly, className);
  return /*#__PURE__*/_react.default.createElement("span", props);
}

;
const classes = {
  srOnly: {
    border: 0,
    clip: 'rect(0,0,0,0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: 1
  }
};
module.exports = ScreenReaderOnly;

},{"glamor":undefined,"react":undefined}],56:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

class ScrollLock extends _react.Component {
  constructor() {
    super();
    this.lockCount = 0;
  }

  componentWillMount() {
    if (typeof window === 'undefined') return;
    this.lockCount++;
    if (this.lockCount > 1) return; //	FIXME iOS ignores overflow on body

    try {
      const scrollBarWidth = window.innerWidth - document.body.clientWidth;
      const target = document.body;
      target.style.paddingRight = scrollBarWidth + 'px';
      target.style.overflowY = 'hidden';
    } catch (err) {
      console.error('Failed to find body element. Err:', err);
    }
  }

  componentWillUnmount() {
    if (typeof window === 'undefined' || this.lockCount === 0) return;
    this.lockCount--;
    if (this.lockCount > 0) return; // Still locked
    //	FIXME iOS ignores overflow on body

    try {
      const target = document.body;
      target.style.paddingRight = '';
      target.style.overflowY = '';
    } catch (err) {
      console.error('Failed to find body element. Err:', err);
    }
  }

  render() {
    return null;
  }

}

exports.default = ScrollLock;

},{"react":undefined}],57:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  danger: _theme.default.color.danger,
  default: _theme.default.color.gray80,
  error: _theme.default.color.danger,
  info: _theme.default.color.info,
  primary: _theme.default.color.primary,
  success: _theme.default.color.success,
  warning: _theme.default.color.warning
};

},{"../../../theme":78}],58:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _styles = _interopRequireDefault(require("./styles"));

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SegmentedControl(_ref) {
  let {
    className,
    color,
    cropText,
    equalWidthSegments,
    inline,
    onChange,
    options,
    value,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(_styles.default.control, inline ? _styles.default.control__inline : null, className);
  return /*#__PURE__*/_react.default.createElement("div", props, options.map(opt => {
    const buttonClassName = (0, _glamor.css)(_styles.default.button, opt.disabled ? _styles.default.button__disabled : null, opt.value === value ? _styles.default['button__' + color] : null, cropText ? _styles.default.button__cropText : null, equalWidthSegments ? _styles.default.button__equalWidth : null);
    return /*#__PURE__*/_react.default.createElement("button", {
      className: buttonClassName,
      key: opt.value,
      onClick: !opt.disabled && (() => onChange(opt.value)),
      type: "button",
      title: cropText ? opt.label : null,
      tabIndex: opt.disabled ? '-1' : ''
    }, opt.label);
  }));
}

;
const valuePropShape = [_react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.string];
SegmentedControl.propTypes = {
  color: _react.PropTypes.oneOf(Object.keys(_colors.default)),
  cropText: _react.PropTypes.bool,
  // when `inline && equalWidthSegments` crops to the next largest option length
  equalWidthSegments: _react.PropTypes.bool,
  // only relevant when `inline === false`
  inline: _react.PropTypes.bool,
  onChange: _react.PropTypes.func.isRequired,
  options: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    disabled: _react.PropTypes.bool,
    label: _react.PropTypes.string,
    value: _react.PropTypes.oneOfType(valuePropShape)
  })).isRequired,
  value: _react.PropTypes.oneOfType(valuePropShape)
};
SegmentedControl.defaultProps = {
  color: 'default'
};
module.exports = SegmentedControl;

},{"./colors":57,"./styles":59,"glamor":undefined,"react":undefined}],59:[function(require,module,exports){
"use strict";

var _colors = _interopRequireDefault(require("./colors"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Segmented Control
// ==============================

/* eslint quote-props: ["error", "as-needed"] */
// Prepare variants
const colorVariants = {};
Object.keys(_colors.default).forEach(color => {
  const pseudoStyles = {
    backgroundColor: _colors.default[color],
    color: 'white'
  };
  colorVariants['button__' + color] = {
    backgroundColor: _colors.default[color],
    color: 'white',
    ':hover': pseudoStyles,
    ':focus': pseudoStyles,
    ':active': pseudoStyles
  };
});
module.exports = {
  control: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: _theme.default.input.border.color.default,
    borderRadius: '0.4em',
    display: 'flex',
    fontSize: _theme.default.font.size.small,
    paddingLeft: 1,
    paddingRight: 1
  },
  control__inline: {
    display: 'inline-flex'
  },
  // buttons
  button: {
    background: 'none',
    border: 0,
    borderRadius: '0.25em',
    flexGrow: 1,
    margin: '2px 1px',
    padding: '0.3em 0.9em',
    outline: 0,
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    },
    ':focus': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    },
    ':active': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
  },
  button__equalWidth: {
    flex: '1 1 0'
  },
  button__cropText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  button__disabled: {
    opacity: 0.6,
    pointerEvents: 'none'
  },
  // colors
  ...colorVariants
};

},{"../../../theme":78,"./colors":57}],60:[function(require,module,exports){
"use strict";

module.exports = ['danger', 'default', 'inverted', 'primary', 'success', 'warning'];

},{}],61:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _styles = _interopRequireDefault(require("./styles"));

var _ScreenReaderOnly = _interopRequireDefault(require("../ScreenReaderOnly"));

var _colors = _interopRequireDefault(require("./colors"));

var _sizes = _interopRequireDefault(require("./sizes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Spinner(_ref) {
  let {
    className,
    size,
    color,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(_styles.default.base, _styles.default[size], className);
  return /*#__PURE__*/_react.default.createElement("div", props, /*#__PURE__*/_react.default.createElement("span", {
    className: `${(0, _glamor.css)(_styles.default.dot, _styles.default['size__' + size], _styles.default['color__' + color], _styles.default.dot__first)}`
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: `${(0, _glamor.css)(_styles.default.dot, _styles.default['size__' + size], _styles.default['color__' + color], _styles.default.dot__second)}`
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: `${(0, _glamor.css)(_styles.default.dot, _styles.default['size__' + size], _styles.default['color__' + color], _styles.default.dot__third)}`
  }), /*#__PURE__*/_react.default.createElement(_ScreenReaderOnly.default, null, "Loading..."));
}

;
Spinner.propTypes = {
  color: _react.PropTypes.oneOf(_colors.default),
  size: _react.PropTypes.oneOf(_sizes.default)
};
Spinner.defaultProps = {
  size: 'medium',
  color: 'default'
};
module.exports = Spinner;

},{"../ScreenReaderOnly":55,"./colors":60,"./sizes":62,"./styles":63,"glamor":undefined,"react":undefined}],62:[function(require,module,exports){
"use strict";

module.exports = ['small', 'medium', 'large'];

},{}],63:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _theme = _interopRequireDefault(require("../../../theme"));

var _colors = _interopRequireDefault(require("./colors"));

var _sizes = _interopRequireDefault(require("./sizes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Spinner
// ==============================
// Prepare variants
const colorVariants = {};

_colors.default.forEach(color => {
  colorVariants[`color__${color}`] = {
    backgroundColor: _theme.default.spinner.color[color]
  };
}); // Prepare sizes


const sizeVariants = {};

_sizes.default.forEach(size => {
  sizeVariants[`size__${size}`] = {
    fontSize: _theme.default.spinner.size[size]
  };
}); // Declare animation keyframes


const keyframes = _glamor.compose.keyframes('pulse', {
  '0%, 80%, 100%': {
    opacity: 0
  },
  '40%': {
    opacity: 1
  }
});

module.exports = {
  base: {
    display: 'inline-block',
    lineHeight: 1,
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '5em'
  },
  small: {
    fontSize: 4
  },
  medium: {
    fontSize: 8
  },
  large: {
    fontSize: 16
  },
  // text
  text: {
    border: 0,
    clip: 'rect(0,0,0,0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: 1
  },
  // dots
  dot: {
    animationName: keyframes,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    borderRadius: '1em',
    display: 'inline-block',
    height: '1em',
    verticalAlign: 'top',
    width: '1em'
  },
  dot__second: {
    animationDelay: '160ms',
    marginLeft: '1em'
  },
  dot__third: {
    animationDelay: '320ms',
    marginLeft: '1em'
  },
  // Colors
  ...colorVariants,
  // Sizes
  ...sizeVariants
};

},{"../../../theme":78,"./colors":60,"./sizes":62,"glamor":undefined}],64:[function(require,module,exports){
"use strict";

module.exports = {
  Alert: require('./Alert'),
  BlankState: require('./BlankState'),
  Button: require('./Button'),
  Center: require('./Center'),
  Chip: require('./Chip'),
  Container: require('./Container'),
  DropdownButton: require('./DropdownButton'),
  Form: require('./Form'),
  FormField: require('./FormField'),
  FormInput: require('./FormInput'),
  FormLabel: require('./FormLabel'),
  FormNote: require('./FormNote'),
  FormSelect: require('./FormSelect'),
  Glyph: require('./Glyph'),
  GlyphButton: require('./GlyphButton'),
  GlyphField: require('./GlyphField'),
  Grid: require('./Grid'),
  InlineGroup: require('./InlineGroup'),
  InlineGroupSection: require('./InlineGroupSection'),
  LabelledControl: require('./LabelledControl'),
  LoadingButton: require('./LoadingButton'),
  Modal: require('./Modal'),
  Pagination: require('./Pagination'),
  ResponsiveText: require('./ResponsiveText'),
  ScreenReaderOnly: require('./ScreenReaderOnly'),
  SegmentedControl: require('./SegmentedControl'),
  Spinner: require('./Spinner')
};

},{"./Alert":2,"./BlankState":4,"./Button":5,"./Center":7,"./Chip":10,"./Container":12,"./DropdownButton":15,"./Form":27,"./FormField":16,"./FormInput":18,"./FormLabel":21,"./FormNote":23,"./FormSelect":25,"./Glyph":32,"./GlyphButton":29,"./GlyphField":30,"./Grid":38,"./InlineGroup":41,"./InlineGroupSection":39,"./LabelledControl":42,"./LoadingButton":44,"./Modal":49,"./Pagination":50,"./ResponsiveText":54,"./ScreenReaderOnly":55,"./SegmentedControl":58,"./Spinner":61}],65:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _elemental = require("../elemental");

var _string = require("../../utils/string");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This renders alerts for API success and error responses.
 *   Error format: {
 *     error: 'validation errors' // The unique error type identifier
 *     detail: { ... } // Optional details specific to that error type
 *   }
 *   Success format: {
 *     success: 'item updated', // The unique success type identifier
 *     details: { ... } // Optional details specific to that success type
 *   }
 *   Eventually success and error responses should be handled individually
 *   based on their type. For example: validation errors should be displayed next
 *   to each invalid field and signin errors should promt the user to sign in.
 */
var AlertMessages = _react.default.createClass({
  displayName: 'AlertMessages',
  propTypes: {
    alerts: _react.default.PropTypes.shape({
      error: _react.default.PropTypes.Object,
      success: _react.default.PropTypes.Object
    })
  },

  getDefaultProps() {
    return {
      alerts: {}
    };
  },

  renderValidationErrors() {
    let errors = this.props.alerts.error.detail;

    if (errors.name === 'ValidationError') {
      errors = errors.errors;
    }

    let errorCount = Object.keys(errors).length;
    let alertContent;
    let messages = Object.keys(errors).map(path => {
      if (errorCount > 1) {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: path
        }, (0, _string.upcase)(errors[path].error || errors[path].message));
      } else {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: path
        }, (0, _string.upcase)(errors[path].error || errors[path].message));
      }
    });

    if (errorCount > 1) {
      alertContent = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", null, "There were ", errorCount, " errors creating the new item:"), /*#__PURE__*/_react.default.createElement("ul", null, messages));
    } else {
      alertContent = messages;
    }

    return /*#__PURE__*/_react.default.createElement(_elemental.Alert, {
      color: "danger"
    }, alertContent);
  },

  render() {
    let {
      error,
      success
    } = this.props.alerts;

    if (error) {
      // Render error alerts
      switch (error.error) {
        case 'validation errors':
          return this.renderValidationErrors();

        case 'error':
          if (error.detail.name === 'ValidationError') {
            return this.renderValidationErrors();
          } else {
            return /*#__PURE__*/_react.default.createElement(_elemental.Alert, {
              color: "danger"
            }, (0, _string.upcase)(error.error));
          }

        default:
          return /*#__PURE__*/_react.default.createElement(_elemental.Alert, {
            color: "danger"
          }, (0, _string.upcase)(error.error));
      }
    }

    if (success) {
      // Render success alerts
      return /*#__PURE__*/_react.default.createElement(_elemental.Alert, {
        color: "success"
      }, (0, _string.upcase)(success.success));
    }

    return null; // No alerts, render nothing
  }

});

module.exports = AlertMessages;

},{"../../utils/string":84,"../elemental":64,"react":undefined}],66:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _vkey = _interopRequireDefault(require("vkey"));

var _AlertMessages = _interopRequireDefault(require("./AlertMessages"));

var _FieldTypes = require("FieldTypes");

var _InvalidFieldType = _interopRequireDefault(require("./InvalidFieldType"));

var _elemental = require("../elemental");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The form that's visible when "Create <ItemName>" is clicked on either the
 * List screen or the Item screen
 */
const CreateForm = _react.default.createClass({
  displayName: 'CreateForm',
  propTypes: {
    err: _react.default.PropTypes.object,
    isOpen: _react.default.PropTypes.bool,
    list: _react.default.PropTypes.object,
    onCancel: _react.default.PropTypes.func,
    onCreate: _react.default.PropTypes.func
  },

  getDefaultProps() {
    return {
      err: null,
      isOpen: false
    };
  },

  getInitialState() {
    // Set the field values to their default values when first rendering the
    // form. (If they have a default value, that is)
    var values = {};
    Object.keys(this.props.list.fields).forEach(key => {
      var field = this.props.list.fields[key];
      var FieldComponent = _FieldTypes.Fields[field.type];
      values[field.path] = FieldComponent.getDefaultValue(field);
    });
    return {
      values: values,
      alerts: {}
    };
  },

  componentDidMount() {
    document.body.addEventListener('keyup', this.handleKeyPress, false);
  },

  componentWillUnmount() {
    document.body.removeEventListener('keyup', this.handleKeyPress, false);
  },

  handleKeyPress(evt) {
    if (_vkey.default[evt.keyCode] === '<escape>') {
      this.props.onCancel();
    }
  },

  // Handle input change events
  handleChange(event) {
    var values = (0, _objectAssign.default)({}, this.state.values);
    values[event.path] = event.value;
    this.setState({
      values: values
    });
  },

  // Set the props of a field
  getFieldProps(field) {
    var props = (0, _objectAssign.default)({}, field);
    props.value = this.state.values[field.path];
    props.values = this.state.values;
    props.onChange = this.handleChange;
    props.mode = 'create';
    props.key = field.path;
    return props;
  },

  // Create a new item when the form is submitted
  submitForm(event) {
    event.preventDefault();
    const createForm = event.target;
    const formData = new FormData(createForm);
    this.props.list.createItem(formData, (err, data) => {
      if (data) {
        if (this.props.onCreate) {
          this.props.onCreate(data);
        } else {
          // Clear form
          this.setState({
            values: {},
            alerts: {
              success: {
                success: 'Item created'
              }
            }
          });
        }
      } else {
        if (!err) {
          err = {
            error: 'connection error'
          };
        } // If we get a database error, show the database error message
        // instead of only saying "Database error"


        if (err.error === 'database error') {
          err.error = err.detail.errmsg;
        }

        this.setState({
          alerts: {
            error: err
          }
        });
      }
    });
  },

  // Render the form itself
  renderForm() {
    if (!this.props.isOpen) return;
    var form = [];
    var list = this.props.list;
    var nameField = this.props.list.nameField;
    var focusWasSet; // If the name field is an initial one, we need to render a proper
    // input for it

    if (list.nameIsInitial) {
      var nameFieldProps = this.getFieldProps(nameField);
      nameFieldProps.autoFocus = focusWasSet = true;

      if (nameField.type === 'text') {
        nameFieldProps.className = 'item-name-field';
        nameFieldProps.placeholder = nameField.label;
        nameFieldProps.label = '';
      }

      form.push( /*#__PURE__*/_react.default.createElement(_FieldTypes.Fields[nameField.type], nameFieldProps));
    } // Render inputs for all initial fields


    Object.keys(list.initialFields).forEach(key => {
      var field = list.fields[list.initialFields[key]]; // If there's something weird passed in as field type, render the
      // invalid field type component

      if (typeof _FieldTypes.Fields[field.type] !== 'function') {
        form.push( /*#__PURE__*/_react.default.createElement(_InvalidFieldType.default, {
          type: field.type,
          path: field.path,
          key: field.path
        }));
        return;
      } // Get the props for the input field


      var fieldProps = this.getFieldProps(field); // If there was no focusRef set previously, set the current field to
      // be the one to be focussed. Generally the first input field, if
      // there's an initial name field that takes precedence.

      if (!focusWasSet) {
        fieldProps.autoFocus = focusWasSet = true;
      }

      form.push( /*#__PURE__*/_react.default.createElement(_FieldTypes.Fields[field.type], fieldProps));
    });
    return /*#__PURE__*/_react.default.createElement(_elemental.Form, {
      layout: "horizontal",
      onSubmit: this.submitForm
    }, /*#__PURE__*/_react.default.createElement(_elemental.Modal.Header, {
      text: 'Create a new ' + list.singular,
      showCloseButton: true
    }), /*#__PURE__*/_react.default.createElement(_elemental.Modal.Body, null, /*#__PURE__*/_react.default.createElement(_AlertMessages.default, {
      alerts: this.state.alerts
    }), form), /*#__PURE__*/_react.default.createElement(_elemental.Modal.Footer, null, /*#__PURE__*/_react.default.createElement(_elemental.Button, {
      color: "success",
      type: "submit",
      "data-button-type": "submit"
    }, "Create"), /*#__PURE__*/_react.default.createElement(_elemental.Button, {
      variant: "link",
      color: "cancel",
      "data-button-type": "cancel",
      onClick: this.props.onCancel
    }, "Cancel")));
  },

  render() {
    return /*#__PURE__*/_react.default.createElement(_elemental.Modal.Dialog, {
      isOpen: this.props.isOpen,
      onClose: this.props.onCancel,
      backdropClosesModal: true
    }, this.renderForm());
  }

});

module.exports = CreateForm;

},{"../elemental":64,"./AlertMessages":65,"./InvalidFieldType":67,"FieldTypes":"FieldTypes","object-assign":115,"react":undefined,"vkey":undefined}],67:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders an "Invalid Field Type" error
 */
const InvalidFieldType = function (props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-danger"
  }, "Invalid field type ", /*#__PURE__*/_react.default.createElement("strong", null, props.type), " at path ", /*#__PURE__*/_react.default.createElement("strong", null, props.path));
};

InvalidFieldType.propTypes = {
  path: _react.default.PropTypes.string,
  type: _react.default.PropTypes.string
};
module.exports = InvalidFieldType;

},{"react":undefined}],68:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _blacklist = _interopRequireDefault(require("blacklist"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PopoutBody = _react.default.createClass({
  displayName: 'PopoutBody',
  propTypes: {
    children: _react.default.PropTypes.node.isRequired,
    className: _react.default.PropTypes.string,
    scrollable: _react.default.PropTypes.bool
  },

  render() {
    const className = (0, _classnames.default)('Popout__body', {
      'Popout__scrollable-area': this.props.scrollable
    }, this.props.className);
    const props = (0, _blacklist.default)(this.props, 'className', 'scrollable');
    return /*#__PURE__*/_react.default.createElement("div", _extends({
      className: className
    }, props));
  }

});

module.exports = PopoutBody;

},{"blacklist":undefined,"classnames":undefined,"react":undefined}],69:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a footer for a popout
 */
const BUTTON_BASE_CLASSNAME = 'Popout__footer__button Popout__footer__button--';

const PopoutFooter = _react.default.createClass({
  displayName: 'PopoutFooter',
  propTypes: {
    children: _react.default.PropTypes.node,
    primaryButtonAction: _react.default.PropTypes.func,
    primaryButtonIsSubmit: _react.default.PropTypes.bool,
    primaryButtonLabel: _react.default.PropTypes.string,
    secondaryButtonAction: _react.default.PropTypes.func,
    secondaryButtonLabel: _react.default.PropTypes.string
  },

  // Render a primary button
  renderPrimaryButton() {
    if (!this.props.primaryButtonLabel) return null;
    return /*#__PURE__*/_react.default.createElement("button", {
      type: this.props.primaryButtonIsSubmit ? 'submit' : 'button',
      className: BUTTON_BASE_CLASSNAME + 'primary',
      onClick: this.props.primaryButtonAction
    }, this.props.primaryButtonLabel);
  },

  // Render a secondary button
  renderSecondaryButton() {
    if (!this.props.secondaryButtonAction || !this.props.secondaryButtonLabel) return null;
    return /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: BUTTON_BASE_CLASSNAME + 'secondary',
      onClick: this.props.secondaryButtonAction
    }, this.props.secondaryButtonLabel);
  },

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "Popout__footer"
    }, this.renderPrimaryButton(), this.renderSecondaryButton(), this.props.children);
  }

});

module.exports = PopoutFooter;

},{"react":undefined}],70:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactAddonsCssTransitionGroup = _interopRequireDefault(require("react-addons-css-transition-group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a header for a popout
 */
const PopoutHeader = _react.default.createClass({
  displayName: 'PopoutHeader',
  propTypes: {
    leftAction: _react.default.PropTypes.func,
    leftIcon: _react.default.PropTypes.string,
    title: _react.default.PropTypes.string.isRequired,
    transitionDirection: _react.default.PropTypes.oneOf(['next', 'prev'])
  },

  render() {
    // If we have a left action and a left icon, render a header button
    var headerButton = this.props.leftAction && this.props.leftIcon ? /*#__PURE__*/_react.default.createElement("button", {
      key: 'button_' + this.props.transitionDirection,
      type: "button",
      className: 'Popout__header__button octicon octicon-' + this.props.leftIcon,
      onClick: this.props.leftAction
    }) : null; // If we have a title, render it

    var headerTitle = this.props.title ? /*#__PURE__*/_react.default.createElement("span", {
      key: 'title_' + this.props.transitionDirection,
      className: "Popout__header__label"
    }, this.props.title) : null;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "Popout__header"
    }, /*#__PURE__*/_react.default.createElement(_reactAddonsCssTransitionGroup.default, {
      transitionName: "Popout__header__button",
      transitionEnterTimeout: 200,
      transitionLeaveTimeout: 200
    }, headerButton), /*#__PURE__*/_react.default.createElement(_reactAddonsCssTransitionGroup.default, {
      transitionName: 'Popout__pane-' + this.props.transitionDirection,
      transitionEnterTimeout: 360,
      transitionLeaveTimeout: 360
    }, headerTitle));
  }

});

module.exports = PopoutHeader;

},{"react":undefined,"react-addons-css-transition-group":undefined}],71:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _blacklist = _interopRequireDefault(require("blacklist"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const PopoutList = _react.default.createClass({
  displayName: 'PopoutList',
  propTypes: {
    children: _react.default.PropTypes.node.isRequired,
    className: _react.default.PropTypes.string
  },

  render() {
    const className = (0, _classnames.default)('PopoutList', this.props.className);
    const props = (0, _blacklist.default)(this.props, 'className');
    return /*#__PURE__*/_react.default.createElement("div", _extends({
      className: className
    }, props));
  }

});

module.exports = PopoutList; // expose the child to the top level export

module.exports.Item = require('./PopoutListItem');
module.exports.Heading = require('./PopoutListHeading');

},{"./PopoutListHeading":72,"./PopoutListItem":73,"blacklist":undefined,"classnames":undefined,"react":undefined}],72:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _blacklist = _interopRequireDefault(require("blacklist"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PopoutListHeading = _react.default.createClass({
  displayName: 'PopoutListHeading',
  propTypes: {
    children: _react.default.PropTypes.node.isRequired,
    className: _react.default.PropTypes.string
  },

  render() {
    const className = (0, _classnames.default)('PopoutList__heading', this.props.className);
    const props = (0, _blacklist.default)(this.props, 'className');
    return /*#__PURE__*/_react.default.createElement("div", _extends({
      className: className
    }, props));
  }

});

module.exports = PopoutListHeading;

},{"blacklist":undefined,"classnames":undefined,"react":undefined}],73:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _blacklist = _interopRequireDefault(require("blacklist"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PopoutListItem = _react.default.createClass({
  displayName: 'PopoutListItem',
  propTypes: {
    icon: _react.default.PropTypes.string,
    iconHover: _react.default.PropTypes.string,
    isSelected: _react.default.PropTypes.bool,
    label: _react.default.PropTypes.string.isRequired,
    onClick: _react.default.PropTypes.func
  },

  getInitialState() {
    return {
      hover: false
    };
  },

  hover() {
    this.setState({
      hover: true
    });
  },

  unhover() {
    this.setState({
      hover: false
    });
  },

  // Render an icon
  renderIcon() {
    if (!this.props.icon) return null;
    const icon = this.state.hover && this.props.iconHover ? this.props.iconHover : this.props.icon;
    const iconClassname = (0, _classnames.default)('PopoutList__item__icon octicon', 'octicon-' + icon);
    return /*#__PURE__*/_react.default.createElement("span", {
      className: iconClassname
    });
  },

  render() {
    const itemClassname = (0, _classnames.default)('PopoutList__item', {
      'is-selected': this.props.isSelected
    });
    const props = (0, _blacklist.default)(this.props, 'className', 'icon', 'iconHover', 'isSelected', 'label');
    return /*#__PURE__*/_react.default.createElement("button", _extends({
      type: "button",
      title: this.props.label,
      className: itemClassname,
      onFocus: this.hover,
      onBlur: this.unhover,
      onMouseOver: this.hover,
      onMouseOut: this.unhover
    }, props), this.renderIcon(), /*#__PURE__*/_react.default.createElement("span", {
      className: "PopoutList__item__label"
    }, this.props.label));
  }

});

module.exports = PopoutListItem;

},{"blacklist":undefined,"classnames":undefined,"react":undefined}],74:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _blacklist = _interopRequireDefault(require("blacklist"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PopoutPane = _react.default.createClass({
  displayName: 'PopoutPane',
  propTypes: {
    children: _react.default.PropTypes.node.isRequired,
    className: _react.default.PropTypes.string,
    onLayout: _react.default.PropTypes.func
  },

  getDefaultProps() {
    return {
      onLayout: () => {}
    };
  },

  componentDidMount() {
    this.props.onLayout(this.refs.el.offsetHeight);
  },

  render() {
    const className = (0, _classnames.default)('Popout__pane', this.props.className);
    const props = (0, _blacklist.default)(this.props, 'className', 'onLayout');
    return /*#__PURE__*/_react.default.createElement("div", _extends({
      ref: "el",
      className: className
    }, props));
  }

});

module.exports = PopoutPane;

},{"blacklist":undefined,"classnames":undefined,"react":undefined}],75:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _Portal = _interopRequireDefault(require("../Portal"));

var _reactAddonsCssTransitionGroup = _interopRequireDefault(require("react-addons-css-transition-group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Popout component.
 * One can also add a Header (Popout/Header), a Footer
 * (Popout/Footer), a Body (Popout/Body) and a Pan (Popout/Pane).
 */
const SIZES = {
  arrowHeight: 12,
  arrowWidth: 16,
  horizontalMargin: 20
};

var Popout = _react.default.createClass({
  displayName: 'Popout',
  propTypes: {
    isOpen: _react.default.PropTypes.bool,
    onCancel: _react.default.PropTypes.func,
    onSubmit: _react.default.PropTypes.func,
    relativeToID: _react.default.PropTypes.string.isRequired,
    width: _react.default.PropTypes.number
  },

  getDefaultProps() {
    return {
      width: 320
    };
  },

  getInitialState() {
    return {};
  },

  componentWillReceiveProps(nextProps) {
    if (!this.props.isOpen && nextProps.isOpen) {
      window.addEventListener('resize', this.calculatePosition);
      this.calculatePosition(nextProps.isOpen);
    } else if (this.props.isOpen && !nextProps.isOpen) {
      window.removeEventListener('resize', this.calculatePosition);
    }
  },

  getPortalDOMNode() {
    return this.refs.portal.getPortalDOMNode();
  },

  calculatePosition(isOpen) {
    if (!isOpen) return;
    let posNode = document.getElementById(this.props.relativeToID);
    const pos = {
      top: 0,
      left: 0,
      width: posNode.offsetWidth,
      height: posNode.offsetHeight
    };

    while (posNode.offsetParent) {
      pos.top += posNode.offsetTop;
      pos.left += posNode.offsetLeft;
      posNode = posNode.offsetParent;
    }

    let leftOffset = Math.max(pos.left + pos.width / 2 - this.props.width / 2, SIZES.horizontalMargin);
    let topOffset = pos.top + pos.height + SIZES.arrowHeight;
    var spaceOnRight = window.innerWidth - (leftOffset + this.props.width + SIZES.horizontalMargin);

    if (spaceOnRight < 0) {
      leftOffset = leftOffset + spaceOnRight;
    }

    const arrowLeftOffset = leftOffset === SIZES.horizontalMargin ? pos.left + pos.width / 2 - SIZES.arrowWidth / 2 - SIZES.horizontalMargin : null;
    const newStateAvaliable = this.state.leftOffset !== leftOffset || this.state.topOffset !== topOffset || this.state.arrowLeftOffset !== arrowLeftOffset;

    if (newStateAvaliable) {
      this.setState({
        leftOffset: leftOffset,
        topOffset: topOffset,
        arrowLeftOffset: arrowLeftOffset
      });
    }
  },

  renderPopout() {
    if (!this.props.isOpen) return null;
    const {
      width
    } = this.props;
    const {
      arrowLeftOffset,
      leftOffset: left,
      topOffset: top
    } = this.state;
    const arrowStyles = arrowLeftOffset ? {
      left: 0,
      marginLeft: arrowLeftOffset
    } : null;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "Popout",
      style: {
        left,
        top,
        width
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "Popout__arrow",
      style: arrowStyles
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "Popout__inner"
    }, this.props.children));
  },

  renderBlockout() {
    if (!this.props.isOpen) return;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "blockout",
      onClick: this.props.onCancel
    });
  },

  render() {
    return /*#__PURE__*/_react.default.createElement(_Portal.default, {
      className: "Popout-wrapper",
      ref: "portal"
    }, /*#__PURE__*/_react.default.createElement(_reactAddonsCssTransitionGroup.default, {
      transitionEnterTimeout: 200,
      transitionLeaveTimeout: 200,
      transitionName: "Popout"
    }, this.renderPopout()), this.renderBlockout());
  }

});

module.exports = Popout; // expose the child to the top level export

module.exports.Header = require('./PopoutHeader');
module.exports.Body = require('./PopoutBody');
module.exports.Footer = require('./PopoutFooter');
module.exports.Pane = require('./PopoutPane');

},{"../Portal":76,"./PopoutBody":68,"./PopoutFooter":69,"./PopoutHeader":70,"./PopoutPane":74,"react":undefined,"react-addons-css-transition-group":undefined}],76:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used by the Popout component and the Lightbox component of the fields for
 * popouts. Renders a non-react DOM node.
 */
module.exports = _react.default.createClass({
  displayName: 'Portal',
  portalElement: null,

  // eslint-disable-line react/sort-comp
  componentDidMount() {
    const el = document.createElement('div');
    document.body.appendChild(el);
    this.portalElement = el;
    this.componentDidUpdate();
  },

  componentWillUnmount() {
    document.body.removeChild(this.portalElement);
  },

  componentDidUpdate() {
    _reactDom.default.render( /*#__PURE__*/_react.default.createElement("div", this.props), this.portalElement);
  },

  getPortalDOMNode() {
    return this.portalElement;
  },

  render() {
    return null;
  }

});

},{"react":undefined,"react-dom":undefined}],77:[function(require,module,exports){
"use strict";

/**
 * Constants
 */
// breakpoints
exports.breakpoint = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200
}; // border radii

exports.borderRadius = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 32
}; // color

exports.color = {
  appDanger: '#d64242',
  appInfo: '#56cdfc',
  appPrimary: '#1385e5',
  appSuccess: '#34c240',
  appWarning: '#fa9f47'
}; // spacing

exports.spacing = {
  xs: 5,
  sm: 10,
  md: 20,
  lg: 40,
  xl: 80
}; // table constants

exports.TABLE_CONTROL_COLUMN_WIDTH = 26; // icon + padding

exports.NETWORK_ERROR_RETRY_DELAY = 500; // in ms

},{}],78:[function(require,module,exports){
"use strict";

/* eslint-disable key-spacing */
const theme = {};

const {
  blend,
  darken,
  fade,
  lighten
} = require('./utils/color'); // ==============================
// COMMON
// ==============================
// breakpoint


theme.breakpointNumeric = {
  mobile: 480,
  tabletPortrait: 768,
  tabletLandscape: 992,
  desktop: 1200
};
theme.breakpoint = {
  tabletPortraitMin: theme.breakpointNumeric.mobile + 1 + 'px',
  tabletLandscapeMin: theme.breakpointNumeric.tabletPortrait + 1 + 'px',
  desktopMin: theme.breakpointNumeric.tabletLandscape + 1 + 'px',
  desktopLargeMin: theme.breakpointNumeric.desktop + 1 + 'px',
  mobileMax: theme.breakpointNumeric.mobile + 'px',
  tabletPortraitMax: theme.breakpointNumeric.tabletPortrait + 'px',
  tabletLandscapeMax: theme.breakpointNumeric.tabletLandscape + 'px',
  desktopMax: theme.breakpointNumeric.desktop + 'px'
}; // container

theme.container = {
  gutter: 20,
  size: {
    small: 750,
    medium: 970,
    large: 1170
  }
}; // color

theme.color = {
  body: '#fafafa',
  link: '#1385e5',
  linkHover: lighten('#1385e5', 10),
  text: '#1A1A1A',
  // contextual
  success: '#34c240',
  create: '#34c240',
  // alias for success
  primary: '#1385e5',
  info: '#1385e5',
  // alias for primary
  warning: '#FA3',
  danger: '#d64242',
  error: '#d64242',
  // alias for danger
  // neutrals
  gray90: '#1A1A1A',
  gray80: '#333',
  gray70: '#4D4D4D',
  gray60: '#666',
  gray50: '#7F7F7F',
  gray40: '#999',
  gray30: '#B3B3B3',
  gray20: '#CCC',
  gray15: '#D9D9D9',
  gray10: '#E5E5E5',
  gray05: '#F2F2F2',
  // social
  facebook: '#3B5998',
  google: '#DC4E41',
  instagram: '#3f729b',
  pinterest: '#bd081c',
  tumblr: '#35465c',
  twitter: '#55ACEE',
  youtube: '#cd201f',
  vimeo: '#1ab7ea'
}; // border radii

theme.borderRadius = {
  small: '0.125rem',
  default: '0.3rem',
  large: '0.5rem'
}; // spacing

theme.spacing = {
  xsmall: 5,
  small: 10,
  default: 20,
  large: 30,
  xlarge: 40,
  xxlarge: 60
}; // ==============================
// ELEMENTAL SPECIFIC
// ==============================
// button

theme.button = {
  borderRadius: theme.borderRadius.default,
  borderWidth: 1,
  font: {
    weight: 500
  },
  paddingHorizontal: '1em',
  default: {
    bgColor: theme.color.primary,
    borderColor: blend(theme.color.primary, theme.color.body, 60),
    textColor: theme.color.primary
  },
  primary: {
    bgColor: theme.color.primary,
    borderColor: blend(theme.color.primary, theme.color.body, 60),
    textColor: theme.color.primary
  },
  success: {
    bgColor: theme.color.success,
    borderColor: blend(theme.color.success, theme.color.body, 60),
    textColor: theme.color.success
  },
  warning: {
    bgColor: theme.color.warning,
    borderColor: blend(theme.color.warning, theme.color.body, 60),
    textColor: theme.color.warning
  },
  danger: {
    bgColor: theme.color.danger,
    borderColor: blend(theme.color.danger, theme.color.body, 60),
    textColor: theme.color.danger
  }
}; // blank state

theme.blankstate = {
  background: darken(theme.color.body, 4),
  borderRadius: theme.borderRadius.default,
  color: theme.color.gray40,
  paddingHorizontal: '2em',
  paddingVertical: '4em'
}; // font

theme.font = {
  family: {
    mono: 'Menlo, Monaco, Consolas, "Courier New", monospace',
    sansSerif: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    serif: 'Georgia, Times New Roman, Times, serif'
  },
  size: {
    xxsmall: '0.65rem',
    xsmall: '0.75rem',
    small: '0.85rem',
    default: '1rem',
    medium: '1.2rem',
    large: '1.6rem',
    xlarge: '2.4rem',
    xxlarge: '3.2rem'
  }
}; // form

theme.form = {
  label: {
    color: theme.color.gray50,
    fontSize: '1rem',
    fontWeight: 'normal',
    width: 180
  },
  note: {
    color: theme.color.gray40,
    fontSize: '0.9em'
  }
}; // component

theme.component = {
  lineHeight: '2.3em',
  height: '2.4em',
  padding: '1em'
}; // input

theme.input = {
  background: {
    default: 'white',
    disabled: '#fafafa',
    noedit: darken(theme.color.body, 2)
  },
  placeholderColor: '#aaa',
  lineHeight: theme.component.lineHeight,
  height: theme.component.height,
  border: {
    color: {
      default: '#ccc',
      focus: theme.color.info,
      hover: '#bbb',
      noedit: darken(theme.color.body, 8)
    },
    radius: theme.borderRadius.default,
    width: 1
  },
  boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
  boxShadowFocus: `inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px ${fade(theme.color.info, 10)}`,
  paddingHorizontal: '.75em'
}; // select

theme.select = {
  boxShadow: '0 1px 1px rgba(0, 0, 0, 0.075)'
}; // alert

theme.alert = {
  padding: '0.75em  1em',
  margin: '0 0 1em',
  borderWidth: 1,
  borderRadius: theme.borderRadius.default,
  color: {
    danger: {
      background: fade(theme.color.danger, 10),
      border: fade(theme.color.danger, 10),
      text: theme.color.danger
    },
    info: {
      background: fade(theme.color.primary, 10),
      border: fade(theme.color.primary, 10),
      text: theme.color.primary
    },
    success: {
      background: fade(theme.color.success, 10),
      border: fade(theme.color.success, 10),
      text: theme.color.success
    },
    warning: {
      background: fade(theme.color.warning, 10),
      border: fade(theme.color.warning, 10),
      text: theme.color.warning
    }
  }
}; // glyph

theme.glyph = {
  color: {
    danger: theme.color.danger,
    inherit: 'inherit',
    inverted: 'white',
    primary: theme.color.primary,
    success: theme.color.success,
    warning: theme.color.warning
  },
  size: {
    small: 16,
    medium: 32,
    large: 64
  }
}; // modal

theme.modal = {
  background: 'rgba(0, 0, 0, 0.8)',
  zIndex: 100,
  padding: {
    dialog: {
      horizontal: '1em',
      vertical: 0
    },
    body: {
      horizontal: 0,
      vertical: '1em'
    },
    footer: {
      horizontal: 0,
      vertical: '1em'
    },
    header: {
      horizontal: 0,
      vertical: '0.6em'
    }
  }
}; // pagination

theme.pagination = {
  color: theme.color.gray60,
  hover: {
    background: 'white',
    border: 'rgba(0, 0, 0, 0.1)',
    color: theme.color.gray60
  },
  selected: {
    background: 'rgba(0, 0, 0, 0.05)',
    border: 'transparent',
    color: theme.color.gray60
  },
  disabled: {
    background: 'transparent',
    color: theme.color.gray40
  }
}; // spinner

theme.spinner = {
  color: {
    danger: theme.color.danger,
    default: theme.color.gray40,
    inverted: 'white',
    primary: theme.color.primary,
    success: theme.color.success,
    warning: theme.color.warning
  },
  size: {
    small: 4,
    medium: 8,
    large: 16
  }
};
module.exports = theme;

},{"./utils/color":80}],79:[function(require,module,exports){
"use strict";

/**
 * Helper method to handle List operations, e.g. creating items, deleting items,
 * getting information about those lists, etc.
 */
const listToArray = require('list-to-array');

const qs = require('qs');

const xhr = require('xhr');

const assign = require('object-assign'); // Filters for truthy elements in an array


const truthy = i => i;
/**
 * Get the columns of a list, structured by fields and headings
 *
 * @param  {Object} list The list we want the columns of
 *
 * @return {Array}       The columns
 */


function getColumns(list) {
  return list.uiElements.map(col => {
    if (col.type === 'heading') {
      return {
        type: 'heading',
        content: col.content
      };
    } else {
      var field = list.fields[col.field];
      return field ? {
        type: 'field',
        field: field,
        title: field.label,
        path: field.path
      } : null;
    }
  }).filter(truthy);
}
/**
 * Make an array of filters an object keyed by the filtering path
 *
 * @param  {Array} filterArray The array of filters
 *
 * @return {Object}            The corrected filters, keyed by path
 */


function getFilters(filterArray) {
  var filters = {};
  filterArray.forEach(filter => {
    filters[filter.field.path] = filter.value;
  });
  return filters;
}

;
/**
 * Get the sorting string for the URI
 *
 * @param  {Array} sort.paths The paths we want to sort
 *
 * @return {String}           All the sorting queries we want as a string
 */

function getSortString(sort) {
  return sort.paths.map(i => {
    // If we want to sort inverted, we prefix a "-" before the sort path
    return i.invert ? '-' + i.path : i.path;
  }).filter(truthy).join(',');
}

;
/**
 * Build a query string from a bunch of options
 */

function buildQueryString(options) {
  const query = {};
  if (options.search) query.search = options.search;
  if (options.filters.length) query.filters = JSON.stringify(getFilters(options.filters));
  if (options.columns) query.fields = options.columns.map(i => i.path).join(',');
  if (options.page && options.page.size) query.limit = options.page.size;
  if (options.page && options.page.index > 1) query.skip = (options.page.index - 1) * options.page.size;
  if (options.sort) query.sort = getSortString(options.sort);
  query.expandRelationshipFields = true;
  return '?' + qs.stringify(query);
}

;
/**
 * The main list helper class
 *
 * @param {Object} options
 */

const List = function (options) {
  // TODO these options are possibly unused
  assign(this, options);
  this.columns = getColumns(this);
  this.expandedDefaultColumns = this.expandColumns(this.defaultColumns);
  this.defaultColumnPaths = this.expandedDefaultColumns.map(i => i.path).join(',');
};
/**
 * Create an item via the API
 *
 * @param  {FormData} formData The submitted form data
 * @param  {Function} callback Called after the API call
 */


List.prototype.createItem = function (formData, callback) {
  xhr({
    url: `${Keystone.adminPath}/api/${this.path}/create`,
    responseType: 'json',
    method: 'POST',
    headers: assign({}, Keystone.csrf.header),
    body: formData
  }, (err, resp, data) => {
    if (err) callback(err);

    if (resp.statusCode === 200) {
      callback(null, data);
    } else {
      // NOTE: xhr callback will be called with an Error if
      //  there is an error in the browser that prevents
      //  sending the request. A HTTP 500 response is not
      //  going to cause an error to be returned.
      callback(data, null);
    }
  });
};
/**
 * Update a specific item
 *
 * @param  {String}   id       The id of the item we want to update
 * @param  {FormData} formData The submitted form data
 * @param  {Function} callback Called after the API call
 */


List.prototype.updateItem = function (id, formData, callback) {
  xhr({
    url: `${Keystone.adminPath}/api/${this.path}/${id}`,
    responseType: 'json',
    method: 'POST',
    headers: assign({}, Keystone.csrf.header),
    body: formData
  }, (err, resp, data) => {
    if (err) return callback(err);

    if (resp.statusCode === 200) {
      callback(null, data);
    } else {
      callback(data);
    }
  });
};

List.prototype.expandColumns = function (input) {
  let nameIncluded = false;
  const cols = listToArray(input).map(i => {
    const split = i.split('|');
    let path = split[0];
    let width = split[1];

    if (path === '__name__') {
      path = this.namePath;
    }

    const field = this.fields[path];

    if (!field) {
      // TODO: Support arbitary document paths
      if (!this.hidden) {
        if (path === this.namePath) {
          console.warn(`List ${this.key} did not specify any default columns or a name field`);
        } else {
          console.warn(`List ${this.key} specified an invalid default column: ${path}`);
        }
      }

      return;
    }

    if (path === this.namePath) {
      nameIncluded = true;
    }

    return {
      field: field,
      label: field.label,
      path: field.path,
      type: field.type,
      width: width
    };
  }).filter(truthy);

  if (!nameIncluded) {
    cols.unshift({
      type: 'id',
      label: 'ID',
      path: 'id'
    });
  }

  return cols;
};

List.prototype.expandSort = function (input) {
  const sort = {
    rawInput: input || this.defaultSort,
    isDefaultSort: false
  };
  sort.input = sort.rawInput;

  if (sort.input === '__default__') {
    sort.isDefaultSort = true;
    sort.input = this.sortable ? 'sortOrder' : this.namePath;
  }

  sort.paths = listToArray(sort.input).map(path => {
    let invert = false;

    if (path.charAt(0) === '-') {
      invert = true;
      path = path.substr(1);
    } else if (path.charAt(0) === '+') {
      path = path.substr(1);
    }

    const field = this.fields[path];

    if (!field) {
      // TODO: Support arbitary document paths
      console.warn('Invalid Sort specified:', path);
      return;
    }

    return {
      field: field,
      type: field.type,
      label: field.label,
      path: field.path,
      invert: invert
    };
  }).filter(truthy);
  return sort;
};
/**
 * Load a specific item via the API
 *
 * @param  {String}   itemId   The id of the item we want to load
 * @param  {Object}   options
 * @param  {Function} callback
 */


List.prototype.loadItem = function (itemId, options, callback) {
  if (arguments.length === 2 && typeof options === 'function') {
    callback = options;
    options = null;
  }

  let url = Keystone.adminPath + '/api/' + this.path + '/' + itemId;
  const query = qs.stringify(options);
  if (query.length) url += '?' + query;
  xhr({
    url: url,
    responseType: 'json'
  }, (err, resp, data) => {
    if (err) return callback(err); // Pass the data as result or error, depending on the statusCode

    if (resp.statusCode === 200) {
      callback(null, data);
    } else {
      callback(data);
    }
  });
};
/**
 * Load all items of a list, optionally passing objects to build a query string
 * for sorting or searching
 *
 * @param  {Object}   options
 * @param  {Function} callback
 */


List.prototype.loadItems = function (options, callback) {
  const url = Keystone.adminPath + '/api/' + this.path + buildQueryString(options);
  xhr({
    url: url,
    responseType: 'json'
  }, (err, resp, data) => {
    if (err) callback(err); // Pass the data as result or error, depending on the statusCode

    if (resp.statusCode === 200) {
      callback(null, data);
    } else {
      callback(data);
    }
  });
};
/**
 * Constructs a download URL to download a list with the current sorting, filtering,
 * selection and searching options
 *
 * @param  {Object} options
 *
 * @return {String}         The download URL
 */


List.prototype.getDownloadURL = function (options) {
  const url = Keystone.adminPath + '/api/' + this.path;
  const parts = [];

  if (options.format !== 'json') {
    options.format = 'csv';
  }

  parts.push(options.search ? 'search=' + options.search : '');
  parts.push(options.filters.length ? 'filters=' + JSON.stringify(getFilters(options.filters)) : '');
  parts.push(options.columns ? 'select=' + options.columns.map(i => i.path).join(',') : '');
  parts.push(options.sort ? 'sort=' + getSortString(options.sort) : '');
  parts.push('expandRelationshipFields=true');
  return url + '/export.' + options.format + '?' + parts.filter(truthy).join('&');
};
/**
 * Delete a specific item via the API
 *
 * @param  {String}   itemId   The id of the item we want to delete
 * @param  {Function} callback
 */


List.prototype.deleteItem = function (itemId, callback) {
  this.deleteItems([itemId], callback);
};
/**
 * Delete multiple items at once via the API
 *
 * @param  {Array}   itemIds  An array of ids of items we want to delete
 * @param  {Function} callback
 */


List.prototype.deleteItems = function (itemIds, callback) {
  const url = Keystone.adminPath + '/api/' + this.path + '/delete';
  xhr({
    url: url,
    method: 'POST',
    headers: assign({}, Keystone.csrf.header),
    json: {
      ids: itemIds
    }
  }, (err, resp, body) => {
    if (err) return callback(err); // Pass the body as result or error, depending on the statusCode

    if (resp.statusCode === 200) {
      callback(null, body);
    } else {
      callback(body);
    }
  });
};

List.prototype.reorderItems = function (item, oldSortOrder, newSortOrder, pageOptions, callback) {
  const url = Keystone.adminPath + '/api/' + this.path + '/' + item.id + '/sortOrder/' + oldSortOrder + '/' + newSortOrder + '/' + buildQueryString(pageOptions);
  xhr({
    url: url,
    method: 'POST',
    headers: assign({}, Keystone.csrf.header)
  }, (err, resp, body) => {
    if (err) return callback(err);

    try {
      body = JSON.parse(body);
    } catch (e) {
      console.log('Error parsing results json:', e, body);
      return callback(e);
    } // Pass the body as result or error, depending on the statusCode


    if (resp.statusCode === 200) {
      callback(null, body);
    } else {
      callback(body);
    }
  });
};

module.exports = List;

},{"list-to-array":undefined,"object-assign":115,"qs":undefined,"xhr":undefined}],80:[function(require,module,exports){
"use strict";

/**
	Validate Hex
	==============================

	@param {String} hex

	1. remove hash if present
	2. convert from 3 to 6 digit color code & ensure valid hex
*/
function validateHex(color) {
  const hex = color.replace('#', '');

  if (hex.length === 3) {
    return hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  if (hex.length !== 6) {
    throw new Error(`Invalid color value provided: "${color}"`);
  }

  return hex;
}

;
/**
	Fade Color
	==============================

	Takes a hexidecimal color, converts it to RGB and applies an alpha value.

	@param {String} color
	@param {Number} opacity (0-100)

	1. convert hex to RGB
	2. combine and add alpha channel
*/

function fade(color) {
  let opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  const decimalFraction = opacity / 100;
  const hex = validateHex(color); // 1.

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16); // 2.

  const result = 'rgba(' + r + ',' + g + ',' + b + ',' + decimalFraction + ')';
  return result;
}

;
/**
	Shade Color
	==============================

	Takes a hexidecimal color, converts it to RGB and lightens or darkens

	@param {String} color
	@param {Number} opacity (0-100)

	1. do fancy RGB bitwise operations
	2. combine back into a hex value
*/

function shade(color, percent) {
  const decimalFraction = percent / 100;
  const hex = validateHex(color); // 1.

  let f = parseInt(hex, 16);
  let t = decimalFraction < 0 ? 0 : 255;
  let p = decimalFraction < 0 ? decimalFraction * -1 : decimalFraction;
  const R = f >> 16;
  const G = f >> 8 & 0x00FF;
  const B = f & 0x0000FF; // 2.

  return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}

; // shade helpers

const lighten = shade;

function darken(color, percent) {
  return shade(color, percent * -1);
}

;
/**
	Blend Color
	==============================

	Takes two hexidecimal colors and blend them together

	@param {String} color1
	@param {String} color2
	@param {Number} percent (0-100)

	1. do fancy RGB bitwise operations
	2. combine back into a hex value
*/

function blend(color1, color2, percent) {
  const decimalFraction = percent / 100;
  const hex1 = validateHex(color1);
  const hex2 = validateHex(color2); // 1.

  const f = parseInt(hex1, 16);
  const t = parseInt(hex2, 16);
  const R1 = f >> 16;
  const G1 = f >> 8 & 0x00FF;
  const B1 = f & 0x0000FF;
  const R2 = t >> 16;
  const G2 = t >> 8 & 0x00FF;
  const B2 = t & 0x0000FF; // 2.

  return '#' + (0x1000000 + (Math.round((R2 - R1) * decimalFraction) + R1) * 0x10000 + (Math.round((G2 - G1) * decimalFraction) + G1) * 0x100 + (Math.round((B2 - B1) * decimalFraction) + B1)).toString(16).slice(1);
}

module.exports = {
  blend,
  darken,
  fade,
  lighten
};

},{}],81:[function(require,module,exports){
"use strict";

// ======================
// Concatenate Classnames
// ======================
//
// Support className as an array:
// force classname prop into an array (possibly of arrays) then flatten

/*
	// To use spread the new array into glamor's `css` function

	function Component ({ className, ...props }) {
		props.className = css(
			classes.component,
			...concatClassnames(className)
		);

		return <Component {...props} />;
	};
*/
module.exports = function concatClassnames(className) {
  return [className].reduce((a, b) => {
    return a.concat(b);
  }, []);
};

},{}],82:[function(require,module,exports){
"use strict";

/**
	Linear Gradient
	==============================

	Short-hand helper for adding a linear gradient to your component.

	- @param {String} sideOrCorner
	- @param {String} top
	- @param {String} bottom
	- @param {String} base (optional)
	- @returns {Object} css linear gradient declaration

	Spread the declaration into your component class:
	------------------------------

	myComponentClass: {
		...linearGradient(red, blue),
	}
*/
function linearGradient(direction, top, bottom) {
  let base = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  return {
    background: `linear-gradient(${direction}, ${top} 0%, ${bottom} 100%) ${base}`
  };
} // Vertical Gradient


function gradientVertical(top, bottom, base) {
  return linearGradient('to bottom', top, bottom, base);
} // Horizontal Gradient


function gradientHorizontal(top, bottom, base) {
  return linearGradient('to right', top, bottom, base);
}
/**
	Border Radius
	==============================

	Short-hand helper for border radii
*/
// top


function borderTopRadius(radius) {
  return {
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius
  };
} // right


function borderRightRadius(radius) {
  return {
    borderBottomRightRadius: radius,
    borderTopRightRadius: radius
  };
} // bottom


function borderBottomRadius(radius) {
  return {
    borderBottomLeftRadius: radius,
    borderBottomRightRadius: radius
  };
} // left


function borderLeftRadius(radius) {
  return {
    borderBottomLeftRadius: radius,
    borderTopLeftRadius: radius
  };
} // Return


module.exports = {
  borderTopRadius,
  borderRightRadius,
  borderBottomRadius,
  borderLeftRadius,
  gradientHorizontal,
  gradientVertical
};

},{}],83:[function(require,module,exports){
"use strict";

var _List = _interopRequireDefault(require("./List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Exports an object of lists, keyed with their key instead of their name and
 * wrapped with the List helper (./List.js)
 */
exports.listsByKey = {};
exports.listsByPath = {};

for (const key in Keystone.lists) {
  // Guard for-ins
  if ({}.hasOwnProperty.call(Keystone.lists, key)) {
    var list = new _List.default(Keystone.lists[key]);
    exports.listsByKey[key] = list;
    exports.listsByPath[list.path] = list;
  }
}

},{"./List":79}],84:[function(require,module,exports){
"use strict";

var _i = _interopRequireDefault(require("i"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A few helper methods for strings
 */

/**
 * Displays the singular or plural of a string based on a number
 * or number of items in an array.
 *
 * If arity is 1, returns the plural form of the word.
 *
 * @param {String} count
 * @param {String} singular string
 * @param {String} plural string
 * @return {String} singular or plural, * is replaced with count
 * @api public
 */
exports.plural = function (count, sn, pl) {
  if (arguments.length === 1) {
    return _i.default.pluralize(count);
  }

  if (typeof sn !== 'string') sn = '';

  if (!pl) {
    pl = _i.default.pluralize(sn);
  }

  if (typeof count === 'string') {
    count = Number(count);
  } else if (typeof count !== 'number') {
    count = (0, _lodash.size)(count);
  }

  return (count === 1 ? sn : pl).replace('*', count);
};
/**
 * Converts the first letter in a string to uppercase
 *
 * @param {String} str
 * @return {String} Str
 * @api public
 */


exports.upcase = function (str) {
  if (str && str.toString) str = str.toString();
  if (typeof str !== 'string' || !str.length) return '';
  return str.substr(0, 1).toUpperCase() + str.substr(1);
};
/**
 * Converts the first letter in a string to lowercase
 *
 * @param {String} Str
 * @return {String} str
 * @api public
 */


exports.downcase = function (str) {
  if (str && str.toString) str = str.toString();
  if (typeof str !== 'string' || !str.length) return '';
  return str.substr(0, 1).toLowerCase() + str.substr(1);
};
/**
 * Converts a string to title case
 *
 * @param {String} str
 * @return {String} Title Case form of str
 * @api public
 */


exports.titlecase = function (str) {
  if (str && str.toString) str = str.toString();
  if (typeof str !== 'string' || !str.length) return '';
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  var parts = str.split(/\s|_|\-/);

  for (var i = 0; i < parts.length; i++) {
    if (parts[i] && !/^[A-Z0-9]+$/.test(parts[i])) {
      parts[i] = exports.upcase(parts[i]);
    }
  }

  return (0, _lodash.compact)(parts).join(' ');
};
/**
 * Converts a string to camel case
 *
 * @param {String} str
 * @param {Boolean} lowercaseFirstWord
 * @return {String} camel-case form of str
 * @api public
 */


exports.camelcase = function (str, lc) {
  return _i.default.camelize(str, !lc);
};

},{"i":undefined,"lodash":undefined}],85:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _blacklist = _interopRequireDefault(require("blacklist"));

var _classnames = _interopRequireDefault(require("classnames"));

var _color = require("../../admin/client/utils/color");

var _constants = _interopRequireDefault(require("../../admin/client/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = _react.default.createClass({
  displayName: 'Checkbox',
  propTypes: {
    checked: _react.default.PropTypes.bool,
    component: _react.default.PropTypes.node,
    onChange: _react.default.PropTypes.func,
    readonly: _react.default.PropTypes.bool
  },

  getDefaultProps() {
    return {
      component: 'button'
    };
  },

  getInitialState() {
    return {
      active: null,
      focus: null,
      hover: null
    };
  },

  componentDidMount() {
    window.addEventListener('mouseup', this.handleMouseUp, false);
  },

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.handleMouseUp, false);
  },

  getStyles() {
    const {
      checked,
      readonly
    } = this.props;
    const {
      active,
      focus,
      hover
    } = this.state;
    const checkedColor = '#3999fc';
    let background = checked && !readonly ? checkedColor : 'white';
    let borderColor = checked && !readonly ? 'rgba(0,0,0,0.15) rgba(0,0,0,0.1) rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.3) rgba(0,0,0,0.2) rgba(0,0,0,0.15)';
    let boxShadow = checked && !readonly ? '0 1px 0 rgba(255,255,255,0.33)' : 'inset 0 1px 0 rgba(0,0,0,0.06)';
    let color = checked && !readonly ? 'white' : '#bbb';
    const textShadow = checked && !readonly ? '0 1px 0 rgba(0,0,0,0.2)' : null; // pseudo state

    if (hover && !focus && !readonly) {
      borderColor = checked ? 'rgba(0,0,0,0.1) rgba(0,0,0,0.15) rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.35) rgba(0,0,0,0.3) rgba(0,0,0,0.25)';
    }

    if (active) {
      background = checked && !readonly ? (0, _color.darken)(checkedColor, 20) : '#eee';
      borderColor = checked && !readonly ? 'rgba(0,0,0,0.25) rgba(0,0,0,0.3) rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.4) rgba(0,0,0,0.35) rgba(0,0,0,0.3)';
      boxShadow = checked && !readonly ? '0 1px 0 rgba(255,255,255,0.33)' : 'inset 0 1px 3px rgba(0,0,0,0.2)';
    }

    if (focus && !active) {
      borderColor = checked && !readonly ? 'rgba(0,0,0,0.25) rgba(0,0,0,0.3) rgba(0,0,0,0.35)' : checkedColor;
      boxShadow = checked && !readonly ? `0 0 0 3px ${(0, _color.fade)(checkedColor, 15)}` : `inset 0 1px 2px rgba(0,0,0,0.15), 0 0 0 3px ${(0, _color.fade)(checkedColor, 15)}`;
    } // noedit


    if (readonly) {
      background = 'rgba(255,255,255,0.5)';
      borderColor = 'rgba(0,0,0,0.1)';
      boxShadow = 'none';
      color = checked ? checkedColor : '#bbb';
    }

    return {
      alignItems: 'center',
      background: background,
      border: '1px solid',
      borderColor: borderColor,
      borderRadius: _constants.default.borderRadius.sm,
      boxShadow: boxShadow,
      color: color,
      display: 'inline-block',
      fontSize: 14,
      height: 16,
      lineHeight: '15px',
      outline: 'none',
      padding: 0,
      textAlign: 'center',
      textShadow: textShadow,
      verticalAlign: 'middle',
      width: 16,
      msTransition: 'all 120ms ease-out',
      MozTransition: 'all 120ms ease-out',
      WebkitTransition: 'all 120ms ease-out',
      transition: 'all 120ms ease-out'
    };
  },

  handleKeyDown(e) {
    if (e.keyCode !== 32) return;
    this.toggleActive(true);
  },

  handleKeyUp() {
    this.toggleActive(false);
  },

  handleMouseOver() {
    this.toggleHover(true);
  },

  handleMouseDown() {
    this.toggleActive(true);
    this.toggleFocus(true);
  },

  handleMouseUp() {
    this.toggleActive(false);
  },

  handleMouseOut() {
    this.toggleHover(false);
  },

  toggleActive(pseudo) {
    this.setState({
      active: pseudo
    });
  },

  toggleHover(pseudo) {
    this.setState({
      hover: pseudo
    });
  },

  toggleFocus(pseudo) {
    this.setState({
      focus: pseudo
    });
  },

  handleChange() {
    this.props.onChange(!this.props.checked);
  },

  render() {
    const {
      checked,
      readonly
    } = this.props;
    const props = (0, _blacklist.default)(this.props, 'checked', 'component', 'onChange', 'readonly');
    props.style = this.getStyles();
    props.ref = 'checkbox';
    props.className = (0, _classnames.default)('octicon', {
      'octicon-check': checked,
      'octicon-x': typeof checked === 'boolean' && !checked && readonly
    });
    props.type = readonly ? null : 'button';
    props.onKeyDown = this.handleKeyDown;
    props.onKeyUp = this.handleKeyUp;
    props.onMouseDown = this.handleMouseDown;
    props.onMouseUp = this.handleMouseUp;
    props.onMouseOver = this.handleMouseOver;
    props.onMouseOut = this.handleMouseOut;
    props.onClick = readonly ? null : this.handleChange;
    props.onFocus = readonly ? null : () => this.toggleFocus(true);
    props.onBlur = readonly ? null : () => this.toggleFocus(false);
    const node = readonly ? 'span' : this.props.component;
    return /*#__PURE__*/_react.default.createElement(node, props);
  }

});

module.exports = Checkbox;

},{"../../admin/client/constants":77,"../../admin/client/utils/color":80,"blacklist":undefined,"classnames":undefined,"react":undefined}],86:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _elemental = require("../../admin/client/App/elemental");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// NOTE marginBottom of 1px stops things jumping around
// TODO find out why this is necessary
function CollapsedFieldLabel(_ref) {
  let {
    style,
    ...props
  } = _ref;
  const __style__ = {
    marginBottom: 1,
    paddingLeft: 0,
    paddingRight: 0,
    ...style
  };
  return /*#__PURE__*/_react.default.createElement(_elemental.Button, _extends({
    variant: "link",
    style: __style__
  }, props));
}

;
module.exports = CollapsedFieldLabel;

},{"../../admin/client/App/elemental":64,"react":undefined}],87:[function(require,module,exports){
"use strict";

var _moment = _interopRequireDefault(require("moment"));

var _reactDayPicker = _interopRequireDefault(require("react-day-picker"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _Popout = _interopRequireDefault(require("../../admin/client/App/shared/Popout"));

var _elemental = require("../../admin/client/App/elemental");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let lastId = 0;
module.exports = _react.default.createClass({
  displayName: 'DateInput',
  propTypes: {
    format: _react.default.PropTypes.string,
    name: _react.default.PropTypes.string,
    onChange: _react.default.PropTypes.func.isRequired,
    path: _react.default.PropTypes.string,
    value: _react.default.PropTypes.string
  },

  getDefaultProps() {
    return {
      format: 'YYYY-MM-DD'
    };
  },

  getInitialState() {
    const id = ++lastId;
    let month = new Date();
    const {
      format,
      value
    } = this.props;

    if ((0, _moment.default)(value, format, true).isValid()) {
      month = (0, _moment.default)(value, format).toDate();
    }

    return {
      id: `_DateInput_${id}`,
      month: month,
      pickerIsOpen: false,
      inputValue: value
    };
  },

  componentDidMount() {
    this.showCurrentMonth();
  },

  componentWillReceiveProps: function (newProps) {
    if (newProps.value === this.props.value) return;
    this.setState({
      month: (0, _moment.default)(newProps.value, this.props.format).toDate(),
      inputValue: newProps.value
    }, this.showCurrentMonth);
  },

  focus() {
    if (!this.refs.input) return;
    (0, _reactDom.findDOMNode)(this.refs.input).focus();
  },

  handleInputChange(e) {
    const {
      value
    } = e.target;
    this.setState({
      inputValue: value
    }, this.showCurrentMonth);
  },

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // If the date is strictly equal to the format string, dispatch onChange

      if ((0, _moment.default)(this.state.inputValue, this.props.format, true).isValid()) {
        this.props.onChange({
          value: this.state.inputValue
        }); // If the date is not strictly equal, only change the tab that is displayed
      } else if ((0, _moment.default)(this.state.inputValue, this.props.format).isValid()) {
        this.setState({
          month: (0, _moment.default)(this.state.inputValue, this.props.format).toDate()
        }, this.showCurrentMonth);
      }
    }
  },

  handleDaySelect(e, date, modifiers) {
    if (modifiers && modifiers.disabled) return;
    var value = (0, _moment.default)(date).format(this.props.format);
    this.props.onChange({
      value
    });
    this.setState({
      pickerIsOpen: false,
      month: date,
      inputValue: value
    });
  },

  showPicker() {
    this.setState({
      pickerIsOpen: true
    }, this.showCurrentMonth);
  },

  showCurrentMonth() {
    if (!this.refs.picker) return;
    this.refs.picker.showMonth(this.state.month);
  },

  handleFocus(e) {
    if (this.state.pickerIsOpen) return;
    this.showPicker();
  },

  handleCancel() {
    this.setState({
      pickerIsOpen: false
    });
  },

  handleBlur(e) {
    let rt = e.relatedTarget || e.nativeEvent.explicitOriginalTarget;
    const popout = this.refs.popout.getPortalDOMNode();

    while (rt) {
      if (rt === popout) return;
      rt = rt.parentNode;
    }

    this.setState({
      pickerIsOpen: false
    });
  },

  render() {
    const selectedDay = this.props.value; // react-day-picker adds a class to the selected day based on this

    const modifiers = {
      selected: day => (0, _moment.default)(day).format(this.props.format) === selectedDay
    };
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
      autoComplete: "off",
      id: this.state.id,
      name: this.props.name,
      onBlur: this.handleBlur,
      onChange: this.handleInputChange,
      onFocus: this.handleFocus,
      onKeyPress: this.handleKeyPress,
      placeholder: this.props.format,
      ref: "input",
      value: this.state.inputValue
    }), /*#__PURE__*/_react.default.createElement(_Popout.default, {
      isOpen: this.state.pickerIsOpen,
      onCancel: this.handleCancel,
      ref: "popout",
      relativeToID: this.state.id,
      width: 260
    }, /*#__PURE__*/_react.default.createElement(_reactDayPicker.default, {
      modifiers: modifiers,
      onDayClick: this.handleDaySelect,
      ref: "picker",
      tabIndex: -1
    })));
  }

});

},{"../../admin/client/App/elemental":64,"../../admin/client/App/shared/Popout":75,"moment":undefined,"react":undefined,"react-day-picker":undefined,"react-dom":undefined}],88:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ItemsTableCell(_ref) {
  let {
    className,
    ...props
  } = _ref;
  props.className = (0, _classnames.default)('ItemList__col', className);
  return /*#__PURE__*/_react.default.createElement("td", props);
}

;
module.exports = ItemsTableCell;

},{"classnames":undefined,"react":undefined}],89:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ItemsTableValue(_ref) {
  let {
    className,
    component,
    empty,
    exterior,
    field,
    href,
    interior,
    padded,
    to,
    truncate,
    ...props
  } = _ref;

  // TODO remove in the next release
  if (href) {
    console.warn('ItemsTableValue: `href` will be deprecated in the next release, use `to`.');
  }

  const linkRef = to || href;
  const Component = linkRef ? _reactRouter.Link : component;
  props.className = (0, _classnames.default)('ItemList__value', field ? `ItemList__value--${field}` : null, {
    'ItemList__link--empty': empty,
    'ItemList__link--exterior': linkRef && exterior,
    'ItemList__link--interior': linkRef && interior,
    'ItemList__link--padded': linkRef && padded,
    'ItemList__value--truncate': truncate
  }, className);
  props.to = linkRef;
  return /*#__PURE__*/_react.default.createElement(Component, props);
}

;
ItemsTableValue.propTypes = {
  component: _react.PropTypes.oneOfType([_react.default.PropTypes.string, _react.default.PropTypes.func]),
  empty: _react.PropTypes.bool,
  exterior: _react.PropTypes.bool,
  // FIXME this should be "external" e.g. an external link
  field: _react.PropTypes.string,
  href: _react.PropTypes.string,
  // TODO remove in next release
  interior: _react.PropTypes.bool,
  // FIXME this should be "internal" e.g. an internal link
  padded: _react.PropTypes.bool,
  to: _react.PropTypes.string,
  truncate: _react.PropTypes.bool
};
ItemsTableValue.defaultProps = {
  component: 'div',
  truncate: true
};
module.exports = ItemsTableValue;

},{"classnames":undefined,"react":undefined,"react-router":undefined}],90:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _ItemsTableCell = _interopRequireDefault(require("../../components/ItemsTableCell"));

var _ItemsTableValue = _interopRequireDefault(require("../../components/ItemsTableValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IdColumn = _react.default.createClass({
  displayName: 'IdColumn',
  propTypes: {
    col: _react.default.PropTypes.object,
    data: _react.default.PropTypes.object,
    list: _react.default.PropTypes.object
  },

  renderValue() {
    const value = this.props.data.id;
    if (!value) return null;
    return /*#__PURE__*/_react.default.createElement(_ItemsTableValue.default, {
      padded: true,
      interior: true,
      title: value,
      to: Keystone.adminPath + '/' + this.props.list.path + '/' + value,
      field: this.props.col.type
    }, value);
  },

  render() {
    return /*#__PURE__*/_react.default.createElement(_ItemsTableCell.default, null, this.renderValue());
  }

});

module.exports = IdColumn;

},{"../../components/ItemsTableCell":88,"../../components/ItemsTableValue":89,"react":undefined}],91:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _ItemsTableCell = _interopRequireDefault(require("../../components/ItemsTableCell"));

var _ItemsTableValue = _interopRequireDefault(require("../../components/ItemsTableValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InvalidColumn = _react.default.createClass({
  displayName: 'InvalidColumn',
  propTypes: {
    col: _react.default.PropTypes.object
  },

  renderValue() {
    return /*#__PURE__*/_react.default.createElement(_ItemsTableValue.default, {
      field: this.props.col.type
    }, "(Invalid Type: ", this.props.col.type, ")");
  },

  render() {
    return /*#__PURE__*/_react.default.createElement(_ItemsTableCell.default, null, this.renderValue());
  }

});

module.exports = InvalidColumn;

},{"../../components/ItemsTableCell":88,"../../components/ItemsTableValue":89,"react":undefined}],92:[function(require,module,exports){
"use strict";

var _classnames = _interopRequireDefault(require("classnames"));

var _evalDependsOn = _interopRequireDefault(require("../utils/evalDependsOn.js"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _elemental = require("../../admin/client/App/elemental");

var _blacklist = _interopRequireDefault(require("blacklist"));

var _CollapsedFieldLabel = _interopRequireDefault(require("../components/CollapsedFieldLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function isObject(arg) {
  return Object.prototype.toString.call(arg) === '[object Object]';
}

function validateSpec(spec) {
  if (!spec) spec = {};

  if (!isObject(spec.supports)) {
    spec.supports = {};
  }

  if (!spec.focusTargetRef) {
    spec.focusTargetRef = 'focusTarget';
  }

  return spec;
}

var Base = module.exports.Base = {
  getInitialState() {
    return {};
  },

  getDefaultProps() {
    return {
      adminPath: Keystone.adminPath,
      inputProps: {},
      labelProps: {},
      valueProps: {},
      size: 'full'
    };
  },

  getInputName(path) {
    // This correctly creates the path for field inputs, and supports the
    // inputNamePrefix prop that is required for nested fields to work
    return this.props.inputNamePrefix ? `${this.props.inputNamePrefix}[${path}]` : path;
  },

  valueChanged(event) {
    this.props.onChange({
      path: this.props.path,
      value: event.target.value
    });
  },

  shouldCollapse() {
    return this.props.collapse && !this.props.value;
  },

  shouldRenderField() {
    if (this.props.mode === 'create') return true;
    return !this.props.noedit;
  },

  focus() {
    if (!this.refs[this.spec.focusTargetRef]) return;
    (0, _reactDom.findDOMNode)(this.refs[this.spec.focusTargetRef]).focus();
  },

  renderNote() {
    if (!this.props.note) return null;
    return /*#__PURE__*/_react.default.createElement(_elemental.FormNote, {
      html: this.props.note
    });
  },

  renderField() {
    const {
      autoFocus,
      value,
      inputProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_elemental.FormInput, _extends({}, inputProps, {
      autoFocus,
      autoComplete: 'off',
      name: this.getInputName(this.props.path),
      onChange: this.valueChanged,
      ref: 'focusTarget',
      value
    }));
  },

  renderValue() {
    return /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
      noedit: true
    }, this.props.value);
  },

  renderUI() {
    var wrapperClassName = (0, _classnames.default)('field-type-' + this.props.type, this.props.className, {
      'field-monospace': this.props.monospace
    });
    return /*#__PURE__*/_react.default.createElement(_elemental.FormField, {
      htmlFor: this.props.path,
      label: this.props.label,
      className: wrapperClassName,
      cropLabel: true
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: 'FormField__inner field-size-' + this.props.size
    }, this.shouldRenderField() ? this.renderField() : this.renderValue()), this.renderNote());
  }

};
var Mixins = module.exports.Mixins = {
  Collapse: {
    componentWillMount() {
      this.setState({
        isCollapsed: this.shouldCollapse()
      });
    },

    componentDidUpdate(prevProps, prevState) {
      if (prevState.isCollapsed && !this.state.isCollapsed) {
        this.focus();
      }
    },

    uncollapse() {
      this.setState({
        isCollapsed: false
      });
    },

    renderCollapse() {
      if (!this.shouldRenderField()) return null;
      return /*#__PURE__*/_react.default.createElement(_elemental.FormField, null, /*#__PURE__*/_react.default.createElement(_CollapsedFieldLabel.default, {
        onClick: this.uncollapse
      }, "+ Add ", this.props.label.toLowerCase()));
    }

  }
};

module.exports.create = function (spec) {
  spec = validateSpec(spec);
  var field = {
    spec: spec,
    displayName: spec.displayName,
    mixins: [Mixins.Collapse],
    statics: {
      getDefaultValue: function (field) {
        return typeof field.defaultValue !== 'undefined' ? field.defaultValue : '';
      }
    },

    render() {
      if (!(0, _evalDependsOn.default)(this.props.dependsOn, this.props.values)) {
        return null;
      }

      if (this.state.isCollapsed) {
        return this.renderCollapse();
      }

      return this.renderUI();
    }

  };

  if (spec.statics) {
    Object.assign(field.statics, spec.statics);
  }

  var excludeBaseMethods = {};

  if (spec.mixins) {
    spec.mixins.forEach(function (mixin) {
      Object.keys(mixin).forEach(function (name) {
        if (Base[name]) {
          excludeBaseMethods[name] = true;
        }
      });
    });
  }

  Object.assign(field, (0, _blacklist.default)(Base, excludeBaseMethods));
  Object.assign(field, (0, _blacklist.default)(spec, 'mixins', 'statics'));

  if (Array.isArray(spec.mixins)) {
    field.mixins = field.mixins.concat(spec.mixins);
  }

  return _react.default.createClass(field);
};

},{"../../admin/client/App/elemental":64,"../components/CollapsedFieldLabel":86,"../utils/evalDependsOn.js":114,"blacklist":undefined,"classnames":undefined,"react":undefined,"react-dom":undefined}],93:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("../../components/Checkbox"));

var _ItemsTableCell = _interopRequireDefault(require("../../components/ItemsTableCell"));

var _ItemsTableValue = _interopRequireDefault(require("../../components/ItemsTableValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BooleanColumn = _react.default.createClass({
  displayName: 'BooleanColumn',
  propTypes: {
    col: _react.default.PropTypes.object,
    data: _react.default.PropTypes.object
  },

  renderValue() {
    return /*#__PURE__*/_react.default.createElement(_ItemsTableValue.default, {
      truncate: false,
      field: this.props.col.type
    }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      readonly: true,
      checked: this.props.data.fields[this.props.col.path]
    }));
  },

  render() {
    return /*#__PURE__*/_react.default.createElement(_ItemsTableCell.default, null, this.renderValue());
  }

});

module.exports = BooleanColumn;

},{"../../components/Checkbox":85,"../../components/ItemsTableCell":88,"../../components/ItemsTableValue":89,"react":undefined}],94:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _Field = _interopRequireDefault(require("../Field"));

var _Checkbox = _interopRequireDefault(require("../../components/Checkbox"));

var _elemental = require("../../../admin/client/App/elemental");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NOOP = () => {};

module.exports = _Field.default.create({
  displayName: 'BooleanField',
  statics: {
    type: 'Boolean'
  },
  propTypes: {
    indent: _react.default.PropTypes.bool,
    label: _react.default.PropTypes.string,
    onChange: _react.default.PropTypes.func.isRequired,
    path: _react.default.PropTypes.string.isRequired,
    value: _react.default.PropTypes.bool
  },

  valueChanged(value) {
    this.props.onChange({
      path: this.props.path,
      value: value
    });
  },

  renderFormInput() {
    if (!this.shouldRenderField()) return;
    return /*#__PURE__*/_react.default.createElement("input", {
      name: this.getInputName(this.props.path),
      type: "hidden",
      value: !!this.props.value
    });
  },

  renderUI() {
    const {
      indent,
      value,
      label,
      path
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      "data-field-name": path,
      "data-field-type": "boolean"
    }, /*#__PURE__*/_react.default.createElement(_elemental.FormField, {
      offsetAbsentLabel: indent
    }, /*#__PURE__*/_react.default.createElement("label", {
      style: {
        height: '2.3em'
      }
    }, this.renderFormInput(), /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      checked: value,
      onChange: this.shouldRenderField() && this.valueChanged || NOOP,
      readonly: !this.shouldRenderField()
    }), /*#__PURE__*/_react.default.createElement("span", {
      style: {
        marginLeft: '.75em'
      }
    }, label)), this.renderNote()));
  }

});

},{"../../../admin/client/App/elemental":64,"../../components/Checkbox":85,"../Field":92,"react":undefined}],95:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _elemental = require("../../../admin/client/App/elemental");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const VALUE_OPTIONS = [{
  label: 'Is Checked',
  value: true
}, {
  label: 'Is NOT Checked',
  value: false
}];

function getDefaultValue() {
  return {
    value: true
  };
}

var BooleanFilter = _react.default.createClass({
  displayName: "BooleanFilter",
  propTypes: {
    filter: _react.default.PropTypes.shape({
      value: _react.default.PropTypes.bool
    })
  },
  statics: {
    getDefaultValue: getDefaultValue
  },

  getDefaultProps() {
    return {
      filter: getDefaultValue()
    };
  },

  updateValue(value) {
    this.props.onChange({
      value
    });
  },

  render() {
    return /*#__PURE__*/_react.default.createElement(_elemental.SegmentedControl, {
      equalWidthSegments: true,
      options: VALUE_OPTIONS,
      value: this.props.filter.value,
      onChange: this.updateValue
    });
  }

});

module.exports = BooleanFilter;

},{"../../../admin/client/App/elemental":64,"react":undefined}],96:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _ItemsTableCell = _interopRequireDefault(require("../../components/ItemsTableCell"));

var _ItemsTableValue = _interopRequireDefault(require("../../components/ItemsTableValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateColumn = _react.default.createClass({
  displayName: 'DateColumn',
  propTypes: {
    col: _react.default.PropTypes.object,
    data: _react.default.PropTypes.object,
    linkTo: _react.default.PropTypes.string
  },

  toMoment(value) {
    if (this.props.col.field.isUTC) {
      return _moment.default.utc(value);
    } else {
      return (0, _moment.default)(value);
    }
  },

  getValue() {
    const value = this.props.data.fields[this.props.col.path];
    if (!value) return null;
    const format = this.props.col.type === 'datetime' ? 'MMMM Do YYYY, h:mm:ss a' : 'MMMM Do YYYY';
    return this.toMoment(value).format(format);
  },

  render() {
    const value = this.getValue();
    const empty = !value && this.props.linkTo ? true : false;
    return /*#__PURE__*/_react.default.createElement(_ItemsTableCell.default, null, /*#__PURE__*/_react.default.createElement(_ItemsTableValue.default, {
      field: this.props.col.type,
      to: this.props.linkTo,
      empty: empty
    }, value));
  }

});

module.exports = DateColumn;

},{"../../components/ItemsTableCell":88,"../../components/ItemsTableValue":89,"moment":undefined,"react":undefined}],97:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _moment = _interopRequireDefault(require("moment"));

var _reactDayPicker = _interopRequireDefault(require("react-day-picker"));

var _elemental = require("../../../admin/client/App/elemental");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const INVERTED_OPTIONS = [{
  label: 'Matches',
  value: false
}, {
  label: 'Does NOT Match',
  value: true
}];
const MODE_OPTIONS = [{
  label: 'On',
  value: 'on'
}, {
  label: 'After',
  value: 'after'
}, {
  label: 'Before',
  value: 'before'
}, {
  label: 'Between',
  value: 'between'
}];

const DayPickerIndicator = _ref => {
  let {
    activeInputField
  } = _ref;
  const style = activeInputField === 'before' ? {
    left: '11rem'
  } : null;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "DayPicker-Indicator",
    style: style
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "DayPicker-Indicator__border"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "DayPicker-Indicator__bg"
  }));
};

function getDefaultValue() {
  return {
    mode: MODE_OPTIONS[0].value,
    inverted: INVERTED_OPTIONS[0].value,
    value: (0, _moment.default)(0, 'HH').format(),
    before: (0, _moment.default)(0, 'HH').format(),
    after: (0, _moment.default)(0, 'HH').format()
  };
}

var DateFilter = _react.default.createClass({
  displayName: 'DateFilter',
  propTypes: {
    filter: _react.PropTypes.shape({
      mode: _react.PropTypes.oneOf(MODE_OPTIONS.map(i => i.value)),
      inverted: _react.PropTypes.boolean
    })
  },
  statics: {
    getDefaultValue: getDefaultValue
  },

  getDefaultProps() {
    return {
      format: 'DD-MM-YYYY',
      filter: getDefaultValue(),
      value: (0, _moment.default)().startOf('day').toDate()
    };
  },

  getInitialState() {
    return {
      activeInputField: 'after',
      month: new Date() // The month to display in the calendar

    };
  },

  componentDidMount() {
    this.__isMounted = true;
  },

  componentWillUnmount() {
    this.__isMounted = false;
  },

  // ==============================
  // METHODS
  // ==============================
  updateFilter(value) {
    this.props.onChange({ ...this.props.filter,
      ...value
    });
  },

  toggleInverted(value) {
    this.updateFilter({
      inverted: value
    });
    this.setFocus(this.props.filter.mode);
  },

  selectMode(e) {
    const mode = e.target.value;
    this.updateFilter({
      mode
    });
    this.setFocus(mode);
  },

  setFocus(mode) {
    // give the UI a moment to render
    if (mode === 'between') {
      setTimeout(() => {
        (0, _reactDom.findDOMNode)(this.refs[this.state.activeInputField]).focus();
      }, 50);
    } else {
      setTimeout(() => {
        this.refs.input.focus();
      }, 50);
    }
  },

  handleInputChange(e) {// TODO @jedwatson
    // Entering virtually any value will return an "Invalid date", so I'm
    // temporarily disabling user entry. This entire component needs review.
    // const { value } = e.target;
    // let { month } = this.state;
    // // Change the current month only if the value entered by the user is a valid
    // // date, according to the `L` format
    // if (moment(value, 'L', true).isValid()) {
    // 	month = moment(value, 'L').toDate();
    // }
    // this.updateFilter({ value: value });
    // this.setState({ month }, this.showCurrentDate);
  },

  setActiveField(field) {
    this.setState({
      activeInputField: field
    });
  },

  switchBetweenActiveInputFields(e, day, modifiers) {
    if (modifiers && modifiers.disabled) return;
    const {
      activeInputField
    } = this.state;
    const send = {};
    const newActiveField = activeInputField === 'before' ? 'after' : 'before';
    send[activeInputField] = day;
    this.updateFilter(send);
    this.setState({
      activeInputField: newActiveField
    }, () => {
      (0, _reactDom.findDOMNode)(this.refs[newActiveField]).focus();
    });
  },

  selectDay(e, day, modifiers) {
    if (modifiers && modifiers.disabled) return;
    this.updateFilter({
      value: day
    });
  },

  showCurrentDate() {
    // give the UI a moment to render
    setTimeout(() => {
      this.refs.daypicker.showMonth(this.state.month);
    }, 50);
  },

  // ==============================
  // RENDERERS
  // ==============================
  renderToggle() {
    const {
      filter
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        marginBottom: '1em'
      }
    }, /*#__PURE__*/_react.default.createElement(_elemental.SegmentedControl, {
      equalWidthSegments: true,
      onChange: this.toggleInverted,
      options: INVERTED_OPTIONS,
      value: filter.inverted
    }));
  },

  renderControls() {
    let controls;
    const {
      activeInputField
    } = this.state;
    const {
      field,
      filter
    } = this.props;
    const mode = MODE_OPTIONS.filter(i => i.value === filter.mode)[0];
    const placeholder = field.label + ' is ' + mode.label.toLowerCase() + '...'; // DayPicker Modifiers - Selected Day

    let modifiers = filter.mode === 'between' ? {
      selected: day => (0, _moment.default)(filter[activeInputField]).isSame(day)
    } : {
      selected: day => (0, _moment.default)(filter.value).isSame(day)
    };

    if (mode.value === 'between') {
      controls = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          marginBottom: '1em'
        }
      }, /*#__PURE__*/_react.default.createElement(_elemental.Grid.Row, {
        xsmall: "one-half",
        gutter: 10
      }, /*#__PURE__*/_react.default.createElement(_elemental.Grid.Col, null, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
        autoFocus: true,
        ref: "after",
        placeholder: "From",
        onChange: this.handleInputChange,
        onFocus: () => this.setActiveField('after'),
        value: (0, _moment.default)(filter.after).format(this.props.format)
      })), /*#__PURE__*/_react.default.createElement(_elemental.Grid.Col, null, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
        ref: "before",
        placeholder: "To",
        onChange: this.handleInputChange,
        onFocus: () => this.setActiveField('before'),
        value: (0, _moment.default)(filter.before).format(this.props.format)
      })))), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          position: 'relative'
        }
      }, /*#__PURE__*/_react.default.createElement(_reactDayPicker.default, {
        modifiers: modifiers,
        className: "DayPicker--chrome",
        onDayClick: this.switchBetweenActiveInputFields
      }), /*#__PURE__*/_react.default.createElement(DayPickerIndicator, {
        activeInputField: activeInputField
      })));
    } else {
      controls = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          marginBottom: '1em'
        }
      }, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
        autoFocus: true,
        ref: "input",
        placeholder: placeholder,
        value: (0, _moment.default)(filter.value).format(this.props.format),
        onChange: this.handleInputChange,
        onFocus: this.showCurrentDate
      })), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          position: 'relative'
        }
      }, /*#__PURE__*/_react.default.createElement(_reactDayPicker.default, {
        ref: "daypicker",
        modifiers: modifiers,
        className: "DayPicker--chrome",
        onDayClick: this.selectDay
      }), /*#__PURE__*/_react.default.createElement(DayPickerIndicator, null)));
    }

    return controls;
  },

  render() {
    const {
      filter
    } = this.props;
    const mode = MODE_OPTIONS.filter(i => i.value === filter.mode)[0];
    return /*#__PURE__*/_react.default.createElement("div", null, this.renderToggle(), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        marginBottom: '1em'
      }
    }, /*#__PURE__*/_react.default.createElement(_elemental.FormSelect, {
      options: MODE_OPTIONS,
      onChange: this.selectMode,
      value: mode.value
    })), this.renderControls());
  }

});

module.exports = DateFilter;

},{"../../../admin/client/App/elemental":64,"moment":undefined,"react":undefined,"react-day-picker":undefined,"react-dom":undefined}],98:[function(require,module,exports){
"use strict";

module.exports = require('../date/DateColumn');

},{"../date/DateColumn":96}],99:[function(require,module,exports){
"use strict";

var _DateInput = _interopRequireDefault(require("../../components/DateInput"));

var _Field = _interopRequireDefault(require("../Field"));

var _moment = _interopRequireDefault(require("moment"));

var _react = _interopRequireDefault(require("react"));

var _elemental = require("../../../admin/client/App/elemental");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _Field.default.create({
  displayName: 'DatetimeField',
  statics: {
    type: 'Datetime'
  },
  focusTargetRef: 'dateInput',
  // default input formats
  dateInputFormat: 'YYYY-MM-DD',
  timeInputFormat: 'h:mm:ss a',
  tzOffsetInputFormat: 'Z',
  // parse formats (duplicated from lib/fieldTypes/datetime.js)
  parseFormats: ['YYYY-MM-DD', 'YYYY-MM-DD h:m:s a', 'YYYY-MM-DD h:m a', 'YYYY-MM-DD H:m:s', 'YYYY-MM-DD H:m'],

  getInitialState() {
    return {
      dateValue: this.props.value && this.moment(this.props.value).format(this.dateInputFormat),
      timeValue: this.props.value && this.moment(this.props.value).format(this.timeInputFormat),
      tzOffsetValue: this.props.value ? this.moment(this.props.value).format(this.tzOffsetInputFormat) : this.moment().format(this.tzOffsetInputFormat)
    };
  },

  getDefaultProps() {
    return {
      formatString: 'Do MMM YYYY, h:mm:ss a'
    };
  },

  moment() {
    if (this.props.isUTC) return _moment.default.utc.apply(_moment.default, arguments);else return _moment.default.apply(undefined, arguments);
  },

  // TODO: Move isValid() so we can share with server-side code
  isValid(value) {
    return this.moment(value, this.parseFormats).isValid();
  },

  // TODO: Move format() so we can share with server-side code
  format(value, format) {
    format = format || this.dateInputFormat + ' ' + this.timeInputFormat;
    return value ? this.moment(value).format(format) : '';
  },

  handleChange(dateValue, timeValue, tzOffsetValue) {
    var value = dateValue + ' ' + timeValue;
    var datetimeFormat = this.dateInputFormat + ' ' + this.timeInputFormat; // if the change included a timezone offset, include that in the calculation (so NOW works correctly during DST changes)

    if (typeof tzOffsetValue !== 'undefined') {
      value += ' ' + tzOffsetValue;
      datetimeFormat += ' ' + this.tzOffsetInputFormat;
    } // if not, calculate the timezone offset based on the date (respect different DST values)
    else {
      this.setState({
        tzOffsetValue: this.moment(value, datetimeFormat).format(this.tzOffsetInputFormat)
      });
    }

    this.props.onChange({
      path: this.props.path,
      value: this.isValid(value) ? this.moment(value, datetimeFormat).toISOString() : null
    });
  },

  dateChanged(_ref) {
    let {
      value
    } = _ref;
    this.setState({
      dateValue: value
    });
    this.handleChange(value, this.state.timeValue);
  },

  timeChanged(evt) {
    this.setState({
      timeValue: evt.target.value
    });
    this.handleChange(this.state.dateValue, evt.target.value);
  },

  setNow() {
    var dateValue = this.moment().format(this.dateInputFormat);
    var timeValue = this.moment().format(this.timeInputFormat);
    var tzOffsetValue = this.moment().format(this.tzOffsetInputFormat);
    this.setState({
      dateValue: dateValue,
      timeValue: timeValue,
      tzOffsetValue: tzOffsetValue
    });
    this.handleChange(dateValue, timeValue, tzOffsetValue);
  },

  renderNote() {
    if (!this.props.note) return null;
    return /*#__PURE__*/_react.default.createElement(_elemental.FormNote, {
      note: this.props.note
    });
  },

  renderUI() {
    var input;

    if (this.shouldRenderField()) {
      input = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_elemental.InlineGroup, null, /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, {
        grow: true
      }, /*#__PURE__*/_react.default.createElement(_DateInput.default, {
        format: this.dateInputFormat,
        name: this.getInputName(this.props.paths.date),
        onChange: this.dateChanged,
        ref: "dateInput",
        value: this.state.dateValue
      })), /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, {
        grow: true
      }, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
        autoComplete: "off",
        name: this.getInputName(this.props.paths.time),
        onChange: this.timeChanged,
        placeholder: "HH:MM:SS am/pm",
        value: this.state.timeValue
      })), /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, null, /*#__PURE__*/_react.default.createElement(_elemental.Button, {
        onClick: this.setNow
      }, "Now"))), /*#__PURE__*/_react.default.createElement("input", {
        name: this.getInputName(this.props.paths.tzOffset),
        type: "hidden",
        value: this.state.tzOffsetValue
      }));
    } else {
      input = /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
        noedit: true
      }, this.format(this.props.value, this.props.formatString));
    }

    return /*#__PURE__*/_react.default.createElement(_elemental.FormField, {
      label: this.props.label,
      className: "field-type-datetime",
      htmlFor: this.getInputName(this.props.path)
    }, input, this.renderNote());
  }

});

},{"../../../admin/client/App/elemental":64,"../../components/DateInput":87,"../Field":92,"moment":undefined,"react":undefined}],100:[function(require,module,exports){
"use strict";

module.exports = require('../date/DateFilter');

},{"../date/DateFilter":97}],101:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _ItemsTableCell = _interopRequireDefault(require("../../components/ItemsTableCell"));

var _ItemsTableValue = _interopRequireDefault(require("../../components/ItemsTableValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmailColumn = _react.default.createClass({
  displayName: 'EmailColumn',
  propTypes: {
    col: _react.default.PropTypes.object,
    data: _react.default.PropTypes.object
  },

  renderValue() {
    const value = this.props.data.fields[this.props.col.path];
    if (!value) return;
    return /*#__PURE__*/_react.default.createElement(_ItemsTableValue.default, {
      to: 'mailto:' + value,
      padded: true,
      exterior: true,
      field: this.props.col.type
    }, value);
  },

  render() {
    return /*#__PURE__*/_react.default.createElement(_ItemsTableCell.default, null, this.renderValue());
  }

});

module.exports = EmailColumn;

},{"../../components/ItemsTableCell":88,"../../components/ItemsTableValue":89,"react":undefined}],102:[function(require,module,exports){
"use strict";

var _Field = _interopRequireDefault(require("../Field"));

var _react = _interopRequireWildcard(require("react"));

var _elemental = require("../../../admin/client/App/elemental");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
	TODO:
	- gravatar
	- validate email address
 */
module.exports = _Field.default.create({
  displayName: 'EmailField',
  propTypes: {
    path: _react.PropTypes.string.isRequired,
    value: _react.PropTypes.string
  },
  statics: {
    type: 'Email'
  },

  renderField() {
    return /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
      name: this.getInputName(this.props.path),
      ref: "focusTarget",
      value: this.props.value,
      onChange: this.valueChanged,
      autoComplete: "off",
      type: "email"
    });
  },

  renderValue() {
    return this.props.value ? /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
      noedit: true,
      component: "a",
      href: 'mailto:' + this.props.value
    }, this.props.value) : /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
      noedit: true
    });
  }

});

},{"../../../admin/client/App/elemental":64,"../Field":92,"react":undefined}],103:[function(require,module,exports){
"use strict";

module.exports = require('../text/TextFilter');

},{"../text/TextFilter":113}],104:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _ItemsTableCell = _interopRequireDefault(require("../../components/ItemsTableCell"));

var _ItemsTableValue = _interopRequireDefault(require("../../components/ItemsTableValue"));

var _displayName = _interopRequireDefault(require("display-name"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NameColumn = _react.default.createClass({
  displayName: 'NameColumn',
  propTypes: {
    col: _react.default.PropTypes.object,
    data: _react.default.PropTypes.object,
    linkTo: _react.default.PropTypes.string
  },

  renderValue() {
    var value = this.props.data.fields[this.props.col.path];
    if (!value || !value.first && !value.last) return '(no name)';
    return (0, _displayName.default)(value.first, value.last);
  },

  render() {
    return /*#__PURE__*/_react.default.createElement(_ItemsTableCell.default, null, /*#__PURE__*/_react.default.createElement(_ItemsTableValue.default, {
      to: this.props.linkTo,
      padded: true,
      interior: true,
      field: this.props.col.type
    }, this.renderValue()));
  }

});

module.exports = NameColumn;

},{"../../components/ItemsTableCell":88,"../../components/ItemsTableValue":89,"display-name":undefined,"react":undefined}],105:[function(require,module,exports){
"use strict";

var _Field = _interopRequireDefault(require("../Field"));

var _react = _interopRequireWildcard(require("react"));

var _elemental = require("../../../admin/client/App/elemental");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NAME_SHAPE = {
  first: _react.PropTypes.string,
  last: _react.PropTypes.string
};
module.exports = _Field.default.create({
  displayName: 'NameField',
  statics: {
    type: 'Name',
    getDefaultValue: () => ({
      first: '',
      last: ''
    })
  },
  propTypes: {
    onChange: _react.PropTypes.func.isRequired,
    path: _react.PropTypes.string.isRequired,
    paths: _react.PropTypes.shape(NAME_SHAPE).isRequired,
    value: _react.PropTypes.shape(NAME_SHAPE).isRequired
  },
  valueChanged: function (which, event) {
    const {
      value = {},
      path,
      onChange
    } = this.props;
    onChange({
      path,
      value: { ...value,
        [which]: event.target.value
      }
    });
  },
  changeFirst: function (event) {
    return this.valueChanged('first', event);
  },
  changeLast: function (event) {
    return this.valueChanged('last', event);
  },

  renderValue() {
    const inputStyle = {
      width: '100%'
    };
    const {
      value = {}
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_elemental.Grid.Row, {
      small: "one-half",
      gutter: 10
    }, /*#__PURE__*/_react.default.createElement(_elemental.Grid.Col, null, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
      noedit: true,
      style: inputStyle
    }, value.first)), /*#__PURE__*/_react.default.createElement(_elemental.Grid.Col, null, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
      noedit: true,
      style: inputStyle
    }, value.last)));
  },

  renderField() {
    const {
      value = {},
      paths,
      autoFocus
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_elemental.Grid.Row, {
      small: "one-half",
      gutter: 10
    }, /*#__PURE__*/_react.default.createElement(_elemental.Grid.Col, null, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
      autoFocus: autoFocus,
      autoComplete: "off",
      name: this.getInputName(paths.first),
      onChange: this.changeFirst,
      placeholder: "First name",
      value: value.first
    })), /*#__PURE__*/_react.default.createElement(_elemental.Grid.Col, null, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
      autoComplete: "off",
      name: this.getInputName(paths.last),
      onChange: this.changeLast,
      placeholder: "Last name",
      value: value.last
    })));
  }

});

},{"../../../admin/client/App/elemental":64,"../Field":92,"react":undefined}],106:[function(require,module,exports){
"use strict";

module.exports = require('../text/TextFilter');

},{"../text/TextFilter":113}],107:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _ItemsTableCell = _interopRequireDefault(require("../../components/ItemsTableCell"));

var _ItemsTableValue = _interopRequireDefault(require("../../components/ItemsTableValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PasswordColumn = _react.default.createClass({
  displayName: 'PasswordColumn',
  propTypes: {
    col: _react.default.PropTypes.object,
    data: _react.default.PropTypes.object
  },

  renderValue() {
    const value = this.props.data.fields[this.props.col.path];
    return value ? '********' : '';
  },

  render() {
    return /*#__PURE__*/_react.default.createElement(_ItemsTableCell.default, null, /*#__PURE__*/_react.default.createElement(_ItemsTableValue.default, {
      field: this.props.col.type
    }, this.renderValue()));
  }

});

module.exports = PasswordColumn;

},{"../../components/ItemsTableCell":88,"../../components/ItemsTableValue":89,"react":undefined}],108:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _Field = _interopRequireDefault(require("../Field"));

var _elemental = require("../../../admin/client/App/elemental");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _Field.default.create({
  displayName: 'PasswordField',
  statics: {
    type: 'Password'
  },

  getInitialState() {
    return {
      passwordIsSet: this.props.value ? true : false,
      showChangeUI: this.props.mode === 'create' ? true : false,
      password: '',
      confirm: ''
    };
  },

  valueChanged(which, event) {
    var newState = {};
    newState[which] = event.target.value;
    this.setState(newState);
  },

  showChangeUI() {
    this.setState({
      showChangeUI: true
    }, () => this.focus());
  },

  onCancel() {
    this.setState({
      showChangeUI: false
    }, () => this.focus());
  },

  renderValue() {
    return /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
      noedit: true
    }, this.props.value ? 'Password Set' : '');
  },

  renderField() {
    return this.state.showChangeUI ? this.renderFields() : this.renderChangeButton();
  },

  renderFields() {
    return /*#__PURE__*/_react.default.createElement(_elemental.InlineGroup, {
      block: true
    }, /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, {
      grow: true
    }, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
      autoComplete: "off",
      name: this.getInputName(this.props.path),
      onChange: this.valueChanged.bind(this, 'password'),
      placeholder: "New password",
      ref: "focusTarget",
      type: "password",
      value: this.state.password
    })), /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, {
      grow: true
    }, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
      autoComplete: "off",
      name: this.getInputName(this.props.paths.confirm),
      onChange: this.valueChanged.bind(this, 'confirm'),
      placeholder: "Confirm new password",
      value: this.state.confirm,
      type: "password"
    })), this.state.passwordIsSet ? /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, null, /*#__PURE__*/_react.default.createElement(_elemental.Button, {
      onClick: this.onCancel
    }, "Cancel")) : null);
  },

  renderChangeButton() {
    var label = this.state.passwordIsSet ? 'Change Password' : 'Set Password';
    return /*#__PURE__*/_react.default.createElement(_elemental.Button, {
      ref: "focusTarget",
      onClick: this.showChangeUI
    }, label);
  }

});

},{"../../../admin/client/App/elemental":64,"../Field":92,"react":undefined}],109:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _elemental = require("../../../admin/client/App/elemental");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EXISTS_OPTIONS = [{
  label: 'Is Set',
  value: true
}, {
  label: 'Is NOT Set',
  value: false
}];

function getDefaultValue() {
  return {
    exists: true
  };
}

var PasswordFilter = _react.default.createClass({
  displayName: "PasswordFilter",
  propTypes: {
    filter: _react.default.PropTypes.shape({
      exists: _react.default.PropTypes.oneOf(EXISTS_OPTIONS.map(i => i.value))
    })
  },
  statics: {
    getDefaultValue: getDefaultValue
  },

  getDefaultProps() {
    return {
      filter: getDefaultValue()
    };
  },

  toggleExists(value) {
    this.props.onChange({
      exists: value
    });
  },

  render() {
    const {
      filter
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_elemental.SegmentedControl, {
      equalWidthSegments: true,
      onChange: this.toggleExists,
      options: EXISTS_OPTIONS,
      value: filter.exists
    });
  }

});

module.exports = PasswordFilter;

},{"../../../admin/client/App/elemental":64,"react":undefined}],110:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _ItemsTableCell = _interopRequireDefault(require("../../components/ItemsTableCell"));

var _ItemsTableValue = _interopRequireDefault(require("../../components/ItemsTableValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const moreIndicatorStyle = {
  color: '#bbb',
  fontSize: '.8rem',
  fontWeight: 500,
  marginLeft: 8
};

var RelationshipColumn = _react.default.createClass({
  displayName: 'RelationshipColumn',
  propTypes: {
    col: _react.default.PropTypes.object,
    data: _react.default.PropTypes.object
  },

  renderMany(value) {
    if (!value || !value.length) return;
    const refList = this.props.col.field.refList;
    const items = [];

    for (let i = 0; i < 3; i++) {
      if (!value[i]) break;

      if (i) {
        items.push( /*#__PURE__*/_react.default.createElement("span", {
          key: 'comma' + i
        }, ", "));
      }

      items.push( /*#__PURE__*/_react.default.createElement(_ItemsTableValue.default, {
        interior: true,
        truncate: false,
        key: 'anchor' + i,
        to: Keystone.adminPath + '/' + refList.path + '/' + value[i].id
      }, value[i].name));
    }

    if (value.length > 3) {
      items.push( /*#__PURE__*/_react.default.createElement("span", {
        key: "more",
        style: moreIndicatorStyle
      }, "[...", value.length - 3, " more]"));
    }

    return /*#__PURE__*/_react.default.createElement(_ItemsTableValue.default, {
      field: this.props.col.type
    }, items);
  },

  renderValue(value) {
    if (!value) return;
    const refList = this.props.col.field.refList;
    return /*#__PURE__*/_react.default.createElement(_ItemsTableValue.default, {
      to: Keystone.adminPath + '/' + refList.path + '/' + value.id,
      padded: true,
      interior: true,
      field: this.props.col.type
    }, value.name);
  },

  render() {
    const value = this.props.data.fields[this.props.col.path];
    const many = this.props.col.field.many;
    return /*#__PURE__*/_react.default.createElement(_ItemsTableCell.default, null, many ? this.renderMany(value) : this.renderValue(value));
  }

});

module.exports = RelationshipColumn;

},{"../../components/ItemsTableCell":88,"../../components/ItemsTableValue":89,"react":undefined}],111:[function(require,module,exports){
"use strict";

var _async = _interopRequireDefault(require("async"));

var _Field = _interopRequireDefault(require("../Field"));

var _lists = require("../../../admin/client/utils/lists");

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _xhr = _interopRequireDefault(require("xhr"));

var _elemental = require("../../../admin/client/App/elemental");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compareValues(current, next) {
  const currentLength = current ? current.length : 0;
  const nextLength = next ? next.length : 0;
  if (currentLength !== nextLength) return false;

  for (let i = 0; i < currentLength; i++) {
    if (current[i] !== next[i]) return false;
  }

  return true;
}

module.exports = _Field.default.create({
  displayName: 'RelationshipField',
  statics: {
    type: 'Relationship'
  },

  getInitialState() {
    return {
      value: null,
      createIsOpen: false
    };
  },

  componentDidMount() {
    this._itemsCache = {};
    this.loadValue(this.props.value);
    this.__isMounted = true;
  },

  componentWillUnmount() {
    this.__isMounted = false;
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.value === this.props.value || nextProps.many && compareValues(this.props.value, nextProps.value)) return;
    this.loadValue(nextProps.value);
  },

  shouldCollapse() {
    if (this.props.many) {
      // many:true relationships have an Array for a value
      return this.props.collapse && !this.props.value.length;
    }

    return this.props.collapse && !this.props.value;
  },

  buildFilters() {
    var filters = {};

    _lodash.default.forEach(this.props.filters, (value, key) => {
      if (typeof value === 'string' && value[0] === ':') {
        var fieldName = value.slice(1);
        var val = this.props.values[fieldName];

        if (val) {
          filters[key] = val;
          return;
        } // check if filtering by id and item was already saved


        if (fieldName === '_id' && Keystone.item) {
          filters[key] = Keystone.item.id;
          return;
        }
      } else {
        filters[key] = value;
      }
    }, this);

    var parts = [];

    _lodash.default.forEach(filters, function (val, key) {
      parts.push('filters[' + key + '][value]=' + encodeURIComponent(val));
    });

    return parts.join('&');
  },

  cacheItem(item) {
    item.href = Keystone.adminPath + '/' + this.props.refList.path + '/' + item.id;
    this._itemsCache[item.id] = item;
  },

  loadValue(values) {
    if (!values) {
      return this.setState({
        loading: false,
        value: null
      });
    }

    ;
    values = Array.isArray(values) ? values : values.split(',');
    const cachedValues = values.map(i => this._itemsCache[i]).filter(i => i);

    if (cachedValues.length === values.length) {
      this.setState({
        loading: false,
        value: this.props.many ? cachedValues : cachedValues[0]
      });
      return;
    }

    this.setState({
      loading: true,
      value: null
    });

    _async.default.map(values, (value, done) => {
      (0, _xhr.default)({
        url: Keystone.adminPath + '/api/' + this.props.refList.path + '/' + value + '?basic',
        responseType: 'json'
      }, (err, resp, data) => {
        if (err || !data) return done(err);
        this.cacheItem(data);
        done(err, data);
      });
    }, (err, expanded) => {
      if (!this.__isMounted) return;
      this.setState({
        loading: false,
        value: this.props.many ? expanded : expanded[0]
      });
    });
  },

  // NOTE: this seems like the wrong way to add options to the Select
  loadOptionsCallback: {},

  loadOptions(input, callback) {
    // NOTE: this seems like the wrong way to add options to the Select
    this.loadOptionsCallback = callback;
    const filters = this.buildFilters();
    (0, _xhr.default)({
      url: Keystone.adminPath + '/api/' + this.props.refList.path + '?basic&search=' + input + '&' + filters,
      responseType: 'json'
    }, (err, resp, data) => {
      if (err) {
        console.error('Error loading items:', err);
        return callback(null, []);
      }

      data.results.forEach(this.cacheItem);
      callback(null, {
        options: data.results,
        complete: data.results.length === data.count
      });
    });
  },

  valueChanged(value) {
    this.props.onChange({
      path: this.props.path,
      value: value
    });
  },

  openCreate() {
    this.setState({
      createIsOpen: true
    });
  },

  closeCreate() {
    this.setState({
      createIsOpen: false
    });
  },

  onCreate(item) {
    this.cacheItem(item);

    if (Array.isArray(this.state.value)) {
      // For many relationships, append the new item to the end
      const values = this.state.value.map(item => item.id);
      values.push(item.id);
      this.valueChanged(values.join(','));
    } else {
      this.valueChanged(item.id);
    } // NOTE: this seems like the wrong way to add options to the Select


    this.loadOptionsCallback(null, {
      complete: true,
      options: Object.keys(this._itemsCache).map(k => this._itemsCache[k])
    });
    this.closeCreate();
  },

  renderSelect(noedit) {
    const inputName = this.getInputName(this.props.path);
    const emptyValueInput = this.props.many && (!this.state.value || !this.state.value.length) || !this.props.many && !this.state.value ? /*#__PURE__*/_react.default.createElement("input", {
      type: "hidden",
      name: inputName,
      value: ""
    }) : null;
    return /*#__PURE__*/_react.default.createElement("div", null, emptyValueInput, /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      style: {
        position: 'absolute',
        width: 1,
        height: 1,
        zIndex: -1,
        opacity: 0
      },
      tabIndex: "-1"
    }), /*#__PURE__*/_react.default.createElement(_reactSelect.default.Async, {
      multi: this.props.many,
      disabled: noedit,
      loadOptions: this.loadOptions,
      labelKey: "name",
      name: inputName,
      onChange: this.valueChanged,
      simpleValue: true,
      value: this.state.value,
      valueKey: "id"
    }));
  },

  renderInputGroup() {
    // TODO: find better solution
    //   when importing the CreateForm using: import CreateForm from '../../../admin/client/App/shared/CreateForm';
    //   CreateForm was imported as a blank object. This stack overflow post suggested lazilly requiring it:
    // http://stackoverflow.com/questions/29807664/cyclic-dependency-returns-empty-object-in-react-native
    // TODO: Implement this somewhere higher in the app, it breaks the encapsulation of the RelationshipField component
    const CreateForm = require('../../../admin/client/App/shared/CreateForm');

    return /*#__PURE__*/_react.default.createElement(_elemental.InlineGroup, {
      block: true
    }, /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, {
      grow: true
    }, this.renderSelect()), /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, null, /*#__PURE__*/_react.default.createElement(_elemental.Button, {
      onClick: this.openCreate
    }, "+")), /*#__PURE__*/_react.default.createElement(CreateForm, {
      list: _lists.listsByKey[this.props.refList.key],
      isOpen: this.state.createIsOpen,
      onCreate: this.onCreate,
      onCancel: this.closeCreate
    }));
  },

  renderValue() {
    const {
      many
    } = this.props;
    const {
      value
    } = this.state;
    const props = {
      children: value ? value.name : null,
      component: value ? 'a' : 'span',
      href: value ? value.href : null,
      noedit: true
    };
    return many ? this.renderSelect(true) : /*#__PURE__*/_react.default.createElement(_elemental.FormInput, props);
  },

  renderField() {
    if (this.props.createInline) {
      return this.renderInputGroup();
    } else {
      return this.renderSelect();
    }
  }

});

},{"../../../admin/client/App/elemental":64,"../../../admin/client/App/shared/CreateForm":66,"../../../admin/client/utils/lists":83,"../Field":92,"async":undefined,"lodash":undefined,"react":undefined,"react-select":undefined,"xhr":undefined}],112:[function(require,module,exports){
"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

var _async = _interopRequireDefault(require("async"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _xhr = _interopRequireDefault(require("xhr"));

var _elemental = require("../../../admin/client/App/elemental");

var _PopoutList = _interopRequireDefault(require("../../../admin/client/App/shared/Popout/PopoutList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const INVERTED_OPTIONS = [{
  label: 'Linked To',
  value: false
}, {
  label: 'NOT Linked To',
  value: true
}];

function getDefaultValue() {
  return {
    inverted: INVERTED_OPTIONS[0].value,
    value: []
  };
}

var RelationshipFilter = _react.default.createClass({
  displayName: "RelationshipFilter",
  propTypes: {
    field: _react.default.PropTypes.object,
    filter: _react.default.PropTypes.shape({
      inverted: _react.default.PropTypes.bool,
      value: _react.default.PropTypes.array
    }),
    onHeightChange: _react.default.PropTypes.func
  },
  statics: {
    getDefaultValue: getDefaultValue
  },

  getDefaultProps() {
    return {
      filter: getDefaultValue()
    };
  },

  getInitialState() {
    return {
      searchIsLoading: false,
      searchResults: [],
      searchString: '',
      selectedItems: [],
      valueIsLoading: true
    };
  },

  componentDidMount() {
    this._itemsCache = {};
    this.loadSearchResults(true);
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.filter.value !== this.props.filter.value) {
      this.populateValue(nextProps.filter.value);
    }
  },

  isLoading() {
    return this.state.searchIsLoading || this.state.valueIsLoading;
  },

  populateValue(value) {
    _async.default.map(value, (id, next) => {
      if (this._itemsCache[id]) return next(null, this._itemsCache[id]);
      (0, _xhr.default)({
        url: Keystone.adminPath + '/api/' + this.props.field.refList.path + '/' + id + '?basic',
        responseType: 'json'
      }, (err, resp, data) => {
        if (err || !data) return next(err);
        this.cacheItem(data);
        next(err, data);
      });
    }, (err, items) => {
      if (err) {
        // TODO: Handle errors better
        console.error('Error loading items:', err);
      }

      this.setState({
        valueIsLoading: false,
        selectedItems: items || []
      }, () => {
        (0, _reactDom.findDOMNode)(this.refs.focusTarget).focus();
      });
    });
  },

  cacheItem(item) {
    this._itemsCache[item.id] = item;
  },

  buildFilters() {
    var filters = {};

    _lodash.default.forEach(this.props.field.filters, function (value, key) {
      if (value[0] === ':') return;
      filters[key] = value;
    }, this);

    var parts = [];

    _lodash.default.forEach(filters, function (val, key) {
      parts.push('filters[' + key + '][value]=' + encodeURIComponent(val));
    });

    return parts.join('&');
  },

  loadSearchResults(thenPopulateValue) {
    const searchString = this.state.searchString;
    const filters = this.buildFilters();
    (0, _xhr.default)({
      url: Keystone.adminPath + '/api/' + this.props.field.refList.path + '?basic&search=' + searchString + '&' + filters,
      responseType: 'json'
    }, (err, resp, data) => {
      if (err) {
        // TODO: Handle errors better
        console.error('Error loading items:', err);
        this.setState({
          searchIsLoading: false
        });
        return;
      }

      data.results.forEach(this.cacheItem);

      if (thenPopulateValue) {
        this.populateValue(this.props.filter.value);
      }

      if (searchString !== this.state.searchString) return;
      this.setState({
        searchIsLoading: false,
        searchResults: data.results
      }, this.updateHeight);
    });
  },

  updateHeight() {
    if (this.props.onHeightChange) {
      this.props.onHeightChange(this.refs.container.offsetHeight);
    }
  },

  toggleInverted(inverted) {
    this.updateFilter({
      inverted
    });
  },

  updateSearch(e) {
    this.setState({
      searchString: e.target.value
    }, this.loadSearchResults);
  },

  selectItem(item) {
    const value = this.props.filter.value.concat(item.id);
    this.updateFilter({
      value
    });
  },

  removeItem(item) {
    const value = this.props.filter.value.filter(i => {
      return i !== item.id;
    });
    this.updateFilter({
      value
    });
  },

  updateFilter(value) {
    this.props.onChange({ ...this.props.filter,
      ...value
    });
  },

  renderItems(items, selected) {
    const itemIconHover = selected ? 'x' : 'check';
    return items.map((item, i) => {
      return /*#__PURE__*/_react.default.createElement(_PopoutList.default.Item, {
        key: `item-${i}-${item.id}`,
        icon: "dash",
        iconHover: itemIconHover,
        label: item.name,
        onClick: () => {
          if (selected) this.removeItem(item);else this.selectItem(item);
        }
      });
    });
  },

  render() {
    const selectedItems = this.state.selectedItems;
    const searchResults = this.state.searchResults.filter(i => {
      return this.props.filter.value.indexOf(i.id) === -1;
    });
    const placeholder = this.isLoading() ? 'Loading...' : 'Find a ' + this.props.field.label + '...';
    return /*#__PURE__*/_react.default.createElement("div", {
      ref: "container"
    }, /*#__PURE__*/_react.default.createElement(_elemental.FormField, null, /*#__PURE__*/_react.default.createElement(_elemental.SegmentedControl, {
      equalWidthSegments: true,
      options: INVERTED_OPTIONS,
      value: this.props.filter.inverted,
      onChange: this.toggleInverted
    })), /*#__PURE__*/_react.default.createElement(_elemental.FormField, {
      style: {
        borderBottom: '1px dashed rgba(0,0,0,0.1)',
        paddingBottom: '1em'
      }
    }, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
      autoFocus: true,
      ref: "focusTarget",
      value: this.state.searchString,
      onChange: this.updateSearch,
      placeholder: placeholder
    })), selectedItems.length ? /*#__PURE__*/_react.default.createElement(_PopoutList.default, null, /*#__PURE__*/_react.default.createElement(_PopoutList.default.Heading, null, "Selected"), this.renderItems(selectedItems, true)) : null, searchResults.length ? /*#__PURE__*/_react.default.createElement(_PopoutList.default, null, /*#__PURE__*/_react.default.createElement(_PopoutList.default.Heading, {
      style: selectedItems.length ? {
        marginTop: '2em'
      } : null
    }, "Items"), this.renderItems(searchResults)) : null);
  }

});

module.exports = RelationshipFilter;

},{"../../../admin/client/App/elemental":64,"../../../admin/client/App/shared/Popout/PopoutList":71,"async":undefined,"lodash":undefined,"react":undefined,"react-dom":undefined,"xhr":undefined}],113:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _elemental = require("../../../admin/client/App/elemental");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const INVERTED_OPTIONS = [{
  label: 'Matches',
  value: false
}, {
  label: 'Does NOT Match',
  value: true
}];
const MODE_OPTIONS = [{
  label: 'Contains',
  value: 'contains'
}, {
  label: 'Exactly',
  value: 'exactly'
}, {
  label: 'Begins with',
  value: 'beginsWith'
}, {
  label: 'Ends with',
  value: 'endsWith'
}];

function getDefaultValue() {
  return {
    mode: MODE_OPTIONS[0].value,
    inverted: INVERTED_OPTIONS[0].value,
    value: ''
  };
}

var TextFilter = _react.default.createClass({
  displayName: "TextFilter",
  propTypes: {
    filter: _react.default.PropTypes.shape({
      mode: _react.default.PropTypes.oneOf(MODE_OPTIONS.map(i => i.value)),
      inverted: _react.default.PropTypes.boolean,
      value: _react.default.PropTypes.string
    })
  },
  statics: {
    getDefaultValue: getDefaultValue
  },

  getDefaultProps() {
    return {
      filter: getDefaultValue()
    };
  },

  updateFilter(value) {
    this.props.onChange({ ...this.props.filter,
      ...value
    });
  },

  selectMode(e) {
    const mode = e.target.value;
    this.updateFilter({
      mode
    });
    (0, _reactDom.findDOMNode)(this.refs.focusTarget).focus();
  },

  toggleInverted(inverted) {
    this.updateFilter({
      inverted
    });
    (0, _reactDom.findDOMNode)(this.refs.focusTarget).focus();
  },

  updateValue(e) {
    this.updateFilter({
      value: e.target.value
    });
  },

  render() {
    const {
      field,
      filter
    } = this.props;
    const mode = MODE_OPTIONS.filter(i => i.value === filter.mode)[0];
    const placeholder = field.label + ' ' + mode.label.toLowerCase() + '...';
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_elemental.FormField, null, /*#__PURE__*/_react.default.createElement(_elemental.SegmentedControl, {
      equalWidthSegments: true,
      onChange: this.toggleInverted,
      options: INVERTED_OPTIONS,
      value: filter.inverted
    })), /*#__PURE__*/_react.default.createElement(_elemental.FormField, null, /*#__PURE__*/_react.default.createElement(_elemental.FormSelect, {
      onChange: this.selectMode,
      options: MODE_OPTIONS,
      value: mode.value
    })), /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
      autoFocus: true,
      onChange: this.updateValue,
      placeholder: placeholder,
      ref: "focusTarget",
      value: this.props.filter.value
    }));
  }

});

module.exports = TextFilter;

},{"../../../admin/client/App/elemental":64,"react":undefined,"react-dom":undefined}],114:[function(require,module,exports){
"use strict";

var ExMatch = require('expression-match'); // Matches objects with expressions

/**
 * Checks if something is an object
 *
 * @param  {Any} arg   The something we want to check the type of
 * @return {Boolean} If arg is an object or not
 */


function isObject(arg) {
  return Object.prototype.toString.call(arg) === '[object Object]';
}

;
/**
 * Evaluates the visibility of a field based on its dependencies and their values
 *
 * @param  {Object|Any} dependsOn The dependsOn variable we get from the field
 * @param  {Object}		values    The values currently in the fields
 * @return {Boolean}			  If the current field should be displayed based
 *                          	  on it's dependencies and their values
 */

module.exports = function evalDependsOn(dependsOn, values) {
  if (!isObject(dependsOn) || !Object.keys(dependsOn).length) {
    return true;
  } // Checks if the current field should be displayed, based on the values of
  // other fields and the dependsOn configuration of this field


  var Match = new ExMatch(dependsOn, values, false);
  return Match.match();
};

},{"expression-match":undefined}],115:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

},{}],"FieldTypes":[function(require,module,exports){
"use strict";

exports.Columns = {
  name: require("../../fields/types/name/NameColumn"),
  email: require("../../fields/types/email/EmailColumn"),
  password: require("../../fields/types/password/PasswordColumn"),
  boolean: require("../../fields/types/boolean/BooleanColumn"),
  datetime: require("../../fields/types/datetime/DatetimeColumn"),
  relationship: require("../../fields/types/relationship/RelationshipColumn"),
  id: require("../../fields/components/columns/IdColumn"),
  __unrecognised__: require("../../fields/components/columns/InvalidColumn")
};
exports.Fields = {
  name: require("../../fields/types/name/NameField"),
  email: require("../../fields/types/email/EmailField"),
  password: require("../../fields/types/password/PasswordField"),
  boolean: require("../../fields/types/boolean/BooleanField"),
  datetime: require("../../fields/types/datetime/DatetimeField"),
  relationship: require("../../fields/types/relationship/RelationshipField")
};
exports.Filters = {
  name: require("../../fields/types/name/NameFilter"),
  email: require("../../fields/types/email/EmailFilter"),
  password: require("../../fields/types/password/PasswordFilter"),
  boolean: require("../../fields/types/boolean/BooleanFilter"),
  datetime: require("../../fields/types/datetime/DatetimeFilter"),
  relationship: require("../../fields/types/relationship/RelationshipFilter")
};

},{"../../fields/components/columns/IdColumn":90,"../../fields/components/columns/InvalidColumn":91,"../../fields/types/boolean/BooleanColumn":93,"../../fields/types/boolean/BooleanField":94,"../../fields/types/boolean/BooleanFilter":95,"../../fields/types/datetime/DatetimeColumn":98,"../../fields/types/datetime/DatetimeField":99,"../../fields/types/datetime/DatetimeFilter":100,"../../fields/types/email/EmailColumn":101,"../../fields/types/email/EmailField":102,"../../fields/types/email/EmailFilter":103,"../../fields/types/name/NameColumn":104,"../../fields/types/name/NameField":105,"../../fields/types/name/NameFilter":106,"../../fields/types/password/PasswordColumn":107,"../../fields/types/password/PasswordField":108,"../../fields/types/password/PasswordFilter":109,"../../fields/types/relationship/RelationshipColumn":110,"../../fields/types/relationship/RelationshipField":111,"../../fields/types/relationship/RelationshipFilter":112}]},{},[]);
