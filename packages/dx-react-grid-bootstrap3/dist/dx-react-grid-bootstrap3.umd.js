/**
 * Bundle of @devexpress/dx-react-grid-bootstrap3
 * Generated: 2018-09-04
 * Version: 1.7.2
 * License: https://js.devexpress.com/Licensing
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('@devexpress/dx-react-grid'), require('classnames'), require('react-bootstrap'), require('@devexpress/dx-grid-core'), require('@devexpress/dx-react-core')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', '@devexpress/dx-react-grid', 'classnames', 'react-bootstrap', '@devexpress/dx-grid-core', '@devexpress/dx-react-core'], factory) :
	(factory((global.DevExpress = global.DevExpress || {}, global.DevExpress.DXReactGridBootstrap3 = {}),global.React,global.PropTypes,global.DevExpress.DXReactGrid,global.classNames,global.ReactBootstrap,global.DevExpress.DXGridCore,global.DevExpress.DXReactCore));
}(this, (function (exports,React,PropTypes,dxReactGrid,classNames,reactBootstrap,dxGridCore,dxReactCore) { 'use strict';

if (typeof process === "undefined") { var process = { env: {} }; }

classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;

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

var Root = function Root(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['children', 'className', 'style']);
  return React.createElement(
    'div',
    _extends({
      className: classNames('panel panel-default', className),
      style: _extends({
        display: 'flex',
        flexDirection: 'column'
      }, style)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? Root.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
} : void 0;

Root.defaultProps = {
  children: undefined,
  className: undefined,
  style: null
};

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

var Popover = function Popover(_ref) {
  var children = _ref.children,
      style = _ref.style;
  return React.createElement(
    'div',
    {
      className: 'dropdown-menu',
      style: _extends({
        padding: 0,
        display: 'block',
        border: 'none'
      }, style)
    },
    children
  );
};

process.env.NODE_ENV !== "production" ? Popover.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
} : void 0;

Popover.defaultProps = {
  style: null
};

var Overlay$1 = function Overlay$$1(_ref) {
  var visible = _ref.visible,
      target = _ref.target,
      children = _ref.children,
      onHide = _ref.onHide,
      restProps = objectWithoutProperties(_ref, ['visible', 'target', 'children', 'onHide']);
  return React.createElement(
    reactBootstrap.Overlay,
    _extends({
      show: visible,
      target: target,
      container: target ? target.parentElement : undefined,
      onHide: onHide,
      placement: 'bottom',
      rootClose: true,
      animation: false
    }, restProps),
    React.createElement(
      Popover,
      null,
      children
    )
  );
};

process.env.NODE_ENV !== "production" ? Overlay$1.propTypes = {
  children: PropTypes.node.isRequired,
  onHide: PropTypes.func.isRequired,
  visible: PropTypes.bool,
  target: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
} : void 0;

Overlay$1.defaultProps = {
  visible: false,
  target: null
};

var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['children', 'className', 'style']);
  return React.createElement(
    'div',
    _extends({
      className: classNames('list-group', className),
      style: _extends({ marginBottom: 0 }, style)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
} : void 0;

Container.defaultProps = {
  className: undefined,
  style: undefined
};

var Item = function Item(_ref) {
  var _ref$item = _ref.item,
      column = _ref$item.column,
      hidden = _ref$item.hidden,
      onToggle = _ref.onToggle,
      className = _ref.className,
      style = _ref.style,
      disabled = _ref.disabled,
      restProps = objectWithoutProperties(_ref, ['item', 'onToggle', 'className', 'style', 'disabled']);
  return React.createElement(
    'button',
    _extends({
      className: classNames('list-group-item', className),
      style: _extends({ outline: 'none' }, style),
      type: 'button',
      disabled: disabled,
      onClick: onToggle
    }, restProps),
    React.createElement('input', {
      type: 'checkbox',
      style: { cursor: disabled ? 'default' : 'pointer' },
      tabIndex: -1,
      checked: !hidden,
      disabled: disabled,
      onChange: onToggle,
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }),
    '\xA0',
    column.title || column.name
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
  onToggle: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
} : void 0;

Item.defaultProps = {
  onToggle: function onToggle() {},
  disabled: false,
  className: undefined,
  style: null
};

var ToggleButton = function ToggleButton(_ref) {
  var onToggle = _ref.onToggle,
      className = _ref.className,
      getMessage = _ref.getMessage,
      buttonRef = _ref.buttonRef,
      active = _ref.active,
      restProps = objectWithoutProperties(_ref, ['onToggle', 'className', 'getMessage', 'buttonRef', 'active']);
  return React.createElement(
    'button',
    _extends({
      type: 'button',
      className: classNames('btn btn-link', className),
      onClick: onToggle,
      ref: buttonRef
    }, restProps),
    React.createElement('i', { className: 'glyphicon glyphicon-eye-close' })
  );
};

process.env.NODE_ENV !== "production" ? ToggleButton.propTypes = {
  onToggle: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired,
  buttonRef: PropTypes.func.isRequired,
  className: PropTypes.string,
  active: PropTypes.bool
} : void 0;

ToggleButton.defaultProps = {
  className: undefined,
  active: false
};

var ColumnChooser$1 = function ColumnChooser$$1(props) {
  return React.createElement(dxReactGrid.ColumnChooser, _extends({
    overlayComponent: Overlay$1,
    containerComponent: Container,
    itemComponent: Item,
    toggleButtonComponent: ToggleButton
  }, props));
};

ColumnChooser$1.Container = Container;
ColumnChooser$1.Item = Item;
ColumnChooser$1.Overlay = Overlay$1;
ColumnChooser$1.ToggleButton = ToggleButton;

var Container$1 = function Container(_ref) {
  var clientOffset = _ref.clientOffset,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['clientOffset', 'style', 'className', 'children']);
  return React.createElement(
    'ul',
    _extends({
      className: classNames('list-group', className),
      style: _extends({
        cursor: 'move',
        position: 'fixed',
        zIndex: 1000,
        left: 0,
        top: 0,
        display: 'inline-block',
        transform: 'translate(calc(' + clientOffset.x + 'px - 50%), calc(' + clientOffset.y + 'px - 50%))'
      }, style)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? Container$1.propTypes = {
  clientOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
} : void 0;

Container$1.defaultProps = {
  style: null,
  className: undefined,
  children: undefined
};

var Column = function Column(_ref2) {
  var column = _ref2.column,
      className = _ref2.className,
      restProps = objectWithoutProperties(_ref2, ['column', 'className']);
  return React.createElement(
    'li',
    _extends({
      className: classNames('list-group-item', className)
    }, restProps),
    column.title
  );
};

process.env.NODE_ENV !== "production" ? Column.propTypes = {
  column: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;

Column.defaultProps = {
  className: undefined
};

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

var PageSizeSelector = function PageSizeSelector(_ref) {
  var pageSize = _ref.pageSize,
      onPageSizeChange = _ref.onPageSizeChange,
      pageSizes = _ref.pageSizes,
      getMessage = _ref.getMessage;

  var showAll = getMessage('showAll');
  return React.createElement(
    'div',
    { style: { display: 'inline-block' } },
    React.createElement(
      'select',
      {
        className: 'form-control visible-xs-inline-block',
        style: { width: 'auto' },
        value: pageSize,
        onChange: function onChange(e) {
          return onPageSizeChange(parseInt(e.target.value, 10));
        }
      },
      pageSizes.map(function (val) {
        return React.createElement(
          'option',
          { key: val, value: val },
          val || showAll
        );
      })
    ),
    React.createElement(
      'ul',
      {
        className: 'pagination hidden-xs',
        style: {
          margin: 0,
          verticalAlign: 'bottom'
        }
      },
      pageSizes.map(function (item) {
        return React.createElement(
          'li',
          { key: item, className: item === pageSize ? 'active' : '' },
          React.createElement(
            'a',
            {
              href: '#',
              onClick: function onClick(e) {
                e.preventDefault();
                onPageSizeChange(item);
              }
            },
            item || showAll
          )
        );
      })
    )
  );
};

process.env.NODE_ENV !== "production" ? PageSizeSelector.propTypes = {
  pageSize: PropTypes.number.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  getMessage: PropTypes.func.isRequired
} : void 0;

var renderPageButtons = function renderPageButtons(currentPage, totalPageCount, onCurrentPageChange) {
  var pageButtons = [];
  var maxButtonCount = 3;
  var startPage = 1;
  var endPage = totalPageCount || 1;

  if (maxButtonCount < totalPageCount) {
    startPage = dxGridCore.calculateStartPage(currentPage + 1, maxButtonCount, totalPageCount);
    endPage = startPage + maxButtonCount - 1;
  }
  if (startPage > 1) {
    pageButtons.push(React.createElement(
      reactBootstrap.Pagination.Item,
      {
        key: 1,
        onClick: function onClick() {
          return onCurrentPageChange(0);
        }
      },
      1
    ));

    if (startPage > 2) {
      pageButtons.push(React.createElement(reactBootstrap.Pagination.Ellipsis, { key: 'ellipsisStart', disabled: true }));
    }
  }

  var _loop = function _loop(page) {
    pageButtons.push(React.createElement(
      reactBootstrap.Pagination.Item,
      {
        key: page,
        onClick: function onClick() {
          return onCurrentPageChange(page - 1);
        },
        active: page === currentPage + 1,
        disabled: startPage === endPage
      },
      page
    ));
  };

  for (var page = startPage; page <= endPage; page += 1) {
    _loop(page);
  }

  if (endPage < totalPageCount) {
    if (endPage < totalPageCount - 1) {
      pageButtons.push(React.createElement(reactBootstrap.Pagination.Ellipsis, { key: 'ellipsisEnd', disabled: true }));
    }

    pageButtons.push(React.createElement(
      reactBootstrap.Pagination.Item,
      {
        key: totalPageCount,
        onClick: function onClick() {
          return onCurrentPageChange(totalPageCount - 1);
        }
      },
      totalPageCount
    ));
  }

  return pageButtons;
};

var Pagination$1 = function Pagination$$1(_ref) {
  var totalPages = _ref.totalPages,
      currentPage = _ref.currentPage,
      onCurrentPageChange = _ref.onCurrentPageChange,
      totalCount = _ref.totalCount,
      pageSize = _ref.pageSize,
      getMessage = _ref.getMessage;

  var from = dxGridCore.firstRowOnPage(currentPage, pageSize, totalCount);
  var to = dxGridCore.lastRowOnPage(currentPage, pageSize, totalCount);
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      reactBootstrap.Pagination,
      {
        style: {
          margin: 0,
          verticalAlign: 'bottom'
        },
        className: 'pull-right hidden-xs'
      },
      renderPageButtons(currentPage, totalPages, onCurrentPageChange)
    ),
    React.createElement(
      reactBootstrap.Pager,
      {
        className: 'pull-right visible-xs',
        style: { margin: 0 }
      },
      React.createElement(
        reactBootstrap.Pager.Item,
        {
          disabled: currentPage === 0,
          onClick: function onClick() {
            return onCurrentPageChange(currentPage - 1);
          }
        },
        '\xAB'
      ),
      '\xA0',
      React.createElement(
        reactBootstrap.Pager.Item,
        {
          disabled: currentPage === totalPages - 1 || totalCount === 0,
          onClick: function onClick() {
            return onCurrentPageChange(currentPage + 1);
          }
        },
        '\xBB'
      )
    ),
    React.createElement(
      'span',
      { className: 'pull-right visible-xs', style: { marginRight: '20px' } },
      React.createElement(
        'span',
        { style: { display: 'inline-block', verticalAlign: 'middle', lineHeight: '32px' } },
        getMessage('info', { from: from, to: to, count: totalCount })
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? Pagination$1.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onCurrentPageChange: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  getMessage: PropTypes.func.isRequired
} : void 0;

var Pager$1 = function Pager$$1(_ref) {
  var currentPage = _ref.currentPage,
      _onCurrentPageChange = _ref.onCurrentPageChange,
      totalPages = _ref.totalPages,
      pageSize = _ref.pageSize,
      onPageSizeChange = _ref.onPageSizeChange,
      pageSizes = _ref.pageSizes,
      totalCount = _ref.totalCount,
      getMessage = _ref.getMessage,
      className = _ref.className,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['currentPage', 'onCurrentPageChange', 'totalPages', 'pageSize', 'onPageSizeChange', 'pageSizes', 'totalCount', 'getMessage', 'className', 'style']);
  return React.createElement(
    'div',
    _extends({
      className: classNames('clearfix panel-footer', className),
      style: _extends({
        flex: 'none'
      }, style)
    }, restProps),
    !!pageSizes.length && React.createElement(PageSizeSelector, {
      pageSize: pageSize,
      onPageSizeChange: onPageSizeChange,
      pageSizes: pageSizes,
      getMessage: getMessage
    }),
    React.createElement(Pagination$1, {
      totalPages: totalPages,
      totalCount: totalCount,
      currentPage: currentPage,
      onCurrentPageChange: function onCurrentPageChange(page) {
        return _onCurrentPageChange(page);
      },
      pageSize: pageSize,
      getMessage: getMessage
    })
  );
};

process.env.NODE_ENV !== "production" ? Pager$1.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onCurrentPageChange: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  totalCount: PropTypes.number.isRequired,
  getMessage: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
} : void 0;

Pager$1.defaultProps = {
  className: undefined,
  style: null
};

var defaultMessages = {
  showAll: 'All',
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
        containerComponent: Pager$1,
        messages: _extends({}, defaultMessages, messages)
      }, restProps));
    }
  }]);
  return PagingPanel$$1;
}(React.PureComponent);

PagingPanel$1.Container = Pager$1;

process.env.NODE_ENV !== "production" ? PagingPanel$1.propTypes = {
  messages: PropTypes.shape({
    showAll: PropTypes.string,
    info: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  })
} : void 0;

PagingPanel$1.defaultProps = {
  messages: {}
};

var GroupPanelContainer = function GroupPanelContainer(_ref) {
  var children = _ref.children,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['children', 'style']);
  return React.createElement(
    'div',
    _extends({
      style: _extends({
        width: '100%',
        marginTop: '5px'
      }, style)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? GroupPanelContainer.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
} : void 0;

GroupPanelContainer.defaultProps = {
  children: undefined,
  style: null
};

var SortingIndicator = function SortingIndicator(_ref) {
  var direction = _ref.direction,
      style = _ref.style;
  return React.createElement('i', {
    className: 'glyphicon glyphicon-arrow-' + (direction === 'desc' ? 'down' : 'up'),
    style: _extends({
      top: '0',
      fontSize: '9px'
    }, style)
  });
};

process.env.NODE_ENV !== "production" ? SortingIndicator.propTypes = {
  direction: PropTypes.oneOf(['asc', 'desc']),
  style: PropTypes.object
} : void 0;

SortingIndicator.defaultProps = {
  direction: null,
  style: null
};

var ENTER_KEY_CODE = 13;
var SPACE_KEY_CODE = 32;

var isActionKey = function isActionKey(keyCode) {
  return keyCode === ENTER_KEY_CODE || keyCode === SPACE_KEY_CODE;
};

var GroupPanelItem = function GroupPanelItem(_ref) {
  var _ref$item = _ref.item,
      column = _ref$item.column,
      draft = _ref$item.draft,
      onGroup = _ref.onGroup,
      showGroupingControls = _ref.showGroupingControls,
      groupingEnabled = _ref.groupingEnabled,
      showSortingControls = _ref.showSortingControls,
      sortingDirection = _ref.sortingDirection,
      onSort = _ref.onSort,
      sortingEnabled = _ref.sortingEnabled,
      className = _ref.className,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['item', 'onGroup', 'showGroupingControls', 'groupingEnabled', 'showSortingControls', 'sortingDirection', 'onSort', 'sortingEnabled', 'className', 'style']);

  var handleSortingChange = function handleSortingChange(e) {
    var isActionKeyDown = isActionKey(e.keyCode);
    var isMouseClick = e.keyCode === undefined;

    if (!showSortingControls || !sortingEnabled || !(isActionKeyDown || isMouseClick)) return;

    var cancelSortingRelatedKey = e.metaKey || e.ctrlKey;
    var direction = (isMouseClick || isActionKeyDown) && cancelSortingRelatedKey ? null : undefined;

    e.preventDefault();
    onSort({
      direction: direction,
      keepOther: cancelSortingRelatedKey
    });
  };
  var handleUngroup = function handleUngroup(e) {
    if (!groupingEnabled) return;
    var isActionKeyDown = isActionKey(e.keyCode);
    var isMouseClick = e.keyCode === undefined;

    if (!isActionKeyDown && !isMouseClick) return;
    onGroup();
  };
  var getButtonClasses = function getButtonClasses(isDisabled) {
    return classNames({
      btn: true,
      'btn-default': true,
      disabled: isDisabled
    });
  };
  return React.createElement(
    'div',
    _extends({
      className: classNames('btn-group', className),
      style: _extends({
        marginRight: '5px',
        marginBottom: '5px'
      }, draft ? { opacity: 0.3 } : null, style)
    }, restProps),
    React.createElement(
      'span',
      _extends({
        className: getButtonClasses(!sortingEnabled && (showSortingControls || !groupingEnabled)),
        onClick: handleSortingChange,
        onKeyDown: handleSortingChange
      }, sortingEnabled ? { tabIndex: 0 } : null),
      column.title || column.name,
      showSortingControls && sortingDirection && React.createElement(
        'span',
        null,
        '\xA0',
        React.createElement(SortingIndicator, {
          direction: sortingDirection
        })
      )
    ),
    showGroupingControls && React.createElement(
      'span',
      {
        className: getButtonClasses(!groupingEnabled),
        onClick: handleUngroup
      },
      '\xA0',
      React.createElement('i', {
        className: 'glyphicon glyphicon-remove',
        style: {
          top: 0,
          fontSize: '9px',
          marginLeft: '-5px'
        }
      })
    )
  );
};

process.env.NODE_ENV !== "production" ? GroupPanelItem.propTypes = {
  item: PropTypes.shape({
    column: PropTypes.shape({
      title: PropTypes.string
    }).isRequired,
    draft: PropTypes.bool
  }).isRequired,
  showSortingControls: PropTypes.bool,
  sortingDirection: PropTypes.oneOf(['asc', 'desc', null]),
  className: PropTypes.string,
  onSort: PropTypes.func,
  onGroup: PropTypes.func,
  groupingEnabled: PropTypes.bool,
  showGroupingControls: PropTypes.bool,
  sortingEnabled: PropTypes.bool,
  style: PropTypes.object
} : void 0;

GroupPanelItem.defaultProps = {
  showSortingControls: false,
  sortingDirection: undefined,
  className: undefined,
  onSort: undefined,
  onGroup: undefined,
  showGroupingControls: false,
  sortingEnabled: false,
  groupingEnabled: false,
  style: null
};

var GroupPanelEmptyMessage = function GroupPanelEmptyMessage(_ref) {
  var getMessage = _ref.getMessage,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['getMessage', 'style']);
  return React.createElement(
    'div',
    _extends({
      style: _extends({
        padding: '7px 0'
      }, style)
    }, restProps),
    getMessage('groupByColumn')
  );
};

process.env.NODE_ENV !== "production" ? GroupPanelEmptyMessage.propTypes = {
  getMessage: PropTypes.func.isRequired,
  style: PropTypes.object
} : void 0;

GroupPanelEmptyMessage.defaultProps = {
  style: null
};

var defaultMessages$1 = {
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
        messages: _extends({}, defaultMessages$1, messages)
      }, restProps));
    }
  }]);
  return GroupingPanel$$1;
}(React.PureComponent);

GroupingPanel$1.Container = GroupPanelContainer;
GroupingPanel$1.Item = GroupPanelItem;
GroupingPanel$1.EmptyMessage = GroupPanelEmptyMessage;

process.env.NODE_ENV !== "production" ? GroupingPanel$1.propTypes = {
  showSortingControls: PropTypes.bool,
  messages: PropTypes.shape({
    groupByColumn: PropTypes.string
  })
} : void 0;

GroupingPanel$1.defaultProps = {
  showSortingControls: false,
  messages: {}
};

var ENTER_KEY_CODE$1 = 13;
var SPACE_KEY_CODE$1 = 32;

var handleMouseDown = function handleMouseDown(e) {
  e.target.style.outline = 'none';
};
var handleBlur = function handleBlur(e) {
  e.target.style.outline = '';
};

var ExpandButton = function ExpandButton(_ref) {
  var visible = _ref.visible,
      expanded = _ref.expanded,
      onToggle = _ref.onToggle,
      className = _ref.className,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['visible', 'expanded', 'onToggle', 'className', 'style']);

  var fireToggle = function fireToggle() {
    if (!visible) return;
    onToggle(!expanded);
  };
  var handleClick = function handleClick(e) {
    e.stopPropagation();
    fireToggle();
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === ENTER_KEY_CODE$1 || e.keyCode === SPACE_KEY_CODE$1) {
      e.preventDefault();
      fireToggle();
    }
  };
  return React.createElement('i', _extends({
    className: classNames({
      glyphicon: true,
      'glyphicon-triangle-bottom': expanded,
      'glyphicon-triangle-right': !expanded
    }, className),
    style: _extends({
      cursor: visible ? 'pointer' : 'default',
      display: 'inline-block',
      fontSize: '9px',
      top: '0',
      padding: '8px',
      marginTop: '-8px',
      marginBottom: '-8px',
      opacity: visible ? 1 : 0
    }, style),
    tabIndex: visible ? 0 : undefined // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
    , onKeyDown: handleKeyDown,
    onMouseDown: handleMouseDown,
    onBlur: handleBlur,
    onClick: handleClick
  }, restProps));
};

process.env.NODE_ENV !== "production" ? ExpandButton.propTypes = {
  visible: PropTypes.bool,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
} : void 0;

ExpandButton.defaultProps = {
  visible: true,
  expanded: false,
  onToggle: function onToggle() {},
  className: undefined,
  style: null
};

var TableDetailToggleCell = function TableDetailToggleCell(_ref) {
  var expanded = _ref.expanded,
      onToggle = _ref.onToggle,
      tableColumn = _ref.tableColumn,
      tableRow = _ref.tableRow,
      row = _ref.row,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['expanded', 'onToggle', 'tableColumn', 'tableRow', 'row', 'style']);
  return React.createElement(
    'td',
    _extends({
      style: _extends({
        cursor: 'pointer',
        verticalAlign: 'middle',
        textAlign: 'center'
      }, style)
    }, restProps),
    React.createElement(ExpandButton, {
      expanded: expanded,
      onToggle: onToggle
    })
  );
};

process.env.NODE_ENV !== "production" ? TableDetailToggleCell.propTypes = {
  style: PropTypes.object,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func,
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
  row: PropTypes.any
} : void 0;

TableDetailToggleCell.defaultProps = {
  style: null,
  expanded: false,
  onToggle: function onToggle() {},
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined
};

var TableDetailCell = function TableDetailCell(_ref) {
  var colSpan = _ref.colSpan,
      children = _ref.children,
      className = _ref.className,
      tableColumn = _ref.tableColumn,
      tableRow = _ref.tableRow,
      row = _ref.row,
      restProps = objectWithoutProperties(_ref, ['colSpan', 'children', 'className', 'tableColumn', 'tableRow', 'row']);
  return React.createElement(
    'td',
    _extends({
      colSpan: colSpan,
      className: classNames('active', className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? TableDetailCell.propTypes = {
  colSpan: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
  row: PropTypes.any
} : void 0;

TableDetailCell.defaultProps = {
  colSpan: 1,
  className: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined,
  children: undefined
};

var TableRow = function TableRow(_ref) {
  var children = _ref.children,
      row = _ref.row,
      tableRow = _ref.tableRow,
      restProps = objectWithoutProperties(_ref, ['children', 'row', 'tableRow']);
  return React.createElement(
    'tr',
    _extends({}, restProps, {
      className: (restProps.className ? restProps.className : null) + ' ' + (row ? row.className : null)
    }),
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
        toggleColumnWidth: 33
      }, this.props));
    }
  }]);
  return TableRowDetail$$1;
}(React.PureComponent);

TableRowDetail$1.Cell = TableDetailCell;
TableRowDetail$1.ToggleCell = TableDetailToggleCell;
TableRowDetail$1.Row = TableRow;

var TableGroupCell = function TableGroupCell(_ref) {
  var style = _ref.style,
      colSpan = _ref.colSpan,
      row = _ref.row,
      column = _ref.column,
      expanded = _ref.expanded,
      onToggle = _ref.onToggle,
      children = _ref.children,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['style', 'colSpan', 'row', 'column', 'expanded', 'onToggle', 'children', 'tableRow', 'tableColumn']);
  return React.createElement(
    'td',
    _extends({
      colSpan: colSpan,
      style: _extends({
        cursor: 'pointer'
      }, style),
      onClick: onToggle
    }, restProps),
    React.createElement(ExpandButton, {
      expanded: expanded,
      onToggle: onToggle,
      style: {
        marginRight: '8px'
      }
    }),
    React.createElement(
      'strong',
      null,
      column.title || column.name,
      ':',
      ' '
    ),
    children || row.value
  );
};

process.env.NODE_ENV !== "production" ? TableGroupCell.propTypes = {
  style: PropTypes.object,
  colSpan: PropTypes.number,
  row: PropTypes.any,
  column: PropTypes.object,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func,
  children: PropTypes.node,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object
} : void 0;

TableGroupCell.defaultProps = {
  style: null,
  colSpan: 1,
  row: {},
  column: {},
  expanded: false,
  onToggle: function onToggle() {},
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined
};

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
        indentColumnWidth: 33
      }, this.props));
    }
  }]);
  return TableGroupRow$$1;
}(React.PureComponent);

TableGroupRow$1.Row = TableRow;
TableGroupRow$1.Cell = TableGroupCell;

var SelectionControl = function SelectionControl(_ref) {
  var disabled = _ref.disabled,
      checked = _ref.checked,
      indeterminate = _ref.indeterminate,
      _onChange = _ref.onChange,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['disabled', 'checked', 'indeterminate', 'onChange', 'style']);
  return React.createElement('input', _extends({
    style: _extends({
      display: 'inline-block',
      cursor: !disabled && 'pointer',
      margin: 0
    }, style),
    type: 'checkbox',
    disabled: disabled,
    checked: checked,
    ref: function ref(_ref2) {
      if (!_ref2) return;
      _ref2.indeterminate = indeterminate; // eslint-disable-line no-param-reassign
    },
    onChange: function onChange() {
      if (disabled) return;
      _onChange();
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, restProps));
};

process.env.NODE_ENV !== "production" ? SelectionControl.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func,
  style: PropTypes.object
} : void 0;

SelectionControl.defaultProps = {
  disabled: false,
  checked: false,
  indeterminate: false,
  onChange: function onChange() {},
  style: null
};

var TableSelectAllCell = function TableSelectAllCell(_ref) {
  var style = _ref.style,
      allSelected = _ref.allSelected,
      someSelected = _ref.someSelected,
      disabled = _ref.disabled,
      onToggle = _ref.onToggle,
      tableColumn = _ref.tableColumn,
      tableRow = _ref.tableRow,
      rowSpan = _ref.rowSpan,
      restProps = objectWithoutProperties(_ref, ['style', 'allSelected', 'someSelected', 'disabled', 'onToggle', 'tableColumn', 'tableRow', 'rowSpan']);
  return React.createElement(
    'th',
    _extends({
      style: _extends({
        verticalAlign: 'middle',
        textAlign: 'center'
      }, rowSpan ? { verticalAlign: 'bottom' } : { verticalAlign: 'middle' }, style),
      rowSpan: rowSpan
    }, restProps),
    React.createElement(SelectionControl, {
      disabled: disabled,
      checked: allSelected,
      indeterminate: someSelected,
      onChange: onToggle
    })
  );
};

process.env.NODE_ENV !== "production" ? TableSelectAllCell.propTypes = {
  style: PropTypes.object,
  allSelected: PropTypes.bool,
  someSelected: PropTypes.bool,
  disabled: PropTypes.bool,
  onToggle: PropTypes.func,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  rowSpan: PropTypes.number
} : void 0;

TableSelectAllCell.defaultProps = {
  style: null,
  allSelected: false,
  someSelected: false,
  disabled: false,
  onToggle: function onToggle() {},
  tableRow: undefined,
  tableColumn: undefined,
  rowSpan: undefined
};

var TableSelectCell = function TableSelectCell(_ref) {
  var style = _ref.style,
      selected = _ref.selected,
      onToggle = _ref.onToggle,
      row = _ref.row,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['style', 'selected', 'onToggle', 'row', 'tableRow', 'tableColumn']);
  return React.createElement(
    'td',
    _extends({
      style: _extends({
        verticalAlign: 'middle',
        textAlign: 'center'
      }, style)
    }, restProps),
    React.createElement(SelectionControl, {
      checked: selected,
      onChange: onToggle
    })
  );
};

process.env.NODE_ENV !== "production" ? TableSelectCell.propTypes = {
  style: PropTypes.object,
  selected: PropTypes.bool,
  onToggle: PropTypes.func,
  row: PropTypes.any,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object
} : void 0;

TableSelectCell.defaultProps = {
  style: null,
  selected: false,
  onToggle: function onToggle() {},
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined
};

var TableSelectRow = function TableSelectRow(_ref) {
  var selected = _ref.selected,
      selectByRowClick = _ref.selectByRowClick,
      onToggle = _ref.onToggle,
      children = _ref.children,
      className = _ref.className,
      row = _ref.row,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['selected', 'selectByRowClick', 'onToggle', 'children', 'className', 'row', 'tableRow', 'tableColumn']);
  return React.createElement(
    'tr',
    _extends({
      className: classNames(selected ? 'active' : '', className),
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
  selected: PropTypes.bool,
  children: PropTypes.node,
  onToggle: PropTypes.func,
  selectByRowClick: PropTypes.bool,
  className: PropTypes.string,
  row: PropTypes.any,
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object
} : void 0;

TableSelectRow.defaultProps = {
  children: undefined,
  onToggle: function onToggle() {},
  selected: false,
  selectByRowClick: false,
  className: undefined,
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
        selectionColumnWidth: 33
      }, this.props));
    }
  }]);
  return TableSelection$$1;
}(React.PureComponent);

TableSelection$1.Cell = TableSelectCell;
TableSelection$1.HeaderCell = TableSelectAllCell;

var MINIMAL_COLUMN_WIDTH = 120;

var TableLayout$1 = function TableLayout$$1(props) {
  return React.createElement(dxReactGrid.TableLayout, _extends({
    layoutComponent: dxReactGrid.StaticTableLayout,
    minColumnWidth: MINIMAL_COLUMN_WIDTH
  }, props));
};

var TableCell = function TableCell(_ref) {
  var style = _ref.style,
      column = _ref.column,
      value = _ref.value,
      children = _ref.children,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      row = _ref.row,
      restProps = objectWithoutProperties(_ref, ['style', 'column', 'value', 'children', 'tableRow', 'tableColumn', 'row']);
  return React.createElement(
    'td',
    _extends({
      style: _extends({
        whiteSpace: tableColumn && tableColumn.wordWrapEnabled ? 'normal' : 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: tableColumn && tableColumn.align || 'left'
      }, style)
    }, restProps),
    children || value
  );
};

process.env.NODE_ENV !== "production" ? TableCell.propTypes = {
  style: PropTypes.object,
  value: PropTypes.any,
  column: PropTypes.object,
  row: PropTypes.any,
  children: PropTypes.node,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object
} : void 0;

TableCell.defaultProps = {
  style: null,
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined
};

var TableStubCell = function TableStubCell(_ref) {
  var style = _ref.style,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['style', 'tableRow', 'tableColumn']);
  return React.createElement('td', _extends({
    style: _extends({
      padding: 0
    }, style)
  }, restProps));
};

process.env.NODE_ENV !== "production" ? TableStubCell.propTypes = {
  style: PropTypes.object,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object
} : void 0;

TableStubCell.defaultProps = {
  style: null,
  tableRow: undefined,
  tableColumn: undefined
};

var TableStubHeaderCell = function TableStubHeaderCell(_ref) {
  var style = _ref.style,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['style', 'tableRow', 'tableColumn']);
  return React.createElement('th', _extends({
    style: _extends({
      padding: 0
    }, style)
  }, restProps));
};

process.env.NODE_ENV !== "production" ? TableStubHeaderCell.propTypes = {
  style: PropTypes.object,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object
} : void 0;

TableStubHeaderCell.defaultProps = {
  style: null,
  tableRow: undefined,
  tableColumn: undefined
};

var TableNoDataCell = function TableNoDataCell(_ref) {
  var style = _ref.style,
      colSpan = _ref.colSpan,
      getMessage = _ref.getMessage,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['style', 'colSpan', 'getMessage', 'tableRow', 'tableColumn']);
  return React.createElement(
    'td',
    _extends({
      style: _extends({
        textAlign: 'center',
        padding: '40px 0'
      }, style),
      colSpan: colSpan
    }, restProps),
    React.createElement(
      'big',
      { className: 'text-muted' },
      getMessage('noData')
    )
  );
};

process.env.NODE_ENV !== "production" ? TableNoDataCell.propTypes = {
  style: PropTypes.object,
  colSpan: PropTypes.number,
  getMessage: PropTypes.func.isRequired,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object
} : void 0;

TableNoDataCell.defaultProps = {
  style: null,
  colSpan: 1,
  tableRow: undefined,
  tableColumn: undefined
};

/* globals document:true window:true */

var globalStickyProp = void 0;
var testCSSProp = function testCSSProp(property, value, noPrefixes) {
  var prop = property + ':';
  var el = document.createElement('test');
  var mStyle = el.style;

  if (!noPrefixes) {
    mStyle.cssText = prop + ['-webkit-', '-moz-', '-ms-', '-o-', ''].join(value + ';' + prop) + value + ';';
  } else {
    mStyle.cssText = prop + value;
  }
  return mStyle[property];
};

var Table$2 = function (_React$Component) {
  inherits(Table$$1, _React$Component);

  function Table$$1() {
    classCallCheck(this, Table$$1);

    var _this = possibleConstructorReturn(this, (Table$$1.__proto__ || Object.getPrototypeOf(Table$$1)).call(this));

    _this.state = {
      stickyProp: globalStickyProp,
      backgroundColor: 'white'
    };
    return _this;
  }

  createClass(Table$$1, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkStyles();
    }
  }, {
    key: 'checkStyles',
    value: function checkStyles() {
      globalStickyProp = testCSSProp('position', 'sticky');
      var _state = this.state,
          backgroundColor = _state.backgroundColor,
          stickyProp = _state.stickyProp;


      var panel = this.node.parentElement;
      while (!panel.classList.contains('panel')) {
        panel = panel.parentElement;
      }

      var _window$getComputedSt = window.getComputedStyle(panel),
          bodyBackgroundColor = _window$getComputedSt.backgroundColor;

      if (bodyBackgroundColor !== backgroundColor || stickyProp !== globalStickyProp) {
        this.setState({ stickyProp: globalStickyProp, backgroundColor: backgroundColor });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          use = _props.use,
          style = _props.style,
          className = _props.className,
          restProps = objectWithoutProperties(_props, ['children', 'use', 'style', 'className']);
      var _state2 = this.state,
          stickyProp = _state2.stickyProp,
          backgroundColor = _state2.backgroundColor;

      return React.createElement(
        'table',
        _extends({
          ref: function ref(node$$1) {
            _this2.node = node$$1;
          },
          className: classNames('table', className),
          style: _extends({
            tableLayout: 'fixed',
            overflow: 'hidden',
            marginBottom: 0
          }, use ? {
            position: stickyProp,
            zIndex: 1,
            background: backgroundColor
          } : null, use === 'head' ? {
            top: 0
          } : null, use === 'foot' ? {
            bottom: 0
          } : null, style)
        }, restProps),
        children
      );
    }
  }]);
  return Table$$1;
}(React.Component);

process.env.NODE_ENV !== "production" ? Table$2.propTypes = {
  use: PropTypes.oneOf(['head', 'foot']),
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string
} : void 0;

Table$2.defaultProps = {
  use: undefined,
  style: null,
  className: undefined
};

var TableContainer = function TableContainer(_ref) {
  var children = _ref.children,
      style = _ref.style,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['children', 'style', 'className']);
  return React.createElement(
    'div',
    _extends({
      className: classNames('table-responsive', className),
      style: _extends({
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        border: 0,
        margin: 0,
        flexDirection: 'column'
      }, style)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? TableContainer.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string
} : void 0;

TableContainer.defaultProps = {
  className: undefined,
  style: null
};

var TableStubRow = function TableStubRow(_ref) {
  var children = _ref.children,
      tableRow = _ref.tableRow,
      restProps = objectWithoutProperties(_ref, ['children', 'tableRow']);
  return React.createElement(
    'tr',
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

var TableHead = function TableHead(props) {
  return React.createElement('thead', props);
};
var TableBody = function TableBody(props) {
  return React.createElement('tbody', props);
};
var TableFooter = function TableFooter(props) {
  return React.createElement('tfoot', props);
};

var defaultMessages$2 = {
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
        cellComponent: TableCell,
        noDataRowComponent: TableRow,
        noDataCellComponent: TableNoDataCell,
        stubRowComponent: TableStubRow,
        stubCellComponent: TableStubCell,
        stubHeaderCellComponent: TableStubHeaderCell,
        messages: _extends({}, defaultMessages$2, messages)
      }, restProps));
    }
  }]);
  return Table$$1;
}(React.PureComponent);

Table$1.Cell = TableCell;
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
var TableHead$1 = function TableHead(props) {
  return React.createElement('thead', props);
};
var TableBody$1 = function TableBody(props) {
  return React.createElement('tbody', props);
};
var TableFooter$1 = function TableFooter(props) {
  return React.createElement('tfoot', props);
};

var defaultMessages$3 = {
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
        tableComponent: Table$2,
        headComponent: TableHead$1,
        bodyComponent: TableBody$1,
        footerComponent: TableFooter$1,
        containerComponent: TableContainer,
        rowComponent: TableRow,
        cellComponent: TableCell,
        noDataRowComponent: TableRow,
        noDataCellComponent: TableNoDataCell,
        stubRowComponent: TableStubRow,
        stubCellComponent: TableStubCell,
        stubHeaderCellComponent: TableStubHeaderCell,
        messages: _extends({}, defaultMessages$3, messages)
      }, restProps));
    }
  }]);
  return VirtualTable;
}(React.PureComponent);

VirtualTable.Cell = TableCell;
VirtualTable.Row = TableRow;
VirtualTable.NoDataCell = TableNoDataCell;
VirtualTable.NoDataRow = TableRow;
VirtualTable.StubRow = TableStubRow;
VirtualTable.StubCell = TableStubCell;
VirtualTable.StubHeaderCell = TableStubCell;
VirtualTable.Table = Table$2;
VirtualTable.TableHead = TableHead$1;
VirtualTable.TableBody = TableBody$1;
VirtualTable.TableFooter = TableFooter$1;
VirtualTable.FixedHeader = FixedHeader;
VirtualTable.Container = TableContainer;

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
  estimatedRowHeight: 37,
  height: 530,
  headTableComponent: FixedHeader,
  footerTableComponent: FixedFooter,
  messages: {}
};

var TableFilterCell = function TableFilterCell(_ref) {
  var style = _ref.style,
      filter = _ref.filter,
      onFilter = _ref.onFilter,
      children = _ref.children,
      column = _ref.column,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      getMessage = _ref.getMessage,
      filteringEnabled = _ref.filteringEnabled,
      restProps = objectWithoutProperties(_ref, ['style', 'filter', 'onFilter', 'children', 'column', 'tableRow', 'tableColumn', 'getMessage', 'filteringEnabled']);
  return React.createElement(
    'th',
    _extends({
      style: _extends({
        fontWeight: 'normal'
      }, style)
    }, restProps),
    React.createElement(
      'div',
      { className: 'input-group' },
      children
    )
  );
};

process.env.NODE_ENV !== "production" ? TableFilterCell.propTypes = {
  style: PropTypes.object,
  filter: PropTypes.object,
  onFilter: PropTypes.func,
  children: PropTypes.node,
  column: PropTypes.object,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  getMessage: PropTypes.func,
  filteringEnabled: PropTypes.bool
} : void 0;

TableFilterCell.defaultProps = {
  style: null,
  filter: null,
  onFilter: function onFilter() {},
  children: undefined,
  column: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  getMessage: undefined,
  filteringEnabled: true
};

var Editor = function Editor(_ref) {
  var value = _ref.value,
      disabled = _ref.disabled,
      getMessage = _ref.getMessage,
      _onChange = _ref.onChange,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['value', 'disabled', 'getMessage', 'onChange', 'className']);
  return React.createElement('input', _extends({
    type: 'text',
    className: classNames('form-control', className),
    value: value,
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    },
    readOnly: disabled,
    placeholder: getMessage('filterPlaceholder')
  }, restProps));
};

process.env.NODE_ENV !== "production" ? Editor.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  getMessage: PropTypes.func.isRequired,
  className: PropTypes.string
} : void 0;

Editor.defaultProps = {
  value: '',
  disabled: false,
  onChange: function onChange() {},
  className: undefined
};

var FilterSelector = function (_React$PureComponent) {
  inherits(FilterSelector, _React$PureComponent);

  function FilterSelector(props) {
    classCallCheck(this, FilterSelector);

    var _this = possibleConstructorReturn(this, (FilterSelector.__proto__ || Object.getPrototypeOf(FilterSelector)).call(this, props));

    _this.state = { opened: false };

    _this.handleButtonClick = function () {
      _this.setState(function (prevState) {
        return { opened: !prevState.opened };
      });
    };
    _this.handleOverlayHide = function () {
      _this.setState({ opened: false });
    };
    _this.handleMenuItemClick = function (nextValue) {
      _this.setState({ opened: false });
      var onChange = _this.props.onChange;

      onChange(nextValue);
    };
    return _this;
  }

  createClass(FilterSelector, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          availableValues = _props.availableValues,
          disabled = _props.disabled,
          getMessage = _props.getMessage,
          Icon = _props.iconComponent;
      var opened = this.state.opened;


      return availableValues.length ? React.createElement(
        'span',
        { className: 'input-group-btn' },
        React.createElement(
          'button',
          {
            type: 'button',
            className: 'btn btn-default',
            disabled: disabled || availableValues.length === 1,
            onClick: this.handleButtonClick,
            ref: function ref(_ref) {
              _this2.targetElement = _ref;
            }
          },
          React.createElement(Icon, { type: value })
        ),
        React.createElement(
          Overlay$1,
          {
            visible: opened,
            target: this.targetElement,
            onHide: this.handleOverlayHide,
            container: undefined
          },
          React.createElement(
            reactBootstrap.ListGroup,
            {
              style: { marginBottom: 0 }
            },
            availableValues.map(function (valueItem) {
              return React.createElement(
                reactBootstrap.ListGroupItem,
                {
                  key: valueItem,
                  active: valueItem === value,
                  style: {
                    outline: 'none',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center'
                  },
                  onClick: function onClick() {
                    return _this2.handleMenuItemClick(valueItem);
                  }
                },
                React.createElement(Icon, { type: valueItem }),
                React.createElement(
                  'span',
                  { style: { marginLeft: 10 } },
                  getMessage(valueItem)
                )
              );
            })
          )
        )
      ) : null;
    }
  }]);
  return FilterSelector;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? FilterSelector.propTypes = {
  value: PropTypes.string,
  availableValues: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  iconComponent: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired
} : void 0;

FilterSelector.defaultProps = {
  value: undefined,
  availableValues: [],
  onChange: function onChange() {},
  disabled: false
};

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
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['type', 'style']);

  var path = AVAILABLE_PATHS[type];
  return path ? React.createElement(
    'svg',
    _extends({
      style: _extends({
        width: 14,
        height: 14,
        position: 'relative',
        top: 1,
        fill: 'currentColor'
      }, style),
      viewBox: '0 0 32 32'
    }, restProps),
    React.createElement('path', { d: path })
  ) : React.createElement('i', _extends({
    className: 'glyphicon glyphicon-search',
    style: style
  }, restProps));
};

process.env.NODE_ENV !== "production" ? Icon.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object
} : void 0;

Icon.defaultProps = {
  type: undefined,
  style: {}
};

var defaultMessages$4 = {
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
        messages: _extends({}, defaultMessages$4, messages)
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

var ResizingControlLine = function ResizingControlLine(_ref) {
  var resizing = _ref.resizing,
      style = _ref.style;

  var resizingControlLineBody = resizing && React.createElement('div', {
    className: 'bg-primary',
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%'
    }
  });

  return React.createElement(
    'div',
    {
      style: _extends({
        position: 'absolute',
        backgroundColor: '#ddd',
        height: '50%',
        width: '1px',
        top: '25%'
      }, style)
    },
    resizingControlLineBody
  );
};

process.env.NODE_ENV !== "production" ? ResizingControlLine.propTypes = {
  resizing: PropTypes.bool.isRequired,
  style: PropTypes.object.isRequired
} : void 0;

var ResizingControl = function (_React$PureComponent) {
  inherits(ResizingControl, _React$PureComponent);

  function ResizingControl(props) {
    classCallCheck(this, ResizingControl);

    var _this = possibleConstructorReturn(this, (ResizingControl.__proto__ || Object.getPrototypeOf(ResizingControl)).call(this, props));

    _this.state = {
      resizing: false
    };

    _this.onResizeStart = function (_ref2) {
      var x = _ref2.x;

      _this.resizeStartingX = x;
      _this.setState({ resizing: true });
    };
    _this.onResizeUpdate = function (_ref3) {
      var x = _ref3.x;
      var onWidthDraft = _this.props.onWidthDraft;

      onWidthDraft({ shift: x - _this.resizeStartingX });
    };
    _this.onResizeEnd = function (_ref4) {
      var x = _ref4.x;
      var _this$props = _this.props,
          onWidthChange = _this$props.onWidthChange,
          onWidthDraftCancel = _this$props.onWidthDraftCancel;

      onWidthDraftCancel();
      onWidthChange({ shift: x - _this.resizeStartingX });
      _this.setState({ resizing: false });
    };
    return _this;
  }

  createClass(ResizingControl, [{
    key: 'render',
    value: function render() {
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
            style: {
              position: 'absolute',
              userSelect: 'none',
              MozUserSelect: 'none',
              WebkitUserSelect: 'none',
              top: 0,
              right: '-8px',
              width: '16px',
              height: '100%',
              cursor: 'col-resize',
              zIndex: 100
            }
          },
          React.createElement(ResizingControlLine, { resizing: resizing, style: { left: '6px' } }),
          React.createElement(ResizingControlLine, { resizing: resizing, style: { left: '8px' } })
        )
      );
    }
  }]);
  return ResizingControl;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? ResizingControl.propTypes = {
  onWidthChange: PropTypes.func.isRequired,
  onWidthDraft: PropTypes.func.isRequired,
  onWidthDraftCancel: PropTypes.func.isRequired
} : void 0;

var GroupingControl = function GroupingControl(_ref) {
  var align = _ref.align,
      disabled = _ref.disabled,
      onGroup = _ref.onGroup;

  var invertedAlign = align === 'left' ? 'right' : 'left';

  return React.createElement(
    'div',
    {
      onClick: function onClick(e) {
        if (disabled) return;
        e.stopPropagation();
        onGroup();
      },
      style: {
        float: invertedAlign,
        textAlign: invertedAlign,
        width: '14px'
      }
    },
    React.createElement('i', {
      className: 'glyphicon glyphicon-th-list',
      style: _extends({
        top: '2px',
        fontSize: '9px',
        margin: '-5px',
        padding: '5px'
      }, !disabled ? { cursor: 'pointer' } : { opacity: 0.3 })
    })
  );
};

process.env.NODE_ENV !== "production" ? GroupingControl.propTypes = {
  align: PropTypes.string.isRequired,
  onGroup: PropTypes.func.isRequired,
  disabled: PropTypes.bool
} : void 0;

GroupingControl.defaultProps = {
  disabled: false
};

var TableHeaderCell = function (_React$PureComponent) {
  inherits(TableHeaderCell, _React$PureComponent);

  function TableHeaderCell(props) {
    classCallCheck(this, TableHeaderCell);

    var _this = possibleConstructorReturn(this, (TableHeaderCell.__proto__ || Object.getPrototypeOf(TableHeaderCell)).call(this, props));

    _this.state = {
      dragging: false
    };
    return _this;
  }

  createClass(TableHeaderCell, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

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
          tableRow = _props.tableRow,
          getMessage = _props.getMessage,
          children = _props.children,
          showSortingControls = _props.showSortingControls,
          sortingDirection = _props.sortingDirection,
          sortingEnabled = _props.sortingEnabled,
          onSort = _props.onSort,
          before = _props.before,
          restProps = objectWithoutProperties(_props, ['style', 'column', 'tableColumn', 'showGroupingControls', 'onGroup', 'groupingEnabled', 'draggingEnabled', 'resizingEnabled', 'onWidthChange', 'onWidthDraft', 'onWidthDraftCancel', 'tableRow', 'getMessage', 'children', 'showSortingControls', 'sortingDirection', 'sortingEnabled', 'onSort', 'before']);
      var dragging = this.state.dragging;

      var align = tableColumn && tableColumn.align || 'left';

      var cellLayout = React.createElement(
        'th',
        _extends({
          style: _extends({
            position: 'relative'
          }, draggingEnabled ? {
            userSelect: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none'
          } : null, {
            whiteSpace: !(tableColumn && tableColumn.wordWrapEnabled) ? 'nowrap' : 'normal'
          }, draggingEnabled ? { cursor: 'pointer' } : null, dragging || tableColumn && tableColumn.draft ? { opacity: 0.3 } : null, style)
        }, restProps),
        React.createElement(
          'div',
          {
            style: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }
          },
          children,
          showGroupingControls && React.createElement(
            'div',
            {
              style: {
                flex: 'none'
              }
            },
            React.createElement(GroupingControl, {
              align: align,
              disabled: !groupingEnabled,
              onGroup: onGroup
            })
          )
        ),
        resizingEnabled && React.createElement(ResizingControl, {
          onWidthChange: onWidthChange,
          onWidthDraft: onWidthDraft,
          onWidthDraftCancel: onWidthDraftCancel
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
  return TableHeaderCell;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? TableHeaderCell.propTypes = {
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
  column: PropTypes.object,
  style: PropTypes.object,
  showSortingControls: PropTypes.bool,
  sortingEnabled: PropTypes.bool,
  sortingDirection: PropTypes.oneOf(['asc', 'desc', null]),
  onSort: PropTypes.func,
  showGroupingControls: PropTypes.bool,
  onGroup: PropTypes.func,
  groupingEnabled: PropTypes.bool,
  draggingEnabled: PropTypes.bool,
  resizingEnabled: PropTypes.bool,
  onWidthChange: PropTypes.func,
  onWidthDraft: PropTypes.func,
  onWidthDraftCancel: PropTypes.func,
  getMessage: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  before: PropTypes.node
} : void 0;

TableHeaderCell.defaultProps = {
  column: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  style: null,
  showSortingControls: false,
  sortingDirection: undefined,
  onSort: undefined,
  showGroupingControls: false,
  sortingEnabled: false,
  onGroup: undefined,
  groupingEnabled: false,
  draggingEnabled: false,
  resizingEnabled: false,
  onWidthChange: undefined,
  onWidthDraft: undefined,
  onWidthDraftCancel: undefined,
  getMessage: undefined,
  children: undefined,
  before: undefined
};

var ENTER_KEY_CODE$2 = 13;
var SPACE_KEY_CODE$2 = 32;

var handleMouseDown$1 = function handleMouseDown(e) {
  e.currentTarget.style.outline = 'none';
};
var handleBlur$1 = function handleBlur(e) {
  e.currentTarget.style.outline = '';
};

var _onClick = function _onClick(e, onSort) {
  var isActionKeyDown = e.keyCode === ENTER_KEY_CODE$2 || e.keyCode === SPACE_KEY_CODE$2;
  var isMouseClick = e.keyCode === undefined;
  if (!(isActionKeyDown || isMouseClick)) return;

  var cancelSortingRelatedKey = e.metaKey || e.ctrlKey;
  var direction = (isMouseClick || isActionKeyDown) && cancelSortingRelatedKey ? null : undefined;
  var keepOther = e.shiftKey || cancelSortingRelatedKey;

  e.preventDefault();
  onSort({ direction: direction, keepOther: keepOther });
};

var SortLabel = function SortLabel(_ref) {
  var align = _ref.align,
      direction = _ref.direction,
      disabled = _ref.disabled,
      children = _ref.children,
      onSort = _ref.onSort,
      getMessage = _ref.getMessage,
      className = _ref.className,
      column = _ref.column,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['align', 'direction', 'disabled', 'children', 'onSort', 'getMessage', 'className', 'column', 'style']);
  return React.createElement(
    'span',
    _extends({
      className: direction ? 'text-primary' : '',
      tabIndex: disabled ? -1 : 0 // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
      , onMouseDown: handleMouseDown$1,
      onBlur: handleBlur$1,
      onKeyDown: function onKeyDown(e) {
        return _onClick(e, onSort);
      },
      onClick: function onClick(e) {
        return _onClick(e, onSort);
      },
      style: _extends({
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '100%',
        userSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none'
      }, !disabled ? { cursor: 'pointer' } : null, align === 'right' ? { flexDirection: 'row-reverse' } : null, style)
    }, restProps),
    children,
    React.createElement(SortingIndicator, {
      key: 'indicator',
      direction: direction,
      style: {
        opacity: direction ? '1' : '0',
        margin: '0 5px',
        display: 'inline-block'
      }
    })
  );
};

process.env.NODE_ENV !== "production" ? SortLabel.propTypes = {
  column: PropTypes.object,
  align: PropTypes.string,
  direction: PropTypes.oneOf(['asc', 'desc']),
  children: PropTypes.node,
  onSort: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  getMessage: PropTypes.func,
  style: PropTypes.object
} : void 0;

SortLabel.defaultProps = {
  column: undefined,
  direction: null,
  disabled: false,
  children: undefined,
  className: undefined,
  align: 'left',
  getMessage: function getMessage() {},
  style: null
};

var Title = function Title(_ref) {
  var children = _ref.children,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['children', 'style']);
  return React.createElement(
    'span',
    _extends({
      style: _extends({
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }, style)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.object
} : void 0;

Title.defaultProps = {
  style: null,
  children: undefined
};

var Content = function Content(_ref) {
  var column = _ref.column,
      children = _ref.children,
      align = _ref.align,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['column', 'children', 'align', 'style']);
  return React.createElement(
    'div',
    _extends({
      style: _extends({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        // eslint-disable-next-line no-nested-ternary
        justifyContent: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start'
      }, style)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? Content.propTypes = {
  column: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  align: PropTypes.string,
  style: PropTypes.object
} : void 0;

Content.defaultProps = {
  column: undefined,
  align: 'left',
  style: null,
  children: undefined
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
      return React.createElement(dxReactGrid.TableHeaderRow, _extends({
        cellComponent: TableHeaderCell,
        rowComponent: TableRow,
        contentComponent: Content,
        sortLabelComponent: SortLabel,
        titleComponent: Title
      }, this.props));
    }
  }]);
  return TableHeaderRow$$1;
}(React.PureComponent);

TableHeaderRow$1.Cell = TableHeaderCell;
TableHeaderRow$1.Row = TableRow;
TableHeaderRow$1.Content = Content;
TableHeaderRow$1.SortLabel = SortLabel;
TableHeaderRow$1.Title = Title;

var Cell = function Cell(_ref) {
  var style = _ref.style,
      column = _ref.column,
      value = _ref.value,
      children = _ref.children,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      row = _ref.row,
      restProps = objectWithoutProperties(_ref, ['style', 'column', 'value', 'children', 'tableRow', 'tableColumn', 'row']);
  return React.createElement(
    'th',
    _extends({
      style: _extends({
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        borderBottom: '1px solid #ddd',
        borderLeft: '1px solid #ddd',
        borderRight: '1px solid #ddd'
      }, style)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? Cell.propTypes = {
  style: PropTypes.object,
  value: PropTypes.any,
  column: PropTypes.object,
  row: PropTypes.any,
  children: PropTypes.node,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object
} : void 0;

Cell.defaultProps = {
  style: null,
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined
};

var BandedHeaderCell = function BandedHeaderCell(_ref) {
  var HeaderCellComponent = _ref.component,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['component', 'style']);
  return React.createElement(HeaderCellComponent, _extends({
    style: _extends({
      borderLeft: '1px solid #ddd',
      borderRight: '1px solid #ddd',
      borderTop: 0
    }, style)
  }, restProps));
};

process.env.NODE_ENV !== "production" ? BandedHeaderCell.propTypes = {
  component: PropTypes.func.isRequired,
  style: PropTypes.object
} : void 0;

BandedHeaderCell.defaultProps = {
  style: null
};

var InvisibleCell = function InvisibleCell() {
  return React.createElement('th', { style: { display: 'none' } });
};

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
        rowComponent: TableRow,
        bandedHeaderCellComponent: BandedHeaderCell,
        invisibleCellComponent: InvisibleCell
      }, this.props));
    }
  }]);
  return TableBandHeader$$1;
}(React.PureComponent);

TableBandHeader$1.Cell = Cell;
TableBandHeader$1.Row = TableRow;
TableBandHeader$1.BandedHeaderCell = BandedHeaderCell;

var EditCell = function EditCell(_ref) {
  var column = _ref.column,
      value = _ref.value,
      onValueChange = _ref.onValueChange,
      style = _ref.style,
      children = _ref.children,
      row = _ref.row,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      editingEnabled = _ref.editingEnabled,
      restProps = objectWithoutProperties(_ref, ['column', 'value', 'onValueChange', 'style', 'children', 'row', 'tableRow', 'tableColumn', 'editingEnabled']);
  return React.createElement(
    'td',
    _extends({
      style: _extends({
        verticalAlign: 'middle',
        padding: '1px'
      }, style)
    }, restProps),
    children || React.createElement('input', {
      type: 'text',
      className: 'form-control',
      value: value,
      onChange: function onChange(e) {
        return onValueChange(e.target.value);
      },
      readOnly: !editingEnabled,
      style: {
        width: '100%',
        textAlign: tableColumn && tableColumn.align
      }
    })
  );
};

process.env.NODE_ENV !== "production" ? EditCell.propTypes = {
  column: PropTypes.object,
  row: PropTypes.any,
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
  value: PropTypes.any,
  onValueChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  editingEnabled: PropTypes.bool,
  children: PropTypes.node
} : void 0;

EditCell.defaultProps = {
  column: undefined,
  row: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  value: '',
  style: null,
  children: undefined,
  editingEnabled: true
};

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

var CommandButton = function CommandButton(_ref) {
  var onExecute = _ref.onExecute,
      text = _ref.text,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['onExecute', 'text', 'className']);
  return React.createElement(
    'button',
    _extends({
      type: 'button',
      className: classNames('btn', 'btn-link', className),
      onClick: function onClick(e) {
        e.stopPropagation();
        onExecute();
      }
    }, restProps),
    text
  );
};

process.env.NODE_ENV !== "production" ? CommandButton.propTypes = {
  text: PropTypes.string.isRequired,
  onExecute: PropTypes.func.isRequired,
  className: PropTypes.string
} : void 0;

CommandButton.defaultProps = {
  className: undefined
};

var EditCommandHeadingCell = function EditCommandHeadingCell(_ref2) {
  var children = _ref2.children,
      style = _ref2.style,
      tableColumn = _ref2.tableColumn,
      tableRow = _ref2.tableRow,
      restProps = objectWithoutProperties(_ref2, ['children', 'style', 'tableColumn', 'tableRow']);
  return React.createElement(
    'th',
    _extends({
      style: _extends({
        whiteSpace: 'nowrap',
        textAlign: 'center',
        padding: 0
      }, style)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? EditCommandHeadingCell.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object
} : void 0;

EditCommandHeadingCell.defaultProps = {
  children: undefined,
  style: null,
  tableColumn: undefined,
  tableRow: undefined
};

var EditCommandCell = function EditCommandCell(_ref3) {
  var tableColumn = _ref3.tableColumn,
      tableRow = _ref3.tableRow,
      row = _ref3.row,
      children = _ref3.children,
      style = _ref3.style,
      restProps = objectWithoutProperties(_ref3, ['tableColumn', 'tableRow', 'row', 'children', 'style']);
  return React.createElement(
    'td',
    _extends({
      style: _extends({
        whiteSpace: 'nowrap',
        textAlign: 'center',
        padding: 0
      }, style)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? EditCommandCell.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
  row: PropTypes.any
} : void 0;

EditCommandCell.defaultProps = {
  children: undefined,
  style: null,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined
};

var defaultMessages$5 = {
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
        messages: _extends({}, defaultMessages$5, messages)
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

var EmptyMessage = function EmptyMessage(_ref) {
  var getMessage = _ref.getMessage,
      className = _ref.className,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['getMessage', 'className', 'style']);
  return React.createElement(
    'div',
    _extends({
      className: classNames('panel-body', className),
      style: _extends({
        textAlign: 'center',
        padding: '40px 0px'
      }, style)
    }, restProps),
    React.createElement(
      'big',
      { className: 'text-muted' },
      getMessage('noColumns')
    )
  );
};

process.env.NODE_ENV !== "production" ? EmptyMessage.propTypes = {
  getMessage: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
} : void 0;

EmptyMessage.defaultProps = {
  className: undefined,
  style: null
};

var defaultMessages$6 = {
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
        messages: _extends({}, defaultMessages$6, messages)
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
    style: _extends({}, style, { padding: 0, border: 'none' })
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
  minColumnWidth: 45
};

var Toolbar$2 = function Toolbar$$1(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['children', 'className', 'style']);
  return React.createElement(
    'div',
    _extends({
      className: classNames('panel-heading', className),
      style: _extends({
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        minHeight: '55px',
        padding: '0px 15px',
        flex: 'none'
      }, style)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? Toolbar$2.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
} : void 0;

Toolbar$2.defaultProps = {
  className: undefined,
  style: null
};

var FlexibleSpace = function FlexibleSpace() {
  return React.createElement('div', { style: { flex: '0 0 0', marginLeft: 'auto' } });
};

var Toolbar$1 = function (_React$PureComponent) {
  inherits(Toolbar$$1, _React$PureComponent);

  function Toolbar$$1() {
    classCallCheck(this, Toolbar$$1);
    return possibleConstructorReturn(this, (Toolbar$$1.__proto__ || Object.getPrototypeOf(Toolbar$$1)).apply(this, arguments));
  }

  createClass(Toolbar$$1, [{
    key: 'render',
    value: function render() {
      return React.createElement(dxReactGrid.Toolbar, _extends({
        rootComponent: Toolbar$2,
        flexibleSpaceComponent: FlexibleSpace
      }, this.props));
    }
  }]);
  return Toolbar$$1;
}(React.PureComponent);

Toolbar$1.Root = Toolbar$2;

var TableTreeExpandButton = function TableTreeExpandButton(_ref) {
  var style = _ref.style,
      visible = _ref.visible,
      expanded = _ref.expanded,
      onToggle = _ref.onToggle,
      restProps = objectWithoutProperties(_ref, ['style', 'visible', 'expanded', 'onToggle']);
  return React.createElement(ExpandButton, _extends({
    visible: visible,
    expanded: expanded,
    onToggle: onToggle,
    style: _extends({
      marginRight: '8px'
    }, style)
  }, restProps));
};

process.env.NODE_ENV !== "production" ? TableTreeExpandButton.propTypes = {
  style: PropTypes.object,
  visible: PropTypes.bool,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func
} : void 0;

TableTreeExpandButton.defaultProps = {
  style: null,
  visible: false,
  expanded: false,
  onToggle: function onToggle() {}
};

var TableTreeCheckbox = function TableTreeCheckbox(_ref) {
  var style = _ref.style,
      checked = _ref.checked,
      indeterminate = _ref.indeterminate,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      restProps = objectWithoutProperties(_ref, ['style', 'checked', 'indeterminate', 'disabled', 'onChange']);
  return React.createElement(SelectionControl, _extends({
    disabled: disabled,
    checked: checked,
    indeterminate: indeterminate,
    onChange: onChange,
    style: _extends({
      marginRight: '16px'
    }, style)
  }, restProps));
};

process.env.NODE_ENV !== "production" ? TableTreeCheckbox.propTypes = {
  style: PropTypes.object,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
} : void 0;

TableTreeCheckbox.defaultProps = {
  style: null,
  checked: false,
  indeterminate: false,
  disabled: false,
  onChange: function onChange() {}
};

var TableTreeIndent = function TableTreeIndent(_ref) {
  var level = _ref.level;
  return Array.from({ length: level }).map(function (value, currentLevel) {
    return React.createElement('span', {
      // eslint-disable-next-line react/no-array-index-key
      key: currentLevel,
      style: {
        display: 'inline-block',
        marginRight: '16px'
      }
    });
  });
};

process.env.NODE_ENV !== "production" ? TableTreeIndent.propTypes = {
  level: PropTypes.number
} : void 0;

TableTreeIndent.defaultProps = {
  level: 0
};

var TableTreeCell = function TableTreeCell(_ref) {
  var column = _ref.column,
      value = _ref.value,
      children = _ref.children,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      row = _ref.row,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['column', 'value', 'children', 'tableRow', 'tableColumn', 'row', 'style']);
  return React.createElement(
    'td',
    _extends({
      style: _extends({
        textAlign: tableColumn && tableColumn.align || 'left'
      }, style)
    }, restProps),
    React.createElement(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }
      },
      children
    )
  );
};

process.env.NODE_ENV !== "production" ? TableTreeCell.propTypes = {
  value: PropTypes.any,
  column: PropTypes.object,
  row: PropTypes.any,
  children: PropTypes.node,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  style: PropTypes.object
} : void 0;

TableTreeCell.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  style: null
};

var TableTreeContent = function TableTreeContent(_ref) {
  var children = _ref.children,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['children', 'style']);
  return React.createElement(
    'div',
    _extends({
      style: _extends({
        width: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }, style)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? TableTreeContent.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
} : void 0;

TableTreeContent.defaultProps = {
  children: undefined,
  style: null
};

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
        contentComponent: TableTreeContent,
        indentComponent: TableTreeIndent,
        expandButtonComponent: TableTreeExpandButton,
        checkboxComponent: TableTreeCheckbox
      }, this.props));
    }
  }]);
  return TableTreeColumn$$1;
}(React.PureComponent);

TableTreeColumn$1.Cell = TableTreeCell;
TableTreeColumn$1.Content = TableTreeContent;
TableTreeColumn$1.Indent = TableTreeIndent;
TableTreeColumn$1.ExpandButton = TableTreeExpandButton;
TableTreeColumn$1.Checkbox = TableTreeCheckbox;

var SearchPanelInput = function SearchPanelInput(_ref) {
  var onValueChange = _ref.onValueChange,
      value = _ref.value,
      getMessage = _ref.getMessage,
      style = _ref.style,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['onValueChange', 'value', 'getMessage', 'style', 'className']);
  return React.createElement('input', _extends({
    type: 'text',
    className: classNames('form-control', className),
    onChange: function onChange(e) {
      return onValueChange(e.target.value);
    },
    value: value,
    style: _extends({ maxWidth: '25%' }, style),
    placeholder: getMessage('searchPlaceholder')
  }, restProps));
};

process.env.NODE_ENV !== "production" ? SearchPanelInput.propTypes = {
  value: PropTypes.any,
  onValueChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  getMessage: PropTypes.func.isRequired,
  className: PropTypes.string
} : void 0;

SearchPanelInput.defaultProps = {
  value: null,
  style: null,
  className: undefined
};

var defaultMessages$7 = {
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
        messages: _extends({}, defaultMessages$7, messages)
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

var TableSummaryItem = function TableSummaryItem(_ref) {
  var children = _ref.children,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['children', 'style']);
  return React.createElement(
    'div',
    _extends({
      style: _extends({
        fontWeight: 'bold'
      }, style)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? TableSummaryItem.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
} : void 0;

TableSummaryItem.defaultProps = {
  children: undefined,
  style: null
};

var defaultMessages$8 = {
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
        totalCellComponent: TableCell,
        groupCellComponent: TableCell,
        treeCellComponent: TableCell,
        itemComponent: TableSummaryItem,
        treeColumnCellComponent: TableTreeCell,
        treeColumnContentComponent: TableTreeContent,
        treeColumnIndentComponent: TableTreeIndent,
        messages: _extends({}, defaultMessages$8, messages)
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
TableSummaryRow$1.TotalCell = TableCell;
TableSummaryRow$1.GroupCell = TableCell;
TableSummaryRow$1.TreeCell = TableCell;
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
exports.Toolbar = Toolbar$1;
exports.TableTreeColumn = TableTreeColumn$1;
exports.SearchPanel = SearchPanel$1;
exports.TableSummaryRow = TableSummaryRow$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dx-react-grid-bootstrap3.umd.js.map
