/**
 * Bundle of @devexpress/dx-react-scheduler-material-ui
 * Generated: 2018-09-04
 * Version: 1.7.2
 * License: https://js.devexpress.com/Licensing
 */

import { Fragment, PureComponent, createElement } from 'react';
import { array, arrayOf, bool, func, instanceOf, node, number, object, oneOf, oneOfType, string } from 'prop-types';
import { Appointments, DateNavigator, MonthView, Scheduler, Toolbar, WeekView } from '@devexpress/dx-react-scheduler';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { darken, fade, lighten } from '@material-ui/core/styles/colorManipulator';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import classNames from 'classnames';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import RootRef from '@material-ui/core/RootRef';
import { HORIZONTAL_APPOINTMENT_TYPE, VERTICAL_APPOINTMENT_TYPE } from '@devexpress/dx-scheduler-core';
import ToolbarMUI from '@material-ui/core/Toolbar';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import TableHead from '@material-ui/core/TableHead';
import Typography from '@material-ui/core/Typography';

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
  return createElement(
    'div',
    restProps,
    children
  );
};

process.env.NODE_ENV !== "production" ? Root.propTypes = {
  children: node
} : void 0;

Root.defaultProps = {
  children: undefined
};

var Scheduler$1 = function Scheduler$$1(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);
  return createElement(
    Scheduler,
    _extends({
      rootComponent: Root
    }, props),
    children
  );
};

Scheduler$1.Root = Root;

process.env.NODE_ENV !== "production" ? Scheduler$1.propTypes = {
  children: node.isRequired
} : void 0;

var getBorder = function getBorder(theme) {
  return '1px solid ' + (theme.palette.type === 'light' ? lighten(fade(theme.palette.divider, 1), 0.88) : darken(fade(theme.palette.divider, 1), 0.8));
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


      return createElement(
        Grid,
        {
          container: true,
          className: classes.container
        },
        createElement(
          Grid,
          {
            container: true,
            direction: 'row',
            className: classes.stickyHeader
          },
          createElement(Grid, { item: true, xs: 1, className: classes.emptySpace }),
          createElement(
            Grid,
            { item: true, xs: 11 },
            createElement(Navbar, null)
          )
        ),
        createElement(
          Grid,
          { container: true, direction: 'row' },
          createElement(
            Grid,
            { item: true, xs: 1 },
            createElement(Sidebar, null)
          ),
          createElement(
            Grid,
            { item: true, xs: 11, className: classes.main },
            createElement(Main, null)
          )
        )
      );
    }
  }]);
  return WeekLayoutBase;
}(PureComponent);

process.env.NODE_ENV !== "production" ? WeekLayoutBase.propTypes = {
  sidebarComponent: func.isRequired,
  navbarComponent: func.isRequired,
  mainComponent: func.isRequired,
  classes: object.isRequired
} : void 0;

var WeekLayout = withStyles(styles$1, { name: 'WeekLayout' })(WeekLayoutBase);

var Row = function Row(_ref) {
  var children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['children']);
  return createElement(
    TableRow,
    restProps,
    children
  );
};

process.env.NODE_ENV !== "production" ? Row.propTypes = {
  children: node
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
  return createElement(
    Table,
    _extends({}, restProps, { className: classNames(classes.table, className) }),
    createElement(
      TableBody,
      null,
      timeScale.map(function (time, index) {
        var hour = moment(time.end).hour();
        var minute = moment(time.end).minute();
        return createElement(
          Row,
          { key: time.start },
          index % 2 ? null : createElement(Cell, {
            rowSpan: '2',
            time: moment().hour(hour).minute(minute).toDate()
          })
        );
      })
    )
  );
};

process.env.NODE_ENV !== "production" ? LayoutBase.propTypes = {
  classes: object.isRequired,
  cellComponent: func,
  rowComponent: func,
  timeScale: array,
  className: string
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

var Layout = withStyles(styles$2, { name: 'Layout' })(LayoutBase);

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
  return createElement(
    TableCell,
    _extends({
      numeric: true,
      className: classNames(classes.cell, className)
    }, restProps),
    createElement(
      'span',
      { className: classes.text },
      currentTime.format('h:mm A')
    )
  );
};

process.env.NODE_ENV !== "production" ? CellBase.propTypes = {
  time: instanceOf(Date).isRequired,
  classes: object.isRequired,
  className: string
} : void 0;

CellBase.defaultProps = {
  className: undefined
};

var Cell = withStyles(styles$3, { name: 'Cell' })(CellBase);

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
  return createElement(
    Table,
    _extends({
      className: classNames(classes.table, className)
    }, restProps),
    createElement(
      TableBody,
      null,
      createElement(
        Row,
        null,
        dayScale.map(function (date) {
          return createElement(Cell, {
            key: date,
            date: date
          });
        })
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? LayoutBase$1.propTypes = {
  classes: object.isRequired,
  dayScale: arrayOf(instanceOf(Date)),
  cellComponent: func,
  rowComponent: func,
  className: string
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

var Layout$1 = withStyles(styles$4, { name: 'Layout' })(LayoutBase$1);

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
  return createElement(
    TableCell,
    _extends({
      className: classNames(classes.cell, className)
    }, restProps),
    createElement(
      'p',
      { className: classes.dayOfWeek },
      currentDate.format('ddd')
    ),
    createElement(
      'span',
      { className: classes.dayOfMonth },
      currentDate.format('D')
    )
  );
};

process.env.NODE_ENV !== "production" ? CellBase$1.propTypes = {
  classes: object.isRequired,
  date: instanceOf(Date).isRequired,
  className: string
} : void 0;

CellBase$1.defaultProps = {
  className: undefined
};

var Cell$1 = withStyles(styles$5, { name: 'Cell' })(CellBase$1);

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
  return createElement(
    RootRef,
    { rootRef: dateTableRef },
    createElement(
      Table,
      _extends({
        className: classNames(classes.table, className)
      }, restProps),
      createElement(
        TableBody,
        null,
        timeScale.map(function (time, index) {
          return createElement(
            Row,
            { key: index.toString() },
            dayScale.map(function (date) {
              return createElement(Cell, { key: date, date: date, time: time });
            })
          );
        })
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? LayoutBase$2.propTypes = {
  dateTableRef: func.isRequired,
  classes: object.isRequired,
  timeScale: array,
  dayScale: arrayOf(instanceOf(Date)),
  cellComponent: func,
  rowComponent: func,
  className: string
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

var Layout$2 = withStyles(styles$6, { name: 'Layout' })(LayoutBase$2);

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
  return createElement(
    TableCell,
    _extends({
      tabIndex: 0,
      className: classNames(classes.cell, className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? CellBase$2.propTypes = {
  classes: object.isRequired,
  time: object.isRequired,
  date: instanceOf(Date),
  children: node,
  className: string
} : void 0;

CellBase$2.defaultProps = {
  children: null,
  date: undefined,
  className: undefined
};

var Cell$2 = withStyles(styles$7, { name: 'Cell' })(CellBase$2);

var WeekView$1 = function (_React$PureComponent) {
  inherits(WeekView$$1, _React$PureComponent);

  function WeekView$$1() {
    classCallCheck(this, WeekView$$1);
    return possibleConstructorReturn(this, (WeekView$$1.__proto__ || Object.getPrototypeOf(WeekView$$1)).apply(this, arguments));
  }

  createClass(WeekView$$1, [{
    key: 'render',
    value: function render() {
      return createElement(WeekView, _extends({
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
}(PureComponent);

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


      return createElement(
        Grid,
        {
          className: classes.container,
          container: true,
          direction: 'column',
          wrap: 'nowrap'
        },
        createElement(
          Grid,
          {
            item: true,
            className: classes.stickyHeader
          },
          createElement(Navbar, null)
        ),
        createElement(
          Grid,
          {
            item: true,
            className: classes.main
          },
          createElement(Main, null)
        )
      );
    }
  }]);
  return MonthLayoutBase;
}(PureComponent);

process.env.NODE_ENV !== "production" ? MonthLayoutBase.propTypes = {
  navbarComponent: func.isRequired,
  mainComponent: func.isRequired,
  classes: object.isRequired
} : void 0;

var MonthLayout = withStyles(styles$8, { name: 'MonthLayout' })(MonthLayoutBase);

var Row$1 = function Row(_ref) {
  var children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['children']);
  return createElement(
    TableRow,
    restProps,
    children
  );
};

process.env.NODE_ENV !== "production" ? Row$1.propTypes = {
  children: node.isRequired
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
  return createElement(
    Table,
    _extends({
      className: classNames(classes.table, className)
    }, restProps),
    createElement(
      TableBody,
      null,
      createElement(
        Row,
        null,
        dayScale.map(function (date, index) {
          return createElement(Cell, {
            key: index.toString(),
            date: date
          });
        })
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? LayoutBase$3.propTypes = {
  classes: object.isRequired,
  dayScale: arrayOf(instanceOf(Date)),
  cellComponent: func,
  rowComponent: func,
  className: string
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

var Layout$3 = withStyles(styles$9, { name: 'Layout' })(LayoutBase$3);

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
  return createElement(
    TableCell,
    _extends({
      className: classNames(classes.cell, className)
    }, restProps),
    createElement(
      'div',
      { className: classes.dayOfWeek },
      currentDate.format('ddd')
    )
  );
};

process.env.NODE_ENV !== "production" ? CellBase$3.propTypes = {
  classes: object.isRequired,
  date: instanceOf(Date).isRequired,
  className: string
} : void 0;

CellBase$3.defaultProps = {
  className: undefined
};

var Cell$3 = withStyles(styles$10, { name: 'Cell' })(CellBase$3);

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
  return createElement(
    RootRef,
    { rootRef: dateTableRef },
    createElement(
      Table,
      _extends({
        className: classNames(classes.table, className)
      }, restProps),
      createElement(
        TableBody,
        null,
        monthCells.map(function (row) {
          return createElement(
            Row,
            { key: 'date_table_row_' + row[0].value.toString() },
            row.map(function (date) {
              return createElement(Cell, { key: date.value, date: date });
            })
          );
        })
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? LayoutBase$4.propTypes = {
  monthCells: array.isRequired,
  dateTableRef: func.isRequired,
  classes: object.isRequired,
  cellComponent: func,
  rowComponent: func,
  className: string
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

var Layout$4 = withStyles(styles$11, { name: 'Layout' })(LayoutBase$4);

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
  return createElement(
    TableCell,
    _extends({
      tabIndex: 0,
      className: classNames(classes.cell, className)
    }, restProps),
    createElement(
      'div',
      {
        className: classNames((_classNames = {}, defineProperty(_classNames, classes.text, !date.isCurrent), defineProperty(_classNames, classes.current, date.isCurrent), defineProperty(_classNames, classes.otherMonth, date.isOtherMonth), _classNames))
      },
      moment(date.value).format('D')
    )
  );
};

process.env.NODE_ENV !== "production" ? CellBase$4.propTypes = {
  classes: object.isRequired,
  date: object,
  className: string
} : void 0;

CellBase$4.defaultProps = {
  date: undefined,
  className: undefined
};

var Cell$4 = withStyles(styles$12, { name: 'Cell' })(CellBase$4);

var MonthView$1 = function (_React$PureComponent) {
  inherits(MonthView$$1, _React$PureComponent);

  function MonthView$$1() {
    classCallCheck(this, MonthView$$1);
    return possibleConstructorReturn(this, (MonthView$$1.__proto__ || Object.getPrototypeOf(MonthView$$1)).apply(this, arguments));
  }

  createClass(MonthView$$1, [{
    key: 'render',
    value: function render() {
      return createElement(MonthView, _extends({
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
}(PureComponent);

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
  return createElement(
    'div',
    _extends({
      className: classNames(classes.container, className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? ContainerBase.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  className: string
} : void 0;

ContainerBase.defaultProps = {
  className: undefined
};

var Container = withStyles(styles$13, { name: 'Container' })(ContainerBase);

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
  return createElement(
    'div',
    _extends({
      className: classNames(classes.appointment, className),
      style: style
    }, restProps),
    createElement(
      'div',
      { className: classes.content },
      children
    )
  );
};

process.env.NODE_ENV !== "production" ? AppointmentBase.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  style: object.isRequired,
  className: string
} : void 0;

AppointmentBase.defaultProps = {
  className: undefined
};

var Appointment$1 = withStyles(styles$15, { name: 'Appointment' })(AppointmentBase);

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
  return createElement(
    Appointment$1,
    restProps,
    children || createElement(
      'div',
      { className: classes.title },
      getTitle(appointment)
    )
  );
};

process.env.NODE_ENV !== "production" ? HorizontalAppointmentBase.propTypes = {
  classes: object.isRequired,
  appointment: object.isRequired,
  children: node,
  getTitle: func,
  getStartDate: func,
  getEndDate: func
} : void 0;

HorizontalAppointmentBase.defaultProps = {
  children: undefined,
  getStartDate: function getStartDate() {},
  getEndDate: function getEndDate() {},
  getTitle: function getTitle() {}
};

var HorizontalAppointment = withStyles(styles$14, { name: 'HorizontalAppointment' })(HorizontalAppointmentBase);

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
  return createElement(
    Appointment$1,
    restProps,
    children || createElement(
      Fragment,
      null,
      createElement(
        'div',
        { className: classes.title },
        getTitle(appointment)
      ),
      createElement(
        'div',
        { className: classes.textContainer },
        createElement(
          'div',
          { className: classes.time },
          moment(getStartDate(appointment)).format('h:mm A')
        ),
        createElement(
          'div',
          { className: classes.time },
          ' - '
        ),
        createElement(
          'div',
          { className: classes.time },
          moment(getEndDate(appointment)).format('h:mm A')
        )
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? VerticalAppointmentBase.propTypes = {
  classes: object.isRequired,
  appointment: object.isRequired,
  getTitle: func,
  getStartDate: func,
  getEndDate: func,
  children: node
} : void 0;

VerticalAppointmentBase.defaultProps = {
  children: undefined,
  getStartDate: function getStartDate() {},
  getEndDate: function getEndDate() {},
  getTitle: function getTitle() {}
};

var VerticalAppointment = withStyles(styles$16, { name: 'VerticalAppointment' })(VerticalAppointmentBase);

var Appointment = function Appointment(_ref) {
  var type = _ref.type,
      restProps = objectWithoutProperties(_ref, ['type']);
  return type === HORIZONTAL_APPOINTMENT_TYPE ? createElement(HorizontalAppointment, restProps) : createElement(VerticalAppointment, restProps);
};

process.env.NODE_ENV !== "production" ? Appointment.propTypes = {
  type: oneOf([HORIZONTAL_APPOINTMENT_TYPE, VERTICAL_APPOINTMENT_TYPE]).isRequired
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
      return createElement(Appointments, _extends({
        appointmentComponent: Appointment,
        containerComponent: Container
      }, this.props));
    }
  }]);
  return Appointments$$1;
}(PureComponent);

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
  return createElement(
    ToolbarMUI,
    _extends({
      className: classNames(classes.toolbar, className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? ToolbarBase.propTypes = {
  children: node.isRequired,
  classes: object.isRequired,
  className: string
} : void 0;

ToolbarBase.defaultProps = {
  className: undefined
};

var Toolbar$2 = withStyles(styles$17, { name: 'Toolbar' })(ToolbarBase);

var styles$18 = {
  flexibleSpace: {
    flex: '0 0 0',
    marginLeft: 'auto'
  }
};

var FlexibleSpaceBase = function FlexibleSpaceBase(_ref) {
  var classes = _ref.classes;
  return createElement('div', { className: classes.flexibleSpace });
};

process.env.NODE_ENV !== "production" ? FlexibleSpaceBase.propTypes = {
  classes: object.isRequired
} : void 0;

var FlexibleSpace = withStyles(styles$18, { name: 'FlexibleSpace' })(FlexibleSpaceBase);

var Toolbar$1 = function (_React$PureComponent) {
  inherits(Toolbar$$1, _React$PureComponent);

  function Toolbar$$1() {
    classCallCheck(this, Toolbar$$1);
    return possibleConstructorReturn(this, (Toolbar$$1.__proto__ || Object.getPrototypeOf(Toolbar$$1)).apply(this, arguments));
  }

  createClass(Toolbar$$1, [{
    key: 'render',
    value: function render() {
      return createElement(Toolbar, _extends({
        rootComponent: Toolbar$2,
        flexibleSpaceComponent: FlexibleSpace
      }, this.props));
    }
  }]);
  return Toolbar$$1;
}(PureComponent);

Toolbar$1.Root = Toolbar$2;

var Root$1 = function Root(_ref) {
  var NavigationButton = _ref.navigationButtonComponent,
      ToggleButton = _ref.toggleButtonComponent,
      navigatorTitle = _ref.navigatorTitle,
      targetRef = _ref.targetRef,
      onToggle = _ref.onToggle,
      onNavigate = _ref.onNavigate,
      restProps = objectWithoutProperties(_ref, ['navigationButtonComponent', 'toggleButtonComponent', 'navigatorTitle', 'targetRef', 'onToggle', 'onNavigate']);
  return createElement(
    'div',
    _extends({
      ref: targetRef
    }, restProps),
    createElement(NavigationButton, {
      back: true,
      onClick: function onClick() {
        onNavigate({ back: true });
      }
    }),
    createElement(ToggleButton, {
      onToggle: onToggle,
      title: navigatorTitle
    }),
    createElement(NavigationButton, {
      onClick: function onClick() {
        onNavigate({ back: false });
      }
    })
  );
};

process.env.NODE_ENV !== "production" ? Root$1.propTypes = {
  onToggle: func.isRequired,
  onNavigate: func.isRequired,
  targetRef: func.isRequired,
  navigationButtonComponent: func.isRequired,
  toggleButtonComponent: func.isRequired,
  navigatorTitle: string
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
  return createElement(
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
  onHide: func.isRequired,
  children: node.isRequired,
  visible: bool,
  target: oneOfType([object, func])
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
  return createElement(
    Button,
    _extends({
      onClick: onToggle,
      className: classNames(defineProperty({}, classes.button, true), className)
    }, restProps),
    title
  );
};

process.env.NODE_ENV !== "production" ? ToggleButtonBase.propTypes = {
  onToggle: func.isRequired,
  classes: object.isRequired,
  title: string,
  className: string
} : void 0;

ToggleButtonBase.defaultProps = {
  title: '',
  className: undefined
};

var ToggleButton = withStyles(styles$19, { name: 'ToggleButton' })(ToggleButtonBase);

var NavigationButton = function NavigationButton(_ref) {
  var back = _ref.back,
      onClick = _ref.onClick,
      restProps = objectWithoutProperties(_ref, ['back', 'onClick']);
  return createElement(
    IconButton,
    _extends({
      color: 'inherit',
      onClick: onClick
    }, restProps),
    back ? createElement(ChevronLeft, null) : createElement(ChevronRight, null)
  );
};

process.env.NODE_ENV !== "production" ? NavigationButton.propTypes = {
  back: bool,
  onClick: func
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
  return createElement(
    Table,
    _extends({
      className: classNames(classes.table, className)
    }, restProps),
    createElement(
      TableHead,
      null,
      createElement(
        HeaderRow,
        null,
        headerCells.map(function (cell) {
          var key = moment(cell).format('ddd');
          return createElement(
            HeaderCell,
            {
              key: key
            },
            key
          );
        })
      )
    ),
    createElement(
      TableBody,
      null,
      cells.map(function (row) {
        return createElement(
          Row,
          {
            key: row[0].value.toString()
          },
          row.map(function (_ref2) {
            var value = _ref2.value,
                isOtherMonth = _ref2.isOtherMonth,
                isCurrent = _ref2.isCurrent;
            return createElement(
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
  rowComponent: func.isRequired,
  cellComponent: func.isRequired,
  headerRowComponent: func.isRequired,
  headerCellComponent: func.isRequired,
  cells: array.isRequired,
  classes: object.isRequired,
  headerCells: array,
  className: string,
  onCellClick: func
} : void 0;

TableBase.defaultProps = {
  className: undefined,
  headerCells: [],
  onCellClick: function onCellClick() {}
};

var Table$1 = withStyles(styles$20, { name: 'Table' })(TableBase);

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

      return createElement(
        'div',
        restProps,
        createElement(Navigator, {
          currentDate: currentDateState,
          titleComponent: Title,
          navigationButtonComponent: NavigationButton,
          onNavigate: this.onNavigate
        }),
        createElement(Table$1, {
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
}(PureComponent);

process.env.NODE_ENV !== "production" ? Root$2.propTypes = {
  titleComponent: func.isRequired,
  navigationButtonComponent: func.isRequired,
  getHeaderCells: func.isRequired,
  getCells: func.isRequired,
  rowComponent: func.isRequired,
  cellComponent: func.isRequired,
  headerRowComponent: func.isRequired,
  headerCellComponent: func.isRequired,
  navigatorComponent: func.isRequired,
  currentDate: oneOfType([string, instanceOf(Date)]).isRequired,
  firstDayOfWeek: number.isRequired,
  onNavigate: func
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
  return createElement(
    TableCell,
    _extends({
      className: classNames((_classNames = {}, defineProperty(_classNames, classes.cell, true), defineProperty(_classNames, classes.otherMonth, otherMonth), _classNames), className)
    }, restProps),
    createElement(
      'span',
      {
        className: classNames(defineProperty({}, classes.current, current))
      },
      children
    )
  );
};

process.env.NODE_ENV !== "production" ? CellBase$5.propTypes = {
  children: node,
  otherMonth: bool,
  current: bool,
  classes: object.isRequired,
  className: string
} : void 0;

CellBase$5.defaultProps = {
  children: undefined,
  otherMonth: false,
  current: false,
  className: undefined
};

var Cell$5 = withStyles(styles$21, { name: 'Cell' })(CellBase$5);

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
  return createElement(
    TableCell,
    _extends({
      className: classNames(defineProperty({}, classes.cell, true), className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? HeaderCellBase.propTypes = {
  children: node,
  classes: object.isRequired,
  className: string
} : void 0;

HeaderCellBase.defaultProps = {
  children: undefined,
  className: undefined
};

var HeaderCell = withStyles(styles$22, { name: 'HeaderCell' })(HeaderCellBase);

var Row$2 = function Row(_ref) {
  var children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['children']);
  return createElement(
    TableRow,
    restProps,
    children
  );
};

process.env.NODE_ENV !== "production" ? Row$2.propTypes = {
  children: node.isRequired
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
  return createElement(
    ToolbarMUI,
    _extends({
      className: classNames(classes.navigator, className)
    }, restProps),
    createElement(NavigationButton, {
      back: true,
      onClick: function onClick() {
        onNavigate({ back: true });
      }
    }),
    createElement(Title, { currentDate: currentDate }),
    createElement(NavigationButton, {
      onClick: function onClick() {
        onNavigate({ back: false });
      }
    })
  );
};

process.env.NODE_ENV !== "production" ? NavigatorBase.propTypes = {
  classes: object.isRequired,
  titleComponent: func.isRequired,
  navigationButtonComponent: func.isRequired,
  currentDate: oneOfType([string, instanceOf(Date)]).isRequired,
  className: string,
  onNavigate: func
} : void 0;

NavigatorBase.defaultProps = {
  className: undefined,
  onNavigate: function onNavigate() {}
};

var Navigator = withStyles(styles$23, { name: 'Navigator' })(NavigatorBase);

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
  return createElement(
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
  classes: object.isRequired,
  currentDate: oneOfType([string, instanceOf(Date)]).isRequired,
  className: string
} : void 0;

TitleBase.defaultProps = {
  className: undefined
};

var Title = withStyles(styles$24, { name: 'Title' })(TitleBase);

var DateNavigator$1 = function (_React$PureComponent) {
  inherits(DateNavigator$$1, _React$PureComponent);

  function DateNavigator$$1() {
    classCallCheck(this, DateNavigator$$1);
    return possibleConstructorReturn(this, (DateNavigator$$1.__proto__ || Object.getPrototypeOf(DateNavigator$$1)).apply(this, arguments));
  }

  createClass(DateNavigator$$1, [{
    key: 'render',
    value: function render() {
      return createElement(DateNavigator, _extends({
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
}(PureComponent);

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

export { Scheduler$1 as Scheduler, WeekView$1 as WeekView, MonthView$1 as MonthView, Appointments$1 as Appointments, Toolbar$1 as Toolbar, DateNavigator$1 as DateNavigator };
//# sourceMappingURL=dx-react-scheduler-material-ui.es.js.map
