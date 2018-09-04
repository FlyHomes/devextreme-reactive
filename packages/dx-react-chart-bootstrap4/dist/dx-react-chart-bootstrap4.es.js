/**
 * Bundle of @devexpress/dx-react-chart-bootstrap4
 * Generated: 2018-09-04
 * Version: 1.7.2
 * License: https://js.devexpress.com/Licensing
 */

import { PureComponent, createElement } from 'react';
import { any, array, func, node, number, object, oneOfType, string } from 'prop-types';
import { AreaSeries, Axis, BarSeries, Chart, Grid, Legend, LineSeries, PieSeries, ScatterSeries, SplineSeries, Title } from '@devexpress/dx-react-chart';
import classNames from 'classnames';
import { BOTTOM, LEFT } from '@devexpress/dx-chart-core';

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

var Root = function (_React$PureComponent) {
  inherits(Root, _React$PureComponent);

  function Root() {
    classCallCheck(this, Root);
    return possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  createClass(Root, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          width = _props.width,
          height = _props.height,
          style = _props.style,
          className = _props.className,
          restProps = objectWithoutProperties(_props, ['children', 'width', 'height', 'style', 'className']);


      return createElement(
        'div',
        _extends({
          style: _extends({}, style, {
            height: height + 'px'
          }, width ? { width: width + 'px' } : null),
          className: classNames('dx-c-bs4-container', className)
        }, restProps),
        children
      );
    }
  }]);
  return Root;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Root.propTypes = {
  children: node,
  width: number.isRequired,
  height: number.isRequired,
  style: object,
  className: string
} : void 0;

Root.defaultProps = {
  children: undefined,
  style: undefined,
  className: undefined
};

var Chart$1 = function Chart$$1(_ref) {
  var children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['children']);
  return createElement(
    Chart,
    _extends({
      rootComponent: Root
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? Chart$1.propTypes = {
  children: node.isRequired
} : void 0;

var Root$1 = function (_React$PureComponent) {
  inherits(Root, _React$PureComponent);

  function Root() {
    classCallCheck(this, Root);
    return possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  createClass(Root, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          restProps = objectWithoutProperties(_props, ['children', 'className']);

      return createElement(
        'ul',
        _extends({ className: classNames('list-group py-3', className) }, restProps),
        children
      );
    }
  }]);
  return Root;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Root$1.propTypes = {
  children: node.isRequired,
  className: string
} : void 0;

Root$1.defaultProps = {
  className: undefined
};

var Label = function (_React$PureComponent) {
  inherits(Label, _React$PureComponent);

  function Label() {
    classCallCheck(this, Label);
    return possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
  }

  createClass(Label, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          className = _props.className,
          restProps = objectWithoutProperties(_props, ['text', 'className']);

      return createElement(
        'span',
        _extends({ className: classNames('text-body pl-2 pr-2', className) }, restProps),
        text
      );
    }
  }]);
  return Label;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Label.propTypes = {
  text: oneOfType([string, number]).isRequired,
  className: string
} : void 0;

Label.defaultProps = {
  className: undefined
};

var Marker = function (_React$PureComponent) {
  inherits(Marker, _React$PureComponent);

  function Marker() {
    classCallCheck(this, Marker);
    return possibleConstructorReturn(this, (Marker.__proto__ || Object.getPrototypeOf(Marker)).apply(this, arguments));
  }

  createClass(Marker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          color = _props.color,
          restProps = objectWithoutProperties(_props, ['className', 'color']);

      return createElement(
        'svg',
        _extends({ className: className, fill: color, width: '10', height: '10' }, restProps),
        createElement('circle', _extends({ r: 5, cx: 5, cy: 5 }, restProps))
      );
    }
  }]);
  return Marker;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Marker.propTypes = {
  className: string,
  color: string
} : void 0;

Marker.defaultProps = {
  className: undefined,
  color: undefined
};

var Item = function (_React$PureComponent) {
  inherits(Item, _React$PureComponent);

  function Item() {
    classCallCheck(this, Item);
    return possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  createClass(Item, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          restProps = objectWithoutProperties(_props, ['children', 'className']);

      return createElement(
        'li',
        _extends({ className: classNames('d-flex list-group-item border-0 py-1 px-4 align-items-center', className) }, restProps),
        children
      );
    }
  }]);
  return Item;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Item.propTypes = {
  children: node.isRequired,
  className: string
} : void 0;

Item.defaultProps = {
  className: undefined
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
      return createElement(Legend, _extends({
        rootComponent: Root$1,
        labelComponent: Label,
        markerComponent: Marker,
        itemComponent: Item
      }, this.props));
    }
  }]);
  return Legend$$1;
}(PureComponent);

Legend$1.Root = Root$1;
Legend$1.Marker = Marker;
Legend$1.Label = Label;
Legend$1.Label = Item;

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

      return createElement(
        'h3',
        restProps,
        text
      );
    }
  }]);
  return Text;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Text.propTypes = {
  text: oneOfType([string, number]).isRequired
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
      return createElement(Title, _extends({
        textComponent: Text
      }, this.props));
    }
  }]);
  return Title$$1;
}(PureComponent);

Title$1.Text = Text;

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

      return createElement('rect', _extends({ fill: color }, restProps));
    }
  }]);
  return Bar;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Bar.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  color: string,
  value: number.isRequired
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
      return createElement(BarSeries, _extends({
        pointComponent: Bar
      }, this.props));
    }
  }]);
  return BarSeries$$1;
}(PureComponent);

BarSeries$1.Point = Bar;

var Slice = function (_React$PureComponent) {
  inherits(Slice, _React$PureComponent);

  function Slice() {
    classCallCheck(this, Slice);
    return possibleConstructorReturn(this, (Slice.__proto__ || Object.getPrototypeOf(Slice)).apply(this, arguments));
  }

  createClass(Slice, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          x = _props.x,
          y = _props.y,
          d = _props.d,
          value = _props.value,
          color = _props.color,
          restProps = objectWithoutProperties(_props, ['x', 'y', 'd', 'value', 'color']);

      return createElement('path', _extends({
        fill: color,
        transform: 'translate(' + x + ' ' + y + ')',
        d: d
      }, restProps));
    }
  }]);
  return Slice;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Slice.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
  d: string.isRequired,
  value: number.isRequired,
  style: object,
  color: string
} : void 0;

Slice.defaultProps = {
  style: null,
  color: undefined
};

var PieSeries$1 = function (_React$PureComponent) {
  inherits(PieSeries$$1, _React$PureComponent);

  function PieSeries$$1() {
    classCallCheck(this, PieSeries$$1);
    return possibleConstructorReturn(this, (PieSeries$$1.__proto__ || Object.getPrototypeOf(PieSeries$$1)).apply(this, arguments));
  }

  createClass(PieSeries$$1, [{
    key: 'render',
    value: function render() {
      return createElement(PieSeries, _extends({
        pointComponent: Slice
      }, this.props));
    }
  }]);
  return PieSeries$$1;
}(PureComponent);

PieSeries$1.Point = Slice;

var Path = function (_React$PureComponent) {
  inherits(Path, _React$PureComponent);

  function Path() {
    classCallCheck(this, Path);
    return possibleConstructorReturn(this, (Path.__proto__ || Object.getPrototypeOf(Path)).apply(this, arguments));
  }

  createClass(Path, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          coordinates = _props.coordinates,
          path = _props.path,
          color = _props.color,
          restProps = objectWithoutProperties(_props, ['className', 'coordinates', 'path', 'color']);

      return createElement('path', _extends({
        stroke: color,
        className: classNames('dx-c-bs4-fill-none dx-c-bs4-series-path', className),
        d: path(coordinates)
      }, restProps));
    }
  }]);
  return Path;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Path.propTypes = {
  className: string,
  coordinates: array.isRequired,
  path: func.isRequired,
  color: string
} : void 0;

Path.defaultProps = {
  className: undefined,
  color: undefined
};

var LineSeries$1 = function (_React$PureComponent) {
  inherits(LineSeries$$1, _React$PureComponent);

  function LineSeries$$1() {
    classCallCheck(this, LineSeries$$1);
    return possibleConstructorReturn(this, (LineSeries$$1.__proto__ || Object.getPrototypeOf(LineSeries$$1)).apply(this, arguments));
  }

  createClass(LineSeries$$1, [{
    key: 'render',
    value: function render() {
      return createElement(LineSeries, _extends({
        seriesComponent: Path
      }, this.props));
    }
  }]);
  return LineSeries$$1;
}(PureComponent);

LineSeries$1.Path = Path;

var Area = function (_React$PureComponent) {
  inherits(Area, _React$PureComponent);

  function Area() {
    classCallCheck(this, Area);
    return possibleConstructorReturn(this, (Area.__proto__ || Object.getPrototypeOf(Area)).apply(this, arguments));
  }

  createClass(Area, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          coordinates = _props.coordinates,
          path = _props.path,
          color = _props.color,
          restProps = objectWithoutProperties(_props, ['className', 'coordinates', 'path', 'color']);

      return createElement('path', _extends({
        fill: color,
        className: classNames('dx-c-bs4-series-opacity', className),
        d: path(coordinates)
      }, restProps));
    }
  }]);
  return Area;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Area.propTypes = {
  className: string,
  coordinates: array.isRequired,
  path: func.isRequired,
  color: string
} : void 0;

Area.defaultProps = {
  className: undefined,
  color: undefined
};

var AreaSeries$1 = function (_React$PureComponent) {
  inherits(AreaSeries$$1, _React$PureComponent);

  function AreaSeries$$1() {
    classCallCheck(this, AreaSeries$$1);
    return possibleConstructorReturn(this, (AreaSeries$$1.__proto__ || Object.getPrototypeOf(AreaSeries$$1)).apply(this, arguments));
  }

  createClass(AreaSeries$$1, [{
    key: 'render',
    value: function render() {
      return createElement(AreaSeries, _extends({
        seriesComponent: Area
      }, this.props));
    }
  }]);
  return AreaSeries$$1;
}(PureComponent);

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
      return createElement(SplineSeries, _extends({
        seriesComponent: Path
      }, this.props));
    }
  }]);
  return SplineSeries$$1;
}(PureComponent);

SplineSeries$1.Path = Path;

var Point = function (_React$PureComponent) {
  inherits(Point, _React$PureComponent);

  function Point() {
    classCallCheck(this, Point);
    return possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).apply(this, arguments));
  }

  createClass(Point, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          x = _props.x,
          y = _props.y,
          seriesComponent = _props.seriesComponent,
          value = _props.value,
          color = _props.color,
          restProps = objectWithoutProperties(_props, ['x', 'y', 'seriesComponent', 'value', 'color']);

      return createElement('path', _extends({
        fill: color,
        transform: 'translate(' + x + ' ' + y + ')'
      }, restProps));
    }
  }]);
  return Point;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Point.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
  d: string.isRequired,
  seriesComponent: any,
  value: number.isRequired,
  color: string
} : void 0;

Point.defaultProps = {
  seriesComponent: null,
  color: undefined
};

var ScatterSeries$1 = function (_React$PureComponent) {
  inherits(ScatterSeries$$1, _React$PureComponent);

  function ScatterSeries$$1() {
    classCallCheck(this, ScatterSeries$$1);
    return possibleConstructorReturn(this, (ScatterSeries$$1.__proto__ || Object.getPrototypeOf(ScatterSeries$$1)).apply(this, arguments));
  }

  createClass(ScatterSeries$$1, [{
    key: 'render',
    value: function render() {
      return createElement(ScatterSeries, _extends({
        pointComponent: Point
      }, this.props));
    }
  }]);
  return ScatterSeries$$1;
}(PureComponent);

ScatterSeries$1.Point = Point;
ScatterSeries$1.Path = ScatterSeries.Path;

var Line = function (_React$PureComponent) {
  inherits(Line, _React$PureComponent);

  function Line() {
    classCallCheck(this, Line);
    return possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
  }

  createClass(Line, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          x1 = _props.x1,
          x2 = _props.x2,
          y1 = _props.y1,
          y2 = _props.y2,
          className = _props.className,
          restProps = objectWithoutProperties(_props, ['x1', 'x2', 'y1', 'y2', 'className']);

      return createElement('path', _extends({
        d: 'M ' + x1 + ' ' + y1 + ' L ' + x2 + ' ' + y2,
        className: classNames('dx-c-bs4-stroke-current-color dx-c-bs4-crisp-edges dx-c-bs4-axis-opacity', className)
      }, restProps));
    }
  }]);
  return Line;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Line.propTypes = {
  x1: number.isRequired,
  x2: number.isRequired,
  y1: number.isRequired,
  y2: number.isRequired,
  className: string
} : void 0;

Line.defaultProps = {
  className: undefined
};

var Grid$1 = function (_React$PureComponent) {
  inherits(Grid$$1, _React$PureComponent);

  function Grid$$1() {
    classCallCheck(this, Grid$$1);
    return possibleConstructorReturn(this, (Grid$$1.__proto__ || Object.getPrototypeOf(Grid$$1)).apply(this, arguments));
  }

  createClass(Grid$$1, [{
    key: 'render',
    value: function render() {
      return createElement(Grid, _extends({
        lineComponent: Line
      }, this.props));
    }
  }]);
  return Grid$$1;
}(PureComponent);

Grid$1.Line = Line;

var Root$2 = function (_React$PureComponent) {
  inherits(Root, _React$PureComponent);

  function Root() {
    classCallCheck(this, Root);
    return possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  createClass(Root, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          x = _props.x,
          y = _props.y,
          refsHandler = _props.refsHandler,
          children = _props.children,
          className = _props.className,
          restProps = objectWithoutProperties(_props, ['x', 'y', 'refsHandler', 'children', 'className']);

      return createElement(
        'g',
        _extends({
          ref: refsHandler,
          transform: 'translate(' + x + ' ' + y + ')',
          className: classNames('dx-c-bs4-crisp-edges', className)
        }, restProps),
        children
      );
    }
  }]);
  return Root;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Root$2.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
  refsHandler: func.isRequired,
  children: node.isRequired,
  className: string
} : void 0;

Root$2.defaultProps = {
  className: undefined
};

var Tick = function (_React$PureComponent) {
  inherits(Tick, _React$PureComponent);

  function Tick() {
    classCallCheck(this, Tick);
    return possibleConstructorReturn(this, (Tick.__proto__ || Object.getPrototypeOf(Tick)).apply(this, arguments));
  }

  createClass(Tick, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          x1 = _props.x1,
          x2 = _props.x2,
          y1 = _props.y1,
          y2 = _props.y2,
          className = _props.className,
          restProps = objectWithoutProperties(_props, ['x1', 'x2', 'y1', 'y2', 'className']);

      return createElement('path', _extends({
        d: 'M ' + x1 + ' ' + y1 + ' L ' + x2 + ' ' + y2,
        className: classNames('dx-c-bs4-stroke-current-color dx-c-bs4-crisp-edges dx-c-bs4-axis-opacity', className)
      }, restProps));
    }
  }]);
  return Tick;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Tick.propTypes = {
  x1: number.isRequired,
  x2: number.isRequired,
  y1: number.isRequired,
  y2: number.isRequired,
  className: string
} : void 0;

Tick.defaultProps = {
  className: undefined
};

var Label$1 = function (_React$PureComponent) {
  inherits(Label, _React$PureComponent);

  function Label() {
    classCallCheck(this, Label);
    return possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
  }

  createClass(Label, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          x = _props.x,
          y = _props.y,
          dominantBaseline = _props.dominantBaseline,
          textAnchor = _props.textAnchor,
          className = _props.className,
          restProps = objectWithoutProperties(_props, ['text', 'x', 'y', 'dominantBaseline', 'textAnchor', 'className']);


      return createElement(
        'text',
        _extends({
          dominantBaseline: dominantBaseline,
          textAnchor: textAnchor,
          x: x,
          y: y,
          className: classNames('dx-c-bs4-fill-current-color dx-c-bs4-axis-label text-muted', className)
        }, restProps),
        text
      );
    }
  }]);
  return Label;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Label$1.propTypes = {
  text: oneOfType([string, number]).isRequired,
  x: number.isRequired,
  y: number.isRequired,
  dominantBaseline: string.isRequired,
  textAnchor: string.isRequired,
  className: string
} : void 0;

Label$1.defaultProps = {
  className: undefined
};

var Line$1 = function (_React$PureComponent) {
  inherits(Line, _React$PureComponent);

  function Line() {
    classCallCheck(this, Line);
    return possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
  }

  createClass(Line, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          orientation = _props.orientation,
          className = _props.className,
          restProps = objectWithoutProperties(_props, ['width', 'height', 'orientation', 'className']);

      return createElement('path', _extends({
        d: 'M 0 0 L ' + (orientation === 'horizontal' ? width : 0) + ' ' + (orientation === 'horizontal' ? 0 : height),
        className: classNames('dx-c-bs4-stroke-current-color dx-c-bs4-axis-opacity', className)
      }, restProps));
    }
  }]);
  return Line;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Line$1.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
  orientation: string.isRequired,
  className: string
} : void 0;

Line$1.defaultProps = {
  className: undefined
};

var ValueAxis = function (_React$PureComponent) {
  inherits(ValueAxis, _React$PureComponent);

  function ValueAxis() {
    classCallCheck(this, ValueAxis);
    return possibleConstructorReturn(this, (ValueAxis.__proto__ || Object.getPrototypeOf(ValueAxis)).apply(this, arguments));
  }

  createClass(ValueAxis, [{
    key: 'render',
    value: function render() {
      return createElement(Axis, _extends({
        rootComponent: Root$2,
        tickComponent: Tick,
        labelComponent: Label$1,
        lineComponent: Line$1
      }, _extends({ position: LEFT }, this.props)));
    }
  }]);
  return ValueAxis;
}(PureComponent);

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
      return createElement(Axis, _extends({
        rootComponent: Root$2,
        tickComponent: Tick,
        labelComponent: Label$1,
        lineComponent: Line$1
      }, _extends({ position: BOTTOM }, this.props, { isArgumentAxis: true })));
    }
  }]);
  return ArgumentAxis;
}(PureComponent);

ArgumentAxis.Root = Root$2;
ArgumentAxis.Tick = Tick;
ArgumentAxis.Label = Label$1;
ArgumentAxis.Line = Line$1;

export { Chart$1 as Chart, Legend$1 as Legend, Title$1 as Title, BarSeries$1 as BarSeries, PieSeries$1 as PieSeries, LineSeries$1 as LineSeries, AreaSeries$1 as AreaSeries, SplineSeries$1 as SplineSeries, ScatterSeries$1 as ScatterSeries, Grid$1 as Grid, ValueAxis, ArgumentAxis };
//# sourceMappingURL=dx-react-chart-bootstrap4.es.js.map
