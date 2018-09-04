/**
 * Bundle of @devexpress/dx-vue-grid
 * Generated: 2018-09-04
 * Version: 1.7.2
 * License: https://js.devexpress.com/Licensing
 */

import { DxAction, DxGetter, DxPlugin, DxPluginHost, DxRefHolder, DxSizer, DxTemplate, DxTemplateConnector, DxTemplatePlaceholder } from '@devexpress/dx-vue-core';
import { BAND_DUPLICATE_RENDER, BAND_EMPTY_CELL, BAND_GROUP_CELL, BAND_HEADER_CELL, TABLE_DATA_TYPE, addRow, addedRowsByIds, adjustSortIndex, allSelected, calculateKeepOther, cancelAddedRows, cancelChanges, cancelDeletedRows, cellValueGetter, changeAddedRow, changeColumnFilter, changeColumnGrouping, changeColumnSorting, changeRow, changeSearchValue, changedRowsByIds, collapsedTreeRowsGetter, columnChooserItems, createRowChangeGetter, currentPage, customGroupedRows, customGroupingRowIdGetter, customTreeRowIdGetter, customTreeRowLevelKeyGetter, customTreeRowsWithMeta, defaultFilterPredicate, deleteRows, expandedGroupRows, expandedTreeRows, filterExpression, filteredCollapsedRowsGetter, filteredRows, getAvailableFilterOperationsGetter, getBandComponent, getCollapsedGrid, getColumnExtension, getColumnExtensionValueGetter, getColumnFilterConfig, getColumnFilterOperations, getColumnSortingDirection, getMessagesFormatter, getPersistentSortedColumns, getRowChange, getTreeRowLevelGetter, groupCollapsedRowsGetter, groupRowChecker, groupRowLevelKeyGetter, groupedRows, groupingPanelItems, isAddedTableRow, isBandedOrHeaderRow, isBandedTableRow, isDataTableCell, isDataTableRow, isDetailRowExpanded, isDetailTableCell, isDetailTableRow, isDetailToggleTableCell, isEditCommandsTableCell, isEditTableCell, isEditTableRow, isFilterTableCell, isFilterTableRow, isFilterValueEmpty, isGroupIndentTableCell, isGroupTableCell, isGroupTableRow, isHeaderStubTableCell, isHeadingEditCommandsTableCell, isHeadingTableCell, isHeadingTableRow, isNoDataTableCell, isNoDataTableRow, isSelectAllTableCell, isSelectTableCell, isTreeRowLeafGetter, isTreeTableCell, pageCount, paginatedRows, rowCount, rowIdGetter, rowsWithAvailableToSelect, rowsWithPageHeaders, searchFilterExpression, setCurrentPage, setPageSize, someSelected, sortedRows, startEditRows, stopEditRows, tableCellColSpanGetter, tableColumnsWithDataRows, tableColumnsWithDetail, tableColumnsWithEditing, tableColumnsWithGrouping, tableColumnsWithSelection, tableDataColumnsExist, tableDetailCellColSpanGetter, tableGroupCellColSpanGetter, tableHeaderRowsWithFilter, tableRowsWithBands, tableRowsWithDataRows, tableRowsWithEditing, tableRowsWithExpandedDetail, tableRowsWithGrouping, tableRowsWithHeading, toggleColumn, toggleDetailRowExpanded, toggleExpandedGroups, toggleRowExpanded, toggleSelection, unwrapSelectedRows, unwrappedCustomTreeRows, unwrappedFilteredRows, visibleTableColumns } from '@devexpress/dx-grid-core';

var GridCore = {
  name: 'GridCore',
  props: {
    rows: {
      type: Array,
      required: true
    },
    getRowId: {
      type: Function
    },
    getCellValue: {
      type: Function
    },
    columns: {
      type: Array,
      required: true
    },
    rootComponent: {
      type: Object,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var rows = this.rows,
        columns = this.columns,
        getRowId = this.getRowId,
        getCellValue = this.getCellValue,
        Root = this.rootComponent;


    return h(DxPlugin, [h(DxGetter, {
      attrs: { name: 'rows', value: rows }
    }), h(DxGetter, {
      attrs: { name: 'getRowId', value: rowIdGetter(getRowId, rows) }
    }), h(DxGetter, {
      attrs: { name: 'columns', value: columns }
    }), h(DxGetter, {
      attrs: { name: 'getCellValue', value: cellValueGetter(getCellValue, columns) }
    }), h(
      DxTemplate,
      {
        attrs: { name: 'root' }
      },
      [h(Root, [h(DxTemplatePlaceholder, {
        attrs: { name: 'header' }
      }), h(DxTemplatePlaceholder, {
        attrs: { name: 'body' }
      }), h(DxTemplatePlaceholder, {
        attrs: { name: 'footer' }
      })])]
    )]);
  }
};

var DxGrid = {
  name: 'DxGrid',
  functional: true,
  render: function render(h, context) {
    return h(DxPluginHost, [h(GridCore, context.data), context.children]);
  }
};

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













var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
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

var RowPlaceholder = {
  props: {
    tableRow: {
      type: Object,
      required: true
    },
    height: {
      type: [Number, String]
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(
      DxTemplatePlaceholder,
      babelHelperVueJsxMergeProps([{
        attrs: {
          name: 'tableRow'
        }
      }, { attrs: _extends({}, this.$props) }]),
      [this.$slots.default]
    );
  }
};

var CellPlaceholder = {
  props: {
    tableColumn: {
      type: Object,
      required: true
    },
    tableRow: {
      type: Object,
      required: true
    },
    colSpan: {
      type: Number,
      required: true
    },
    rowSpan: {
      type: Number
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(DxTemplatePlaceholder, babelHelperVueJsxMergeProps([{
      attrs: {
        name: 'tableCell'
      }
    }, { attrs: _extends({}, this.$props) }]));
  }
};

var tableHeaderRows = [];
var tableBodyRowsComputed = function tableBodyRowsComputed(_ref) {
  var rows = _ref.rows,
      getRowId = _ref.getRowId;
  return tableRowsWithDataRows(rows, getRowId);
};

var pluginDependencies = [{ name: 'DxDataTypeProvider', optional: true }];

var DxTable = {
  name: 'DxTable',
  props: {
    layoutComponent: {
      type: Object,
      required: true
    },
    tableComponent: {
      type: Object,
      required: true
    },
    headComponent: {
      type: Object,
      required: true
    },
    bodyComponent: {
      type: Object,
      required: true
    },
    containerComponent: {
      type: Object,
      required: true
    },
    cellComponent: {
      type: Object,
      required: true
    },
    rowComponent: {
      type: Object,
      required: true
    },
    stubRowComponent: {
      type: Object,
      required: true
    },
    stubCellComponent: {
      type: Object,
      required: true
    },
    stubHeaderCellComponent: {
      type: Object,
      required: true
    },
    noDataRowComponent: {
      type: Object,
      required: true
    },
    noDataCellComponent: {
      type: Object,
      required: true
    },
    columnExtensions: {
      type: Array
    },
    messages: {
      type: Object
    }
  },
  render: function render() {
    var h = arguments[0];
    var Layout = this.layoutComponent,
        Cell = this.cellComponent,
        Row = this.rowComponent,
        NoDataRow = this.noDataRowComponent,
        NoDataCell = this.noDataCellComponent,
        StubRow = this.stubRowComponent,
        StubCell = this.stubCellComponent,
        StubHeaderCell = this.stubHeaderCellComponent,
        columnExtensions = this.columnExtensions,
        containerComponent = this.containerComponent,
        tableComponent = this.tableComponent,
        headComponent = this.headComponent,
        bodyComponent = this.bodyComponent,
        messages = this.messages;


    var getMessage = getMessagesFormatter(messages);
    var tableColumnsComputed = function tableColumnsComputed(_ref2) {
      var columns = _ref2.columns;
      return tableColumnsWithDataRows(columns, columnExtensions);
    };

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxTable',
          dependencies: pluginDependencies
        }
      },
      [h(DxGetter, {
        attrs: { name: 'tableHeaderRows', value: tableHeaderRows }
      }), h(DxGetter, {
        attrs: { name: 'tableBodyRows', computed: tableBodyRowsComputed }
      }), h(DxGetter, {
        attrs: { name: 'tableColumns', computed: tableColumnsComputed }
      }), h(DxGetter, {
        attrs: { name: 'getTableCellColSpan', value: tableCellColSpanGetter }
      }), h(
        DxTemplate,
        {
          attrs: { name: 'body' }
        },
        [h(DxTemplatePlaceholder, {
          attrs: { name: 'table' }
        })]
      ), h(
        DxTemplate,
        {
          attrs: { name: 'table' }
        },
        [h(DxTemplateConnector, [function (_ref3) {
          var _ref3$getters = _ref3.getters,
              headerRows = _ref3$getters.tableHeaderRows,
              bodyRows = _ref3$getters.tableBodyRows,
              columns = _ref3$getters.tableColumns,
              getTableCellColSpan = _ref3$getters.getTableCellColSpan;
          return h(Layout, {
            attrs: {
              tableComponent: tableComponent,
              headComponent: headComponent,
              bodyComponent: bodyComponent,
              containerComponent: containerComponent,
              headerRows: headerRows,
              bodyRows: bodyRows,
              columns: columns,
              rowComponent: RowPlaceholder,
              cellComponent: CellPlaceholder,
              getCellColSpan: getTableCellColSpan
            }
          });
        }])]
      ), h(
        DxTemplate,
        {
          attrs: { name: 'tableCell' }
        },
        [function (_ref4) {
          var attrs = _ref4.attrs,
              listeners = _ref4.listeners;
          return h(DxTemplateConnector, [function (_ref5) {
            var headerRows = _ref5.getters.tableHeaderRows;
            return isHeaderStubTableCell(attrs.tableRow, headerRows) ? h(StubHeaderCell, { attrs: _extends({}, attrs), on: _extends({}, listeners) }) : h(StubCell, { attrs: _extends({}, attrs), on: _extends({}, listeners) });
          }]);
        }]
      ), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableCell',
            predicate: function predicate(_ref6) {
              var _ref6$attrs = _ref6.attrs,
                  tableRow = _ref6$attrs.tableRow,
                  tableColumn = _ref6$attrs.tableColumn;
              return isDataTableCell(tableRow, tableColumn);
            }
          }
        },
        [function (_ref7) {
          var attrs = _ref7.attrs,
              listeners = _ref7.listeners;
          return h(DxTemplateConnector, [function (_ref8) {
            var getCellValue = _ref8.getters.getCellValue;

            var value = getCellValue(attrs.tableRow.row, attrs.tableColumn.column.name);
            return h(
              DxTemplatePlaceholder,
              {
                attrs: {
                  name: 'valueFormatter',
                  row: attrs.tableRow.row,
                  column: attrs.tableColumn.column,
                  value: value
                }
              },
              [function (content) {
                return h(
                  Cell,
                  babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
                    attrs: {
                      row: attrs.tableRow.row,
                      column: attrs.tableColumn.column,
                      value: value
                    }
                  }]),
                  [content]
                );
              }]
            );
          }]);
        }]
      ), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableCell',
            predicate: function predicate(_ref9) {
              var tableRow = _ref9.attrs.tableRow;
              return isNoDataTableRow(tableRow);
            }
          }
        },
        [function (_ref10) {
          var attrs = _ref10.attrs,
              listeners = _ref10.listeners;
          return h(DxTemplateConnector, [function (_ref11) {
            var tableColumns = _ref11.getters.tableColumns;

            if (isNoDataTableCell(attrs.tableColumn, tableColumns)) {
              return h(NoDataCell, babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
                attrs: {
                  getMessage: getMessage
                }
              }]));
            }
            return null;
          }]);
        }]
      ), h(
        DxTemplate,
        {
          attrs: { name: 'tableRow' }
        },
        [function (_ref12) {
          var attrs = _ref12.attrs,
              listeners = _ref12.listeners,
              slots = _ref12.slots;
          return h(
            StubRow,
            { attrs: _extends({}, attrs), on: _extends({}, listeners) },
            [slots.default]
          );
        }]
      ), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableRow',
            predicate: function predicate(_ref13) {
              var tableRow = _ref13.attrs.tableRow;
              return isDataTableRow(tableRow);
            }
          }
        },
        [function (_ref14) {
          var attrs = _ref14.attrs,
              listeners = _ref14.listeners,
              slots = _ref14.slots;
          return h(
            Row,
            babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
              attrs: {
                row: attrs.tableRow.row
              }
            }]),
            [slots.default]
          );
        }]
      ), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableRow',
            predicate: function predicate(_ref15) {
              var tableRow = _ref15.attrs.tableRow;
              return isNoDataTableRow(tableRow);
            }
          }
        },
        [function (_ref16) {
          var attrs = _ref16.attrs,
              listeners = _ref16.listeners,
              slots = _ref16.slots;
          return h(
            NoDataRow,
            { attrs: _extends({}, attrs), on: _extends({}, listeners) },
            [slots.default]
          );
        }]
      )]
    );
  }
};

var tableHeaderRowsComputed = function tableHeaderRowsComputed(_ref) {
  var tableHeaderRows = _ref.tableHeaderRows;
  return tableRowsWithHeading(tableHeaderRows);
};

var pluginDependencies$1 = [{ name: 'DxTable' }];

var DxTableHeaderRow = {
  name: 'DxTableHeaderRow',
  props: {
    showSortingControls: {
      type: Boolean
    },
    showGroupingControls: {
      type: Boolean
    },
    cellComponent: {
      type: Object,
      required: true
    },
    rowComponent: {
      type: Object,
      required: true
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var HeaderCell = this.cellComponent,
        HeaderRow = this.rowComponent;


    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxTableHeaderRow',
          dependencies: pluginDependencies$1
        }
      },
      [h(DxGetter, {
        attrs: { name: 'tableHeaderRows', computed: tableHeaderRowsComputed }
      }), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableCell',
            predicate: function predicate(_ref2) {
              var _ref2$attrs = _ref2.attrs,
                  tableRow = _ref2$attrs.tableRow,
                  tableColumn = _ref2$attrs.tableColumn;
              return isHeadingTableCell(tableRow, tableColumn);
            }
          }
        },
        [function (_ref3) {
          var attrs = _ref3.attrs,
              listeners = _ref3.listeners;
          return h(DxTemplateConnector, [function (_ref4) {
            var _ref4$getters = _ref4.getters,
                sorting = _ref4$getters.sorting,
                tableColumns = _ref4$getters.tableColumns,
                isColumnSortingEnabled = _ref4$getters.isColumnSortingEnabled,
                isColumnGroupingEnabled = _ref4$getters.isColumnGroupingEnabled,
                _ref4$actions = _ref4.actions,
                changeColumnSorting$$1 = _ref4$actions.changeColumnSorting,
                changeColumnGrouping$$1 = _ref4$actions.changeColumnGrouping;
            var columnName = attrs.tableColumn.column.name;

            var atLeastOneDataColumn = tableColumns.filter(function (_ref5) {
              var type = _ref5.type;
              return type === TABLE_DATA_TYPE;
            }).length > 1;
            var sortingEnabled = isColumnSortingEnabled && isColumnSortingEnabled(columnName);
            var groupingEnabled = isColumnGroupingEnabled && isColumnGroupingEnabled(columnName) && atLeastOneDataColumn;

            return h(
              HeaderCell,
              babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
                attrs: {
                  column: attrs.tableColumn.column,
                  showSortingControls: _this.showSortingControls,
                  showGroupingControls: _this.showGroupingControls,
                  sortingEnabled: sortingEnabled,
                  groupingEnabled: groupingEnabled,
                  sortingDirection: _this.showSortingControls ? getColumnSortingDirection(sorting, columnName) : undefined
                },
                on: {
                  'sort': function sort(_ref6) {
                    var direction = _ref6.direction,
                        keepOther = _ref6.keepOther;
                    return changeColumnSorting$$1({ columnName: columnName, direction: direction, keepOther: keepOther });
                  },
                  'group': function group() {
                    return changeColumnGrouping$$1({ columnName: columnName });
                  }
                }
              }]),
              [h(DxTemplatePlaceholder, {
                slot: 'before',
                attrs: { name: 'tableHeaderCellBefore',
                  column: attrs.tableColumn.column
                }
              })]
            );
          }]);
        }]
      ), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableRow',
            predicate: function predicate(_ref7) {
              var tableRow = _ref7.attrs.tableRow;
              return isHeadingTableRow(tableRow);
            }
          }
        },
        [function (_ref8) {
          var attrs = _ref8.attrs,
              listeners = _ref8.listeners,
              slots = _ref8.slots;
          return h(
            HeaderRow,
            { attrs: _extends({}, attrs), on: _extends({}, listeners) },
            [slots.default]
          );
        }]
      )]
    );
  }
};

var pluginDependencies$2 = [{ name: 'DxSortingState' }];

var DxIntegratedSorting = {
  name: 'DxIntegratedSorting',
  props: {
    columnExtensions: {
      type: Array
    }
  },
  render: function render() {
    var h = arguments[0];
    var columnExtensions = this.columnExtensions;

    var getColumnCompare = function getColumnCompare(columnName) {
      return getColumnExtension(columnExtensions, columnName).compare;
    };

    var rowsComputed = function rowsComputed(_ref) {
      var rows = _ref.rows,
          sorting = _ref.sorting,
          getCellValue = _ref.getCellValue,
          isGroupRow = _ref.isGroupRow,
          getRowLevelKey = _ref.getRowLevelKey;
      return sortedRows(rows, sorting, getCellValue, getColumnCompare, isGroupRow, getRowLevelKey);
    };

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxIntegratedSorting',
          dependencies: pluginDependencies$2
        }
      },
      [h(DxGetter, {
        attrs: { name: 'rows', computed: rowsComputed }
      })]
    );
  }
};

var DxSortingState = {
  name: 'DxSortingState',
  props: {
    sorting: {
      type: Array,
      required: true
    },
    columnExtensions: {
      type: Array
    },
    columnSortingEnabled: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    changeColumnSorting: function changeColumnSorting$$1(payload) {
      var persistentSortedColumns = getPersistentSortedColumns(this.sorting, this.columnExtensions);
      var keepOther = calculateKeepOther(this.sorting, payload.keepOther, persistentSortedColumns);
      this.$emit('update:sorting', changeColumnSorting({ sorting: this.sorting }, _extends({}, payload, { keepOther: keepOther })).sorting);
    }
  },

  render: function render() {
    var h = arguments[0];
    var columnExtensions = this.columnExtensions,
        columnSortingEnabled = this.columnSortingEnabled;

    var columnExtensionValueGetter = function columnExtensionValueGetter(extensions, defaultValue) {
      return getColumnExtensionValueGetter(extensions, 'sortingEnabled', defaultValue);
    };

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxSortingState'
        }
      },
      [h(DxGetter, {
        attrs: { name: 'sorting', value: this.sorting }
      }), h(DxGetter, {
        attrs: {
          name: 'isColumnSortingEnabled',
          value: columnExtensionValueGetter(columnExtensions, columnSortingEnabled)
        }
      }), h(DxAction, {
        attrs: { name: 'changeColumnSorting', action: this.changeColumnSorting }
      })]
    );
  }
};

var DxToolbar = {
  name: 'DxToolbar',
  props: {
    rootComponent: {
      type: Object,
      required: true
    },
    flexibleSpaceComponent: {
      type: Object,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var Root = this.rootComponent,
        FlexibleSpaceComponent = this.flexibleSpaceComponent;

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxToolbar'
        }
      },
      [h(
        DxTemplate,
        {
          attrs: { name: 'header' }
        },
        [h(Root, [h(DxTemplatePlaceholder, {
          attrs: { name: 'toolbarContent' }
        })]), h(DxTemplatePlaceholder)]
      ), h(
        DxTemplate,
        {
          attrs: { name: 'toolbarContent' }
        },
        [h(FlexibleSpaceComponent)]
      )]
    );
  }
};

var TABLE_FLEX_TYPE = 'flex';

var TableLayout = {
  props: {
    columns: {
      type: Array,
      required: true
    },
    layoutComponent: {
      type: Object,
      required: true
    },
    minColumnWidth: {
      type: Number,
      required: true
    }
  },
  methods: {
    getColumns: function getColumns() {
      var columns = this.columns;


      var result = columns;

      var isFixedWidth = columns.filter(function (column) {
        return column.width === undefined;
      }).length === 0;
      if (isFixedWidth) {
        result = result.slice();
        result.push({ key: TABLE_FLEX_TYPE, type: TABLE_FLEX_TYPE });
      }

      return result;
    }
  },
  render: function render() {
    var h = arguments[0];
    var minColumnWidth = this.minColumnWidth,
        Layout = this.layoutComponent;


    var columns = this.getColumns();
    var minWidth = columns.map(function (column) {
      return column.width || (column.type === TABLE_FLEX_TYPE ? 0 : minColumnWidth);
    }).reduce(function (acc, width) {
      return acc + width;
    }, 0);

    return h(Layout, babelHelperVueJsxMergeProps([{ attrs: this.$attrs }, {
      attrs: {
        columns: columns,
        minWidth: minWidth,
        minColumnWidth: minColumnWidth
      }
    }]));
  }
};

var ColumnGroup = {
  name: 'ColumnGroup',
  props: {
    columns: {
      type: Array,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var columns = this.columns;


    return h('colgroup', [columns.map(function (column) {
      return h('col', {
        key: column.key,
        style: column.width !== undefined ? { width: column.width + 'px' } : null
      });
    })]);
  }
};

var getRowStyle = function getRowStyle(_ref) {
  var row = _ref.row;
  return row.height !== undefined ? { height: row.height + 'px' } : undefined;
};

var RowLayout = {
  name: 'RowLayout',
  props: {
    row: {
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    rowComponent: {
      type: Object,
      required: true
    },
    cellComponent: {
      type: Object,
      required: true
    },
    getCellColSpan: {
      getCellColSpan: Function,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var row = this.row,
        columns = this.columns,
        Row = this.rowComponent,
        Cell = this.cellComponent,
        getCellColSpan = this.getCellColSpan;

    var getColSpan = function getColSpan(tableRow, tableColumn) {
      return getCellColSpan({ tableRow: tableRow, tableColumn: tableColumn, tableColumns: columns });
    };

    return h(
      Row,
      {
        attrs: {
          tableRow: row
        },
        style: getRowStyle({ row: row })
      },
      [columns.map(function (column) {
        return h(Cell, {
          key: column.key,
          attrs: { tableRow: row,
            tableColumn: column,
            colSpan: getColSpan(row, column)
          }
        });
      })]
    );
  }
};

var RowsBlockLayout = {
  name: 'RowsBlockLayout',
  props: {
    rows: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    blockComponent: {
      type: Object,
      required: true
    },
    rowComponent: {
      type: Object,
      required: true
    },
    cellComponent: {
      type: Object,
      required: true
    },
    getCellColSpan: {
      getCellColSpan: Function,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var rows = this.rows,
        columns = this.columns,
        Block = this.blockComponent,
        rowComponent = this.rowComponent,
        cellComponent = this.cellComponent,
        getCellColSpan = this.getCellColSpan;


    return h(Block, [rows.map(function (row) {
      return h(RowLayout, {
        key: row.key,
        attrs: { row: row,
          columns: columns,
          rowComponent: rowComponent,
          cellComponent: cellComponent,
          getCellColSpan: getCellColSpan
        }
      });
    })]);
  }
};

var StaticTableLayout = {
  props: {
    cellComponent: {
      type: Object,
      required: true
    },
    rowComponent: {
      type: Object,
      required: true
    },
    bodyComponent: {
      type: Object,
      required: true
    },
    headComponent: {
      type: Object
    },
    tableComponent: {
      type: Object,
      required: true
    },
    containerComponent: {
      type: Object,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    bodyRows: {
      type: Array,
      required: true
    },
    headerRows: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    minWidth: {
      type: Number,
      required: true
    },
    getCellColSpan: {
      getCellColSpan: Function,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var cellComponent = this.cellComponent,
        rowComponent = this.rowComponent,
        bodyComponent = this.bodyComponent,
        headComponent = this.headComponent,
        Table = this.tableComponent,
        Container = this.containerComponent,
        columns = this.columns,
        bodyRows = this.bodyRows,
        headerRows = this.headerRows,
        minWidth = this.minWidth,
        getCellColSpan = this.getCellColSpan;


    return h(Container, [h(
      Table,
      {
        style: { minWidth: minWidth + 'px' }
      },
      [h(ColumnGroup, {
        attrs: { columns: columns }
      }), !!headerRows.length && h(RowsBlockLayout, {
        attrs: {
          rows: headerRows,
          columns: columns,
          blockComponent: headComponent,
          rowComponent: rowComponent,
          cellComponent: cellComponent,
          getCellColSpan: getCellColSpan
        }
      }), h(RowsBlockLayout, {
        attrs: {
          rows: bodyRows,
          columns: columns,
          blockComponent: bodyComponent,
          rowComponent: rowComponent,
          cellComponent: cellComponent,
          getCellColSpan: getCellColSpan
        }
      })]
    )]);
  }
};

var VirtualTableLayout = {
  name: 'VirtualTableLayout',
  props: {
    minWidth: {
      type: Number,
      required: true
    },
    minColumnWidth: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    headerRows: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    bodyRows: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    cellComponent: {
      type: Object,
      required: true
    },
    rowComponent: {
      type: Object,
      required: true
    },
    bodyComponent: {
      type: Object,
      required: true
    },
    headComponent: {
      type: Object,
      default: function _default() {
        return null;
      }
    },
    tableComponent: {
      type: Object,
      required: true
    },
    headTableComponent: {
      type: Object,
      default: function _default() {
        return null;
      }
    },
    containerComponent: {
      type: Object,
      required: true
    },
    estimatedRowHeight: {
      type: Number,
      required: true
    },
    getCellColSpan: {
      type: Function,
      required: true
    }
  },
  data: function data() {
    return {
      rowHeights: new Map(),
      viewportTop: 0,
      viewportLeft: 0
    };
  },
  mounted: function mounted() {
    this.storeRowHeights();
  },
  updated: function updated() {
    this.storeRowHeights();
  },

  watch: {
    headerRows: function headerRows(_headerRows) {
      var prevRowHeight = this.rowHeights,
          bodyRows = this.bodyRows;

      var rowHeights = [_headerRows, bodyRows].reduce(function (acc, row) {
        var rowHeight = prevRowHeight.get(row.key);
        if (rowHeight !== undefined) {
          acc.set(row.key, rowHeight);
        }
        return acc;
      }, new Map());
      this.rowHeights = rowHeights;
    },
    bodyRows: function bodyRows(_bodyRows) {
      var prevRowHeight = this.rowHeights,
          headerRows = this.headerRows;

      var rowHeights = [headerRows, _bodyRows].reduce(function (acc, row) {
        var rowHeight = prevRowHeight.get(row.key);
        if (rowHeight !== undefined) {
          acc.set(row.key, rowHeight);
        }
        return acc;
      }, new Map());
      this.rowHeights = rowHeights;
    }
  },
  methods: {
    getRowHeight: function getRowHeight(row) {
      var storedHeight = this.rowHeights.get(row.key);
      if (storedHeight !== undefined) return storedHeight;
      if (row.height) return row.height;
      return this.estimatedRowHeight;
    },
    storeRowHeights: function storeRowHeights() {
      var _this = this;

      var rowsWithChangedHeights = Object.keys(this.$refs).map(function (node) {
        return _this.$refs[node];
      }).filter(function (node) {
        return !!node;
      }).map(function (node) {
        return [node.$attrs.row, node.$el.getBoundingClientRect().height];
      }).filter(function (_ref) {
        var _ref2 = slicedToArray(_ref, 2),
            row = _ref2[0],
            height = _ref2[1];

        return height !== _this.getRowHeight(row);
      });

      if (rowsWithChangedHeights.length) {
        var newRowHeights = new Map();
        rowsWithChangedHeights.forEach(function (_ref3) {
          var _ref4 = slicedToArray(_ref3, 2),
              row = _ref4[0],
              height = _ref4[1];

          return newRowHeights.set(row.key, height);
        });

        this.rowHeights = newRowHeights;
      }
    },
    updateViewport: function updateViewport(e) {
      var node = e.target;

      if (node !== e.currentTarget) {
        return;
      }

      // NOTE: prevent iOS to flicker in bounces
      if (node.scrollTop < 0 || node.scrollLeft < 0 || node.scrollLeft + node.clientWidth > Math.max(node.scrollWidth, node.clientWidth) || node.scrollTop + node.clientHeight > Math.max(node.scrollHeight, node.clientHeight)) {
        return;
      }

      this.viewportTop = node.scrollTop;
      this.viewportLeft = node.scrollLeft;
    },
    renderRowsBlock: function renderRowsBlock(collapsedGrid, Table, Body) {
      var h = this.$createElement;
      var minWidth = this.minWidth,
          Row = this.rowComponent,
          Cell = this.cellComponent;


      return h(
        Table,
        {
          style: { minWidth: minWidth + 'px' },
          attrs: { minWidth: minWidth + 'px'
          }
        },
        [h(ColumnGroup, {
          attrs: {
            columns: collapsedGrid.columns
          }
        }), h(Body, [collapsedGrid.rows.map(function (visibleRow) {
          var row = visibleRow.row,
              _visibleRow$cells = visibleRow.cells,
              cells = _visibleRow$cells === undefined ? [] : _visibleRow$cells;

          return h(
            DxRefHolder,
            {
              key: row.key,
              ref: '' + row.key,
              attrs: { row: row
              }
            },
            [h(
              Row,
              {
                attrs: {
                  tableRow: row,
                  height: row.height !== undefined ? row.height + 'px' : undefined
                }
              },
              [cells.map(function (cell) {
                var column = cell.column;

                return h(Cell, {
                  key: column.key,
                  attrs: { tableRow: row,
                    tableColumn: column,

                    colSpan: cell.colSpan
                  },
                  style: column.animationState });
              })]
            )]
          );
        })])]
      );
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var headerRows = this.headerRows,
        bodyRows = this.bodyRows,
        columns = this.columns,
        minColumnWidth = this.minColumnWidth,
        height = this.height,
        Container = this.containerComponent,
        HeadTable = this.headTableComponent,
        Table = this.tableComponent,
        Head = this.headComponent,
        Body = this.bodyComponent,
        getCellColSpan = this.getCellColSpan,
        updateViewport = this.updateViewport,
        renderRowsBlock = this.renderRowsBlock;


    return h(DxSizer, [function (_ref5) {
      var width = _ref5.width;

      var headHeight = headerRows.reduce(function (acc, row) {
        return acc + _this2.getRowHeight(row);
      }, 0);
      var getColSpan = function getColSpan(tableRow, tableColumn) {
        return getCellColSpan({ tableRow: tableRow, tableColumn: tableColumn, tableColumns: columns });
      };
      var collapsedHeaderGrid = getCollapsedGrid({
        rows: headerRows,
        columns: columns,
        top: 0,
        left: _this2.viewportLeft,
        width: width,
        height: headHeight,
        getColumnWidth: function getColumnWidth(column) {
          return column.width || minColumnWidth;
        },
        getRowHeight: _this2.getRowHeight,
        getColSpan: getColSpan
      });
      var collapsedBodyGrid = getCollapsedGrid({
        rows: bodyRows,
        columns: columns,
        top: _this2.viewportTop,
        left: _this2.viewportLeft,
        width: width,
        height: height - headHeight,
        getColumnWidth: function getColumnWidth(column) {
          return column.width || minColumnWidth;
        },
        getRowHeight: _this2.getRowHeight,
        getColSpan: getColSpan
      });
      return h(
        Container,
        {
          style: { height: height + 'px' },
          on: {
            'scroll': updateViewport
          }
        },
        [!!headerRows.length && renderRowsBlock(collapsedHeaderGrid, HeadTable, Head), renderRowsBlock(collapsedBodyGrid, Table, Body)]
      );
    }]);
  }
};

var columnExtensionValueGetter = function columnExtensionValueGetter(columnExtensions, defaultValue) {
  return getColumnExtensionValueGetter(columnExtensions, 'filteringEnabled', defaultValue);
};
var filterExpressionComputed = function filterExpressionComputed(_ref) {
  var filters = _ref.filters,
      filterExpressionValue = _ref.filterExpression;
  return filterExpression(filters, filterExpressionValue);
};

var DxFilteringState = {
  name: 'DxFilteringState',
  props: {
    filters: {
      type: Array,
      required: true
    },
    columnExtensions: {
      type: Array
    },
    columnFilteringEnabled: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    changeColumnFilter: function changeColumnFilter$$1(payload) {
      this.$emit('update:filters', changeColumnFilter(this.filters, payload));
    }
  },
  render: function render() {
    var h = arguments[0];
    var filters = this.filters,
        columnExtensions = this.columnExtensions,
        columnFilteringEnabled = this.columnFilteringEnabled;


    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxFilteringState'
        }
      },
      [h(DxGetter, {
        attrs: { name: 'filters', value: filters }
      }), h(DxGetter, {
        attrs: { name: 'filterExpression', computed: filterExpressionComputed }
      }), h(DxGetter, {
        attrs: {
          name: 'isColumnFilteringEnabled',
          value: columnExtensionValueGetter(columnExtensions, columnFilteringEnabled)
        }
      }), h(DxAction, {
        attrs: { name: 'changeColumnFilter', action: this.changeColumnFilter }
      })]
    );
  }
};

var pluginDependencies$3 = [{ name: 'DxFilteringState', optional: true }, { name: 'DxSearchState', optional: true }];

var getCollapsedRowsComputed = function getCollapsedRowsComputed(_ref) {
  var rows = _ref.rows;
  return filteredCollapsedRowsGetter(rows);
};
var unwrappedRowsComputed = function unwrappedRowsComputed(_ref2) {
  var rows = _ref2.rows;
  return unwrappedFilteredRows(rows);
};

var DxIntegratedFiltering = {
  name: 'DxIntegratedFiltering',
  props: {
    columnExtensions: {
      type: Array
    }
  },
  render: function render() {
    var h = arguments[0];
    var columnExtensions = this.columnExtensions;

    var getColumnPredicate = function getColumnPredicate(columnName) {
      return getColumnExtension(columnExtensions, columnName).predicate;
    };

    var rowsComputed = function rowsComputed(_ref3) {
      var rows = _ref3.rows,
          filterExpression$$1 = _ref3.filterExpression,
          getCellValue = _ref3.getCellValue,
          getRowLevelKey = _ref3.getRowLevelKey,
          getCollapsedRows = _ref3.getCollapsedRows;
      return filteredRows(rows, filterExpression$$1, getCellValue, getColumnPredicate, getRowLevelKey, getCollapsedRows);
    };

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxIntegratedFiltering',
          dependencies: pluginDependencies$3
        }
      },
      [h(DxGetter, {
        attrs: { name: 'rows', computed: rowsComputed }
      }), h(DxGetter, {
        attrs: { name: 'getCollapsedRows', computed: getCollapsedRowsComputed }
      }), h(DxGetter, {
        attrs: { name: 'rows', computed: unwrappedRowsComputed }
      })]
    );
  }
};

DxIntegratedFiltering.defaultPredicate = defaultFilterPredicate;

var pluginDependencies$4 = [{ name: 'DxFilteringState' }, { name: 'DxTable' }, { name: 'DxDataTypeProvider', optional: true }];

var DxTableFilterRow = {
  name: 'DxTableFilterRow',
  props: {
    rowHeight: {
      type: Number
    },
    showFilterSelector: {
      type: Boolean,
      default: false
    },
    messages: {
      type: Object
    },
    cellComponent: {
      type: Object,
      required: true
    },
    rowComponent: {
      type: Object,
      required: true
    },
    filterSelectorComponent: {
      type: Object,
      required: true
    },
    iconComponent: {
      type: Object,
      required: true
    },
    editorComponent: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      filterOperations: {}
    };
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var rowHeight = this.rowHeight,
        showFilterSelector = this.showFilterSelector,
        FilterCell = this.cellComponent,
        FilterRow = this.rowComponent,
        FilterSelector = this.filterSelectorComponent,
        iconComponent = this.iconComponent,
        EditorComponent = this.editorComponent,
        messages = this.messages,
        filterOperations = this.filterOperations;


    var getMessage = getMessagesFormatter(messages);

    var tableHeaderRowsComputed = function tableHeaderRowsComputed(_ref) {
      var tableHeaderRows = _ref.tableHeaderRows;
      return tableHeaderRowsWithFilter(tableHeaderRows, rowHeight);
    };

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxTableFilterRow',
          dependencies: pluginDependencies$4
        }
      },
      [h(DxGetter, {
        attrs: { name: 'tableHeaderRows', computed: tableHeaderRowsComputed }
      }), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableCell',
            predicate: function predicate(_ref2) {
              var _ref2$attrs = _ref2.attrs,
                  tableRow = _ref2$attrs.tableRow,
                  tableColumn = _ref2$attrs.tableColumn;
              return isFilterTableCell(tableRow, tableColumn);
            }
          }
        },
        [function (_ref3) {
          var attrs = _ref3.attrs,
              listeners = _ref3.listeners;
          return h(DxTemplateConnector, [function (_ref4) {
            var _ref4$getters = _ref4.getters,
                filters = _ref4$getters.filters,
                isColumnFilteringEnabled = _ref4$getters.isColumnFilteringEnabled,
                getAvailableFilterOperations = _ref4$getters.getAvailableFilterOperations,
                changeColumnFilter$$1 = _ref4.actions.changeColumnFilter;
            var columnName = attrs.tableColumn.column.name;

            var filter = getColumnFilterConfig(filters, columnName);
            var onFilter = function onFilter(config) {
              return changeColumnFilter$$1({ columnName: columnName, config: config });
            };
            var columnFilterOperations = getColumnFilterOperations(getAvailableFilterOperations, columnName);
            var selectedFilterOperation = filterOperations[columnName] || columnFilterOperations[0];
            var handleFilterOperationChange = function handleFilterOperationChange(value) {
              _this.filterOperations = _extends({}, filterOperations, defineProperty({}, columnName, value));
              if (filter && !isFilterValueEmpty(filter.value)) {
                onFilter({ value: filter.value, operation: value });
              }
            };
            var handleFilterValueChange = function handleFilterValueChange(value) {
              onFilter(!isFilterValueEmpty(value) ? { value: value, operation: selectedFilterOperation } : null);
            };
            var filteringEnabled = isColumnFilteringEnabled(columnName);
            return h(
              DxTemplatePlaceholder,
              {
                attrs: {
                  name: 'valueEditor',
                  column: attrs.tableColumn.column,
                  value: filter ? filter.value : undefined
                },
                on: {
                  'valueChange': handleFilterValueChange
                }
              },
              [function (content) {
                return h(
                  FilterCell,
                  babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
                    attrs: {
                      getMessage: getMessage,
                      column: attrs.tableColumn.column,
                      filter: filter,
                      filteringEnabled: filteringEnabled
                    },
                    on: {
                      'filter': onFilter
                    }
                  }]),
                  [showFilterSelector ? h(FilterSelector, {
                    attrs: {
                      iconComponent: iconComponent,
                      value: selectedFilterOperation,
                      availableValues: columnFilterOperations,

                      disabled: !filteringEnabled,
                      getMessage: getMessage
                    },
                    on: {
                      'changeValue': handleFilterOperationChange
                    }
                  }) : null, content || h(EditorComponent, {
                    attrs: {
                      value: filter ? filter.value : '',
                      disabled: !filteringEnabled,
                      getMessage: getMessage
                    },
                    on: {
                      'changeValue': handleFilterValueChange
                    }
                  })]
                );
              }]
            );
          }]);
        }]
      ), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableRow',
            predicate: function predicate(_ref5) {
              var tableRow = _ref5.attrs.tableRow;
              return isFilterTableRow(tableRow);
            }
          }
        },
        [function (_ref6) {
          var attrs = _ref6.attrs,
              listeners = _ref6.listeners,
              slots = _ref6.slots;
          return h(
            FilterRow,
            babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
              attrs: {
                row: attrs.tableRow.row
              }
            }]),
            [slots.default]
          );
        }]
      )]
    );
  }
};

var dependencies = [{ name: 'DxSortingState', optional: true }];

var callback = function callback(_ref, _ref2, _ref3, _ref4, columnName) {
  var grouping = _ref.grouping;
  var prevGrouping = _ref2.grouping;
  var sorting = _ref3.sorting;
  var changeColumnSorting$$1 = _ref4.changeColumnSorting;

  if (!sorting) return;
  var columnSortingIndex = sorting.findIndex(function (columnSorting) {
    return columnSorting.columnName === columnName;
  });
  var prevGroupingIndex = prevGrouping.findIndex(function (columnGrouping) {
    return columnGrouping.columnName === columnName;
  });
  var groupingIndex = grouping.findIndex(function (columnGrouping) {
    return columnGrouping.columnName === columnName;
  });

  if (columnSortingIndex === -1 || prevGroupingIndex === prevGrouping.length - 1 && groupingIndex === -1) return;

  var sortIndex = adjustSortIndex(groupingIndex === -1 ? grouping.length : groupingIndex, grouping, sorting);

  if (columnSortingIndex === sortIndex) return;

  changeColumnSorting$$1(_extends({
    keepOther: true,
    sortIndex: sortIndex
  }, sorting[columnSortingIndex]));
};

var columnExtensionValueGetter$1 = function columnExtensionValueGetter(columnExtensions, defaultValue) {
  return getColumnExtensionValueGetter(columnExtensions, 'groupingEnabled', defaultValue);
};

var DxGroupingState = {
  name: 'DxGroupingState',
  props: {
    grouping: {
      type: Array,
      required: true
    },
    expandedGroups: {
      type: Array,
      required: true
    },
    columnExtensions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    columnGroupingEnabled: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    changeColumnSorting: function changeColumnSorting$$1(_ref5, _ref6, _ref7) {
      var sorting = _ref6.sorting;
      var changeColumnSorting$$1 = _ref7.changeColumnSorting;
      var columnName = _ref5.columnName,
          keepOther = _ref5.keepOther,
          restParams = objectWithoutProperties(_ref5, ['columnName', 'keepOther']);
      var grouping = this.grouping;

      var groupingIndex = grouping.findIndex(function (columnGrouping) {
        return columnGrouping.columnName === columnName;
      });
      if (groupingIndex === -1) {
        changeColumnSorting$$1(_extends({
          columnName: columnName,
          keepOther: keepOther || grouping.map(function (columnGrouping) {
            return columnGrouping.columnName;
          })
        }, restParams));
        return false;
      }

      var sortIndex = adjustSortIndex(groupingIndex, grouping, sorting);
      changeColumnSorting$$1(_extends({
        columnName: columnName,
        keepOther: true,
        sortIndex: sortIndex
      }, restParams));
      return false;
    },
    changeColumnGrouping: function changeColumnGrouping$$1(_ref8, getters, actions) {
      var columnName = _ref8.columnName,
          groupingIndex = _ref8.groupingIndex;

      var prevState = {
        grouping: this.grouping,
        expandedGroups: this.expandedGroups
      };
      var stateChange = changeColumnGrouping(prevState, { columnName: columnName, groupingIndex: groupingIndex });

      this.$emit('update:grouping', stateChange.grouping);

      callback(_extends({}, prevState, stateChange), prevState, getters, actions, columnName);
    },
    toggleGroupExpanded: function toggleGroupExpanded(_ref9) {
      var groupKey = _ref9.groupKey;

      this.$emit('update:expandedGroups', toggleExpandedGroups({ expandedGroups: this.expandedGroups }, { groupKey: groupKey }).expandedGroups);
    }
  },
  render: function render() {
    var h = arguments[0];
    var grouping = this.grouping,
        expandedGroups = this.expandedGroups;
    var columnExtensions = this.columnExtensions,
        columnGroupingEnabled = this.columnGroupingEnabled;


    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxGroupingState',
          dependencies: dependencies
        }
      },
      [h(DxGetter, {
        attrs: { name: 'grouping', value: grouping }
      }), h(DxGetter, {
        attrs: {
          name: 'isColumnGroupingEnabled',
          value: columnExtensionValueGetter$1(columnExtensions, columnGroupingEnabled)
        }
      }), h(DxAction, {
        attrs: { name: 'changeColumnGrouping', action: this.changeColumnGrouping }
      }), h(DxGetter, {
        attrs: { name: 'expandedGroups', value: expandedGroups }
      }), h(DxAction, {
        attrs: { name: 'toggleGroupExpanded', action: this.toggleGroupExpanded }
      }), h(DxAction, {
        attrs: { name: 'changeColumnSorting', action: this.changeColumnSorting }
      })]
    );
  }
};

var pluginDependencies$5 = [{ name: 'DxGroupingState' }];

var getCollapsedRowsComputed$1 = function getCollapsedRowsComputed(_ref) {
  var getCollapsedRows = _ref.getCollapsedRows;
  return groupCollapsedRowsGetter(getCollapsedRows);
};

var expandedGroupedRowsComputed = function expandedGroupedRowsComputed(_ref2) {
  var rows = _ref2.rows,
      grouping = _ref2.grouping,
      expandedGroups = _ref2.expandedGroups;
  return expandedGroupRows(rows, grouping, expandedGroups);
};

var DxIntegratedGrouping = {
  name: 'DxIntegratedGrouping',
  props: {
    columnExtensions: {
      type: Array
    }
  },
  render: function render() {
    var h = arguments[0];
    var columnExtensions = this.columnExtensions;

    var getColumnCriteria = function getColumnCriteria(columnName) {
      return getColumnExtension(columnExtensions, columnName).criteria;
    };

    var groupedRowsComputed = function groupedRowsComputed(_ref3) {
      var rows = _ref3.rows,
          grouping = _ref3.grouping,
          getCellValue = _ref3.getCellValue;
      return groupedRows(rows, grouping, getCellValue, getColumnCriteria);
    };

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxIntegratedGrouping',
          dependencies: pluginDependencies$5
        }
      },
      [h(DxGetter, {
        attrs: { name: 'isGroupRow', value: groupRowChecker }
      }), h(DxGetter, {
        attrs: { name: 'getRowLevelKey', value: groupRowLevelKeyGetter }
      }), h(DxGetter, {
        attrs: { name: 'getCollapsedRows', computed: getCollapsedRowsComputed$1 }
      }), h(DxGetter, {
        attrs: { name: 'rows', computed: groupedRowsComputed }
      }), h(DxGetter, {
        attrs: { name: 'rows', computed: expandedGroupedRowsComputed }
      })]
    );
  }
};

var pluginDependencies$6 = [{ name: 'DxGroupingState' }];

var getCollapsedRowsComputed$2 = function getCollapsedRowsComputed(_ref) {
  var getCollapsedRows = _ref.getCollapsedRows;
  return groupCollapsedRowsGetter(getCollapsedRows);
};
var expandedGroupedRowsComputed$1 = function expandedGroupedRowsComputed(_ref2) {
  var rows = _ref2.rows,
      grouping = _ref2.grouping,
      expandedGroups = _ref2.expandedGroups;
  return expandedGroupRows(rows, grouping, expandedGroups);
};
var getRowIdComputed = function getRowIdComputed(_ref3) {
  var getRowId = _ref3.getRowId,
      rows = _ref3.rows;
  return customGroupingRowIdGetter(getRowId, rows);
};

var DxCustomGrouping = {
  name: 'DxCustomGrouping',
  props: {
    getChildGroups: {
      type: Function,
      required: true
    },
    grouping: {
      type: Array
    },
    expandedGroups: {
      type: Array
    }
  },
  render: function render() {
    var h = arguments[0];
    var getChildGroups = this.getChildGroups,
        appliedGrouping = this.grouping,
        appliedExpandedGroups = this.expandedGroups;

    var groupedRowsComputed = function groupedRowsComputed(_ref4) {
      var rows = _ref4.rows,
          grouping = _ref4.grouping;
      return customGroupedRows(rows, grouping, getChildGroups);
    };
    var groupingComputed = function groupingComputed(_ref5) {
      var grouping = _ref5.grouping;
      return appliedGrouping || grouping;
    };
    var expandedGroupsComputed = function expandedGroupsComputed(_ref6) {
      var expandedGroups = _ref6.expandedGroups;
      return appliedExpandedGroups || expandedGroups;
    };

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxCustomGrouping',
          dependencies: pluginDependencies$6
        }
      },
      [h(DxGetter, {
        attrs: { name: 'grouping', computed: groupingComputed }
      }), h(DxGetter, {
        attrs: { name: 'expandedGroups', computed: expandedGroupsComputed }
      }), h(DxGetter, {
        attrs: { name: 'isGroupRow', value: groupRowChecker }
      }), h(DxGetter, {
        attrs: { name: 'getRowLevelKey', value: groupRowLevelKeyGetter }
      }), h(DxGetter, {
        attrs: { name: 'getCollapsedRows', computed: getCollapsedRowsComputed$2 }
      }), h(DxGetter, {
        attrs: { name: 'rows', computed: groupedRowsComputed }
      }), h(DxGetter, {
        attrs: { name: 'getRowId', computed: getRowIdComputed }
      }), h(DxGetter, {
        attrs: { name: 'rows', computed: expandedGroupedRowsComputed$1 }
      })]
    );
  }
};

var DxGroupingPanel = {
  props: {
    showSortingControls: {
      type: Boolean
    },
    showGroupingControls: {
      type: Boolean
    },
    messages: {
      type: Object
    },
    layoutComponent: {
      type: Object,
      required: true
    },
    containerComponent: {
      type: Object,
      required: true
    },
    itemComponent: {
      type: Object,
      required: true
    },
    emptyMessageComponent: {
      type: Object,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var Layout = this.layoutComponent,
        Container = this.containerComponent,
        Item = this.itemComponent,
        EmptyMessage = this.emptyMessageComponent,
        showSortingControls = this.showSortingControls,
        showGroupingControls = this.showGroupingControls,
        messages = this.messages;


    var getMessage = getMessagesFormatter(messages);

    var EmptyMessagePlaceholder = {
      render: function render() {
        var h = arguments[0];

        return h(EmptyMessage, {
          attrs: {
            getMessage: getMessage
          }
        });
      }
    };

    var ItemPlaceholder = {
      props: {
        item: {
          type: Object,
          required: true
        }
      },
      render: function render() {
        var _this = this;

        var h = arguments[0];
        var columnName = this.item.column.name;


        return h(DxTemplateConnector, [function (_ref) {
          var _ref$getters = _ref.getters,
              sorting = _ref$getters.sorting,
              isColumnSortingEnabled = _ref$getters.isColumnSortingEnabled,
              isColumnGroupingEnabled = _ref$getters.isColumnGroupingEnabled,
              _ref$actions = _ref.actions,
              changeColumnGrouping$$1 = _ref$actions.changeColumnGrouping,
              changeColumnSorting$$1 = _ref$actions.changeColumnSorting;

          var sortingEnabled = isColumnSortingEnabled && isColumnSortingEnabled(columnName);
          var groupingEnabled = isColumnGroupingEnabled && isColumnGroupingEnabled(columnName);

          return h(Item, {
            attrs: {
              item: _this.item,
              sortingEnabled: sortingEnabled,
              groupingEnabled: groupingEnabled,
              showSortingControls: showSortingControls,
              sortingDirection: showSortingControls ? getColumnSortingDirection(sorting, columnName) : undefined,
              showGroupingControls: showGroupingControls
            },
            on: {
              'group': function group() {
                return changeColumnGrouping$$1({ columnName: columnName });
              },
              'sort': function sort(_ref2) {
                var direction = _ref2.direction,
                    keepOther = _ref2.keepOther;
                return changeColumnSorting$$1({ columnName: columnName, direction: direction, keepOther: keepOther });
              }
            }
          });
        }]);
      }
    };

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxGroupingPanel',
          dependencies: [{ name: 'DxGroupingState' }, { name: 'DxToolbar' }, { name: 'DxSortingState', optional: !showSortingControls }]
        }
      },
      [h(
        DxTemplate,
        {
          attrs: { name: 'toolbarContent' }
        },
        [h(
          'div',
          { style: { display: 'flex', flex: 1 } },
          [h(DxTemplateConnector, [function (_ref3) {
            var _ref3$getters = _ref3.getters,
                columns = _ref3$getters.columns,
                grouping = _ref3$getters.grouping,
                isColumnGroupingEnabled = _ref3$getters.isColumnGroupingEnabled,
                changeColumnGrouping$$1 = _ref3.actions.changeColumnGrouping;
            return h(Layout, {
              attrs: {
                items: groupingPanelItems(columns, grouping, []),
                isColumnGroupingEnabled: isColumnGroupingEnabled,

                itemComponent: ItemPlaceholder,
                emptyMessageComponent: EmptyMessagePlaceholder,
                containerComponent: Container
              },
              on: {
                'group': changeColumnGrouping$$1
              }
            });
          }]), h(DxTemplatePlaceholder)]
        )]
      )]
    );
  }
};

var pluginDependencies$7 = [{ name: 'DxGroupingState' }, { name: 'DxTable' }, { name: 'DxDataTypeProvider', optional: true }];

var tableBodyRowsComputed$1 = function tableBodyRowsComputed(_ref) {
  var tableBodyRows = _ref.tableBodyRows,
      isGroupRow = _ref.isGroupRow;
  return tableRowsWithGrouping(tableBodyRows, isGroupRow);
};
var getCellColSpanComputed = function getCellColSpanComputed(_ref2) {
  var getTableCellColSpan = _ref2.getTableCellColSpan;
  return tableGroupCellColSpanGetter(getTableCellColSpan);
};

var showColumnWhenGroupedGetter = function showColumnWhenGroupedGetter(showColumnsWhenGrouped) {
  var columnExtensions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var map = columnExtensions.reduce(function (acc, columnExtension) {
    acc[columnExtension.columnName] = columnExtension.showWhenGrouped;
    return acc;
  }, {});

  return function (columnName) {
    return map[columnName] || showColumnsWhenGrouped;
  };
};

var DxTableGroupRow = {
  name: 'DxTableGroupRow',
  props: {
    cellComponent: {
      type: Object,
      required: true
    },
    rowComponent: {
      type: Object,
      required: true
    },
    indentCellComponent: {
      type: Object
    },
    indentColumnWidth: {
      type: Number,
      required: true
    },
    showColumnsWhenGrouped: {
      type: Boolean
    },
    columnExtensions: {
      type: Array
    }
  },
  render: function render() {
    var h = arguments[0];
    var GroupCell = this.cellComponent,
        GroupRow = this.rowComponent,
        GroupIndentCell = this.indentCellComponent,
        indentColumnWidth = this.indentColumnWidth,
        showColumnsWhenGrouped = this.showColumnsWhenGrouped,
        columnExtensions = this.columnExtensions;


    var tableColumnsComputed = function tableColumnsComputed(_ref3) {
      var columns = _ref3.columns,
          tableColumns = _ref3.tableColumns,
          grouping = _ref3.grouping;
      return tableColumnsWithGrouping(columns, tableColumns, grouping, grouping, indentColumnWidth, showColumnWhenGroupedGetter(showColumnsWhenGrouped, columnExtensions));
    };
    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxTableGroupRow',
          dependencies: pluginDependencies$7
        }
      },
      [h(DxGetter, {
        attrs: { name: 'tableColumns', computed: tableColumnsComputed }
      }), h(DxGetter, {
        attrs: { name: 'tableBodyRows', computed: tableBodyRowsComputed$1 }
      }), h(DxGetter, {
        attrs: { name: 'getTableCellColSpan', computed: getCellColSpanComputed }
      }), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableCell',
            predicate: function predicate(_ref4) {
              var tableRow = _ref4.attrs.tableRow;
              return isGroupTableRow(tableRow);
            }
          }
        },
        [function (_ref5) {
          var attrs = _ref5.attrs,
              listeners = _ref5.listeners;
          return h(DxTemplateConnector, [function (_ref6) {
            var _ref6$getters = _ref6.getters,
                grouping = _ref6$getters.grouping,
                expandedGroups = _ref6$getters.expandedGroups,
                toggleGroupExpanded = _ref6.actions.toggleGroupExpanded;

            if (isGroupTableCell(attrs.tableRow, attrs.tableColumn)) {
              return h(
                DxTemplatePlaceholder,
                {
                  attrs: {
                    name: 'valueFormatter',
                    column: attrs.tableColumn.column,
                    value: attrs.tableRow.row.value
                  }
                },
                [function (content) {
                  return h(
                    GroupCell,
                    babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
                      attrs: {
                        row: attrs.tableRow.row,
                        column: attrs.tableColumn.column,
                        expanded: expandedGroups.indexOf(attrs.tableRow.row.compoundKey) !== -1
                      },
                      on: {
                        'toggle': function toggle() {
                          return toggleGroupExpanded({ groupKey: attrs.tableRow.row.compoundKey });
                        }
                      }
                    }]),
                    [content]
                  );
                }]
              );
            }
            if (isGroupIndentTableCell(attrs.tableRow, attrs.tableColumn, grouping)) {
              if (GroupIndentCell) {
                return h(GroupIndentCell, babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
                  attrs: {
                    row: attrs.tableRow.row,
                    column: attrs.tableColumn.column
                  }
                }]));
              }
              return h(DxTemplatePlaceholder);
            }
            return null;
          }]);
        }]
      ), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableRow',
            predicate: function predicate(_ref7) {
              var tableRow = _ref7.attrs.tableRow;
              return isGroupTableRow(tableRow);
            }
          }
        },
        [function (_ref8) {
          var attrs = _ref8.attrs,
              listeners = _ref8.listeners,
              slots = _ref8.slots;
          return h(
            GroupRow,
            babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
              attrs: {
                row: attrs.tableRow.row
              }
            }]),
            [slots.default]
          );
        }]
      )]
    );
  }
};

var ItemLayout = {
  props: {
    item: {
      type: Object,
      required: true
    },
    itemComponent: {
      type: Object,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var item = this.item,
        Item = this.itemComponent;

    return h(Item, {
      attrs: { item: _extends({}, item) }
    });
  }
};

var GroupPanelLayout = {
  props: {
    items: {
      type: Array,
      required: true
    },
    itemComponent: {
      type: Object,
      required: true
    },
    containerComponent: {
      type: Object,
      required: true
    },
    emptyMessageComponent: {
      type: Object,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var items = this.items,
        EmptyMessage = this.emptyMessageComponent,
        Container = this.containerComponent,
        Item = this.itemComponent;


    var groupPanel = items.length ? h(Container, [items.map(function (item) {
      var columnName = item.column.name;

      return h(ItemLayout, {
        key: columnName,
        attrs: { item: item,
          itemComponent: Item
        }
      });
    })]) : h(EmptyMessage);

    return groupPanel;
  }
};

var DxSearchState = {
  name: 'DxSearchState',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    changeValue: function changeValue(payload) {
      this.$emit('update:value', changeSearchValue(this.value, payload));
    }
  },
  render: function render() {
    var h = arguments[0];
    var value = this.value,
        changeValue = this.changeValue;

    var filterExpressionComputed = function filterExpressionComputed(_ref) {
      var filterExpression$$1 = _ref.filterExpression,
          columns = _ref.columns;
      return searchFilterExpression(value, columns, filterExpression$$1);
    };

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxSearchState'
        }
      },
      [h(DxGetter, {
        attrs: { name: 'filterExpression', computed: filterExpressionComputed }
      }), h(DxGetter, {
        attrs: { name: 'searchValue', value: value }
      }), h(DxAction, {
        attrs: { name: 'changeSearchValue', action: changeValue }
      })]
    );
  }
};

var pluginDependencies$8 = [{ name: 'DxToolbar' }, { name: 'DxSearchState' }];

var DxSearchPanel = {
  name: 'DxSearchPanel',
  props: {
    inputComponent: {
      type: Object,
      required: true
    },
    messages: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var Input = this.inputComponent,
        messages = this.messages;

    var getMessage = getMessagesFormatter(messages);

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxSearchPanel',
          dependencies: pluginDependencies$8
        }
      },
      [h(
        DxTemplate,
        {
          attrs: { name: 'toolbarContent' }
        },
        [h(
          'div',
          { style: { display: 'flex', flex: 1 } },
          [h(DxTemplatePlaceholder), h(DxTemplateConnector, [function (_ref) {
            var searchValue = _ref.getters.searchValue,
                changeSearchValue$$1 = _ref.actions.changeSearchValue;
            return h(Input, {
              attrs: {
                value: searchValue,

                getMessage: getMessage
              },
              on: {
                'valueChange': changeSearchValue$$1
              }
            });
          }])]
        )]
      )]
    );
  }
};

var DxSelectionState = {
  name: 'DxSelectionState',
  props: {
    selection: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleSelection: function toggleSelection$$1(payload) {
      this.$emit('update:selection', toggleSelection(this.selection, payload));
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxSelectionState'
        }
      },
      [h(DxGetter, {
        attrs: { name: 'selection', value: this.selection }
      }), h(DxAction, {
        attrs: { name: 'toggleSelection', action: this.toggleSelection }
      })]
    );
  }
};

var rowsWithAvailableToSelectComputed = function rowsWithAvailableToSelectComputed(_ref) {
  var rows = _ref.rows,
      getRowId = _ref.getRowId,
      isGroupRow = _ref.isGroupRow;
  return rowsWithAvailableToSelect(rows, getRowId, isGroupRow);
};
var allSelectedComputed = function allSelectedComputed(_ref2) {
  var rows = _ref2.rows,
      selection = _ref2.selection;
  return allSelected(rows, selection);
};
var someSelectedComputed = function someSelectedComputed(_ref3) {
  var rows = _ref3.rows,
      selection = _ref3.selection;
  return someSelected(rows, selection);
};
var selectAllAvailableComputed = function selectAllAvailableComputed(_ref4) {
  var availableToSelect = _ref4.rows.availableToSelect;
  return !!availableToSelect.length;
};
var toggleSelectAll = function toggleSelectAll(state, _ref5, _ref6) {
  var availableToSelect = _ref5.rows.availableToSelect;
  var toggleSelection$$1 = _ref6.toggleSelection;

  toggleSelection$$1({ rowIds: availableToSelect, state: state });
};
var unwrapRowsComputed = function unwrapRowsComputed(_ref7) {
  var rows = _ref7.rows;
  return unwrapSelectedRows(rows);
};

var pluginDependencies$9 = [{ name: 'DxSelectionState' }];

var DxIntegratedSelection = {
  name: 'DxIntegratedSelection',
  render: function render() {
    var h = arguments[0];

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxIntegratedSelection',
          dependencies: pluginDependencies$9
        }
      },
      [h(DxGetter, {
        attrs: { name: 'rows', computed: rowsWithAvailableToSelectComputed }
      }), h(DxGetter, {
        attrs: { name: 'allSelected', computed: allSelectedComputed }
      }), h(DxGetter, {
        attrs: { name: 'someSelected', computed: someSelectedComputed }
      }), h(DxGetter, {
        attrs: { name: 'selectAllAvailable', computed: selectAllAvailableComputed }
      }), h(DxAction, {
        attrs: { name: 'toggleSelectAll', action: toggleSelectAll }
      }), h(DxGetter, {
        attrs: { name: 'rows', computed: unwrapRowsComputed }
      })]
    );
  }
};

var DxTableSelection = {
  name: 'DxTableSelection',
  props: {
    highlightRow: {
      type: Boolean
    },
    selectByRowClick: {
      type: Boolean
    },
    showSelectionColumn: {
      type: Boolean,
      default: true
    },
    showSelectAll: {
      type: Boolean
    },
    selectionColumnWidth: {
      type: Number,
      required: true
    },
    rowComponent: {
      type: Object,
      required: true
    },
    cellComponent: {
      type: Object,
      required: true
    },
    headerCellComponent: {
      type: Object,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var highlightRow = this.highlightRow,
        selectByRowClick = this.selectByRowClick,
        showSelectionColumn = this.showSelectionColumn,
        showSelectAll = this.showSelectAll,
        HeaderCell = this.headerCellComponent,
        Cell = this.cellComponent,
        Row = this.rowComponent,
        selectionColumnWidth = this.selectionColumnWidth;


    var tableColumnsComputed = function tableColumnsComputed(_ref) {
      var tableColumns = _ref.tableColumns;
      return tableColumnsWithSelection(tableColumns, selectionColumnWidth);
    };

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxTableSelection',
          dependencies: [{ name: 'DxTable' }, { name: 'DxSelectionState' }, { name: 'DxIntegratedSelection', optional: !showSelectAll }]
        }
      },
      [showSelectionColumn && h(DxGetter, {
        attrs: { name: 'tableColumns', computed: tableColumnsComputed }
      }), showSelectionColumn && showSelectAll && h(
        DxTemplate,
        {
          attrs: {
            name: 'tableCell',
            predicate: function predicate(_ref2) {
              var _ref2$attrs = _ref2.attrs,
                  tableRow = _ref2$attrs.tableRow,
                  tableColumn = _ref2$attrs.tableColumn;
              return isSelectAllTableCell(tableRow, tableColumn);
            }
          }
        },
        [function (_ref3) {
          var attrs = _ref3.attrs,
              listeners = _ref3.listeners;
          return h(DxTemplateConnector, [function (_ref4) {
            var _ref4$getters = _ref4.getters,
                selectAllAvailable = _ref4$getters.selectAllAvailable,
                allSelected$$1 = _ref4$getters.allSelected,
                someSelected$$1 = _ref4$getters.someSelected,
                toggleSelectAll = _ref4.actions.toggleSelectAll;
            return h(HeaderCell, babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
              attrs: {
                disabled: !selectAllAvailable,
                allSelected: allSelected$$1,
                someSelected: someSelected$$1
              },
              on: {
                'toggle': function toggle(select) {
                  return toggleSelectAll(select);
                }
              }
            }]));
          }]);
        }]
      ), showSelectionColumn && h(
        DxTemplate,
        {
          attrs: {
            name: 'tableCell',
            predicate: function predicate(_ref5) {
              var _ref5$attrs = _ref5.attrs,
                  tableRow = _ref5$attrs.tableRow,
                  tableColumn = _ref5$attrs.tableColumn;
              return isSelectTableCell(tableRow, tableColumn);
            }
          }
        },
        [function (_ref6) {
          var attrs = _ref6.attrs,
              listeners = _ref6.listeners;
          return h(DxTemplateConnector, [function (_ref7) {
            var selection = _ref7.getters.selection,
                toggleSelection$$1 = _ref7.actions.toggleSelection;
            return h(Cell, babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
              attrs: {
                row: attrs.tableRow.row,
                selected: selection.indexOf(attrs.tableRow.rowId) !== -1
              },
              on: {
                'toggle': function toggle() {
                  return toggleSelection$$1({ rowIds: [attrs.tableRow.rowId] });
                }
              }
            }]));
          }]);
        }]
      ), (highlightRow || selectByRowClick) && h(
        DxTemplate,
        {
          attrs: {
            name: 'tableRow',
            predicate: function predicate(_ref8) {
              var tableRow = _ref8.attrs.tableRow;
              return isDataTableRow(tableRow);
            }
          }
        },
        [function (_ref9) {
          var attrs = _ref9.attrs,
              listeners = _ref9.listeners,
              slots = _ref9.slots;
          return h(DxTemplateConnector, [function (_ref10) {
            var selection = _ref10.getters.selection,
                toggleSelection$$1 = _ref10.actions.toggleSelection;
            return h(
              Row,
              babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
                attrs: {
                  selectByRowClick: selectByRowClick,
                  selected: highlightRow && selection.indexOf(attrs.tableRow.rowId) !== -1
                },
                on: {
                  'toggle': function toggle() {
                    return toggleSelection$$1({ rowIds: [attrs.tableRow.rowId] });
                  }
                }
              }]),
              [slots.default]
            );
          }]);
        }]
      )]
    );
  }
};

var DxPagingState = {
  name: 'DxPagingState',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  methods: {
    setCurrentPage: function setCurrentPage$$1(payload) {
      this.$emit('update:currentPage', setCurrentPage(this.currentPage, payload));
    },
    setPageSize: function setPageSize$$1(payload) {
      this.$emit('update:pageSize', setPageSize(this.pageSize, payload));
    }
  },
  render: function render() {
    var h = arguments[0];
    var pageSize = this.pageSize,
        currentPage$$1 = this.currentPage;


    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxPagingState'
        }
      },
      [h(DxGetter, {
        attrs: { name: 'pageSize', value: pageSize }
      }), h(DxGetter, {
        attrs: { name: 'currentPage', value: currentPage$$1 }
      }), h(DxAction, {
        attrs: { name: 'setCurrentPage', action: this.setCurrentPage }
      }), h(DxAction, {
        attrs: { name: 'setPageSize', action: this.setPageSize }
      })]
    );
  }
};

var pluginDependencies$10 = [{ name: 'DxPagingState' }];

var rowsWithHeadersComputed = function rowsWithHeadersComputed(_ref) {
  var rows = _ref.rows,
      pageSize = _ref.pageSize,
      getRowLevelKey = _ref.getRowLevelKey;
  return rowsWithPageHeaders(rows, pageSize, getRowLevelKey);
};
var totalCountComputed = function totalCountComputed(_ref2) {
  var rows = _ref2.rows;
  return rowCount(rows);
};
var paginatedRowsComputed = function paginatedRowsComputed(_ref3) {
  var rows = _ref3.rows,
      pageSize = _ref3.pageSize,
      page = _ref3.currentPage;
  return paginatedRows(rows, pageSize, page);
};
var currentPageComputed = function currentPageComputed(_ref4, _ref5) {
  var page = _ref4.currentPage,
      totalCount = _ref4.totalCount,
      pageSize = _ref4.pageSize;
  var setCurrentPage$$1 = _ref5.setCurrentPage;
  return currentPage(page, totalCount, pageSize, setCurrentPage$$1);
};

var DxIntegratedPaging = {
  name: 'DxIntegratedPaging',
  render: function render() {
    var h = arguments[0];

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxIntegratedPaging',
          dependencies: pluginDependencies$10
        }
      },
      [h(DxGetter, {
        attrs: { name: 'rows', computed: rowsWithHeadersComputed }
      }), h(DxGetter, {
        attrs: { name: 'totalCount', computed: totalCountComputed }
      }), h(DxGetter, {
        attrs: { name: 'currentPage', computed: currentPageComputed }
      }), h(DxGetter, {
        attrs: { name: 'rows', computed: paginatedRowsComputed }
      })]
    );
  }
};

var pluginDependencies$11 = [{ name: 'DxPagingState' }];

var DxCustomPaging = {
  name: 'DxCustomPaging',
  props: {
    totalCount: {
      type: Number,
      default: 0
    }
  },

  render: function render() {
    var h = arguments[0];
    var totalCount = this.totalCount;


    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxCustomPaging',
          dependencies: pluginDependencies$11
        }
      },
      [h(DxGetter, {
        attrs: { name: 'totalCount', value: totalCount }
      })]
    );
  }
};

var pluginDependencies$12 = [{ name: 'DxPagingState' }];

var DxPagingPanel = {
  name: 'DxPagingPanel',
  props: {
    pageSizes: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    messages: {
      type: Object
    },
    containerComponent: {
      type: Object,
      required: true
    }
  },

  render: function render() {
    var h = arguments[0];
    var Pager = this.containerComponent,
        pageSizes = this.pageSizes,
        messages = this.messages;

    var getMessage = getMessagesFormatter(messages);

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxPagingPanel',
          dependencies: pluginDependencies$12
        }
      },
      [h(
        DxTemplate,
        {
          attrs: { name: 'footer' }
        },
        [h('div', [' ', h(DxTemplatePlaceholder), h(DxTemplateConnector, [function (_ref) {
          var _ref$getters = _ref.getters,
              currentPage$$1 = _ref$getters.currentPage,
              pageSize = _ref$getters.pageSize,
              totalCount = _ref$getters.totalCount,
              _ref$actions = _ref.actions,
              setCurrentPage$$1 = _ref$actions.setCurrentPage,
              setPageSize$$1 = _ref$actions.setPageSize;
          return h(Pager, {
            attrs: {
              currentPage: currentPage$$1,
              pageSize: pageSize,
              totalCount: totalCount,
              totalPages: pageCount(totalCount, pageSize),
              pageSizes: pageSizes,
              getMessage: getMessage
            },
            on: {
              'currentPageChange': setCurrentPage$$1,
              'pageSizeChange': setPageSize$$1
            }
          });
        }])])]
      )]
    );
  }
};

var DxDataTypeProvider = {
  name: 'DxDataTypeProvider',
  props: {
    for: {
      type: Array,
      required: true
    },
    formatterComponent: {
      type: Object
    },
    editorComponent: {
      type: Object
    },
    availableFilterOperations: {
      type: Array
    }
  },
  render: function render() {
    var h = arguments[0];
    var columnNames = this.for,
        Formatter = this.formatterComponent,
        Editor = this.editorComponent,
        availableFilterOperations = this.availableFilterOperations;


    var getAvailableFilterOperationsComputed = function getAvailableFilterOperationsComputed(_ref) {
      var getAvailableFilterOperations = _ref.getAvailableFilterOperations;
      return getAvailableFilterOperationsGetter(getAvailableFilterOperations, availableFilterOperations, columnNames);
    };

    return h(
      DxPlugin,
      {
        attrs: { name: 'DxDataTypeProvider' }
      },
      [h(DxGetter, {
        attrs: { name: 'getAvailableFilterOperations', computed: getAvailableFilterOperationsComputed }
      }), Formatter ? h(
        DxTemplate,
        {
          attrs: {
            name: 'valueFormatter',
            predicate: function predicate(_ref2) {
              var column = _ref2.attrs.column;
              return columnNames.includes(column.name);
            }
          }
        },
        [function (_ref3) {
          var attrs = _ref3.attrs;
          return h(Formatter, { attrs: attrs });
        }]
      ) : null, Editor ? h(
        DxTemplate,
        {
          attrs: {
            name: 'valueEditor',
            predicate: function predicate(_ref4) {
              var column = _ref4.attrs.column;
              return columnNames.includes(column.name);
            }
          }
        },
        [function (_ref5) {
          var attrs = _ref5.attrs,
              listeners = _ref5.listeners;
          return h(Editor, { attrs: _extends({}, attrs), on: _extends({}, listeners) });
        }]
      ) : null]
    );
  }
};

var DxRowDetailState = {
  name: 'DxRowDetailState',
  props: {
    expandedRowIds: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleDetailRowExpanded: function toggleDetailRowExpanded$$1(payload) {
      this.$emit('update:expandedRowIds', toggleDetailRowExpanded(this.expandedRowIds, payload));
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxRowDetailState'
        }
      },
      [h(DxGetter, {
        attrs: { name: 'expandedDetailRowIds', value: this.expandedRowIds }
      }), h(DxAction, {
        attrs: { name: 'toggleDetailRowExpanded', action: this.toggleDetailRowExpanded }
      })]
    );
  }
};

var getCellColSpanComputed$1 = function getCellColSpanComputed(_ref) {
  var getTableCellColSpan = _ref.getTableCellColSpan;
  return tableDetailCellColSpanGetter(getTableCellColSpan);
};

var pluginDependencies$13 = [{ name: 'DxRowDetailState' }, { name: 'DxTable' }];

var DxTableRowDetail = {
  name: 'DxTableRowDetail',
  props: {
    contentComponent: {
      type: Object
    },
    toggleCellComponent: {
      type: Object,
      required: true
    },
    cellComponent: {
      type: Object,
      required: true
    },
    rowComponent: {
      type: Object,
      required: true
    },
    toggleColumnWidth: {
      type: Number,
      required: true
    },
    rowHeight: {
      type: Number
    }
  },
  render: function render() {
    var h = arguments[0];
    var rowHeight = this.rowHeight,
        Content = this.contentComponent,
        ToggleCell = this.toggleCellComponent,
        Cell = this.cellComponent,
        Row = this.rowComponent,
        toggleColumnWidth = this.toggleColumnWidth;


    var tableColumnsComputed = function tableColumnsComputed(_ref2) {
      var tableColumns = _ref2.tableColumns;
      return tableColumnsWithDetail(tableColumns, toggleColumnWidth);
    };
    var tableBodyRowsComputed = function tableBodyRowsComputed(_ref3) {
      var tableBodyRows = _ref3.tableBodyRows,
          expandedDetailRowIds = _ref3.expandedDetailRowIds;
      return tableRowsWithExpandedDetail(tableBodyRows, expandedDetailRowIds, rowHeight);
    };

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxTableRowDetail',
          dependencies: pluginDependencies$13
        }
      },
      [h(DxGetter, {
        attrs: { name: 'tableColumns', computed: tableColumnsComputed }
      }), h(DxGetter, {
        attrs: { name: 'tableBodyRows', computed: tableBodyRowsComputed }
      }), h(DxGetter, {
        attrs: { name: 'getTableCellColSpan', computed: getCellColSpanComputed$1 }
      }), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableCell',
            predicate: function predicate(_ref4) {
              var _ref4$attrs = _ref4.attrs,
                  tableRow = _ref4$attrs.tableRow,
                  tableColumn = _ref4$attrs.tableColumn;
              return isDetailToggleTableCell(tableRow, tableColumn);
            }
          }
        },
        [function (_ref5) {
          var attrs = _ref5.attrs,
              listeners = _ref5.listeners;
          return h(DxTemplateConnector, [function (_ref6) {
            var expandedDetailRowIds = _ref6.getters.expandedDetailRowIds,
                toggleDetailRowExpanded$$1 = _ref6.actions.toggleDetailRowExpanded;
            return h(ToggleCell, babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
              attrs: {
                row: attrs.tableRow.row,
                expanded: isDetailRowExpanded(expandedDetailRowIds, attrs.tableRow.rowId)
              },
              on: {
                'toggle': function toggle() {
                  return toggleDetailRowExpanded$$1({ rowId: attrs.tableRow.rowId });
                }
              }
            }]));
          }]);
        }]
      ), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableCell',
            predicate: function predicate(_ref7) {
              var tableRow = _ref7.attrs.tableRow;
              return isDetailTableRow(tableRow);
            }
          }
        },
        [function (_ref8) {
          var attrs = _ref8.attrs,
              listeners = _ref8.listeners;
          return h(DxTemplateConnector, [function (_ref9) {
            var tableColumns = _ref9.getters.tableColumns;

            if (isDetailTableCell(attrs.tableColumn, tableColumns)) {
              return h(
                Cell,
                babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
                  attrs: {
                    row: attrs.tableRow.row
                  }
                }]),
                [h(Content, {
                  attrs: { row: attrs.tableRow.row }
                })]
              );
            }
            return null;
          }]);
        }]
      ), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableRow',
            predicate: function predicate(_ref10) {
              var tableRow = _ref10.attrs.tableRow;
              return isDetailTableRow(tableRow);
            }
          }
        },
        [function (_ref11) {
          var attrs = _ref11.attrs,
              listeners = _ref11.listeners,
              slots = _ref11.slots;
          return h(
            Row,
            babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
              attrs: {
                row: attrs.tableRow.row
              }
            }]),
            [slots.default]
          );
        }]
      )]
    );
  }
};

var columnExtensionValueGetter$2 = function columnExtensionValueGetter(columnExtensions, defaultValue) {
  return getColumnExtensionValueGetter(columnExtensions, 'editingEnabled', defaultValue);
};

var DxEditingState = {
  name: 'DxEditingState',
  props: {
    createRowChange: {
      type: Function
    },
    columnEditingEnabled: {
      type: Boolean,
      default: true
    },
    columnExtensions: {
      type: Array
    },
    editingRowIds: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    addedRows: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    rowChanges: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    deletedRowIds: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    startEditRows: function startEditRows$$1(payload) {
      this.$emit('update:editingRowIds', startEditRows(this.editingRowIds, payload));
    },
    stopEditRows: function stopEditRows$$1(payload) {
      this.$emit('update:editingRowIds', stopEditRows(this.editingRowIds, payload));
    },
    changeRow: function changeRow$$1(payload) {
      this.$emit('update:rowChanges', changeRow(this.rowChanges, payload));
    },
    cancelChangedRows: function cancelChangedRows(payload) {
      this.$emit('update:rowChanges', cancelChanges(this.rowChanges, payload));
    },
    commitChangedRows: function commitChangedRows(_ref) {
      var rowIds = _ref.rowIds;

      this.$emit('commitChanges', { changed: changedRowsByIds(this.rowChanges, rowIds) });
      this.cancelChangedRows({ rowIds: rowIds });
    },
    addRow: function addRow$$1(payload) {
      this.$emit('update:addedRows', addRow(this.addedRows, payload));
    },
    changeAddedRow: function changeAddedRow$$1(payload) {
      this.$emit('update:addedRows', changeAddedRow(this.addedRows, payload));
    },
    cancelAddedRows: function cancelAddedRows$$1(payload) {
      this.$emit('update:addedRows', cancelAddedRows(this.addedRows, payload));
    },
    commitAddedRows: function commitAddedRows(_ref2) {
      var rowIds = _ref2.rowIds;

      this.$emit('commitChanges', { added: addedRowsByIds(this.addedRows, rowIds) });
      this.cancelAddedRows({ rowIds: rowIds });
    },
    deleteRows: function deleteRows$$1(payload) {
      this.$emit('update:deletedRowIds', deleteRows(this.deletedRowIds, payload));
    },
    cancelDeletedRows: function cancelDeletedRows$$1(payload) {
      this.$emit('update:deletedRowIds', cancelDeletedRows(this.deletedRowIds, payload));
    },
    commitDeletedRows: function commitDeletedRows(_ref3) {
      var rowIds = _ref3.rowIds;

      this.$emit('commitChanges', { deleted: rowIds });
      this.cancelDeletedRows({ rowIds: rowIds });
    }
  },
  render: function render() {
    var h = arguments[0];
    var createRowChange = this.createRowChange,
        columnExtensions = this.columnExtensions,
        columnEditingEnabled = this.columnEditingEnabled,
        editingRowIds = this.editingRowIds,
        rowChanges = this.rowChanges,
        addedRows = this.addedRows,
        deletedRowIds = this.deletedRowIds;


    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxEditingState'
        }
      },
      [h(DxGetter, {
        attrs: {
          name: 'createRowChange',
          value: createRowChangeGetter(createRowChange, columnExtensions)
        }
      }), h(DxGetter, {
        attrs: { name: 'editingRowIds', value: editingRowIds }
      }), h(DxAction, {
        attrs: { name: 'startEditRows', action: this.startEditRows }
      }), h(DxAction, {
        attrs: { name: 'stopEditRows', action: this.stopEditRows }
      }), h(DxGetter, {
        attrs: { name: 'rowChanges', value: rowChanges }
      }), h(DxAction, {
        attrs: { name: 'changeRow', action: this.changeRow }
      }), h(DxAction, {
        attrs: { name: 'cancelChangedRows', action: this.cancelChangedRows }
      }), h(DxAction, {
        attrs: { name: 'commitChangedRows', action: this.commitChangedRows }
      }), h(DxGetter, {
        attrs: { name: 'addedRows', value: addedRows }
      }), h(DxAction, {
        attrs: { name: 'addRow', action: this.addRow }
      }), h(DxAction, {
        attrs: { name: 'changeAddedRow', action: this.changeAddedRow }
      }), h(DxAction, {
        attrs: { name: 'cancelAddedRows', action: this.cancelAddedRows }
      }), h(DxAction, {
        attrs: { name: 'commitAddedRows', action: this.commitAddedRows }
      }), h(DxGetter, {
        attrs: { name: 'deletedRowIds', value: deletedRowIds }
      }), h(DxAction, {
        attrs: { name: 'deleteRows', action: this.deleteRows }
      }), h(DxAction, {
        attrs: { name: 'cancelDeletedRows', action: this.cancelDeletedRows }
      }), h(DxAction, {
        attrs: { name: 'commitDeletedRows', action: this.commitDeletedRows }
      }), h(DxGetter, {
        attrs: {
          name: 'isColumnEditingEnabled',
          value: columnExtensionValueGetter$2(columnExtensions, columnEditingEnabled)
        }
      })]
    );
  }
};

var pluginDependencies$14 = [{ name: 'DxEditingState' }, { name: 'DxTable' }];

var DxTableEditColumn = {
  name: 'DxTableEditColumn',
  props: {
    cellComponent: {
      type: Object,
      required: true
    },
    headerCellComponent: {
      type: Object,
      required: true
    },
    commandComponent: {
      type: Object,
      required: true
    },
    showAddCommand: {
      type: Boolean
    },
    showEditCommand: {
      type: Boolean
    },
    showDeleteCommand: {
      type: Boolean
    },
    width: {
      type: Number,
      default: 140
    },
    messages: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var Cell = this.cellComponent,
        HeaderCell = this.headerCellComponent,
        Command = this.commandComponent,
        showAddCommand = this.showAddCommand,
        showEditCommand = this.showEditCommand,
        showDeleteCommand = this.showDeleteCommand,
        width = this.width,
        messages = this.messages;

    var getMessage = getMessagesFormatter(messages);
    var tableColumnsComputed = function tableColumnsComputed(_ref) {
      var tableColumns = _ref.tableColumns;
      return tableColumnsWithEditing(tableColumns, width);
    };

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxTableEditColumn',
          dependencies: pluginDependencies$14
        }
      },
      [h(DxGetter, {
        attrs: { name: 'tableColumns', computed: tableColumnsComputed }
      }), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableCell',
            predicate: function predicate(_ref2) {
              var _ref2$attrs = _ref2.attrs,
                  tableRow = _ref2$attrs.tableRow,
                  tableColumn = _ref2$attrs.tableColumn;
              return isHeadingEditCommandsTableCell(tableRow, tableColumn);
            }
          }
        },
        [function (_ref3) {
          var attrs = _ref3.attrs,
              listeners = _ref3.listeners;
          return h(DxTemplateConnector, [function (_ref4) {
            var addRow$$1 = _ref4.actions.addRow;
            return h(
              HeaderCell,
              { attrs: _extends({}, attrs), on: _extends({}, listeners) },
              [showAddCommand && h(Command, {
                attrs: {
                  id: 'add',
                  text: getMessage('addCommand')
                },
                on: {
                  'execute': function execute() {
                    return addRow$$1();
                  }
                }
              })]
            );
          }]);
        }]
      ), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableCell',
            predicate: function predicate(_ref5) {
              var _ref5$attrs = _ref5.attrs,
                  tableRow = _ref5$attrs.tableRow,
                  tableColumn = _ref5$attrs.tableColumn;
              return isEditCommandsTableCell(tableRow, tableColumn);
            }
          }
        },
        [function (_ref6) {
          var attrs = _ref6.attrs,
              listeners = _ref6.listeners;
          return h(DxTemplateConnector, [function (_ref7) {
            var _ref7$actions = _ref7.actions,
                startEditRows$$1 = _ref7$actions.startEditRows,
                commitDeletedRows = _ref7$actions.commitDeletedRows,
                commitAddedRows = _ref7$actions.commitAddedRows,
                commitChangedRows = _ref7$actions.commitChangedRows,
                deleteRows$$1 = _ref7$actions.deleteRows,
                stopEditRows$$1 = _ref7$actions.stopEditRows,
                cancelAddedRows$$1 = _ref7$actions.cancelAddedRows,
                cancelChangedRows = _ref7$actions.cancelChangedRows;

            var isEdit = isEditTableRow(attrs.tableRow);
            var isNew = isAddedTableRow(attrs.tableRow);
            var isEditing = isEdit || isNew;
            var rowIds = [attrs.tableRow.rowId];
            return h(
              Cell,
              babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
                attrs: {
                  row: attrs.tableRow.row
                }
              }]),
              [showEditCommand && !isEditing && h(Command, {
                attrs: {
                  id: 'edit',
                  text: getMessage('editCommand')
                },
                on: {
                  'execute': function execute() {
                    return startEditRows$$1({ rowIds: rowIds });
                  }
                }
              }), showDeleteCommand && !isEditing && h(Command, {
                attrs: {
                  id: 'delete',
                  text: getMessage('deleteCommand')
                },
                on: {
                  'execute': function execute() {
                    deleteRows$$1({ rowIds: rowIds });
                    commitDeletedRows({ rowIds: rowIds });
                  }
                }
              }), isEditing && h(Command, {
                attrs: {
                  id: 'commit',
                  text: getMessage('commitCommand')
                },
                on: {
                  'execute': function execute() {
                    if (isNew) {
                      commitAddedRows({ rowIds: rowIds });
                    } else {
                      stopEditRows$$1({ rowIds: rowIds });
                      commitChangedRows({ rowIds: rowIds });
                    }
                  }
                }
              }), isEditing && h(Command, {
                attrs: {
                  id: 'cancel',
                  text: getMessage('cancelCommand')
                },
                on: {
                  'execute': function execute() {
                    if (isNew) {
                      cancelAddedRows$$1({ rowIds: rowIds });
                    } else {
                      stopEditRows$$1({ rowIds: rowIds });
                      cancelChangedRows({ rowIds: rowIds });
                    }
                  }
                }
              })]
            );
          }]);
        }]
      )]
    );
  }
};

var pluginDependencies$15 = [{ name: 'DxEditingState' }, { name: 'DxTable' }, { name: 'DxDataTypeProvider', optional: true }];

var DxTableEditRow = {
  name: 'DxTableEditRow',
  props: {
    rowHeight: {
      type: Number
    },
    cellComponent: {
      type: Object,
      required: true
    },
    rowComponent: {
      type: Object,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var EditCell = this.cellComponent,
        EditRow = this.rowComponent,
        rowHeight = this.rowHeight;


    var tableBodyRowsComputed = function tableBodyRowsComputed(_ref) {
      var tableBodyRows = _ref.tableBodyRows,
          editingRowIds = _ref.editingRowIds,
          addedRows = _ref.addedRows;
      return tableRowsWithEditing(tableBodyRows, editingRowIds, addedRows, rowHeight);
    };

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxTableEditRow',
          dependencies: pluginDependencies$15
        }
      },
      [h(DxGetter, {
        attrs: { name: 'tableBodyRows', computed: tableBodyRowsComputed }
      }), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableCell',
            predicate: function predicate(_ref2) {
              var _ref2$attrs = _ref2.attrs,
                  tableRow = _ref2$attrs.tableRow,
                  tableColumn = _ref2$attrs.tableColumn;
              return isEditTableCell(tableRow, tableColumn);
            }
          }
        },
        [function (_ref3) {
          var attrs = _ref3.attrs,
              listeners = _ref3.listeners;
          return h(DxTemplateConnector, [function (_ref4) {
            var _ref4$getters = _ref4.getters,
                getCellValue = _ref4$getters.getCellValue,
                createRowChange = _ref4$getters.createRowChange,
                rowChanges = _ref4$getters.rowChanges,
                isColumnEditingEnabled = _ref4$getters.isColumnEditingEnabled,
                _ref4$actions = _ref4.actions,
                changeAddedRow$$1 = _ref4$actions.changeAddedRow,
                changeRow$$1 = _ref4$actions.changeRow;
            var _attrs$tableRow = attrs.tableRow,
                rowId = _attrs$tableRow.rowId,
                row = _attrs$tableRow.row;
            var column = attrs.tableColumn.column;
            var columnName = column.name;


            var isNew = isAddedTableRow(attrs.tableRow);
            var changedRow = isNew ? row : _extends({}, row, getRowChange(rowChanges, rowId));

            var value = getCellValue(changedRow, columnName);
            var onValueChange = function onValueChange(newValue) {
              var changeArgs = {
                rowId: rowId,
                change: createRowChange(changedRow, newValue, columnName)
              };
              if (isNew) {
                changeAddedRow$$1(changeArgs);
              } else {
                changeRow$$1(changeArgs);
              }
            };
            return h(
              DxTemplatePlaceholder,
              {
                attrs: {
                  name: 'valueEditor',
                  column: column,
                  row: row,
                  value: value
                },
                on: {
                  'valueChange': onValueChange
                }
              },
              [function (content) {
                return h(
                  EditCell,
                  babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
                    attrs: {
                      row: row,
                      column: column,
                      value: value,
                      editingEnabled: isColumnEditingEnabled(columnName)
                    },
                    on: {
                      'valueChange': onValueChange
                    }
                  }]),
                  [content]
                );
              }]
            );
          }]);
        }]
      ), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableRow',
            predicate: function predicate(_ref5) {
              var tableRow = _ref5.attrs.tableRow;
              return isEditTableRow(tableRow) || isAddedTableRow(tableRow);
            }
          }
        },
        [function (_ref6) {
          var attrs = _ref6.attrs,
              listeners = _ref6.listeners,
              slots = _ref6.slots;
          return h(
            EditRow,
            babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
              attrs: {
                row: attrs.tableRow.row
              }
            }]),
            [slots.default]
          );
        }]
      )]
    );
  }
};

var DxTreeDataState = {
  name: 'DxTreeDataState',
  props: {
    expandedRowIds: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleRowExpanded: function toggleRowExpanded$$1(payload) {
      this.$emit('update:expandedRowIds', toggleRowExpanded(this.expandedRowIds, payload));
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxTreeDataState'
        }
      },
      [h(DxGetter, {
        attrs: { name: 'expandedRowIds', value: this.expandedRowIds }
      }), h(DxAction, {
        attrs: { name: 'toggleRowExpanded', action: this.toggleRowExpanded }
      })]
    );
  }
};

var pluginDependencies$16 = [{ name: 'DxTreeDataState' }];

var expandedTreeRowsComputed = function expandedTreeRowsComputed(_ref) {
  var rows = _ref.rows,
      getRowId = _ref.getRowId,
      expandedRowIds = _ref.expandedRowIds;
  return expandedTreeRows(rows, getRowId, expandedRowIds);
};
var getRowIdComputed$1 = function getRowIdComputed(_ref2) {
  var getRowId = _ref2.getRowId,
      rows = _ref2.rows;
  return customTreeRowIdGetter(getRowId, rows);
};
var getRowLevelKeyComputed = function getRowLevelKeyComputed(_ref3) {
  var getRowLevelKey = _ref3.getRowLevelKey,
      rows = _ref3.rows;
  return customTreeRowLevelKeyGetter(getRowLevelKey, rows);
};
var isTreeRowLeafComputed = function isTreeRowLeafComputed(_ref4) {
  var rows = _ref4.rows;
  return isTreeRowLeafGetter(rows);
};
var getTreeRowLevelComputed = function getTreeRowLevelComputed(_ref5) {
  var rows = _ref5.rows;
  return getTreeRowLevelGetter(rows);
};
var collapsedTreeRowsGetterComputed = function collapsedTreeRowsGetterComputed(_ref6) {
  var rows = _ref6.rows,
      getCollapsedRows = _ref6.getCollapsedRows;
  return collapsedTreeRowsGetter(getCollapsedRows, rows);
};
var unwrappedTreeRowsComputed = function unwrappedTreeRowsComputed(_ref7) {
  var rows = _ref7.rows;
  return unwrappedCustomTreeRows(rows);
};

var DxCustomTreeData = {
  name: 'DxCustomTreeData',
  props: {
    getChildRows: {
      type: Function,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var getChildRows = this.getChildRows;

    var treeRowsComputed = function treeRowsComputed(_ref8) {
      var rows = _ref8.rows;
      return customTreeRowsWithMeta(rows, getChildRows);
    };

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'CustomTreeData',
          dependencies: pluginDependencies$16
        }
      },
      [h(DxGetter, {
        attrs: { name: 'rows', computed: treeRowsComputed }
      }), h(DxGetter, {
        attrs: { name: 'getRowId', computed: getRowIdComputed$1 }
      }), h(DxGetter, {
        attrs: { name: 'getRowLevelKey', computed: getRowLevelKeyComputed }
      }), h(DxGetter, {
        attrs: { name: 'isTreeRowLeaf', computed: isTreeRowLeafComputed }
      }), h(DxGetter, {
        attrs: { name: 'getTreeRowLevel', computed: getTreeRowLevelComputed }
      }), h(DxGetter, {
        attrs: { name: 'rows', computed: expandedTreeRowsComputed }
      }), h(DxGetter, {
        attrs: { name: 'getCollapsedRows', computed: collapsedTreeRowsGetterComputed }
      }), h(DxGetter, {
        attrs: { name: 'rows', computed: unwrappedTreeRowsComputed }
      })]
    );
  }
};

var DxTableTreeColumn = {
  name: 'DxTableTreeColumn',
  props: {
    for: {
      type: String,
      required: true
    },
    showSelectionControls: {
      type: Boolean,
      default: false
    },
    showSelectAll: {
      type: Boolean,
      default: false
    },
    cellComponent: {
      type: Object,
      required: true
    },
    indentComponent: {
      type: Object,
      required: true
    },
    expandButtonComponent: {
      type: Object,
      required: true
    },
    checkboxComponent: {
      type: Object,
      required: true
    },
    contentComponent: {
      type: Object,
      required: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var forColumnName = this.for,
        showSelectionControls = this.showSelectionControls,
        showSelectAll = this.showSelectAll,
        Indent = this.indentComponent,
        ExpandButton = this.expandButtonComponent,
        Checkbox = this.checkboxComponent,
        Content = this.contentComponent,
        Cell = this.cellComponent;


    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxTableTreeColumn',
          dependencies: [{ name: 'DxDataTypeProvider', optional: true }, { name: 'DxTreeDataState' }, { name: 'DxSelectionState', optional: !showSelectionControls }, { name: 'DxIntegratedSelection', optional: !showSelectAll }, { name: 'DxTable' }, { name: 'DxTableHeaderRow', optional: true }]
        }
      },
      [h(
        DxTemplate,
        {
          attrs: {
            name: 'tableHeaderCellBefore',
            predicate: function predicate(_ref) {
              var column = _ref.attrs.column;
              return column.name === forColumnName;
            }
          }
        },
        [h(
          'div',
          { style: 'display: flex' },
          [h(ExpandButton, {
            attrs: {
              visible: false
            }
          }), showSelectionControls && showSelectAll && h(DxTemplateConnector, [function (_ref2) {
            var _ref2$getters = _ref2.getters,
                selectAllAvailable = _ref2$getters.selectAllAvailable,
                allSelected$$1 = _ref2$getters.allSelected,
                someSelected$$1 = _ref2$getters.someSelected,
                toggleSelectAll = _ref2.actions.toggleSelectAll;
            return h(Checkbox, {
              attrs: {
                disabled: !selectAllAvailable,
                checked: allSelected$$1,
                indeterminate: someSelected$$1
              },
              on: {
                'change': toggleSelectAll
              }
            });
          }])]
        )]
      ), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableCell',
            predicate: function predicate(_ref3) {
              var _ref3$attrs = _ref3.attrs,
                  tableRow = _ref3$attrs.tableRow,
                  tableColumn = _ref3$attrs.tableColumn;
              return isTreeTableCell(tableRow, tableColumn, forColumnName);
            }
          }
        },
        [function (_ref4) {
          var attrs = _ref4.attrs,
              listeners = _ref4.listeners;
          return h(DxTemplateConnector, [function (_ref5) {
            var _ref5$getters = _ref5.getters,
                getCollapsedRows = _ref5$getters.getCollapsedRows,
                expandedRowIds = _ref5$getters.expandedRowIds,
                selection = _ref5$getters.selection,
                isTreeRowLeaf = _ref5$getters.isTreeRowLeaf,
                getTreeRowLevel = _ref5$getters.getTreeRowLevel,
                getCellValue = _ref5$getters.getCellValue,
                _ref5$actions = _ref5.actions,
                toggleRowExpanded$$1 = _ref5$actions.toggleRowExpanded,
                toggleSelection$$1 = _ref5$actions.toggleSelection;
            var _attrs$tableRow = attrs.tableRow,
                row = _attrs$tableRow.row,
                rowId = _attrs$tableRow.rowId;

            var columnName = attrs.tableColumn.column.name;
            var value = getCellValue(row, columnName);
            var collapsedRows = getCollapsedRows(row);
            return h(
              DxTemplatePlaceholder,
              {
                attrs: {
                  name: 'valueFormatter',
                  row: row,
                  column: attrs.tableColumn.column,
                  value: value
                }
              },
              [function (content) {
                return h(
                  Cell,
                  babelHelperVueJsxMergeProps([{ attrs: _extends({}, attrs), on: _extends({}, listeners) }, {
                    attrs: {
                      row: row,
                      column: attrs.tableColumn.column,
                      value: value
                    }
                  }]),
                  [h(Indent, {
                    attrs: {
                      level: getTreeRowLevel(row)
                    }
                  }), h(ExpandButton, {
                    attrs: {
                      visible: collapsedRows ? !!collapsedRows.length : !isTreeRowLeaf(row),
                      expanded: expandedRowIds.indexOf(rowId) > -1
                    },
                    on: {
                      'toggle': function toggle() {
                        return toggleRowExpanded$$1({ rowId: rowId });
                      }
                    }
                  }), showSelectionControls && h(Checkbox, {
                    attrs: {
                      disabled: false,
                      checked: selection.indexOf(rowId) > -1,
                      indeterminate: false
                    },
                    on: {
                      'change': function change() {
                        return toggleSelection$$1({ rowIds: [rowId] });
                      }
                    }
                  }), h(Content, [content || value])]
                );
              }]
            );
          }]);
        }]
      )]
    );
  }
};

var CellPlaceholder$1 = {
  render: function render() {
    var h = arguments[0];

    return h(DxTemplatePlaceholder);
  }
};

var DxTableBandHeader = {
  name: 'DxTableBandHeader',
  props: {
    columnBands: {
      type: Array
    },
    cellComponent: {
      type: Object
    },
    rowComponent: {
      type: Object
    },
    bandedHeaderCellComponent: {
      type: Object
    },
    invisibleCellComponent: {
      type: Object
    }
  },
  render: function render() {
    var h = arguments[0];
    var Cell = this.cellComponent,
        Row = this.rowComponent,
        HeaderCell = this.bandedHeaderCellComponent,
        InvisibleCell = this.invisibleCellComponent,
        columnBands = this.columnBands;


    var tableHeaderRowsComputed = function tableHeaderRowsComputed(_ref) {
      var tableHeaderRows = _ref.tableHeaderRows,
          tableColumns = _ref.tableColumns;
      return tableRowsWithBands(tableHeaderRows, columnBands, tableColumns);
    };

    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxTableBandHeader',
          dependencies: [{ name: 'DxTable' }, { name: 'DxTableHeaderRow' }, { name: 'DxTableSelection', optional: true }, { name: 'DxTableEditColumn', optional: true }]
        }
      },
      [h(DxGetter, {
        attrs: { name: 'tableHeaderRows', computed: tableHeaderRowsComputed }
      }), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableCell',
            predicate: function predicate(_ref2) {
              var tableRow = _ref2.attrs.tableRow;
              return isBandedOrHeaderRow(tableRow);
            }
          }
        },
        [function (_ref3) {
          var attrs = _ref3.attrs;
          return h(DxTemplateConnector, [function (_ref4) {
            var _ref4$getters = _ref4.getters,
                tableColumns = _ref4$getters.tableColumns,
                tableHeaderRows = _ref4$getters.tableHeaderRows;

            var bandComponent = getBandComponent(attrs, tableHeaderRows, tableColumns, columnBands);

            switch (bandComponent.type) {
              case BAND_DUPLICATE_RENDER:
                return h(DxTemplatePlaceholder, {
                  attrs: {
                    colSpan: attrs.colSpan,
                    tableColumn: attrs.tableColumn,
                    tableRow: attrs.tableRow,
                    rowSpan: attrs.rowSpan
                  }
                });
              case BAND_EMPTY_CELL:
                return h(InvisibleCell);
              case BAND_GROUP_CELL:
                {
                  var _bandComponent$payloa = bandComponent.payload,
                      value = _bandComponent$payloa.value,
                      payload = objectWithoutProperties(_bandComponent$payloa, ['value']);

                  return h(
                    Cell,
                    { attrs: _extends({}, attrs, payload) },
                    [value]
                  );
                }
              case BAND_HEADER_CELL:
                return h(DxTemplatePlaceholder, {
                  attrs: {
                    name: 'tableCell',
                    colSpan: attrs.colSpan,
                    tableColumn: attrs.tableColumn,
                    tableRow: bandComponent.payload.tableRow,
                    rowSpan: bandComponent.payload.rowSpan
                  }
                });
              default:
                return null;
            }
          }]);
        }]
      ), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableCell',
            predicate: function predicate(_ref5) {
              var _ref5$attrs = _ref5.attrs,
                  tableRow = _ref5$attrs.tableRow,
                  tableColumn = _ref5$attrs.tableColumn;
              return isHeadingTableCell(tableRow, tableColumn);
            }
          }
        },
        [function (_ref6) {
          var attrs = _ref6.attrs;
          return h(HeaderCell, babelHelperVueJsxMergeProps([{
            attrs: { component: CellPlaceholder$1 }
          }, { attrs: _extends({}, attrs) }]));
        }]
      ), h(
        DxTemplate,
        {
          attrs: {
            name: 'tableRow',
            predicate: function predicate(_ref7) {
              var tableRow = _ref7.attrs.tableRow;
              return isBandedTableRow(tableRow);
            }
          }
        },
        [function (_ref8) {
          var attrs = _ref8.attrs,
              slots = _ref8.slots;
          return h(
            Row,
            { attrs: _extends({}, attrs) },
            [slots.default]
          );
        }]
      )]
    );
  }
};

var pluginDependencies$17 = [{ name: 'DxTable' }];

var visibleTableColumnsComputed = function visibleTableColumnsComputed(_ref) {
  var tableColumns = _ref.tableColumns,
      hiddenColumnNames = _ref.hiddenColumnNames;
  return visibleTableColumns(tableColumns, hiddenColumnNames);
};

var columnExtensionValueGetter$3 = function columnExtensionValueGetter(columnExtensions, defaultValue) {
  return getColumnExtensionValueGetter(columnExtensions, 'togglingEnabled', defaultValue);
};

var DxTableColumnVisibility = {
  name: 'DxTableColumnVisibility',
  props: {
    hiddenColumnNames: {
      type: Array,
      required: true
    },
    emptyMessageComponent: {
      type: Object,
      required: true
    },
    messages: {
      type: Object
    },
    columnExtensions: {
      type: Array
    },
    columnTogglingEnabled: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggleColumnVisibility: function toggleColumnVisibility(columnName) {
      this.$emit('update:hiddenColumnNames', toggleColumn(this.hiddenColumnNames, columnName));
    }
  },
  render: function render() {
    var h = arguments[0];
    var EmptyMessage = this.emptyMessageComponent,
        messages = this.messages,
        hiddenColumnNames = this.hiddenColumnNames,
        columnExtensions = this.columnExtensions,
        columnTogglingEnabled = this.columnTogglingEnabled;

    var getMessage = getMessagesFormatter(messages);
    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxTableColumnVisibility',
          dependencies: pluginDependencies$17
        }
      },
      [h(DxGetter, {
        attrs: { name: 'hiddenColumnNames', value: hiddenColumnNames }
      }), h(DxGetter, {
        attrs: { name: 'tableColumns', computed: visibleTableColumnsComputed }
      }), h(DxGetter, {
        attrs: {
          name: 'isColumnTogglingEnabled',
          value: columnExtensionValueGetter$3(columnExtensions, columnTogglingEnabled)
        }
      }), h(DxAction, {
        attrs: {
          name: 'toggleColumnVisibility',
          action: this.toggleColumnVisibility
        }
      }), h(
        DxTemplate,
        {
          attrs: { name: 'table' }
        },
        [function (attrs) {
          return h(DxTemplateConnector, [function (_ref2) {
            var tableColumns = _ref2.getters.tableColumns;
            return tableDataColumnsExist(tableColumns) ? h(DxTemplatePlaceholder) : h(EmptyMessage, babelHelperVueJsxMergeProps([{
              attrs: {
                getMessage: getMessage
              }
            }, { attrs: attrs }]));
          }]);
        }]
      )]
    );
  }
};

var pluginDependencies$18 = [{ name: 'DxTableColumnVisibility' }, { name: 'DxToolbar' }];
var DxColumnChooser = {
  name: 'DxColumnChooser',
  props: {
    overlayComponent: {
      type: Object,
      required: true
    },
    containerComponent: {
      type: Object,
      required: true
    },
    itemComponent: {
      type: Object,
      required: true
    },
    toggleButtonComponent: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      visible: false
    };
  },

  methods: {
    setButtonRef: function setButtonRef(button) {
      this.button = button;
    },
    handleToggle: function handleToggle() {
      this.visible = !this.visible;
    },
    handleHide: function handleHide() {
      this.visible = false;
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var Overlay = this.overlayComponent,
        Container = this.containerComponent,
        Item = this.itemComponent,
        ToggleButton = this.toggleButtonComponent,
        visible = this.visible;


    return h(
      DxPlugin,
      {
        attrs: {
          name: 'DxColumnChooser',
          dependencies: pluginDependencies$18
        }
      },
      [h(
        DxTemplate,
        {
          attrs: { name: 'toolbarContent' }
        },
        [h(
          'div',
          { style: { display: 'flex', flex: 1 } },
          [h(DxTemplatePlaceholder), h(DxTemplateConnector, [function (_ref) {
            var _ref$getters = _ref.getters,
                columns = _ref$getters.columns,
                hiddenColumnNames = _ref$getters.hiddenColumnNames,
                isColumnTogglingEnabled = _ref$getters.isColumnTogglingEnabled,
                toggleColumnVisibility = _ref.actions.toggleColumnVisibility;
            return h(
              'div',
              { style: { display: 'flex', alignItems: 'center', position: 'relative' } },
              [h(ToggleButton, {
                attrs: {
                  buttonRef: _this.setButtonRef,

                  active: visible
                },
                on: {
                  'toggle': _this.handleToggle
                }
              }), h(
                Overlay,
                {
                  attrs: {
                    visible: visible,
                    target: _this.button
                  },
                  on: {
                    'hide': _this.handleHide
                  }
                },
                [h(Container, [columnChooserItems(columns, hiddenColumnNames).map(function (item) {
                  var columnName = item.column.name;

                  var togglingEnabled = isColumnTogglingEnabled(columnName);
                  return h(Item, {
                    key: columnName,
                    attrs: { item: item,
                      disabled: !togglingEnabled
                    },
                    on: {
                      'toggle': function toggle() {
                        return toggleColumnVisibility(columnName);
                      }
                    }
                  });
                })])]
              )]
            );
          }])]
        )]
      )]
    );
  }
};

export { DxGrid, DxTable, DxTableHeaderRow, DxIntegratedSorting, DxSortingState, DxToolbar, TableLayout, StaticTableLayout, VirtualTableLayout, DxFilteringState, DxIntegratedFiltering, DxTableFilterRow, DxGroupingState, DxIntegratedGrouping, DxCustomGrouping, DxGroupingPanel, DxTableGroupRow, GroupPanelLayout, DxSearchState, DxSearchPanel, DxSelectionState, DxIntegratedSelection, DxTableSelection, DxPagingState, DxIntegratedPaging, DxCustomPaging, DxPagingPanel, DxDataTypeProvider, DxRowDetailState, DxTableRowDetail, DxEditingState, DxTableEditColumn, DxTableEditRow, DxTreeDataState, DxCustomTreeData, DxTableTreeColumn, DxTableBandHeader, DxTableColumnVisibility, DxColumnChooser };
//# sourceMappingURL=dx-vue-grid.es.js.map
