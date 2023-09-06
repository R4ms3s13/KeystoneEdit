(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"../../../theme":71}],2:[function(require,module,exports){
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

},{"../../../theme":71,"./colors":1}],4:[function(require,module,exports){
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

},{"../../../theme":71,"glamor":undefined,"react":undefined}],5:[function(require,module,exports){
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

},{"../../../theme":71,"../../../utils/color":72,"../../../utils/css":74}],7:[function(require,module,exports){
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

},{"../../../theme":71,"../../../utils/color":72}],10:[function(require,module,exports){
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

},{"../../../theme":71,"../../../utils/css":74,"./colors":9}],12:[function(require,module,exports){
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

},{"../../../theme":71}],14:[function(require,module,exports){
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

},{"../../../theme":71,"./sizes":13}],15:[function(require,module,exports){
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

},{"../../../theme":71}],18:[function(require,module,exports){
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

},{"../../../utils/concatClassnames":73,"./noedit":19,"./styles":20,"glamor":undefined,"react":undefined}],19:[function(require,module,exports){
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

},{"../../../theme":71,"../../../utils/color":72,"glamor":undefined,"react":undefined}],20:[function(require,module,exports){
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

},{"../../../theme":71}],21:[function(require,module,exports){
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

},{"../../../theme":71}],23:[function(require,module,exports){
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

},{"../../../theme":71}],25:[function(require,module,exports){
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

},{"../../../theme":71,"../../../utils/color":72}],27:[function(require,module,exports){
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

},{"../../../theme":71}],32:[function(require,module,exports){
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

},{"../../../theme":71}],35:[function(require,module,exports){
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

},{"../../../theme":71,"glamor":undefined,"react":undefined}],37:[function(require,module,exports){
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

},{"../../../theme":71}],41:[function(require,module,exports){
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

},{"../../../theme":71}],44:[function(require,module,exports){
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

},{"../../../theme":71,"../Button":5,"../Spinner":61,"glamor":undefined,"react":undefined}],45:[function(require,module,exports){
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

},{"../../../theme":71,"glamor":undefined,"react":undefined}],46:[function(require,module,exports){
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

},{"../../../theme":71,"../Portal":53,"../ScrollLock":56,"glamor":undefined,"react":undefined}],47:[function(require,module,exports){
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

},{"../../../theme":71,"glamor":undefined,"react":undefined}],48:[function(require,module,exports){
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

},{"../../../theme":71,"../GlyphButton":29,"glamor":undefined,"react":undefined}],49:[function(require,module,exports){
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

},{"../../../theme":71,"./page":51,"glamor":undefined,"react":undefined}],51:[function(require,module,exports){
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

},{"../../../theme":71,"glamor":undefined,"react":undefined}],52:[function(require,module,exports){
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

},{"../../../theme":71,"react":undefined}],55:[function(require,module,exports){
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

},{"../../../theme":71}],58:[function(require,module,exports){
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

},{"../../../theme":71,"./colors":57}],60:[function(require,module,exports){
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

},{"../../../theme":71,"./colors":60,"./sizes":62,"glamor":undefined}],64:[function(require,module,exports){
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

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _xhr = _interopRequireDefault(require("xhr"));

var _Alert = _interopRequireDefault(require("./components/Alert"));

var _Brand = _interopRequireDefault(require("./components/Brand"));

var _UserInfo = _interopRequireDefault(require("./components/UserInfo"));

var _LoginForm = _interopRequireDefault(require("./components/LoginForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The actual Sign In view, with the login form
 */
var SigninView = _react.default.createClass({
  displayName: "SigninView",

  getInitialState() {
    return {
      email: '',
      password: '',
      isAnimating: false,
      isInvalid: false,
      invalidMessage: '',
      signedOut: window.location.search === '?signedout'
    };
  },

  componentDidMount() {
    // Focus the email field when we're mounted
    if (this.refs.email) {
      this.refs.email.select();
    }

    this.__isMounted = true;
  },

  componentWillUnmount() {
    this.__isMounted = false;
  },

  handleInputChange(e) {
    // Set the new state when the input changes
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  },

  handleSubmit(e) {
    e.preventDefault(); // If either password or mail are missing, show an error

    if (!this.state.email || !this.state.password) {
      return this.displayError('Please enter an email address and password to sign in.');
    }

    (0, _xhr.default)({
      url: `${Keystone.adminPath}/api/session/signin`,
      method: 'post',
      json: {
        email: this.state.email,
        password: this.state.password
      },
      headers: (0, _objectAssign.default)({}, Keystone.csrf.header)
    }, (err, resp, body) => {
      if (err || body && body.error) {
        return body.error === 'invalid csrf' ? this.displayError('Something went wrong; please refresh your browser and try again.') : this.displayError('The email and password you entered are not valid.');
      } else {
        // Redirect to where we came from or to the default admin path
        if (Keystone.redirect) {
          top.location.href = Keystone.redirect;
        } else {
          top.location.href = this.props.from ? this.props.from : Keystone.adminPath;
        }
      }
    });
  },

  /**
   * Display an error message
   *
   * @param  {String} message The message you want to show
   */
  displayError(message) {
    this.setState({
      isAnimating: true,
      isInvalid: true,
      invalidMessage: message
    });
    setTimeout(this.finishAnimation, 750);
  },

  // Finish the animation and select the email field
  finishAnimation() {
    if (!this.__isMounted) return;

    if (this.refs.email) {
      this.refs.email.select();
    }

    this.setState({
      isAnimating: false
    });
  },

  render() {
    const boxClassname = (0, _classnames.default)('auth-box', {
      'auth-box--has-errors': this.state.isAnimating
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "auth-wrapper"
    }, /*#__PURE__*/_react.default.createElement(_Alert.default, {
      isInvalid: this.state.isInvalid,
      signedOut: this.state.signedOut,
      invalidMessage: this.state.invalidMessage
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: boxClassname
    }, /*#__PURE__*/_react.default.createElement("h1", {
      className: "u-hidden-visually"
    }, this.props.brand ? this.props.brand : 'Keystone', " Sign In "), /*#__PURE__*/_react.default.createElement("div", {
      className: "auth-box__inner"
    }, /*#__PURE__*/_react.default.createElement(_Brand.default, {
      logo: this.props.logo,
      brand: this.props.brand
    }), this.props.user ? /*#__PURE__*/_react.default.createElement(_UserInfo.default, {
      adminPath: this.props.from ? this.props.from : Keystone.adminPath,
      signoutPath: `${Keystone.adminPath}/signout`,
      userCanAccessKeystone: this.props.userCanAccessKeystone,
      userName: this.props.user.name
    }) : /*#__PURE__*/_react.default.createElement(_LoginForm.default, {
      email: this.state.email,
      handleInputChange: this.handleInputChange,
      handleSubmit: this.handleSubmit,
      isAnimating: this.state.isAnimating,
      password: this.state.password
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "auth-footer"
    }, /*#__PURE__*/_react.default.createElement("span", null, "Powered by "), /*#__PURE__*/_react.default.createElement("a", {
      href: "http://keystonejs.com",
      target: "_blank",
      title: "The Node.js CMS and web application platform (new window)"
    }, "KeystoneJS")));
  }

});

module.exports = SigninView;

},{"./components/Alert":66,"./components/Brand":67,"./components/LoginForm":68,"./components/UserInfo":69,"classnames":undefined,"object-assign":75,"react":undefined,"xhr":undefined}],66:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _elemental = require("../../App/elemental");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders an Alert. Pass either an isInvalid and invalidMessage prop, or set
 * the signedOut prop to true to show the standard signed out message
 */
const AlertView = function (props) {
  if (props.isInvalid) {
    return /*#__PURE__*/_react.default.createElement(_elemental.Alert, {
      key: "error",
      color: "danger",
      style: {
        textAlign: 'center'
      }
    }, props.invalidMessage);
  } else if (props.signedOut) {
    return /*#__PURE__*/_react.default.createElement(_elemental.Alert, {
      key: "signed-out",
      color: "info",
      style: {
        textAlign: 'center'
      }
    }, "You have been signed out.");
  } else {
    // Can't return "null" from stateless components
    return /*#__PURE__*/_react.default.createElement("span", null);
  }
};

AlertView.propTypes = {
  invalidMessage: _react.default.PropTypes.string,
  isInvalid: _react.default.PropTypes.bool,
  signedOut: _react.default.PropTypes.bool
};
module.exports = AlertView;

},{"../../App/elemental":64,"react":undefined}],67:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders a logo, defaulting to the Keystone logo if no brand is specified in
 * the configuration
 */
const Brand = function (props) {
  // Default to the KeystoneJS logo
  let logo = {
    src: `${Keystone.adminPath}/images/logo.png`,
    width: 205,
    height: 68
  };

  if (props.logo) {
    // If the logo is set to a string, it's a direct link
    logo = typeof props.logo === 'string' ? {
      src: props.logo
    } : props.logo; // Optionally one can specify the logo as an array, also stating the
    // wanted width and height of the logo
    // TODO: Deprecate this

    if (Array.isArray(logo)) {
      logo = {
        src: logo[0],
        width: logo[1],
        height: logo[2]
      };
    }
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "auth-box__col"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "auth-box__brand"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/",
    className: "auth-box__brand__logo"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: logo.src,
    width: logo.width ? logo.width : null,
    height: logo.height ? logo.height : null,
    alt: props.brand
  }))));
};

module.exports = Brand;

},{"react":undefined}],68:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _elemental = require("../../App/elemental");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * The login form of the signin screen
 */
const LoginForm = _ref => {
  let {
    email,
    handleInputChange,
    handleSubmit,
    isAnimating,
    password
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "auth-box__col"
  }, /*#__PURE__*/_react.default.createElement(_elemental.Form, {
    onSubmit: handleSubmit,
    noValidate: true
  }, /*#__PURE__*/_react.default.createElement(_elemental.FormField, {
    label: "Email",
    htmlFor: "email"
  }, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
    autoFocus: true,
    type: "email",
    name: "email",
    onChange: handleInputChange,
    value: email
  })), /*#__PURE__*/_react.default.createElement(_elemental.FormField, {
    label: "Password",
    htmlFor: "password"
  }, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
    type: "password",
    name: "password",
    onChange: handleInputChange,
    value: password
  })), /*#__PURE__*/_react.default.createElement(_elemental.Button, {
    disabled: isAnimating,
    color: "primary",
    type: "submit"
  }, "Sign In")));
};

LoginForm.propTypes = {
  email: _react.PropTypes.string,
  handleInputChange: _react.PropTypes.func.isRequired,
  handleSubmit: _react.PropTypes.func.isRequired,
  isAnimating: _react.PropTypes.bool,
  password: _react.PropTypes.string
};
module.exports = LoginForm;

},{"../../App/elemental":64,"react":undefined}],69:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _elemental = require("../../App/elemental");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// TODO Figure out if we should change "Keystone" to "Admin area"
const UserInfo = _ref => {
  let {
    adminPath,
    signoutPath,
    userCanAccessKeystone,
    userName
  } = _ref;
  const adminButton = userCanAccessKeystone ? /*#__PURE__*/_react.default.createElement(_elemental.Button, {
    href: adminPath,
    color: "primary"
  }, "Open Keystone") : null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "auth-box__col"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Hi ", userName, ","), /*#__PURE__*/_react.default.createElement("p", null, "You're already signed in."), adminButton, /*#__PURE__*/_react.default.createElement(_elemental.Button, {
    href: signoutPath,
    variant: "link",
    color: "cancel"
  }, "Sign Out"));
};

UserInfo.propTypes = {
  adminPath: _react.PropTypes.string.isRequired,
  signoutPath: _react.PropTypes.string.isRequired,
  userCanAccessKeystone: _react.PropTypes.bool,
  userName: _react.PropTypes.string.isRequired
};
module.exports = UserInfo;

},{"../../App/elemental":64,"react":undefined}],70:[function(require,module,exports){
"use strict";

var _qs = _interopRequireDefault(require("qs"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Signin = _interopRequireDefault(require("./Signin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The signin page, it renders a page with a username and password input form.
 *
 * This is decoupled from the main app (in the "App/" folder) because we inject
 * lots of data into the other screens (like the lists that exist) that we don't
 * want to have injected here, so this is a completely separate route and template.
 */
// Sanitize from param
const internalFromRegex = /^\/[^\/\\]\w+/;

const params = _qs.default.parse(window.location.search.replace(/^\?/, ''));

const from = internalFromRegex.test(params.from) ? params.from : undefined;

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_Signin.default, {
  brand: Keystone.brand,
  from: from,
  logo: Keystone.logo,
  user: Keystone.user,
  userCanAccessKeystone: Keystone.userCanAccessKeystone
}), document.getElementById('signin-view'));

},{"./Signin":65,"qs":undefined,"react":undefined,"react-dom":undefined}],71:[function(require,module,exports){
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

},{"./utils/color":72}],72:[function(require,module,exports){
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

},{}],73:[function(require,module,exports){
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

},{}],74:[function(require,module,exports){
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

},{}],75:[function(require,module,exports){
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

},{}]},{},[70]);
