/**
 * Bundle of @devexpress/dx-react-chart
 * Generated: 2018-09-04
 * Version: 1.7.2
 * License: https://js.devexpress.com/Licensing
 */

import { Component, Fragment, PureComponent, createElement } from 'react';
import { array, arrayOf, bool, func, node, number, object, shape, string } from 'prop-types';
import { Action, Getter, Plugin, PluginHost, Sizer, Template, TemplateConnector, TemplatePlaceholder, createStateHelper } from '@devexpress/dx-react-core';
import { BOTTOM, HORIZONTAL, LEFT, RIGHT, TOP, axesData, axisCoordinates, axisName, bBoxes, barCoordinates, checkZeroStart, computedExtension, coordinates, dArea, dBar, dLine, dSpline, domains, findSeriesByName, palette, pieAttributes, pointAttributes, prepareData, processData, seriesData, seriesWithStacks, stacks, xyScales } from '@devexpress/dx-chart-core';
import { stackOffsetDiverging, stackOrderNone } from 'd3-shape';

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
        return axisName(argumentAxisName);
      };
      var processedData = function processedData(_ref2) {
        var series = _ref2.series,
            processingData = _ref2.processingData;
        return prepareData(data, series, processingData);
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
      return createElement(
        Plugin,
        null,
        createElement(Getter, { name: 'data', computed: processedData }),
        createElement(Getter, { name: 'argumentAxisName', computed: getArgumentAxisName }),
        createElement(Getter, { name: 'domains', computed: calculatedDomains })
      );
    }
  }]);
  return ChartCore;
}(PureComponent);

process.env.NODE_ENV !== "production" ? ChartCore.propTypes = {
  data: array.isRequired
} : void 0;

var AxesLayout = function AxesLayout() {
  return createElement(
    Plugin,
    null,
    createElement(
      Template,
      { name: 'canvas' },
      createElement(
        'div',
        { id: 'center-center', style: { display: 'flex', flexDirection: 'column', flexGrow: 1 } },
        createElement(
          'div',
          { id: TOP + '-axis-container', style: { display: 'flex', flexDirection: 'row' } },
          createElement(TemplatePlaceholder, { name: TOP + '-' + LEFT + '-axis' }),
          createElement(TemplatePlaceholder, { name: TOP + '-axis' }),
          createElement(TemplatePlaceholder, { name: TOP + '-' + RIGHT + '-axis' })
        ),
        createElement(
          'div',
          { id: 'center-axis-container', style: { display: 'flex', flexDirection: 'row', flexGrow: 1 } },
          createElement(TemplatePlaceholder, { name: LEFT + '-axis' }),
          createElement(TemplatePlaceholder, null),
          createElement(TemplatePlaceholder, { name: RIGHT + '-axis' })
        ),
        createElement(
          'div',
          { id: BOTTOM + '-axis-container', style: { display: 'flex', flexDirection: 'row' } },
          createElement(TemplatePlaceholder, { name: BOTTOM + '-' + LEFT + '-axis' }),
          createElement(TemplatePlaceholder, { name: BOTTOM + '-axis' }),
          createElement(TemplatePlaceholder, { name: BOTTOM + '-' + RIGHT + '-axis' })
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

      return createElement(
        Plugin,
        { name: 'SpaceFillingRects' },
        placeholders.map(function (name) {
          return createElement(
            Template,
            { name: name, key: name },
            createElement(
              TemplateConnector,
              null,
              function (_ref) {
                var positions = _ref.layouts;

                var _name$split = name.split('-'),
                    _name$split2 = slicedToArray(_name$split, 3),
                    horizontal = _name$split2[1],
                    postfix = _name$split2[2];

                var _ref2 = positions[horizontal + (postfix ? '-' + postfix : '')] || {},
                    width = _ref2.width;

                return createElement('div', { id: name, style: { width: width } });
              }
            )
          );
        })
      );
    }
  }]);
  return SpaceFillingRects;
}(PureComponent);

process.env.NODE_ENV !== "production" ? SpaceFillingRects.propTypes = {
  placeholders: arrayOf(string).isRequired
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


      return createElement(
        'div',
        { style: { width: '100%' } },
        createElement(
          'svg',
          {
            width: width,
            height: height,
            style: {
              position: 'absolute', left: 0, top: 0, overflow: 'visible'
            }
          },
          createElement(TemplatePlaceholder, { name: 'series' })
        )
      );
    }
  }]);
  return Pane;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Pane.propTypes = {
  changeBBox: func.isRequired,
  width: number.isRequired,
  height: number.isRequired
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
      return createElement(
        Plugin,
        { name: 'PaneLayout' },
        createElement(
          Template,
          { name: 'canvas' },
          createElement(
            TemplateConnector,
            null,
            function (_, _ref) {
              var changeBBox = _ref.changeBBox;
              return createElement(
                Sizer,
                {
                  style: { flex: 1, zIndex: 1 }
                },
                function (_ref2) {
                  var width = _ref2.width,
                      height = _ref2.height;
                  return createElement(Pane, {
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
}(PureComponent);

var LayoutManager = function (_React$Component) {
  inherits(LayoutManager, _React$Component);

  function LayoutManager(props) {
    classCallCheck(this, LayoutManager);

    var _this = possibleConstructorReturn(this, (LayoutManager.__proto__ || Object.getPrototypeOf(LayoutManager)).call(this, props));

    var _this$props = _this.props,
        width = _this$props.width,
        height = _this$props.height;


    _this.state = { bBoxes: { pane: { width: width, height: height } } };

    var stateHelper = createStateHelper(_this);

    _this.changeBBox = stateHelper.applyFieldReducer.bind(stateHelper, 'bBoxes', bBoxes);
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


      return createElement(
        Plugin,
        null,
        createElement(Getter, { name: 'layouts', value: stateBBoxes }),
        createElement(Action, { name: 'changeBBox', action: this.changeBBox }),
        createElement(
          Template,
          { name: 'root' },
          createElement(
            Root,
            _extends({
              height: height,
              width: width
            }, restProps),
            createElement(TemplatePlaceholder, { name: 'canvas' })
          )
        )
      );
    }
  }]);
  return LayoutManager;
}(Component);

process.env.NODE_ENV !== "production" ? LayoutManager.propTypes = {
  width: number,
  height: number.isRequired,
  rootComponent: func.isRequired
} : void 0;

LayoutManager.defaultProps = {
  width: 0
};

var ComponentLayout = function ComponentLayout() {
  return createElement(
    Plugin,
    { name: 'ComponentLayout' },
    createElement(
      Template,
      { name: 'canvas' },
      createElement(
        'div',
        { id: TOP + '-container', style: { display: 'flex', flexDirection: 'row' } },
        createElement(TemplatePlaceholder, { name: TOP + '-' + LEFT }),
        createElement(TemplatePlaceholder, { name: TOP }),
        createElement(TemplatePlaceholder, { name: TOP + '-' + LEFT })
      ),
      createElement(
        'div',
        { id: 'center-container', style: { display: 'flex', flexDirection: 'row', flexGrow: 1 } },
        createElement(TemplatePlaceholder, { name: LEFT }),
        createElement(TemplatePlaceholder, null),
        createElement(TemplatePlaceholder, { name: RIGHT })
      ),
      createElement(
        'div',
        { id: BOTTOM + '-container', style: { display: 'flex', flexDirection: 'row' } },
        createElement(TemplatePlaceholder, { name: BOTTOM + '-' + LEFT }),
        createElement(TemplatePlaceholder, { name: BOTTOM })
      )
    )
  );
};

var themeComputing = function themeComputing(_ref) {
  var series = _ref.series;
  return palette(series);
};
var pieThemeComputing = function pieThemeComputing(_ref2) {
  var domains$$1 = _ref2.domains,
      argumentAxisName = _ref2.argumentAxisName;
  return palette(domains$$1[argumentAxisName].domain.map(function (uniqueName) {
    return { uniqueName: uniqueName };
  }));
};

var ThemeManager = function ThemeManager() {
  return createElement(
    Plugin,
    { name: 'ThemeManager' },
    createElement(Getter, { name: 'colorDomain', computed: themeComputing }),
    createElement(Getter, { name: 'pieColorDomain', computed: pieThemeComputing })
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

      return createElement(
        PluginHost,
        null,
        children,
        createElement(ChartCore, { data: data }),
        createElement(ThemeManager, null),
        createElement(LayoutManager, _extends({
          width: width,
          height: height,
          rootComponent: Root
        }, restProps)),
        createElement(PaneLayout, null),
        createElement(AxesLayout, null),
        createElement(ComponentLayout, null),
        createElement(SpaceFillingRects, { placeholders: [TOP + '-' + LEFT, TOP + '-' + RIGHT, BOTTOM + '-' + LEFT, BOTTOM + '-' + RIGHT, TOP + '-' + LEFT + '-axis', TOP + '-' + RIGHT + '-axis', BOTTOM + '-' + LEFT + '-axis', BOTTOM + '-' + RIGHT + '-axis']
        })
      );
    }
  }]);
  return Chart;
}(PureComponent);
process.env.NODE_ENV !== "production" ? Chart.propTypes = {
  data: array.isRequired,
  rootComponent: func.isRequired,
  width: number,
  height: number,
  children: node
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
      return createElement(
        Plugin,
        { name: 'Legend' },
        createElement(
          Template,
          { name: placeholder },
          createElement(TemplatePlaceholder, null),
          createElement(
            TemplateConnector,
            null,
            function (_ref) {
              var series = _ref.series,
                  colorDomain = _ref.colorDomain;
              return createElement(
                Root,
                { name: 'legend-' + placeholder },
                colorDomain.domain().map(function (domainName) {
                  var _series$find = series.find(function (_ref2) {
                    var uniqueName = _ref2.uniqueName;
                    return uniqueName === domainName;
                  }),
                      name = _series$find.name,
                      color = _series$find.color;

                  return createElement(
                    Item,
                    { key: domainName },
                    createElement(Marker, { name: name, color: color || colorDomain(domainName) }),
                    createElement(Label, { text: name })
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
}(PureComponent);

process.env.NODE_ENV !== "production" ? Legend.propTypes = {
  markerComponent: func.isRequired,
  labelComponent: func.isRequired,
  rootComponent: func.isRequired,
  itemComponent: func.isRequired,
  position: string
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
      return createElement(
        Plugin,
        { name: 'Title' },
        createElement(
          Template,
          { name: placeholder },
          createElement(TemplatePlaceholder, null),
          createElement(Text, _extends({ text: text }, restProps))
        )
      );
    }
  }]);
  return Title;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Title.propTypes = {
  textComponent: func.isRequired,
  text: string.isRequired,
  position: string
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
        return computedExtension(extensions);
      };
      return createElement(
        Plugin,
        { name: 'Scale' },
        createElement(Getter, { name: 'computedDomain', value: domains }),
        createElement(Getter, { name: 'scaleExtension', computed: getExtension })
      );
    }
  }]);
  return Scale;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Scale.propTypes = {
  extensions: arrayOf(shape({
    type: string,
    constructor: func
  }))
} : void 0;

Scale.defaultProps = {
  extensions: []
};

var computedSeries = function computedSeries(_ref) {
  var _ref$series = _ref.series,
      series = _ref$series === undefined ? [] : _ref$series;
  return seriesWithStacks(series);
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
        return stacks(series);
      };
      return createElement(
        Plugin,
        { name: 'Stack' },
        createElement(Getter, { name: 'series', computed: computedSeries }),
        createElement(Getter, { name: 'processingData', value: processData(offset, order) }),
        createElement(Getter, { name: 'stacks', computed: computedStacks })
      );
    }
  }]);
  return Stack;
}(PureComponent);

process.env.NODE_ENV !== "production" ? Stack.propTypes = {
  offset: func,
  order: func
} : void 0;

Stack.defaultProps = {
  offset: stackOffsetDiverging,
  order: stackOrderNone
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
          return seriesData(series, {
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
          return checkZeroStart(startFromZero, axisName$$1, pathType);
        };
        return createElement(
          Plugin,
          { name: pluginName },
          createElement(Getter, { name: 'series', computed: getSeriesDataComputed }),
          createElement(Getter, { name: 'startFromZero', computed: startFromZeroByAxes }),
          createElement(
            Template,
            { name: 'series' },
            createElement(TemplatePlaceholder, null),
            createElement(
              TemplateConnector,
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

                var _findSeriesByName = findSeriesByName(symbolName, series),
                    stack = _findSeriesByName.stack,
                    uniqueName = _findSeriesByName.uniqueName;

                var scales = xyScales(domains$$1[argumentAxisName], domains$$1[axisName$$1], layouts.pane, groupWidth, scaleExtension);
                var calculatedCoordinates = calculateCoordinates(data, scales, argumentField, valueField, name, stack, stacks$$1, restProps, scaleExtension);

                return createElement(Series, _extends({
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
  }(PureComponent);

  process.env.NODE_ENV !== "production" ? Component$$1.propTypes = {
    name: string,
    valueField: string.isRequired,
    argumentField: string.isRequired,
    axisName: string,
    stack: string,
    color: string,
    groupWidth: number
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
    return createElement(Series, _extends({ color: seriesColor || color }, restProps));
  };
  process.env.NODE_ENV !== "production" ? ColorizedSeries.propTypes = {
    color: string,
    colorDomain: func.isRequired,
    uniqueName: string.isRequired
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
    return createElement(Point, _extends({
      key: item.id.toString()
    }, item, dBar(item), restProps));
  });
};

var BarSeries = withSeriesPlugin(withColor(Series), 'BarSeries', 'bar', barCoordinates);

process.env.NODE_ENV !== "production" ? Series.propTypes = {
  pointComponent: func.isRequired
} : void 0;

var Series$1 = function Series(_ref) {
  var props = objectWithoutProperties(_ref, []);
  var Path = props.seriesComponent,
      restProps = objectWithoutProperties(props, ['seriesComponent']);

  return createElement(Path, _extends({}, restProps, { path: dLine }));
};

var LineSeries = withSeriesPlugin(withColor(Series$1), 'LineSeries', 'line', coordinates);

process.env.NODE_ENV !== "production" ? Series$1.propTypes = {
  seriesComponent: func.isRequired
} : void 0;

var Series$2 = function Series(_ref) {
  var props = objectWithoutProperties(_ref, []);
  var Path = props.seriesComponent,
      restProps = objectWithoutProperties(props, ['seriesComponent']);

  return createElement(Path, _extends({}, restProps, { path: dSpline }));
};

var SplineSeries = withSeriesPlugin(withColor(Series$2), 'SplineSeries', 'spline', coordinates);

process.env.NODE_ENV !== "production" ? Series$2.propTypes = {
  seriesComponent: func.isRequired
} : void 0;

var Series$3 = function Series(_ref) {
  var props = objectWithoutProperties(_ref, []);
  var Point = props.pointComponent,
      coordinates$$1 = props.coordinates,
      _props$point = props.point,
      point = _props$point === undefined ? {} : _props$point,
      restProps = objectWithoutProperties(props, ['pointComponent', 'coordinates', 'point']);

  var getAttributes = pointAttributes(point);
  return coordinates$$1.map(function (item) {
    return createElement(Point, _extends({
      key: item.id.toString()
    }, getAttributes(item), item, restProps));
  });
};

var BaseSeries = function BaseSeries(_ref2) {
  var Path = _ref2.Path,
      path = _ref2.path,
      props = objectWithoutProperties(_ref2, ['Path', 'path']);
  return createElement(Path, props);
};

process.env.NODE_ENV !== "production" ? BaseSeries.propTypes = {
  Path: func,
  path: func
} : void 0;

BaseSeries.defaultProps = {
  Path: Series$3,
  path: null
};

var ScatterSeries = withSeriesPlugin(withColor(BaseSeries), 'ScatterSeries', 'scatter', coordinates);

ScatterSeries.Path = Series$3;

process.env.NODE_ENV !== "production" ? Series$3.propTypes = {
  pointComponent: func.isRequired
} : void 0;

var Series$4 = function Series(_ref) {
  var props = objectWithoutProperties(_ref, []);
  var Path = props.seriesComponent,
      restProps = objectWithoutProperties(props, ['seriesComponent']);

  return createElement(Path, _extends({
    path: dArea
  }, restProps));
};

var AreaSeries = withSeriesPlugin(withColor(Series$4), 'AreaSeries', 'area', coordinates);

process.env.NODE_ENV !== "production" ? Series$4.propTypes = {
  seriesComponent: func.isRequired
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
    return createElement(Point, _extends({
      key: item.id.toString()
    }, item, pointOptions, {
      color: colorDomain(item.id)
    }));
  });
};

var PieSeries = withSeriesPlugin(Series$5, 'PieSeries', 'arc', pieAttributes);

process.env.NODE_ENV !== "production" ? Series$5.propTypes = {
  style: object,
  pointComponent: func.isRequired
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
          xCorrection: orientation !== HORIZONTAL ? x : 0,
          yCorrection: orientation !== HORIZONTAL ? 0 : y
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
        return axesData(axes, _this3.props);
      };
      return createElement(
        Plugin,
        { name: 'Axis' },
        createElement(Getter, { name: 'axes', computed: getAxesDataComputed }),
        isArgumentAxis ? createElement(Getter, { name: 'argumentAxisName', value: name || 'argumentAxis' }) : null,
        createElement(
          Template,
          { name: position + '-axis' },
          createElement(TemplatePlaceholder, null),
          createElement(
            TemplateConnector,
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

              var coordinates$$1 = axisCoordinates(domain, position, widthPostCalculated, heightPostCalculated, tickSize, indentFromAxis, constructor);
              var _state2 = _this3.state,
                  xCorrection = _state2.xCorrection,
                  yCorrection = _state2.yCorrection;


              return createElement(
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
                createElement(
                  'svg',
                  {
                    width: widthPostCalculated,
                    height: heightPostCalculated,
                    style: {
                      position: 'absolute', left: 0, top: 0, overflow: 'visible'
                    }
                  },
                  createElement(
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
                      return createElement(Tick, {
                        key: text,
                        x1: x1,
                        x2: x2,
                        y1: y1,
                        y2: y2
                      });
                    }),
                    createElement(Line, {
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
                      return createElement(
                        Fragment,
                        { key: text },
                        createElement(Label, {
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
}(Component);

process.env.NODE_ENV !== "production" ? Axis.propTypes = {
  name: string,
  isArgumentAxis: bool,
  rootComponent: func.isRequired,
  tickComponent: func.isRequired,
  labelComponent: func.isRequired,
  lineComponent: func.isRequired,
  position: string.isRequired,
  tickSize: number,
  indentFromAxis: number
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

      return createElement(
        Plugin,
        { name: 'Grid' },
        createElement(
          Template,
          { name: 'series' },
          createElement(TemplatePlaceholder, null),
          createElement(
            TemplateConnector,
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


              var coordinates$$1 = axisCoordinates(domain, orientation === HORIZONTAL ? TOP : LEFT, width, height, 0, undefined, constructor);

              return createElement(
                Fragment,
                null,
                coordinates$$1.ticks.map(function (_ref2) {
                  var x1 = _ref2.x1,
                      x2 = _ref2.x2,
                      y1 = _ref2.y1,
                      y2 = _ref2.y2,
                      text = _ref2.text;
                  return createElement(Line, _extends({
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
}(PureComponent);

process.env.NODE_ENV !== "production" ? Grid.propTypes = {
  name: string,
  lineComponent: func.isRequired
} : void 0;

Grid.defaultProps = {
  name: undefined
};

export { Chart, Legend, Title, Scale, Stack, BarSeries, LineSeries, SplineSeries, ScatterSeries, AreaSeries, PieSeries, Axis, Grid };
//# sourceMappingURL=dx-react-chart.es.js.map
