/**
 * Bundle of @devexpress/dx-vue-grid-bootstrap4
 * Generated: 2018-09-04
 * Version: 1.7.2
 * License: https://js.devexpress.com/Licensing
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@devexpress/dx-vue-grid'), require('@devexpress/dx-grid-core'), require('@devexpress/dx-vue-core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@devexpress/dx-vue-grid', '@devexpress/dx-grid-core', '@devexpress/dx-vue-core'], factory) :
	(factory((global.DevExpress = global.DevExpress || {}, global.DevExpress.DXVueGridBootstrap4 = {}),global.DevExpress.DXVueGrid,global.DevExpress.DXGridCore,global.DevExpress.DXVueCore));
}(this, (function (exports,dxVueGrid,dxGridCore,dxVueCore) { 'use strict';

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/;

var babelHelperVueJsxMergeProps = function mergeJSXProps(objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp;
    for (key in b) {
      aa = a[key];
      bb = b[key];
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa;
            a[key] = aa = {};
            aa[temp] = true;
          }
          if (typeof bb === 'string') {
            temp = bb;
            b[key] = bb = {};
            bb[temp] = true;
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey]);
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb);
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb);
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey];
          }
        }
      } else {
        a[key] = b[key];
      }
    }
    return a;
  }, {});
};

function mergeFn(a, b) {
  return function () {
    a && a.apply(this, arguments);
    b && b.apply(this, arguments);
  };
}

var GridRoot = {
  render: function render() {
    var h = arguments[0];

    return h("div", [this.$slots.default]);
  }
};

var DxGrid$1 = {
  name: 'DxGrid',
  functional: true,
  render: function render(h, context) {
    return h(
      dxVueGrid.DxGrid,
      babelHelperVueJsxMergeProps([{
        attrs: {
          rootComponent: GridRoot
        }
      }, context.data]),
      [context.children]
    );
  },

  components: {
    DxRoot: GridRoot
  }
};

var MINIMAL_COLUMN_WIDTH = 150;

var TableLayout$1 = {
  render: function render() {
    var h = arguments[0];

    return h(dxVueGrid.TableLayout, babelHelperVueJsxMergeProps([{ attrs: this.$attrs }, {
      attrs: {
        layoutComponent: dxVueGrid.StaticTableLayout,
        minColumnWidth: MINIMAL_COLUMN_WIDTH
      }
    }]));
  }
};

var TableContainer = {
  render: function render() {
    var h = arguments[0];

    return h(
      "div",
      babelHelperVueJsxMergeProps([{
        "class": "table-responsive"
      }, { attrs: this.$attrs, on: this.$listeners }]),
      [this.$slots.default]
    );
  }
};

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

var Table = {
  name: 'Table',
  props: {
    use: {
      type: String
    },
    minWidth: {
      type: String
    }
  },
  data: function data() {
    return {
      backgroundColor: 'white'
    };
  },
  mounted: function mounted() {
    this.checkStyles();
  },

  methods: {
    checkStyles: function checkStyles() {
      var body = document.getElementsByTagName('body')[0];

      var _window$getComputedSt = window.getComputedStyle(body),
          backgroundColor = _window$getComputedSt.backgroundColor;

      if (this.backgroundColor !== backgroundColor) {
        this.backgroundColor = backgroundColor;
      }
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(
      'table',
      babelHelperVueJsxMergeProps([{
        'class': {
          'table mb-0 dx-g-bs4-overflow-hidden dx-g-bs4-table': true,
          'dx-g-bs4-table-head': this.use === 'head',
          'dx-g-bs4-table-sticky': !!this.use
        },
        style: _extends({
          minWidth: this.minWidth
        }, this.use === 'head' ? {
          backgroundColor: this.backgroundColor
        } : null)
      }, { attrs: this.$attrs, on: this.$listeners }]),
      [this.$slots.default]
    );
  }
};

var TableHead = {
  render: function render() {
    var h = arguments[0];

    return h(
      "thead",
      { attrs: this.$attrs, on: this.$listeners },
      [this.$slots.default]
    );
  }
};

var TableBody = {
  render: function render() {
    var h = arguments[0];

    return h(
      "tbody",
      { attrs: this.$attrs, on: this.$listeners },
      [this.$slots.default]
    );
  }
};

var TableRow = {
  name: 'TableRow',
  props: {
    row: null,
    tableRow: {
      type: Object
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(
      'tr',
      { attrs: this.$attrs, on: this.$listeners },
      [this.$slots.default]
    );
  }
};

var TableCell = {
  name: 'TableCell',
  props: {
    row: null,
    tableRow: {
      type: Object
    },
    column: {
      type: Object
    },
    tableColumn: {
      type: Object
    },
    value: null
  },
  render: function render() {
    var h = arguments[0];
    var tableColumn = this.tableColumn;

    var align = tableColumn && tableColumn.align || 'left';

    return h(
      'td',
      babelHelperVueJsxMergeProps([{
        'class': defineProperty({
          'dx-g-bs4-table-cell': true,
          'text-nowrap': !(tableColumn && tableColumn.wordWrapEnabled)
        }, 'text-' + align, align !== 'left')
      }, { attrs: this.$attrs, on: this.$listeners }]),
      [this.$slots.default || this.value]
    );
  }
};

var TableNoDataCell = {
  props: {
    tableRow: {
      type: Object
    },
    tableColumn: {
      type: Object
    },
    getMessage: {
      type: Function,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(
      "td",
      babelHelperVueJsxMergeProps([{
        "class": "py-5 text-center"
      }, { attrs: this.$attrs, on: this.$listeners }]),
      [h(
        "big",
        {
          attrs: { className: "text-muted" }
        },
        [this.getMessage('noData')]
      )]
    );
  }
};

var TableStubRow = {
  name: 'TableStubRow',
  props: {
    tableRow: {
      type: Object
    },
    height: {
      type: String
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(
      'tr',
      {
        style: {
          height: this.height
        }
      },
      [this.$slots.default]
    );
  }
};

var TableHeaderStubCell = {
  props: {
    tableRow: {
      type: Object
    },
    tableColumn: {
      type: Object
    }
  },
  render: function render() {
    var h = arguments[0];

    return h("th", {
      "class": "py-0"
    });
  }
};

var TableStubCell = {
  name: 'TableStubCell',
  props: {
    tableRow: {
      type: Object
    },
    tableColumn: {
      type: Object
    }
  },
  render: function render() {
    var h = arguments[0];

    return h("td", { "class": "py-0" });
  }
};

var defaultMessages = {
  noData: 'No data'
};

var DxTable$1 = {
  name: 'DxTable',
  functional: true,
  props: {
    messages: {
      type: Object
    }
  },
  render: function render(h, context) {
    return h(dxVueGrid.DxTable, babelHelperVueJsxMergeProps([{
      attrs: {
        layoutComponent: TableLayout$1,
        containerComponent: TableContainer,
        tableComponent: Table,
        headComponent: TableHead,
        bodyComponent: TableBody,
        rowComponent: TableRow,
        cellComponent: TableCell,
        noDataCellComponent: TableNoDataCell,
        noDataRowComponent: TableRow,
        stubRowComponent: TableStubRow,
        stubCellComponent: TableStubCell,
        stubHeaderCellComponent: TableHeaderStubCell,
        messages: _extends({}, defaultMessages, context.props.messages)
      }
    }, context.data]));
  },

  components: {
    DxContainer: TableContainer,
    DxTable: Table,
    DxTableHead: TableHead,
    DxTableBody: TableBody,
    DxRow: TableRow,
    DxCell: TableCell,
    DxNoDataCell: TableNoDataCell,
    DxNoDataRow: TableRow,
    DxStubCell: TableStubCell,
    DxStubHeaderCell: TableHeaderStubCell,
    DxStubRow: TableStubRow
  }
};

var SortingIndicator = {
  props: {
    direction: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean
    }
  },
  render: function render() {
    var h = arguments[0];
    var direction = this.direction;

    var classes = {
      'oi dx-g-bs4-sorting-indicator mx-2': true,
      'oi-arrow-thick-bottom': direction === 'desc',
      'oi-arrow-thick-top': direction !== 'desc',
      invisible: !direction
    };
    return h('span', {
      'class': classes
    });
  }
};

var ENTER_KEY_CODE = 13;
var SPACE_KEY_CODE = 32;

var SortingControl = {
  props: {
    align: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean
    }
  },
  methods: {
    handleMouseDown: function handleMouseDown(e) {
      e.currentTarget.style.outline = 'none';
    },
    handleBlur: function handleBlur(e) {
      e.currentTarget.style.outline = '';
    },
    handleClick: function handleClick(e) {
      this.emitChange(e);
    },
    handleKeyDown: function handleKeyDown(e) {
      var isActionKeyDown = e.keyCode === ENTER_KEY_CODE || e.keyCode === SPACE_KEY_CODE;
      if (!isActionKeyDown) return;

      this.emitChange(e);
    },
    emitChange: function emitChange(e) {
      if (this.disabled) return;

      var cancelSortingRelatedKey = e.metaKey || e.ctrlKey;
      var direction = cancelSortingRelatedKey ? null : undefined;

      e.preventDefault();
      this.$emit('change', {
        direction: direction,
        keepOther: e.shiftKey || cancelSortingRelatedKey
      });
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(
      'span',
      {
        'class': {
          'd-inline-flex flex-direction-row align-items-center mw-100': true,
          'dx-g-bs4-cursor-pointer': !this.disabled,
          'flex-row-reverse': this.align === 'right',
          'text-primary': this.direction
        },
        on: {
          'click': this.handleClick,
          'keydown': this.handleKeyDown,
          'blur': this.handleBlur,
          'mousedown': this.handleMouseDown
        },
        attrs: {
          tabIndex: this.disabled ? -1 : 0
        }
      },
      [h(
        'span',
        {
          'class': 'dx-g-bs4-sorting-control-text'
        },
        [this.$slots.default]
      ), this.direction && h(SortingIndicator, {
        attrs: {
          direction: this.direction
        }
      })]
    );
  }
};

var GroupingControl = {
  props: {
    align: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var align = this.align,
        disabled = this.disabled;

    var invertedAlign = align === 'left';

    return h(
      'div',
      {
        'class': {
          'dx-g-bs4-grouping-control': true,
          'float-right text-right': invertedAlign,
          'float-left text-left': !invertedAlign
        },
        on: {
          'click': function click(e) {
            if (disabled) return;
            e.stopPropagation();
            _this.$emit('group');
          }
        }
      },
      [h('span', {
        'class': {
          'oi oi-list dx-g-bs4-grouping-control-icon': true,
          'dx-g-bs4-cursor-pointer': !disabled,
          'dx-g-bs4-inactive': disabled
        }
      })]
    );
  }
};

var TableHeaderCell = {
  props: {
    tableRow: {
      type: Object
    },
    column: {
      type: Object
    },
    tableColumn: {
      type: Object
    },
    sortingDirection: {
      type: String
    },
    showSortingControls: {
      type: Boolean,
      default: false
    },
    showGroupingControls: {
      type: Boolean,
      default: false
    },
    sortingEnabled: {
      type: Boolean,
      default: false
    },
    groupingEnabled: {
      type: Boolean,
      default: false
    }
  },
  render: function render() {
    var h = arguments[0];
    var tableColumn = this.tableColumn,
        column = this.column,
        showSortingControls = this.showSortingControls,
        showGroupingControls = this.showGroupingControls,
        sortingEnabled = this.sortingEnabled,
        groupingEnabled = this.groupingEnabled,
        sortingDirection = this.sortingDirection;

    var isCellInteractive = showSortingControls && sortingEnabled;
    var align = tableColumn && tableColumn.align || 'left';
    var columnTitle = column && (column.title || column.name);
    return h(
      'th',
      {
        'class': {
          'position-relative dx-g-bs4-header-cell': true,
          'dx-g-bs4-user-select-none': isCellInteractive
        },
        attrs: { scope: 'col'
        }
      },
      [h(
        'div',
        {
          'class': 'd-flex flex-direction-row align-items-center'
        },
        [this.$slots.before, h(
          'div',
          {
            'class': defineProperty({
              'dx-g-bs4-table-header-cell-wrapper': true,
              'text-nowrap': !(tableColumn && tableColumn.wordWrapEnabled)
            }, 'text-' + align, align !== 'left')
          },
          [showSortingControls ? h(
            SortingControl,
            {
              attrs: {
                align: align,
                disabled: !sortingEnabled,
                direction: sortingDirection
              },
              on: {
                'change': this.$emit.bind(this, 'sort')
              }
            },
            [columnTitle]
          ) : columnTitle]
        ), showGroupingControls && h('div', [h(GroupingControl, {
          attrs: {
            align: align,
            disabled: !groupingEnabled
          },
          on: {
            'group': this.$emit.bind(this, 'group')
          }
        })])]
      )]
    );
  }
};

var DxTableHeaderRow$1 = {
  name: 'DxTableHeaderRow',
  functional: true,
  render: function render(h, context) {
    return h(dxVueGrid.DxTableHeaderRow, babelHelperVueJsxMergeProps([{
      attrs: {
        cellComponent: TableHeaderCell,
        rowComponent: TableRow
      }
    }, context.data]));
  },

  components: {
    DxCell: TableHeaderCell,
    DxRow: TableRow
  }
};

var TableFilterCell = {
  name: 'TableFilterCell',
  props: {
    column: {
      type: Object
    },
    tableRow: {
      type: Object
    },
    tableColumn: {
      type: Object
    },
    getMessage: {
      type: Function
    },
    filter: {
      type: Object,
      default: null
    },
    filteringEnabled: {
      type: Boolean,
      default: true
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(
      "th",
      { attrs: _extends({}, this.$attrs), on: _extends({}, this.$listeners) },
      [h(
        "div",
        { "class": "input-group" },
        [this.$slots.default]
      )]
    );
  }
};

var Editor = {
  name: 'Editor',
  inheritAttrs: false,
  props: {
    value: {
      type: [Number, String],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    getMessage: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleChange: function handleChange(e) {
      this.$emit('changeValue', e.target.value);
    }
  },
  render: function render() {
    var h = arguments[0];
    var value = this.value,
        disabled = this.disabled,
        getMessage = this.getMessage;


    return h('input', babelHelperVueJsxMergeProps([{ attrs: _extends({}, this.$attrs), on: _extends({}, this.$listeners) }, {
      attrs: {
        type: 'text',

        readOnly: disabled,
        placeholder: getMessage('filterPlaceholder')
      },
      'class': 'form-control',
      domProps: {
        'value': value
      },
      on: {
        'input': this.handleChange
      }
    }]));
  }
};

var offsetX = 5;
var offsetY = 5;
var Popover = {
  name: 'Popover',
  props: {
    target: null,
    container: null,
    width: {
      type: Number,
      default: 0
    },
    visible: {
      type: Boolean
    }
  },
  methods: {
    handleDocumentClick: function handleDocumentClick(e) {
      if (e.target !== this.$el && !this.$el.contains(e.target)) {
        this.$emit('toggle', e);
      }
    },
    setElementTranslate: function setElementTranslate() {
      var _target$getBoundingCl = this.target.getBoundingClientRect(),
          targetHeight = _target$getBoundingCl.height,
          targetWidth = _target$getBoundingCl.width,
          targetLeft = _target$getBoundingCl.left;

      var _container = this.container,
          container = _container === undefined ? document.body : _container,
          width = this.width;

      var popoverWidth = width || this.$el.offsetWidth;
      var x = (targetWidth - popoverWidth) / 2;
      var popoverRight = targetLeft + (targetWidth + popoverWidth) / 2;
      if (popoverRight > container.offsetWidth) {
        x -= popoverRight - container.offsetWidth + offsetX;
      }
      if (targetLeft - Math.abs(x) < 0) {
        x = offsetX - targetLeft;
      }
      this.$el.style.transform = 'translate(' + x + 'px, ' + (targetHeight + offsetY) + 'px)';
    }
  },
  created: function created() {
    document.addEventListener('click', this.handleDocumentClick);
  },
  destroyed: function destroyed() {
    document.removeEventListener('click', this.handleDocumentClick);
  },
  mounted: function mounted() {
    this.setElementTranslate();
  },
  updated: function updated() {
    this.setElementTranslate();
  },
  render: function render() {
    var h = arguments[0];

    return h(
      'div',
      {
        'class': {
          popover: true,
          'd-none': !this.visible
        }
      },
      [h(
        'div',
        { 'class': 'popover-inner' },
        [this.$slots.default]
      )]
    );
  }
};

var FilterSelector = {
  name: 'FilterSelector',
  props: {
    value: {
      type: String
    },
    availableValues: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    getMessage: {
      type: Function,
      required: true
    },
    iconComponent: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      opened: false
    };
  },

  methods: {
    handleButtonClick: function handleButtonClick(e) {
      e.stopPropagation();
      this.opened = !this.opened;
    },
    handleOverlayToggle: function handleOverlayToggle() {
      if (this.opened) this.opened = false;
    },
    handleMenuItemClick: function handleMenuItemClick(nextValue) {
      this.opened = false;
      this.$emit('changeValue', nextValue);
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var value = this.value,
        availableValues = this.availableValues,
        disabled = this.disabled,
        getMessage = this.getMessage,
        Icon = this.iconComponent,
        opened = this.opened;

    return availableValues.length ? h(
      'div',
      { 'class': 'input-group-prepend' },
      [h(
        'button',
        {
          'class': 'btn btn-outline-secondary',
          attrs: { disabled: disabled || availableValues.length === 1
          },
          on: {
            'click': this.handleButtonClick
          },

          ref: 'buttonRef'
        },
        [h(Icon, {
          attrs: { type: value }
        })]
      ), this.$refs.buttonRef ? h(
        Popover,
        {
          attrs: {
            visible: opened,
            target: this.$refs.buttonRef
          },
          on: {
            'toggle': this.handleOverlayToggle
          }
        },
        [h(
          'div',
          { 'class': 'py-2' },
          [availableValues.map(function (valueItem) {
            return h(
              'button',
              {
                key: valueItem,
                'class': {
                  'dropdown-item d-flex align-items-center': true,
                  'dx-g-bs4-cursor-pointer dx-g-bs4-filter-selector-item': true,
                  active: valueItem === value
                },
                on: {
                  'click': function click() {
                    return _this.handleMenuItemClick(valueItem);
                  }
                }
              },
              [h(Icon, {
                attrs: { type: valueItem }
              }), h(
                'span',
                { 'class': 'dx-g-bs4-filter-selector-item-text' },
                [getMessage(valueItem)]
              )]
            );
          })]
        )]
      ) : null]
    ) : null;
  }
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

var Icon = {
  name: 'Icon',
  props: {
    type: {
      type: String
    }
  },
  render: function render() {
    var h = arguments[0];

    var path = AVAILABLE_PATHS[this.type];
    return path ? h(
      'svg',
      babelHelperVueJsxMergeProps([{
        'class': 'd-block dx-g-bs4-filter-selector-icon',
        attrs: { viewBox: '0 0 32 32'
        }
      }, { attrs: _extends({}, this.$attrs), on: _extends({}, this.$listeners) }]),
      [h('path', {
        attrs: { d: path }
      })]
    ) : h('span', babelHelperVueJsxMergeProps([{
      'class': 'd-block oi oi-magnifying-glass dx-g-bs4-filter-selector-icon'
    }, { attrs: _extends({}, this.$attrs), on: _extends({}, this.$listeners) }]));
  }
};

var defaultMessages$1 = {
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

var DxTableFilterRow$1 = {
  name: 'DxTableFilterRow',
  functional: true,
  props: {
    messages: {
      type: Object
    }
  },
  render: function render(h, context) {
    return h(dxVueGrid.DxTableFilterRow, babelHelperVueJsxMergeProps([{
      attrs: {
        cellComponent: TableFilterCell,
        rowComponent: TableRow,
        filterSelectorComponent: FilterSelector,
        iconComponent: Icon,
        editorComponent: Editor,
        messages: _extends({}, defaultMessages$1, context.props.messages)
      }
    }, context.data]));
  },

  components: {
    DxCell: TableFilterCell,
    DxRow: TableRow,
    DxEditor: Editor,
    DxFilterSelector: FilterSelector,
    DxIcon: Icon
  }
};

var DxToolbar$2 = {
  render: function render() {
    var h = arguments[0];

    return h(
      "div",
      {
        "class": "card-header py-2 d-flex position-relative dx-g-bs4-toolbar"
      },
      [this.$slots.default]
    );
  }
};

var FlexibleSpace = {
  render: function render() {
    var h = arguments[0];

    return h("div", { "class": "d-flex ml-auto" });
  }
};

var DxToolbar$1 = {
  name: 'DxToolbar',
  render: function render() {
    var h = arguments[0];

    return h(dxVueGrid.DxToolbar, babelHelperVueJsxMergeProps([{
      attrs: {
        rootComponent: DxToolbar$2,
        flexibleSpaceComponent: FlexibleSpace
      }
    }, this.props]));
  },

  components: {
    DxRoot: DxToolbar$2
  }
};

var GroupPanelContainer = {
  render: function render() {
    var h = arguments[0];

    return h(
      "div",
      {
        "class": "w-100 mt-1"
      },
      [this.$slots.default]
    );
  }
};

var ENTER_KEY_CODE$1 = 13;
var SPACE_KEY_CODE$1 = 32;

var isActionKey = function isActionKey(keyCode) {
  return keyCode === ENTER_KEY_CODE$1 || keyCode === SPACE_KEY_CODE$1;
};

var GroupPanelItem = {
  props: {
    item: {
      type: Object,
      required: true
    },
    showSortingControls: {
      type: Boolean
    },
    sortingDirection: {
      type: String
    },
    showGroupingControls: {
      type: Boolean
    },
    groupingEnabled: {
      type: Boolean
    },
    sortingEnabled: {
      type: Boolean
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var showSortingControls = this.showSortingControls,
        showGroupingControls = this.showGroupingControls,
        sortingEnabled = this.sortingEnabled,
        groupingEnabled = this.groupingEnabled,
        column = this.item.column,
        sortingDirection = this.sortingDirection;

    var handleSortingChange = function handleSortingChange(e) {
      var isActionKeyDown = isActionKey(e.keyCode);
      var isMouseClick = e.keyCode === undefined;
      if (!showSortingControls || !sortingEnabled || !(isActionKeyDown || isMouseClick)) return;

      var cancelSortingRelatedKey = e.metaKey || e.ctrlKey;
      var direction = (isMouseClick || isActionKeyDown) && cancelSortingRelatedKey ? null : undefined;

      e.preventDefault();
      _this.$emit('sort', {
        direction: direction,
        keepOther: cancelSortingRelatedKey
      });
    };
    var handleUngroup = function handleUngroup(e) {
      if (!groupingEnabled) return;
      var isActionKeyDown = isActionKey(e.keyCode);
      var isMouseClick = e.keyCode === undefined;

      if (!isActionKeyDown && !isMouseClick) return;
      _this.$emit('group');
    };
    return h(
      'div',
      {
        'class': {
          'btn-group mb-1 mr-1': true
        }
      },
      [h(
        'span',
        babelHelperVueJsxMergeProps([{
          'class': {
            'btn btn-outline-secondary': true,
            disabled: !sortingEnabled && (showSortingControls || !groupingEnabled)
          },
          on: {
            'click': handleSortingChange,
            'keydown': handleSortingChange
          }
        }, sortingEnabled ? { tabIndex: 0 } : null]),
        [column.title || column.name, showSortingControls && sortingDirection && h('span', ['\xA0', h(SortingIndicator, {
          attrs: {
            direction: sortingDirection
          }
        })])]
      ), showGroupingControls && h(
        'span',
        {
          'class': {
            'btn btn-outline-secondary': true,
            disabled: !groupingEnabled
          },
          on: {
            'click': handleUngroup
          }
        },
        ['\xA0', h('span', {
          'class': 'oi oi-x dx-g-bs4-group-panel-item-icon'
        })]
      )]
    );
  }
};

var GroupPanelEmptyMessage = {
  props: {
    getMessage: {
      type: Function,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(
      "div",
      {
        "class": "dx-g-bs4-group-panel-empty-message"
      },
      [this.getMessage('groupByColumn') || h("span", ["Click the ", h("span", { "class": "oi oi-list dx-g-bs4-grouping-control-icon" }), " icon in the column header to group by that column"])]
    );
  }
};

var defaultMessages$2 = {
  groupByColumn: ''
};

var DxGroupingPanel$1 = {
  name: 'DxGroupingPanel',
  functional: true,
  props: {
    messages: {
      type: Object
    }
  },
  render: function render(h, context) {
    return h(dxVueGrid.DxGroupingPanel, babelHelperVueJsxMergeProps([{
      attrs: {
        layoutComponent: dxVueGrid.GroupPanelLayout,
        containerComponent: GroupPanelContainer,
        itemComponent: GroupPanelItem,
        emptyMessageComponent: GroupPanelEmptyMessage,
        messages: _extends({}, defaultMessages$2, context.props.messages)
      }
    }, context.data]));
  },

  components: {
    DxContainer: GroupPanelContainer,
    DxItem: GroupPanelItem,
    DxEmptyMessage: GroupPanelEmptyMessage
  }
};

var ENTER_KEY_CODE$2 = 13;
var SPACE_KEY_CODE$2 = 32;

var handleMouseDown = function handleMouseDown(e) {
  e.target.style.outline = 'none';
};
var handleBlur = function handleBlur(e) {
  e.target.style.outline = '';
};

var ExpandButton = {
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    expanded: {
      type: Boolean
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var expanded = this.expanded,
        visible = this.visible;

    var fireToggle = function fireToggle() {
      if (!visible) return;
      _this.$emit('toggle', !expanded);
    };
    var handleClick = function handleClick(e) {
      e.stopPropagation();
      fireToggle();
    };
    var handleKeyDown = function handleKeyDown(e) {
      if (e.keyCode === ENTER_KEY_CODE$2 || e.keyCode === SPACE_KEY_CODE$2) {
        e.preventDefault();
        fireToggle();
      }
    };
    return h('i', {
      'class': {
        'oi p-2 text-center dx-g-bs4-toggle-button': true,
        'oi-chevron-bottom': expanded,
        'oi-chevron-right': !expanded,
        'dx-g-bs4-toggle-button-hidden': !visible
      }
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      , attrs: { tabIndex: visible ? 0 : undefined
      },
      on: {
        'keydown': handleKeyDown,
        'mousedown': handleMouseDown,
        'blur': handleBlur,
        'click': handleClick
      }
    });
  }
};

var TableGroupCell = {
  props: {
    colSpan: {
      type: Number
    },
    row: null,
    column: {
      type: Object
    },
    expanded: {
      type: Boolean
    },
    tableRow: {
      type: Object
    },
    tableColumn: {
      type: Object
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var colSpan = this.colSpan,
        expanded = this.expanded,
        column = this.column,
        row = this.row;

    var handleClick = function handleClick() {
      return _this.$emit('toggle');
    };
    return h(
      'td',
      {
        attrs: {
          colSpan: colSpan
        },
        'class': 'dx-g-bs4-cursor-pointer',
        on: {
          'click': handleClick
        }
      },
      [h(ExpandButton, {
        attrs: {
          expanded: expanded
        },
        on: {
          'toggle': handleClick
        },

        'class': 'mr-2'
      }), h('strong', [column.title || column.name, ': ']), this.$slots.default || row.value]
    );
  }
};

var DxTableGroupRow$1 = {
  name: 'DxTableGroupRow',
  functional: true,
  render: function render(h, context) {
    return h(dxVueGrid.DxTableGroupRow, babelHelperVueJsxMergeProps([{
      attrs: {
        cellComponent: TableGroupCell,
        rowComponent: TableRow,
        indentColumnWidth: 33
      }
    }, context.data]));
  },

  components: {
    DxRow: TableRow,
    DxCell: TableGroupCell
  }
};

var SearchPanelInput = {
  name: 'SearchPanelInput',
  props: {
    value: {
      type: [Number, String],
      default: null
    },
    getMessage: {
      type: Function,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var value = this.value,
        getMessage = this.getMessage;
    var onValueChange = this.$listeners.valueChange;

    return h("input", {
      attrs: {
        type: "text",

        placeholder: getMessage('searchPlaceholder')
      },
      "class": "form-control w-25",
      on: {
        "input": function input(e) {
          return onValueChange(e.target.value);
        }
      },
      domProps: {
        "value": value
      }
    });
  }
};

var defaultMessages$3 = {
  searchPlaceholder: 'Search...'
};

var DxSearchPanel$1 = {
  name: 'DxSearchPanel',
  functional: true,
  props: {
    messages: {
      type: Object
    }
  },
  render: function render(h, context) {
    return h(dxVueGrid.DxSearchPanel, babelHelperVueJsxMergeProps([{
      attrs: {
        inputComponent: SearchPanelInput,
        messages: _extends({}, defaultMessages$3, context.props.messages)
      }
    }, context.data]));
  },

  components: {
    DxInput: SearchPanelInput
  }
};

var SelectionControl = {
  props: {
    disabled: {
      type: Boolean
    },
    checked: {
      type: Boolean
    },
    indeterminate: {
      type: Boolean
    }
  },
  updated: function updated() {
    this.applyIndeterminate();
  },
  mounted: function mounted() {
    this.applyIndeterminate();
  },

  methods: {
    applyIndeterminate: function applyIndeterminate() {
      this.$refs['selection-control-ref'].indeterminate = this.indeterminate;
    }
  },
  render: function render() {
    var h = arguments[0];
    var disabled = this.disabled,
        checked = this.checked;
    var onChange = this.$listeners.change;

    return h('input', {
      'class': {
        'd-inline-block': true,
        'dx-g-bs4-cursor-pointer': !disabled
      },
      attrs: { type: 'checkbox',
        disabled: disabled
      },
      domProps: {
        'checked': checked
      },

      ref: 'selection-control-ref',
      on: {
        'change': function change() {
          if (disabled) return;
          onChange();
        },
        'click': function click(e) {
          return e.stopPropagation();
        }
      }
    });
  }
};

var TableSelectAllCell = {
  props: {
    allSelected: {
      type: Boolean,
      default: false
    },
    someSelected: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rowSpan: {
      type: Number
    },
    tableColumn: {
      type: Object
    },
    tableRow: {
      type: Object
    }
  },
  render: function render() {
    var h = arguments[0];
    var rowSpan = this.rowSpan,
        disabled = this.disabled,
        allSelected = this.allSelected,
        someSelected = this.someSelected;
    var onToggle = this.$listeners.toggle;

    return h(
      'th',
      {
        'class': {
          'text-center': true,
          'align-middle': !rowSpan,
          'align-bottom': !!rowSpan
        },
        attrs: { rowSpan: rowSpan
        }
      },
      [h(SelectionControl, {
        attrs: {
          disabled: disabled,
          checked: allSelected,
          indeterminate: someSelected
        },
        on: {
          'change': onToggle
        }
      })]
    );
  }
};

var TableSelectCell = {
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    row: null,
    tableRow: {
      type: Object
    },
    tableColumn: {
      type: Object
    }
  },
  render: function render() {
    var h = arguments[0];
    var onToggle = this.$listeners.toggle;
    var selected = this.selected;

    return h(
      "td",
      {
        "class": "text-center align-middle"
      },
      [h(SelectionControl, {
        attrs: {
          checked: selected
        },
        on: {
          "change": onToggle
        }
      })]
    );
  }
};

var TableSelectRow = {
  props: {
    selected: {
      type: Boolean
    },
    selectByRowClick: {
      type: Boolean
    }
  },
  render: function render() {
    var h = arguments[0];
    var selected = this.selected,
        selectByRowClick = this.selectByRowClick;
    var onToggle = this.$listeners.toggle;

    return h(
      'tr',
      {
        'class': selected ? 'table-active' : '',
        on: {
          'click': function click(e) {
            if (!selectByRowClick) return;
            e.stopPropagation();
            onToggle();
          }
        }
      },
      [this.$slots.default]
    );
  }
};

var DxTableSelection$1 = {
  name: 'DxTableSelection',
  functional: true,
  render: function render(h, context) {
    return h(dxVueGrid.DxTableSelection, babelHelperVueJsxMergeProps([{
      attrs: {
        rowComponent: TableSelectRow,
        cellComponent: TableSelectCell,
        headerCellComponent: TableSelectAllCell,
        selectionColumnWidth: 40
      }
    }, context.data]));
  },

  components: {
    DxCell: TableSelectCell,
    DxHeaderCell: TableSelectAllCell
  }
};

var PageSizeSelector = {
  props: {
    pageSize: {
      type: Number,
      required: true
    },
    pageSizes: {
      type: Array,
      required: true
    },
    getMessage: {
      type: Function,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var pageSize = this.pageSize,
        pageSizes = this.pageSizes,
        getMessage = this.getMessage;
    var pageSizeChange = this.$listeners.pageSizeChange;

    var showAll = getMessage('showAll');

    return h(
      "div",
      { "class": "d-inline-block" },
      [h(
        "select",
        {
          "class": "form-control d-sm-none",
          domProps: {
            "value": pageSize
          },
          on: {
            "change": function change(e) {
              pageSizeChange(parseInt(e.target.value, 10));
            }
          }
        },
        [pageSizes.map(function (val) {
          return h(
            "option",
            { key: val, domProps: {
                "value": val
              }
            },
            [val || showAll]
          );
        })]
      ), h(
        "ul",
        { "class": "pagination d-none d-sm-flex m-0" },
        [pageSizes.map(function (item) {
          return h(
            "li",
            {
              "class": {
                'page-item': true,
                active: item === pageSize
              }
            },
            [h(
              "a",
              {
                "class": "page-link",
                attrs: { href: "#"
                },
                on: {
                  "click": function click(e) {
                    e.preventDefault();
                    pageSizeChange(item);
                  }
                }
              },
              [item || showAll]
            )]
          );
        })]
      )]
    );
  }
};

var PageButtons = {
  name: 'PageButtons',
  functional: true,
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPageCount: {
      type: Number,
      required: true
    },
    currentPageChange: {
      type: Function,
      required: true
    }
  },
  render: function render(h, context) {
    var _context$props = context.props,
        totalPageCount = _context$props.totalPageCount,
        currentPage = _context$props.currentPage,
        currentPageChange = _context$props.currentPageChange;


    var pageButtons = [];
    var maxButtonCount = 3;
    var startPage = 1;
    var endPage = totalPageCount || 1;

    if (maxButtonCount < totalPageCount) {
      startPage = dxGridCore.calculateStartPage(currentPage + 1, maxButtonCount, totalPageCount);
      endPage = startPage + maxButtonCount - 1;
    }
    if (startPage > 1) {
      pageButtons.push(h(
        'li',
        { 'class': 'page-item', key: 1 },
        [h(
          'a',
          {
            'class': 'page-link',
            attrs: { href: '#'
            },
            on: {
              'click': function click(e) {
                return currentPageChange(e, 0);
              }
            }
          },
          [1]
        )]
      ));

      if (startPage > 2) {
        pageButtons.push(h(
          'li',
          { 'class': 'page-item disabled', key: 'ellipsisStart', attrs: { disabled: true }
          },
          [h(
            'a',
            { 'class': 'page-link' },
            ['...']
          )]
        ));
      }
    }

    var _loop = function _loop(page) {
      pageButtons.push(h(
        'li',
        {
          key: page,
          'class': {
            'page-item': true,
            active: page === currentPage + 1,
            disabled: startPage === endPage
          }
        },
        [h(
          'a',
          {
            'class': 'page-link',
            attrs: { href: '#'
            },
            on: {
              'click': function click(e) {
                return currentPageChange(e, page - 1);
              }
            }
          },
          [page]
        )]
      ));
    };

    for (var page = startPage; page <= endPage; page += 1) {
      _loop(page);
    }

    if (endPage < totalPageCount) {
      if (endPage < totalPageCount - 1) {
        pageButtons.push(h(
          'li',
          { 'class': 'page-item disabled', key: 'ellipsisEnd', attrs: { disabled: true }
          },
          [h(
            'a',
            { 'class': 'page-link' },
            ['...']
          )]
        ));
      }

      pageButtons.push(h(
        'li',
        { 'class': 'page-item', key: totalPageCount },
        [h(
          'a',
          {
            'class': 'page-link',
            attrs: { href: '#'
            },
            on: {
              'click': function click(e) {
                return currentPageChange(e, totalPageCount - 1);
              }
            }
          },
          [totalPageCount]
        )]
      ));
    }

    return pageButtons;
  }
};

var Pagination = {
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    totalCount: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      required: true
    },
    getMessage: {
      type: Function,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var totalPages = this.totalPages,
        currentPage = this.currentPage,
        totalCount = this.totalCount,
        pageSize = this.pageSize,
        getMessage = this.getMessage;
    var onCurrentPageChange = this.$listeners.currentPageChange;


    var from = dxGridCore.firstRowOnPage(currentPage, pageSize, totalCount);
    var to = dxGridCore.lastRowOnPage(currentPage, pageSize, totalCount);
    var currentPageChange = function currentPageChange(e, nextPage) {
      e.preventDefault();
      onCurrentPageChange(nextPage);
    };

    return h(
      'div',
      { 'class': 'd-inline-block float-right' },
      [h(
        'ul',
        { 'class': 'pagination float-right d-none d-sm-flex m-0' },
        [h(
          'li',
          { 'class': {
              'page-item': true,
              disabled: currentPage === 0
            } },
          [h(
            'a',
            {
              'class': 'page-link',
              attrs: { 'aria-label': 'Previous',
                href: '#'
              },
              on: {
                'click': function click(e) {
                  return currentPageChange(e, currentPage - 1);
                }
              }
            },
            [h(
              'span',
              {
                attrs: { 'aria-hidden': 'true' }
              },
              ['\xAB']
            )]
          )]
        ), h(PageButtons, {
          attrs: {
            currentPage: currentPage,
            totalPageCount: totalPages,
            currentPageChange: currentPageChange
          }
        }), h(
          'li',
          { 'class': {
              'page-item': true,
              disabled: currentPage === totalPages - 1 || totalCount === 0
            } },
          [h(
            'a',
            {
              'class': 'page-link',
              attrs: { 'aria-label': 'Next',
                href: '#'
              },
              on: {
                'click': function click(e) {
                  return currentPageChange(e, currentPage + 1);
                }
              }
            },
            [h(
              'span',
              {
                attrs: { 'aria-hidden': 'true' }
              },
              ['\xBB']
            )]
          )]
        )]
      ), h(
        'ul',
        { 'class': 'pagination float-right d-sm-none m-0' },
        [h(
          'li',
          { 'class': {
              'page-item': true,
              disabled: currentPage === 0
            }
          },
          [h(
            'a',
            {
              'class': 'page-link',
              attrs: { 'aria-label': 'Previous',
                href: '#'
              },
              on: {
                'click': function click(e) {
                  return currentPageChange(e, currentPage - 1);
                }
              }
            },
            [h(
              'span',
              {
                attrs: { 'aria-hidden': 'true' }
              },
              ['\xAB']
            )]
          )]
        ), '\xA0', h(
          'li',
          { 'class': {
              'page-item': true,
              disabled: currentPage === totalPages - 1 || totalCount === 0
            }
          },
          [h(
            'a',
            {
              'class': 'page-link',
              attrs: { 'aria-label': 'Next',
                href: '#'
              },
              on: {
                'click': function click(e) {
                  return currentPageChange(e, currentPage + 1);
                }
              }
            },
            [h(
              'span',
              {
                attrs: { 'aria-hidden': 'true' }
              },
              ['\xBB']
            )]
          )]
        )]
      ), h(
        'span',
        { 'class': 'float-right d-sm-none mr-4' },
        [h(
          'span',
          { 'class': 'd-inline-block align-middle' },
          [getMessage('info', { from: from, to: to, count: totalCount })]
        )]
      )]
    );
  }
};

var Pager = {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      required: true
    },
    pageSizes: {
      type: Array,
      required: true
    },
    totalCount: {
      type: Number,
      required: true
    },
    getMessage: {
      type: Function,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var currentPage = this.currentPage,
        totalPages = this.totalPages,
        pageSize = this.pageSize,
        pageSizes = this.pageSizes,
        totalCount = this.totalCount,
        getMessage = this.getMessage;
    var _$listeners = this.$listeners,
        pageSizeChange = _$listeners.pageSizeChange,
        _currentPageChange = _$listeners.currentPageChange;


    return h(
      'div',
      babelHelperVueJsxMergeProps([{
        'class': 'clearfix card-footer'
      }, this.$attrs]),
      [!!pageSizes.length && h(PageSizeSelector, {
        attrs: {
          pageSize: pageSize,

          pageSizes: pageSizes,
          getMessage: getMessage
        },
        on: {
          'pageSizeChange': pageSizeChange
        }
      }), h(Pagination, {
        attrs: {
          totalPages: totalPages,
          totalCount: totalCount,
          currentPage: currentPage,

          pageSize: pageSize,
          getMessage: getMessage
        },
        on: {
          'currentPageChange': function currentPageChange(page) {
            return _currentPageChange(page);
          }
        }
      })]
    );
  }
};

var defaultMessages$4 = {
  showAll: 'All',
  info: function info(_ref) {
    var from = _ref.from,
        to = _ref.to,
        count = _ref.count;
    return '' + from + (from < to ? '-' + to : '') + ' of ' + count;
  }
};

var DxPagingPanel$1 = {
  name: 'DxPagingPanel',
  functional: true,
  props: {
    messages: {
      type: Object
    }
  },
  render: function render(h, context) {
    return h(dxVueGrid.DxPagingPanel, babelHelperVueJsxMergeProps([{
      attrs: {
        containerComponent: Pager,
        messages: _extends({}, defaultMessages$4, context.props.messages)
      }
    }, context.data]));
  },

  components: {
    DxContainer: Pager
  }
};

var CommandButton = {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];

    return h(
      "button",
      {
        "class": "btn btn-link dx-g-bs4-table-edit-command-cell",
        on: {
          "click": function click() {
            _this.$emit('execute');
          }
        }
      },
      [this.text]
    );
  }
};

var EditCommandHeadingCell = {
  props: {
    tableColumn: {
      type: Object
    },
    tableRow: {
      type: Object
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(
      "th",
      {
        "class": "text-center p-0 text-nowrap"
      },
      [this.$slots.default]
    );
  }
};

var EditCommandCell = {
  props: {
    row: null,
    tableRow: {
      type: Object
    },
    tableColumn: {
      type: Object
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(
      "td",
      {
        "class": "text-center p-0 text-nowrap"
      },
      [this.$slots.default]
    );
  }
};

var defaultMessages$5 = {
  addCommand: 'New',
  editCommand: 'Edit',
  deleteCommand: 'Delete',
  commitCommand: 'Save',
  cancelCommand: 'Cancel'
};

var DxTableEditColumn$1 = {
  name: 'DxTableEditColumn',
  functional: true,
  props: {
    messages: {
      type: Object
    }
  },
  render: function render(h, context) {
    return h(dxVueGrid.DxTableEditColumn, babelHelperVueJsxMergeProps([{
      attrs: {
        cellComponent: EditCommandCell,
        headerCellComponent: EditCommandHeadingCell,
        commandComponent: CommandButton,
        messages: _extends({}, defaultMessages$5, context.props.messages)
      }
    }, context.data]));
  },

  components: {
    DxCommand: CommandButton,
    DxCell: EditCommandCell,
    DxHeaderCell: EditCommandHeadingCell
  }
};

var EditCell = {
  props: {
    tableRow: {
      type: Object
    },
    column: {
      type: Object
    },
    row: null,
    tableColumn: {
      type: Object
    },
    value: null,
    editingEnabled: {
      type: Boolean,
      default: true
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var value = this.value,
        editingEnabled = this.editingEnabled,
        tableColumn = this.tableColumn;

    return h(
      "td",
      { "class": "align-middle dx-g-bs4-table-edit-cell" },
      [this.$slots.default || h("input", {
        attrs: {
          type: "text",

          readOnly: !editingEnabled
        },
        "class": {
          'form-control w-100': true,
          'text-right': tableColumn && tableColumn.align === 'right',
          'text-center': tableColumn && tableColumn.align === 'center'
        }, domProps: {
          "value": value
        },
        on: {
          "change": function change(e) {
            return _this.$emit('valueChange', e.target.value);
          }
        }
      })]
    );
  }
};

var DxTableEditRow$1 = {
  name: 'DxTableEditRow',
  functional: true,
  render: function render(h, context) {
    return h(dxVueGrid.DxTableEditRow, babelHelperVueJsxMergeProps([{
      attrs: {
        cellComponent: EditCell,
        rowComponent: TableRow
      }
    }, context.data]));
  },

  components: {
    DxCell: EditCell,
    DxRow: TableRow
  }
};

var TableDetailToggleCell = {
  props: {
    expanded: {
      type: Boolean
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];

    var toggle = function toggle() {
      return _this.$emit('toggle');
    };
    return h(
      'td',
      {
        'class': 'text-center align-middle'
      },
      [h(ExpandButton, {
        attrs: {
          expanded: this.expanded
        },
        on: {
          'toggle': toggle
        }
      })]
    );
  }
};

var TableDetailCell = {
  props: {
    colSpan: {
      type: Number
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(
      "td",
      {
        attrs: {
          colSpan: this.colSpan
        },
        "class": "table-active"
      },
      [this.$slots.default]
    );
  }
};

var DxTableRowDetail$1 = {
  name: 'DxTableRowDetail',
  functional: true,
  render: function render(h, context) {
    return h(dxVueGrid.DxTableRowDetail, babelHelperVueJsxMergeProps([{
      attrs: {
        toggleCellComponent: TableDetailToggleCell,
        cellComponent: TableDetailCell,
        rowComponent: TableRow,
        toggleColumnWidth: 48
      }
    }, context.data]));
  },

  components: {
    DxCell: TableDetailCell,
    DxToggleCell: TableDetailToggleCell,
    DxRow: TableRow
  }
};

var TableTreeExpandButton = {
  props: {
    visible: {},
    expanded: {}
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];

    return h(ExpandButton, babelHelperVueJsxMergeProps([{
      attrs: {
        visible: this.visible,
        expanded: this.expanded
      },
      on: {
        'toggle': function toggle() {
          return _this.$emit('toggle');
        }
      },

      'class': 'mr-3'
    }, { attrs: this.$attrs, on: this.$listeners }]));
  }
};

var TableTreeCheckbox = {
  props: {
    checked: {},
    indeterminate: {},
    disabled: {}
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];

    return h(SelectionControl, babelHelperVueJsxMergeProps([{
      attrs: {
        disabled: this.disabled,
        checked: this.checked,
        indeterminate: this.indeterminate
      },
      on: {
        'change': function change() {
          return _this.$emit('change');
        }
      },

      'class': 'mr-4'
    }, { attrs: this.$attrs, on: this.$listeners }]));
  }
};

var TableTreeIndent = {
  functional: true,
  props: {
    level: {
      type: Number,
      default: 0
    }
  },
  render: function render(h, context) {
    return Array.from({ length: context.props.level }).map(function (value, currentLevel) {
      return h("span", {
        key: currentLevel,
        "class": "d-inline-block mr-4"
      });
    });
  }
};

var TableTreeCell = {
  props: {
    column: {},
    tableRow: {},
    tableColumn: {},
    row: {}
  },
  render: function render() {
    var h = arguments[0];

    return h(
      "td",
      { attrs: this.$attrs, on: this.$listeners },
      [h(
        "div",
        {
          "class": "d-flex flex-direction-row align-items-center"
        },
        [this.$slots.default]
      )]
    );
  }
};

var TableTreeContent = {
  render: function render() {
    var h = arguments[0];

    return h(
      "div",
      babelHelperVueJsxMergeProps([{
        "class": "text-nowrap w-100 dx-g-bs4-table-tree-content"
      }, { attrs: this.$attrs, on: this.$listeners }]),
      [this.$slots.default]
    );
  }
};

var DxTableTreeColumn$1 = {
  render: function render() {
    var h = arguments[0];

    return h(dxVueGrid.DxTableTreeColumn, babelHelperVueJsxMergeProps([{
      attrs: {
        cellComponent: TableTreeCell,
        contentComponent: TableTreeContent,
        indentComponent: TableTreeIndent,
        expandButtonComponent: TableTreeExpandButton,
        checkboxComponent: TableTreeCheckbox
      }
    }, { attrs: this.$attrs, on: this.$listeners }]));
  }
};

var Cell = {
  props: {
    column: {
      type: Object
    },
    row: null,
    tableRow: {
      type: Object
    },
    tableColumn: {
      type: Object
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(
      "th",
      babelHelperVueJsxMergeProps([{
        "class": "dx-g-bs4-banded-cell dx-g-bs4-table-cell text-nowrap border-left border-right border-bottom"
      }, { attrs: this.$attrs, on: this.$listeners }]),
      [this.$slots.default]
    );
  }
};

var BandedHeaderCell = {
  props: {
    component: {
      type: Object
    }
  },
  render: function render() {
    var h = arguments[0];
    var HeaderCellComponent = this.component;

    return h(HeaderCellComponent, babelHelperVueJsxMergeProps([{
      "class": "dx-g-bs4-banded-header-cell border-left border-right"
    }, { attrs: this.$attrs, on: this.$listeners }]));
  }
};

var InvisibleCell = {
  render: function render() {
    var h = arguments[0];

    return h("th", { "class": "d-none" });
  }
};

var DxTableBandHeader$1 = {
  name: 'DxTableBandHeader',
  functional: true,
  render: function render(h, context) {
    return h(dxVueGrid.DxTableBandHeader, babelHelperVueJsxMergeProps([{
      attrs: {
        cellComponent: Cell,
        rowComponent: TableRow,
        bandedHeaderCellComponent: BandedHeaderCell,
        invisibleCellComponent: InvisibleCell
      }
    }, context.data]));
  },

  components: {
    DxCell: Cell,
    DxRow: TableRow,
    DxBandedHeaderCell: BandedHeaderCell
  }
};

var Overlay = {
  name: 'Overlay',
  props: {
    visible: {
      type: Boolean
    },
    target: null
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var visible = this.visible,
        target = this.target;

    var handleToggle = function handleToggle() {
      if (visible) _this.$emit('hide');
    };
    return target ? h(
      Popover,
      {
        attrs: {
          visible: visible,
          target: target
        },
        on: {
          'toggle': handleToggle
        }
      },
      [this.$slots.default]
    ) : null;
  }
};

var Container = {
  render: function render() {
    var h = arguments[0];

    return h(
      "div",
      {
        "class": "py-2"
      },
      [this.$slots.default]
    );
  }
};

var handleMouseDown$1 = function handleMouseDown(e) {
  e.currentTarget.style.outline = 'none';
};
var handleBlur$1 = function handleBlur(e) {
  e.currentTarget.style.outline = '';
};

var Item = {
  name: 'Item',
  props: {
    item: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean
    }
  },
  render: function render() {
    var h = arguments[0];
    var disabled = this.disabled,
        _item = this.item,
        column = _item.column,
        hidden = _item.hidden;
    var onToggle = this.$listeners.toggle;

    return h(
      'button',
      {
        'class': {
          'dropdown-item dx-g-bs4-column-chooser-item': true,
          'dx-g-bs4-cursor-pointer': !disabled
        },
        attrs: { type: 'button',

          disabled: disabled
        },
        on: {
          'click': onToggle,
          'mouseDown': handleMouseDown$1,
          'blur': handleBlur$1
        }
      },
      [h('input', {
        attrs: {
          type: 'checkbox',

          tabIndex: -1,

          disabled: disabled
        },
        'class': {
          'dx-g-bs4-cursor-pointer': !disabled,
          'dx-g-bs4-column-chooser-checkbox': true
        }, domProps: {
          'checked': !hidden
        },
        on: {
          'change': onToggle,
          'click': function click(e) {
            return e.stopPropagation();
          }
        }
      }), column.title || column.name]
    );
  }
};

var ToggleButton = {
  name: 'ToggleButton',
  props: {
    buttonRef: {
      type: Function,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  mounted: function mounted() {
    this.buttonRef(this.$el);
  },
  render: function render() {
    var h = arguments[0];
    var onToggle = this.$listeners.toggle;

    return h(
      'button',
      {
        'class': {
          'btn btn-outline-secondary border-0': true,
          active: this.active
        },
        on: {
          'click': onToggle
        }
      },
      [h('span', { 'class': 'oi oi-eye' })]
    );
  }
};

var DxColumnChooser$1 = {
  name: 'DxColumnChooser',
  functional: true,
  render: function render(h, context) {
    return h(dxVueGrid.DxColumnChooser, babelHelperVueJsxMergeProps([{
      attrs: {
        overlayComponent: Overlay,
        containerComponent: Container,
        itemComponent: Item,
        toggleButtonComponent: ToggleButton
      }
    }, context.data]));
  },

  components: {
    DxContainer: Container,
    DxItem: Item,
    DxOverlay: Overlay,
    DxToggleButton: ToggleButton
  }
};

var EmptyMessage = {
  name: 'EmptyMessage',
  props: {
    getMessage: {
      type: Function,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(
      "div",
      {
        "class": "py-5 text-center"
      },
      [h(
        "big",
        { "class": "text-muted" },
        [this.getMessage('noColumns')]
      )]
    );
  }
};

var defaultMessages$6 = {
  noColumns: 'Nothing to show'
};

var DxTableColumnVisibility$1 = {
  name: 'DxTableColumnVisibility',
  functional: true,
  props: {
    messages: {
      type: Object
    }
  },
  render: function render(h, context) {
    return h(dxVueGrid.DxTableColumnVisibility, babelHelperVueJsxMergeProps([{
      attrs: {
        emptyMessageComponent: EmptyMessage,
        messages: _extends({}, defaultMessages$6, context.props.messages)
      }
    }, context.data]));
  },

  components: {
    DxEmptyMessage: EmptyMessage
  }
};

var MINIMAL_COLUMN_WIDTH$1 = 150;

var VirtualTableLayout$1 = {
  name: 'VirtualTableLayout',
  inheritAttrs: false,
  render: function render() {
    var h = arguments[0];

    return h(dxVueGrid.TableLayout, babelHelperVueJsxMergeProps([{
      attrs: {
        layoutComponent: dxVueGrid.VirtualTableLayout,
        minColumnWidth: MINIMAL_COLUMN_WIDTH$1
      }
    }, { attrs: _extends({}, this.$attrs), on: _extends({}, this.$listeners) }]));
  }
};

var TableStubHeaderCell = {
  name: 'TableStubHeaderCell',
  props: {
    tableRow: {
      type: Object
    },
    tableColumn: {
      type: Object
    }
  },
  render: function render() {
    var h = arguments[0];

    return h("th", babelHelperVueJsxMergeProps([{ attrs: this.$attrs, on: this.$listeners }, {
      "class": "p-0"
    }]));
  }
};

var FixedHeader = {
  name: 'FixedHeader',
  render: function render() {
    var h = arguments[0];
    return h(
      Table,
      babelHelperVueJsxMergeProps([{
        attrs: { use: 'head' }
      }, { attrs: this.$attrs, on: this.$listeners }]),
      [this.$slots.default]
    );
  }
};
var TableHead$1 = {
  name: 'TableHead',
  render: function render() {
    var h = arguments[0];

    return h(
      'thead',
      { attrs: this.$attrs, on: this.$listeners },
      [this.$slots.default]
    );
  }
};
var TableBody$1 = {
  name: 'TableBody',
  render: function render() {
    var h = arguments[0];

    return h(
      'tbody',
      { attrs: this.$attrs, on: this.$listeners },
      [this.$slots.default]
    );
  }
};

var defaultMessages$7 = {
  noData: 'No data'
};

var DxVirtualTable = {
  name: 'DxVirtualTable',
  props: {
    estimatedRowHeight: {
      type: Number,
      default: 49
    },
    height: {
      type: Number,
      default: 530
    },
    headTableComponent: {
      type: Object,
      default: function _default() {
        return FixedHeader;
      }
    },
    messages: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  created: function created() {
    var height = this.height,
        estimatedRowHeight = this.estimatedRowHeight,
        headTableComponent = this.headTableComponent;

    this.layoutRenderComponent = dxVueCore.createRenderComponent(VirtualTableLayout$1, { height: height, estimatedRowHeight: estimatedRowHeight, headTableComponent: headTableComponent });
  },
  beforeUpdate: function beforeUpdate() {
    var height = this.height,
        estimatedRowHeight = this.estimatedRowHeight,
        headTableComponent = this.headTableComponent;

    this.layoutRenderComponent.update({ height: height, estimatedRowHeight: estimatedRowHeight, headTableComponent: headTableComponent });
  },
  render: function render() {
    var h = arguments[0];
    var messages = this.messages;


    return h(dxVueGrid.DxTable, babelHelperVueJsxMergeProps([{
      attrs: {
        layoutComponent: this.layoutRenderComponent.component,
        tableComponent: Table,
        headComponent: TableHead$1,
        bodyComponent: TableBody$1,
        containerComponent: TableContainer,
        rowComponent: TableRow,
        cellComponent: TableCell,
        noDataRowComponent: TableRow,
        noDataCellComponent: TableNoDataCell,
        stubRowComponent: TableStubRow,
        stubCellComponent: TableStubCell,
        stubHeaderCellComponent: TableStubHeaderCell,
        messages: _extends({}, defaultMessages$7, { messages: messages })
      }
    }, { attrs: this.$attrs, on: this.$listeners }]));
  },

  components: {
    DxCell: TableCell,
    DxRow: TableRow,
    DxNoDataCell: TableNoDataCell,
    DxNoDataRow: TableRow,
    DxStubRow: TableStubRow,
    DxStubCell: TableStubCell,
    DxStubHeaderCell: TableStubCell,
    DxTable: Table,
    DxTableHead: TableHead$1,
    DxTableBody: TableBody$1,
    DxFixedHeader: FixedHeader,
    DxContainer: TableContainer
  }
};

exports.DxGrid = DxGrid$1;
exports.DxTable = DxTable$1;
exports.DxTableHeaderRow = DxTableHeaderRow$1;
exports.DxTableFilterRow = DxTableFilterRow$1;
exports.DxToolbar = DxToolbar$1;
exports.DxGroupingPanel = DxGroupingPanel$1;
exports.DxTableGroupRow = DxTableGroupRow$1;
exports.DxSearchPanel = DxSearchPanel$1;
exports.DxTableSelection = DxTableSelection$1;
exports.DxPagingPanel = DxPagingPanel$1;
exports.DxTableEditColumn = DxTableEditColumn$1;
exports.DxTableEditRow = DxTableEditRow$1;
exports.DxTableRowDetail = DxTableRowDetail$1;
exports.DxTableTreeColumn = DxTableTreeColumn$1;
exports.DxTableBandHeader = DxTableBandHeader$1;
exports.DxColumnChooser = DxColumnChooser$1;
exports.DxTableColumnVisibility = DxTableColumnVisibility$1;
exports.DxVirtualTable = DxVirtualTable;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dx-vue-grid-bootstrap4.umd.js.map
