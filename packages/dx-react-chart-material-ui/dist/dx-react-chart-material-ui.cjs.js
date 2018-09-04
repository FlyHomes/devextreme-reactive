/**
 * Bundle of @devexpress/dx-react-chart-material-ui
 * Generated: 2018-09-04
 * Version: 1.7.2
 * License: https://js.devexpress.com/Licensing
 */

'use strict';

if (typeof process === "undefined") { var process = { env: {} }; }

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var PropTypes = require('prop-types');
var dxReactChart = require('@devexpress/dx-react-chart');
var classNames = _interopDefault(require('classnames'));
var styles = require('@material-ui/core/styles');
var List = _interopDefault(require('@material-ui/core/List'));
var ListItem = _interopDefault(require('@material-ui/core/ListItem'));
var ListItemText = _interopDefault(require('@material-ui/core/ListItemText'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var colorManipulator = require('@material-ui/core/styles/colorManipulator');
var dxChartCore = require('@devexpress/dx-chart-core');

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var styles$1 = function styles$$1(theme) {
  var _theme$typography = theme.typography,
      fontFamily = _theme$typography.fontFamily,
      fontSize = _theme$typography.fontSize,
      fontWeightLight = _theme$typography.fontWeightLight;

  return {
    root: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontWeight: fontWeightLight,
      display: 'flex',
      flexDirection: 'column',
      padding: '10px'
    }
  };
};

var RootBase = function (_React$PureComponent) {
  inherits(RootBase, _React$PureComponent);

  function RootBase() {
    classCallCheck(this, RootBase);
    return possibleConstructorReturn(this, (RootBase.__proto__ || Object.getPrototypeOf(RootBase)).apply(this, arguments));
  }

  createClass(RootBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          width = _props.width,
          height = _props.height,
          style = _props.style,
          classes = _props.classes,
          className = _props.className,
          restProps = objectWithoutProperties(_props, ['children', 'width', 'height', 'style', 'classes', 'className']);


      return React.createElement(
        'div',
        _extends({
          className: classNames(classes.root, className),
          style: _extends({
            height: height + 'px'
          }, width ? { width: width + 'px' } : null, style)
        }, restProps),
        children
      );
    }
  }]);
  return RootBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? RootBase.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  style: PropTypes.object,
  className: PropTypes.string
} : void 0;

RootBase.defaultProps = {
  className: undefined,
  children: undefined,
  style: null
};

var Root = styles.withStyles(styles$1)(RootBase);

var Chart$1 = function Chart$$1(_ref) {
  var children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['children']);
  return React.createElement(
    dxReactChart.Chart,
    _extends({
      rootComponent: Root
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? Chart$1.propTypes = {
  children: PropTypes.node.isRequired
} : void 0;

var styles$2 = function styles$$1() {
  return {
    root: {
      paddingTop: 16,
      paddingBottom: 16
    }
  };
};

var RootBase$1 = function (_React$PureComponent) {
  inherits(RootBase, _React$PureComponent);

  function RootBase() {
    classCallCheck(this, RootBase);
    return possibleConstructorReturn(this, (RootBase.__proto__ || Object.getPrototypeOf(RootBase)).apply(this, arguments));
  }

  createClass(RootBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          restProps = objectWithoutProperties(_props, ['children', 'classes', 'className']);

      return React.createElement(
        List,
        _extends({
          className: classNames(classes.root, className)
        }, restProps),
        children
      );
    }
  }]);
  return RootBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? RootBase$1.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

RootBase$1.defaultProps = {
  className: undefined
};

var Root$1 = styles.withStyles(styles$2, { name: 'LegendRoot' })(RootBase$1);

var styles$3 = function styles$$1(theme) {
  return {
    root: {
      alignItems: 'center',
      paddingTop: theme.spacing.unit * 0.5,
      paddingBottom: theme.spacing.unit * 0.5
    }
  };
};

var ItemBase = function (_React$PureComponent) {
  inherits(ItemBase, _React$PureComponent);

  function ItemBase() {
    classCallCheck(this, ItemBase);
    return possibleConstructorReturn(this, (ItemBase.__proto__ || Object.getPrototypeOf(ItemBase)).apply(this, arguments));
  }

  createClass(ItemBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          restProps = objectWithoutProperties(_props, ['children', 'classes', 'className']);

      return React.createElement(
        ListItem,
        _extends({
          className: classNames(classes.root, className)
        }, restProps),
        children
      );
    }
  }]);
  return ItemBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? ItemBase.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

ItemBase.defaultProps = {
  className: undefined
};

var Item = styles.withStyles(styles$3, { name: 'LegendItem' })(ItemBase);

var styles$4 = function styles$$1() {
  return {
    root: {
      fontSize: 14,
      paddingLeft: 8,
      paddingRight: 8
    }
  };
};

var LabelBase = function (_React$PureComponent) {
  inherits(LabelBase, _React$PureComponent);

  function LabelBase() {
    classCallCheck(this, LabelBase);
    return possibleConstructorReturn(this, (LabelBase.__proto__ || Object.getPrototypeOf(LabelBase)).apply(this, arguments));
  }

  createClass(LabelBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          style = _props.style,
          classes = _props.classes,
          className = _props.className,
          restProps = objectWithoutProperties(_props, ['text', 'style', 'classes', 'className']);

      return React.createElement(
        ListItemText,
        _extends({
          className: classNames(classes.root, className)
        }, restProps),
        text
      );
    }
  }]);
  return LabelBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? LabelBase.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  style: PropTypes.object,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

LabelBase.defaultProps = {
  className: undefined,
  style: null
};

var Label = styles.withStyles(styles$4, { name: 'LegendLabel' })(LabelBase);

var Marker = function Marker(_ref) {
  var color = _ref.color,
      restProps = objectWithoutProperties(_ref, ['color']);
  return React.createElement(
    'svg',
    _extends({ width: '10', height: '10', fill: color }, restProps),
    React.createElement('circle', { r: 5, cx: 5, cy: 5 })
  );
};

process.env.NODE_ENV !== "production" ? Marker.propTypes = {
  color: PropTypes.string
} : void 0;

Marker.defaultProps = {
  color: undefined
};

var Legend$1 = function (_React$PureComponent) {
  inherits(Legend$$1, _React$PureComponent);

  function Legend$$1() {
    classCallCheck(this, Legend$$1);
    return possibleConstructorReturn(this, (Legend$$1.__proto__ || Object.getPrototypeOf(Legend$$1)).apply(this, arguments));
  }

  createClass(Legend$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactChart.Legend, _extends({
        labelComponent: Label,
        markerComponent: Marker,
        rootComponent: Root$1,
        itemComponent: Item
      }, this.props));
    }
  }]);
  return Legend$$1;
}(React.PureComponent);

Legend$1.Root = Root$1;
Legend$1.Marker = Marker;
Legend$1.Label = Label;
Legend$1.Item = Item;

var Text = function (_React$PureComponent) {
  inherits(Text, _React$PureComponent);

  function Text() {
    classCallCheck(this, Text);
    return possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  createClass(Text, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          restProps = objectWithoutProperties(_props, ['text']);

      return React.createElement(
        Typography,
        _extends({ component: 'h3', variant: 'headline' }, restProps),
        text
      );
    }
  }]);
  return Text;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? Text.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
} : void 0;

var Title$1 = function (_React$PureComponent) {
  inherits(Title$$1, _React$PureComponent);

  function Title$$1() {
    classCallCheck(this, Title$$1);
    return possibleConstructorReturn(this, (Title$$1.__proto__ || Object.getPrototypeOf(Title$$1)).apply(this, arguments));
  }

  createClass(Title$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactChart.Title, _extends({
        textComponent: Text
      }, this.props));
    }
  }]);
  return Title$$1;
}(React.PureComponent);

Title$1.Text = Text;

var styles$5 = function styles$$1() {
  return {
    root: {
      stroke: 'none'
    }
  };
};

var SliceBase = function (_React$PureComponent) {
  inherits(SliceBase, _React$PureComponent);

  function SliceBase() {
    classCallCheck(this, SliceBase);
    return possibleConstructorReturn(this, (SliceBase.__proto__ || Object.getPrototypeOf(SliceBase)).apply(this, arguments));
  }

  createClass(SliceBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          x = _props.x,
          y = _props.y,
          classes = _props.classes,
          className = _props.className,
          value = _props.value,
          color = _props.color,
          restProps = objectWithoutProperties(_props, ['x', 'y', 'classes', 'className', 'value', 'color']);

      return React.createElement('path', _extends({
        fill: color,
        transform: 'translate(' + x + ' ' + y + ')',
        className: classNames(classes.root, className)
      }, restProps));
    }
  }]);
  return SliceBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? SliceBase.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  value: PropTypes.number.isRequired,
  color: PropTypes.string
} : void 0;

SliceBase.defaultProps = {
  className: undefined,
  color: undefined
};

var Slice = styles.withStyles(styles$5)(SliceBase);

var PieSeries$1 = function (_React$PureComponent) {
  inherits(PieSeries$$1, _React$PureComponent);

  function PieSeries$$1() {
    classCallCheck(this, PieSeries$$1);
    return possibleConstructorReturn(this, (PieSeries$$1.__proto__ || Object.getPrototypeOf(PieSeries$$1)).apply(this, arguments));
  }

  createClass(PieSeries$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactChart.PieSeries, _extends({
        pointComponent: Slice
      }, this.props));
    }
  }]);
  return PieSeries$$1;
}(React.PureComponent);

PieSeries$1.Point = Slice;

var Bar = function (_React$PureComponent) {
  inherits(Bar, _React$PureComponent);

  function Bar() {
    classCallCheck(this, Bar);
    return possibleConstructorReturn(this, (Bar.__proto__ || Object.getPrototypeOf(Bar)).apply(this, arguments));
  }

  createClass(Bar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          value = _props.value,
          restProps = objectWithoutProperties(_props, ['color', 'value']);

      return React.createElement('rect', _extends({ fill: color }, restProps));
    }
  }]);
  return Bar;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? Bar.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string
} : void 0;

Bar.defaultProps = {
  color: undefined
};

var BarSeries$1 = function (_React$PureComponent) {
  inherits(BarSeries$$1, _React$PureComponent);

  function BarSeries$$1() {
    classCallCheck(this, BarSeries$$1);
    return possibleConstructorReturn(this, (BarSeries$$1.__proto__ || Object.getPrototypeOf(BarSeries$$1)).apply(this, arguments));
  }

  createClass(BarSeries$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactChart.BarSeries, _extends({
        pointComponent: Bar
      }, this.props));
    }
  }]);
  return BarSeries$$1;
}(React.PureComponent);

BarSeries$1.Point = Bar;

var styles$6 = function styles$$1() {
  return {
    root: {
      fill: 'none',
      strokeWidth: '2px'
    }
  };
};

var PathBase = function (_React$PureComponent) {
  inherits(PathBase, _React$PureComponent);

  function PathBase() {
    classCallCheck(this, PathBase);
    return possibleConstructorReturn(this, (PathBase.__proto__ || Object.getPrototypeOf(PathBase)).apply(this, arguments));
  }

  createClass(PathBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          className = _props.className,
          coordinates = _props.coordinates,
          path = _props.path,
          color = _props.color,
          restProps = objectWithoutProperties(_props, ['classes', 'className', 'coordinates', 'path', 'color']);

      return React.createElement('path', _extends({
        stroke: color,
        className: classNames(classes.root, className),
        d: path(coordinates)
      }, restProps));
    }
  }]);
  return PathBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? PathBase.propTypes = {
  coordinates: PropTypes.array.isRequired,
  path: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.string
} : void 0;

PathBase.defaultProps = {
  className: undefined,
  color: undefined
};

var Path = styles.withStyles(styles$6)(PathBase);

var LineSeries$1 = function (_React$PureComponent) {
  inherits(LineSeries$$1, _React$PureComponent);

  function LineSeries$$1() {
    classCallCheck(this, LineSeries$$1);
    return possibleConstructorReturn(this, (LineSeries$$1.__proto__ || Object.getPrototypeOf(LineSeries$$1)).apply(this, arguments));
  }

  createClass(LineSeries$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactChart.LineSeries, _extends({
        seriesComponent: Path
      }, this.props));
    }
  }]);
  return LineSeries$$1;
}(React.PureComponent);

LineSeries$1.Path = Path;

var styles$7 = function styles$$1() {
  return {
    root: {
      opacity: 0.5
    }
  };
};

var PathBase$1 = function (_React$PureComponent) {
  inherits(PathBase, _React$PureComponent);

  function PathBase() {
    classCallCheck(this, PathBase);
    return possibleConstructorReturn(this, (PathBase.__proto__ || Object.getPrototypeOf(PathBase)).apply(this, arguments));
  }

  createClass(PathBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          className = _props.className,
          coordinates = _props.coordinates,
          path = _props.path,
          color = _props.color,
          restProps = objectWithoutProperties(_props, ['classes', 'className', 'coordinates', 'path', 'color']);

      return React.createElement('path', _extends({
        fill: color,
        className: classNames(classes.root, className),
        d: path(coordinates)
      }, restProps));
    }
  }]);
  return PathBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? PathBase$1.propTypes = {
  coordinates: PropTypes.array.isRequired,
  path: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.string
} : void 0;

PathBase$1.defaultProps = {
  className: undefined,
  color: undefined
};

var Area = styles.withStyles(styles$7)(PathBase$1);

var AreaSeries$1 = function (_React$PureComponent) {
  inherits(AreaSeries$$1, _React$PureComponent);

  function AreaSeries$$1() {
    classCallCheck(this, AreaSeries$$1);
    return possibleConstructorReturn(this, (AreaSeries$$1.__proto__ || Object.getPrototypeOf(AreaSeries$$1)).apply(this, arguments));
  }

  createClass(AreaSeries$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactChart.AreaSeries, _extends({
        seriesComponent: Area
      }, this.props));
    }
  }]);
  return AreaSeries$$1;
}(React.PureComponent);

AreaSeries$1.Path = Area;

var SplineSeries$1 = function (_React$PureComponent) {
  inherits(SplineSeries$$1, _React$PureComponent);

  function SplineSeries$$1() {
    classCallCheck(this, SplineSeries$$1);
    return possibleConstructorReturn(this, (SplineSeries$$1.__proto__ || Object.getPrototypeOf(SplineSeries$$1)).apply(this, arguments));
  }

  createClass(SplineSeries$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactChart.SplineSeries, _extends({
        seriesComponent: Path
      }, this.props));
    }
  }]);
  return SplineSeries$$1;
}(React.PureComponent);

SplineSeries$1.Path = Path;

var styles$8 = function styles$$1() {
  return {
    root: {
      stroke: 'none'
    }
  };
};

var PointBase = function (_React$PureComponent) {
  inherits(PointBase, _React$PureComponent);

  function PointBase() {
    classCallCheck(this, PointBase);
    return possibleConstructorReturn(this, (PointBase.__proto__ || Object.getPrototypeOf(PointBase)).apply(this, arguments));
  }

  createClass(PointBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          x = _props.x,
          y = _props.y,
          classes = _props.classes,
          className = _props.className,
          seriesComponent = _props.seriesComponent,
          value = _props.value,
          color = _props.color,
          restProps = objectWithoutProperties(_props, ['x', 'y', 'classes', 'className', 'seriesComponent', 'value', 'color']);

      return React.createElement('path', _extends({
        fill: color,
        transform: 'translate(' + x + ' ' + y + ')',
        className: classNames(classes.root, className)
      }, restProps));
    }
  }]);
  return PointBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? PointBase.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  d: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  seriesComponent: PropTypes.any,
  color: PropTypes.string
} : void 0;

PointBase.defaultProps = {
  className: undefined,
  seriesComponent: undefined,
  color: undefined
};

var Point = styles.withStyles(styles$8)(PointBase);

var ScatterSeries$1 = function (_React$PureComponent) {
  inherits(ScatterSeries$$1, _React$PureComponent);

  function ScatterSeries$$1() {
    classCallCheck(this, ScatterSeries$$1);
    return possibleConstructorReturn(this, (ScatterSeries$$1.__proto__ || Object.getPrototypeOf(ScatterSeries$$1)).apply(this, arguments));
  }

  createClass(ScatterSeries$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactChart.ScatterSeries, _extends({
        pointComponent: Point
      }, this.props));
    }
  }]);
  return ScatterSeries$$1;
}(React.PureComponent);

ScatterSeries$1.Point = Point;
ScatterSeries$1.Path = dxReactChart.ScatterSeries.Path;

var getBorderColor = function getBorderColor(theme) {
  return theme.palette.type === 'light' ? colorManipulator.lighten(colorManipulator.fade(theme.palette.divider, 1), 0.88) : colorManipulator.darken(colorManipulator.fade(theme.palette.divider, 1), 0.8);
};

var styles$9 = function styles$$1(theme) {
  return {
    root: {
      stroke: getBorderColor(theme),
      shapeRendering: 'crispEdges'
    }
  };
};

var LineBase = function (_React$PureComponent) {
  inherits(LineBase, _React$PureComponent);

  function LineBase() {
    classCallCheck(this, LineBase);
    return possibleConstructorReturn(this, (LineBase.__proto__ || Object.getPrototypeOf(LineBase)).apply(this, arguments));
  }

  createClass(LineBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          x1 = _props.x1,
          x2 = _props.x2,
          y1 = _props.y1,
          y2 = _props.y2,
          classes = _props.classes,
          className = _props.className,
          restProps = objectWithoutProperties(_props, ['x1', 'x2', 'y1', 'y2', 'classes', 'className']);

      return React.createElement('path', _extends({
        className: classNames(classes.root, className),
        d: 'M ' + x1 + ' ' + y1 + ' L ' + x2 + ' ' + y2
      }, restProps));
    }
  }]);
  return LineBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? LineBase.propTypes = {
  x1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

LineBase.defaultProps = {
  className: undefined
};

var Line = styles.withStyles(styles$9)(LineBase);

var Grid$1 = function (_React$PureComponent) {
  inherits(Grid$$1, _React$PureComponent);

  function Grid$$1() {
    classCallCheck(this, Grid$$1);
    return possibleConstructorReturn(this, (Grid$$1.__proto__ || Object.getPrototypeOf(Grid$$1)).apply(this, arguments));
  }

  createClass(Grid$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactChart.Grid, _extends({
        lineComponent: Line
      }, this.props));
    }
  }]);
  return Grid$$1;
}(React.PureComponent);

Grid$1.Line = Line;

var styles$10 = function styles$$1() {
  return {
    root: {
      shapeRendering: 'crispEdges'
    }
  };
};

var RootBase$2 = function (_React$PureComponent) {
  inherits(RootBase, _React$PureComponent);

  function RootBase() {
    classCallCheck(this, RootBase);
    return possibleConstructorReturn(this, (RootBase.__proto__ || Object.getPrototypeOf(RootBase)).apply(this, arguments));
  }

  createClass(RootBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          x = _props.x,
          y = _props.y,
          refsHandler = _props.refsHandler,
          children = _props.children,
          className = _props.className,
          classes = _props.classes,
          restProps = objectWithoutProperties(_props, ['x', 'y', 'refsHandler', 'children', 'className', 'classes']);

      return React.createElement(
        'g',
        _extends({
          className: classNames(classes.root, className),
          ref: refsHandler,
          transform: 'translate(' + x + ' ' + y + ')'
        }, restProps),
        children
      );
    }
  }]);
  return RootBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? RootBase$2.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  refsHandler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

RootBase$2.defaultProps = {
  className: undefined
};

var Root$2 = styles.withStyles(styles$10)(RootBase$2);

var styles$11 = function styles$$1(theme) {
  return {
    root: {
      stroke: getBorderColor(theme),
      shapeRendering: 'crispEdges'
    }
  };
};

var TickBase = function (_React$PureComponent) {
  inherits(TickBase, _React$PureComponent);

  function TickBase() {
    classCallCheck(this, TickBase);
    return possibleConstructorReturn(this, (TickBase.__proto__ || Object.getPrototypeOf(TickBase)).apply(this, arguments));
  }

  createClass(TickBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          x1 = _props.x1,
          x2 = _props.x2,
          y1 = _props.y1,
          y2 = _props.y2,
          classes = _props.classes,
          className = _props.className,
          restProps = objectWithoutProperties(_props, ['x1', 'x2', 'y1', 'y2', 'classes', 'className']);

      return React.createElement('path', _extends({
        className: classNames(classes.root, className),
        d: 'M ' + x1 + ' ' + y1 + ' L ' + x2 + ' ' + y2
      }, restProps));
    }
  }]);
  return TickBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? TickBase.propTypes = {
  x1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

TickBase.defaultProps = {
  className: undefined
};

var Tick = styles.withStyles(styles$11)(TickBase);

var styles$12 = function styles$$1(theme) {
  var fontFamily = theme.typography.fontFamily;

  return {
    root: {
      fill: theme.palette.text.secondary,
      fontFamily: fontFamily,
      fontSize: 12,
      fontWeight: 400,
      backgroundColor: theme.palette.background.paper
    }
  };
};

var LabelBase$1 = function (_React$PureComponent) {
  inherits(LabelBase, _React$PureComponent);

  function LabelBase() {
    classCallCheck(this, LabelBase);
    return possibleConstructorReturn(this, (LabelBase.__proto__ || Object.getPrototypeOf(LabelBase)).apply(this, arguments));
  }

  createClass(LabelBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          x = _props.x,
          y = _props.y,
          dominantBaseline = _props.dominantBaseline,
          textAnchor = _props.textAnchor,
          classes = _props.classes,
          className = _props.className,
          restProps = objectWithoutProperties(_props, ['text', 'x', 'y', 'dominantBaseline', 'textAnchor', 'classes', 'className']);


      return React.createElement(
        'text',
        _extends({
          className: classNames(classes.root, className),
          dominantBaseline: dominantBaseline,
          textAnchor: textAnchor,
          x: x,
          y: y
        }, restProps),
        text
      );
    }
  }]);
  return LabelBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? LabelBase$1.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  dominantBaseline: PropTypes.string.isRequired,
  textAnchor: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

LabelBase$1.defaultProps = {
  className: undefined
};

var Label$1 = styles.withStyles(styles$12)(LabelBase$1);

var styles$13 = function styles$$1(theme) {
  return {
    root: {
      stroke: getBorderColor(theme),
      shapeRendering: 'crispEdges'
    }
  };
};

var LineBase$1 = function (_React$PureComponent) {
  inherits(LineBase, _React$PureComponent);

  function LineBase() {
    classCallCheck(this, LineBase);
    return possibleConstructorReturn(this, (LineBase.__proto__ || Object.getPrototypeOf(LineBase)).apply(this, arguments));
  }

  createClass(LineBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          orientation = _props.orientation,
          classes = _props.classes,
          className = _props.className,
          restProps = objectWithoutProperties(_props, ['width', 'height', 'orientation', 'classes', 'className']);

      return React.createElement('path', _extends({
        className: classNames(classes.root, className),
        d: 'M 0 0 L ' + (orientation === 'horizontal' ? width : 0) + ' ' + (orientation === 'horizontal' ? 0 : height)
      }, restProps));
    }
  }]);
  return LineBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? LineBase$1.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  orientation: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

LineBase$1.defaultProps = {
  className: undefined
};

var Line$1 = styles.withStyles(styles$13)(LineBase$1);

var ValueAxis = function (_React$PureComponent) {
  inherits(ValueAxis, _React$PureComponent);

  function ValueAxis() {
    classCallCheck(this, ValueAxis);
    return possibleConstructorReturn(this, (ValueAxis.__proto__ || Object.getPrototypeOf(ValueAxis)).apply(this, arguments));
  }

  createClass(ValueAxis, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactChart.Axis, _extends({
        rootComponent: Root$2,
        tickComponent: Tick,
        labelComponent: Label$1,
        lineComponent: Line$1
      }, _extends({ position: dxChartCore.LEFT }, this.props)));
    }
  }]);
  return ValueAxis;
}(React.PureComponent);

ValueAxis.Root = Root$2;
ValueAxis.Tick = Tick;
ValueAxis.Label = Label$1;
ValueAxis.Line = Line$1;

var ArgumentAxis = function (_React$PureComponent) {
  inherits(ArgumentAxis, _React$PureComponent);

  function ArgumentAxis() {
    classCallCheck(this, ArgumentAxis);
    return possibleConstructorReturn(this, (ArgumentAxis.__proto__ || Object.getPrototypeOf(ArgumentAxis)).apply(this, arguments));
  }

  createClass(ArgumentAxis, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactChart.Axis, _extends({
        rootComponent: Root$2,
        tickComponent: Tick,
        labelComponent: Label$1,
        lineComponent: Line$1
      }, _extends({ position: dxChartCore.BOTTOM }, this.props, { isArgumentAxis: true })));
    }
  }]);
  return ArgumentAxis;
}(React.PureComponent);

ArgumentAxis.Root = Root$2;
ArgumentAxis.Tick = Tick;
ArgumentAxis.Label = Label$1;
ArgumentAxis.Line = Line$1;

exports.Chart = Chart$1;
exports.Legend = Legend$1;
exports.Title = Title$1;
exports.PieSeries = PieSeries$1;
exports.BarSeries = BarSeries$1;
exports.LineSeries = LineSeries$1;
exports.AreaSeries = AreaSeries$1;
exports.SplineSeries = SplineSeries$1;
exports.ScatterSeries = ScatterSeries$1;
exports.Grid = Grid$1;
exports.ValueAxis = ValueAxis;
exports.ArgumentAxis = ArgumentAxis;
//# sourceMappingURL=dx-react-chart-material-ui.cjs.js.map
