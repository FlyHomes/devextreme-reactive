/**
 * Bundle of @devexpress/dx-react-chart
 * Generated: 2018-09-04
 * Version: 1.7.2
 * License: https://js.devexpress.com/Licensing
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('@devexpress/dx-react-core'), require('@devexpress/dx-chart-core'), require('d3-shape')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', '@devexpress/dx-react-core', '@devexpress/dx-chart-core', 'd3-shape'], factory) :
	(factory((global.DevExpress = global.DevExpress || {}, global.DevExpress.DXReactChart = {}),global.React,global.PropTypes,global.DevExpress.DXReactCore,global.DevExpress.DXChartCore,global.d3Shape));
}(this, (function (exports,React,PropTypes,dxReactCore,dxChartCore,d3Shape) { 'use strict';

if (typeof process === "undefined") { var process = { env: {} }; }

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





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var ChartCore = function (_React$PureComponent) {
  inherits(ChartCore, _React$PureComponent);

  function ChartCore() {
    classCallCheck(this, ChartCore);
    return possibleConstructorReturn(this, (ChartCore.__proto__ || Object.getPrototypeOf(ChartCore)).apply(this, arguments));
  }

  createClass(ChartCore, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      var getArgumentAxisName = function getArgumentAxisName(_ref) {
        var argumentAxisName = _ref.argumentAxisName;
        return dxChartCore.axisName(argumentAxisName);
      };
      var processedData = function processedData(_ref2) {
        var series = _ref2.series,
            processingData = _ref2.processingData;
        return dxChartCore.prepareData(data, series, processingData);
      };
      var calculatedDomains = function calculatedDomains(_ref3) {
        var axes = _ref3.axes,
            series = _ref3.series,
            chartData = _ref3.data,
            argumentAxisName = _ref3.argumentAxisName,
            startFromZero = _ref3.startFromZero,
            computedDomain = _ref3.computedDomain;
        return computedDomain(axes, series, chartData, argumentAxisName, startFromZero);
      };
      return React.createElement(
        dxReactCore.Plugin,
        null,
        React.createElement(dxReactCore.Getter, { name: 'data', computed: processedData }),
        React.createElement(dxReactCore.Getter, { name: 'argumentAxisName', computed: getArgumentAxisName }),
        React.createElement(dxReactCore.Getter, { name: 'domains', computed: calculatedDomains })
      );
    }
  }]);
  return ChartCore;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? ChartCore.propTypes = {
  data: PropTypes.array.isRequired
} : void 0;

var AxesLayout = function AxesLayout() {
  return React.createElement(
    dxReactCore.Plugin,
    null,
    React.createElement(
      dxReactCore.Template,
      { name: 'canvas' },
      React.createElement(
        'div',
        { id: 'center-center', style: { display: 'flex', flexDirection: 'column', flexGrow: 1 } },
        React.createElement(
          'div',
          { id: dxChartCore.TOP + '-axis-container', style: { display: 'flex', flexDirection: 'row' } },
          React.createElement(dxReactCore.TemplatePlaceholder, { name: dxChartCore.TOP + '-' + dxChartCore.LEFT + '-axis' }),
          React.createElement(dxReactCore.TemplatePlaceholder, { name: dxChartCore.TOP + '-axis' }),
          React.createElement(dxReactCore.TemplatePlaceholder, { name: dxChartCore.TOP + '-' + dxChartCore.RIGHT + '-axis' })
        ),
        React.createElement(
          'div',
          { id: 'center-axis-container', style: { display: 'flex', flexDirection: 'row', flexGrow: 1 } },
          React.createElement(dxReactCore.TemplatePlaceholder, { name: dxChartCore.LEFT + '-axis' }),
          React.createElement(dxReactCore.TemplatePlaceholder, null),
          React.createElement(dxReactCore.TemplatePlaceholder, { name: dxChartCore.RIGHT + '-axis' })
        ),
        React.createElement(
          'div',
          { id: dxChartCore.BOTTOM + '-axis-container', style: { display: 'flex', flexDirection: 'row' } },
          React.createElement(dxReactCore.TemplatePlaceholder, { name: dxChartCore.BOTTOM + '-' + dxChartCore.LEFT + '-axis' }),
          React.createElement(dxReactCore.TemplatePlaceholder, { name: dxChartCore.BOTTOM + '-axis' }),
          React.createElement(dxReactCore.TemplatePlaceholder, { name: dxChartCore.BOTTOM + '-' + dxChartCore.RIGHT + '-axis' })
        )
      )
    )
  );
};

var SpaceFillingRects = function (_React$PureComponent) {
  inherits(SpaceFillingRects, _React$PureComponent);

  function SpaceFillingRects() {
    classCallCheck(this, SpaceFillingRects);
    return possibleConstructorReturn(this, (SpaceFillingRects.__proto__ || Object.getPrototypeOf(SpaceFillingRects)).apply(this, arguments));
  }

  createClass(SpaceFillingRects, [{
    key: 'render',
    value: function render() {
      var placeholders = this.props.placeholders;

      return React.createElement(
        dxReactCore.Plugin,
        { name: 'SpaceFillingRects' },
        placeholders.map(function (name) {
          return React.createElement(
            dxReactCore.Template,
            { name: name, key: name },
            React.createElement(
              dxReactCore.TemplateConnector,
              null,
              function (_ref) {
                var positions = _ref.layouts;

                var _name$split = name.split('-'),
                    _name$split2 = slicedToArray(_name$split, 3),
                    horizontal = _name$split2[1],
                    postfix = _name$split2[2];

                var _ref2 = positions[horizontal + (postfix ? '-' + postfix : '')] || {},
                    width = _ref2.width;

                return React.createElement('div', { id: name, style: { width: width } });
              }
            )
          );
        })
      );
    }
  }]);
  return SpaceFillingRects;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? SpaceFillingRects.propTypes = {
  placeholders: PropTypes.arrayOf(PropTypes.string).isRequired
} : void 0;

var Pane = function (_React$PureComponent) {
  inherits(Pane, _React$PureComponent);

  function Pane() {
    classCallCheck(this, Pane);
    return possibleConstructorReturn(this, (Pane.__proto__ || Object.getPrototypeOf(Pane)).apply(this, arguments));
  }

  createClass(Pane, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          changeBBox = _props.changeBBox;

      changeBBox({ placeholder: 'pane', bBox: { width: width, height: height } });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(_ref) {
      var prevWidth = _ref.width,
          prevHeight = _ref.height,
          changeBBox = _ref.changeBBox;
      var _props2 = this.props,
          width = _props2.width,
          height = _props2.height;

      if (prevWidth !== width || prevHeight !== height) {
        changeBBox({ placeholder: 'pane', bBox: { width: width, height: height } });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          width = _props3.width,
          height = _props3.height;


      return React.createElement(
        'div',
        { style: { width: '100%' } },
        React.createElement(
          'svg',
          {
            width: width,
            height: height,
            style: {
              position: 'absolute', left: 0, top: 0, overflow: 'visible'
            }
          },
          React.createElement(dxReactCore.TemplatePlaceholder, { name: 'series' })
        )
      );
    }
  }]);
  return Pane;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? Pane.propTypes = {
  changeBBox: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
} : void 0;

/* eslint-disable-next-line react/prefer-stateless-function */
var PaneLayout = function (_React$PureComponent) {
  inherits(PaneLayout, _React$PureComponent);

  function PaneLayout() {
    classCallCheck(this, PaneLayout);
    return possibleConstructorReturn(this, (PaneLayout.__proto__ || Object.getPrototypeOf(PaneLayout)).apply(this, arguments));
  }

  createClass(PaneLayout, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        dxReactCore.Plugin,
        { name: 'PaneLayout' },
        React.createElement(
          dxReactCore.Template,
          { name: 'canvas' },
          React.createElement(
            dxReactCore.TemplateConnector,
            null,
            function (_, _ref) {
              var changeBBox = _ref.changeBBox;
              return React.createElement(
                dxReactCore.Sizer,
                {
                  style: { flex: 1, zIndex: 1 }
                },
                function (_ref2) {
                  var width = _ref2.width,
                      height = _ref2.height;
                  return React.createElement(Pane, {
                    changeBBox: changeBBox,
                    height: height,
                    width: width
                  });
                }
              );
            }
          )
        )
      );
    }
  }]);
  return PaneLayout;
}(React.PureComponent);

var LayoutManager = function (_React$Component) {
  inherits(LayoutManager, _React$Component);

  function LayoutManager(props) {
    classCallCheck(this, LayoutManager);

    var _this = possibleConstructorReturn(this, (LayoutManager.__proto__ || Object.getPrototypeOf(LayoutManager)).call(this, props));

    var _this$props = _this.props,
        width = _this$props.width,
        height = _this$props.height;


    _this.state = { bBoxes: { pane: { width: width, height: height } } };

    var stateHelper = dxReactCore.createStateHelper(_this);

    _this.changeBBox = stateHelper.applyFieldReducer.bind(stateHelper, 'bBoxes', dxChartCore.bBoxes);
    return _this;
  }

  createClass(LayoutManager, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          Root = _props.rootComponent,
          restProps = objectWithoutProperties(_props, ['width', 'height', 'rootComponent']);
      var stateBBoxes = this.state.bBoxes;


      return React.createElement(
        dxReactCore.Plugin,
        null,
        React.createElement(dxReactCore.Getter, { name: 'layouts', value: stateBBoxes }),
        React.createElement(dxReactCore.Action, { name: 'changeBBox', action: this.changeBBox }),
        React.createElement(
          dxReactCore.Template,
          { name: 'root' },
          React.createElement(
            Root,
            _extends({
              height: height,
              width: width
            }, restProps),
            React.createElement(dxReactCore.TemplatePlaceholder, { name: 'canvas' })
          )
        )
      );
    }
  }]);
  return LayoutManager;
}(React.Component);

process.env.NODE_ENV !== "production" ? LayoutManager.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number.isRequired,
  rootComponent: PropTypes.func.isRequired
} : void 0;

LayoutManager.defaultProps = {
  width: 0
};

var ComponentLayout = function ComponentLayout() {
  return React.createElement(
    dxReactCore.Plugin,
    { name: 'ComponentLayout' },
    React.createElement(
      dxReactCore.Template,
      { name: 'canvas' },
      React.createElement(
        'div',
        { id: dxChartCore.TOP + '-container', style: { display: 'flex', flexDirection: 'row' } },
        React.createElement(dxReactCore.TemplatePlaceholder, { name: dxChartCore.TOP + '-' + dxChartCore.LEFT }),
        React.createElement(dxReactCore.TemplatePlaceholder, { name: dxChartCore.TOP }),
        React.createElement(dxReactCore.TemplatePlaceholder, { name: dxChartCore.TOP + '-' + dxChartCore.LEFT })
      ),
      React.createElement(
        'div',
        { id: 'center-container', style: { display: 'flex', flexDirection: 'row', flexGrow: 1 } },
        React.createElement(dxReactCore.TemplatePlaceholder, { name: dxChartCore.LEFT }),
        React.createElement(dxReactCore.TemplatePlaceholder, null),
        React.createElement(dxReactCore.TemplatePlaceholder, { name: dxChartCore.RIGHT })
      ),
      React.createElement(
        'div',
        { id: dxChartCore.BOTTOM + '-container', style: { display: 'flex', flexDirection: 'row' } },
        React.createElement(dxReactCore.TemplatePlaceholder, { name: dxChartCore.BOTTOM + '-' + dxChartCore.LEFT }),
        React.createElement(dxReactCore.TemplatePlaceholder, { name: dxChartCore.BOTTOM })
      )
    )
  );
};

var themeComputing = function themeComputing(_ref) {
  var series = _ref.series;
  return dxChartCore.palette(series);
};
var pieThemeComputing = function pieThemeComputing(_ref2) {
  var domains$$1 = _ref2.domains,
      argumentAxisName = _ref2.argumentAxisName;
  return dxChartCore.palette(domains$$1[argumentAxisName].domain.map(function (uniqueName) {
    return { uniqueName: uniqueName };
  }));
};

var ThemeManager = function ThemeManager() {
  return React.createElement(
    dxReactCore.Plugin,
    { name: 'ThemeManager' },
    React.createElement(dxReactCore.Getter, { name: 'colorDomain', computed: themeComputing }),
    React.createElement(dxReactCore.Getter, { name: 'pieColorDomain', computed: pieThemeComputing })
  );
};

var Chart = function (_React$PureComponent) {
  inherits(Chart, _React$PureComponent);

  function Chart() {
    classCallCheck(this, Chart);
    return possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).apply(this, arguments));
  }

  createClass(Chart, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          width = _props.width,
          height = _props.height,
          children = _props.children,
          Root = _props.rootComponent,
          restProps = objectWithoutProperties(_props, ['data', 'width', 'height', 'children', 'rootComponent']);

      return React.createElement(
        dxReactCore.PluginHost,
        null,
        children,
        React.createElement(ChartCore, { data: data }),
        React.createElement(ThemeManager, null),
        React.createElement(LayoutManager, _extends({
          width: width,
          height: height,
          rootComponent: Root
        }, restProps)),
        React.createElement(PaneLayout, null),
        React.createElement(AxesLayout, null),
        React.createElement(ComponentLayout, null),
        React.createElement(SpaceFillingRects, { placeholders: [dxChartCore.TOP + '-' + dxChartCore.LEFT, dxChartCore.TOP + '-' + dxChartCore.RIGHT, dxChartCore.BOTTOM + '-' + dxChartCore.LEFT, dxChartCore.BOTTOM + '-' + dxChartCore.RIGHT, dxChartCore.TOP + '-' + dxChartCore.LEFT + '-axis', dxChartCore.TOP + '-' + dxChartCore.RIGHT + '-axis', dxChartCore.BOTTOM + '-' + dxChartCore.LEFT + '-axis', dxChartCore.BOTTOM + '-' + dxChartCore.RIGHT + '-axis']
        })
      );
    }
  }]);
  return Chart;
}(React.PureComponent);
process.env.NODE_ENV !== "production" ? Chart.propTypes = {
  data: PropTypes.array.isRequired,
  rootComponent: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.node
} : void 0;

Chart.defaultProps = {
  height: 500,
  width: undefined,
  children: null
};

var Legend = function (_React$PureComponent) {
  inherits(Legend, _React$PureComponent);

  function Legend() {
    classCallCheck(this, Legend);
    return possibleConstructorReturn(this, (Legend.__proto__ || Object.getPrototypeOf(Legend)).apply(this, arguments));
  }

  createClass(Legend, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Marker = _props.markerComponent,
          Label = _props.labelComponent,
          Root = _props.rootComponent,
          Item = _props.itemComponent,
          position = _props.position;

      var placeholder = position;
      return React.createElement(
        dxReactCore.Plugin,
        { name: 'Legend' },
        React.createElement(
          dxReactCore.Template,
          { name: placeholder },
          React.createElement(dxReactCore.TemplatePlaceholder, null),
          React.createElement(
            dxReactCore.TemplateConnector,
            null,
            function (_ref) {
              var series = _ref.series,
                  colorDomain = _ref.colorDomain;
              return React.createElement(
                Root,
                { name: 'legend-' + placeholder },
                colorDomain.domain().map(function (domainName) {
                  var _series$find = series.find(function (_ref2) {
                    var uniqueName = _ref2.uniqueName;
                    return uniqueName === domainName;
                  }),
                      name = _series$find.name,
                      color = _series$find.color;

                  return React.createElement(
                    Item,
                    { key: domainName },
                    React.createElement(Marker, { name: name, color: color || colorDomain(domainName) }),
                    React.createElement(Label, { text: name })
                  );
                })
              );
            }
          )
        )
      );
    }
  }]);
  return Legend;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? Legend.propTypes = {
  markerComponent: PropTypes.func.isRequired,
  labelComponent: PropTypes.func.isRequired,
  rootComponent: PropTypes.func.isRequired,
  itemComponent: PropTypes.func.isRequired,
  position: PropTypes.string
} : void 0;

Legend.defaultProps = {
  position: 'right'
};

var Title = function (_React$PureComponent) {
  inherits(Title, _React$PureComponent);

  function Title() {
    classCallCheck(this, Title);
    return possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
  }

  createClass(Title, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Text = _props.textComponent,
          text = _props.text,
          position = _props.position,
          restProps = objectWithoutProperties(_props, ['textComponent', 'text', 'position']);

      var placeholder = position;
      return React.createElement(
        dxReactCore.Plugin,
        { name: 'Title' },
        React.createElement(
          dxReactCore.Template,
          { name: placeholder },
          React.createElement(dxReactCore.TemplatePlaceholder, null),
          React.createElement(Text, _extends({ text: text }, restProps))
        )
      );
    }
  }]);
  return Title;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? Title.propTypes = {
  textComponent: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  position: PropTypes.string
} : void 0;

Title.defaultProps = {
  position: 'top'
};

var Scale = function (_React$PureComponent) {
  inherits(Scale, _React$PureComponent);

  function Scale() {
    classCallCheck(this, Scale);
    return possibleConstructorReturn(this, (Scale.__proto__ || Object.getPrototypeOf(Scale)).apply(this, arguments));
  }

  createClass(Scale, [{
    key: 'render',
    value: function render() {
      var extensions = this.props.extensions;

      var getExtension = function getExtension() {
        return dxChartCore.computedExtension(extensions);
      };
      return React.createElement(
        dxReactCore.Plugin,
        { name: 'Scale' },
        React.createElement(dxReactCore.Getter, { name: 'computedDomain', value: dxChartCore.domains }),
        React.createElement(dxReactCore.Getter, { name: 'scaleExtension', computed: getExtension })
      );
    }
  }]);
  return Scale;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? Scale.propTypes = {
  extensions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    constructor: PropTypes.func
  }))
} : void 0;

Scale.defaultProps = {
  extensions: []
};

var computedSeries = function computedSeries(_ref) {
  var _ref$series = _ref.series,
      series = _ref$series === undefined ? [] : _ref$series;
  return dxChartCore.seriesWithStacks(series);
};

// eslint-disable-next-line react/prefer-stateless-function
var Stack = function (_React$PureComponent) {
  inherits(Stack, _React$PureComponent);

  function Stack() {
    classCallCheck(this, Stack);
    return possibleConstructorReturn(this, (Stack.__proto__ || Object.getPrototypeOf(Stack)).apply(this, arguments));
  }

  createClass(Stack, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          offset = _props.offset,
          order = _props.order;

      var computedStacks = function computedStacks(_ref2) {
        var _ref2$series = _ref2.series,
            series = _ref2$series === undefined ? [] : _ref2$series;
        return dxChartCore.stacks(series);
      };
      return React.createElement(
        dxReactCore.Plugin,
        { name: 'Stack' },
        React.createElement(dxReactCore.Getter, { name: 'series', computed: computedSeries }),
        React.createElement(dxReactCore.Getter, { name: 'processingData', value: dxChartCore.processData(offset, order) }),
        React.createElement(dxReactCore.Getter, { name: 'stacks', computed: computedStacks })
      );
    }
  }]);
  return Stack;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? Stack.propTypes = {
  offset: PropTypes.func,
  order: PropTypes.func
} : void 0;

Stack.defaultProps = {
  offset: d3Shape.stackOffsetDiverging,
  order: d3Shape.stackOrderNone
};

var withSeriesPlugin = function withSeriesPlugin(Series, pluginName, pathType, calculateCoordinates) {
  var Component$$1 = function (_React$PureComponent) {
    inherits(Component$$1, _React$PureComponent);

    function Component$$1() {
      classCallCheck(this, Component$$1);
      return possibleConstructorReturn(this, (Component$$1.__proto__ || Object.getPrototypeOf(Component$$1)).apply(this, arguments));
    }

    createClass(Component$$1, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            name = _props.name,
            valueField = _props.valueField,
            argumentField = _props.argumentField,
            axisName$$1 = _props.axisName,
            stackProp = _props.stack,
            color = _props.color,
            groupWidth = _props.groupWidth,
            restProps = objectWithoutProperties(_props, ['name', 'valueField', 'argumentField', 'axisName', 'stack', 'color', 'groupWidth']);


        var symbolName = Symbol(name);
        var getSeriesDataComputed = function getSeriesDataComputed(_ref) {
          var series = _ref.series;
          return dxChartCore.seriesData(series, {
            valueField: valueField,
            argumentField: argumentField,
            name: name,
            symbolName: symbolName,
            axisName: axisName$$1,
            stack: stackProp,
            color: color,
            uniqueName: name
          });
        };
        var startFromZeroByAxes = function startFromZeroByAxes(_ref2) {
          var _ref2$startFromZero = _ref2.startFromZero,
              startFromZero = _ref2$startFromZero === undefined ? {} : _ref2$startFromZero;
          return dxChartCore.checkZeroStart(startFromZero, axisName$$1, pathType);
        };
        return React.createElement(
          dxReactCore.Plugin,
          { name: pluginName },
          React.createElement(dxReactCore.Getter, { name: 'series', computed: getSeriesDataComputed }),
          React.createElement(dxReactCore.Getter, { name: 'startFromZero', computed: startFromZeroByAxes }),
          React.createElement(
            dxReactCore.Template,
            { name: 'series' },
            React.createElement(dxReactCore.TemplatePlaceholder, null),
            React.createElement(
              dxReactCore.TemplateConnector,
              null,
              function (_ref3) {
                var series = _ref3.series,
                    domains$$1 = _ref3.domains,
                    stacks$$1 = _ref3.stacks,
                    data = _ref3.data,
                    argumentAxisName = _ref3.argumentAxisName,
                    layouts = _ref3.layouts,
                    scaleExtension = _ref3.scaleExtension,
                    colorDomain = _ref3.colorDomain,
                    pieColorDomain = _ref3.pieColorDomain;

                var _findSeriesByName = dxChartCore.findSeriesByName(symbolName, series),
                    stack = _findSeriesByName.stack,
                    uniqueName = _findSeriesByName.uniqueName;

                var scales = dxChartCore.xyScales(domains$$1[argumentAxisName], domains$$1[axisName$$1], layouts.pane, groupWidth, scaleExtension);
                var calculatedCoordinates = calculateCoordinates(data, scales, argumentField, valueField, name, stack, stacks$$1, restProps, scaleExtension);

                return React.createElement(Series, _extends({
                  uniqueName: uniqueName,
                  colorDomain: pluginName === 'PieSeries' ? pieColorDomain : colorDomain,
                  coordinates: calculatedCoordinates,
                  color: color
                }, restProps));
              }
            )
          )
        );
      }
    }]);
    return Component$$1;
  }(React.PureComponent);

  process.env.NODE_ENV !== "production" ? Component$$1.propTypes = {
    name: PropTypes.string,
    valueField: PropTypes.string.isRequired,
    argumentField: PropTypes.string.isRequired,
    axisName: PropTypes.string,
    stack: PropTypes.string,
    color: PropTypes.string,
    groupWidth: PropTypes.number
  } : void 0;
  Component$$1.defaultProps = {
    name: 'defaultSeriesName',
    color: undefined,
    axisName: undefined,
    stack: undefined,
    groupWidth: 0.7
  };
  return Component$$1;
};

var withColor = function withColor(Series) {
  var ColorizedSeries = function ColorizedSeries(_ref) {
    var colorDomain = _ref.colorDomain,
        uniqueName = _ref.uniqueName,
        seriesColor = _ref.color,
        restProps = objectWithoutProperties(_ref, ['colorDomain', 'uniqueName', 'color']);

    var color = colorDomain(uniqueName);
    return React.createElement(Series, _extends({ color: seriesColor || color }, restProps));
  };
  process.env.NODE_ENV !== "production" ? ColorizedSeries.propTypes = {
    color: PropTypes.string,
    colorDomain: PropTypes.func.isRequired,
    uniqueName: PropTypes.string.isRequired
  } : void 0;
  ColorizedSeries.defaultProps = {
    color: undefined
  };

  return ColorizedSeries;
};

var Series = function Series(_ref) {
  var props = objectWithoutProperties(_ref, []);
  var Point = props.pointComponent,
      coordinates$$1 = props.coordinates,
      path = props.path,
      barWidth = props.barWidth,
      restProps = objectWithoutProperties(props, ['pointComponent', 'coordinates', 'path', 'barWidth']);

  return coordinates$$1.map(function (item) {
    return React.createElement(Point, _extends({
      key: item.id.toString()
    }, item, dxChartCore.dBar(item), restProps));
  });
};

var BarSeries = withSeriesPlugin(withColor(Series), 'BarSeries', 'bar', dxChartCore.barCoordinates);

process.env.NODE_ENV !== "production" ? Series.propTypes = {
  pointComponent: PropTypes.func.isRequired
} : void 0;

var Series$1 = function Series(_ref) {
  var props = objectWithoutProperties(_ref, []);
  var Path = props.seriesComponent,
      restProps = objectWithoutProperties(props, ['seriesComponent']);

  return React.createElement(Path, _extends({}, restProps, { path: dxChartCore.dLine }));
};

var LineSeries = withSeriesPlugin(withColor(Series$1), 'LineSeries', 'line', dxChartCore.coordinates);

process.env.NODE_ENV !== "production" ? Series$1.propTypes = {
  seriesComponent: PropTypes.func.isRequired
} : void 0;

var Series$2 = function Series(_ref) {
  var props = objectWithoutProperties(_ref, []);
  var Path = props.seriesComponent,
      restProps = objectWithoutProperties(props, ['seriesComponent']);

  return React.createElement(Path, _extends({}, restProps, { path: dxChartCore.dSpline }));
};

var SplineSeries = withSeriesPlugin(withColor(Series$2), 'SplineSeries', 'spline', dxChartCore.coordinates);

process.env.NODE_ENV !== "production" ? Series$2.propTypes = {
  seriesComponent: PropTypes.func.isRequired
} : void 0;

var Series$3 = function Series(_ref) {
  var props = objectWithoutProperties(_ref, []);
  var Point = props.pointComponent,
      coordinates$$1 = props.coordinates,
      _props$point = props.point,
      point = _props$point === undefined ? {} : _props$point,
      restProps = objectWithoutProperties(props, ['pointComponent', 'coordinates', 'point']);

  var getAttributes = dxChartCore.pointAttributes(point);
  return coordinates$$1.map(function (item) {
    return React.createElement(Point, _extends({
      key: item.id.toString()
    }, getAttributes(item), item, restProps));
  });
};

var BaseSeries = function BaseSeries(_ref2) {
  var Path = _ref2.Path,
      path = _ref2.path,
      props = objectWithoutProperties(_ref2, ['Path', 'path']);
  return React.createElement(Path, props);
};

process.env.NODE_ENV !== "production" ? BaseSeries.propTypes = {
  Path: PropTypes.func,
  path: PropTypes.func
} : void 0;

BaseSeries.defaultProps = {
  Path: Series$3,
  path: null
};

var ScatterSeries = withSeriesPlugin(withColor(BaseSeries), 'ScatterSeries', 'scatter', dxChartCore.coordinates);

ScatterSeries.Path = Series$3;

process.env.NODE_ENV !== "production" ? Series$3.propTypes = {
  pointComponent: PropTypes.func.isRequired
} : void 0;

var Series$4 = function Series(_ref) {
  var props = objectWithoutProperties(_ref, []);
  var Path = props.seriesComponent,
      restProps = objectWithoutProperties(props, ['seriesComponent']);

  return React.createElement(Path, _extends({
    path: dxChartCore.dArea
  }, restProps));
};

var AreaSeries = withSeriesPlugin(withColor(Series$4), 'AreaSeries', 'area', dxChartCore.coordinates);

process.env.NODE_ENV !== "production" ? Series$4.propTypes = {
  seriesComponent: PropTypes.func.isRequired
} : void 0;

var Series$5 = function Series(_ref) {
  var props = objectWithoutProperties(_ref, []);
  var Point = props.pointComponent,
      coordinates$$1 = props.coordinates,
      colorDomain = props.colorDomain,
      uniqueName = props.uniqueName,
      restProps = objectWithoutProperties(props, ['pointComponent', 'coordinates', 'colorDomain', 'uniqueName']);
  var innerRadius = restProps.innerRadius,
      outerRadius = restProps.outerRadius,
      pointOptions = objectWithoutProperties(restProps, ['innerRadius', 'outerRadius']);

  return coordinates$$1.map(function (item) {
    return React.createElement(Point, _extends({
      key: item.id.toString()
    }, item, pointOptions, {
      color: colorDomain(item.id)
    }));
  });
};

var PieSeries = withSeriesPlugin(Series$5, 'PieSeries', 'arc', dxChartCore.pieAttributes);

process.env.NODE_ENV !== "production" ? Series$5.propTypes = {
  style: PropTypes.object,
  pointComponent: PropTypes.func.isRequired
} : void 0;

Series$5.defaultProps = {
  style: {}
};

var Axis = function (_React$Component) {
  inherits(Axis, _React$Component);

  function Axis(props) {
    classCallCheck(this, Axis);

    var _this = possibleConstructorReturn(this, (Axis.__proto__ || Object.getPrototypeOf(Axis)).call(this, props));

    _this.state = {
      xCorrection: 0,
      yCorrection: 0
    };
    _this.createRefsHandler = _this.createRefsHandler.bind(_this);
    return _this;
  }

  createClass(Axis, [{
    key: 'createRefsHandler',
    value: function createRefsHandler(placeholder, changeBBox, orientation) {
      var _this2 = this;

      return function (el) {
        if (!el) {
          return;
        }

        var _el$getBBox = el.getBBox(),
            width = _el$getBBox.width,
            height = _el$getBBox.height,
            x = _el$getBBox.x,
            y = _el$getBBox.y;

        var _state = _this2.state,
            stateWidth = _state.width,
            stateHeight = _state.height;


        if (width === stateWidth && height === stateHeight) return;
        changeBBox({
          placeholder: placeholder,
          bBox: {
            width: width,
            height: height
          }
        });
        _this2.setState({
          width: width,
          height: height,
          xCorrection: orientation !== dxChartCore.HORIZONTAL ? x : 0,
          yCorrection: orientation !== dxChartCore.HORIZONTAL ? 0 : y
        });
      };
    }
  }, {
    key: 'calculateLayout',
    value: function calculateLayout(width, height, defaultWidth, defaultHeight) {
      var calculatedWidth = width || defaultWidth;
      var calculatedHeight = height || defaultHeight;

      var _ref = this.node && this.node.getBoundingClientRect() || {},
          containerWidth = _ref.width,
          containerHeight = _ref.height;

      return {
        width: containerWidth || calculatedWidth,
        height: containerHeight || calculatedHeight
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          tickSize = _props.tickSize,
          position = _props.position,
          name = _props.name,
          indentFromAxis = _props.indentFromAxis,
          isArgumentAxis = _props.isArgumentAxis,
          Root = _props.rootComponent,
          Tick = _props.tickComponent,
          Label = _props.labelComponent,
          Line = _props.lineComponent;

      var getAxesDataComputed = function getAxesDataComputed(_ref2) {
        var axes = _ref2.axes;
        return dxChartCore.axesData(axes, _this3.props);
      };
      return React.createElement(
        dxReactCore.Plugin,
        { name: 'Axis' },
        React.createElement(dxReactCore.Getter, { name: 'axes', computed: getAxesDataComputed }),
        isArgumentAxis ? React.createElement(dxReactCore.Getter, { name: 'argumentAxisName', value: name || 'argumentAxis' }) : null,
        React.createElement(
          dxReactCore.Template,
          { name: position + '-axis' },
          React.createElement(dxReactCore.TemplatePlaceholder, null),
          React.createElement(
            dxReactCore.TemplateConnector,
            null,
            function (_ref3, _ref4) {
              var domains$$1 = _ref3.domains,
                  argumentAxisName = _ref3.argumentAxisName,
                  layouts = _ref3.layouts,
                  scaleExtension = _ref3.scaleExtension;
              var changeBBox = _ref4.changeBBox;

              var placeholder = position + '-axis';
              var domain = isArgumentAxis ? domains$$1[argumentAxisName] : domains$$1[name];
              var orientation = domain.orientation,
                  type = domain.type;

              var _scaleExtension$find = scaleExtension.find(function (item) {
                return item.type === type;
              }),
                  constructor = _scaleExtension$find.constructor;

              var _ref5 = layouts[placeholder] || { width: 0, height: 0 },
                  widthCalculated = _ref5.width,
                  heightCalculated = _ref5.height;

              var _calculateLayout = _this3.calculateLayout(widthCalculated, heightCalculated, 0, 0),
                  widthPostCalculated = _calculateLayout.width,
                  heightPostCalculated = _calculateLayout.height;

              var coordinates$$1 = dxChartCore.axisCoordinates(domain, position, widthPostCalculated, heightPostCalculated, tickSize, indentFromAxis, constructor);
              var _state2 = _this3.state,
                  xCorrection = _state2.xCorrection,
                  yCorrection = _state2.yCorrection;


              return React.createElement(
                'div',
                {
                  style: {
                    position: 'relative',
                    width: orientation === 'horizontal' ? undefined : widthCalculated,
                    height: orientation === 'horizontal' ? heightCalculated : null,
                    flexGrow: orientation === 'horizontal' ? 1 : undefined
                  },
                  ref: function ref(node$$1) {
                    _this3.node = node$$1;
                  }
                },
                React.createElement(
                  'svg',
                  {
                    width: widthPostCalculated,
                    height: heightPostCalculated,
                    style: {
                      position: 'absolute', left: 0, top: 0, overflow: 'visible'
                    }
                  },
                  React.createElement(
                    Root,
                    {
                      refsHandler: _this3.createRefsHandler(placeholder, changeBBox, orientation),
                      x: -xCorrection,
                      y: -yCorrection
                    },
                    coordinates$$1.ticks.map(function (_ref6) {
                      var x1 = _ref6.x1,
                          x2 = _ref6.x2,
                          y1 = _ref6.y1,
                          y2 = _ref6.y2,
                          text = _ref6.text;
                      return React.createElement(Tick, {
                        key: text,
                        x1: x1,
                        x2: x2,
                        y1: y1,
                        y2: y2
                      });
                    }),
                    React.createElement(Line, {
                      width: widthPostCalculated,
                      height: heightPostCalculated,
                      orientation: orientation
                    }),
                    coordinates$$1.ticks.map(function (_ref7) {
                      var text = _ref7.text,
                          xText = _ref7.xText,
                          yText = _ref7.yText,
                          dominantBaseline = _ref7.dominantBaseline,
                          textAnchor = _ref7.textAnchor;
                      return React.createElement(
                        React.Fragment,
                        { key: text },
                        React.createElement(Label, {
                          text: text,
                          x: xText,
                          y: yText,
                          dominantBaseline: dominantBaseline,
                          textAnchor: textAnchor
                        })
                      );
                    })
                  )
                )
              );
            }
          )
        )
      );
    }
  }]);
  return Axis;
}(React.Component);

process.env.NODE_ENV !== "production" ? Axis.propTypes = {
  name: PropTypes.string,
  isArgumentAxis: PropTypes.bool,
  rootComponent: PropTypes.func.isRequired,
  tickComponent: PropTypes.func.isRequired,
  labelComponent: PropTypes.func.isRequired,
  lineComponent: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
  tickSize: PropTypes.number,
  indentFromAxis: PropTypes.number
} : void 0;

Axis.defaultProps = {
  tickSize: 5,
  indentFromAxis: 10,
  name: undefined,
  isArgumentAxis: false
};

var Grid = function (_React$PureComponent) {
  inherits(Grid, _React$PureComponent);

  function Grid() {
    classCallCheck(this, Grid);
    return possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
  }

  createClass(Grid, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          Line = _props.lineComponent,
          restProps = objectWithoutProperties(_props, ['name', 'lineComponent']);

      return React.createElement(
        dxReactCore.Plugin,
        { name: 'Grid' },
        React.createElement(
          dxReactCore.Template,
          { name: 'series' },
          React.createElement(dxReactCore.TemplatePlaceholder, null),
          React.createElement(
            dxReactCore.TemplateConnector,
            null,
            function (_ref) {
              var domains$$1 = _ref.domains,
                  layouts = _ref.layouts,
                  scaleExtension = _ref.scaleExtension;

              var domain = domains$$1[name];
              var orientation = domain.orientation,
                  type = domain.type;

              var _scaleExtension$find = scaleExtension.find(function (item) {
                return item.type === type;
              }),
                  constructor = _scaleExtension$find.constructor;

              var _layouts$pane = layouts.pane,
                  width = _layouts$pane.width,
                  height = _layouts$pane.height;


              var coordinates$$1 = dxChartCore.axisCoordinates(domain, orientation === dxChartCore.HORIZONTAL ? dxChartCore.TOP : dxChartCore.LEFT, width, height, 0, undefined, constructor);

              return React.createElement(
                React.Fragment,
                null,
                coordinates$$1.ticks.map(function (_ref2) {
                  var x1 = _ref2.x1,
                      x2 = _ref2.x2,
                      y1 = _ref2.y1,
                      y2 = _ref2.y2,
                      text = _ref2.text;
                  return React.createElement(Line, _extends({
                    key: text,
                    x1: orientation === 'horizontal' ? x1 : width,
                    x2: x2,
                    y1: orientation === 'horizontal' ? height : y1,
                    y2: y2
                  }, restProps));
                })
              );
            }
          )
        )
      );
    }
  }]);
  return Grid;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? Grid.propTypes = {
  name: PropTypes.string,
  lineComponent: PropTypes.func.isRequired
} : void 0;

Grid.defaultProps = {
  name: undefined
};

exports.Chart = Chart;
exports.Legend = Legend;
exports.Title = Title;
exports.Scale = Scale;
exports.Stack = Stack;
exports.BarSeries = BarSeries;
exports.LineSeries = LineSeries;
exports.SplineSeries = SplineSeries;
exports.ScatterSeries = ScatterSeries;
exports.AreaSeries = AreaSeries;
exports.PieSeries = PieSeries;
exports.Axis = Axis;
exports.Grid = Grid;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dx-react-chart.umd.js.map
