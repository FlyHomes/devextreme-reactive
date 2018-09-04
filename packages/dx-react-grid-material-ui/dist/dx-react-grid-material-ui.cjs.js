/**
 * Bundle of @devexpress/dx-react-grid-material-ui
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
var dxReactGrid = require('@devexpress/dx-react-grid');
var classNames = _interopDefault(require('classnames'));
var styles = require('@material-ui/core/styles');
var Popover = _interopDefault(require('@material-ui/core/Popover'));
var List = _interopDefault(require('@material-ui/core/List'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var Tooltip = _interopDefault(require('@material-ui/core/Tooltip'));
var VisibilityOff = _interopDefault(require('@material-ui/icons/VisibilityOff'));
var ListItem = _interopDefault(require('@material-ui/core/ListItem'));
var ListItemText = _interopDefault(require('@material-ui/core/ListItemText'));
var Checkbox = _interopDefault(require('@material-ui/core/Checkbox'));
var Chip = _interopDefault(require('@material-ui/core/Chip'));
var Input = _interopDefault(require('@material-ui/core/Input'));
var MenuItem = _interopDefault(require('@material-ui/core/MenuItem'));
var Select = _interopDefault(require('@material-ui/core/Select'));
var Button = _interopDefault(require('@material-ui/core/Button'));
var ChevronLeft = _interopDefault(require('@material-ui/icons/ChevronLeft'));
var ChevronRight = _interopDefault(require('@material-ui/icons/ChevronRight'));
var dxGridCore = require('@devexpress/dx-grid-core');
var TableSortLabel = _interopDefault(require('@material-ui/core/TableSortLabel'));
var TableCell = _interopDefault(require('@material-ui/core/TableCell'));
var ExpandMore = _interopDefault(require('@material-ui/icons/ExpandMore'));
var ExpandLess = _interopDefault(require('@material-ui/icons/ExpandLess'));
var TableRowMUI = _interopDefault(require('@material-ui/core/TableRow'));
var TableBody = _interopDefault(require('@material-ui/core/TableBody'));
var TableHead = _interopDefault(require('@material-ui/core/TableHead'));
var TableFooter = _interopDefault(require('@material-ui/core/TableFooter'));
var TableMUI = _interopDefault(require('@material-ui/core/Table'));
var colorManipulator = require('@material-ui/core/styles/colorManipulator');
var dxReactCore = require('@devexpress/dx-react-core');
var Menu = _interopDefault(require('@material-ui/core/Menu'));
var ListItemIcon = _interopDefault(require('@material-ui/core/ListItemIcon'));
var SvgIcon = _interopDefault(require('@material-ui/core/SvgIcon'));
var SearchIcon = _interopDefault(require('@material-ui/icons/Search'));
var List$1 = _interopDefault(require('@material-ui/icons/List'));
var Toolbar$1 = _interopDefault(require('@material-ui/core/Toolbar'));
var InputAdornment = _interopDefault(require('@material-ui/core/InputAdornment'));

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

var styles$1 = {
  root: {
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    display: 'flex',
    flexDirection: 'column'
  }
};

var RootBase = function RootBase(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['children', 'classes', 'className']);
  return React.createElement(
    'div',
    _extends({
      className: classNames(classes.root, className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? RootBase.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

RootBase.defaultProps = {
  className: undefined
};

var Root = styles.withStyles(styles$1)(RootBase);

var Grid$1 = function Grid$$1(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);
  return React.createElement(
    dxReactGrid.Grid,
    _extends({
      rootComponent: Root
    }, props),
    children
  );
};

Grid$1.Root = Root;

process.env.NODE_ENV !== "production" ? Grid$1.propTypes = {
  children: PropTypes.node.isRequired
} : void 0;

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

var Container = function Container(_ref) {
  var children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['children']);
  return React.createElement(
    List,
    _extends({
      dense: true
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? Container.propTypes = {
  children: PropTypes.node.isRequired
} : void 0;

var ToggleButton = function ToggleButton(_ref) {
  var onToggle = _ref.onToggle,
      getMessage = _ref.getMessage,
      buttonRef = _ref.buttonRef,
      active = _ref.active,
      restProps = objectWithoutProperties(_ref, ['onToggle', 'getMessage', 'buttonRef', 'active']);
  return React.createElement(
    Tooltip,
    _extends({
      title: getMessage('showColumnChooser'),
      placement: 'bottom',
      enterDelay: 300
    }, restProps),
    React.createElement(
      IconButton,
      {
        onClick: onToggle,
        buttonRef: buttonRef
      },
      React.createElement(VisibilityOff, null)
    )
  );
};

process.env.NODE_ENV !== "production" ? ToggleButton.propTypes = {
  onToggle: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired,
  buttonRef: PropTypes.func.isRequired,
  active: PropTypes.bool
} : void 0;

ToggleButton.defaultProps = {
  active: false
};

var Item = function Item(_ref) {
  var _ref$item = _ref.item,
      column = _ref$item.column,
      hidden = _ref$item.hidden,
      disabled = _ref.disabled,
      onToggle = _ref.onToggle,
      restProps = objectWithoutProperties(_ref, ['item', 'disabled', 'onToggle']);
  return React.createElement(
    ListItem,
    _extends({
      key: column.name,
      button: !disabled,
      disabled: disabled,
      onClick: !disabled ? onToggle : null
    }, restProps),
    React.createElement(Checkbox, {
      checked: !hidden,
      tabIndex: -1,
      disableRipple: true,
      disabled: disabled,
      style: { width: 'auto', height: 'auto' }
    }),
    React.createElement(ListItemText, { primary: column.title || column.name })
  );
};

process.env.NODE_ENV !== "production" ? Item.propTypes = {
  item: PropTypes.shape({
    column: PropTypes.shape({
      name: PropTypes.string
    }),
    hidden: PropTypes.bool
  }).isRequired,
  disabled: PropTypes.bool,
  onToggle: PropTypes.func
} : void 0;

Item.defaultProps = {
  onToggle: function onToggle() {},
  disabled: false
};

var defaultMessages = {
  showColumnChooser: 'Show Column Chooser'
};
var ColumnChooser$1 = function (_React$PureComponent) {
  inherits(ColumnChooser$$1, _React$PureComponent);

  function ColumnChooser$$1() {
    classCallCheck(this, ColumnChooser$$1);
    return possibleConstructorReturn(this, (ColumnChooser$$1.__proto__ || Object.getPrototypeOf(ColumnChooser$$1)).apply(this, arguments));
  }

  createClass(ColumnChooser$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);

      return React.createElement(dxReactGrid.ColumnChooser, _extends({
        overlayComponent: Overlay,
        containerComponent: Container,
        toggleButtonComponent: ToggleButton,
        itemComponent: Item,
        messages: _extends({}, defaultMessages, messages)
      }, restProps));
    }
  }]);
  return ColumnChooser$$1;
}(React.PureComponent);

ColumnChooser$1.Container = Container;
ColumnChooser$1.ToggleButton = ToggleButton;
ColumnChooser$1.Item = Item;
ColumnChooser$1.Overlay = Overlay;

process.env.NODE_ENV !== "production" ? ColumnChooser$1.propTypes = {
  messages: PropTypes.shape({
    hiddenColumnNames: PropTypes.string
  })
} : void 0;

ColumnChooser$1.defaultProps = {
  messages: {}
};

var styles$2 = function styles$$1(theme) {
  return {
    container: {
      position: 'fixed',
      zIndex: 1000,
      left: 0,
      top: 0,
      display: 'inline-block'
    },
    column: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      float: 'right',
      cursor: 'move'
    }
  };
};

var ContainerBase = function ContainerBase(_ref) {
  var clientOffset = _ref.clientOffset,
      classes = _ref.classes,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['clientOffset', 'classes', 'style', 'className', 'children']);
  return React.createElement(
    'div',
    _extends({
      className: classNames(classes.container, className),
      style: _extends({
        transform: 'translate(calc(' + clientOffset.x + 'px - 50%), calc(' + clientOffset.y + 'px - 50%))'
      }, style)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? ContainerBase.propTypes = {
  clientOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  style: PropTypes.object,
  className: PropTypes.string
} : void 0;

ContainerBase.defaultProps = {
  style: null,
  className: undefined,
  children: undefined
};

var Container$1 = styles.withStyles(styles$2, { name: 'DragDrop' })(ContainerBase);

var ColumnBase = function ColumnBase(_ref2) {
  var column = _ref2.column,
      classes = _ref2.classes,
      className = _ref2.className,
      restProps = objectWithoutProperties(_ref2, ['column', 'classes', 'className']);
  return React.createElement(Chip, _extends({
    className: classNames(classes.column, className),
    label: column.title
  }, restProps));
};

process.env.NODE_ENV !== "production" ? ColumnBase.propTypes = {
  column: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

ColumnBase.defaultProps = {
  className: undefined
};

var Column = styles.withStyles(styles$2, { name: 'DragDrop' })(ColumnBase);

var DragDropProvider$1 = function (_React$PureComponent) {
  inherits(DragDropProvider$$1, _React$PureComponent);

  function DragDropProvider$$1() {
    classCallCheck(this, DragDropProvider$$1);
    return possibleConstructorReturn(this, (DragDropProvider$$1.__proto__ || Object.getPrototypeOf(DragDropProvider$$1)).apply(this, arguments));
  }

  createClass(DragDropProvider$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactGrid.DragDropProvider, _extends({
        containerComponent: Container$1,
        columnComponent: Column
      }, this.props));
    }
  }]);
  return DragDropProvider$$1;
}(React.PureComponent);

DragDropProvider$1.Container = Container$1;
DragDropProvider$1.Column = Column;

var styles$4 = function styles$$1(theme) {
  return {
    pageSizeSelector: _extends({}, theme.typography.caption, {
      float: 'right',
      paddingRight: theme.spacing.unit * 5
    }),
    label: {
      paddingRight: theme.spacing.unit * 3,
      lineHeight: theme.spacing.unit * 5 + 'px',
      float: 'left'
    },
    pageSizes: {
      display: 'inline-block'
    },
    pageSizeTitle: {
      width: 'auto',
      marginRight: theme.spacing.unit / 2
    },
    inputRoot: {
      paddingTop: theme.spacing.unit * 0.75,
      float: 'right',
      fontSize: theme.spacing.unit * 1.75,
      textAlign: 'right'
    },
    selectIcon: {
      top: 2
    },
    '@media (max-width: 768px)': {
      label: {
        display: 'none'
      },
      pageSizeSelector: {
        paddingRight: theme.spacing.unit * 2
      }
    }
  };
};

var PageSizeSelectorBase = function PageSizeSelectorBase(_ref) {
  var pageSize = _ref.pageSize,
      onPageSizeChange = _ref.onPageSizeChange,
      pageSizes = _ref.pageSizes,
      getMessage = _ref.getMessage,
      classes = _ref.classes;

  var showAll = getMessage('showAll');
  return React.createElement(
    'div',
    { className: classes.pageSizeSelector },
    React.createElement(
      'span',
      { className: classes.label },
      getMessage('rowsPerPage')
    ),
    React.createElement(
      Select,
      {
        value: pageSize,
        onChange: function onChange(event) {
          return onPageSizeChange(event.target.value);
        },
        classes: {
          icon: classes.selectIcon
        },
        input: React.createElement(Input, {
          disableUnderline: true,
          classes: { root: classes.inputRoot }
        })
      },
      pageSizes.map(function (item) {
        return React.createElement(
          MenuItem,
          { key: item, value: item },
          item !== 0 ? item : showAll
        );
      })
    )
  );
};

process.env.NODE_ENV !== "production" ? PageSizeSelectorBase.propTypes = {
  pageSize: PropTypes.number.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  classes: PropTypes.object.isRequired,
  getMessage: PropTypes.func.isRequired
} : void 0;

var PageSizeSelector = styles.withStyles(styles$4, { name: 'PageSizeSelector' })(PageSizeSelectorBase);

var styles$5 = function styles$$1(theme) {
  return {
    pagination: {
      float: 'right',
      margin: 0
    },
    rowsLabel: _extends({}, theme.typography.caption, {
      paddingRight: theme.spacing.unit * 5,
      lineHeight: theme.spacing.unit * 5 + 'px'
    }),
    button: {
      minWidth: theme.spacing.unit * 2,
      height: theme.spacing.unit * 5
    },
    activeButton: {
      fontWeight: 'bold',
      cursor: 'default'
    },
    arrowButton: {
      width: theme.spacing.unit * 4,
      height: theme.spacing.unit * 4,
      display: 'inline-block',
      verticalAlign: 'middle',
      transform: theme.direction === 'rtl' ? 'rotate(180deg)' : null
    },
    prev: {
      marginRight: 0
    },
    next: {
      marginLeft: 0
    },
    '@media(max-width: 768px)': {
      button: {
        display: 'none'
      },
      prev: {
        marginRight: theme.spacing.unit
      },
      next: {
        marginLeft: theme.spacing.unit
      },
      rowsLabel: {
        paddingRight: theme.spacing.unit * 2
      }
    }
  };
};

var PageButton = function PageButton(_ref) {
  var _classNames;

  var text = _ref.text,
      isActive = _ref.isActive,
      isDisabled = _ref.isDisabled,
      classes = _ref.classes,
      onClick = _ref.onClick;

  var buttonClasses = classNames((_classNames = {}, defineProperty(_classNames, classes.button, true), defineProperty(_classNames, classes.activeButton, isActive), _classNames));

  return React.createElement(
    Button,
    {
      className: buttonClasses,
      disabled: isDisabled,
      onClick: onClick,
      disableRipple: isActive
    },
    text
  );
};

process.env.NODE_ENV !== "production" ? PageButton.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func
} : void 0;

PageButton.defaultProps = {
  onClick: function onClick() {},
  isDisabled: false,
  isActive: false
};

var ellipsisSymbol = '\u2026';

var renderPageButtons = function renderPageButtons(currentPage, totalPageCount, classes, onCurrentPageChange) {
  var pageButtons = [];
  var maxButtonCount = 3;
  var startPage = 1;
  var endPage = totalPageCount || 1;

  if (maxButtonCount < totalPageCount) {
    startPage = dxGridCore.calculateStartPage(currentPage + 1, maxButtonCount, totalPageCount);
    endPage = startPage + maxButtonCount - 1;
  }
  if (startPage > 1) {
    pageButtons.push(React.createElement(PageButton, {
      key: 1,
      text: String(1),
      classes: classes,
      onClick: function onClick() {
        return onCurrentPageChange(0);
      }
    }));

    if (startPage > 2) {
      pageButtons.push(React.createElement(PageButton, {
        key: 'ellipsisStart',
        text: ellipsisSymbol,
        classes: classes,
        isDisabled: true
      }));
    }
  }

  var _loop = function _loop(page) {
    pageButtons.push(React.createElement(PageButton, {
      key: page,
      text: String(page),
      isActive: page === currentPage + 1,
      classes: classes,
      onClick: function onClick() {
        return onCurrentPageChange(page - 1);
      },
      isDisabled: startPage === endPage
    }));
  };

  for (var page = startPage; page <= endPage; page += 1) {
    _loop(page);
  }

  if (endPage < totalPageCount) {
    if (endPage < totalPageCount - 1) {
      pageButtons.push(React.createElement(PageButton, {
        key: 'ellipsisEnd',
        text: ellipsisSymbol,
        classes: classes,
        isDisabled: true
      }));
    }

    pageButtons.push(React.createElement(PageButton, {
      key: totalPageCount,
      text: String(totalPageCount),
      classes: classes,
      onClick: function onClick() {
        return onCurrentPageChange(totalPageCount - 1);
      }
    }));
  }

  return pageButtons;
};

var PaginationBase = function PaginationBase(_ref2) {
  var totalPages = _ref2.totalPages,
      totalCount = _ref2.totalCount,
      pageSize = _ref2.pageSize,
      currentPage = _ref2.currentPage,
      onCurrentPageChange = _ref2.onCurrentPageChange,
      getMessage = _ref2.getMessage,
      classes = _ref2.classes;

  var from = dxGridCore.firstRowOnPage(currentPage, pageSize, totalCount);
  var to = dxGridCore.lastRowOnPage(currentPage, pageSize, totalCount);

  return React.createElement(
    'div',
    { className: classes.pagination },
    React.createElement(
      'span',
      { className: classes.rowsLabel },
      getMessage('info', { from: from, to: to, count: totalCount })
    ),
    React.createElement(
      IconButton,
      {
        className: classNames(classes.arrowButton, classes.prev),
        disabled: currentPage === 0,
        onClick: function onClick() {
          return currentPage > 0 && onCurrentPageChange(currentPage - 1);
        }
      },
      React.createElement(ChevronLeft, null)
    ),
    renderPageButtons(currentPage, totalPages, classes, onCurrentPageChange),
    React.createElement(
      IconButton,
      {
        className: classNames(classes.arrowButton, classes.next),
        disabled: currentPage === totalPages - 1 || totalCount === 0,
        onClick: function onClick() {
          return currentPage < totalPages - 1 && onCurrentPageChange(currentPage + 1);
        }
      },
      React.createElement(ChevronRight, null)
    )
  );
};

process.env.NODE_ENV !== "production" ? PaginationBase.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onCurrentPageChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  totalCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  getMessage: PropTypes.func.isRequired
} : void 0;

var Pagination = styles.withStyles(styles$5, { name: 'Pagination' })(PaginationBase);

var styles$3 = function styles$$1(theme) {
  return {
    pager: {
      overflow: 'hidden',
      padding: theme.spacing.unit * 1.5,
      flex: 'none'
    }
  };
};

var PagerBase = function PagerBase(_ref) {
  var currentPage = _ref.currentPage,
      pageSizes = _ref.pageSizes,
      totalPages = _ref.totalPages,
      pageSize = _ref.pageSize,
      classes = _ref.classes,
      _onCurrentPageChange = _ref.onCurrentPageChange,
      onPageSizeChange = _ref.onPageSizeChange,
      totalCount = _ref.totalCount,
      getMessage = _ref.getMessage,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['currentPage', 'pageSizes', 'totalPages', 'pageSize', 'classes', 'onCurrentPageChange', 'onPageSizeChange', 'totalCount', 'getMessage', 'className']);
  return React.createElement(
    'div',
    _extends({
      className: classNames(classes.pager, className)
    }, restProps),
    React.createElement(Pagination, {
      totalPages: totalPages,
      totalCount: totalCount,
      currentPage: currentPage,
      onCurrentPageChange: function onCurrentPageChange(page) {
        return _onCurrentPageChange(page);
      },
      pageSize: pageSize,
      getMessage: getMessage
    }),
    !!pageSizes.length && React.createElement(PageSizeSelector, {
      pageSize: pageSize,
      onPageSizeChange: onPageSizeChange,
      pageSizes: pageSizes,
      getMessage: getMessage
    })
  );
};

process.env.NODE_ENV !== "production" ? PagerBase.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  pageSize: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  onCurrentPageChange: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  getMessage: PropTypes.func.isRequired,
  className: PropTypes.string
} : void 0;

PagerBase.defaultProps = {
  className: undefined
};

var Pager = styles.withStyles(styles$3, { name: 'Pager' })(PagerBase);

var defaultMessages$1 = {
  showAll: 'All',
  rowsPerPage: 'Rows per page:',
  info: function info(_ref) {
    var from = _ref.from,
        to = _ref.to,
        count = _ref.count;
    return '' + from + (from < to ? '-' + to : '') + ' of ' + count;
  }
};

var PagingPanel$1 = function (_React$PureComponent) {
  inherits(PagingPanel$$1, _React$PureComponent);

  function PagingPanel$$1() {
    classCallCheck(this, PagingPanel$$1);
    return possibleConstructorReturn(this, (PagingPanel$$1.__proto__ || Object.getPrototypeOf(PagingPanel$$1)).apply(this, arguments));
  }

  createClass(PagingPanel$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);


      return React.createElement(dxReactGrid.PagingPanel, _extends({
        containerComponent: Pager,
        messages: _extends({}, defaultMessages$1, messages)
      }, restProps));
    }
  }]);
  return PagingPanel$$1;
}(React.PureComponent);

PagingPanel$1.Container = Pager;

process.env.NODE_ENV !== "production" ? PagingPanel$1.propTypes = {
  messages: PropTypes.shape({
    showAll: PropTypes.string,
    rowsPerPage: PropTypes.string,
    info: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  })
} : void 0;

PagingPanel$1.defaultProps = {
  messages: {}
};

var styles$6 = function styles$$1(theme) {
  return {
    panel: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      marginTop: theme.spacing.unit * 1.5
    }
  };
};

var GroupPanelContainerBase = function GroupPanelContainerBase(_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['classes', 'children', 'className']);
  return React.createElement(
    'div',
    _extends({
      className: classNames(classes.panel, className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? GroupPanelContainerBase.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
} : void 0;

GroupPanelContainerBase.defaultProps = {
  children: undefined,
  className: undefined
};

var GroupPanelContainer = styles.withStyles(styles$6, { name: 'GroupPanelContainer' })(GroupPanelContainerBase);

var ENTER_KEY_CODE = 13;
var SPACE_KEY_CODE = 32;

var styles$7 = function styles$$1(theme) {
  return {
    button: {
      marginRight: theme.spacing.unit,
      marginBottom: theme.spacing.unit * 1.5
    },
    draftCell: {
      opacity: 0.3
    }
  };
};

var label = function label(showSortingControls, sortingEnabled, sortingDirection, column) {
  var title = column.title || column.name;
  return showSortingControls ? React.createElement(
    TableSortLabel,
    {
      active: !!sortingDirection,
      direction: sortingDirection === null ? undefined : sortingDirection,
      disabled: !sortingEnabled,
      tabIndex: -1
    },
    title
  ) : title;
};

var GroupPanelItemBase = function GroupPanelItemBase(_ref) {
  var _classNames;

  var _ref$item = _ref.item,
      column = _ref$item.column,
      draft = _ref$item.draft,
      onGroup = _ref.onGroup,
      showGroupingControls = _ref.showGroupingControls,
      showSortingControls = _ref.showSortingControls,
      sortingDirection = _ref.sortingDirection,
      onSort = _ref.onSort,
      sortingEnabled = _ref.sortingEnabled,
      groupingEnabled = _ref.groupingEnabled,
      classes = _ref.classes,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['item', 'onGroup', 'showGroupingControls', 'showSortingControls', 'sortingDirection', 'onSort', 'sortingEnabled', 'groupingEnabled', 'classes', 'className']);

  var chipClassNames = classNames((_classNames = {}, defineProperty(_classNames, classes.button, true), defineProperty(_classNames, classes.draftCell, draft), _classNames), className);
  var onClick = function onClick(e) {
    var isActionKeyDown = e.keyCode === ENTER_KEY_CODE || e.keyCode === SPACE_KEY_CODE;
    var isMouseClick = e.keyCode === undefined;
    var cancelSortingRelatedKey = e.metaKey || e.ctrlKey;
    var direction = (isMouseClick || isActionKeyDown) && cancelSortingRelatedKey ? null : undefined;

    onSort({
      direction: direction,
      keepOther: cancelSortingRelatedKey
    });
  };

  return React.createElement(Chip, _extends({
    label: label(showSortingControls, sortingEnabled, sortingDirection, column),
    className: chipClassNames
  }, showGroupingControls ? { onDelete: groupingEnabled ? onGroup : null } : null, showSortingControls ? { onClick: sortingEnabled ? onClick : null } : null, restProps));
};

process.env.NODE_ENV !== "production" ? GroupPanelItemBase.propTypes = {
  item: PropTypes.shape({
    column: PropTypes.shape({
      title: PropTypes.string
    }).isRequired,
    draft: PropTypes.bool
  }).isRequired,
  showSortingControls: PropTypes.bool,
  sortingDirection: PropTypes.oneOf(['asc', 'desc', null]),
  onSort: PropTypes.func,
  onGroup: PropTypes.func,
  showGroupingControls: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  sortingEnabled: PropTypes.bool,
  groupingEnabled: PropTypes.bool
} : void 0;

GroupPanelItemBase.defaultProps = {
  showSortingControls: false,
  sortingEnabled: false,
  sortingDirection: undefined,
  onSort: undefined,
  onGroup: undefined,
  showGroupingControls: false,
  groupingEnabled: false,
  className: undefined
};

var GroupPanelItem = styles.withStyles(styles$7, { name: 'GroupPanelItem' })(GroupPanelItemBase);

var styles$8 = function styles$$1(theme) {
  return {
    groupInfo: {
      color: theme.typography.caption.color,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize
    }
  };
};

var GroupPanelEmptyMessageBase = function GroupPanelEmptyMessageBase(_ref) {
  var getMessage = _ref.getMessage,
      classes = _ref.classes,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['getMessage', 'classes', 'className']);
  return React.createElement(
    'div',
    _extends({
      className: classNames(classes.groupInfo, className)
    }, restProps),
    getMessage('groupByColumn')
  );
};

process.env.NODE_ENV !== "production" ? GroupPanelEmptyMessageBase.propTypes = {
  getMessage: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

GroupPanelEmptyMessageBase.defaultProps = {
  className: undefined
};

var GroupPanelEmptyMessage = styles.withStyles(styles$8, { name: 'GroupPanelEmptyMessage' })(GroupPanelEmptyMessageBase);

var defaultMessages$2 = {
  groupByColumn: 'Drag a column header here to group by that column'
};

var GroupingPanel$1 = function (_React$PureComponent) {
  inherits(GroupingPanel$$1, _React$PureComponent);

  function GroupingPanel$$1() {
    classCallCheck(this, GroupingPanel$$1);
    return possibleConstructorReturn(this, (GroupingPanel$$1.__proto__ || Object.getPrototypeOf(GroupingPanel$$1)).apply(this, arguments));
  }

  createClass(GroupingPanel$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);


      return React.createElement(dxReactGrid.GroupingPanel, _extends({
        layoutComponent: dxReactGrid.GroupPanelLayout,
        containerComponent: GroupPanelContainer,
        itemComponent: GroupPanelItem,
        emptyMessageComponent: GroupPanelEmptyMessage,
        messages: _extends({}, defaultMessages$2, messages)
      }, restProps));
    }
  }]);
  return GroupingPanel$$1;
}(React.PureComponent);

GroupingPanel$1.Container = GroupPanelContainer;
GroupingPanel$1.Item = GroupPanelItem;
GroupingPanel$1.EmptyMessage = GroupPanelEmptyMessage;

process.env.NODE_ENV !== "production" ? GroupingPanel$1.propTypes = {
  messages: PropTypes.shape({
    groupByColumn: PropTypes.string
  })
} : void 0;

GroupingPanel$1.defaultProps = {
  messages: {}
};

var styles$9 = function styles$$1(theme) {
  return {
    toggleCell: {
      textAlign: 'center',
      textOverflow: 'initial',
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: theme.spacing.unit
    },
    toggleCellButton: {
      verticalAlign: 'middle',
      display: 'inline-block',
      height: theme.spacing.unit * 5,
      width: theme.spacing.unit * 5
    }
  };
};

var TableDetailToggleCellBase = function TableDetailToggleCellBase(_ref) {
  var style = _ref.style,
      expanded = _ref.expanded,
      classes = _ref.classes,
      onToggle = _ref.onToggle,
      tableColumn = _ref.tableColumn,
      tableRow = _ref.tableRow,
      row = _ref.row,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['style', 'expanded', 'classes', 'onToggle', 'tableColumn', 'tableRow', 'row', 'className']);

  var handleClick = function handleClick(e) {
    e.stopPropagation();
    onToggle();
  };
  return React.createElement(
    TableCell,
    _extends({
      className: classNames(classes.toggleCell, className),
      style: style
    }, restProps),
    React.createElement(
      IconButton,
      {
        className: classes.toggleCellButton,
        onClick: handleClick
      },
      expanded ? React.createElement(ExpandLess, null) : React.createElement(ExpandMore, null)
    )
  );
};

process.env.NODE_ENV !== "production" ? TableDetailToggleCellBase.propTypes = {
  style: PropTypes.object,
  expanded: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  onToggle: PropTypes.func,
  className: PropTypes.string,
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
  row: PropTypes.any
} : void 0;

TableDetailToggleCellBase.defaultProps = {
  style: null,
  expanded: false,
  onToggle: function onToggle() {},
  className: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined
};

var TableDetailToggleCell = styles.withStyles(styles$9, { name: 'TableDetailToggleCell' })(TableDetailToggleCellBase);

var styles$10 = function styles$$1(theme) {
  return {
    active: {
      backgroundColor: theme.palette.background.default
    }
  };
};

var TableDetailCellBase = function TableDetailCellBase(_ref) {
  var colSpan = _ref.colSpan,
      style = _ref.style,
      children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      tableColumn = _ref.tableColumn,
      tableRow = _ref.tableRow,
      row = _ref.row,
      restProps = objectWithoutProperties(_ref, ['colSpan', 'style', 'children', 'classes', 'className', 'tableColumn', 'tableRow', 'row']);
  return React.createElement(
    TableCell,
    _extends({
      style: style,
      colSpan: colSpan,
      className: classNames(classes.active, className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? TableDetailCellBase.propTypes = {
  style: PropTypes.object,
  colSpan: PropTypes.number,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
  row: PropTypes.any
} : void 0;

TableDetailCellBase.defaultProps = {
  style: null,
  colSpan: 1,
  className: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined,
  children: undefined
};

var TableDetailCell = styles.withStyles(styles$10, { name: 'TableDetailCell' })(TableDetailCellBase);

var TableRow = function TableRow(_ref) {
  var children = _ref.children,
      row = _ref.row,
      tableRow = _ref.tableRow,
      restProps = objectWithoutProperties(_ref, ['children', 'row', 'tableRow']);
  return React.createElement(
    TableRowMUI,
    restProps,
    children
  );
};

process.env.NODE_ENV !== "production" ? TableRow.propTypes = {
  children: PropTypes.node,
  row: PropTypes.any,
  tableRow: PropTypes.object
} : void 0;

TableRow.defaultProps = {
  children: undefined,
  row: undefined,
  tableRow: undefined
};

var TableRowDetail$1 = function (_React$PureComponent) {
  inherits(TableRowDetail$$1, _React$PureComponent);

  function TableRowDetail$$1() {
    classCallCheck(this, TableRowDetail$$1);
    return possibleConstructorReturn(this, (TableRowDetail$$1.__proto__ || Object.getPrototypeOf(TableRowDetail$$1)).apply(this, arguments));
  }

  createClass(TableRowDetail$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactGrid.TableRowDetail, _extends({
        toggleCellComponent: TableDetailToggleCell,
        cellComponent: TableDetailCell,
        rowComponent: TableRow,
        toggleColumnWidth: 48
      }, this.props));
    }
  }]);
  return TableRowDetail$$1;
}(React.PureComponent);

TableRowDetail$1.Cell = TableDetailCell;
TableRowDetail$1.ToggleCell = TableDetailToggleCell;
TableRowDetail$1.Row = TableRow;

var styles$11 = function styles$$1(theme) {
  return {
    cell: {
      cursor: 'pointer',
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingTop: theme.spacing.unit / 2 - 1
    },
    indentCell: {
      padding: 0
    },
    groupButton: {
      verticalAlign: 'middle',
      display: 'inline-block',
      height: theme.spacing.unit * 5,
      width: theme.spacing.unit * 5,
      marginRight: theme.spacing.unit
    },
    columnTitle: {
      verticalAlign: 'middle'
    }
  };
};

var TableGroupCellBase = function TableGroupCellBase(_ref) {
  var style = _ref.style,
      colSpan = _ref.colSpan,
      row = _ref.row,
      column = _ref.column,
      expanded = _ref.expanded,
      onToggle = _ref.onToggle,
      classes = _ref.classes,
      children = _ref.children,
      className = _ref.className,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['style', 'colSpan', 'row', 'column', 'expanded', 'onToggle', 'classes', 'children', 'className', 'tableRow', 'tableColumn']);

  var handleClick = function handleClick() {
    return onToggle();
  };

  return React.createElement(
    TableCell,
    _extends({
      colSpan: colSpan,
      style: style,
      className: classNames(classes.cell, className),
      onClick: handleClick
    }, restProps),
    React.createElement(
      IconButton,
      {
        className: classes.groupButton
      },
      expanded ? React.createElement(ExpandMore, null) : React.createElement(ChevronRight, null)
    ),
    React.createElement(
      'span',
      { className: classes.columnTitle },
      React.createElement(
        'strong',
        null,
        column.title || column.name,
        ':',
        ' '
      ),
      children || row.value
    )
  );
};

process.env.NODE_ENV !== "production" ? TableGroupCellBase.propTypes = {
  style: PropTypes.object,
  colSpan: PropTypes.number,
  row: PropTypes.any,
  column: PropTypes.object,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object
} : void 0;

TableGroupCellBase.defaultProps = {
  style: null,
  colSpan: 1,
  row: {},
  column: {},
  expanded: false,
  onToggle: function onToggle() {},
  children: undefined,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined
};

var TableGroupCell = styles.withStyles(styles$11, { name: 'TableGroupCell' })(TableGroupCellBase);

var TableGroupRow$1 = function (_React$PureComponent) {
  inherits(TableGroupRow$$1, _React$PureComponent);

  function TableGroupRow$$1() {
    classCallCheck(this, TableGroupRow$$1);
    return possibleConstructorReturn(this, (TableGroupRow$$1.__proto__ || Object.getPrototypeOf(TableGroupRow$$1)).apply(this, arguments));
  }

  createClass(TableGroupRow$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactGrid.TableGroupRow, _extends({
        cellComponent: TableGroupCell,
        rowComponent: TableRow,
        indentColumnWidth: 48
      }, this.props));
    }
  }]);
  return TableGroupRow$$1;
}(React.PureComponent);

TableGroupRow$1.Row = TableRow;
TableGroupRow$1.Cell = TableGroupCell;

var styles$12 = function styles$$1(theme) {
  return {
    cell: {
      overflow: 'visible',
      paddingRight: 0,
      paddingLeft: theme.spacing.unit,
      textAlign: 'center'
    },
    alignWithRowSpan: {
      verticalAlign: 'bottom',
      paddingBottom: theme.spacing.unit / 2
    },
    pointer: {
      cursor: 'pointer'
    }
  };
};

var TableSelectAllCellBase = function TableSelectAllCellBase(_ref) {
  var _classNames;

  var allSelected = _ref.allSelected,
      someSelected = _ref.someSelected,
      disabled = _ref.disabled,
      onToggle = _ref.onToggle,
      classes = _ref.classes,
      className = _ref.className,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      rowSpan = _ref.rowSpan,
      restProps = objectWithoutProperties(_ref, ['allSelected', 'someSelected', 'disabled', 'onToggle', 'classes', 'className', 'tableRow', 'tableColumn', 'rowSpan']);

  var cellClasses = classNames((_classNames = {}, defineProperty(_classNames, classes.cell, true), defineProperty(_classNames, classes.pointer, !disabled), defineProperty(_classNames, classes.alignWithRowSpan, rowSpan > 1), _classNames), className);

  return React.createElement(
    TableCell,
    _extends({
      padding: 'checkbox',
      className: cellClasses,
      rowSpan: rowSpan
    }, restProps),
    React.createElement(Checkbox, {
      checked: allSelected,
      indeterminate: someSelected,
      disabled: disabled,
      onClick: function onClick(e) {
        if (disabled) return;

        e.stopPropagation();
        onToggle();
      }
    })
  );
};

process.env.NODE_ENV !== "production" ? TableSelectAllCellBase.propTypes = {
  allSelected: PropTypes.bool,
  someSelected: PropTypes.bool,
  disabled: PropTypes.bool,
  onToggle: PropTypes.func,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  rowSpan: PropTypes.number
} : void 0;

TableSelectAllCellBase.defaultProps = {
  allSelected: false,
  someSelected: false,
  disabled: false,
  onToggle: function onToggle() {},
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  rowSpan: undefined
};

var TableSelectAllCell = styles.withStyles(styles$12, { name: 'TableSelectAllCell' })(TableSelectAllCellBase);

var styles$13 = function styles$$1(theme) {
  return {
    cell: {
      overflow: 'visible',
      paddingRight: 0,
      paddingLeft: theme.spacing.unit,
      textAlign: 'center'
    },
    checkbox: {
      marginTop: '-1px',
      marginBottom: '-1px',
      width: theme.spacing.unit * 5,
      height: theme.spacing.unit * 5
    }
  };
};

var TableSelectCellBase = function TableSelectCellBase(_ref) {
  var style = _ref.style,
      selected = _ref.selected,
      onToggle = _ref.onToggle,
      classes = _ref.classes,
      className = _ref.className,
      row = _ref.row,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['style', 'selected', 'onToggle', 'classes', 'className', 'row', 'tableRow', 'tableColumn']);
  return React.createElement(
    TableCell,
    _extends({
      padding: 'checkbox',
      style: style,
      className: classNames(classes.cell, className)
    }, restProps),
    React.createElement(Checkbox, {
      className: classes.checkbox,
      checked: selected,
      onClick: function onClick(e) {
        e.stopPropagation();
        onToggle();
      }
    })
  );
};

process.env.NODE_ENV !== "production" ? TableSelectCellBase.propTypes = {
  style: PropTypes.object,
  selected: PropTypes.bool,
  onToggle: PropTypes.func,
  classes: PropTypes.object.isRequired,
  row: PropTypes.any,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  className: PropTypes.string
} : void 0;

TableSelectCellBase.defaultProps = {
  style: null,
  selected: false,
  onToggle: function onToggle() {},
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined
};

var TableSelectCell = styles.withStyles(styles$13, { name: 'TableSelectCell' })(TableSelectCellBase);

var TableSelectRow = function TableSelectRow(_ref) {
  var selected = _ref.selected,
      selectByRowClick = _ref.selectByRowClick,
      onToggle = _ref.onToggle,
      row = _ref.row,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['selected', 'selectByRowClick', 'onToggle', 'row', 'tableRow', 'tableColumn', 'children']);
  return React.createElement(
    TableRowMUI,
    _extends({
      selected: selected,
      onClick: function onClick(e) {
        if (!selectByRowClick) return;
        e.stopPropagation();
        onToggle();
      }
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? TableSelectRow.propTypes = {
  children: PropTypes.node,
  onToggle: PropTypes.func,
  selected: PropTypes.bool,
  selectByRowClick: PropTypes.bool,
  row: PropTypes.any,
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object
} : void 0;

TableSelectRow.defaultProps = {
  children: undefined,
  onToggle: function onToggle() {},
  selected: false,
  selectByRowClick: false,
  row: undefined,
  tableColumn: undefined,
  tableRow: undefined
};

var TableSelection$1 = function (_React$PureComponent) {
  inherits(TableSelection$$1, _React$PureComponent);

  function TableSelection$$1() {
    classCallCheck(this, TableSelection$$1);
    return possibleConstructorReturn(this, (TableSelection$$1.__proto__ || Object.getPrototypeOf(TableSelection$$1)).apply(this, arguments));
  }

  createClass(TableSelection$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactGrid.TableSelection, _extends({
        rowComponent: TableSelectRow,
        cellComponent: TableSelectCell,
        headerCellComponent: TableSelectAllCell,
        selectionColumnWidth: 58
      }, this.props));
    }
  }]);
  return TableSelection$$1;
}(React.PureComponent);

TableSelection$1.Cell = TableSelectCell;
TableSelection$1.HeaderCell = TableSelectAllCell;

var getBorder = function getBorder(theme) {
  return '1px solid ' + (theme.palette.type === 'light' ? colorManipulator.lighten(colorManipulator.fade(theme.palette.divider, 1), 0.88) : colorManipulator.darken(colorManipulator.fade(theme.palette.divider, 1), 0.8));
};

var styles$14 = function styles$$1(theme) {
  return {
    table: {
      tableLayout: 'fixed',
      overflow: 'hidden'
    },
    stickyTable: {
      position: 'sticky',
      zIndex: 1,
      overflow: 'visible',
      background: theme.palette.background.paper,
      fallbacks: {
        position: '-webkit-sticky'
      }
    },
    headTable: {
      top: 0
    },
    footTable: {
      borderTop: getBorder(theme),
      bottom: 0
    }
  };
};

var TableBase = function TableBase(_ref) {
  var _classNames;

  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      use = _ref.use,
      restProps = objectWithoutProperties(_ref, ['children', 'classes', 'className', 'use']);
  return React.createElement(
    TableMUI,
    _extends({
      className: classNames((_classNames = {}, defineProperty(_classNames, classes.table, true), defineProperty(_classNames, classes.stickyTable, !!use), defineProperty(_classNames, classes.headTable, use === 'head'), defineProperty(_classNames, classes.footTable, use === 'foot'), _classNames), className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? TableBase.propTypes = {
  use: PropTypes.oneOf(['head', 'foot']),
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

TableBase.defaultProps = {
  use: undefined,
  className: undefined
};

var Table$2 = styles.withStyles(styles$14, { name: 'Table' })(TableBase);

var MINIMAL_COLUMN_WIDTH = 120;

var TableLayout$1 = function TableLayout$$1(props) {
  return React.createElement(dxReactGrid.TableLayout, _extends({
    layoutComponent: dxReactGrid.StaticTableLayout,
    minColumnWidth: MINIMAL_COLUMN_WIDTH
  }, props));
};

var styles$15 = function styles$$1(theme) {
  return {
    cell: {
      paddingRight: theme.spacing.unit,
      paddingLeft: theme.spacing.unit,
      '&:first-child': {
        paddingLeft: theme.spacing.unit * 3
      },
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    footer: {
      borderBottom: getBorder(theme)
    },
    cellRightAlign: {
      textAlign: 'right'
    },
    cellCenterAlign: {
      textAlign: 'center'
    },
    cellNoWrap: {
      whiteSpace: 'nowrap'
    }
  };
};

var TableCellBase = function TableCellBase(_ref) {
  var _classNames;

  var column = _ref.column,
      value = _ref.value,
      children = _ref.children,
      classes = _ref.classes,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      row = _ref.row,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['column', 'value', 'children', 'classes', 'tableRow', 'tableColumn', 'row', 'className']);
  return React.createElement(
    TableCell,
    _extends({
      className: classNames((_classNames = {}, defineProperty(_classNames, classes.cell, true), defineProperty(_classNames, classes.cellRightAlign, tableColumn && tableColumn.align === 'right'), defineProperty(_classNames, classes.cellCenterAlign, tableColumn && tableColumn.align === 'center'), defineProperty(_classNames, classes.cellNoWrap, !(tableColumn && tableColumn.wordWrapEnabled)), _classNames), className),
      classes: { footer: classes.footer }
    }, restProps),
    children || value
  );
};

process.env.NODE_ENV !== "production" ? TableCellBase.propTypes = {
  value: PropTypes.any,
  column: PropTypes.object,
  row: PropTypes.any,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  className: PropTypes.string
} : void 0;

TableCellBase.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined
};

var TableCell$1 = styles.withStyles(styles$15, { name: 'TableCell' })(TableCellBase);

var styles$16 = function styles$$1(theme) {
  return {
    cell: {
      padding: 0
    },
    footer: {
      borderBottom: getBorder(theme)
    }
  };
};

var TableStubCellBase = function TableStubCellBase(_ref) {
  var style = _ref.style,
      classes = _ref.classes,
      className = _ref.className,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['style', 'classes', 'className', 'tableRow', 'tableColumn']);
  return React.createElement(TableCell, _extends({
    style: style,
    className: classNames(classes.cell, className),
    classes: { footer: classes.footer }
  }, restProps));
};

process.env.NODE_ENV !== "production" ? TableStubCellBase.propTypes = {
  style: PropTypes.object,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object
} : void 0;

TableStubCellBase.defaultProps = {
  style: null,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined
};

var TableStubCell = styles.withStyles(styles$16, { name: 'TableStubCell' })(TableStubCellBase);

var styles$17 = function styles$$1(theme) {
  return {
    cell: {
      textAlign: 'center',
      padding: theme.spacing.unit * 5 + 'px 0'
    }
  };
};

var TableNoDataCellBase = function TableNoDataCellBase(_ref) {
  var style = _ref.style,
      colSpan = _ref.colSpan,
      getMessage = _ref.getMessage,
      classes = _ref.classes,
      className = _ref.className,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['style', 'colSpan', 'getMessage', 'classes', 'className', 'tableRow', 'tableColumn']);
  return React.createElement(
    TableCell,
    _extends({
      style: style,
      className: classNames(classes.cell, className),
      colSpan: colSpan
    }, restProps),
    React.createElement(
      'big',
      null,
      getMessage('noData')
    )
  );
};

process.env.NODE_ENV !== "production" ? TableNoDataCellBase.propTypes = {
  style: PropTypes.object,
  colSpan: PropTypes.number,
  getMessage: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object
} : void 0;

TableNoDataCellBase.defaultProps = {
  style: null,
  colSpan: 1,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined
};

var TableNoDataCell = styles.withStyles(styles$17, { name: 'TableNoDataCell' })(TableNoDataCellBase);

var styles$18 = {
  root: {
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch'
  }
};

var TableContainerBase = function TableContainerBase(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['children', 'classes', 'className']);
  return React.createElement(
    'div',
    _extends({
      className: classNames(classes.root, className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? TableContainerBase.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

TableContainerBase.defaultProps = {
  className: undefined
};

var TableContainer = styles.withStyles(styles$18, { name: 'TableContainer' })(TableContainerBase);

var TableStubRow = function TableStubRow(_ref) {
  var children = _ref.children,
      tableRow = _ref.tableRow,
      restProps = objectWithoutProperties(_ref, ['children', 'tableRow']);
  return React.createElement(
    TableRowMUI,
    restProps,
    children
  );
};

process.env.NODE_ENV !== "production" ? TableStubRow.propTypes = {
  children: PropTypes.node,
  tableRow: PropTypes.object
} : void 0;

TableStubRow.defaultProps = {
  children: undefined,
  tableRow: undefined
};

var defaultMessages$3 = {
  noData: 'No data'
};

var Table$1 = function (_React$PureComponent) {
  inherits(Table$$1, _React$PureComponent);

  function Table$$1() {
    classCallCheck(this, Table$$1);
    return possibleConstructorReturn(this, (Table$$1.__proto__ || Object.getPrototypeOf(Table$$1)).apply(this, arguments));
  }

  createClass(Table$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);


      return React.createElement(dxReactGrid.Table, _extends({
        tableComponent: Table$2,
        headComponent: TableHead,
        bodyComponent: TableBody,
        footerComponent: TableFooter,
        containerComponent: TableContainer,
        layoutComponent: TableLayout$1,
        rowComponent: TableRow,
        cellComponent: TableCell$1,
        noDataRowComponent: TableRow,
        noDataCellComponent: TableNoDataCell,
        stubRowComponent: TableStubRow,
        stubCellComponent: TableStubCell,
        stubHeaderCellComponent: TableStubCell,
        messages: _extends({}, defaultMessages$3, messages)
      }, restProps));
    }
  }]);
  return Table$$1;
}(React.PureComponent);

Table$1.Cell = TableCell$1;
Table$1.Row = TableRow;
Table$1.NoDataCell = TableNoDataCell;
Table$1.NoDataRow = TableRow;
Table$1.StubRow = TableStubRow;
Table$1.StubCell = TableStubCell;
Table$1.StubHeaderCell = TableStubCell;
Table$1.Table = Table$2;
Table$1.TableHead = TableHead;
Table$1.TableBody = TableBody;
Table$1.TableFooter = TableFooter;
Table$1.Container = TableContainer;

process.env.NODE_ENV !== "production" ? Table$1.propTypes = {
  messages: PropTypes.shape({
    noData: PropTypes.string
  })
} : void 0;

Table$1.defaultProps = {
  messages: {}
};

var MINIMAL_COLUMN_WIDTH$1 = 120;

var VirtualTableLayout$1 = function VirtualTableLayout$$1(props) {
  return React.createElement(dxReactGrid.TableLayout, _extends({
    layoutComponent: dxReactGrid.VirtualTableLayout,
    minColumnWidth: MINIMAL_COLUMN_WIDTH$1
  }, props));
};

var FixedHeader = function FixedHeader(props) {
  return React.createElement(Table$2, _extends({ use: 'head' }, props));
};
var FixedFooter = function FixedFooter(props) {
  return React.createElement(Table$2, _extends({ use: 'foot' }, props));
};

var defaultMessages$4 = {
  noData: 'No data'
};

var VirtualTable = function (_React$PureComponent) {
  inherits(VirtualTable, _React$PureComponent);

  function VirtualTable(props) {
    classCallCheck(this, VirtualTable);

    var _this = possibleConstructorReturn(this, (VirtualTable.__proto__ || Object.getPrototypeOf(VirtualTable)).call(this, props));

    var height = props.height,
        estimatedRowHeight = props.estimatedRowHeight,
        headTableComponent = props.headTableComponent,
        footerTableComponent = props.footerTableComponent;

    _this.layoutRenderComponent = dxReactCore.createRenderComponent(VirtualTableLayout$1, {
      height: height,
      estimatedRowHeight: estimatedRowHeight,
      headTableComponent: headTableComponent,
      footerTableComponent: footerTableComponent
    });
    return _this;
  }

  createClass(VirtualTable, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _props = this.props,
          height = _props.height,
          estimatedRowHeight = _props.estimatedRowHeight,
          headTableComponent = _props.headTableComponent,
          footerTableComponent = _props.footerTableComponent;

      this.layoutRenderComponent.update({
        height: height,
        estimatedRowHeight: estimatedRowHeight,
        headTableComponent: headTableComponent,
        footerTableComponent: footerTableComponent
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          height = _props2.height,
          estimatedRowHeight = _props2.estimatedRowHeight,
          headTableComponent = _props2.headTableComponent,
          messages = _props2.messages,
          restProps = objectWithoutProperties(_props2, ['height', 'estimatedRowHeight', 'headTableComponent', 'messages']);


      return React.createElement(dxReactGrid.Table, _extends({
        layoutComponent: this.layoutRenderComponent.component,
        bodyComponent: TableBody,
        headComponent: TableHead,
        footerComponent: TableFooter,
        tableComponent: Table$2,
        containerComponent: TableContainer,
        rowComponent: TableRow,
        cellComponent: TableCell$1,
        noDataRowComponent: TableRow,
        noDataCellComponent: TableNoDataCell,
        stubRowComponent: TableStubRow,
        stubCellComponent: TableStubCell,
        stubHeaderCellComponent: TableStubCell,
        messages: _extends({}, defaultMessages$4, messages)
      }, restProps));
    }
  }]);
  return VirtualTable;
}(React.PureComponent);

VirtualTable.Cell = TableCell$1;
VirtualTable.Row = TableRow;
VirtualTable.NoDataCell = TableNoDataCell;
VirtualTable.NoDataRow = TableRow;
VirtualTable.StubCell = TableStubCell;
VirtualTable.StubHeaderCell = TableStubCell;
VirtualTable.Table = Table$2;
VirtualTable.TableHead = TableHead;
VirtualTable.TableBody = TableBody;
VirtualTable.FixedHeader = FixedHeader;
VirtualTable.FixedFooter = FixedFooter;
VirtualTable.Container = TableContainer;
VirtualTable.StubRow = TableStubRow;

process.env.NODE_ENV !== "production" ? VirtualTable.propTypes = {
  estimatedRowHeight: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
  headTableComponent: PropTypes.func,
  footerTableComponent: PropTypes.func,
  messages: PropTypes.shape({
    noData: PropTypes.string
  })
} : void 0;

VirtualTable.defaultProps = {
  estimatedRowHeight: 48,
  height: 530,
  headTableComponent: FixedHeader,
  footerTableComponent: FixedFooter,
  messages: {}
};

var styles$19 = function styles$$1(_ref) {
  var spacing = _ref.spacing;
  return {
    cell: {
      paddingRight: spacing.unit,
      paddingLeft: spacing.unit,
      '&:first-child': {
        paddingLeft: spacing.unit * 3
      }
    },
    flexContainer: {
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    }
  };
};

var TableFilterCellBase = function TableFilterCellBase(_ref2) {
  var filter = _ref2.filter,
      getMessage = _ref2.getMessage,
      onFilter = _ref2.onFilter,
      classes = _ref2.classes,
      children = _ref2.children,
      className = _ref2.className,
      tableRow = _ref2.tableRow,
      tableColumn = _ref2.tableColumn,
      column = _ref2.column,
      filteringEnabled = _ref2.filteringEnabled,
      restProps = objectWithoutProperties(_ref2, ['filter', 'getMessage', 'onFilter', 'classes', 'children', 'className', 'tableRow', 'tableColumn', 'column', 'filteringEnabled']);
  return React.createElement(
    TableCell,
    _extends({
      className: classNames(classes.cell, className)
    }, restProps),
    React.createElement(
      'div',
      { className: classes.flexContainer },
      children
    )
  );
};

process.env.NODE_ENV !== "production" ? TableFilterCellBase.propTypes = {
  filter: PropTypes.object,
  onFilter: PropTypes.func,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  getMessage: PropTypes.func.isRequired,
  className: PropTypes.string,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  column: PropTypes.object,
  filteringEnabled: PropTypes.bool
} : void 0;

TableFilterCellBase.defaultProps = {
  filter: null,
  onFilter: function onFilter() {},
  children: undefined,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  column: undefined,
  filteringEnabled: true
};

var TableFilterCell = styles.withStyles(styles$19, { name: 'TableFilterCell' })(TableFilterCellBase);

var styles$20 = {
  input: {
    width: '100%'
  }
};

var EditorBase = function EditorBase(_ref) {
  var value = _ref.value,
      disabled = _ref.disabled,
      getMessage = _ref.getMessage,
      _onChange = _ref.onChange,
      classes = _ref.classes,
      restProps = objectWithoutProperties(_ref, ['value', 'disabled', 'getMessage', 'onChange', 'classes']);
  return React.createElement(Input, _extends({
    classes: {
      input: classes.input
    },
    fullWidth: true,
    disabled: disabled,
    value: value,
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    },
    placeholder: getMessage('filterPlaceholder')
  }, restProps));
};

process.env.NODE_ENV !== "production" ? EditorBase.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  getMessage: PropTypes.func.isRequired
} : void 0;

EditorBase.defaultProps = {
  value: '',
  disabled: false,
  onChange: function onChange() {}
};

var Editor = styles.withStyles(styles$20, { name: 'Editor' })(EditorBase);

var styles$21 = function styles$$1(_ref) {
  var spacing = _ref.spacing;
  return {
    icon: {
      marginRight: spacing.unit
    }
  };
};

var FilterSelectorBase = function (_React$PureComponent) {
  inherits(FilterSelectorBase, _React$PureComponent);

  function FilterSelectorBase(props) {
    classCallCheck(this, FilterSelectorBase);

    var _this = possibleConstructorReturn(this, (FilterSelectorBase.__proto__ || Object.getPrototypeOf(FilterSelectorBase)).call(this, props));

    _this.state = { anchorEl: null };

    _this.handleButtonClick = function (event) {
      _this.setState({ anchorEl: event.currentTarget });
    };
    _this.handleMenuClose = function () {
      _this.setState({ anchorEl: null });
    };
    _this.handleMenuItemClick = function (nextValue) {
      var onChange = _this.props.onChange;

      _this.setState({ anchorEl: null });
      onChange(nextValue);
    };
    return _this;
  }

  createClass(FilterSelectorBase, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          availableValues = _props.availableValues,
          disabled = _props.disabled,
          getMessage = _props.getMessage,
          Icon = _props.iconComponent,
          classes = _props.classes;
      var anchorEl = this.state.anchorEl;

      return availableValues.length ? React.createElement(
        React.Fragment,
        null,
        React.createElement(
          IconButton,
          {
            onClick: this.handleButtonClick,
            disabled: disabled || availableValues.length === 1
          },
          React.createElement(Icon, { type: value })
        ),
        React.createElement(
          Menu,
          {
            anchorEl: anchorEl,
            open: Boolean(anchorEl),
            onClose: this.handleMenuClose,
            MenuListProps: { dense: true }
          },
          availableValues.map(function (valueItem) {
            return React.createElement(
              MenuItem,
              {
                key: valueItem,
                selected: valueItem === value,
                onClick: function onClick() {
                  return _this2.handleMenuItemClick(valueItem);
                }
              },
              React.createElement(
                ListItemIcon,
                null,
                React.createElement(Icon, {
                  type: valueItem,
                  className: classes.icon
                })
              ),
              React.createElement(
                ListItemText,
                null,
                getMessage(valueItem)
              )
            );
          })
        )
      ) : null;
    }
  }]);
  return FilterSelectorBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? FilterSelectorBase.propTypes = {
  value: PropTypes.string,
  availableValues: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  iconComponent: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
} : void 0;

FilterSelectorBase.defaultProps = {
  value: undefined,
  availableValues: [],
  onChange: function onChange() {},
  disabled: false
};

var FilterSelector = styles.withStyles(styles$21, { name: 'FilterSelector' })(FilterSelectorBase);

var AVAILABLE_PATHS = {
  contains: 'M6.094 19.563l-2.031 0.281c-0.646 0.094-1.13 0.266-1.453 0.516-0.302 0.24-0.453 0.646-0.453 1.219 0 0.438 0.138 0.799 0.414 1.086s0.664 0.419 1.164 0.398c0.708 0 1.281-0.24 1.719-0.719 0.427-0.49 0.641-1.125 0.641-1.906v-0.875zM8.234 24.641h-2.172v-1.641c-0.677 1.24-1.661 1.859-2.953 1.859-0.927 0-1.682-0.276-2.266-0.828-0.552-0.552-0.828-1.292-0.828-2.219 0-1.927 1.068-3.052 3.203-3.375l2.875-0.438c0-1.469-0.656-2.203-1.969-2.203-1.177 0-2.224 0.427-3.141 1.281v-2.078c1.010-0.656 2.198-0.984 3.563-0.984 2.458 0 3.687 1.302 3.687 3.906v6.719zM14.734 16.797c0.521-0.583 1.167-0.875 1.938-0.875 0.74 0 1.323 0.281 1.75 0.844 0.448 0.583 0.672 1.38 0.672 2.391 0 1.188-0.24 2.13-0.719 2.828-0.49 0.677-1.13 1.016-1.922 1.016-0.719 0-1.302-0.271-1.75-0.813-0.427-0.51-0.641-1.141-0.641-1.891v-1.266c-0.021-0.906 0.203-1.651 0.672-2.234zM16.969 24.859c1.375 0 2.443-0.521 3.203-1.562 0.781-1.042 1.172-2.427 1.172-4.156 0-1.542-0.354-2.771-1.063-3.688-0.688-0.958-1.651-1.438-2.891-1.438-1.427 0-2.531 0.693-3.313 2.078v-6.781h-2.156v15.328h2.172v-1.5c0.677 1.146 1.635 1.719 2.875 1.719zM22.266 6.125c0.135 0 0.245 0.063 0.328 0.188 0.104 0.073 0.156 0.182 0.156 0.328v22.953c0 0.125-0.052 0.24-0.156 0.344-0.083 0.115-0.193 0.172-0.328 0.172h-12.281c-0.146 0-0.266-0.057-0.359-0.172-0.115-0.115-0.172-0.229-0.172-0.344v-22.953c0-0.135 0.057-0.245 0.172-0.328 0.094-0.125 0.214-0.188 0.359-0.188h12.281zM31.531 24.141c-0.76 0.479-1.693 0.719-2.797 0.719-1.427 0-2.589-0.479-3.484-1.438-0.865-0.958-1.286-2.198-1.266-3.719 0-1.688 0.448-3.052 1.344-4.094 0.917-1.042 2.208-1.573 3.875-1.594 0.854 0 1.63 0.177 2.328 0.531v2.156c-0.677-0.531-1.391-0.792-2.141-0.781-0.938 0-1.714 0.339-2.328 1.016-0.594 0.677-0.891 1.552-0.891 2.625 0 1.042 0.297 1.88 0.891 2.516 0.521 0.615 1.25 0.922 2.188 0.922 0.813 0 1.573-0.297 2.281-0.891v2.031z',
  notContains: 'M5.828 20.469v0.328c0 0.385-0.057 0.667-0.172 0.844-0.052 0.083-0.117 0.177-0.195 0.281s-0.174 0.224-0.289 0.359c-0.458 0.521-1.031 0.771-1.719 0.75-0.521 0-0.927-0.141-1.219-0.422-0.292-0.292-0.438-0.661-0.438-1.109 0-0.156 0.010-0.273 0.031-0.352s0.052-0.141 0.094-0.188 0.094-0.086 0.156-0.117 0.141-0.078 0.234-0.141c0.031-0.031 0.078-0.070 0.141-0.117s0.146-0.086 0.25-0.117h3.125zM14.016 18.328c0.010-0.406 0.070-0.729 0.18-0.969s0.289-0.49 0.539-0.75c0.479-0.604 1.13-0.906 1.953-0.906 0.75 0 1.344 0.292 1.781 0.875 0.198 0.25 0.349 0.495 0.453 0.734s0.172 0.578 0.203 1.016h-5.109zM19.078 20.469c-0.063 0.427-0.146 0.708-0.25 0.844-0.052 0.073-0.109 0.159-0.172 0.258l-0.219 0.352c-0.469 0.688-1.135 1.031-2 1.031-0.708 0-1.297-0.271-1.766-0.813l-0.305-0.359c-0.089-0.104-0.159-0.198-0.211-0.281-0.104-0.167-0.156-0.448-0.156-0.844v-0.188h5.078zM33.344 18.328l-6.875 0c0.031-0.198 0.070-0.372 0.117-0.523s0.107-0.284 0.18-0.398 0.154-0.224 0.242-0.328l0.305-0.344c0.604-0.688 1.391-1.031 2.359-1.031 0.771 0 1.51 0.266 2.219 0.797v-2.234c-0.75-0.333-1.552-0.5-2.406-0.5-1.667 0-2.974 0.531-3.922 1.594-0.396 0.427-0.708 0.859-0.938 1.297s-0.385 0.995-0.469 1.672h-2.719c-0.021-0.719-0.117-1.31-0.289-1.773s-0.424-0.914-0.758-1.352c-0.729-0.938-1.719-1.417-2.969-1.438-1.479 0-2.615 0.708-3.406 2.125v-6.953h-2.266v9.391h-3.75v-0.594c0-2.646-1.25-3.969-3.75-3.969-1.365 0-2.583 0.328-3.656 0.984v2.125c0.99-0.865 2.063-1.297 3.219-1.297 1.344 0 2.016 0.75 2.016 2.25l-2.953 0.125c-0.25 0.021-0.487 0.070-0.711 0.148l-0.633 0.227h-3.328v2.141h1.828l-0.281 0.594c-0.073 0.135-0.109 0.37-0.109 0.703 0 0.938 0.276 1.682 0.828 2.234 0.542 0.573 1.313 0.859 2.313 0.859 1.281 0 2.297-0.635 3.047-1.906v1.656h2.172v-4.141h3.75v4.141h2.297v-1.516c0.677 1.188 1.661 1.776 2.953 1.766 1.385 0 2.464-0.531 3.234-1.594 0.302-0.385 0.557-0.792 0.766-1.219 0.198-0.385 0.339-0.911 0.422-1.578h2.703c0.021 0.708 0.141 1.25 0.359 1.625 0.115 0.198 0.253 0.401 0.414 0.609s0.346 0.427 0.555 0.656c0.906 1 2.099 1.5 3.578 1.5 1.104 0 2.057-0.245 2.859-0.734v-2.109c-0.75 0.604-1.526 0.917-2.328 0.938-0.979 0-1.74-0.318-2.281-0.953l-0.328-0.328c-0.094-0.094-0.177-0.195-0.25-0.305s-0.13-0.234-0.172-0.375-0.073-0.315-0.094-0.523h6.906v-2.141zM33.297 5.688c0.146 0 0.266 0.047 0.359 0.141 0.104 0.104 0.156 0.229 0.156 0.375v23.484c0 0.135-0.052 0.255-0.156 0.359-0.094 0.115-0.214 0.172-0.359 0.172h-35.078c-0.135 0-0.26-0.057-0.375-0.172-0.094-0.115-0.135-0.234-0.125-0.359v-23.484c0-0.104 0.042-0.229 0.125-0.375 0.104-0.094 0.229-0.141 0.375-0.141h35.078z',
  startsWith: 'M6.109 20.688c0 0.813-0.219 1.474-0.656 1.984-0.448 0.531-1.010 0.786-1.688 0.766-0.51 0-0.896-0.141-1.156-0.422-0.302-0.292-0.443-0.667-0.422-1.125 0-0.615 0.151-1.042 0.453-1.281 0.177-0.135 0.378-0.245 0.602-0.328s0.497-0.146 0.82-0.188l2.047-0.313v0.906zM8.203 18.063c0-2.688-1.219-4.031-3.656-4.031-1.333 0-2.51 0.339-3.531 1.016v2.141c0.917-0.885 1.948-1.328 3.094-1.328 1.333 0 2 0.766 2 2.297l-2.891 0.453c-2.115 0.333-3.161 1.516-3.141 3.547 0 0.958 0.266 1.724 0.797 2.297 0.542 0.573 1.292 0.859 2.25 0.859 1.292 0 2.26-0.641 2.906-1.922v1.688h2.172v-7.016zM14.703 16.906c0.479-0.604 1.109-0.906 1.891-0.906 0.76 0 1.344 0.297 1.75 0.891 0.438 0.615 0.656 1.443 0.656 2.484 0 1.219-0.229 2.198-0.688 2.938-0.469 0.719-1.109 1.078-1.922 1.078-0.719 0-1.286-0.281-1.703-0.844-0.448-0.542-0.672-1.208-0.672-2v-1.313c-0.010-0.938 0.219-1.714 0.688-2.328zM16.906 25.313c1.365 0 2.422-0.542 3.172-1.625 0.771-1.115 1.156-2.563 1.156-4.344 0-1.604-0.339-2.885-1.016-3.844-0.698-0.979-1.661-1.469-2.891-1.469-1.438 0-2.531 0.719-3.281 2.156v-7.078h-2.188v15.969h2.172v-1.563c0.667 1.198 1.625 1.797 2.875 1.797zM31.375 24.563c-0.75 0.5-1.672 0.75-2.766 0.75-1.427 0-2.583-0.505-3.469-1.516-0.885-0.969-1.318-2.26-1.297-3.875 0-1.74 0.464-3.161 1.391-4.266 0.927-1.063 2.198-1.604 3.813-1.625 0.844 0 1.62 0.172 2.328 0.516v2.25c-0.688-0.563-1.406-0.828-2.156-0.797-0.927 0-1.688 0.349-2.281 1.047-0.583 0.698-0.875 1.609-0.875 2.734 0 1.094 0.281 1.969 0.844 2.625 0.542 0.656 1.286 0.984 2.234 0.984 0.781 0 1.526-0.323 2.234-0.969v2.141zM22.172 5.844c0.115 0 0.224 0.052 0.328 0.156 0.094 0.125 0.141 0.25 0.141 0.375v23.844c0 0.156-0.047 0.286-0.141 0.391-0.115 0.094-0.224 0.141-0.328 0.141h-23.469c-0.125 0-0.24-0.047-0.344-0.141-0.094-0.104-0.141-0.234-0.141-0.391v-23.844c0-0.125 0.047-0.25 0.141-0.375 0.104-0.104 0.219-0.156 0.344-0.156h23.469z',
  endsWith: 'M6.234 19.344l-2.047 0.313c-0.625 0.083-1.104 0.26-1.438 0.531-0.302 0.24-0.453 0.651-0.453 1.234 0 0.469 0.141 0.852 0.422 1.148s0.672 0.435 1.172 0.414c0.677 0 1.234-0.25 1.672-0.75 0.448-0.51 0.672-1.167 0.672-1.969v-0.922zM8.359 24.578h-2.141v-1.656c-0.667 1.26-1.656 1.891-2.969 1.891-0.938 0-1.698-0.276-2.281-0.828-0.542-0.573-0.813-1.328-0.813-2.266 0-2.021 1.063-3.188 3.188-3.5l2.891-0.484c0-1.51-0.661-2.266-1.984-2.266-1.167 0-2.214 0.443-3.141 1.328v-2.125c1.042-0.677 2.224-1.016 3.547-1.016 2.469 0 3.703 1.333 3.703 4v6.922zM14.906 16.516c0.49-0.615 1.13-0.922 1.922-0.922 0.76 0 1.339 0.297 1.734 0.891 0.438 0.615 0.656 1.438 0.656 2.469 0 1.208-0.229 2.182-0.688 2.922-0.469 0.698-1.115 1.047-1.938 1.047-0.708 0-1.276-0.276-1.703-0.828-0.458-0.552-0.688-1.214-0.688-1.984v-1.281c-0.010-0.948 0.224-1.719 0.703-2.313zM17.125 24.813c1.354 0 2.417-0.531 3.188-1.594 0.781-1.073 1.172-2.505 1.172-4.297 0-1.604-0.349-2.87-1.047-3.797-0.698-0.979-1.661-1.469-2.891-1.469-1.438 0-2.542 0.714-3.313 2.141v-7h-2.203v15.781h2.188v-1.531c0.677 1.177 1.646 1.766 2.906 1.766zM31.688 21.969c-0.698 0.635-1.453 0.953-2.266 0.953-0.958 0-1.703-0.323-2.234-0.969-0.563-0.667-0.849-1.536-0.859-2.609 0-1.115 0.297-2.016 0.891-2.703 0.594-0.698 1.359-1.047 2.297-1.047 0.76 0 1.484 0.266 2.172 0.797v-2.219c-0.708-0.344-1.49-0.516-2.344-0.516-1.625 0-2.906 0.536-3.844 1.609-0.938 1.083-1.406 2.495-1.406 4.234 0 1.594 0.438 2.875 1.313 3.844 0.885 0.979 2.052 1.469 3.5 1.469 1.083 0 2.010-0.245 2.781-0.734v-2.109zM33.188 5.563c0.104 0 0.219 0.047 0.344 0.141 0.094 0.146 0.141 0.276 0.141 0.391v23.578c0 0.146-0.047 0.281-0.141 0.406-0.125 0.094-0.24 0.141-0.344 0.141h-23.625c-0.125 0-0.24-0.047-0.344-0.141-0.094-0.135-0.135-0.271-0.125-0.406v-23.578c0-0.115 0.042-0.245 0.125-0.391 0.094-0.094 0.208-0.141 0.344-0.141h23.625z',
  equal: 'M29.438 11.797v2.75h-26.922v-2.75h26.922zM29.438 17.406v2.75h-26.922v-2.75h26.922z',
  notEqual: 'M16.906 11.797l3.016-6.547 2.094 1-2.547 5.547h9.969v2.75h-11.234l-1.328 2.859h12.563v2.75h-13.828l-2.875 6.281-2.094-0.984 2.438-5.297h-10.563v-2.75h11.828l1.297-2.859h-13.125v-2.75h14.391z',
  greaterThan: 'M24.125 16.047l-14.906 8.625-1.375-2.375 10.781-6.25-10.781-6.234 1.375-2.375z',
  greaterThanOrEqual: 'M23.031 14.328l-14.906 8.625-1.375-2.375 10.797-6.25-10.797-6.234 1.375-2.375zM23.828 15.641l1.375 2.391-14.938 8.609-1.375-2.375z',
  lessThan: 'M22.75 7.438l1.375 2.375-10.781 6.234 10.781 6.25-1.375 2.375-14.906-8.609z',
  lessThanOrEqual: 'M23.828 5.719l1.375 2.375-10.813 6.234 10.813 6.25-1.375 2.375-14.922-8.609zM23.047 24.266l-1.375 2.375-14.922-8.609 1.375-2.391z'
};

var Icon = function Icon(_ref) {
  var type = _ref.type,
      restProps = objectWithoutProperties(_ref, ['type']);

  var path = AVAILABLE_PATHS[type];
  return path ? React.createElement(
    SvgIcon,
    _extends({
      viewBox: '0 0 32 32'
    }, restProps),
    React.createElement('path', { d: path })
  ) : React.createElement(SearchIcon, restProps);
};

process.env.NODE_ENV !== "production" ? Icon.propTypes = {
  type: PropTypes.string
} : void 0;

Icon.defaultProps = {
  type: undefined
};

var defaultMessages$5 = {
  filterPlaceholder: 'Filter...',
  contains: 'Contains',
  notContains: 'Does not contain',
  startsWith: 'Starts with',
  endsWith: 'Ends with',
  equal: 'Equals',
  notEqual: 'Does not equal',
  greaterThan: 'Greater than',
  greaterThanOrEqual: 'Greater than or equal to',
  lessThan: 'Less than',
  lessThanOrEqual: 'Less than or equal to'
};

var TableFilterRow$1 = function (_React$PureComponent) {
  inherits(TableFilterRow$$1, _React$PureComponent);

  function TableFilterRow$$1() {
    classCallCheck(this, TableFilterRow$$1);
    return possibleConstructorReturn(this, (TableFilterRow$$1.__proto__ || Object.getPrototypeOf(TableFilterRow$$1)).apply(this, arguments));
  }

  createClass(TableFilterRow$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);


      return React.createElement(dxReactGrid.TableFilterRow, _extends({
        cellComponent: TableFilterCell,
        rowComponent: TableRow,
        filterSelectorComponent: FilterSelector,
        iconComponent: Icon,
        editorComponent: Editor,
        messages: _extends({}, defaultMessages$5, messages)
      }, restProps));
    }
  }]);
  return TableFilterRow$$1;
}(React.PureComponent);

TableFilterRow$1.Cell = TableFilterCell;
TableFilterRow$1.Row = TableRow;
TableFilterRow$1.Editor = Editor;
TableFilterRow$1.FilterSelector = FilterSelector;
TableFilterRow$1.Icon = Icon;

process.env.NODE_ENV !== "production" ? TableFilterRow$1.propTypes = {
  messages: PropTypes.shape({
    filterPlaceholder: PropTypes.string,
    contains: PropTypes.string,
    notContains: PropTypes.string,
    startsWith: PropTypes.string,
    endsWith: PropTypes.string,
    equal: PropTypes.string,
    notEqual: PropTypes.string,
    greaterThan: PropTypes.string,
    greaterThanOrEqual: PropTypes.string,
    lessThan: PropTypes.string,
    lessThanOrEqual: PropTypes.string
  })
} : void 0;

TableFilterRow$1.defaultProps = {
  messages: {}
};

var styles$23 = function styles$$1(theme) {
  return {
    groupingControl: {
      paddingLeft: 0,
      height: theme.spacing.unit * 3,
      cursor: 'pointer'
    },
    disabledGroupingControl: {
      cursor: 'default',
      opacity: 0.3
    }
  };
};

var GroupingControlBase = function GroupingControlBase(_ref) {
  var _classNames;

  var disabled = _ref.disabled,
      onGroup = _ref.onGroup,
      classes = _ref.classes;
  return React.createElement(
    'div',
    {
      onClick: function onClick(e) {
        if (disabled) return;
        e.stopPropagation();
        onGroup(e);
      },
      className: classNames((_classNames = {}, defineProperty(_classNames, classes.groupingControl, true), defineProperty(_classNames, classes.disabledGroupingControl, disabled), _classNames))
    },
    React.createElement(List$1, null)
  );
};

process.env.NODE_ENV !== "production" ? GroupingControlBase.propTypes = {
  onGroup: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool
} : void 0;

GroupingControlBase.defaultProps = {
  disabled: false
};

var GroupingControl = styles.withStyles(styles$23, { name: 'GroupingControl' })(GroupingControlBase);

var styles$24 = function styles$$1(theme) {
  return {
    resizeHandle: {
      position: 'absolute',
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      width: theme.spacing.unit * 2 + 'px',
      top: 0,
      right: '-' + theme.spacing.unit + 'px',
      height: '100%',
      cursor: 'col-resize',
      zIndex: 100
    },
    resizeHandleLine: {
      position: 'absolute',
      backgroundColor: theme.palette.primary.light,
      height: '50%',
      width: '1px',
      top: '25%',
      transition: 'all linear 100ms'
    },
    resizeHandleFirstLine: {
      left: theme.spacing.unit - 1 + 'px'
    },
    resizeHandleSecondLine: {
      left: theme.spacing.unit + 1 + 'px'
    },
    resizeHandleLineActive: {
      left: theme.spacing.unit + 'px'
    },
    resizeHandleActive: {
      '& $resizeHandleLine': {
        opacity: '1',
        backgroundColor: theme.palette.primary.light,
        height: 'calc(100% - 4px)',
        top: '2px'
      }
    }
  };
};

var ResizingControlBase = function (_React$PureComponent) {
  inherits(ResizingControlBase, _React$PureComponent);

  function ResizingControlBase(props) {
    classCallCheck(this, ResizingControlBase);

    var _this = possibleConstructorReturn(this, (ResizingControlBase.__proto__ || Object.getPrototypeOf(ResizingControlBase)).call(this, props));

    _this.state = {
      resizing: false
    };

    _this.onResizeStart = function (_ref) {
      var x = _ref.x;

      _this.resizeStartingX = x;
      _this.setState({ resizing: true });
    };
    _this.onResizeUpdate = function (_ref2) {
      var x = _ref2.x;
      var onWidthDraft = _this.props.onWidthDraft;

      onWidthDraft({ shift: x - _this.resizeStartingX });
    };
    _this.onResizeEnd = function (_ref3) {
      var x = _ref3.x;
      var _this$props = _this.props,
          onWidthChange = _this$props.onWidthChange,
          onWidthDraftCancel = _this$props.onWidthDraftCancel;

      onWidthDraftCancel();
      onWidthChange({ shift: x - _this.resizeStartingX });
      _this.setState({ resizing: false });
    };
    return _this;
  }

  createClass(ResizingControlBase, [{
    key: 'render',
    value: function render() {
      var _classNames, _classNames2, _classNames3;

      var _props = this.props,
          classes = _props.classes,
          resizeHandleOpacityClass = _props.resizeHandleOpacityClass;
      var resizing = this.state.resizing;


      return React.createElement(
        dxReactCore.Draggable,
        {
          onStart: this.onResizeStart,
          onUpdate: this.onResizeUpdate,
          onEnd: this.onResizeEnd
        },
        React.createElement(
          'div',
          {
            className: classNames((_classNames = {}, defineProperty(_classNames, classes.resizeHandle, true), defineProperty(_classNames, classes.resizeHandleActive, resizing), _classNames))
          },
          React.createElement('div', {
            className: classNames((_classNames2 = {}, defineProperty(_classNames2, resizeHandleOpacityClass, true), defineProperty(_classNames2, classes.resizeHandleLine, true), defineProperty(_classNames2, classes.resizeHandleFirstLine, true), defineProperty(_classNames2, classes.resizeHandleLineActive, resizing), _classNames2))
          }),
          React.createElement('div', {
            className: classNames((_classNames3 = {}, defineProperty(_classNames3, resizeHandleOpacityClass, true), defineProperty(_classNames3, classes.resizeHandleLine, true), defineProperty(_classNames3, classes.resizeHandleSecondLine, true), defineProperty(_classNames3, classes.resizeHandleLineActive, resizing), _classNames3))
          })
        )
      );
    }
  }]);
  return ResizingControlBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? ResizingControlBase.propTypes = {
  onWidthChange: PropTypes.func.isRequired,
  onWidthDraft: PropTypes.func.isRequired,
  onWidthDraftCancel: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  resizeHandleOpacityClass: PropTypes.string.isRequired
} : void 0;

var ResizingControl = styles.withStyles(styles$24, { name: 'ResizingControl' })(ResizingControlBase);

var styles$22 = function styles$$1(theme) {
  return {
    plainTitle: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineHeight: theme.spacing.unit * 3 + 'px'
    },
    cell: {
      outline: 'none',
      position: 'relative',
      overflow: 'visible',
      paddingRight: theme.spacing.unit,
      paddingLeft: theme.spacing.unit,
      '&:first-child': {
        paddingLeft: theme.spacing.unit * 3
      },
      '&:hover $resizeHandleLine': {
        opacity: 1
      }
    },
    resizeHandleLine: {
      opacity: 0
    },
    '@media (pointer: fine)': {
      resizeHandleLine: {
        opacity: 0
      },
      resizeHandleActive: {
        '& $resizeHandleLine': {
          opacity: 1
        }
      },
      resizeHandle: {
        '&:hover $resizeHandleLine': {
          opacity: 1
        }
      }
    },
    cellNoUserSelect: {
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none'
    },
    cellDraggable: {
      cursor: 'pointer'
    },
    cellDimmed: {
      opacity: 0.3
    },
    cellRight: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    cellCenter: {
      textAlign: 'center'
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    cellNoWrap: {
      whiteSpace: 'nowrap'
    }
  };
};

var TableHeaderCellBase = function (_React$PureComponent) {
  inherits(TableHeaderCellBase, _React$PureComponent);

  function TableHeaderCellBase(props) {
    classCallCheck(this, TableHeaderCellBase);

    var _this = possibleConstructorReturn(this, (TableHeaderCellBase.__proto__ || Object.getPrototypeOf(TableHeaderCellBase)).call(this, props));

    _this.state = {
      dragging: false
    };
    return _this;
  }

  createClass(TableHeaderCellBase, [{
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props = this.props,
          style = _props.style,
          column = _props.column,
          tableColumn = _props.tableColumn,
          showGroupingControls = _props.showGroupingControls,
          onGroup = _props.onGroup,
          groupingEnabled = _props.groupingEnabled,
          draggingEnabled = _props.draggingEnabled,
          resizingEnabled = _props.resizingEnabled,
          onWidthChange = _props.onWidthChange,
          onWidthDraft = _props.onWidthDraft,
          onWidthDraftCancel = _props.onWidthDraftCancel,
          classes = _props.classes,
          getMessage = _props.getMessage,
          tableRow = _props.tableRow,
          className = _props.className,
          children = _props.children,
          showSortingControls = _props.showSortingControls,
          sortingDirection = _props.sortingDirection,
          sortingEnabled = _props.sortingEnabled,
          onSort = _props.onSort,
          before = _props.before,
          restProps = objectWithoutProperties(_props, ['style', 'column', 'tableColumn', 'showGroupingControls', 'onGroup', 'groupingEnabled', 'draggingEnabled', 'resizingEnabled', 'onWidthChange', 'onWidthDraft', 'onWidthDraftCancel', 'classes', 'getMessage', 'tableRow', 'className', 'children', 'showSortingControls', 'sortingDirection', 'sortingEnabled', 'onSort', 'before']);
      var dragging = this.state.dragging;

      var align = tableColumn && tableColumn.align || 'left';

      var tableCellClasses = classNames((_classNames = {}, defineProperty(_classNames, classes.cell, true), defineProperty(_classNames, classes.cellRight, align === 'right'), defineProperty(_classNames, classes.cellCenter, align === 'center'), defineProperty(_classNames, classes.cellNoUserSelect, draggingEnabled), defineProperty(_classNames, classes.cellDraggable, draggingEnabled), defineProperty(_classNames, classes.cellDimmed, dragging || tableColumn && tableColumn.draft), defineProperty(_classNames, classes.cellNoWrap, !(tableColumn && tableColumn.wordWrapEnabled)), _classNames), className);
      var cellLayout = React.createElement(
        TableCell,
        _extends({
          style: style,
          className: tableCellClasses,
          numeric: align === 'right'
        }, restProps),
        React.createElement(
          'div',
          { className: classes.container },
          children,
          showGroupingControls && React.createElement(
            'div',
            { className: classes.controls },
            React.createElement(GroupingControl, {
              disabled: !groupingEnabled,
              onGroup: onGroup
            })
          )
        ),
        resizingEnabled && React.createElement(ResizingControl, {
          onWidthChange: onWidthChange,
          onWidthDraft: onWidthDraft,
          onWidthDraftCancel: onWidthDraftCancel,
          resizeHandleOpacityClass: classes.resizeHandleLine
        })
      );

      return draggingEnabled ? React.createElement(
        dxReactCore.DragSource,
        {
          ref: function ref(element) {
            _this2.cellRef = element;
          },
          payload: [{ type: 'column', columnName: column.name }],
          onStart: function onStart() {
            return _this2.setState({ dragging: true });
          },
          onEnd: function onEnd() {
            return _this2.cellRef && _this2.setState({ dragging: false });
          }
        },
        cellLayout
      ) : cellLayout;
    }
  }]);
  return TableHeaderCellBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? TableHeaderCellBase.propTypes = {
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
  column: PropTypes.object,
  style: PropTypes.object,
  showSortingControls: PropTypes.bool,
  sortingEnabled: PropTypes.bool,
  sortingDirection: PropTypes.oneOf(['asc', 'desc', null]),
  onSort: PropTypes.func,
  showGroupingControls: PropTypes.bool,
  groupingEnabled: PropTypes.bool,
  onGroup: PropTypes.func,
  draggingEnabled: PropTypes.bool,
  resizingEnabled: PropTypes.bool,
  onWidthChange: PropTypes.func,
  onWidthDraft: PropTypes.func,
  onWidthDraftCancel: PropTypes.func,
  classes: PropTypes.object.isRequired,
  getMessage: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  before: PropTypes.node
} : void 0;

TableHeaderCellBase.defaultProps = {
  column: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  style: null,
  showSortingControls: false,
  sortingDirection: undefined,
  sortingEnabled: false,
  onSort: undefined,
  showGroupingControls: false,
  groupingEnabled: false,
  onGroup: undefined,
  draggingEnabled: false,
  resizingEnabled: false,
  onWidthChange: undefined,
  onWidthDraft: undefined,
  onWidthDraftCancel: undefined,
  className: undefined,
  children: undefined,
  before: undefined
};

var TableHeaderCell = styles.withStyles(styles$22, { name: 'TableHeaderCell' })(TableHeaderCellBase);

var styles$25 = {
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  alignCenter: {
    justifyContent: 'center'
  },
  alignRight: {
    justifyContent: 'flex-end'
  }
};

var ContentBase = function ContentBase(_ref) {
  var _classNames;

  var column = _ref.column,
      align = _ref.align,
      children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['column', 'align', 'children', 'classes', 'className']);
  return React.createElement(
    'div',
    _extends({
      className: classNames((_classNames = {}, defineProperty(_classNames, classes.content, true), defineProperty(_classNames, classes.alignCenter, align === 'center'), defineProperty(_classNames, classes.alignRight, align === 'right'), _classNames), className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? ContentBase.propTypes = {
  column: PropTypes.object,
  align: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

ContentBase.defaultProps = {
  column: undefined,
  align: 'left',
  className: null,
  children: undefined
};

var Content = styles.withStyles(styles$25, { name: 'Content' })(ContentBase);

var ENTER_KEY_CODE$1 = 13;
var SPACE_KEY_CODE$1 = 32;

var styles$26 = function styles$$1() {
  return {
    root: {
      width: '100%',
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none'
    },
    tooltipRoot: {
      display: 'block',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    sortLabelRoot: {
      maxWidth: '100%'
    },
    sortLabelRight: {
      flexDirection: 'row-reverse'
    },
    sortLabelActive: {
      color: 'inherit'
    }
  };
};

var _onClick = function _onClick(e, onSort) {
  var isActionKeyDown = e.keyCode === ENTER_KEY_CODE$1 || e.keyCode === SPACE_KEY_CODE$1;
  var isMouseClick = e.keyCode === undefined;

  var cancelSortingRelatedKey = e.metaKey || e.ctrlKey;
  var direction = (isMouseClick || isActionKeyDown) && cancelSortingRelatedKey ? null : undefined;
  var keepOther = e.shiftKey || cancelSortingRelatedKey;

  e.preventDefault();
  onSort({ direction: direction, keepOther: keepOther });
};

var SortLabelBase = function SortLabelBase(_ref) {
  var _classNames;

  var column = _ref.column,
      align = _ref.align,
      direction = _ref.direction,
      children = _ref.children,
      onSort = _ref.onSort,
      classes = _ref.classes,
      getMessage = _ref.getMessage,
      disabled = _ref.disabled,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['column', 'align', 'direction', 'children', 'onSort', 'classes', 'getMessage', 'disabled', 'className']);
  return React.createElement(
    'div',
    _extends({
      className: classNames(classes.root, className)
    }, restProps),
    React.createElement(
      Tooltip,
      {
        title: getMessage('sortingHint'),
        placement: align === 'right' ? 'bottom-end' : 'bottom-start',
        enterDelay: 300,
        classes: {
          tooltip: classes.tooltipRoot
        }
      },
      React.createElement(
        TableSortLabel,
        {
          active: !!direction,
          direction: direction === null ? undefined : direction,
          onClick: function onClick(e) {
            return _onClick(e, onSort);
          },
          disabled: disabled,
          classes: {
            root: classNames((_classNames = {}, defineProperty(_classNames, classes.sortLabelRoot, true), defineProperty(_classNames, classes.sortLabelRight, align === 'right'), _classNames)),
            active: classes.sortLabelActive
          }
        },
        children
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? SortLabelBase.propTypes = {
  column: PropTypes.object,
  align: PropTypes.string,
  direction: PropTypes.oneOf(['asc', 'desc', null]),
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string
} : void 0;

SortLabelBase.defaultProps = {
  column: undefined,
  direction: undefined,
  disabled: false,
  align: 'left',
  className: null,
  children: undefined
};

var SortLabel = styles.withStyles(styles$26, { name: 'SortLabel' })(SortLabelBase);

var styles$27 = {
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
};

var TitelBase = function TitelBase(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['children', 'classes', 'className']);
  return React.createElement(
    'span',
    _extends({
      className: classNames(classes.title, className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? TitelBase.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

TitelBase.defaultProps = {
  className: null,
  children: undefined
};

var Title = styles.withStyles(styles$27, { name: 'Title' })(TitelBase);

var defaultMessages$6 = {
  sortingHint: 'Sort'
};

var TableHeaderRow$1 = function (_React$PureComponent) {
  inherits(TableHeaderRow$$1, _React$PureComponent);

  function TableHeaderRow$$1() {
    classCallCheck(this, TableHeaderRow$$1);
    return possibleConstructorReturn(this, (TableHeaderRow$$1.__proto__ || Object.getPrototypeOf(TableHeaderRow$$1)).apply(this, arguments));
  }

  createClass(TableHeaderRow$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);


      return React.createElement(dxReactGrid.TableHeaderRow, _extends({
        cellComponent: TableHeaderCell,
        contentComponent: Content,
        rowComponent: TableRow,
        sortLabelComponent: SortLabel,
        titleComponent: Title,
        messages: _extends({}, defaultMessages$6, messages)
      }, restProps));
    }
  }]);
  return TableHeaderRow$$1;
}(React.PureComponent);

TableHeaderRow$1.Cell = TableHeaderCell;
TableHeaderRow$1.Content = Content;
TableHeaderRow$1.Row = TableRow;
TableHeaderRow$1.SortLabel = SortLabel;
TableHeaderRow$1.Title = Title;

process.env.NODE_ENV !== "production" ? TableHeaderRow$1.propTypes = {
  messages: PropTypes.shape({
    sortingHint: PropTypes.string
  })
} : void 0;

TableHeaderRow$1.defaultProps = {
  messages: {}
};

var styles$28 = function styles$$1(theme) {
  return {
    cell: {
      paddingRight: theme.spacing.unit,
      paddingLeft: theme.spacing.unit,
      '&:first-child': {
        paddingLeft: theme.spacing.unit * 3,
        borderLeft: 0
      },
      '&:last-child': {
        paddingRight: theme.spacing.unit * 3,
        borderRight: 0
      },
      height: theme.spacing.unit * 6,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      borderBottom: getBorder(theme),
      borderLeft: getBorder(theme),
      borderRight: getBorder(theme)
    }
  };
};

var CellBase = function CellBase(_ref) {
  var column = _ref.column,
      value = _ref.value,
      children = _ref.children,
      classes = _ref.classes,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      row = _ref.row,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['column', 'value', 'children', 'classes', 'tableRow', 'tableColumn', 'row', 'className']);
  return React.createElement(
    TableCell,
    _extends({
      className: classNames(classes.cell, className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? CellBase.propTypes = {
  value: PropTypes.any,
  column: PropTypes.object,
  row: PropTypes.any,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  className: PropTypes.string
} : void 0;

CellBase.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined
};

var Cell = styles.withStyles(styles$28, { name: 'Cell' })(CellBase);

var styles$29 = function styles$$1(theme) {
  return {
    headerCellBorder: {
      borderLeft: getBorder(theme),
      borderRight: getBorder(theme),
      borderTop: 'none',
      '&:first-child': {
        borderLeft: 0
      },
      '&:last-child': {
        borderRight: 0
      },
      verticalAlign: 'bottom',
      paddingBottom: theme.spacing.unit * 2
    }
  };
};

var BandedHeaderCellBase = function BandedHeaderCellBase(_ref) {
  var HeaderCellComponent = _ref.component,
      className = _ref.className,
      classes = _ref.classes,
      restProps = objectWithoutProperties(_ref, ['component', 'className', 'classes']);
  return React.createElement(HeaderCellComponent, _extends({
    className: classNames(classes.headerCellBorder, className)
  }, restProps));
};

process.env.NODE_ENV !== "production" ? BandedHeaderCellBase.propTypes = {
  component: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

BandedHeaderCellBase.defaultProps = {
  className: undefined
};

var BandedHeaderCell = styles.withStyles(styles$29, { name: 'BandedHeaderCell' })(BandedHeaderCellBase);

var styles$30 = {
  emptyCell: {
    display: 'none'
  }
};

var InvisibleCellBase = function InvisibleCellBase(_ref) {
  var classes = _ref.classes;
  return React.createElement(TableCell, { className: classes.emptyCell });
};

process.env.NODE_ENV !== "production" ? InvisibleCellBase.propTypes = {
  classes: PropTypes.object.isRequired
} : void 0;

var InvisibleCell = styles.withStyles(styles$30, { name: 'InvisibleCell' })(InvisibleCellBase);

var styles$31 = {
  row: {
    height: 'auto'
  }
};

var RowBase = function RowBase(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      row = _ref.row,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['children', 'classes', 'className', 'row', 'tableRow', 'tableColumn']);
  return React.createElement(
    TableRowMUI,
    _extends({
      className: classNames(classes.row, className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? RowBase.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  row: PropTypes.any,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  className: PropTypes.string
} : void 0;

RowBase.defaultProps = {
  children: undefined,
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined
};

var Row = styles.withStyles(styles$31, { name: 'Row' })(RowBase);

var TableBandHeader$1 = function (_React$PureComponent) {
  inherits(TableBandHeader$$1, _React$PureComponent);

  function TableBandHeader$$1() {
    classCallCheck(this, TableBandHeader$$1);
    return possibleConstructorReturn(this, (TableBandHeader$$1.__proto__ || Object.getPrototypeOf(TableBandHeader$$1)).apply(this, arguments));
  }

  createClass(TableBandHeader$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactGrid.TableBandHeader, _extends({
        cellComponent: Cell,
        rowComponent: Row,
        bandedHeaderCellComponent: BandedHeaderCell,
        invisibleCellComponent: InvisibleCell
      }, this.props));
    }
  }]);
  return TableBandHeader$$1;
}(React.PureComponent);

TableBandHeader$1.Cell = Cell;
TableBandHeader$1.Row = Row;
TableBandHeader$1.BandedHeaderCell = BandedHeaderCell;

var styles$32 = function styles$$1(theme) {
  return {
    cell: {
      paddingRight: theme.spacing.unit,
      paddingLeft: theme.spacing.unit
    },
    inputRoot: {
      width: '100%'
    },
    inputRight: {
      textAlign: 'right'
    },
    inputCenter: {
      textAlign: 'center'
    }
  };
};

var EditCellBase = function EditCellBase(_ref) {
  var _classNames;

  var column = _ref.column,
      value = _ref.value,
      onValueChange = _ref.onValueChange,
      style = _ref.style,
      classes = _ref.classes,
      children = _ref.children,
      row = _ref.row,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      editingEnabled = _ref.editingEnabled,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['column', 'value', 'onValueChange', 'style', 'classes', 'children', 'row', 'tableRow', 'tableColumn', 'editingEnabled', 'className']);

  var inputClasses = classNames((_classNames = {}, defineProperty(_classNames, classes.inputRight, tableColumn && tableColumn.align === 'right'), defineProperty(_classNames, classes.inputCenter, tableColumn && tableColumn.align === 'center'), _classNames));

  return React.createElement(
    TableCell,
    _extends({
      className: classNames(classes.cell, className),
      style: style
    }, restProps),
    children || React.createElement(Input, {
      className: classes.inputRoot,
      classes: { input: inputClasses },
      value: value || '',
      disabled: !editingEnabled,
      onChange: function onChange(e) {
        return onValueChange(e.target.value);
      }
    })
  );
};

process.env.NODE_ENV !== "production" ? EditCellBase.propTypes = {
  column: PropTypes.object,
  row: PropTypes.any,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  value: PropTypes.any,
  onValueChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  classes: PropTypes.object.isRequired,
  editingEnabled: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
} : void 0;

EditCellBase.defaultProps = {
  column: undefined,
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  value: '',
  style: null,
  children: undefined,
  className: undefined,
  editingEnabled: true
};

var EditCell = styles.withStyles(styles$32, { name: 'EditCell' })(EditCellBase);

var TableEditRow$1 = function (_React$PureComponent) {
  inherits(TableEditRow$$1, _React$PureComponent);

  function TableEditRow$$1() {
    classCallCheck(this, TableEditRow$$1);
    return possibleConstructorReturn(this, (TableEditRow$$1.__proto__ || Object.getPrototypeOf(TableEditRow$$1)).apply(this, arguments));
  }

  createClass(TableEditRow$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactGrid.TableEditRow, _extends({
        cellComponent: EditCell,
        rowComponent: TableRow
      }, this.props));
    }
  }]);
  return TableEditRow$$1;
}(React.PureComponent);

TableEditRow$1.Cell = EditCell;
TableEditRow$1.Row = TableRow;

var styles$33 = function styles$$1(theme) {
  return {
    button: {
      padding: theme.spacing.unit,
      minWidth: 40
    },
    headingCell: {
      whiteSpace: 'nowrap',
      textAlign: 'center',
      padding: '0 ' + theme.spacing.unit * 2 + 'px 0 ' + theme.spacing.unit * 3 + 'px'
    },
    cell: {
      whiteSpace: 'nowrap',
      textAlign: 'center',
      padding: '0 ' + theme.spacing.unit * 2 + 'px 0 ' + theme.spacing.unit * 3 + 'px'
    },
    alignWithRowSpan: {
      verticalAlign: 'bottom',
      paddingBottom: theme.spacing.unit * 1.25
    }
  };
};

var withEditColumnStyles = styles.withStyles(styles$33, { name: 'EditColumn' });

var CommandButtonBase = function CommandButtonBase(_ref) {
  var onExecute = _ref.onExecute,
      text = _ref.text,
      classes = _ref.classes,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['onExecute', 'text', 'classes', 'className']);
  return React.createElement(
    Button,
    _extends({
      color: 'primary',
      className: classNames(classes.button, className),
      onClick: function onClick(e) {
        e.stopPropagation();
        onExecute();
      }
    }, restProps),
    text
  );
};
process.env.NODE_ENV !== "production" ? CommandButtonBase.propTypes = {
  onExecute: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

CommandButtonBase.defaultProps = {
  className: undefined
};

var CommandButton = withEditColumnStyles(CommandButtonBase);

var EditCommandHeadingCellBase = function EditCommandHeadingCellBase(_ref2) {
  var _classNames;

  var children = _ref2.children,
      style = _ref2.style,
      classes = _ref2.classes,
      className = _ref2.className,
      tableRow = _ref2.tableRow,
      tableColumn = _ref2.tableColumn,
      rowSpan = _ref2.rowSpan,
      restProps = objectWithoutProperties(_ref2, ['children', 'style', 'classes', 'className', 'tableRow', 'tableColumn', 'rowSpan']);
  return React.createElement(
    TableCell,
    _extends({
      className: classNames((_classNames = {}, defineProperty(_classNames, classes.headingCell, true), defineProperty(_classNames, classes.alignWithRowSpan, rowSpan > 1), _classNames), className),
      rowSpan: rowSpan
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? EditCommandHeadingCellBase.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  rowSpan: PropTypes.number
} : void 0;

EditCommandHeadingCellBase.defaultProps = {
  children: undefined,
  style: null,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  rowSpan: undefined
};

var EditCommandHeadingCell = withEditColumnStyles(EditCommandHeadingCellBase);

var EditCommandCellBase = function EditCommandCellBase(_ref3) {
  var tableRow = _ref3.tableRow,
      tableColumn = _ref3.tableColumn,
      row = _ref3.row,
      children = _ref3.children,
      style = _ref3.style,
      classes = _ref3.classes,
      className = _ref3.className,
      restProps = objectWithoutProperties(_ref3, ['tableRow', 'tableColumn', 'row', 'children', 'style', 'classes', 'className']);
  return React.createElement(
    TableCell,
    _extends({
      className: classNames(classes.cell, className),
      style: style
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? EditCommandCellBase.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  row: PropTypes.any
} : void 0;

EditCommandCellBase.defaultProps = {
  children: undefined,
  style: null,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  row: undefined
};

var EditCommandCell = withEditColumnStyles(EditCommandCellBase);

var defaultMessages$7 = {
  addCommand: 'New',
  editCommand: 'Edit',
  deleteCommand: 'Delete',
  commitCommand: 'Save',
  cancelCommand: 'Cancel'
};

var TableEditColumn$1 = function (_React$PureComponent) {
  inherits(TableEditColumn$$1, _React$PureComponent);

  function TableEditColumn$$1() {
    classCallCheck(this, TableEditColumn$$1);
    return possibleConstructorReturn(this, (TableEditColumn$$1.__proto__ || Object.getPrototypeOf(TableEditColumn$$1)).apply(this, arguments));
  }

  createClass(TableEditColumn$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);


      return React.createElement(dxReactGrid.TableEditColumn, _extends({
        cellComponent: EditCommandCell,
        headerCellComponent: EditCommandHeadingCell,
        commandComponent: CommandButton,
        messages: _extends({}, defaultMessages$7, messages),
        width: 150
      }, restProps));
    }
  }]);
  return TableEditColumn$$1;
}(React.PureComponent);

TableEditColumn$1.Command = CommandButton;
TableEditColumn$1.Cell = EditCommandCell;
TableEditColumn$1.HeaderCell = EditCommandHeadingCell;

process.env.NODE_ENV !== "production" ? TableEditColumn$1.propTypes = {
  messages: PropTypes.shape({
    addCommand: PropTypes.string,
    editCommand: PropTypes.string,
    deleteCommand: PropTypes.string,
    commitCommand: PropTypes.string,
    cancelCommand: PropTypes.string
  })
} : void 0;

TableEditColumn$1.defaultProps = {
  messages: {}
};

var styles$34 = function styles$$1(theme) {
  return {
    emptyMessage: {
      margin: '0 auto',
      padding: theme.spacing.unit * 5 + 'px 0',
      fontFamily: theme.typography.fontFamily,
      color: theme.typography.subheading.color,
      fontSize: theme.typography.subheading.fontSize
    }
  };
};

var EmptyMessageBase = function EmptyMessageBase(_ref) {
  var getMessage = _ref.getMessage,
      classes = _ref.classes,
      restProps = objectWithoutProperties(_ref, ['getMessage', 'classes']);
  return React.createElement(
    Toolbar$1,
    restProps,
    React.createElement(
      'big',
      { className: classes.emptyMessage },
      getMessage('noColumns')
    )
  );
};

process.env.NODE_ENV !== "production" ? EmptyMessageBase.propTypes = {
  getMessage: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
} : void 0;

var EmptyMessage = styles.withStyles(styles$34, { name: 'EmptyMessage' })(EmptyMessageBase);

var defaultMessages$8 = {
  noColumns: 'Nothing to show'
};

var TableColumnVisibility$1 = function (_React$PureComponent) {
  inherits(TableColumnVisibility$$1, _React$PureComponent);

  function TableColumnVisibility$$1() {
    classCallCheck(this, TableColumnVisibility$$1);
    return possibleConstructorReturn(this, (TableColumnVisibility$$1.__proto__ || Object.getPrototypeOf(TableColumnVisibility$$1)).apply(this, arguments));
  }

  createClass(TableColumnVisibility$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);


      return React.createElement(dxReactGrid.TableColumnVisibility, _extends({
        emptyMessageComponent: EmptyMessage,
        messages: _extends({}, defaultMessages$8, messages)
      }, restProps));
    }
  }]);
  return TableColumnVisibility$$1;
}(React.PureComponent);

TableColumnVisibility$1.EmptyMessage = EmptyMessage;

process.env.NODE_ENV !== "production" ? TableColumnVisibility$1.propTypes = {
  messages: PropTypes.shape({
    noColumns: PropTypes.string
  })
} : void 0;

TableColumnVisibility$1.defaultProps = {
  messages: {}
};

var TableReorderingCell = function TableReorderingCell(_ref) {
  var style = _ref.style,
      getCellDimensions = _ref.getCellDimensions;

  var refHandler = function refHandler(node$$1) {
    return node$$1 && getCellDimensions(function () {
      var _node$getBoundingClie = node$$1.getBoundingClientRect(),
          left = _node$getBoundingClie.left,
          right = _node$getBoundingClie.right;

      return { left: left, right: right };
    });
  };
  return React.createElement('td', {
    ref: refHandler,
    style: _extends({}, style, { padding: 0 })
  });
};

process.env.NODE_ENV !== "production" ? TableReorderingCell.propTypes = {
  getCellDimensions: PropTypes.func.isRequired,
  style: PropTypes.object
} : void 0;

TableReorderingCell.defaultProps = {
  style: null
};

var TableContainer$1 = function TableContainer(_ref) {
  var onOver = _ref.onOver,
      onLeave = _ref.onLeave,
      onDrop = _ref.onDrop,
      children = _ref.children;
  return React.createElement(
    dxReactCore.DropTarget,
    {
      onOver: onOver,
      onLeave: onLeave,
      onDrop: onDrop
    },
    children
  );
};

// eslint-disable-next-line react/prop-types
var ReorderingRow = function ReorderingRow(_ref2) {
  var style = _ref2.style,
      restParams = objectWithoutProperties(_ref2, ['style']);
  return React.createElement(TableRow, _extends({
    style: _extends({}, style, {
      visibility: 'hidden'
    })
  }, restParams));
};

var TableColumnReordering$1 = function TableColumnReordering$$1(props) {
  return React.createElement(dxReactGrid.TableColumnReordering, _extends({
    tableContainerComponent: TableContainer$1,
    rowComponent: ReorderingRow,
    cellComponent: TableReorderingCell
  }, props));
};

var TableColumnResizing$1 = function (_React$PureComponent) {
  inherits(TableColumnResizing$$1, _React$PureComponent);

  function TableColumnResizing$$1() {
    classCallCheck(this, TableColumnResizing$$1);
    return possibleConstructorReturn(this, (TableColumnResizing$$1.__proto__ || Object.getPrototypeOf(TableColumnResizing$$1)).apply(this, arguments));
  }

  createClass(TableColumnResizing$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          minColumnWidth = _props.minColumnWidth,
          restProps = objectWithoutProperties(_props, ['minColumnWidth']);

      return React.createElement(dxReactGrid.TableColumnResizing, _extends({}, restProps, {
        minColumnWidth: minColumnWidth
      }));
    }
  }]);
  return TableColumnResizing$$1;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? TableColumnResizing$1.propTypes = {
  minColumnWidth: PropTypes.number
} : void 0;

TableColumnResizing$1.defaultProps = {
  minColumnWidth: 40
};

var styles$35 = function styles$$1(theme) {
  return {
    toolbar: {
      borderBottom: getBorder(theme),
      flex: 'none'
    }
  };
};

var ToolbarBase = function ToolbarBase(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['children', 'classes', 'className', 'style']);
  return React.createElement(
    Toolbar$1,
    _extends({
      style: style,
      className: classNames(classes.toolbar, className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? ToolbarBase.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
} : void 0;

ToolbarBase.defaultProps = {
  className: undefined,
  style: null
};

var Toolbar$3 = styles.withStyles(styles$35, { name: 'Toolbar' })(ToolbarBase);

var FlexibleSpace = function FlexibleSpace() {
  return React.createElement('div', { style: { flex: '0 0 0', marginLeft: 'auto' } });
};

var Toolbar$2 = function (_React$PureComponent) {
  inherits(Toolbar$$1, _React$PureComponent);

  function Toolbar$$1() {
    classCallCheck(this, Toolbar$$1);
    return possibleConstructorReturn(this, (Toolbar$$1.__proto__ || Object.getPrototypeOf(Toolbar$$1)).apply(this, arguments));
  }

  createClass(Toolbar$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactGrid.Toolbar, _extends({
        rootComponent: Toolbar$3,
        flexibleSpaceComponent: FlexibleSpace
      }, this.props));
    }
  }]);
  return Toolbar$$1;
}(React.PureComponent);

Toolbar$2.Root = Toolbar$3;

var styles$36 = function styles$$1(theme) {
  return {
    button: {
      marginTop: '-1px',
      marginBottom: '-1px',
      marginLeft: -theme.spacing.unit,
      marginRight: theme.spacing.unit * 2,
      width: theme.spacing.unit * 5,
      height: theme.spacing.unit * 5
    },
    hidden: {
      cursor: 'default',
      opacity: 0
    }
  };
};

var TableTreeExpandButtonBase = function TableTreeExpandButtonBase(_ref) {
  var _classNames;

  var visible = _ref.visible,
      expanded = _ref.expanded,
      classes = _ref.classes,
      onToggle = _ref.onToggle,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['visible', 'expanded', 'classes', 'onToggle', 'className']);
  return React.createElement(
    IconButton,
    _extends({
      className: classNames((_classNames = {}, defineProperty(_classNames, classes.button, true), defineProperty(_classNames, classes.hidden, !visible), _classNames), className),
      onClick: function onClick(e) {
        if (!visible) return;
        e.stopPropagation();
        onToggle();
      },
      tabIndex: visible ? 0 : -1
    }, restProps),
    expanded ? React.createElement(ExpandMore, null) : React.createElement(ChevronRight, null)
  );
};

process.env.NODE_ENV !== "production" ? TableTreeExpandButtonBase.propTypes = {
  visible: PropTypes.bool,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
} : void 0;

TableTreeExpandButtonBase.defaultProps = {
  visible: false,
  expanded: false,
  onToggle: function onToggle() {},
  className: undefined
};

var TableTreeExpandButton = styles.withStyles(styles$36)(TableTreeExpandButtonBase);

var styles$37 = function styles$$1(theme) {
  return {
    checkbox: {
      marginTop: '-1px',
      marginBottom: '-1px',
      marginRight: theme.spacing.unit * 2,
      marginLeft: -theme.spacing.unit * 2,
      width: theme.spacing.unit * 5,
      height: theme.spacing.unit * 5
    }
  };
};

var TableTreeCheckboxBase = function TableTreeCheckboxBase(_ref) {
  var disabled = _ref.disabled,
      checked = _ref.checked,
      indeterminate = _ref.indeterminate,
      onChange = _ref.onChange,
      classes = _ref.classes,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['disabled', 'checked', 'indeterminate', 'onChange', 'classes', 'className']);
  return React.createElement(Checkbox, _extends({
    className: classNames(classes.checkbox, className),
    checked: checked,
    indeterminate: indeterminate,
    disabled: disabled,
    onClick: function onClick(e) {
      if (disabled) return;
      e.stopPropagation();
      onChange();
    }
  }, restProps));
};

process.env.NODE_ENV !== "production" ? TableTreeCheckboxBase.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

TableTreeCheckboxBase.defaultProps = {
  disabled: false,
  checked: false,
  indeterminate: false,
  onChange: function onChange() {},
  className: undefined
};

var TableTreeCheckbox = styles.withStyles(styles$37)(TableTreeCheckboxBase);

var styles$38 = function styles$$1(theme) {
  return {
    indent: {
      marginLeft: theme.spacing.unit * 3
    }
  };
};

var TableTreeIndentBase = function TableTreeIndentBase(_ref) {
  var level = _ref.level,
      classes = _ref.classes;
  return Array.from({ length: level }).map(function (value, currentLevel) {
    return React.createElement('span', {
      // eslint-disable-next-line react/no-array-index-key
      key: currentLevel,
      className: classes.indent
    });
  });
};

process.env.NODE_ENV !== "production" ? TableTreeIndentBase.propTypes = {
  level: PropTypes.number,
  classes: PropTypes.object.isRequired
} : void 0;

TableTreeIndentBase.defaultProps = {
  level: 0
};

var TableTreeIndent = styles.withStyles(styles$38)(TableTreeIndentBase);

var styles$39 = function styles$$1() {
  return {
    content: {
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  };
};

var TableTreeContentBase = function TableTreeContentBase(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['children', 'classes', 'className']);
  return React.createElement(
    'div',
    _extends({
      className: classNames(defineProperty({}, classes.content, true), className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? TableTreeContentBase.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
} : void 0;

TableTreeContentBase.defaultProps = {
  children: undefined,
  className: undefined
};

var TableTreeContent = styles.withStyles(styles$39)(TableTreeContentBase);

var styles$40 = function styles$$1(theme) {
  return {
    cell: {
      paddingRight: theme.spacing.unit,
      paddingLeft: theme.spacing.unit,
      '&:first-child': {
        paddingLeft: theme.spacing.unit * 3
      }
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  };
};

var TableTreeCellBase = function TableTreeCellBase(_ref) {
  var column = _ref.column,
      value = _ref.value,
      children = _ref.children,
      classes = _ref.classes,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      row = _ref.row,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['column', 'value', 'children', 'classes', 'tableRow', 'tableColumn', 'row', 'className']);
  return React.createElement(
    TableCell,
    _extends({
      className: classNames(defineProperty({}, classes.cell, true), className)
    }, restProps),
    React.createElement(
      'div',
      { className: classes.container },
      children
    )
  );
};

process.env.NODE_ENV !== "production" ? TableTreeCellBase.propTypes = {
  value: PropTypes.any,
  column: PropTypes.object,
  row: PropTypes.any,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  className: PropTypes.string
} : void 0;

TableTreeCellBase.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined
};

var TableTreeCell = styles.withStyles(styles$40)(TableTreeCellBase);

var TableTreeColumn$1 = function (_React$PureComponent) {
  inherits(TableTreeColumn$$1, _React$PureComponent);

  function TableTreeColumn$$1() {
    classCallCheck(this, TableTreeColumn$$1);
    return possibleConstructorReturn(this, (TableTreeColumn$$1.__proto__ || Object.getPrototypeOf(TableTreeColumn$$1)).apply(this, arguments));
  }

  createClass(TableTreeColumn$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactGrid.TableTreeColumn, _extends({
        cellComponent: TableTreeCell,
        indentComponent: TableTreeIndent,
        expandButtonComponent: TableTreeExpandButton,
        checkboxComponent: TableTreeCheckbox,
        contentComponent: TableTreeContent
      }, this.props));
    }
  }]);
  return TableTreeColumn$$1;
}(React.PureComponent);

TableTreeColumn$1.Cell = TableTreeCell;
TableTreeColumn$1.Indent = TableTreeIndent;
TableTreeColumn$1.ExpandButton = TableTreeExpandButton;
TableTreeColumn$1.Checkbox = TableTreeCheckbox;
TableTreeColumn$1.Content = TableTreeContent;

var styles$41 = function styles$$1(theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.action.active
    }
  };
};

var SearchPanelInputBase = function SearchPanelInputBase(_ref) {
  var onValueChange = _ref.onValueChange,
      value = _ref.value,
      getMessage = _ref.getMessage,
      restProps = objectWithoutProperties(_ref, ['onValueChange', 'value', 'getMessage']);
  return React.createElement(Input, _extends({
    onChange: function onChange(e) {
      return onValueChange(e.target.value);
    },
    value: value,
    type: 'text',
    placeholder: getMessage('searchPlaceholder')
  }, restProps, {
    startAdornment: React.createElement(
      InputAdornment,
      { position: 'start' },
      React.createElement(SearchIcon, null)
    )
  }));
};

process.env.NODE_ENV !== "production" ? SearchPanelInputBase.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  getMessage: PropTypes.func.isRequired
} : void 0;
SearchPanelInputBase.defaultProps = {
  value: ''
};

var SearchPanelInput = styles.withStyles(styles$41)(SearchPanelInputBase);

var defaultMessages$9 = {
  searchPlaceholder: 'Search...'
};

var SearchPanel$1 = function (_React$PureComponent) {
  inherits(SearchPanel$$1, _React$PureComponent);

  function SearchPanel$$1() {
    classCallCheck(this, SearchPanel$$1);
    return possibleConstructorReturn(this, (SearchPanel$$1.__proto__ || Object.getPrototypeOf(SearchPanel$$1)).apply(this, arguments));
  }

  createClass(SearchPanel$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);

      return React.createElement(dxReactGrid.SearchPanel, _extends({
        inputComponent: SearchPanelInput,
        messages: _extends({}, defaultMessages$9, messages)
      }, restProps));
    }
  }]);
  return SearchPanel$$1;
}(React.PureComponent);

SearchPanel$1.Input = SearchPanelInput;

process.env.NODE_ENV !== "production" ? SearchPanel$1.propTypes = {
  messages: PropTypes.shape({
    searchPlaceholder: PropTypes.string
  })
} : void 0;

SearchPanel$1.defaultProps = {
  messages: {}
};

var styles$42 = function styles$$1(theme) {
  return {
    item: {
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.primary,
      fontSize: theme.typography.pxToRem(13),
      margin: theme.spacing.unit + 'px 0'
    }
  };
};

var TableSummaryItemBase = function TableSummaryItemBase(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['children', 'classes', 'className']);
  return React.createElement(
    'div',
    _extends({
      className: classNames(defineProperty({}, classes.item, true), className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? TableSummaryItemBase.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
} : void 0;

TableSummaryItemBase.defaultProps = {
  children: undefined,
  className: undefined
};

var TableSummaryItem = styles.withStyles(styles$42)(TableSummaryItemBase);

var defaultMessages$10 = {
  sum: 'Sum',
  min: 'Min',
  max: 'Max',
  avg: 'Avg',
  count: 'Count'
};

var TableSummaryRow$1 = function (_React$PureComponent) {
  inherits(TableSummaryRow$$1, _React$PureComponent);

  function TableSummaryRow$$1() {
    classCallCheck(this, TableSummaryRow$$1);
    return possibleConstructorReturn(this, (TableSummaryRow$$1.__proto__ || Object.getPrototypeOf(TableSummaryRow$$1)).apply(this, arguments));
  }

  createClass(TableSummaryRow$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);


      return React.createElement(dxReactGrid.TableSummaryRow, _extends({
        totalRowComponent: TableRow,
        groupRowComponent: TableRow,
        treeRowComponent: TableRow,
        totalCellComponent: TableCell$1,
        groupCellComponent: TableCell$1,
        treeCellComponent: TableCell$1,
        itemComponent: TableSummaryItem,
        treeColumnCellComponent: TableTreeCell,
        treeColumnContentComponent: TableTreeContent,
        treeColumnIndentComponent: TableTreeIndent,
        messages: _extends({}, defaultMessages$10, messages)
      }, restProps));
    }
  }]);
  return TableSummaryRow$$1;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? TableSummaryRow$1.propTypes = {
  messages: PropTypes.shape({
    sum: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    avg: PropTypes.string,
    count: PropTypes.string
  })
} : void 0;

TableSummaryRow$1.defaultProps = {
  messages: {}
};

TableSummaryRow$1.TotalRow = TableRow;
TableSummaryRow$1.GroupRow = TableRow;
TableSummaryRow$1.TreeRow = TableRow;
TableSummaryRow$1.TotalCell = TableCell$1;
TableSummaryRow$1.GroupCell = TableCell$1;
TableSummaryRow$1.TreeCell = TableCell$1;
TableSummaryRow$1.Item = TableSummaryItem;
TableSummaryRow$1.TableTreeCell = TableTreeCell;
TableSummaryRow$1.TableTreeIndent = TableTreeIndent;
TableSummaryRow$1.TableTreeContent = TableTreeContent;

exports.Grid = Grid$1;
exports.ColumnChooser = ColumnChooser$1;
exports.DragDropProvider = DragDropProvider$1;
exports.PagingPanel = PagingPanel$1;
exports.GroupingPanel = GroupingPanel$1;
exports.TableRowDetail = TableRowDetail$1;
exports.TableGroupRow = TableGroupRow$1;
exports.TableSelection = TableSelection$1;
exports.Table = Table$1;
exports.VirtualTable = VirtualTable;
exports.TableFilterRow = TableFilterRow$1;
exports.TableHeaderRow = TableHeaderRow$1;
exports.TableBandHeader = TableBandHeader$1;
exports.TableEditRow = TableEditRow$1;
exports.TableEditColumn = TableEditColumn$1;
exports.TableColumnVisibility = TableColumnVisibility$1;
exports.TableColumnReordering = TableColumnReordering$1;
exports.TableColumnResizing = TableColumnResizing$1;
exports.Toolbar = Toolbar$2;
exports.TableTreeColumn = TableTreeColumn$1;
exports.SearchPanel = SearchPanel$1;
exports.TableSummaryRow = TableSummaryRow$1;
//# sourceMappingURL=dx-react-grid-material-ui.cjs.js.map