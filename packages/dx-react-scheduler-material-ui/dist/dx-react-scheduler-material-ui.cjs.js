/**
 * Bundle of @devexpress/dx-react-scheduler-material-ui
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
var dxReactScheduler = require('@devexpress/dx-react-scheduler');
var Grid = _interopDefault(require('@material-ui/core/Grid'));
var styles = require('@material-ui/core/styles');
var colorManipulator = require('@material-ui/core/styles/colorManipulator');
var TableRow = _interopDefault(require('@material-ui/core/TableRow'));
var moment = _interopDefault(require('moment'));
var classNames = _interopDefault(require('classnames'));
var Table = _interopDefault(require('@material-ui/core/Table'));
var TableBody = _interopDefault(require('@material-ui/core/TableBody'));
var TableCell = _interopDefault(require('@material-ui/core/TableCell'));
var RootRef = _interopDefault(require('@material-ui/core/RootRef'));
var dxSchedulerCore = require('@devexpress/dx-scheduler-core');
var ToolbarMUI = _interopDefault(require('@material-ui/core/Toolbar'));
var Popover = _interopDefault(require('@material-ui/core/Popover'));
var Button = _interopDefault(require('@material-ui/core/Button'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var ChevronLeft = _interopDefault(require('@material-ui/icons/ChevronLeft'));
var ChevronRight = _interopDefault(require('@material-ui/icons/ChevronRight'));
var TableHead = _interopDefault(require('@material-ui/core/TableHead'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));

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

var Root = function Root(_ref) {
  var children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['children']);
  return React.createElement(
    'div',
    restProps,
    children
  );
};

process.env.NODE_ENV !== "production" ? Root.propTypes = {
  children: PropTypes.node
} : void 0;

Root.defaultProps = {
  children: undefined
};

var Scheduler$1 = function Scheduler$$1(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);
  return React.createElement(
    dxReactScheduler.Scheduler,
    _extends({
      rootComponent: Root
    }, props),
    children
  );
};

Scheduler$1.Root = Root;

process.env.NODE_ENV !== "production" ? Scheduler$1.propTypes = {
  children: PropTypes.node.isRequired
} : void 0;

var getBorder = function getBorder(theme) {
  return '1px solid ' + (theme.palette.type === 'light' ? colorManipulator.lighten(colorManipulator.fade(theme.palette.divider, 1), 0.88) : colorManipulator.darken(colorManipulator.fade(theme.palette.divider, 1), 0.8));
};

var styles$1 = function styles$$1(theme) {
  return {
    container: {
      overflowY: 'auto',
      height: 700
    },
    stickyHeader: {
      top: 0,
      zIndex: 1,
      tableLayout: 'fixed',
      position: 'sticky',
      overflow: 'visible',
      background: theme.palette.background.paper
    },
    emptySpace: {
      borderBottom: getBorder(theme)
    },
    main: {
      position: 'relative'
    }
  };
};

var WeekLayoutBase = function (_React$PureComponent) {
  inherits(WeekLayoutBase, _React$PureComponent);

  function WeekLayoutBase() {
    classCallCheck(this, WeekLayoutBase);
    return possibleConstructorReturn(this, (WeekLayoutBase.__proto__ || Object.getPrototypeOf(WeekLayoutBase)).apply(this, arguments));
  }

  createClass(WeekLayoutBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Sidebar = _props.sidebarComponent,
          Navbar = _props.navbarComponent,
          Main = _props.mainComponent,
          classes = _props.classes;


      return React.createElement(
        Grid,
        {
          container: true,
          className: classes.container
        },
        React.createElement(
          Grid,
          {
            container: true,
            direction: 'row',
            className: classes.stickyHeader
          },
          React.createElement(Grid, { item: true, xs: 1, className: classes.emptySpace }),
          React.createElement(
            Grid,
            { item: true, xs: 11 },
            React.createElement(Navbar, null)
          )
        ),
        React.createElement(
          Grid,
          { container: true, direction: 'row' },
          React.createElement(
            Grid,
            { item: true, xs: 1 },
            React.createElement(Sidebar, null)
          ),
          React.createElement(
            Grid,
            { item: true, xs: 11, className: classes.main },
            React.createElement(Main, null)
          )
        )
      );
    }
  }]);
  return WeekLayoutBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? WeekLayoutBase.propTypes = {
  sidebarComponent: PropTypes.func.isRequired,
  navbarComponent: PropTypes.func.isRequired,
  mainComponent: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
} : void 0;

var WeekLayout = styles.withStyles(styles$1, { name: 'WeekLayout' })(WeekLayoutBase);

var Row = function Row(_ref) {
  var children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['children']);
  return React.createElement(
    TableRow,
    restProps,
    children
  );
};

process.env.NODE_ENV !== "production" ? Row.propTypes = {
  children: PropTypes.node
} : void 0;

Row.defaultProps = {
  children: null
};

var styles$2 = {
  table: {
    tableLayout: 'fixed'
  }
};

var LayoutBase = function LayoutBase(_ref) {
  var Cell = _ref.cellComponent,
      Row = _ref.rowComponent,
      timeScale = _ref.timeScale,
      classes = _ref.classes,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['cellComponent', 'rowComponent', 'timeScale', 'classes', 'className']);
  return React.createElement(
    Table,
    _extends({}, restProps, { className: classNames(classes.table, className) }),
    React.createElement(
      TableBody,
      null,
      timeScale.map(function (time, index) {
        var hour = moment(time.end).hour();
        var minute = moment(time.end).minute();
        return React.createElement(
          Row,
          { key: time.start },
          index % 2 ? null : React.createElement(Cell, {
            rowSpan: '2',
            time: moment().hour(hour).minute(minute).toDate()
          })
        );
      })
    )
  );
};

process.env.NODE_ENV !== "production" ? LayoutBase.propTypes = {
  classes: PropTypes.object.isRequired,
  cellComponent: PropTypes.func,
  rowComponent: PropTypes.func,
  timeScale: PropTypes.array,
  className: PropTypes.string
} : void 0;
LayoutBase.defaultProps = {
  cellComponent: function cellComponent() {
    return null;
  },
  rowComponent: function rowComponent() {
    return null;
  },
  className: undefined,
  timeScale: []
};

var Layout = styles.withStyles(styles$2, { name: 'Layout' })(LayoutBase);

var styles$3 = function styles$$1(theme) {
  return {
    cell: {
      border: 0,
      padding: theme.spacing.unit,
      '&:last-child': {
        padding: theme.spacing.unit
      }
    },
    text: _extends({}, theme.typography.caption)
  };
};

var CellBase = function CellBase(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      time = _ref.time,
      restProps = objectWithoutProperties(_ref, ['classes', 'className', 'time']);

  var currentTime = moment(time);
  return React.createElement(
    TableCell,
    _extends({
      numeric: true,
      className: classNames(classes.cell, className)
    }, restProps),
    React.createElement(
      'span',
      { className: classes.text },
      currentTime.format('h:mm A')
    )
  );
};

process.env.NODE_ENV !== "production" ? CellBase.propTypes = {
  time: PropTypes.instanceOf(Date).isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

CellBase.defaultProps = {
  className: undefined
};

var Cell = styles.withStyles(styles$3, { name: 'Cell' })(CellBase);

var styles$4 = {
  table: {
    tableLayout: 'fixed'
  }
};

var LayoutBase$1 = function LayoutBase(_ref) {
  var Cell = _ref.cellComponent,
      Row = _ref.rowComponent,
      className = _ref.className,
      dayScale = _ref.dayScale,
      classes = _ref.classes,
      restProps = objectWithoutProperties(_ref, ['cellComponent', 'rowComponent', 'className', 'dayScale', 'classes']);
  return React.createElement(
    Table,
    _extends({
      className: classNames(classes.table, className)
    }, restProps),
    React.createElement(
      TableBody,
      null,
      React.createElement(
        Row,
        null,
        dayScale.map(function (date) {
          return React.createElement(Cell, {
            key: date,
            date: date
          });
        })
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? LayoutBase$1.propTypes = {
  classes: PropTypes.object.isRequired,
  dayScale: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  cellComponent: PropTypes.func,
  rowComponent: PropTypes.func,
  className: PropTypes.string
} : void 0;
LayoutBase$1.defaultProps = {
  cellComponent: function cellComponent() {
    return null;
  },
  rowComponent: function rowComponent() {
    return null;
  },
  className: undefined,
  dayScale: []
};

var Layout$1 = styles.withStyles(styles$4, { name: 'Layout' })(LayoutBase$1);

var styles$5 = function styles$$1(theme) {
  return {
    cell: {
      paddingBottom: 0,
      borderLeft: getBorder(theme)
    },
    dayOfWeek: _extends({}, theme.typography.caption, {
      margin: 0
    }),
    dayOfMonth: _extends({}, theme.typography.display1)
  };
};

var CellBase$1 = function CellBase(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      date = _ref.date,
      restProps = objectWithoutProperties(_ref, ['classes', 'className', 'date']);

  var currentDate = moment(date);
  return React.createElement(
    TableCell,
    _extends({
      className: classNames(classes.cell, className)
    }, restProps),
    React.createElement(
      'p',
      { className: classes.dayOfWeek },
      currentDate.format('ddd')
    ),
    React.createElement(
      'span',
      { className: classes.dayOfMonth },
      currentDate.format('D')
    )
  );
};

process.env.NODE_ENV !== "production" ? CellBase$1.propTypes = {
  classes: PropTypes.object.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  className: PropTypes.string
} : void 0;

CellBase$1.defaultProps = {
  className: undefined
};

var Cell$1 = styles.withStyles(styles$5, { name: 'Cell' })(CellBase$1);

var styles$6 = {
  table: {
    tableLayout: 'fixed'
  }
};

var LayoutBase$2 = function LayoutBase(_ref) {
  var timeScale = _ref.timeScale,
      dayScale = _ref.dayScale,
      dateTableRef = _ref.dateTableRef,
      classes = _ref.classes,
      className = _ref.className,
      Cell = _ref.cellComponent,
      Row = _ref.rowComponent,
      restProps = objectWithoutProperties(_ref, ['timeScale', 'dayScale', 'dateTableRef', 'classes', 'className', 'cellComponent', 'rowComponent']);
  return React.createElement(
    RootRef,
    { rootRef: dateTableRef },
    React.createElement(
      Table,
      _extends({
        className: classNames(classes.table, className)
      }, restProps),
      React.createElement(
        TableBody,
        null,
        timeScale.map(function (time, index) {
          return React.createElement(
            Row,
            { key: index.toString() },
            dayScale.map(function (date) {
              return React.createElement(Cell, { key: date, date: date, time: time });
            })
          );
        })
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? LayoutBase$2.propTypes = {
  dateTableRef: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  timeScale: PropTypes.array,
  dayScale: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  cellComponent: PropTypes.func,
  rowComponent: PropTypes.func,
  className: PropTypes.string
} : void 0;
LayoutBase$2.defaultProps = {
  timeScale: [],
  dayScale: [],
  className: undefined,
  cellComponent: function cellComponent() {
    return null;
  },
  rowComponent: function rowComponent() {
    return null;
  }
};

var Layout$2 = styles.withStyles(styles$6, { name: 'Layout' })(LayoutBase$2);

var styles$7 = function styles$$1(theme) {
  return {
    cell: {
      borderLeft: getBorder(theme),
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      },
      '&:focus': {
        backgroundColor: theme.palette.primary[100],
        outline: 0
      }
    }
  };
};

var CellBase$2 = function CellBase(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      children = _ref.children,
      time = _ref.time,
      date = _ref.date,
      restProps = objectWithoutProperties(_ref, ['classes', 'className', 'children', 'time', 'date']);
  return React.createElement(
    TableCell,
    _extends({
      tabIndex: 0,
      className: classNames(classes.cell, className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? CellBase$2.propTypes = {
  classes: PropTypes.object.isRequired,
  time: PropTypes.object.isRequired,
  date: PropTypes.instanceOf(Date),
  children: PropTypes.node,
  className: PropTypes.string
} : void 0;

CellBase$2.defaultProps = {
  children: null,
  date: undefined,
  className: undefined
};

var Cell$2 = styles.withStyles(styles$7, { name: 'Cell' })(CellBase$2);

var WeekView$1 = function (_React$PureComponent) {
  inherits(WeekView$$1, _React$PureComponent);

  function WeekView$$1() {
    classCallCheck(this, WeekView$$1);
    return possibleConstructorReturn(this, (WeekView$$1.__proto__ || Object.getPrototypeOf(WeekView$$1)).apply(this, arguments));
  }

  createClass(WeekView$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactScheduler.WeekView, _extends({
        layoutComponent: WeekLayout,
        timePanelLayoutComponent: Layout,
        timePanelCellComponent: Cell,
        timePanelRowComponent: Row,
        dayPanelLayoutComponent: Layout$1,
        dayPanelCellComponent: Cell$1,
        dayPanelRowComponent: Row,
        dateTableLayoutComponent: Layout$2,
        dateTableCellComponent: Cell$2,
        dateTableRowComponent: Row
      }, this.props));
    }
  }]);
  return WeekView$$1;
}(React.PureComponent);

WeekView$1.TimePanelLayout = Layout;
WeekView$1.TimePanelCell = Cell;
WeekView$1.TimePanelRow = Row;

WeekView$1.DayPanelLayout = Layout$1;
WeekView$1.DayPanelCell = Cell$1;
WeekView$1.DayPanelRow = Row;

WeekView$1.DateTableLayout = Layout$2;
WeekView$1.DateTableCell = Cell$2;
WeekView$1.DateTableRow = Row;

var styles$8 = function styles$$1(theme) {
  return {
    container: {
      overflowY: 'auto',
      height: 700
    },
    stickyHeader: {
      top: 0,
      zIndex: 1,
      tableLayout: 'fixed',
      position: 'sticky',
      overflow: 'visible',
      background: theme.palette.background.paper
    },
    main: {
      position: 'relative'
    }
  };
};

var MonthLayoutBase = function (_React$PureComponent) {
  inherits(MonthLayoutBase, _React$PureComponent);

  function MonthLayoutBase() {
    classCallCheck(this, MonthLayoutBase);
    return possibleConstructorReturn(this, (MonthLayoutBase.__proto__ || Object.getPrototypeOf(MonthLayoutBase)).apply(this, arguments));
  }

  createClass(MonthLayoutBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Navbar = _props.navbarComponent,
          Main = _props.mainComponent,
          classes = _props.classes;


      return React.createElement(
        Grid,
        {
          className: classes.container,
          container: true,
          direction: 'column',
          wrap: 'nowrap'
        },
        React.createElement(
          Grid,
          {
            item: true,
            className: classes.stickyHeader
          },
          React.createElement(Navbar, null)
        ),
        React.createElement(
          Grid,
          {
            item: true,
            className: classes.main
          },
          React.createElement(Main, null)
        )
      );
    }
  }]);
  return MonthLayoutBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? MonthLayoutBase.propTypes = {
  navbarComponent: PropTypes.func.isRequired,
  mainComponent: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
} : void 0;

var MonthLayout = styles.withStyles(styles$8, { name: 'MonthLayout' })(MonthLayoutBase);

var Row$1 = function Row(_ref) {
  var children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['children']);
  return React.createElement(
    TableRow,
    restProps,
    children
  );
};

process.env.NODE_ENV !== "production" ? Row$1.propTypes = {
  children: PropTypes.node.isRequired
} : void 0;

var styles$9 = {
  table: {
    tableLayout: 'fixed'
  }
};

var LayoutBase$3 = function LayoutBase(_ref) {
  var Cell = _ref.cellComponent,
      Row = _ref.rowComponent,
      className = _ref.className,
      dayScale = _ref.dayScale,
      classes = _ref.classes,
      restProps = objectWithoutProperties(_ref, ['cellComponent', 'rowComponent', 'className', 'dayScale', 'classes']);
  return React.createElement(
    Table,
    _extends({
      className: classNames(classes.table, className)
    }, restProps),
    React.createElement(
      TableBody,
      null,
      React.createElement(
        Row,
        null,
        dayScale.map(function (date, index) {
          return React.createElement(Cell, {
            key: index.toString(),
            date: date
          });
        })
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? LayoutBase$3.propTypes = {
  classes: PropTypes.object.isRequired,
  dayScale: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  cellComponent: PropTypes.func,
  rowComponent: PropTypes.func,
  className: PropTypes.string
} : void 0;
LayoutBase$3.defaultProps = {
  cellComponent: function cellComponent() {
    return null;
  },
  rowComponent: function rowComponent() {
    return null;
  },
  className: undefined,
  dayScale: []
};

var Layout$3 = styles.withStyles(styles$9, { name: 'Layout' })(LayoutBase$3);

var styles$10 = function styles$$1(theme) {
  return {
    cell: {
      padding: 0,
      borderLeft: getBorder(theme)
    },
    dayOfWeek: _extends({}, theme.typography.caption, {
      margin: 0,
      padding: theme.spacing.unit
    }),
    dayOfMonth: _extends({}, theme.typography.display1)
  };
};

var CellBase$3 = function CellBase(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      date = _ref.date,
      restProps = objectWithoutProperties(_ref, ['classes', 'className', 'date']);

  var currentDate = moment(date);
  return React.createElement(
    TableCell,
    _extends({
      className: classNames(classes.cell, className)
    }, restProps),
    React.createElement(
      'div',
      { className: classes.dayOfWeek },
      currentDate.format('ddd')
    )
  );
};

process.env.NODE_ENV !== "production" ? CellBase$3.propTypes = {
  classes: PropTypes.object.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  className: PropTypes.string
} : void 0;

CellBase$3.defaultProps = {
  className: undefined
};

var Cell$3 = styles.withStyles(styles$10, { name: 'Cell' })(CellBase$3);

var styles$11 = {
  table: {
    tableLayout: 'fixed'
  }
};

var LayoutBase$4 = function LayoutBase(_ref) {
  var Cell = _ref.cellComponent,
      Row = _ref.rowComponent,
      monthCells = _ref.monthCells,
      classes = _ref.classes,
      dateTableRef = _ref.dateTableRef,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['cellComponent', 'rowComponent', 'monthCells', 'classes', 'dateTableRef', 'className']);
  return React.createElement(
    RootRef,
    { rootRef: dateTableRef },
    React.createElement(
      Table,
      _extends({
        className: classNames(classes.table, className)
      }, restProps),
      React.createElement(
        TableBody,
        null,
        monthCells.map(function (row) {
          return React.createElement(
            Row,
            { key: 'date_table_row_' + row[0].value.toString() },
            row.map(function (date) {
              return React.createElement(Cell, { key: date.value, date: date });
            })
          );
        })
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? LayoutBase$4.propTypes = {
  monthCells: PropTypes.array.isRequired,
  dateTableRef: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  cellComponent: PropTypes.func,
  rowComponent: PropTypes.func,
  className: PropTypes.string
} : void 0;
LayoutBase$4.defaultProps = {
  cellComponent: function cellComponent() {
    return null;
  },
  rowComponent: function rowComponent() {
    return null;
  },
  className: undefined
};

var Layout$4 = styles.withStyles(styles$11, { name: 'Layout' })(LayoutBase$4);

var styles$12 = function styles$$1(theme) {
  return {
    cell: {
      verticalAlign: 'top',
      padding: 0,
      height: 100,
      borderLeft: getBorder(theme),
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      },
      '&:focus': {
        backgroundColor: theme.palette.primary[100],
        outline: 0
      }
    },
    text: {
      padding: theme.spacing.unit
    },
    current: {
      margin: theme.spacing.unit / 2,
      display: 'inline-block',
      width: theme.spacing.unit * 3 + 'px',
      height: theme.spacing.unit * 3 + 'px',
      lineHeight: theme.spacing.unit * 3 + 'px',
      textAlign: 'center',
      borderRadius: '50%',
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      cursor: 'default'
    },
    otherMonth: {
      color: theme.palette.text.disabled
    }
  };
};

var CellBase$4 = function CellBase(_ref) {
  var _classNames;

  var classes = _ref.classes,
      className = _ref.className,
      date = _ref.date,
      restProps = objectWithoutProperties(_ref, ['classes', 'className', 'date']);
  return React.createElement(
    TableCell,
    _extends({
      tabIndex: 0,
      className: classNames(classes.cell, className)
    }, restProps),
    React.createElement(
      'div',
      {
        className: classNames((_classNames = {}, defineProperty(_classNames, classes.text, !date.isCurrent), defineProperty(_classNames, classes.current, date.isCurrent), defineProperty(_classNames, classes.otherMonth, date.isOtherMonth), _classNames))
      },
      moment(date.value).format('D')
    )
  );
};

process.env.NODE_ENV !== "production" ? CellBase$4.propTypes = {
  classes: PropTypes.object.isRequired,
  date: PropTypes.object,
  className: PropTypes.string
} : void 0;

CellBase$4.defaultProps = {
  date: undefined,
  className: undefined
};

var Cell$4 = styles.withStyles(styles$12, { name: 'Cell' })(CellBase$4);

var MonthView$1 = function (_React$PureComponent) {
  inherits(MonthView$$1, _React$PureComponent);

  function MonthView$$1() {
    classCallCheck(this, MonthView$$1);
    return possibleConstructorReturn(this, (MonthView$$1.__proto__ || Object.getPrototypeOf(MonthView$$1)).apply(this, arguments));
  }

  createClass(MonthView$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactScheduler.MonthView, _extends({
        layoutComponent: MonthLayout,

        dayPanelLayoutComponent: Layout$3,
        dayPanelCellComponent: Cell$3,
        dayPanelRowComponent: Row$1,

        dateTableLayoutComponent: Layout$4,
        dateTableCellComponent: Cell$4,
        dateTableRowComponent: Row$1
      }, this.props));
    }
  }]);
  return MonthView$$1;
}(React.PureComponent);

MonthView$1.DayPanelLayout = Layout$3;
MonthView$1.DayPanelCell = Cell$3;
MonthView$1.DayPanelRow = Row$1;

MonthView$1.DateTableLayout = Layout$4;
MonthView$1.DateTableCell = Cell$4;
MonthView$1.DateTableRow = Row$1;

var styles$13 = {
  container: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0
  }
};

var ContainerBase = function ContainerBase(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['classes', 'className', 'children']);
  return React.createElement(
    'div',
    _extends({
      className: classNames(classes.container, className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? ContainerBase.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
} : void 0;

ContainerBase.defaultProps = {
  className: undefined
};

var Container = styles.withStyles(styles$13, { name: 'Container' })(ContainerBase);

var styles$15 = function styles$$1(_ref) {
  var palette = _ref.palette,
      typography = _ref.typography,
      spacing = _ref.spacing;
  return {
    appointment: _extends({
      overflow: 'hidden',
      backgroundColor: palette.primary[300],
      boxSizing: 'border-box',
      borderRight: '1px solid ' + palette.background.paper,
      borderBottom: '1px solid ' + palette.background.paper
    }, typography.caption, {
      '&:hover': {
        backgroundColor: palette.primary[400]
      },
      '&:focus': {
        backgroundColor: palette.primary[100],
        outline: 0
      }
    }),
    content: {
      color: palette.background.default,
      padding: spacing.unit / 2,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  };
};

var AppointmentBase = function AppointmentBase(_ref2) {
  var classes = _ref2.classes,
      className = _ref2.className,
      style = _ref2.style,
      children = _ref2.children,
      restProps = objectWithoutProperties(_ref2, ['classes', 'className', 'style', 'children']);
  return React.createElement(
    'div',
    _extends({
      className: classNames(classes.appointment, className),
      style: style
    }, restProps),
    React.createElement(
      'div',
      { className: classes.content },
      children
    )
  );
};

process.env.NODE_ENV !== "production" ? AppointmentBase.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

AppointmentBase.defaultProps = {
  className: undefined
};

var Appointment$1 = styles.withStyles(styles$15, { name: 'Appointment' })(AppointmentBase);

var styles$14 = {
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
};

var HorizontalAppointmentBase = function HorizontalAppointmentBase(_ref) {
  var classes = _ref.classes,
      getTitle = _ref.getTitle,
      getStartDate = _ref.getStartDate,
      getEndDate = _ref.getEndDate,
      appointment = _ref.appointment,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['classes', 'getTitle', 'getStartDate', 'getEndDate', 'appointment', 'children']);
  return React.createElement(
    Appointment$1,
    restProps,
    children || React.createElement(
      'div',
      { className: classes.title },
      getTitle(appointment)
    )
  );
};

process.env.NODE_ENV !== "production" ? HorizontalAppointmentBase.propTypes = {
  classes: PropTypes.object.isRequired,
  appointment: PropTypes.object.isRequired,
  children: PropTypes.node,
  getTitle: PropTypes.func,
  getStartDate: PropTypes.func,
  getEndDate: PropTypes.func
} : void 0;

HorizontalAppointmentBase.defaultProps = {
  children: undefined,
  getStartDate: function getStartDate() {},
  getEndDate: function getEndDate() {},
  getTitle: function getTitle() {}
};

var HorizontalAppointment = styles.withStyles(styles$14, { name: 'HorizontalAppointment' })(HorizontalAppointmentBase);

var styles$16 = {
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  textContainer: {
    whiteSpace: 'pre',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  time: {
    display: 'inline-block',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
};

var VerticalAppointmentBase = function VerticalAppointmentBase(_ref) {
  var classes = _ref.classes,
      getTitle = _ref.getTitle,
      getStartDate = _ref.getStartDate,
      getEndDate = _ref.getEndDate,
      appointment = _ref.appointment,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['classes', 'getTitle', 'getStartDate', 'getEndDate', 'appointment', 'children']);
  return React.createElement(
    Appointment$1,
    restProps,
    children || React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'div',
        { className: classes.title },
        getTitle(appointment)
      ),
      React.createElement(
        'div',
        { className: classes.textContainer },
        React.createElement(
          'div',
          { className: classes.time },
          moment(getStartDate(appointment)).format('h:mm A')
        ),
        React.createElement(
          'div',
          { className: classes.time },
          ' - '
        ),
        React.createElement(
          'div',
          { className: classes.time },
          moment(getEndDate(appointment)).format('h:mm A')
        )
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? VerticalAppointmentBase.propTypes = {
  classes: PropTypes.object.isRequired,
  appointment: PropTypes.object.isRequired,
  getTitle: PropTypes.func,
  getStartDate: PropTypes.func,
  getEndDate: PropTypes.func,
  children: PropTypes.node
} : void 0;

VerticalAppointmentBase.defaultProps = {
  children: undefined,
  getStartDate: function getStartDate() {},
  getEndDate: function getEndDate() {},
  getTitle: function getTitle() {}
};

var VerticalAppointment = styles.withStyles(styles$16, { name: 'VerticalAppointment' })(VerticalAppointmentBase);

var Appointment = function Appointment(_ref) {
  var type = _ref.type,
      restProps = objectWithoutProperties(_ref, ['type']);
  return type === dxSchedulerCore.HORIZONTAL_APPOINTMENT_TYPE ? React.createElement(HorizontalAppointment, restProps) : React.createElement(VerticalAppointment, restProps);
};

process.env.NODE_ENV !== "production" ? Appointment.propTypes = {
  type: PropTypes.oneOf([dxSchedulerCore.HORIZONTAL_APPOINTMENT_TYPE, dxSchedulerCore.VERTICAL_APPOINTMENT_TYPE]).isRequired
} : void 0;

var Appointments$1 = function (_React$PureComponent) {
  inherits(Appointments$$1, _React$PureComponent);

  function Appointments$$1() {
    classCallCheck(this, Appointments$$1);
    return possibleConstructorReturn(this, (Appointments$$1.__proto__ || Object.getPrototypeOf(Appointments$$1)).apply(this, arguments));
  }

  createClass(Appointments$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactScheduler.Appointments, _extends({
        appointmentComponent: Appointment,
        containerComponent: Container
      }, this.props));
    }
  }]);
  return Appointments$$1;
}(React.PureComponent);

Appointments$1.Appointment = Appointment;

var styles$17 = function styles$$1(theme) {
  return {
    toolbar: {
      borderBottom: getBorder(theme)
    }
  };
};

var ToolbarBase = function ToolbarBase(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['children', 'classes', 'className']);
  return React.createElement(
    ToolbarMUI,
    _extends({
      className: classNames(classes.toolbar, className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? ToolbarBase.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

ToolbarBase.defaultProps = {
  className: undefined
};

var Toolbar$2 = styles.withStyles(styles$17, { name: 'Toolbar' })(ToolbarBase);

var styles$18 = {
  flexibleSpace: {
    flex: '0 0 0',
    marginLeft: 'auto'
  }
};

var FlexibleSpaceBase = function FlexibleSpaceBase(_ref) {
  var classes = _ref.classes;
  return React.createElement('div', { className: classes.flexibleSpace });
};

process.env.NODE_ENV !== "production" ? FlexibleSpaceBase.propTypes = {
  classes: PropTypes.object.isRequired
} : void 0;

var FlexibleSpace = styles.withStyles(styles$18, { name: 'FlexibleSpace' })(FlexibleSpaceBase);

var Toolbar$1 = function (_React$PureComponent) {
  inherits(Toolbar$$1, _React$PureComponent);

  function Toolbar$$1() {
    classCallCheck(this, Toolbar$$1);
    return possibleConstructorReturn(this, (Toolbar$$1.__proto__ || Object.getPrototypeOf(Toolbar$$1)).apply(this, arguments));
  }

  createClass(Toolbar$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactScheduler.Toolbar, _extends({
        rootComponent: Toolbar$2,
        flexibleSpaceComponent: FlexibleSpace
      }, this.props));
    }
  }]);
  return Toolbar$$1;
}(React.PureComponent);

Toolbar$1.Root = Toolbar$2;

var Root$1 = function Root(_ref) {
  var NavigationButton = _ref.navigationButtonComponent,
      ToggleButton = _ref.toggleButtonComponent,
      navigatorTitle = _ref.navigatorTitle,
      targetRef = _ref.targetRef,
      onToggle = _ref.onToggle,
      onNavigate = _ref.onNavigate,
      restProps = objectWithoutProperties(_ref, ['navigationButtonComponent', 'toggleButtonComponent', 'navigatorTitle', 'targetRef', 'onToggle', 'onNavigate']);
  return React.createElement(
    'div',
    _extends({
      ref: targetRef
    }, restProps),
    React.createElement(NavigationButton, {
      back: true,
      onClick: function onClick() {
        onNavigate({ back: true });
      }
    }),
    React.createElement(ToggleButton, {
      onToggle: onToggle,
      title: navigatorTitle
    }),
    React.createElement(NavigationButton, {
      onClick: function onClick() {
        onNavigate({ back: false });
      }
    })
  );
};

process.env.NODE_ENV !== "production" ? Root$1.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
  targetRef: PropTypes.func.isRequired,
  navigationButtonComponent: PropTypes.func.isRequired,
  toggleButtonComponent: PropTypes.func.isRequired,
  navigatorTitle: PropTypes.string
} : void 0;

Root$1.defaultProps = {
  navigatorTitle: ''
};

var Overlay = function Overlay(_ref) {
  var visible = _ref.visible,
      onHide = _ref.onHide,
      children = _ref.children,
      target = _ref.target,
      restProps = objectWithoutProperties(_ref, ['visible', 'onHide', 'children', 'target']);
  return React.createElement(
    Popover,
    _extends({
      open: visible,
      anchorEl: target,
      onClose: onHide,
      anchorOrigin: { vertical: 'top', horizontal: 'right' },
      transformOrigin: { vertical: 'top', horizontal: 'right' }
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? Overlay.propTypes = {
  onHide: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
  target: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
} : void 0;

Overlay.defaultProps = {
  visible: false,
  target: null
};

var styles$19 = {
  button: {
    textTransform: 'none'
  }
};

var ToggleButtonBase = function ToggleButtonBase(_ref) {
  var title = _ref.title,
      classes = _ref.classes,
      onToggle = _ref.onToggle,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['title', 'classes', 'onToggle', 'className']);
  return React.createElement(
    Button,
    _extends({
      onClick: onToggle,
      className: classNames(defineProperty({}, classes.button, true), className)
    }, restProps),
    title
  );
};

process.env.NODE_ENV !== "production" ? ToggleButtonBase.propTypes = {
  onToggle: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  className: PropTypes.string
} : void 0;

ToggleButtonBase.defaultProps = {
  title: '',
  className: undefined
};

var ToggleButton = styles.withStyles(styles$19, { name: 'ToggleButton' })(ToggleButtonBase);

var NavigationButton = function NavigationButton(_ref) {
  var back = _ref.back,
      onClick = _ref.onClick,
      restProps = objectWithoutProperties(_ref, ['back', 'onClick']);
  return React.createElement(
    IconButton,
    _extends({
      color: 'inherit',
      onClick: onClick
    }, restProps),
    back ? React.createElement(ChevronLeft, null) : React.createElement(ChevronRight, null)
  );
};

process.env.NODE_ENV !== "production" ? NavigationButton.propTypes = {
  back: PropTypes.bool,
  onClick: PropTypes.func
} : void 0;

NavigationButton.defaultProps = {
  back: false,
  onClick: function onClick() {}
};

var styles$20 = {
  table: {
    width: '320px',
    tableLayout: 'fixed'
  }
};

var TableBase = function TableBase(_ref) {
  var Row = _ref.rowComponent,
      Cell = _ref.cellComponent,
      HeaderRow = _ref.headerRowComponent,
      HeaderCell = _ref.headerCellComponent,
      classes = _ref.classes,
      className = _ref.className,
      cells = _ref.cells,
      headerCells = _ref.headerCells,
      onCellClick = _ref.onCellClick,
      restProps = objectWithoutProperties(_ref, ['rowComponent', 'cellComponent', 'headerRowComponent', 'headerCellComponent', 'classes', 'className', 'cells', 'headerCells', 'onCellClick']);
  return React.createElement(
    Table,
    _extends({
      className: classNames(classes.table, className)
    }, restProps),
    React.createElement(
      TableHead,
      null,
      React.createElement(
        HeaderRow,
        null,
        headerCells.map(function (cell) {
          var key = moment(cell).format('ddd');
          return React.createElement(
            HeaderCell,
            {
              key: key
            },
            key
          );
        })
      )
    ),
    React.createElement(
      TableBody,
      null,
      cells.map(function (row) {
        return React.createElement(
          Row,
          {
            key: row[0].value.toString()
          },
          row.map(function (_ref2) {
            var value = _ref2.value,
                isOtherMonth = _ref2.isOtherMonth,
                isCurrent = _ref2.isCurrent;
            return React.createElement(
              Cell,
              {
                key: value.toString(),
                otherMonth: isOtherMonth,
                current: isCurrent,
                onClick: function onClick() {
                  onCellClick({ nextDate: value });
                }
              },
              moment(value).format('D')
            );
          })
        );
      })
    )
  );
};

process.env.NODE_ENV !== "production" ? TableBase.propTypes = {
  rowComponent: PropTypes.func.isRequired,
  cellComponent: PropTypes.func.isRequired,
  headerRowComponent: PropTypes.func.isRequired,
  headerCellComponent: PropTypes.func.isRequired,
  cells: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  headerCells: PropTypes.array,
  className: PropTypes.string,
  onCellClick: PropTypes.func
} : void 0;

TableBase.defaultProps = {
  className: undefined,
  headerCells: [],
  onCellClick: function onCellClick() {}
};

var Table$1 = styles.withStyles(styles$20, { name: 'Table' })(TableBase);

var Root$2 = function (_React$PureComponent) {
  inherits(Root, _React$PureComponent);

  function Root(props) {
    classCallCheck(this, Root);

    var _this = possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, props));

    var currentDate = _this.props.currentDate;

    _this.state = {
      currentDate: currentDate
    };
    _this.onNavigate = _this.onNavigate.bind(_this);
    _this.onCellClick = _this.onCellClick.bind(_this);
    return _this;
  }

  createClass(Root, [{
    key: 'onNavigate',
    value: function onNavigate(_ref) {
      var back = _ref.back;
      var currentDateState = this.state.currentDate;

      var nextDate = moment(currentDateState)[back ? 'subtract' : 'add'](1, 'month');
      this.setState({ currentDate: nextDate.toDate() });
    }
  }, {
    key: 'onCellClick',
    value: function onCellClick(_ref2) {
      var nextDate = _ref2.nextDate;
      var onNavigate = this.props.onNavigate;

      onNavigate({ nextDate: nextDate });
      this.setState({ currentDate: nextDate });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentDate = _props.currentDate,
          firstDayOfWeek = _props.firstDayOfWeek,
          getHeaderCells = _props.getHeaderCells,
          getCells = _props.getCells,
          Title = _props.titleComponent,
          NavigationButton = _props.navigationButtonComponent,
          Navigator = _props.navigatorComponent,
          Row = _props.rowComponent,
          Cell = _props.cellComponent,
          HeaderRow = _props.headerRowComponent,
          HeaderCell = _props.headerCellComponent,
          onNavigate = _props.onNavigate,
          restProps = objectWithoutProperties(_props, ['currentDate', 'firstDayOfWeek', 'getHeaderCells', 'getCells', 'titleComponent', 'navigationButtonComponent', 'navigatorComponent', 'rowComponent', 'cellComponent', 'headerRowComponent', 'headerCellComponent', 'onNavigate']);
      var currentDateState = this.state.currentDate;

      return React.createElement(
        'div',
        restProps,
        React.createElement(Navigator, {
          currentDate: currentDateState,
          titleComponent: Title,
          navigationButtonComponent: NavigationButton,
          onNavigate: this.onNavigate
        }),
        React.createElement(Table$1, {
          headerCells: getHeaderCells(currentDateState, firstDayOfWeek),
          cells: getCells(currentDateState, firstDayOfWeek),
          rowComponent: Row,
          cellComponent: Cell,
          headerRowComponent: HeaderRow,
          headerCellComponent: HeaderCell,
          onCellClick: this.onCellClick
        })
      );
    }
  }]);
  return Root;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? Root$2.propTypes = {
  titleComponent: PropTypes.func.isRequired,
  navigationButtonComponent: PropTypes.func.isRequired,
  getHeaderCells: PropTypes.func.isRequired,
  getCells: PropTypes.func.isRequired,
  rowComponent: PropTypes.func.isRequired,
  cellComponent: PropTypes.func.isRequired,
  headerRowComponent: PropTypes.func.isRequired,
  headerCellComponent: PropTypes.func.isRequired,
  navigatorComponent: PropTypes.func.isRequired,
  currentDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  firstDayOfWeek: PropTypes.number.isRequired,
  onNavigate: PropTypes.func
} : void 0;

Root$2.defaultProps = {
  onNavigate: function onNavigate() {}
};

var styles$21 = function styles$$1(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return {
    cell: {
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      textAlign: 'center',
      verticalAlign: 'middle',
      '&:last-child': {
        padding: 0
      }
    },
    otherMonth: {
      color: palette.text.disabled
    },
    current: {
      display: 'inline-block',
      width: spacing.unit * 4 + 'px',
      lineHeight: spacing.unit * 4 + 'px',
      borderRadius: '50%',
      background: palette.primary.main,
      color: palette.primary.contrastText,
      cursor: 'default'
    }
  };
};

var CellBase$5 = function CellBase(_ref2) {
  var _classNames;

  var otherMonth = _ref2.otherMonth,
      current = _ref2.current,
      classes = _ref2.classes,
      children = _ref2.children,
      className = _ref2.className,
      restProps = objectWithoutProperties(_ref2, ['otherMonth', 'current', 'classes', 'children', 'className']);
  return React.createElement(
    TableCell,
    _extends({
      className: classNames((_classNames = {}, defineProperty(_classNames, classes.cell, true), defineProperty(_classNames, classes.otherMonth, otherMonth), _classNames), className)
    }, restProps),
    React.createElement(
      'span',
      {
        className: classNames(defineProperty({}, classes.current, current))
      },
      children
    )
  );
};

process.env.NODE_ENV !== "production" ? CellBase$5.propTypes = {
  children: PropTypes.node,
  otherMonth: PropTypes.bool,
  current: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

CellBase$5.defaultProps = {
  children: undefined,
  otherMonth: false,
  current: false,
  className: undefined
};

var Cell$5 = styles.withStyles(styles$21, { name: 'Cell' })(CellBase$5);

var styles$22 = {
  cell: {
    border: 'none',
    padding: 0,
    textAlign: 'center',
    verticalAlign: 'middle',
    '&:last-child': {
      padding: 0
    }
  }
};

var HeaderCellBase = function HeaderCellBase(_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['classes', 'children', 'className']);
  return React.createElement(
    TableCell,
    _extends({
      className: classNames(defineProperty({}, classes.cell, true), className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? HeaderCellBase.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

HeaderCellBase.defaultProps = {
  children: undefined,
  className: undefined
};

var HeaderCell = styles.withStyles(styles$22, { name: 'HeaderCell' })(HeaderCellBase);

var Row$2 = function Row(_ref) {
  var children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['children']);
  return React.createElement(
    TableRow,
    restProps,
    children
  );
};

process.env.NODE_ENV !== "production" ? Row$2.propTypes = {
  children: PropTypes.node.isRequired
} : void 0;

var styles$23 = {
  navigator: {
    paddingLeft: 0,
    paddingRight: 0
  }
};

var NavigatorBase = function NavigatorBase(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      currentDate = _ref.currentDate,
      Title = _ref.titleComponent,
      NavigationButton = _ref.navigationButtonComponent,
      onNavigate = _ref.onNavigate,
      restProps = objectWithoutProperties(_ref, ['classes', 'className', 'currentDate', 'titleComponent', 'navigationButtonComponent', 'onNavigate']);
  return React.createElement(
    ToolbarMUI,
    _extends({
      className: classNames(classes.navigator, className)
    }, restProps),
    React.createElement(NavigationButton, {
      back: true,
      onClick: function onClick() {
        onNavigate({ back: true });
      }
    }),
    React.createElement(Title, { currentDate: currentDate }),
    React.createElement(NavigationButton, {
      onClick: function onClick() {
        onNavigate({ back: false });
      }
    })
  );
};

process.env.NODE_ENV !== "production" ? NavigatorBase.propTypes = {
  classes: PropTypes.object.isRequired,
  titleComponent: PropTypes.func.isRequired,
  navigationButtonComponent: PropTypes.func.isRequired,
  currentDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  className: PropTypes.string,
  onNavigate: PropTypes.func
} : void 0;

NavigatorBase.defaultProps = {
  className: undefined,
  onNavigate: function onNavigate() {}
};

var Navigator = styles.withStyles(styles$23, { name: 'Navigator' })(NavigatorBase);

var styles$24 = {
  title: {
    flex: 1,
    textAlign: 'center'
  }
};

var TitleBase = function TitleBase(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      currentDate = _ref.currentDate,
      restProps = objectWithoutProperties(_ref, ['classes', 'className', 'currentDate']);
  return React.createElement(
    Typography,
    _extends({
      variant: 'title',
      color: 'inherit',
      className: classNames(defineProperty({}, classes.title, true), className)
    }, restProps),
    moment(currentDate).format('MMMM YYYY')
  );
};

process.env.NODE_ENV !== "production" ? TitleBase.propTypes = {
  classes: PropTypes.object.isRequired,
  currentDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  className: PropTypes.string
} : void 0;

TitleBase.defaultProps = {
  className: undefined
};

var Title = styles.withStyles(styles$24, { name: 'Title' })(TitleBase);

var DateNavigator$1 = function (_React$PureComponent) {
  inherits(DateNavigator$$1, _React$PureComponent);

  function DateNavigator$$1() {
    classCallCheck(this, DateNavigator$$1);
    return possibleConstructorReturn(this, (DateNavigator$$1.__proto__ || Object.getPrototypeOf(DateNavigator$$1)).apply(this, arguments));
  }

  createClass(DateNavigator$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactScheduler.DateNavigator, _extends({
        rootComponent: Root$1,
        overlayComponent: Overlay,
        toggleButtonComponent: ToggleButton,
        navigationButtonComponent: NavigationButton,
        calendarComponent: Root$2,
        calendarNavigatorComponent: Navigator,
        calendarCellComponent: Cell$5,
        calendarRowComponent: Row$2,
        calendarHeaderRowComponent: Row$2,
        calendarHeaderCellComponent: HeaderCell,
        calendarTitleComponent: Title,
        calendarNavigationButtonComponent: NavigationButton
      }, this.props));
    }
  }]);
  return DateNavigator$$1;
}(React.PureComponent);

DateNavigator$1.Root = Root$1;
DateNavigator$1.ToggleButton = ToggleButton;
DateNavigator$1.Overlay = Overlay;
DateNavigator$1.NavigationButton = NavigationButton;

DateNavigator$1.Calendar = Root$2;
DateNavigator$1.CalendarNavigator = Navigator;
DateNavigator$1.CalendarCell = Cell$5;
DateNavigator$1.CalendarRow = Row$2;
DateNavigator$1.CalendarHeaderCell = HeaderCell;
DateNavigator$1.CalendarHeaderRow = Row$2;
DateNavigator$1.CalendarTitle = Title;
DateNavigator$1.CalendarNavigationButton = NavigationButton;

exports.Scheduler = Scheduler$1;
exports.WeekView = WeekView$1;
exports.MonthView = MonthView$1;
exports.Appointments = Appointments$1;
exports.Toolbar = Toolbar$1;
exports.DateNavigator = DateNavigator$1;
//# sourceMappingURL=dx-react-scheduler-material-ui.cjs.js.map
