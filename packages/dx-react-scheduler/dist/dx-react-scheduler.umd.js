/**
 * Bundle of @devexpress/dx-react-scheduler
 * Generated: 2018-09-04
 * Version: 1.7.2
 * License: https://js.devexpress.com/Licensing
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('@devexpress/dx-react-core'), require('@devexpress/dx-scheduler-core')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', '@devexpress/dx-react-core', '@devexpress/dx-scheduler-core'], factory) :
	(factory((global.DevExpress = global.DevExpress || {}, global.DevExpress.DXReactScheduler = {}),global.React,global.PropTypes,global.DevExpress.DXReactCore,global.DevExpress.DXSchedulerCore));
}(this, (function (exports,React,PropTypes,dxReactCore,dxSchedulerCore) { 'use strict';

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

var SchedulerCore = function (_React$PureComponent) {
  inherits(SchedulerCore, _React$PureComponent);

  function SchedulerCore() {
    classCallCheck(this, SchedulerCore);
    return possibleConstructorReturn(this, (SchedulerCore.__proto__ || Object.getPrototypeOf(SchedulerCore)).apply(this, arguments));
  }

  createClass(SchedulerCore, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          Root = _props.rootComponent,
          getTitle = _props.getTitle,
          getStartDate = _props.getStartDate,
          getEndDate = _props.getEndDate;


      var appointmentsComputed = function appointmentsComputed(_ref) {
        var getAppointmentStartDate = _ref.getAppointmentStartDate,
            getAppointmentEndDate = _ref.getAppointmentEndDate;
        return dxSchedulerCore.appointments(data, getAppointmentStartDate, getAppointmentEndDate);
      };
      return React.createElement(
        dxReactCore.Plugin,
        {
          name: 'SchedulerCore'
        },
        React.createElement(dxReactCore.Getter, { name: 'getAppointmentTitle', value: getTitle }),
        React.createElement(dxReactCore.Getter, { name: 'getAppointmentStartDate', value: getStartDate }),
        React.createElement(dxReactCore.Getter, { name: 'getAppointmentEndDate', value: getEndDate }),
        React.createElement(dxReactCore.Getter, { name: 'appointments', computed: appointmentsComputed }),
        React.createElement(
          dxReactCore.Template,
          { name: 'root' },
          React.createElement(
            Root,
            null,
            React.createElement(dxReactCore.TemplatePlaceholder, { name: 'header' }),
            React.createElement(dxReactCore.TemplatePlaceholder, { name: 'body' }),
            React.createElement(dxReactCore.TemplatePlaceholder, { name: 'footer' })
          )
        )
      );
    }
  }]);
  return SchedulerCore;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? SchedulerCore.propTypes = {
  data: PropTypes.array.isRequired,
  rootComponent: PropTypes.func.isRequired,
  getTitle: PropTypes.func.isRequired,
  getStartDate: PropTypes.func.isRequired,
  getEndDate: PropTypes.func.isRequired
} : void 0;

var Scheduler = function Scheduler(_ref) {
  var data = _ref.data,
      currentDate = _ref.currentDate,
      rootComponent = _ref.rootComponent,
      children = _ref.children,
      getTitle = _ref.getTitle,
      getStartDate = _ref.getStartDate,
      getEndDate = _ref.getEndDate;
  return React.createElement(
    dxReactCore.PluginHost,
    null,
    React.createElement(SchedulerCore, {
      data: data,
      currentDate: currentDate,
      rootComponent: rootComponent,
      appointmentExtension: true,
      getTitle: getTitle,
      getStartDate: getStartDate,
      getEndDate: getEndDate
    }),
    children
  );
};

process.env.NODE_ENV !== "production" ? Scheduler.propTypes = {
  data: PropTypes.array,
  currentDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  rootComponent: PropTypes.func.isRequired,
  children: PropTypes.node,
  getTitle: PropTypes.func,
  getStartDate: PropTypes.func,
  getEndDate: PropTypes.func
} : void 0;

Scheduler.defaultProps = {
  children: undefined,
  data: [],
  currentDate: new Date(),
  getTitle: function getTitle(appointment) {
    return appointment.title;
  },
  getStartDate: function getStartDate(appointment) {
    return appointment.startDate;
  },
  getEndDate: function getEndDate(appointment) {
    return appointment.endDate;
  }
};

var appointmentRectsComputed = function appointmentRectsComputed(_ref) {
  var appointments$$1 = _ref.appointments,
      startViewDate$$1 = _ref.startViewDate,
      endViewDate$$1 = _ref.endViewDate,
      excludedDays = _ref.excludedDays,
      dayScale$$1 = _ref.dayScale,
      timeScale$$1 = _ref.timeScale,
      cellDuration = _ref.cellDuration,
      dateTableRef = _ref.dateTableRef;
  return dateTableRef ? dxSchedulerCore.appointmentRects(appointments$$1, startViewDate$$1, endViewDate$$1, excludedDays, dayScale$$1, timeScale$$1, cellDuration, dateTableRef.querySelectorAll('td')) : [];
};

var SidebarPlaceholder = function SidebarPlaceholder(props) {
  return React.createElement(dxReactCore.TemplatePlaceholder, { name: 'sidebar', params: props });
};
var DayScalePlaceholder = function DayScalePlaceholder(props) {
  return React.createElement(dxReactCore.TemplatePlaceholder, { name: 'navbar', params: props });
};
var DateTablePlaceholder = function DateTablePlaceholder(props) {
  return React.createElement(dxReactCore.TemplatePlaceholder, { name: 'main', params: props });
};

var WeekView = function (_React$PureComponent) {
  inherits(WeekView, _React$PureComponent);

  function WeekView(props) {
    classCallCheck(this, WeekView);

    var _this = possibleConstructorReturn(this, (WeekView.__proto__ || Object.getPrototypeOf(WeekView)).call(this, props));

    _this.state = {
      dateTableRef: null
    };

    _this.dateTableRef = _this.dateTableRef.bind(_this);
    return _this;
  }

  createClass(WeekView, [{
    key: 'dateTableRef',
    value: function dateTableRef(_dateTableRef) {
      this.setState({ dateTableRef: _dateTableRef });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          ViewLayout = _props.layoutComponent,
          TimePanel = _props.timePanelLayoutComponent,
          TimePanelRow = _props.timePanelRowComponent,
          TimePanelCell = _props.timePanelCellComponent,
          DayPanel = _props.dayPanelLayoutComponent,
          DayScaleCell = _props.dayPanelCellComponent,
          DateTable = _props.dateTableLayoutComponent,
          DateTableRow = _props.dateTableRowComponent,
          DateTableCell = _props.dateTableCellComponent,
          startDayHour = _props.startDayHour,
          endDayHour = _props.endDayHour,
          cellDuration = _props.cellDuration,
          intervalCount = _props.intervalCount,
          firstDayOfWeek = _props.firstDayOfWeek,
          excludedDays = _props.excludedDays;


      var timeScaleComputed = function timeScaleComputed(_ref2) {
        var currentDate = _ref2.currentDate;
        return dxSchedulerCore.timeScale(currentDate, firstDayOfWeek, startDayHour, endDayHour, cellDuration, excludedDays);
      };
      var dayScaleComputed = function dayScaleComputed(_ref3) {
        var currentDate = _ref3.currentDate;
        return dxSchedulerCore.dayScale(currentDate, firstDayOfWeek, intervalCount * 7, excludedDays);
      };
      var startViewDateComputed = function startViewDateComputed(_ref4) {
        var dayScale$$1 = _ref4.dayScale,
            timeScale$$1 = _ref4.timeScale;
        return dxSchedulerCore.startViewDate(dayScale$$1, timeScale$$1, startDayHour);
      };
      var endViewDateComputed = function endViewDateComputed(_ref5) {
        var dayScale$$1 = _ref5.dayScale,
            timeScale$$1 = _ref5.timeScale;
        return dxSchedulerCore.endViewDate(dayScale$$1, timeScale$$1);
      };
      var dateTableRef = this.state.dateTableRef;


      return React.createElement(
        dxReactCore.Plugin,
        {
          name: 'WeekView'
        },
        React.createElement(dxReactCore.Getter, { name: 'currentView', value: 'week' }),
        React.createElement(dxReactCore.Getter, { name: 'intervalCount', value: intervalCount }),
        React.createElement(dxReactCore.Getter, { name: 'cellDuration', value: cellDuration }),
        React.createElement(dxReactCore.Getter, { name: 'excludedDays', value: excludedDays }),
        React.createElement(dxReactCore.Getter, { name: 'firstDayOfWeek', value: firstDayOfWeek }),
        React.createElement(dxReactCore.Getter, { name: 'timeScale', computed: timeScaleComputed }),
        React.createElement(dxReactCore.Getter, { name: 'dayScale', computed: dayScaleComputed }),
        React.createElement(dxReactCore.Getter, { name: 'startViewDate', computed: startViewDateComputed }),
        React.createElement(dxReactCore.Getter, { name: 'endViewDate', computed: endViewDateComputed }),
        dateTableRef && React.createElement(dxReactCore.Getter, { name: 'dateTableRef', value: dateTableRef }),
        React.createElement(dxReactCore.Getter, { name: 'appointmentRects', computed: appointmentRectsComputed }),
        React.createElement(
          dxReactCore.Template,
          { name: 'body' },
          React.createElement(ViewLayout, {
            navbarComponent: DayScalePlaceholder,
            mainComponent: DateTablePlaceholder,
            sidebarComponent: SidebarPlaceholder
          })
        ),
        React.createElement(
          dxReactCore.Template,
          { name: 'navbar' },
          React.createElement(dxReactCore.TemplatePlaceholder, null),
          React.createElement(
            dxReactCore.TemplateConnector,
            null,
            function (_ref6) {
              var dayScale$$1 = _ref6.dayScale;
              return React.createElement(DayPanel, {
                rowComponent: TimePanelRow,
                cellComponent: DayScaleCell,
                dayScale: dayScale$$1
              });
            }
          )
        ),
        React.createElement(
          dxReactCore.Template,
          { name: 'sidebar' },
          React.createElement(dxReactCore.TemplatePlaceholder, null),
          React.createElement(
            dxReactCore.TemplateConnector,
            null,
            function (_ref7) {
              var timeScale$$1 = _ref7.timeScale;
              return React.createElement(TimePanel, {
                rowComponent: TimePanelRow,
                cellComponent: TimePanelCell,
                timeScale: timeScale$$1
              });
            }
          )
        ),
        React.createElement(
          dxReactCore.Template,
          { name: 'main' },
          React.createElement(dxReactCore.TemplatePlaceholder, null),
          React.createElement(
            dxReactCore.TemplateConnector,
            null,
            function (_ref8) {
              var timeScale$$1 = _ref8.timeScale,
                  dayScale$$1 = _ref8.dayScale;
              return React.createElement(DateTable, {
                rowComponent: DateTableRow,
                cellComponent: DateTableCell,
                timeScale: timeScale$$1,
                dayScale: dayScale$$1,
                dateTableRef: _this2.dateTableRef
              });
            }
          )
        )
      );
    }
  }]);
  return WeekView;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? WeekView.propTypes = {
  layoutComponent: PropTypes.func.isRequired,
  timePanelLayoutComponent: PropTypes.func.isRequired,
  timePanelRowComponent: PropTypes.func.isRequired,
  timePanelCellComponent: PropTypes.func.isRequired,
  dayPanelLayoutComponent: PropTypes.func.isRequired,
  dayPanelCellComponent: PropTypes.func.isRequired,
  dateTableLayoutComponent: PropTypes.func.isRequired,
  dateTableRowComponent: PropTypes.func.isRequired,
  dateTableCellComponent: PropTypes.func.isRequired,
  startDayHour: PropTypes.number,
  endDayHour: PropTypes.number,
  cellDuration: PropTypes.number,
  intervalCount: PropTypes.number,
  firstDayOfWeek: PropTypes.number,
  excludedDays: PropTypes.array
} : void 0;

WeekView.defaultProps = {
  startDayHour: 0,
  endDayHour: 24,
  cellDuration: 30,
  intervalCount: 1,
  firstDayOfWeek: 0,
  excludedDays: []
};

var WEEK_COUNT = 7;

var appointmentRectsComputed$1 = function appointmentRectsComputed(_ref) {
  var appointments$$1 = _ref.appointments,
      startViewDate$$1 = _ref.startViewDate,
      endViewDate$$1 = _ref.endViewDate,
      monthCells$$1 = _ref.monthCells,
      dateTableRef = _ref.dateTableRef;
  return dateTableRef ? dxSchedulerCore.monthAppointmentRect(appointments$$1, startViewDate$$1, endViewDate$$1, monthCells$$1, dateTableRef.querySelectorAll('td')) : [];
};

var DayScalePlaceholder$1 = function DayScalePlaceholder(props) {
  return React.createElement(dxReactCore.TemplatePlaceholder, { name: 'navbar', params: props });
};
var DateTablePlaceholder$1 = function DateTablePlaceholder(props) {
  return React.createElement(dxReactCore.TemplatePlaceholder, { name: 'main', params: props });
};

var MonthView = function (_React$PureComponent) {
  inherits(MonthView, _React$PureComponent);

  function MonthView(props) {
    classCallCheck(this, MonthView);

    var _this = possibleConstructorReturn(this, (MonthView.__proto__ || Object.getPrototypeOf(MonthView)).call(this, props));

    _this.state = {
      dateTableRef: null
    };

    _this.dateTableRef = _this.dateTableRef.bind(_this);
    return _this;
  }

  createClass(MonthView, [{
    key: 'dateTableRef',
    value: function dateTableRef(_dateTableRef) {
      this.setState({ dateTableRef: _dateTableRef });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          ViewLayout = _props.layoutComponent,
          DayPanel = _props.dayPanelLayoutComponent,
          DayPanelCell = _props.dayPanelCellComponent,
          DayPanelRow = _props.dayPanelRowComponent,
          DateTable = _props.dateTableLayoutComponent,
          DateTableRow = _props.dateTableRowComponent,
          DateTableCell = _props.dateTableCellComponent,
          intervalCount = _props.intervalCount,
          firstDayOfWeek = _props.firstDayOfWeek;
      var dateTableRef = this.state.dateTableRef;


      var dayScaleComputed = function dayScaleComputed(_ref2) {
        var currentDate = _ref2.currentDate;
        return dxSchedulerCore.dayScale(currentDate, firstDayOfWeek, WEEK_COUNT, []);
      };
      var monthCellsComputed = function monthCellsComputed(_ref3) {
        var currentDate = _ref3.currentDate;
        return dxSchedulerCore.monthCells(currentDate, firstDayOfWeek, intervalCount);
      };
      var endViewDateComputed = function endViewDateComputed(_ref4) {
        var monthCells$$1 = _ref4.monthCells;
        return dxSchedulerCore.endViewBoundary(monthCells$$1);
      };
      var startViewDateComputed = function startViewDateComputed(_ref5) {
        var monthCells$$1 = _ref5.monthCells;
        return new Date(monthCells$$1[0][0].value);
      };

      return React.createElement(
        dxReactCore.Plugin,
        {
          name: 'MonthView'
        },
        React.createElement(dxReactCore.Getter, { name: 'currentView', value: 'month' }),
        React.createElement(dxReactCore.Getter, { name: 'intervalCount', value: intervalCount }),
        React.createElement(dxReactCore.Getter, { name: 'firstDayOfWeek', value: firstDayOfWeek }),
        React.createElement(dxReactCore.Getter, { name: 'dayScale', computed: dayScaleComputed }),
        React.createElement(dxReactCore.Getter, { name: 'monthCells', computed: monthCellsComputed }),
        React.createElement(dxReactCore.Getter, { name: 'startViewDate', computed: startViewDateComputed }),
        React.createElement(dxReactCore.Getter, { name: 'endViewDate', computed: endViewDateComputed }),
        dateTableRef && React.createElement(dxReactCore.Getter, { name: 'dateTableRef', value: dateTableRef }),
        React.createElement(dxReactCore.Getter, { name: 'appointmentRects', computed: appointmentRectsComputed$1 }),
        React.createElement(
          dxReactCore.Template,
          { name: 'body' },
          React.createElement(ViewLayout, {
            navbarComponent: DayScalePlaceholder$1,
            mainComponent: DateTablePlaceholder$1
          })
        ),
        React.createElement(
          dxReactCore.Template,
          { name: 'navbar' },
          React.createElement(dxReactCore.TemplatePlaceholder, null),
          React.createElement(
            dxReactCore.TemplateConnector,
            null,
            function (_ref6) {
              var dayScale$$1 = _ref6.dayScale;
              return React.createElement(DayPanel, {
                cellComponent: DayPanelCell,
                rowComponent: DayPanelRow,
                dayScale: dayScale$$1
              });
            }
          )
        ),
        React.createElement(
          dxReactCore.Template,
          { name: 'main' },
          React.createElement(dxReactCore.TemplatePlaceholder, null),
          React.createElement(
            dxReactCore.TemplateConnector,
            null,
            function (_ref7) {
              var monthCells$$1 = _ref7.monthCells;
              return React.createElement(DateTable, {
                rowComponent: DateTableRow,
                cellComponent: DateTableCell,
                monthCells: monthCells$$1,
                dateTableRef: _this2.dateTableRef
              });
            }
          )
        )
      );
    }
  }]);
  return MonthView;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? MonthView.propTypes = {
  layoutComponent: PropTypes.func.isRequired,
  dayPanelLayoutComponent: PropTypes.func.isRequired,
  dayPanelCellComponent: PropTypes.func.isRequired,
  dayPanelRowComponent: PropTypes.func.isRequired,
  dateTableLayoutComponent: PropTypes.func.isRequired,
  dateTableRowComponent: PropTypes.func.isRequired,
  dateTableCellComponent: PropTypes.func.isRequired,
  intervalCount: PropTypes.number,
  firstDayOfWeek: PropTypes.number
} : void 0;

MonthView.defaultProps = {
  intervalCount: 1,
  firstDayOfWeek: 0
};

var Toolbar = function (_React$PureComponent) {
  inherits(Toolbar, _React$PureComponent);

  function Toolbar() {
    classCallCheck(this, Toolbar);
    return possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));
  }

  createClass(Toolbar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Root = _props.rootComponent,
          FlexibleSpaceComponent = _props.flexibleSpaceComponent;

      return React.createElement(
        dxReactCore.Plugin,
        {
          name: 'Toolbar'
        },
        React.createElement(
          dxReactCore.Template,
          { name: 'header' },
          React.createElement(
            Root,
            null,
            React.createElement(dxReactCore.TemplatePlaceholder, { name: 'toolbarContent' })
          ),
          React.createElement(dxReactCore.TemplatePlaceholder, null)
        ),
        React.createElement(
          dxReactCore.Template,
          { name: 'toolbarContent' },
          React.createElement(FlexibleSpaceComponent, null)
        )
      );
    }
  }]);
  return Toolbar;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? Toolbar.propTypes = {
  rootComponent: PropTypes.func.isRequired,
  flexibleSpaceComponent: PropTypes.func.isRequired
} : void 0;

var pluginDependencies = [{ name: 'Toolbar' }, { name: 'ViewState' }];

var navigate = function navigate(action, currentView, intervalCount) {
  return function (payload) {
    return action(_extends({}, payload, { amount: intervalCount, step: currentView
    }));
  };
};

var DateNavigator = function (_React$PureComponent) {
  inherits(DateNavigator, _React$PureComponent);

  function DateNavigator(props) {
    classCallCheck(this, DateNavigator);

    var _this = possibleConstructorReturn(this, (DateNavigator.__proto__ || Object.getPrototypeOf(DateNavigator)).call(this, props));

    _this.state = {
      visible: false
    };

    _this.handleToggle = _this.handleToggle.bind(_this);
    _this.handleHide = _this.handleHide.bind(_this);
    _this.setTargetRef = _this.setTargetRef.bind(_this);
    return _this;
  }

  createClass(DateNavigator, [{
    key: 'setTargetRef',
    value: function setTargetRef(target) {
      this.target = target;
    }
  }, {
    key: 'handleToggle',
    value: function handleToggle() {
      var visible = this.state.visible;

      this.setState({ visible: !visible });
    }
  }, {
    key: 'handleHide',
    value: function handleHide() {
      this.setState({ visible: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          Root = _props.rootComponent,
          Overlay = _props.overlayComponent,
          ToggleButton = _props.toggleButtonComponent,
          NavigationButton = _props.navigationButtonComponent,
          Calendar = _props.calendarComponent,
          CalendarRow = _props.calendarRowComponent,
          CalendarCell = _props.calendarCellComponent,
          CalendarHeaderRow = _props.calendarHeaderRowComponent,
          CalendarHeaderCell = _props.calendarHeaderCellComponent,
          CalendarTitle = _props.calendarTitleComponent,
          CalendarNavigationButton = _props.calendarNavigationButtonComponent,
          CalendarNavigator = _props.calendarNavigatorComponent;
      var visible = this.state.visible;

      return React.createElement(
        dxReactCore.Plugin,
        {
          name: 'DateNavigator',
          dependencies: pluginDependencies
        },
        React.createElement(
          dxReactCore.Template,
          { name: 'toolbarContent' },
          React.createElement(dxReactCore.TemplatePlaceholder, null),
          React.createElement(
            dxReactCore.TemplateConnector,
            null,
            function (_ref, _ref2) {
              var currentDate = _ref.currentDate,
                  startViewDate$$1 = _ref.startViewDate,
                  endViewDate$$1 = _ref.endViewDate,
                  firstDayOfWeek = _ref.firstDayOfWeek,
                  currentView = _ref.currentView,
                  intervalCount = _ref.intervalCount;
              var changeCurrentDate$$1 = _ref2.changeCurrentDate;

              var navigateAction = navigate(changeCurrentDate$$1, currentView, intervalCount);
              var navigatorTitle = dxSchedulerCore.viewBoundTitle(startViewDate$$1, endViewDate$$1, currentView, currentDate, intervalCount);
              return React.createElement(
                React.Fragment,
                null,
                React.createElement(Root, {
                  navigationButtonComponent: NavigationButton,
                  toggleButtonComponent: ToggleButton,
                  navigatorTitle: navigatorTitle,
                  targetRef: _this2.setTargetRef,
                  onToggle: _this2.handleToggle,
                  onNavigate: navigateAction
                }),
                React.createElement(
                  Overlay,
                  {
                    visible: visible,
                    target: _this2.target,
                    onHide: _this2.handleHide
                  },
                  React.createElement(Calendar, {
                    currentDate: currentDate,
                    firstDayOfWeek: firstDayOfWeek,
                    getCells: dxSchedulerCore.monthCells,
                    getHeaderCells: dxSchedulerCore.dayScale,
                    titleComponent: CalendarTitle,
                    navigationButtonComponent: CalendarNavigationButton,
                    rowComponent: CalendarRow,
                    cellComponent: CalendarCell,
                    headerRowComponent: CalendarHeaderRow,
                    headerCellComponent: CalendarHeaderCell,
                    navigatorComponent: CalendarNavigator,
                    onNavigate: navigateAction
                  })
                )
              );
            }
          )
        )
      );
    }
  }]);
  return DateNavigator;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? DateNavigator.propTypes = {
  rootComponent: PropTypes.func.isRequired,
  overlayComponent: PropTypes.func.isRequired,
  toggleButtonComponent: PropTypes.func.isRequired,
  navigationButtonComponent: PropTypes.func.isRequired,
  calendarComponent: PropTypes.func.isRequired,
  calendarRowComponent: PropTypes.func.isRequired,
  calendarCellComponent: PropTypes.func.isRequired,
  calendarHeaderRowComponent: PropTypes.func.isRequired,
  calendarHeaderCellComponent: PropTypes.func.isRequired,
  calendarTitleComponent: PropTypes.func.isRequired,
  calendarNavigationButtonComponent: PropTypes.func.isRequired,
  calendarNavigatorComponent: PropTypes.func.isRequired
} : void 0;

var getAppointmentStyle = function getAppointmentStyle(_ref) {
  var top = _ref.top,
      left = _ref.left,
      width = _ref.width,
      height = _ref.height;
  return {
    height: height,
    width: width + '%',
    transform: 'translateY(' + top + 'px)',
    left: left + '%',
    position: 'absolute'
  };
};

var Appointments = function (_React$PureComponent) {
  inherits(Appointments, _React$PureComponent);

  function Appointments() {
    classCallCheck(this, Appointments);
    return possibleConstructorReturn(this, (Appointments.__proto__ || Object.getPrototypeOf(Appointments)).apply(this, arguments));
  }

  createClass(Appointments, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Appointment = _props.appointmentComponent,
          Container = _props.containerComponent;


      return React.createElement(
        dxReactCore.Plugin,
        { name: 'Appointment' },
        React.createElement(
          dxReactCore.Template,
          { name: 'main' },
          React.createElement(dxReactCore.TemplatePlaceholder, null),
          React.createElement(
            Container,
            null,
            React.createElement(
              dxReactCore.TemplateConnector,
              null,
              function (_ref2) {
                var appointmentRects$$1 = _ref2.appointmentRects,
                    getAppointmentTitle = _ref2.getAppointmentTitle,
                    getAppointmentStartDate = _ref2.getAppointmentStartDate,
                    getAppointmentEndDate = _ref2.getAppointmentEndDate;
                return appointmentRects$$1.map(function (_ref3, index) {
                  var dataItem = _ref3.dataItem,
                      type = _ref3.type,
                      geometry = objectWithoutProperties(_ref3, ['dataItem', 'type']);
                  return React.createElement(Appointment, {
                    type: type,
                    key: index.toString(),
                    appointment: dataItem,
                    getTitle: getAppointmentTitle,
                    getEndDate: getAppointmentEndDate,
                    getStartDate: getAppointmentStartDate,
                    style: getAppointmentStyle(geometry)
                  });
                });
              }
            )
          )
        )
      );
    }
  }]);
  return Appointments;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? Appointments.propTypes = {
  appointmentComponent: PropTypes.func.isRequired,
  containerComponent: PropTypes.func.isRequired
} : void 0;

var ViewState = function (_React$PureComponent) {
  inherits(ViewState, _React$PureComponent);

  function ViewState(props) {
    classCallCheck(this, ViewState);

    var _this = possibleConstructorReturn(this, (ViewState.__proto__ || Object.getPrototypeOf(ViewState)).call(this, props));

    var onCurrentDateChange = _this.props.onCurrentDateChange;

    _this.state = {
      currentDate: props.currentDate || props.defaultCurrentDate
    };

    var stateHelper = dxReactCore.createStateHelper(_this, {
      currentDate: function currentDate() {
        return onCurrentDateChange;
      }
    });

    _this.changeCurrentDate = stateHelper.applyFieldReducer.bind(stateHelper, 'currentDate', dxSchedulerCore.changeCurrentDate);
    return _this;
  }

  createClass(ViewState, [{
    key: 'render',
    value: function render() {
      var currentDate = this.state.currentDate;


      return React.createElement(
        dxReactCore.Plugin,
        {
          name: 'ViewState'
        },
        React.createElement(dxReactCore.Getter, { name: 'currentDate', value: currentDate }),
        React.createElement(dxReactCore.Action, { name: 'changeCurrentDate', action: this.changeCurrentDate })
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var _nextProps$currentDat = nextProps.currentDate,
          currentDate = _nextProps$currentDat === undefined ? prevState.currentDate : _nextProps$currentDat;


      return {
        currentDate: currentDate
      };
    }
  }]);
  return ViewState;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? ViewState.propTypes = {
  currentDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  defaultCurrentDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onCurrentDateChange: PropTypes.func
} : void 0;

ViewState.defaultProps = {
  currentDate: undefined,
  defaultCurrentDate: new Date(),
  onCurrentDateChange: undefined
};

exports.Scheduler = Scheduler;
exports.WeekView = WeekView;
exports.MonthView = MonthView;
exports.Toolbar = Toolbar;
exports.DateNavigator = DateNavigator;
exports.Appointments = Appointments;
exports.ViewState = ViewState;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dx-react-scheduler.umd.js.map
