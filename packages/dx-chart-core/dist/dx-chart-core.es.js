/**
 * Bundle of @devexpress/dx-chart-core
 * Generated: 2018-09-04
 * Version: 1.7.2
 * License: https://js.devexpress.com/Licensing
 */

import { extent } from 'd3-array';
import { scaleBand, scaleLinear, scaleOrdinal } from 'd3-scale';
import { arc, area, curveMonotoneX, line, pie, stack, symbol, symbolCircle } from 'd3-shape';

var HORIZONTAL = 'horizontal';
var VERTICAL = 'vertical';
var TOP = 'top';
var BOTTOM = 'bottom';
var LEFT = 'left';
var RIGHT = 'right';
var MIDDLE = 'middle';
var END = 'end';
var START = 'start';

var BAND = 'band';

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













var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

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



































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var isDefined = function isDefined(item) {
  return item !== undefined;
};

var collectAxesOptions = function collectAxesOptions(axes) {
  return axes.reduce(function (domains, _ref) {
    var name = _ref.name,
        type = _ref.type,
        tickFormat = _ref.tickFormat;
    return _extends({}, domains, defineProperty({}, name, {
      type: type,
      tickFormat: tickFormat
    }));
  }, {});
};

var calculateDomainField = function calculateDomainField(getFieldItemFirst, getFieldItemSecond, data) {
  var domain = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var type = arguments[4];

  var getCategories = function getCategories(prev, cur) {
    var categories = getFieldItemFirst(cur);
    if (isDefined(categories)) {
      return [].concat(toConsumableArray(prev), [categories]);
    }
    return prev;
  };
  if (type === BAND) {
    return [].concat(toConsumableArray(domain), toConsumableArray(data.reduce(getCategories, [])));
  }
  return extent([].concat(toConsumableArray(domain), toConsumableArray(extent(data, getFieldItemFirst)), toConsumableArray(extent(data, getFieldItemSecond))));
};

var getCorrectAxisType = function getCorrectAxisType(type, data, field) {
  if (!type && typeof data.find(function (item) {
    return isDefined(item[field]);
  })[field] === 'string') {
    return 'band';
  }
  return type || 'linear';
};

var getFieldStack = function getFieldStack(index, object) {
  return object && object[index] ? object[index] : undefined;
};

var calculateDomain = function calculateDomain(series, data, axesOptions, argumentAxisName) {
  return series.reduce(function (domains, _ref2) {
    var _babelHelpers$extends2;

    var valueField = _ref2.valueField,
        argumentField = _ref2.argumentField,
        axisName = _ref2.axisName,
        name = _ref2.name;

    var valueType = getCorrectAxisType(domains[axisName] && domains[axisName].type, data, valueField);
    var argumentType = getCorrectAxisType(domains[argumentAxisName] && domains[argumentAxisName].type, data, argumentField);
    return _extends({}, domains, (_babelHelpers$extends2 = {}, defineProperty(_babelHelpers$extends2, axisName, {
      domain: calculateDomainField(function (object) {
        return getFieldStack(1, object[valueField + '-' + name + '-stack']);
      }, function (object) {
        return getFieldStack(0, object[valueField + '-' + name + '-stack']);
      }, data, domains[axisName] && domains[axisName].domain, valueType),
      orientation: VERTICAL,
      type: valueType,
      tickFormat: domains[axisName] && domains[axisName].tickFormat
    }), defineProperty(_babelHelpers$extends2, argumentAxisName, {
      domain: calculateDomainField(function (object) {
        return object[argumentField];
      }, null, data, domains[argumentAxisName] && domains[argumentAxisName].domain, argumentType),
      orientation: HORIZONTAL,
      type: argumentType,
      tickFormat: domains[argumentAxisName] && domains[argumentAxisName].tickFormat
    }), _babelHelpers$extends2));
  }, axesOptions);
};

var adjustRangeToZero = function adjustRangeToZero(range) {
  return [Math.min(range[0], 0), Math.max(0, range[1])];
};

var recalculateDomain = function recalculateDomain(range, currentDomain) {
  return {
    domain: currentDomain.type !== BAND ? range : currentDomain.domain,
    type: currentDomain.type,
    orientation: currentDomain.orientation,
    tickFormat: currentDomain.tickFormat
  };
};

var adjustDomains = function adjustDomains(axes, calculatedDomains, startFromZero) {
  var adjustedDomainsBySeries = Object.keys(calculatedDomains).reduce(function (domains, name) {
    var currentDomain = domains[name];
    var range = startFromZero[name] ? adjustRangeToZero(currentDomain.domain) : currentDomain.domain;
    return _extends({}, domains, defineProperty({}, name, recalculateDomain(range, currentDomain)));
  }, calculatedDomains);

  return axes.reduce(function (domains, _ref3) {
    var name = _ref3.name,
        min = _ref3.min,
        max = _ref3.max;

    var currentDomain = domains[name];
    return _extends({}, domains, defineProperty({}, name, recalculateDomain([isDefined(min) ? min : currentDomain.domain[0], isDefined(max) ? max : currentDomain.domain[1]], currentDomain)));
  }, adjustedDomainsBySeries);
};

var computedExtension = function computedExtension(extension) {
  var defaultExtension = [{ type: 'linear', constructor: scaleLinear }, { type: 'band', constructor: scaleBand }];
  return extension.concat(defaultExtension);
};

var domains = function domains() {
  var axes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var series = arguments[1];
  var data = arguments[2];
  var argumentAxisName = arguments[3];
  var startFromZero = arguments[4];

  var axesOptions = collectAxesOptions(axes);
  var calculatedDomains = calculateDomain(series, data, axesOptions, argumentAxisName);
  return adjustDomains(axes, calculatedDomains, startFromZero);
};

var isEqual = function isEqual(_ref, _ref2) {
  var firstWidth = _ref.width,
      firstHeight = _ref.height;
  var secondWidth = _ref2.width,
      secondHeight = _ref2.height;
  return firstWidth === secondWidth && firstHeight === secondHeight;
};

var bBoxes = function bBoxes(prevBBoxes, _ref3) {
  var bBox = _ref3.bBox,
      placeholder = _ref3.placeholder;

  if (isEqual(prevBBoxes[placeholder] || {}, bBox)) return prevBBoxes;
  return _extends({}, prevBBoxes, defineProperty({}, placeholder, bBox));
};

var createScale = function createScale(_ref, width, height, constructor) {
  var domain = _ref.domain,
      orientation = _ref.orientation;
  var padding = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

  var scale = constructor();
  if (scale.paddingInner) {
    scale.paddingInner(padding).paddingOuter(padding / 2);
  }
  return scale.domain(domain).range(orientation === HORIZONTAL ? [0, width] : [height, 0]);
};

var getTicks = function getTicks(scale) {
  return scale.ticks ? scale.ticks() : scale.domain();
};
var getOffset = function getOffset(scale) {
  return scale.bandwidth ? scale.bandwidth() / 2 : 0;
};
var getDominantBaseline = function getDominantBaseline(orientation, position) {
  if (orientation === HORIZONTAL) {
    return position === TOP ? 'baseline' : 'hanging';
  }
  return MIDDLE;
};
var getTextAnchor = function getTextAnchor(orientation, position) {
  if (orientation === HORIZONTAL) {
    return MIDDLE;
  }
  return position === LEFT ? END : START;
};

var getFormat = function getFormat(scale, tickFormat) {
  if (scale.tickFormat) {
    return tickFormat ? tickFormat(scale) : scale.tickFormat();
  }
  return function (tick) {
    return tick;
  };
};

var calculateAxisCoordinates = function calculateAxisCoordinates(scale, orientation, position, tickSize, indentFromAxis, tickFormat) {
  var ticks = getTicks(scale);
  var offset = getOffset(scale);
  var dominantBaseline = getDominantBaseline(orientation, position);
  var textAnchor = getTextAnchor(orientation, position);

  var getTickCoordinates = function getTickCoordinates(tick) {
    var coordinates = scale(tick) + offset;
    if (orientation === HORIZONTAL) {
      return {
        dominantBaseline: dominantBaseline,
        textAnchor: textAnchor,
        x1: coordinates,
        x2: coordinates,
        y1: position === TOP ? -tickSize : 0,
        y2: position === TOP ? 0 : tickSize,
        text: getFormat(scale, tickFormat)(tick),
        xText: coordinates,
        yText: position === TOP ? -tickSize - indentFromAxis : tickSize + indentFromAxis
      };
    }
    return {
      dominantBaseline: dominantBaseline,
      textAnchor: textAnchor,
      y1: coordinates,
      y2: coordinates,
      x1: position === LEFT ? -tickSize : 0,
      x2: position === LEFT ? 0 : tickSize,
      text: getFormat(scale, tickFormat)(tick),
      xText: position === LEFT ? -tickSize - indentFromAxis : tickSize + indentFromAxis,
      yText: coordinates
    };
  };
  return {
    ticks: ticks.map(getTickCoordinates)
  };
};

var axisCoordinates = function axisCoordinates(domainOptions, position, width, height, tickSize, indentFromAxis, constructor) {
  var scale = createScale(domainOptions, width, height, constructor);

  return calculateAxisCoordinates(scale, domainOptions.orientation, position, tickSize, indentFromAxis, domainOptions.tickFormat);
};

var axesData = function axesData() {
  var axes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var axisProps = arguments[1];
  return [].concat(toConsumableArray(axes), [axisProps]);
};

var getX = function getX(_ref) {
  var x = _ref.x,
      width = _ref.width;
  return x + width / 2;
};
var getY = function getY(_ref2) {
  var y = _ref2.y;
  return y;
};
var getY1 = function getY1(_ref3) {
  var y1 = _ref3.y1;
  return y1;
};

var DEFAULT_POINT_SIZE = 7;

var dArea = area().x(getX).y1(getY).y0(getY1);

var dLine = line().x(getX).y(getY);

var dSpline = line().x(getX).y(getY).curve(curveMonotoneX);

var getConstructor = function getConstructor(scaleExtension, type) {
  return scaleExtension.find(function (item) {
    return item.type === type;
  }).constructor;
};

var xyScales = function xyScales(argumentDomainOptions, valueDomainOptions, _ref4, groupWidth, scaleExtension) {
  var width = _ref4.width,
      height = _ref4.height;

  var xConstructor = getConstructor(scaleExtension, argumentDomainOptions.type);
  var yConstructor = getConstructor(scaleExtension, valueDomainOptions.type);
  return {
    xScale: createScale(argumentDomainOptions, width, height, xConstructor, 1 - groupWidth),
    yScale: createScale(valueDomainOptions, width, height, yConstructor)
  };
};

var pieAttributes = function pieAttributes(data, _ref5, argumentField, valueField, name, stack$$1, stacks, _ref6) {
  var xScale = _ref5.xScale,
      yScale = _ref5.yScale;
  var _ref6$innerRadius = _ref6.innerRadius,
      innerRadius = _ref6$innerRadius === undefined ? 0 : _ref6$innerRadius,
      _ref6$outerRadius = _ref6.outerRadius,
      outerRadius = _ref6$outerRadius === undefined ? 1 : _ref6$outerRadius;

  var width = Math.max.apply(null, xScale.range());
  var height = Math.max.apply(null, yScale.range());
  var radius = Math.min(width, height) / 2;
  var pieData = pie().value(function (d) {
    return d[valueField];
  })(data);

  return pieData.map(function (_ref7) {
    var startAngle = _ref7.startAngle,
        endAngle = _ref7.endAngle,
        value = _ref7.value,
        itemData = _ref7.data;
    return {
      d: arc().innerRadius(innerRadius * radius).outerRadius(outerRadius * radius).startAngle(startAngle).endAngle(endAngle)(),
      value: value,
      data: itemData,
      id: itemData[argumentField],
      x: width / 2,
      y: height / 2
    };
  });
};

var coordinates = function coordinates(data, _ref8, argumentField, valueField, name) {
  var xScale = _ref8.xScale,
      yScale = _ref8.yScale;
  return data.reduce(function (result, dataItem, index) {
    if (dataItem[argumentField] !== undefined && dataItem[valueField] !== undefined) {
      return [].concat(toConsumableArray(result), [{
        x: xScale(dataItem[argumentField]),
        y: yScale(dataItem[valueField + '-' + name + '-stack'][1]),
        y1: yScale(dataItem[valueField + '-' + name + '-stack'][0]),
        width: xScale.bandwidth ? xScale.bandwidth() : 0,
        id: index,
        value: dataItem[valueField]
      }]);
    }
    return result;
  }, []);
};

var barCoordinates = function barCoordinates(data, _ref9, argumentField, valueField, name, stack$$1) {
  var xScale = _ref9.xScale,
      yScale = _ref9.yScale;
  var stacks = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [undefined];
  var _ref10 = arguments[7];
  var _ref10$barWidth = _ref10.barWidth,
      barWidth = _ref10$barWidth === undefined ? 0.9 : _ref10$barWidth;
  var scaleExtension = arguments[8];

  var rawCoordinates = coordinates(data, { xScale: xScale, yScale: yScale }, argumentField, valueField, name);
  var bandwidth = xScale.bandwidth ? xScale.bandwidth() : 0;
  var x0Scale = createScale({
    domain: stacks
  }, bandwidth, bandwidth, getConstructor(scaleExtension, 'band'), 1 - barWidth);
  return rawCoordinates.map(function (item) {
    return _extends({}, item, {
      width: x0Scale.bandwidth(),
      x: item.x + x0Scale(stack$$1)
    });
  });
};

var findSeriesByName = function findSeriesByName(name, series) {
  return series.find(function (seriesItem) {
    return seriesItem.symbolName === name;
  });
};

var dBar = function dBar(_ref11) {
  var x = _ref11.x,
      y = _ref11.y,
      y1 = _ref11.y1,
      width = _ref11.width;
  return {
    x: x, y: Math.min(y, y1), width: width || 2, height: Math.abs(y1 - y)
  };
};

var pointAttributes = function pointAttributes(_ref12) {
  var _ref12$size = _ref12.size,
      size = _ref12$size === undefined ? DEFAULT_POINT_SIZE : _ref12$size;

  var dPoint = symbol().size([Math.pow(size, 2)]).type(symbolCircle)();
  return function (item) {
    return {
      d: dPoint,
      x: item.x,
      y: item.y
    };
  };
};

var createNewUniqueName = function createNewUniqueName(name) {
  return name.replace(/\d*$/, function (str) {
    return str ? +str + 1 : 0;
  });
};

var seriesData = function seriesData() {
  var series = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var seriesProps = arguments[1];

  if (series.find(function (_ref13) {
    var uniqueName = _ref13.uniqueName;
    return uniqueName === seriesProps.uniqueName;
  })) {
    return seriesData(series, _extends({}, seriesProps, { uniqueName: createNewUniqueName(seriesProps.uniqueName) }));
  }
  return [].concat(toConsumableArray(series), [seriesProps]);
};

var checkZeroStart = function checkZeroStart(fromZero, axisName, pathType) {
  return _extends({}, fromZero, defineProperty({}, axisName, fromZero[axisName] || pathType === 'area' || pathType === 'bar'));
};

var getStacks = function getStacks(series) {
  return series.reduce(function (prevValue, _ref, index) {
    var valueField = _ref.valueField,
        seriesStack = _ref.stack;

    if (!prevValue[seriesStack]) {
      return _extends({}, prevValue, defineProperty({}, seriesStack, {
        keys: [valueField],
        series: [index]
      }));
    }
    return _extends({}, prevValue, defineProperty({}, seriesStack, {
      keys: [].concat(toConsumableArray(prevValue[seriesStack].keys), [valueField]),
      series: [].concat(toConsumableArray(prevValue[seriesStack].series), [index])
    }));
  }, {});
};

var filtering = function filtering(_ref2) {
  var seriesStack = _ref2.stack;
  return seriesStack;
};

var processData = function processData(offset, order) {
  return function (series, data) {
    var stacks = getStacks(series);

    var arrayOfStacks = Object.entries(stacks).reduce(function (prevValue, item) {
      return _extends({}, prevValue, defineProperty({}, item[0], stack().keys(item[1].keys).order(order).offset(offset)(data)));
    }, {});

    return data.map(function (singleData, dataIndex) {
      return series.reduce(function (prevValue, _ref3, index) {
        var valueField = _ref3.valueField,
            name = _ref3.name,
            seriesStack = _ref3.stack;

        var seriesIndex = stacks[seriesStack].series.findIndex(function (item) {
          return item === index;
        });
        return _extends({}, prevValue, defineProperty({}, valueField + '-' + name + '-stack', arrayOfStacks[seriesStack][seriesIndex][dataIndex]));
      }, singleData);
    });
  };
};

var seriesWithStacks = function seriesWithStacks(series) {
  return series.reduce(function (prevResult, singleSeries, index) {
    var _singleSeries$stack = singleSeries.stack,
        seriesStack = _singleSeries$stack === undefined ? 'stack' + index : _singleSeries$stack;


    return [].concat(toConsumableArray(prevResult), [_extends({}, singleSeries, { stack: seriesStack })]);
  }, []);
};

var stacks = function stacks(series) {
  return [].concat(toConsumableArray(new Set(series.filter(function (singleSeries) {
    return filtering(singleSeries);
  }).map(function (_ref4) {
    var seriesStack = _ref4.stack;
    return seriesStack;
  }))));
};

var PALETTE = ['#2196F3', '#F44336', '#4CAF50', '#FFEB3B', '#E91E63', '#9C27B0'];

var palette = function palette(series) {
  return scaleOrdinal().domain(series.map(function (_ref) {
    var uniqueName = _ref.uniqueName;
    return uniqueName;
  })).range(PALETTE);
};

var axisName = function axisName(argumentAxisName) {
  return argumentAxisName || 'argumentAxis';
};

var prepareData = function prepareData(data, series, processingData) {
  return processingData ? processingData(series, data) : data.map(function (singleData) {
    return series.reduce(function (prevValue, _ref) {
      var valueField = _ref.valueField,
          name = _ref.name;

      if (singleData[valueField] === undefined) {
        return prevValue;
      }

      return _extends({}, prevValue, defineProperty({}, valueField + '-' + name + '-stack', [0, singleData[valueField]]));
    }, singleData);
  });
};

export { computedExtension, domains, bBoxes, axisCoordinates, axesData, dArea, dLine, dSpline, xyScales, pieAttributes, coordinates, barCoordinates, findSeriesByName, dBar, pointAttributes, seriesData, checkZeroStart, createScale, HORIZONTAL, VERTICAL, TOP, BOTTOM, LEFT, RIGHT, MIDDLE, END, START, BAND, processData, seriesWithStacks, stacks, palette, axisName, prepareData };
//# sourceMappingURL=dx-chart-core.es.js.map
