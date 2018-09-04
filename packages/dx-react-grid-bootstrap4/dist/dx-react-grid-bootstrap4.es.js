/**
 * Bundle of @devexpress/dx-react-grid-bootstrap4
 * Generated: 2018-09-04
 * Version: 1.7.2
 * License: https://js.devexpress.com/Licensing
 */

import { Component, Fragment, PureComponent, createElement } from 'react';
import { any, arrayOf, bool, func, node, number, object, oneOf, oneOfType, shape, string } from 'prop-types';
import { ColumnChooser, DragDropProvider, Grid, GroupPanelLayout, GroupingPanel, PagingPanel, SearchPanel, StaticTableLayout, Table, TableBandHeader, TableColumnReordering, TableColumnResizing, TableColumnVisibility, TableEditColumn, TableEditRow, TableFilterRow, TableGroupRow, TableHeaderRow, TableLayout, TableRowDetail, TableSelection, TableSummaryRow, TableTreeColumn, Toolbar, VirtualTableLayout } from '@devexpress/dx-react-grid';
import classNames from 'classnames';
import { Pagination, PaginationItem, PaginationLink, Popover } from 'reactstrap';
import { calculateStartPage, firstRowOnPage, lastRowOnPage } from '@devexpress/dx-grid-core';
import { DragSource, Draggable, DropTarget, createRenderComponent } from '@devexpress/dx-react-core';

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
      restProps = objectWithoutProperties(_ref, ['children', 'className']);
  return createElement(
    'div',
    _extends({
      className: classNames('d-flex flex-column', className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? Root.propTypes = {
  className: string,
  children: oneOfType([node, arrayOf(node)])
} : void 0;

Root.defaultProps = {
  className: undefined,
  children: undefined
};

var Grid$1 = function Grid$$1(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);
  return createElement(
    Grid,
    _extends({
      rootComponent: Root
    }, props),
    children
  );
};

Grid$1.Root = Root;

process.env.NODE_ENV !== "production" ? Grid$1.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
} : void 0;

var Overlay = function Overlay(_ref) {
  var visible = _ref.visible,
      children = _ref.children,
      target = _ref.target,
      onHide = _ref.onHide,
      restProps = objectWithoutProperties(_ref, ['visible', 'children', 'target', 'onHide']);

  var handleToggle = function handleToggle() {
    if (visible) onHide();
  };
  return target ? createElement(
    Popover,
    _extends({
      placement: 'bottom',
      isOpen: visible,
      target: target,
      container: target ? target.parentElement : undefined,
      toggle: handleToggle
    }, restProps),
    children
  ) : null;
};

process.env.NODE_ENV !== "production" ? Overlay.propTypes = {
  children: node.isRequired,
  onHide: func.isRequired,
  visible: bool,
  target: oneOfType([object, func])
} : void 0;

Overlay.defaultProps = {
  visible: false,
  target: null
};

var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['children', 'className']);
  return createElement(
    'div',
    _extends({
      className: classNames('py-2', className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? Container.propTypes = {
  children: node.isRequired,
  className: string
} : void 0;

Container.defaultProps = {
  className: undefined
};

var handleMouseDown = function handleMouseDown(e) {
  e.currentTarget.style.outline = 'none';
};
var handleBlur = function handleBlur(e) {
  e.currentTarget.style.outline = '';
};

var Item = function Item(_ref) {
  var _ref$item = _ref.item,
      column = _ref$item.column,
      hidden = _ref$item.hidden,
      onToggle = _ref.onToggle,
      className = _ref.className,
      disabled = _ref.disabled,
      restProps = objectWithoutProperties(_ref, ['item', 'onToggle', 'className', 'disabled']);
  return createElement(
    'button',
    _extends({
      className: classNames({
        'dropdown-item dx-g-bs4-column-chooser-item': true,
        'dx-g-bs4-cursor-pointer': !disabled
      }, className),
      type: 'button',
      onClick: onToggle,
      onMouseDown: handleMouseDown,
      onBlur: handleBlur,
      disabled: disabled
    }, restProps),
    createElement('input', {
      type: 'checkbox',
      className: classNames({
        'dx-g-bs4-cursor-pointer': !disabled,
        'dx-g-bs4-column-chooser-checkbox': true
      }),
      tabIndex: -1,
      checked: !hidden,
      disabled: disabled,
      onChange: onToggle,
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }),
    column.title || column.name
  );
};

process.env.NODE_ENV !== "production" ? Item.propTypes = {
  item: shape({
    column: shape({
      name: string
    }),
    hidden: bool
  }).isRequired,
  onToggle: func,
  className: string,
  disabled: bool
} : void 0;

Item.defaultProps = {
  onToggle: function onToggle() {},
  className: undefined,
  disabled: false
};

var ToggleButton = function ToggleButton(_ref) {
  var onToggle = _ref.onToggle,
      className = _ref.className,
      getMessage = _ref.getMessage,
      buttonRef = _ref.buttonRef,
      active = _ref.active,
      restProps = objectWithoutProperties(_ref, ['onToggle', 'className', 'getMessage', 'buttonRef', 'active']);

  var buttonClasses = classNames({
    btn: true,
    'btn-outline-secondary': true,
    'border-0': true,
    active: active
  }, className);
  return createElement(
    'button',
    _extends({
      type: 'button',
      className: buttonClasses,
      onClick: onToggle,
      ref: buttonRef
    }, restProps),
    createElement('span', { className: 'oi oi-eye' })
  );
};

process.env.NODE_ENV !== "production" ? ToggleButton.propTypes = {
  onToggle: func.isRequired,
  getMessage: func.isRequired,
  buttonRef: func.isRequired,
  className: string,
  active: bool
} : void 0;

ToggleButton.defaultProps = {
  className: undefined,
  active: false
};

var ColumnChooser$1 = function ColumnChooser$$1(props) {
  return createElement(ColumnChooser, _extends({
    overlayComponent: Overlay,
    containerComponent: Container,
    itemComponent: Item,
    toggleButtonComponent: ToggleButton
  }, props));
};

ColumnChooser$1.Container = Container;
ColumnChooser$1.Item = Item;
ColumnChooser$1.Overlay = Overlay;
ColumnChooser$1.ToggleButton = ToggleButton;

var Container$1 = function Container(_ref) {
  var clientOffset = _ref.clientOffset,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['clientOffset', 'style', 'className', 'children']);
  return createElement(
    'ul',
    _extends({
      className: classNames('list-group d-inline-block position-fixed dx-g-bs4-drag-drop', className),
      style: _extends({
        transform: 'translate(calc(' + clientOffset.x + 'px - 50%), calc(' + clientOffset.y + 'px - 50%))',
        zIndex: 1000
      }, style)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? Container$1.propTypes = {
  clientOffset: shape({
    x: number.isRequired,
    y: number.isRequired
  }).isRequired,
  style: object,
  className: string,
  children: oneOfType([node, arrayOf(node)])
} : void 0;

Container$1.defaultProps = {
  style: {},
  className: undefined,
  children: undefined
};

var Column = function Column(_ref2) {
  var column = _ref2.column,
      className = _ref2.className,
      restProps = objectWithoutProperties(_ref2, ['column', 'className']);
  return createElement(
    'li',
    _extends({
      className: classNames('list-group-item', className)
    }, restProps),
    column.title
  );
};

process.env.NODE_ENV !== "production" ? Column.propTypes = {
  column: object.isRequired,
  className: string
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
      return createElement(DragDropProvider, _extends({
        containerComponent: Container$1,
        columnComponent: Column
      }, this.props));
    }
  }]);
  return DragDropProvider$$1;
}(PureComponent);

DragDropProvider$1.Container = Container$1;
DragDropProvider$1.Column = Column;

var PageSizeSelector = function PageSizeSelector(_ref) {
  var pageSize = _ref.pageSize,
      onPageSizeChange = _ref.onPageSizeChange,
      pageSizes = _ref.pageSizes,
      getMessage = _ref.getMessage;

  var showAll = getMessage('showAll');
  return createElement(
    'div',
    { className: 'd-inline-block' },
    createElement(
      'select',
      {
        className: 'form-control d-sm-none',
        value: pageSize,
        onChange: function onChange(e) {
          return onPageSizeChange(parseInt(e.target.value, 10));
        }
      },
      pageSizes.map(function (val) {
        return createElement(
          'option',
          { key: val, value: val },
          val || showAll
        );
      })
    ),
    createElement(
      Pagination,
      { className: 'd-none d-sm-flex', listClassName: 'm-0' },
      pageSizes.map(function (item) {
        return createElement(
          PaginationItem,
          { key: item, active: item === pageSize && true },
          createElement(
            PaginationLink,
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
  pageSize: number.isRequired,
  onPageSizeChange: func.isRequired,
  pageSizes: arrayOf(number).isRequired,
  getMessage: func.isRequired
} : void 0;

var renderPageButtons = function renderPageButtons(currentPage, totalPageCount, currentPageChange) {
  var pageButtons = [];
  var maxButtonCount = 3;
  var startPage = 1;
  var endPage = totalPageCount || 1;

  if (maxButtonCount < totalPageCount) {
    startPage = calculateStartPage(currentPage + 1, maxButtonCount, totalPageCount);
    endPage = startPage + maxButtonCount - 1;
  }
  if (startPage > 1) {
    pageButtons.push(createElement(
      PaginationItem,
      { key: 1 },
      createElement(
        PaginationLink,
        {
          href: '#',
          onClick: function onClick(e) {
            return currentPageChange(e, 0);
          }
        },
        1
      )
    ));

    if (startPage > 2) {
      pageButtons.push(createElement(
        PaginationItem,
        { key: 'ellipsisStart', disabled: true },
        createElement(
          PaginationLink,
          null,
          '...'
        )
      ));
    }
  }

  var _loop = function _loop(page) {
    pageButtons.push(createElement(
      PaginationItem,
      {
        key: page,
        active: page === currentPage + 1,
        disabled: startPage === endPage
      },
      createElement(
        PaginationLink,
        {
          href: '#',
          onClick: function onClick(e) {
            return currentPageChange(e, page - 1);
          }
        },
        page
      )
    ));
  };

  for (var page = startPage; page <= endPage; page += 1) {
    _loop(page);
  }

  if (endPage < totalPageCount) {
    if (endPage < totalPageCount - 1) {
      pageButtons.push(createElement(
        PaginationItem,
        { key: 'ellipsisEnd', disabled: true },
        createElement(
          PaginationLink,
          null,
          '...'
        )
      ));
    }

    pageButtons.push(createElement(
      PaginationItem,
      { key: totalPageCount },
      createElement(
        PaginationLink,
        {
          href: '#',
          onClick: function onClick(e) {
            return currentPageChange(e, totalPageCount - 1);
          }
        },
        totalPageCount
      )
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

  var from = firstRowOnPage(currentPage, pageSize, totalCount);
  var to = lastRowOnPage(currentPage, pageSize, totalCount);
  var currentPageChange = function currentPageChange(e, nextPage) {
    e.preventDefault();
    onCurrentPageChange(nextPage);
  };
  return createElement(
    Fragment,
    null,
    createElement(
      Pagination,
      { className: 'float-right d-none d-sm-flex', listClassName: 'm-0' },
      createElement(
        PaginationItem,
        { disabled: currentPage === 0 },
        createElement(PaginationLink, {
          previous: true,
          href: '#',
          onClick: function onClick(e) {
            return currentPageChange(e, currentPage - 1);
          }
        })
      ),
      renderPageButtons(currentPage, totalPages, currentPageChange),
      createElement(
        PaginationItem,
        { disabled: currentPage === totalPages - 1 || totalCount === 0 },
        createElement(PaginationLink, {
          next: true,
          href: '#',
          onClick: function onClick(e) {
            return currentPageChange(e, currentPage + 1);
          }
        })
      )
    ),
    createElement(
      Pagination,
      { className: 'float-right d-sm-none', listClassName: 'm-0' },
      createElement(
        PaginationItem,
        { disabled: currentPage === 0 },
        createElement(PaginationLink, {
          previous: true,
          href: '#',
          onClick: function onClick(e) {
            return currentPageChange(e, currentPage - 1);
          }
        })
      ),
      '\xA0',
      createElement(
        PaginationItem,
        { disabled: currentPage === totalPages - 1 || totalCount === 0 },
        createElement(PaginationLink, {
          next: true,
          href: '#',
          onClick: function onClick(e) {
            return currentPageChange(e, currentPage + 1);
          }
        })
      )
    ),
    createElement(
      'span',
      { className: 'float-right d-sm-none mr-4' },
      createElement(
        'span',
        { className: 'd-inline-block align-middle' },
        getMessage('info', { from: from, to: to, count: totalCount })
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? Pagination$1.propTypes = {
  totalPages: number.isRequired,
  currentPage: number.isRequired,
  onCurrentPageChange: func.isRequired,
  totalCount: number.isRequired,
  pageSize: number.isRequired,
  getMessage: func.isRequired
} : void 0;

var Pager = function Pager(_ref) {
  var currentPage = _ref.currentPage,
      _onCurrentPageChange = _ref.onCurrentPageChange,
      totalPages = _ref.totalPages,
      pageSize = _ref.pageSize,
      onPageSizeChange = _ref.onPageSizeChange,
      pageSizes = _ref.pageSizes,
      totalCount = _ref.totalCount,
      getMessage = _ref.getMessage,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['currentPage', 'onCurrentPageChange', 'totalPages', 'pageSize', 'onPageSizeChange', 'pageSizes', 'totalCount', 'getMessage', 'className']);
  return createElement(
    'div',
    _extends({
      className: classNames('clearfix card-footer dx-g-bs4-paging-panel', className)
    }, restProps),
    !!pageSizes.length && createElement(PageSizeSelector, {
      pageSize: pageSize,
      onPageSizeChange: onPageSizeChange,
      pageSizes: pageSizes,
      getMessage: getMessage
    }),
    createElement(Pagination$1, {
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

process.env.NODE_ENV !== "production" ? Pager.propTypes = {
  currentPage: number.isRequired,
  onCurrentPageChange: func.isRequired,
  totalPages: number.isRequired,
  pageSize: number.isRequired,
  onPageSizeChange: func.isRequired,
  pageSizes: arrayOf(number).isRequired,
  totalCount: number.isRequired,
  getMessage: func.isRequired,
  className: string
} : void 0;

Pager.defaultProps = {
  className: undefined
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


      return createElement(PagingPanel, _extends({
        containerComponent: Pager,
        messages: _extends({}, defaultMessages, messages)
      }, restProps));
    }
  }]);
  return PagingPanel$$1;
}(PureComponent);

PagingPanel$1.Container = Pager;

process.env.NODE_ENV !== "production" ? PagingPanel$1.propTypes = {
  messages: shape({
    showAll: string,
    info: oneOfType([string, func])
  })
} : void 0;

PagingPanel$1.defaultProps = {
  messages: {}
};

var GroupPanelContainer = function GroupPanelContainer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['children', 'className']);
  return createElement(
    'div',
    _extends({
      className: classNames('w-100 mt-1', className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? GroupPanelContainer.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  className: string
} : void 0;

GroupPanelContainer.defaultProps = {
  children: null,
  className: undefined
};

var SortingIndicator = function SortingIndicator(_ref) {
  var direction = _ref.direction,
      className = _ref.className;
  return createElement('span', {
    className: classNames({
      'oi dx-g-bs4-sorting-indicator mx-2': true,
      'oi-arrow-thick-bottom': direction === 'desc',
      'oi-arrow-thick-top': direction !== 'desc',
      invisible: !direction
    }, className)
  });
};

process.env.NODE_ENV !== "production" ? SortingIndicator.propTypes = {
  direction: oneOf(['asc', 'desc']),
  className: string
} : void 0;

SortingIndicator.defaultProps = {
  direction: null,
  className: undefined
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
      showSortingControls = _ref.showSortingControls,
      sortingDirection = _ref.sortingDirection,
      onSort = _ref.onSort,
      className = _ref.className,
      groupingEnabled = _ref.groupingEnabled,
      sortingEnabled = _ref.sortingEnabled,
      restProps = objectWithoutProperties(_ref, ['item', 'onGroup', 'showGroupingControls', 'showSortingControls', 'sortingDirection', 'onSort', 'className', 'groupingEnabled', 'sortingEnabled']);

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
  return createElement(
    'div',
    _extends({
      className: classNames({
        'btn-group mb-1 mr-1': true,
        'dx-g-bs4-inactive': draft
      }, className)
    }, restProps),
    createElement(
      'span',
      _extends({
        className: classNames({
          'btn btn-outline-secondary': true,
          disabled: !sortingEnabled && (showSortingControls || !groupingEnabled)
        }),
        onClick: handleSortingChange,
        onKeyDown: handleSortingChange
      }, sortingEnabled ? { tabIndex: 0 } : null),
      column.title || column.name,
      showSortingControls && sortingDirection && createElement(
        'span',
        null,
        '\xA0',
        createElement(SortingIndicator, {
          direction: sortingDirection
        })
      )
    ),
    showGroupingControls && createElement(
      'span',
      {
        className: classNames({
          'btn btn-outline-secondary': true,
          disabled: !groupingEnabled
        }),
        onClick: handleUngroup
      },
      '\xA0',
      createElement('span', {
        className: 'oi oi-x dx-g-bs4-group-panel-item-icon'
      })
    )
  );
};

process.env.NODE_ENV !== "production" ? GroupPanelItem.propTypes = {
  item: shape({
    column: shape({
      title: string
    }).isRequired,
    draft: bool
  }).isRequired,
  showSortingControls: bool,
  sortingDirection: oneOf(['asc', 'desc', null]),
  className: string,
  onSort: func,
  onGroup: func,
  showGroupingControls: bool,
  groupingEnabled: bool,
  sortingEnabled: bool
} : void 0;

GroupPanelItem.defaultProps = {
  showSortingControls: false,
  sortingDirection: undefined,
  className: undefined,
  onSort: undefined,
  onGroup: undefined,
  showGroupingControls: false,
  sortingEnabled: false,
  groupingEnabled: false
};

var GroupPanelEmptyMessage = function GroupPanelEmptyMessage(_ref) {
  var getMessage = _ref.getMessage,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['getMessage', 'className']);
  return createElement(
    'div',
    _extends({
      className: classNames('dx-g-bs4-group-panel-empty-message', className)
    }, restProps),
    getMessage('groupByColumn')
  );
};

process.env.NODE_ENV !== "production" ? GroupPanelEmptyMessage.propTypes = {
  getMessage: func.isRequired,
  className: string
} : void 0;

GroupPanelEmptyMessage.defaultProps = {
  className: undefined
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


      return createElement(GroupingPanel, _extends({
        layoutComponent: GroupPanelLayout,
        containerComponent: GroupPanelContainer,
        itemComponent: GroupPanelItem,
        emptyMessageComponent: GroupPanelEmptyMessage,
        messages: _extends({}, defaultMessages$1, messages)
      }, restProps));
    }
  }]);
  return GroupingPanel$$1;
}(PureComponent);

GroupingPanel$1.Container = GroupPanelContainer;
GroupingPanel$1.Item = GroupPanelItem;
GroupingPanel$1.EmptyMessage = GroupPanelEmptyMessage;

process.env.NODE_ENV !== "production" ? GroupingPanel$1.propTypes = {
  showSortingControls: bool,
  messages: shape({
    groupByColumn: string
  })
} : void 0;

GroupingPanel$1.defaultProps = {
  showSortingControls: false,
  messages: {}
};

var ENTER_KEY_CODE$1 = 13;
var SPACE_KEY_CODE$1 = 32;

var handleMouseDown$1 = function handleMouseDown(e) {
  e.target.style.outline = 'none';
};
var handleBlur$1 = function handleBlur(e) {
  e.target.style.outline = '';
};

var ExpandButton = function ExpandButton(_ref) {
  var visible = _ref.visible,
      expanded = _ref.expanded,
      onToggle = _ref.onToggle,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['visible', 'expanded', 'onToggle', 'className']);

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
  return createElement('i', _extends({
    className: classNames({
      'oi p-2 text-center dx-g-bs4-toggle-button': true,
      'oi-chevron-bottom': expanded,
      'oi-chevron-right': !expanded,
      'dx-g-bs4-toggle-button-hidden': !visible
    }, className),
    tabIndex: visible ? 0 : undefined // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
    , onKeyDown: handleKeyDown,
    onMouseDown: handleMouseDown$1,
    onBlur: handleBlur$1,
    onClick: handleClick
  }, restProps));
};

process.env.NODE_ENV !== "production" ? ExpandButton.propTypes = {
  visible: bool,
  expanded: bool,
  onToggle: func,
  className: string
} : void 0;

ExpandButton.defaultProps = {
  visible: true,
  expanded: false,
  onToggle: function onToggle() {},
  className: undefined
};

var TableDetailToggleCell = function TableDetailToggleCell(_ref) {
  var expanded = _ref.expanded,
      onToggle = _ref.onToggle,
      tableColumn = _ref.tableColumn,
      tableRow = _ref.tableRow,
      row = _ref.row,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['expanded', 'onToggle', 'tableColumn', 'tableRow', 'row', 'className']);
  return createElement(
    'td',
    _extends({
      className: classNames('text-center align-middle', className)
    }, restProps),
    createElement(ExpandButton, {
      expanded: expanded,
      onToggle: onToggle
    })
  );
};

process.env.NODE_ENV !== "production" ? TableDetailToggleCell.propTypes = {
  className: string,
  expanded: bool,
  onToggle: func,
  tableColumn: object,
  tableRow: object,
  row: any
} : void 0;

TableDetailToggleCell.defaultProps = {
  className: undefined,
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
  return createElement(
    'td',
    _extends({
      colSpan: colSpan,
      className: classNames('table-active', className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? TableDetailCell.propTypes = {
  style: object,
  colSpan: number,
  children: oneOfType([arrayOf(node), node]),
  className: string,
  tableColumn: object,
  tableRow: object,
  row: any
} : void 0;

TableDetailCell.defaultProps = {
  style: null,
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
  return createElement(
    'tr',
    restProps,
    children
  );
};

process.env.NODE_ENV !== "production" ? TableRow.propTypes = {
  children: node,
  row: any,
  tableRow: object
} : void 0;

TableRow.defaultProps = {
  children: null,
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
      return createElement(TableRowDetail, _extends({
        toggleCellComponent: TableDetailToggleCell,
        cellComponent: TableDetailCell,
        rowComponent: TableRow,
        toggleColumnWidth: 40
      }, this.props));
    }
  }]);
  return TableRowDetail$$1;
}(PureComponent);

TableRowDetail$1.Cell = TableDetailCell;
TableRowDetail$1.ToggleCell = TableDetailToggleCell;
TableRowDetail$1.Row = TableRow;

var TableGroupCell = function TableGroupCell(_ref) {
  var className = _ref.className,
      colSpan = _ref.colSpan,
      row = _ref.row,
      column = _ref.column,
      expanded = _ref.expanded,
      onToggle = _ref.onToggle,
      children = _ref.children,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['className', 'colSpan', 'row', 'column', 'expanded', 'onToggle', 'children', 'tableRow', 'tableColumn']);

  var handleClick = function handleClick() {
    return onToggle();
  };

  return createElement(
    'td',
    _extends({
      colSpan: colSpan,
      className: classNames('dx-g-bs4-cursor-pointer', className),
      onClick: handleClick
    }, restProps),
    createElement(ExpandButton, {
      expanded: expanded,
      onToggle: onToggle,
      className: 'mr-2'
    }),
    createElement(
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
  className: string,
  colSpan: number,
  row: any,
  column: object,
  expanded: bool,
  onToggle: func,
  children: oneOfType([node, arrayOf(node)]),
  tableRow: object,
  tableColumn: object
} : void 0;

TableGroupCell.defaultProps = {
  className: undefined,
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
      return createElement(TableGroupRow, _extends({
        cellComponent: TableGroupCell,
        rowComponent: TableRow,
        indentColumnWidth: 33
      }, this.props));
    }
  }]);
  return TableGroupRow$$1;
}(PureComponent);

TableGroupRow$1.Row = TableRow;
TableGroupRow$1.Cell = TableGroupCell;

var SelectionControl = function SelectionControl(_ref) {
  var disabled = _ref.disabled,
      checked = _ref.checked,
      indeterminate = _ref.indeterminate,
      _onChange = _ref.onChange,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['disabled', 'checked', 'indeterminate', 'onChange', 'className']);
  return createElement('input', _extends({
    className: classNames({
      'd-inline-block': true,
      'dx-g-bs4-cursor-pointer': !disabled
    }, className),
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
  disabled: bool,
  checked: bool,
  indeterminate: bool,
  onChange: func,
  className: string
} : void 0;

SelectionControl.defaultProps = {
  disabled: false,
  checked: false,
  indeterminate: false,
  onChange: function onChange() {},
  className: undefined
};

var TableSelectAllCell = function TableSelectAllCell(_ref) {
  var className = _ref.className,
      allSelected = _ref.allSelected,
      someSelected = _ref.someSelected,
      disabled = _ref.disabled,
      onToggle = _ref.onToggle,
      tableColumn = _ref.tableColumn,
      tableRow = _ref.tableRow,
      rowSpan = _ref.rowSpan,
      restProps = objectWithoutProperties(_ref, ['className', 'allSelected', 'someSelected', 'disabled', 'onToggle', 'tableColumn', 'tableRow', 'rowSpan']);
  return createElement(
    'th',
    _extends({
      className: classNames({
        'text-center': true,
        'align-middle': !rowSpan,
        'align-bottom': !!rowSpan
      }, className),
      rowSpan: rowSpan
    }, restProps),
    createElement(SelectionControl, {
      disabled: disabled,
      checked: allSelected,
      indeterminate: someSelected,
      onChange: onToggle
    })
  );
};

process.env.NODE_ENV !== "production" ? TableSelectAllCell.propTypes = {
  className: string,
  allSelected: bool,
  someSelected: bool,
  disabled: bool,
  onToggle: func,
  tableRow: object,
  tableColumn: object,
  rowSpan: number
} : void 0;

TableSelectAllCell.defaultProps = {
  className: undefined,
  allSelected: false,
  someSelected: false,
  disabled: false,
  onToggle: function onToggle() {},
  tableRow: undefined,
  tableColumn: undefined,
  rowSpan: undefined
};

var TableSelectCell = function TableSelectCell(_ref) {
  var className = _ref.className,
      selected = _ref.selected,
      onToggle = _ref.onToggle,
      row = _ref.row,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['className', 'selected', 'onToggle', 'row', 'tableRow', 'tableColumn']);
  return createElement(
    'td',
    _extends({
      className: classNames('text-center align-middle', className)
    }, restProps),
    createElement(SelectionControl, {
      checked: selected,
      onChange: onToggle
    })
  );
};

process.env.NODE_ENV !== "production" ? TableSelectCell.propTypes = {
  className: string,
  selected: bool,
  onToggle: func,
  row: any,
  tableRow: object,
  tableColumn: object
} : void 0;

TableSelectCell.defaultProps = {
  className: undefined,
  selected: false,
  onToggle: function onToggle() {},
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined
};

var TableSelectRow = function TableSelectRow(_ref) {
  var selected = _ref.selected,
      children = _ref.children,
      style = _ref.style,
      onToggle = _ref.onToggle,
      selectByRowClick = _ref.selectByRowClick;
  return createElement(
    'tr',
    {
      style: style,
      className: selected ? 'table-active' : '',
      onClick: function onClick(e) {
        if (!selectByRowClick) return;
        e.stopPropagation();
        onToggle();
      }
    },
    children
  );
};

process.env.NODE_ENV !== "production" ? TableSelectRow.propTypes = {
  selected: bool,
  children: node,
  onToggle: func,
  selectByRowClick: bool,
  style: object
} : void 0;

TableSelectRow.defaultProps = {
  children: null,
  onToggle: function onToggle() {},
  selected: false,
  selectByRowClick: false,
  style: null
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
      return createElement(TableSelection, _extends({
        rowComponent: TableSelectRow,
        cellComponent: TableSelectCell,
        headerCellComponent: TableSelectAllCell,
        selectionColumnWidth: 40
      }, this.props));
    }
  }]);
  return TableSelection$$1;
}(PureComponent);

TableSelection$1.Cell = TableSelectCell;
TableSelection$1.HeaderCell = TableSelectAllCell;

var MINIMAL_COLUMN_WIDTH = 150;

var TableLayout$1 = function TableLayout$$1(props) {
  return createElement(TableLayout, _extends({
    layoutComponent: StaticTableLayout,
    minColumnWidth: MINIMAL_COLUMN_WIDTH
  }, props));
};

var TableCell = function TableCell(_ref) {
  var column = _ref.column,
      value = _ref.value,
      children = _ref.children,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      row = _ref.row,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['column', 'value', 'children', 'tableRow', 'tableColumn', 'row', 'className']);
  return createElement(
    'td',
    _extends({
      className: classNames({
        'dx-g-bs4-table-cell': true,
        'text-nowrap': !(tableColumn && tableColumn.wordWrapEnabled),
        'text-right': tableColumn && tableColumn.align === 'right',
        'text-center': tableColumn && tableColumn.align === 'center'
      }, className)
    }, restProps),
    children || value
  );
};

process.env.NODE_ENV !== "production" ? TableCell.propTypes = {
  value: any,
  column: object,
  row: any,
  children: oneOfType([node, arrayOf(node)]),
  tableRow: object,
  tableColumn: object,
  className: string
} : void 0;

TableCell.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined
};

var TableStubCell = function TableStubCell(_ref) {
  var className = _ref.className,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['className', 'tableRow', 'tableColumn']);
  return createElement('td', _extends({
    className: classNames('p-0', className)
  }, restProps));
};

process.env.NODE_ENV !== "production" ? TableStubCell.propTypes = {
  className: string,
  tableRow: object,
  tableColumn: object
} : void 0;

TableStubCell.defaultProps = {
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined
};

var TableStubHeaderCell = function TableStubHeaderCell(_ref) {
  var className = _ref.className,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['className', 'tableRow', 'tableColumn']);
  return createElement('th', _extends({
    className: classNames('p-0', className)
  }, restProps));
};

process.env.NODE_ENV !== "production" ? TableStubHeaderCell.propTypes = {
  className: string,
  tableRow: object,
  tableColumn: object
} : void 0;

TableStubHeaderCell.defaultProps = {
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined
};

var TableNoDataCell = function TableNoDataCell(_ref) {
  var className = _ref.className,
      colSpan = _ref.colSpan,
      getMessage = _ref.getMessage,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['className', 'colSpan', 'getMessage', 'tableRow', 'tableColumn']);
  return createElement(
    'td',
    _extends({
      className: classNames('py-5 text-center', className),
      colSpan: colSpan
    }, restProps),
    createElement(
      'big',
      { className: 'text-muted' },
      getMessage('noData')
    )
  );
};

process.env.NODE_ENV !== "production" ? TableNoDataCell.propTypes = {
  colSpan: number,
  getMessage: func.isRequired,
  tableRow: object,
  tableColumn: object,
  className: string
} : void 0;

TableNoDataCell.defaultProps = {
  className: undefined,
  colSpan: 1,
  tableRow: undefined,
  tableColumn: undefined
};

/* globals document:true window:true */

var Table$2 = function (_React$Component) {
  inherits(Table$$1, _React$Component);

  function Table$$1() {
    classCallCheck(this, Table$$1);

    var _this = possibleConstructorReturn(this, (Table$$1.__proto__ || Object.getPrototypeOf(Table$$1)).call(this));

    _this.state = {
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
      var body = document.getElementsByTagName('body')[0];
      var backgroundColor = this.state.backgroundColor;

      var _window$getComputedSt = window.getComputedStyle(body),
          bodyBackgroundColor = _window$getComputedSt.backgroundColor;

      if (backgroundColor !== bodyBackgroundColor) {
        this.setState({ backgroundColor: bodyBackgroundColor });
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
      var backgroundColor = this.state.backgroundColor;

      return createElement(
        'table',
        _extends({
          ref: function ref(node$$1) {
            _this2.node = node$$1;
          },
          className: classNames({
            'table dx-g-bs4-table': true,
            'dx-g-bs4-table-sticky': !!use,
            'dx-g-bs4-table-head': use === 'head',
            'dx-g-bs4-table-foot': use === 'foot'
          }, className)
        }, restProps, {
          style: _extends({}, style, use ? {
            backgroundColor: backgroundColor
          } : null)
        }),
        children
      );
    }
  }]);
  return Table$$1;
}(Component);

process.env.NODE_ENV !== "production" ? Table$2.propTypes = {
  use: oneOf(['head', 'foot']),
  children: oneOfType([arrayOf(node), node]).isRequired,
  style: object,
  className: string
} : void 0;

Table$2.defaultProps = {
  className: undefined,
  use: undefined,
  style: null
};

var TableContainer = function TableContainer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['children', 'className']);
  return createElement(
    'div',
    _extends({
      className: classNames('table-responsive dx-g-bs4-table-container', className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? TableContainer.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  className: string
} : void 0;

TableContainer.defaultProps = {
  className: undefined
};

var TableStubRow = function TableStubRow(_ref) {
  var children = _ref.children,
      tableRow = _ref.tableRow,
      restProps = objectWithoutProperties(_ref, ['children', 'tableRow']);
  return createElement(
    'tr',
    restProps,
    children
  );
};

process.env.NODE_ENV !== "production" ? TableStubRow.propTypes = {
  children: node,
  tableRow: object
} : void 0;

TableStubRow.defaultProps = {
  children: null,
  tableRow: undefined
};

var TableHead = function TableHead(props) {
  return createElement('thead', props);
};
var TableBody = function TableBody(props) {
  return createElement('tbody', props);
};
var TableFooter = function TableFooter(props) {
  return createElement('tfoot', props);
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


      return createElement(Table, _extends({
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
}(PureComponent);

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
  messages: shape({
    noData: string
  })
} : void 0;

Table$1.defaultProps = {
  messages: {}
};

var MINIMAL_COLUMN_WIDTH$1 = 150;

var VirtualTableLayout$1 = function VirtualTableLayout$$1(props) {
  return createElement(TableLayout, _extends({
    layoutComponent: VirtualTableLayout,
    minColumnWidth: MINIMAL_COLUMN_WIDTH$1
  }, props));
};

var FixedHeader = function FixedHeader(props) {
  return createElement(Table$2, _extends({ use: 'head' }, props));
};
var FixedFooter = function FixedFooter(props) {
  return createElement(Table$2, _extends({ use: 'foot' }, props));
};
var TableHead$1 = function TableHead(props) {
  return createElement('thead', props);
};
var TableBody$1 = function TableBody(props) {
  return createElement('tbody', props);
};
var TableFooter$1 = function TableFooter(props) {
  return createElement('tfoot', props);
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

    _this.layoutRenderComponent = createRenderComponent(VirtualTableLayout$1, {
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


      return createElement(Table, _extends({
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
}(PureComponent);

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
  estimatedRowHeight: number,
  height: oneOfType([number, oneOf(['auto'])]),
  headTableComponent: func,
  footerTableComponent: func,
  messages: shape({
    noData: string
  })
} : void 0;

VirtualTable.defaultProps = {
  estimatedRowHeight: 49,
  height: 530,
  headTableComponent: FixedHeader,
  footerTableComponent: FixedFooter,
  messages: {}
};

var TableFilterCell = function TableFilterCell(_ref) {
  var filter = _ref.filter,
      onFilter = _ref.onFilter,
      children = _ref.children,
      column = _ref.column,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      getMessage = _ref.getMessage,
      filteringEnabled = _ref.filteringEnabled,
      restProps = objectWithoutProperties(_ref, ['filter', 'onFilter', 'children', 'column', 'tableRow', 'tableColumn', 'getMessage', 'filteringEnabled']);
  return createElement(
    'th',
    restProps,
    createElement(
      'div',
      { className: 'input-group' },
      children
    )
  );
};

process.env.NODE_ENV !== "production" ? TableFilterCell.propTypes = {
  filter: object,
  onFilter: func,
  children: oneOfType([node, arrayOf(node)]),
  column: object,
  tableRow: object,
  tableColumn: object,
  getMessage: func,
  filteringEnabled: bool
} : void 0;

TableFilterCell.defaultProps = {
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
  return createElement('input', _extends({
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
  value: any,
  disabled: bool,
  onChange: func,
  getMessage: func.isRequired,
  className: string
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
    _this.handleOverlayToggle = function () {
      var opened = _this.state.opened;

      if (opened) _this.setState({ opened: false });
    };
    _this.handleMenuItemClick = function (nextValue) {
      var onChange = _this.props.onChange;

      _this.setState({ opened: false });
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

      return availableValues.length ? createElement(
        'div',
        { className: 'input-group-prepend' },
        createElement(
          'button',
          {
            type: 'button',
            className: 'btn btn-outline-secondary',
            disabled: disabled || availableValues.length === 1,
            onClick: this.handleButtonClick,
            ref: function ref(_ref) {
              _this2.targetElement = _ref;
            }
          },
          createElement(Icon, { type: value })
        ),
        this.targetElement ? createElement(
          Popover,
          {
            placement: 'bottom',
            isOpen: opened,
            target: this.targetElement,
            container: this.targetElement.parentElement,
            toggle: this.handleOverlayToggle
          },
          createElement(
            'div',
            { className: 'py-2' },
            availableValues.map(function (valueItem) {
              return createElement(
                'button',
                {
                  type: 'button',
                  key: valueItem,
                  className: classNames({
                    'dropdown-item d-flex align-items-center': true,
                    'dx-g-bs4-cursor-pointer dx-g-bs4-filter-selector-item': true,
                    active: valueItem === value
                  }),
                  onClick: function onClick() {
                    return _this2.handleMenuItemClick(valueItem);
                  }
                },
                createElement(Icon, { type: valueItem }),
                createElement(
                  'span',
                  { className: 'dx-g-bs4-filter-selector-item-text' },
                  getMessage(valueItem)
                )
              );
            })
          )
        ) : null
      ) : null;
    }
  }]);
  return FilterSelector;
}(PureComponent);

process.env.NODE_ENV !== "production" ? FilterSelector.propTypes = {
  value: string,
  availableValues: arrayOf(string),
  onChange: func,
  disabled: bool,
  iconComponent: func.isRequired,
  getMessage: func.isRequired
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
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['type', 'className']);

  var path = AVAILABLE_PATHS[type];
  return path ? createElement(
    'svg',
    _extends({
      className: classNames('d-block dx-g-bs4-filter-selector-icon', className),
      viewBox: '0 0 32 32'
    }, restProps),
    createElement('path', { d: path })
  ) : createElement('span', _extends({
    className: classNames('d-block', 'oi', 'oi-magnifying-glass', 'dx-g-bs4-filter-selector-icon', className)
  }, restProps));
};

process.env.NODE_ENV !== "production" ? Icon.propTypes = {
  type: string,
  className: string
} : void 0;

Icon.defaultProps = {
  type: undefined,
  className: undefined
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


      return createElement(TableFilterRow, _extends({
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
}(PureComponent);

TableFilterRow$1.Cell = TableFilterCell;
TableFilterRow$1.Row = TableRow;
TableFilterRow$1.Editor = Editor;
TableFilterRow$1.FilterSelector = FilterSelector;
TableFilterRow$1.Icon = Icon;

process.env.NODE_ENV !== "production" ? TableFilterRow$1.propTypes = {
  messages: shape({
    filterPlaceholder: string,
    contains: string,
    notContains: string,
    startsWith: string,
    endsWith: string,
    equal: string,
    notEqual: string,
    greaterThan: string,
    greaterThanOrEqual: string,
    lessThan: string,
    lessThanOrEqual: string
  })
} : void 0;

TableFilterRow$1.defaultProps = {
  messages: {}
};

var ResizingControl = function (_React$PureComponent) {
  inherits(ResizingControl, _React$PureComponent);

  function ResizingControl(props) {
    classCallCheck(this, ResizingControl);

    var _this = possibleConstructorReturn(this, (ResizingControl.__proto__ || Object.getPrototypeOf(ResizingControl)).call(this, props));

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

  createClass(ResizingControl, [{
    key: 'render',
    value: function render() {
      var resizing = this.state.resizing;


      return createElement(
        Draggable,
        {
          onStart: this.onResizeStart,
          onUpdate: this.onResizeUpdate,
          onEnd: this.onResizeEnd
        },
        createElement(
          'div',
          {
            className: classNames({
              'dx-g-bs4-resizing-control-wrapper': true,
              'dx-g-bs4-resizing-control-wrapper-active': resizing
            })
          },
          createElement('div', {
            className: classNames({
              'dx-g-bs4-resize-control-line dx-g-bs4-resize-control-line-first bg-primary': true,
              'dx-g-bs4-resize-control-line-active': resizing
            })
          }),
          createElement('div', {
            className: classNames({
              'dx-g-bs4-resize-control-line dx-g-bs4-resize-control-line-second bg-primary': true,
              'dx-g-bs4-resize-control-line-active': resizing
            })
          })
        )
      );
    }
  }]);
  return ResizingControl;
}(PureComponent);

process.env.NODE_ENV !== "production" ? ResizingControl.propTypes = {
  onWidthChange: func.isRequired,
  onWidthDraft: func.isRequired,
  onWidthDraftCancel: func.isRequired
} : void 0;

var GroupingControl = function GroupingControl(_ref) {
  var align = _ref.align,
      disabled = _ref.disabled,
      onGroup = _ref.onGroup;

  var invertedAlign = align === 'left';

  return createElement(
    'div',
    {
      className: classNames({
        'dx-g-bs4-grouping-control': true,
        'float-right text-right': invertedAlign,
        'float-left text-left': !invertedAlign
      }),
      onClick: function onClick(e) {
        if (disabled) return;
        e.stopPropagation();
        onGroup();
      }
    },
    createElement('span', {
      className: classNames({
        'oi oi-list dx-g-bs4-grouping-control-icon': true,
        'dx-g-bs4-cursor-pointer': !disabled,
        'dx-g-bs4-inactive': disabled
      })
    })
  );
};

process.env.NODE_ENV !== "production" ? GroupingControl.propTypes = {
  align: string.isRequired,
  onGroup: func.isRequired,
  disabled: bool
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
          className = _props.className,
          column = _props.column,
          tableColumn = _props.tableColumn,
          showGroupingControls = _props.showGroupingControls,
          onGroup = _props.onGroup,
          groupingEnabled = _props.groupingEnabled,
          draggingEnabled = _props.draggingEnabled,
          onWidthDraftCancel = _props.onWidthDraftCancel,
          resizingEnabled = _props.resizingEnabled,
          onWidthChange = _props.onWidthChange,
          onWidthDraft = _props.onWidthDraft,
          tableRow = _props.tableRow,
          getMessage = _props.getMessage,
          children = _props.children,
          showSortingControls = _props.showSortingControls,
          sortingDirection = _props.sortingDirection,
          sortingEnabled = _props.sortingEnabled,
          onSort = _props.onSort,
          before = _props.before,
          restProps = objectWithoutProperties(_props, ['className', 'column', 'tableColumn', 'showGroupingControls', 'onGroup', 'groupingEnabled', 'draggingEnabled', 'onWidthDraftCancel', 'resizingEnabled', 'onWidthChange', 'onWidthDraft', 'tableRow', 'getMessage', 'children', 'showSortingControls', 'sortingDirection', 'sortingEnabled', 'onSort', 'before']);
      var dragging = this.state.dragging;

      var align = tableColumn && tableColumn.align || 'left';

      var cellLayout = createElement(
        'th',
        _extends({
          className: classNames({
            'position-relative dx-g-bs4-header-cell': true,
            'dx-g-bs4-user-select-none': draggingEnabled,
            'dx-g-bs4-cursor-pointer': draggingEnabled,
            'dx-g-bs4-inactive': dragging || tableColumn && tableColumn.draft,
            'text-nowrap': !(tableColumn && tableColumn.wordWrapEnabled)
          }, className),
          scope: 'col'
        }, restProps),
        createElement(
          'div',
          {
            className: 'd-flex flex-direction-row align-items-center'
          },
          children,
          showGroupingControls && createElement(
            'div',
            null,
            createElement(GroupingControl, {
              align: align,
              disabled: !groupingEnabled,
              onGroup: onGroup
            })
          )
        ),
        resizingEnabled && createElement(ResizingControl, {
          onWidthChange: onWidthChange,
          onWidthDraft: onWidthDraft,
          onWidthDraftCancel: onWidthDraftCancel
        })
      );

      return draggingEnabled ? createElement(
        DragSource,
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
}(PureComponent);

process.env.NODE_ENV !== "production" ? TableHeaderCell.propTypes = {
  before: node,
  tableColumn: object,
  tableRow: object,
  column: object,
  className: string,
  showSortingControls: bool,
  sortingEnabled: bool,
  sortingDirection: oneOf(['asc', 'desc', null]),
  onSort: func,
  showGroupingControls: bool,
  onGroup: func,
  groupingEnabled: bool,
  draggingEnabled: bool,
  resizingEnabled: bool,
  onWidthChange: func,
  onWidthDraft: func,
  onWidthDraftCancel: func,
  getMessage: func,
  children: oneOfType([arrayOf(node), node])
} : void 0;

TableHeaderCell.defaultProps = {
  before: undefined,
  column: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  className: undefined,
  showSortingControls: false,
  sortingEnabled: false,
  sortingDirection: undefined,
  onSort: undefined,
  showGroupingControls: false,
  onGroup: undefined,
  groupingEnabled: false,
  draggingEnabled: false,
  resizingEnabled: false,
  onWidthChange: undefined,
  onWidthDraft: undefined,
  onWidthDraftCancel: undefined,
  getMessage: undefined,
  children: undefined
};

var handleMouseDown$2 = function handleMouseDown(e) {
  e.currentTarget.style.outline = 'none';
};
var handleBlur$2 = function handleBlur(e) {
  e.currentTarget.style.outline = '';
};

var ENTER_KEY_CODE$2 = 13;
var SPACE_KEY_CODE$2 = 32;

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
      restProps = objectWithoutProperties(_ref, ['align', 'direction', 'disabled', 'children', 'onSort', 'getMessage', 'className', 'column']);
  return createElement(
    'span',
    _extends({
      className: classNames({
        'd-inline-flex flex-direction-row align-items-center mw-100 dx-g-bs4-user-select-none': true,
        'dx-g-bs4-cursor-pointer': !disabled,
        'flex-row-reverse': align === 'right',
        'text-primary': direction
      }, className),
      tabIndex: disabled ? -1 : 0,
      onMouseDown: handleMouseDown$2,
      onBlur: handleBlur$2,
      onKeyDown: function onKeyDown(e) {
        return _onClick(e, onSort);
      },
      onClick: function onClick(e) {
        return _onClick(e, onSort);
      }
    }, restProps),
    children,
    createElement(SortingIndicator, {
      direction: direction,
      className: direction ? '' : 'dx-g-bs4-sort-indicator-invisible'
    })
  );
};

process.env.NODE_ENV !== "production" ? SortLabel.propTypes = {
  column: object,
  align: string,
  direction: oneOf(['asc', 'desc']),
  children: node,
  onSort: func.isRequired,
  disabled: bool,
  className: string,
  getMessage: func
} : void 0;

SortLabel.defaultProps = {
  column: undefined,
  direction: null,
  disabled: false,
  children: undefined,
  className: undefined,
  align: 'left',
  getMessage: function getMessage() {}
};

var Title = function Title(_ref) {
  var children = _ref.children,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['children', 'className']);
  return createElement(
    'span',
    _extends({
      className: classNames('dx-rg-bs4-table-header-titlt', className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? Title.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  className: string
} : void 0;

Title.defaultProps = {
  className: null,
  children: undefined
};

var Content = function Content(_ref) {
  var column = _ref.column,
      children = _ref.children,
      align = _ref.align,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['column', 'children', 'align', 'className']);
  return createElement(
    'div',
    _extends({
      className: classNames({
        'w-100 d-flex flex-row align-items-end': true,
        'justify-content-center': align === 'center',
        'justify-content-end': align === 'right'
      }, className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? Content.propTypes = {
  column: object,
  children: oneOfType([arrayOf(node), node]),
  align: string,
  className: string
} : void 0;

Content.defaultProps = {
  column: undefined,
  align: 'left',
  className: null,
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
      return createElement(TableHeaderRow, _extends({
        cellComponent: TableHeaderCell,
        rowComponent: TableRow,
        contentComponent: Content,
        sortLabelComponent: SortLabel,
        titleComponent: Title
      }, this.props));
    }
  }]);
  return TableHeaderRow$$1;
}(PureComponent);

TableHeaderRow$1.Cell = TableHeaderCell;
TableHeaderRow$1.Row = TableRow;
TableHeaderRow$1.Content = Content;
TableHeaderRow$1.SortLabel = SortLabel;
TableHeaderRow$1.Title = Title;

var Cell = function Cell(_ref) {
  var column = _ref.column,
      children = _ref.children,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      row = _ref.row,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['column', 'children', 'tableRow', 'tableColumn', 'row', 'className']);
  return createElement(
    'th',
    _extends({
      className: classNames('dx-g-bs4-banded-cell dx-g-bs4-table-cell text-nowrap border-left border-right border-bottom', className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? Cell.propTypes = {
  column: object,
  row: any,
  children: oneOfType([node, arrayOf(node)]),
  tableRow: object,
  tableColumn: object,
  className: string
} : void 0;

Cell.defaultProps = {
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined
};

var BandedHeaderCell = function BandedHeaderCell(_ref) {
  var HeaderCellComponent = _ref.component,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['component', 'className']);
  return createElement(HeaderCellComponent, _extends({ className: classNames('dx-g-bs4-banded-header-cell border-left border-right', className) }, restProps));
};

process.env.NODE_ENV !== "production" ? BandedHeaderCell.propTypes = {
  component: func.isRequired,
  className: string
} : void 0;

BandedHeaderCell.defaultProps = {
  className: undefined
};

var InvisibleCell = function InvisibleCell() {
  return createElement("th", { className: "d-none" });
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
      return createElement(TableBandHeader, _extends({
        cellComponent: Cell,
        rowComponent: TableRow,
        bandedHeaderCellComponent: BandedHeaderCell,
        invisibleCellComponent: InvisibleCell
      }, this.props));
    }
  }]);
  return TableBandHeader$$1;
}(PureComponent);

TableBandHeader$1.Cell = Cell;
TableBandHeader$1.Row = TableRow;
TableBandHeader$1.BandedHeaderCell = BandedHeaderCell;

var EditCell = function EditCell(_ref) {
  var column = _ref.column,
      value = _ref.value,
      onValueChange = _ref.onValueChange,
      className = _ref.className,
      children = _ref.children,
      row = _ref.row,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      editingEnabled = _ref.editingEnabled,
      restProps = objectWithoutProperties(_ref, ['column', 'value', 'onValueChange', 'className', 'children', 'row', 'tableRow', 'tableColumn', 'editingEnabled']);
  return createElement(
    'td',
    _extends({
      className: classNames('align-middle dx-g-bs4-table-edit-cell', className)
    }, restProps),
    children || createElement('input', {
      type: 'text',
      className: classNames({
        'form-control w-100': true,
        'text-right': tableColumn && tableColumn.align === 'right',
        'text-center': tableColumn && tableColumn.align === 'center'
      }),
      readOnly: !editingEnabled,
      value: value,
      onChange: function onChange(e) {
        return onValueChange(e.target.value);
      }
    })
  );
};
process.env.NODE_ENV !== "production" ? EditCell.propTypes = {
  column: object,
  row: any,
  tableColumn: object,
  tableRow: object,
  value: any,
  onValueChange: func.isRequired,
  className: string,
  editingEnabled: bool,
  children: node
} : void 0;
EditCell.defaultProps = {
  column: undefined,
  row: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  className: undefined,
  children: undefined,
  editingEnabled: true,
  value: ''
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
      return createElement(TableEditRow, _extends({
        cellComponent: EditCell,
        rowComponent: TableRow
      }, this.props));
    }
  }]);
  return TableEditRow$$1;
}(PureComponent);

TableEditRow$1.Cell = EditCell;
TableEditRow$1.Row = TableRow;

var CommandButton = function CommandButton(_ref) {
  var onExecute = _ref.onExecute,
      text = _ref.text,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['onExecute', 'text', 'className']);
  return createElement(
    'button',
    _extends({
      type: 'button',
      className: classNames('btn btn-link dx-g-bs4-table-edit-command-cell', className),
      onClick: function onClick(e) {
        e.stopPropagation();
        onExecute();
      }
    }, restProps),
    text
  );
};

process.env.NODE_ENV !== "production" ? CommandButton.propTypes = {
  text: string.isRequired,
  onExecute: func.isRequired,
  className: string
} : void 0;

CommandButton.defaultProps = {
  className: undefined
};

var EditCommandHeadingCell = function EditCommandHeadingCell(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      tableColumn = _ref2.tableColumn,
      tableRow = _ref2.tableRow,
      restProps = objectWithoutProperties(_ref2, ['children', 'className', 'tableColumn', 'tableRow']);
  return createElement(
    'th',
    _extends({
      className: classNames('text-center p-0 text-nowrap', className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? EditCommandHeadingCell.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  tableColumn: object,
  tableRow: object,
  className: string
} : void 0;

EditCommandHeadingCell.defaultProps = {
  children: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  className: undefined
};

var EditCommandCell = function EditCommandCell(_ref3) {
  var tableColumn = _ref3.tableColumn,
      tableRow = _ref3.tableRow,
      row = _ref3.row,
      children = _ref3.children,
      className = _ref3.className,
      restProps = objectWithoutProperties(_ref3, ['tableColumn', 'tableRow', 'row', 'children', 'className']);
  return createElement(
    'td',
    _extends({
      className: classNames('text-center p-0 text-nowrap', className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? EditCommandCell.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  tableColumn: object,
  tableRow: object,
  row: any,
  className: string
} : void 0;

EditCommandCell.defaultProps = {
  children: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined,
  className: undefined
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


      return createElement(TableEditColumn, _extends({
        cellComponent: EditCommandCell,
        headerCellComponent: EditCommandHeadingCell,
        commandComponent: CommandButton,
        messages: _extends({}, defaultMessages$5, messages)
      }, restProps));
    }
  }]);
  return TableEditColumn$$1;
}(PureComponent);

TableEditColumn$1.Command = CommandButton;
TableEditColumn$1.Cell = EditCommandCell;
TableEditColumn$1.HeaderCell = EditCommandHeadingCell;

process.env.NODE_ENV !== "production" ? TableEditColumn$1.propTypes = {
  messages: shape({
    addCommand: string,
    editCommand: string,
    deleteCommand: string,
    commitCommand: string,
    cancelCommand: string
  })
} : void 0;

TableEditColumn$1.defaultProps = {
  messages: {}
};

var EmptyMessage = function EmptyMessage(_ref) {
  var getMessage = _ref.getMessage,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['getMessage', 'className']);
  return createElement(
    'div',
    _extends({
      className: classNames('py-5 text-center', className)
    }, restProps),
    createElement(
      'big',
      { className: 'text-muted' },
      getMessage('noColumns')
    )
  );
};

process.env.NODE_ENV !== "production" ? EmptyMessage.propTypes = {
  getMessage: func.isRequired,
  className: string
} : void 0;

EmptyMessage.defaultProps = {
  className: undefined
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


      return createElement(TableColumnVisibility, _extends({
        emptyMessageComponent: EmptyMessage,
        messages: _extends({}, defaultMessages$6, messages)
      }, restProps));
    }
  }]);
  return TableColumnVisibility$$1;
}(PureComponent);

TableColumnVisibility$1.EmptyMessage = EmptyMessage;

process.env.NODE_ENV !== "production" ? TableColumnVisibility$1.propTypes = {
  messages: shape({
    noColumns: string
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
  return createElement('td', {
    ref: refHandler,
    className: 'p-0 border-0',
    style: style
  });
};

process.env.NODE_ENV !== "production" ? TableReorderingCell.propTypes = {
  getCellDimensions: func.isRequired,
  style: object
} : void 0;

TableReorderingCell.defaultProps = {
  style: null
};

var TableContainer$1 = function TableContainer(_ref) {
  var onOver = _ref.onOver,
      onLeave = _ref.onLeave,
      onDrop = _ref.onDrop,
      children = _ref.children;
  return createElement(
    DropTarget,
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
  return createElement(TableRow, _extends({
    style: _extends({}, style, {
      visibility: 'hidden'
    })
  }, restParams));
};

var TableColumnReordering$1 = function TableColumnReordering$$1(props) {
  return createElement(TableColumnReordering, _extends({
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

      return createElement(TableColumnResizing, _extends({}, restProps, {
        minColumnWidth: minColumnWidth
      }));
    }
  }]);
  return TableColumnResizing$$1;
}(PureComponent);

process.env.NODE_ENV !== "production" ? TableColumnResizing$1.propTypes = {
  minColumnWidth: number
} : void 0;

TableColumnResizing$1.defaultProps = {
  minColumnWidth: 55
};

var Toolbar$2 = function Toolbar$$1(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['children', 'className', 'style']);
  return createElement(
    'div',
    _extends({
      className: classNames('card-header py-2 d-flex position-relative dx-g-bs4-toolbar', className),
      style: style
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? Toolbar$2.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  className: string,
  style: object
} : void 0;

Toolbar$2.defaultProps = {
  className: undefined,
  style: null
};

var FlexibleSpace = function FlexibleSpace() {
  return createElement("div", { className: "d-flex ml-auto" });
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
      return createElement(Toolbar, _extends({
        rootComponent: Toolbar$2,
        flexibleSpaceComponent: FlexibleSpace
      }, this.props));
    }
  }]);
  return Toolbar$$1;
}(PureComponent);

Toolbar$1.Root = Toolbar$2;

var TableTreeExpandButton = function TableTreeExpandButton(_ref) {
  var className = _ref.className,
      visible = _ref.visible,
      expanded = _ref.expanded,
      onToggle = _ref.onToggle,
      restProps = objectWithoutProperties(_ref, ['className', 'visible', 'expanded', 'onToggle']);
  return createElement(ExpandButton, _extends({
    visible: visible,
    expanded: expanded,
    onToggle: onToggle,
    className: classNames('mr-3', className)
  }, restProps));
};

process.env.NODE_ENV !== "production" ? TableTreeExpandButton.propTypes = {
  className: string,
  visible: bool,
  expanded: bool,
  onToggle: func
} : void 0;

TableTreeExpandButton.defaultProps = {
  className: undefined,
  visible: false,
  expanded: false,
  onToggle: function onToggle() {}
};

var TableTreeCheckbox = function TableTreeCheckbox(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      indeterminate = _ref.indeterminate,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      restProps = objectWithoutProperties(_ref, ['className', 'checked', 'indeterminate', 'disabled', 'onChange']);
  return createElement(SelectionControl, _extends({
    disabled: disabled,
    checked: checked,
    indeterminate: indeterminate,
    onChange: onChange,
    className: classNames('mr-4', className)
  }, restProps));
};

process.env.NODE_ENV !== "production" ? TableTreeCheckbox.propTypes = {
  className: string,
  checked: bool,
  indeterminate: bool,
  disabled: bool,
  onChange: func
} : void 0;

TableTreeCheckbox.defaultProps = {
  className: undefined,
  checked: false,
  indeterminate: false,
  disabled: false,
  onChange: function onChange() {}
};

var TableTreeIndent = function TableTreeIndent(_ref) {
  var level = _ref.level;
  return Array.from({ length: level }).map(function (value, currentLevel) {
    return createElement('span', {
      // eslint-disable-next-line react/no-array-index-key
      key: currentLevel,
      className: 'd-inline-block mr-4'
    });
  });
};

process.env.NODE_ENV !== "production" ? TableTreeIndent.propTypes = {
  level: number
} : void 0;

TableTreeIndent.defaultProps = {
  level: 0
};

var TableTreeCell = function TableTreeCell(_ref) {
  var column = _ref.column,
      children = _ref.children,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      row = _ref.row,
      restProps = objectWithoutProperties(_ref, ['column', 'children', 'tableRow', 'tableColumn', 'row']);
  return createElement(
    'td',
    restProps,
    createElement(
      'div',
      {
        className: 'd-flex flex-direction-row align-items-center'
      },
      children
    )
  );
};

process.env.NODE_ENV !== "production" ? TableTreeCell.propTypes = {
  column: object,
  row: any,
  children: node,
  tableRow: object,
  tableColumn: object,
  style: object
} : void 0;

TableTreeCell.defaultProps = {
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  style: null
};

var TableTreeContent = function TableTreeContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['children', 'className']);
  return createElement(
    'div',
    _extends({
      className: classNames('text-nowrap w-100 dx-g-bs4-table-tree-content', className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? TableTreeContent.propTypes = {
  className: string,
  children: node
} : void 0;

TableTreeContent.defaultProps = {
  className: undefined,
  children: undefined
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
      return createElement(TableTreeColumn, _extends({
        cellComponent: TableTreeCell,
        contentComponent: TableTreeContent,
        indentComponent: TableTreeIndent,
        expandButtonComponent: TableTreeExpandButton,
        checkboxComponent: TableTreeCheckbox
      }, this.props));
    }
  }]);
  return TableTreeColumn$$1;
}(PureComponent);

TableTreeColumn$1.Cell = TableTreeCell;
TableTreeColumn$1.Content = TableTreeContent;
TableTreeColumn$1.Indent = TableTreeIndent;
TableTreeColumn$1.ExpandButton = TableTreeExpandButton;
TableTreeColumn$1.Checkbox = TableTreeCheckbox;

var SearchPanelInput = function SearchPanelInput(_ref) {
  var onValueChange = _ref.onValueChange,
      value = _ref.value,
      getMessage = _ref.getMessage,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['onValueChange', 'value', 'getMessage', 'className']);
  return createElement('input', _extends({
    type: 'text',
    className: classNames('form-control w-25', className),
    onChange: function onChange(e) {
      return onValueChange(e.target.value);
    },
    value: value,
    placeholder: getMessage('searchPlaceholder')
  }, restProps));
};

process.env.NODE_ENV !== "production" ? SearchPanelInput.propTypes = {
  value: any,
  onValueChange: func.isRequired,
  getMessage: func.isRequired,
  className: string
} : void 0;

SearchPanelInput.defaultProps = {
  value: null,
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

      return createElement(SearchPanel, _extends({
        inputComponent: SearchPanelInput,
        messages: _extends({}, defaultMessages$7, messages)
      }, restProps));
    }
  }]);
  return SearchPanel$$1;
}(PureComponent);

SearchPanel$1.Input = SearchPanelInput;

process.env.NODE_ENV !== "production" ? SearchPanel$1.propTypes = {
  messages: shape({
    searchPlaceholder: string
  })
} : void 0;

SearchPanel$1.defaultProps = {
  messages: {}
};

var TableSummaryItem = function TableSummaryItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['children', 'className']);
  return createElement(
    'div',
    _extends({
      className: classNames('dx-g-bs4-table-summary-item', className)
    }, restProps),
    children
  );
};

process.env.NODE_ENV !== "production" ? TableSummaryItem.propTypes = {
  className: string,
  children: node
} : void 0;

TableSummaryItem.defaultProps = {
  className: undefined,
  children: undefined
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


      return createElement(TableSummaryRow, _extends({
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
}(PureComponent);

process.env.NODE_ENV !== "production" ? TableSummaryRow$1.propTypes = {
  messages: shape({
    sum: string,
    min: string,
    max: string,
    avg: string,
    count: string
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

export { Grid$1 as Grid, ColumnChooser$1 as ColumnChooser, DragDropProvider$1 as DragDropProvider, PagingPanel$1 as PagingPanel, GroupingPanel$1 as GroupingPanel, TableRowDetail$1 as TableRowDetail, TableGroupRow$1 as TableGroupRow, TableSelection$1 as TableSelection, Table$1 as Table, VirtualTable, TableFilterRow$1 as TableFilterRow, TableHeaderRow$1 as TableHeaderRow, TableBandHeader$1 as TableBandHeader, TableEditRow$1 as TableEditRow, TableEditColumn$1 as TableEditColumn, TableColumnVisibility$1 as TableColumnVisibility, TableColumnReordering$1 as TableColumnReordering, TableColumnResizing$1 as TableColumnResizing, Toolbar$1 as Toolbar, TableTreeColumn$1 as TableTreeColumn, SearchPanel$1 as SearchPanel, TableSummaryRow$1 as TableSummaryRow };
//# sourceMappingURL=dx-react-grid-bootstrap4.es.js.map