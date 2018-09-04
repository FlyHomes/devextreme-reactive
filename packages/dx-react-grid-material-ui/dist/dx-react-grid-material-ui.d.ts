import * as React from 'react';
import {
  Column,
  TableColumnWidthInfo
} from '@devexpress/dx-react-grid';

// -------------------------------------------------------------------------------------------------
// ColumnChooser
// -------------------------------------------------------------------------------------------------

import {
  ColumnChooser as ColumnChooserBase,
} from '@devexpress/dx-react-grid';


export namespace ColumnChooser {
  /** Describes properties passed to a component that renders the column chooser overlay. */
  export type OverlayProps = ColumnChooserBase.OverlayProps;
}

export namespace ColumnChooser {
  /** Describes properties passed to a component that renders the button that invokes the column chooser. */
  export type ToggleButtonProps = ColumnChooserBase.ToggleButtonProps;
}

export namespace ColumnChooser {
  /** Describes properties passed to a component that renders the column chooser container. */
  export type ContainerProps = ColumnChooserBase.ContainerProps;
}

export namespace ColumnChooser {
  /** Describes properties passed to a component that renders a column chooser item. */
  export type ItemProps = ColumnChooserBase.ItemProps;
}

export interface ColumnChooserProps {
  /** A component that renders the column chooser overlay. */
  overlayComponent?: React.ComponentType<ColumnChooserBase.OverlayProps>;
  /** A component that renders a button that invokes the column chooser. */
  toggleButtonComponent?: React.ComponentType<ColumnChooserBase.ToggleButtonProps>;
  /** A component that renders the column chooser container. */
  containerComponent?: React.ComponentType<ColumnChooserBase.ContainerProps>;
  /** A component that renders a column chooser item. */
  itemComponent?: React.ComponentType<ColumnChooserBase.ItemProps>;
  /** An object that specifies localization messages. */
  messages?: ColumnChooserBase.LocalizationMessages;
}

/** The ColumnChooser plugin allows a user to toggle grid columns' visibility at runtime. The column chooser lists columns with checkboxes that control a corresponding column's visibility. */
export declare const ColumnChooser: React.ComponentType<ColumnChooserProps> & {
  /** A component that renders a button that invokes the column chooser. */
  ToggleButton: React.ComponentType<ColumnChooserBase.ToggleButtonProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders the column chooser overlay. */
  Overlay: React.ComponentType<ColumnChooserBase.OverlayProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders the column chooser container. */
  Container: React.ComponentType<ColumnChooserBase.ContainerProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a column chooser item. */
  Item: React.ComponentType<ColumnChooserBase.ItemProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// DragDropProvider
// -------------------------------------------------------------------------------------------------

import {
  DragDropProvider as DragDropProviderBase,
} from '@devexpress/dx-react-grid';


export namespace DragDropProvider {
  /** Describes properties of the component that renders a container for columns being dragged. */
  export type ContainerProps = DragDropProviderBase.ContainerProps;
}

export namespace DragDropProvider {
  /** Describes properties of the component that renders a column being dragged. */
  export type ColumnProps = DragDropProviderBase.ColumnProps;
}

export interface DragDropProviderProps {
  /** A component that renders a container for columns being dragged. */
  containerComponent?: React.ComponentType<DragDropProviderBase.ContainerProps>;
  /** A component that renders a column being dragged. */
  columnComponent?: React.ComponentType<DragDropProviderBase.ColumnProps>;
}

/** A plugin that implements the drag-and-drop functionality and visualizes columns that are being dragged. */
export declare const DragDropProvider: React.ComponentType<DragDropProviderProps> & {
  /** A component that renders a container for columns being dragged. */
  Container: React.ComponentType<DragDropProviderBase.ContainerProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a column being dragged. */
  Column: React.ComponentType<DragDropProviderBase.ColumnProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// Grid
// -------------------------------------------------------------------------------------------------

import {
  Grid as GridBase,
} from '@devexpress/dx-react-grid';


export namespace Grid {
  /** Describes properties passed to a component that renders the grid root layout. */
  export type RootProps = GridBase.RootProps;
}

export interface GridProps {
  /** An array containing custom data. A user defines the access to this data. Refer to Data Accessors for details. */
  rows: Array<any>;
  /** Specifies for which row fields columns are created. */
  columns: Array<Column>;
  /** Specifies the function used to get a unique row identifier. */
  getRowId?: (row: any) => number | string;
  /** Specifies the function used to get a cell's value. */
  getCellValue?: (row: any, columnName: string) => any;
  /** A component that renders the grid root layout. */
  rootComponent?: React.ComponentType<GridBase.RootProps>;
}

/** The Grid is a root container component designed to process and display data specified via the `rows` property. You can configure columns using the `columns` property. The Grid's functionality  is implemented in several plugins specified as child components. See the plugins concept for details. */
export declare const Grid: React.ComponentType<GridProps> & {
  /** A component that renders the grid root layout. */
  Root: React.ComponentType<GridBase.RootProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// GroupingPanel
// -------------------------------------------------------------------------------------------------

import {
  GroupingPanel as GroupingPanelBase,
} from '@devexpress/dx-react-grid';


export namespace GroupingPanel {
  /** Describes properties passed to a component that renders a group panel container. */
  export type ContainerProps = GroupingPanelBase.ContainerProps;
}

export namespace GroupingPanel {
  /** Describes properties passed to a group panel item template when it is being rendered. */
  export type ItemProps = GroupingPanelBase.ItemProps;
}

export namespace GroupingPanel {
  /** Describes properties passed to a component that renders an empty group panel message. */
  export type EmptyMessageProps = GroupingPanelBase.EmptyMessageProps;
}

export interface GroupingPanelProps {
  /** Specifies whether to render controls that toggle the column's sorting state. Requires the SortingState dependency. */
  showSortingControls?: boolean;
  /** Specifies whether column headers display a button that cancels grouping by that column. */
  showGroupingControls?: boolean;
  /** A component that renders a group panel container. */
  containerComponent?: React.ComponentType<GroupingPanelBase.ContainerProps>;
  /** A component that renders a group panel item. */
  itemComponent?: React.ComponentType<GroupingPanelBase.ItemProps>;
  /** A component that renders an empty group panel message. */
  emptyMessageComponent?: React.ComponentType<GroupingPanelBase.EmptyMessageProps>;
  /** An object that specifies the localization messages. */
  messages?: GroupingPanelBase.LocalizationMessages;
}

/** A plugin that renders the Grouping Panel in the Grid's header. This panel displays grouped columns and allows a user to modify grouping options.Optionally, the plugin allows an end-user to change grouped columns' sorting order and render sorting indicators. */
export declare const GroupingPanel: React.ComponentType<GroupingPanelProps> & {
  /** A component that renders a grouping panel container. */
  Container: React.ComponentType<GroupingPanelBase.ContainerProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a grouping panel item. */
  Item: React.ComponentType<GroupingPanelBase.ItemProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders an empty grouping panel message. */
  EmptyMessage: React.ComponentType<GroupingPanelBase.EmptyMessageProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// PagingPanel
// -------------------------------------------------------------------------------------------------

import {
  PagingPanel as PagingPanelBase,
} from '@devexpress/dx-react-grid';


export namespace PagingPanel {
  /** Describes the container component properties. */
  export type ContainerProps = PagingPanelBase.ContainerProps;
}

export interface PagingPanelProps {
  /** A component that renders the paging panel. */
  containerComponent?: React.ComponentType<PagingPanelBase.ContainerProps>;
  /** The page sizes that a user can select. */
  pageSizes?: Array<number>;
  /** An object that specifies the localization messages. */
  messages?: PagingPanelBase.LocalizationMessages;
}

/** A plugin that renders the paging panel used for navigation through data pages. */
export declare const PagingPanel: React.ComponentType<PagingPanelProps> & {
  /** A component that renders the paging panel. */
  Container: React.ComponentType<PagingPanelBase.ContainerProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// SearchPanel
// -------------------------------------------------------------------------------------------------

import {
  SearchPanel as SearchPanelBase,
} from '@devexpress/dx-react-grid';


export namespace SearchPanel {
  /** Describes properties passed to a component that renders the Search Panel root element. */
  export type InputProps = SearchPanelBase.InputProps;
}

export interface SearchPanelProps {
  /** A component that renders the Search Panel input element. */
  inputComponent?: React.ComponentType<SearchPanelBase.InputProps>;
  /** An object that specifies localization messages. */
  messages?: SearchPanelBase.LocalizationMessages;
}

/** A plugin that renders the Search Panel. */
export declare const SearchPanel: React.ComponentType<SearchPanelProps> & {
  /** A component that renders the Search Panel input element. */
  Input: React.ComponentType<SearchPanelBase.InputProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// TableBandHeader
// -------------------------------------------------------------------------------------------------

import {
  TableBandHeader as TableBandHeaderBase,
} from '@devexpress/dx-react-grid';


export namespace TableBandHeader {
  /** Describes properties passed to a component that renders a table band cell. */
  export type CellProps = TableBandHeaderBase.CellProps;
}

export namespace TableBandHeader {
  /** Describes properties of column bands that the TableBandHeader plugin renders. */
  export type ColumnBands = TableBandHeaderBase.ColumnBands;
}

export interface TableBandHeaderProps {
  /** A component that renders a band cell. */
  cellComponent?: React.ComponentType<TableBandHeaderBase.CellProps>;
  /** A component that renders a band cells' row. */
  rowComponent?: React.ComponentType<TableBase.RowProps>;
  /** Specifies column bands for multi-level table header. */
  columnBands?: Array<TableBandHeaderBase.ColumnBands>;
}

/** A plugin that renders the banded cells. */
export declare const TableBandHeader: React.ComponentType<TableBandHeaderProps> & {
  /** A component that renders a band cell. */
  Cell: React.ComponentType<React.ComponentType<TableBase.CellProps> & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a band cells' row. */
  Row: React.ComponentType<React.ComponentType<TableBase.RowProps> & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// TableColumnReordering
// -------------------------------------------------------------------------------------------------

import {
  TableColumnReordering as TableColumnReorderingBase,
} from '@devexpress/dx-react-grid';

export interface TableColumnReorderingProps {
  /** The column order. */
  order?: Array<string>;
  /** The initial column order in the uncontrolled mode. */
  defaultOrder?: Array<string>;
  /** Handles changes to the column order. */
  onOrderChange?: (nextOrder: Array<string>) => void;
}

/** A plugin that manages the displayed columns' order. */
export declare const TableColumnReordering: React.ComponentType<TableColumnReorderingProps>;

// -------------------------------------------------------------------------------------------------
// TableColumnResizing
// -------------------------------------------------------------------------------------------------

import {
  TableColumnResizing as TableColumnResizingBase,
} from '@devexpress/dx-react-grid';

export interface TableColumnResizingProps {
  /** Specifies column widths. */
  columnWidths?: Array<TableColumnWidthInfo>;
  /** Specifies a column's minimum width. */
  minColumnWidth?: number;
  /** Specifies initial column widths in uncontrolled mode. */
  defaultColumnWidths?: Array<TableColumnWidthInfo>;
  /** Handles column width changes. */
  onColumnWidthsChange?: (nextColumnWidths: Array<TableColumnWidthInfo>) => void;
}

/** A plugin that manages table column widths. */
export declare const TableColumnResizing: React.ComponentType<TableColumnResizingProps>;

// -------------------------------------------------------------------------------------------------
// TableColumnVisibility
// -------------------------------------------------------------------------------------------------

import {
  TableColumnVisibility as TableColumnVisibilityBase,
} from '@devexpress/dx-react-grid';


export namespace TableColumnVisibility {
  /** Describes the empty message component's properties. */
  export type EmptyMessageProps = TableColumnVisibilityBase.EmptyMessageProps;
}

export namespace TableColumnVisibility {
  /** Describes additional column properties that the plugin can handle. */
  export type ColumnExtension = TableColumnVisibilityBase.ColumnExtension;
}

export interface TableColumnVisibilityProps {
  /** Hidden column names. */
  hiddenColumnNames?: Array<string>;
  /** Names of initially hidden columns in the uncontrolled mode. */
  defaultHiddenColumnNames?: Array<string>;
  /** Specifies whether an end-user can change column visibility. */
  columnTogglingEnabled?: boolean;
  /** Additional column properties that the plugin can handle. */
  columnExtensions?: Array<TableColumnVisibilityBase.ColumnExtension>;
  /** Handles hidden columns adding or removing. */
  onHiddenColumnNamesChange?: (hiddenColumnNames: Array<string>) => void;
  /** A component that renders a message that is displayed when all columns are hidden. */
  emptyMessageComponent?: React.ComponentType<TableColumnVisibilityBase.EmptyMessageProps>;
  /** An object that specifies localization messages. */
  messages?: TableColumnVisibilityBase.LocalizationMessages;
}

/** A plugin that manages Grid columns' visibility. */
export declare const TableColumnVisibility: React.ComponentType<TableColumnVisibilityProps> & {
  /** A component that renders a message displayed when all columns are hidden. */
  EmptyMessage: React.ComponentType<TableColumnVisibilityBase.EmptyMessageProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// TableEditColumn
// -------------------------------------------------------------------------------------------------

import {
  TableEditColumn as TableEditColumnBase,
} from '@devexpress/dx-react-grid';


export namespace TableEditColumn {
  /** Describes properties passed to a data row's command cell component. */
  export type CellProps = TableEditColumnBase.CellProps;
}

export namespace TableEditColumn {
  /** Describes properties passed to a component that renders a command cell within the header row. */
  export type HeaderCellProps = TableEditColumnBase.HeaderCellProps;
}

export namespace TableEditColumn {
  /** Describes properties passed to a component that renders command control within a command cell. */
  export type CommandProps = TableEditColumnBase.CommandProps;
}

export interface TableEditColumnProps {
  /** A component that renders a command cell within a data row. */
  cellComponent?: React.ComponentType<TableEditColumnBase.CellProps>;
  /** A component that renders a command cell within the header row. */
  headerCellComponent?: React.ComponentType<TableEditColumnBase.HeaderCellProps>;
  /** A component that renders command control within a command cell. */
  commandComponent?: React.ComponentType<TableEditColumnBase.CommandProps>;
  /** Specifies whether to render the 'New' command within the header row's command cell. */
  showAddCommand?: boolean;
  /** Specifies whether to render the 'Edit' command within the data row's command cell. */
  showEditCommand?: boolean;
  /** Specifies whether to render the 'Delete' command within the data row's command cell. */
  showDeleteCommand?: boolean;
  /** Specifies the command column's width. */
  width?: number | string;
  /** An object that specifies the localization messages. */
  messages?: TableEditColumnBase.LocalizationMessages;
}

/** A plugin that renders a command column. This column contains controls used for row editing, creating, or deleting and committing/canceling changes. */
export declare const TableEditColumn: React.ComponentType<TableEditColumnProps> & {
  /** A component that renders a command control within a command cell. */
  Command: React.ComponentType<TableEditColumnBase.CommandProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a command cell within a data row. */
  Cell: React.ComponentType<TableEditColumnBase.CellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a command cell within the header row. */
  HeaderCell: React.ComponentType<TableEditColumnBase.HeaderCellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// TableEditRow
// -------------------------------------------------------------------------------------------------

import {
  TableEditRow as TableEditRowBase,
} from '@devexpress/dx-react-grid';


export namespace TableEditRow {
  /** Describes properties passed to a component that renders an editable cell. */
  export type CellProps = TableEditRowBase.CellProps;
}

export namespace TableEditRow {
  /** Describes properties passed to a component that renders an editable row. */
  export type RowProps = TableEditRowBase.RowProps;
}

export interface TableEditRowProps {
  /** A component that renders an editable cell. */
  cellComponent?: React.ComponentType<TableEditRowBase.CellProps>;
  /** A component that renders an editable row. */
  rowComponent?: React.ComponentType<TableEditRowBase.RowProps>;
  /** Specifies the editable row's height. */
  rowHeight?: number;
}

/** A plugin that renders a row being edited. */
export declare const TableEditRow: React.ComponentType<TableEditRowProps> & {
  /** A component that renders an editable cell. */
  Cell: React.ComponentType<TableEditRowBase.CellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders an editable row. */
  Row: React.ComponentType<TableEditRowBase.RowProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// TableFilterRow
// -------------------------------------------------------------------------------------------------

import {
  TableFilterRow as TableFilterRowBase,
} from '@devexpress/dx-react-grid';


export namespace TableFilterRow {
  /** Describes properties passed to a component that renders a filter cell. */
  export type CellProps = TableFilterRowBase.CellProps;
}

export namespace TableFilterRow {
  /** Describes properties passed to a component that renders a filter selector. */
  export type FilterSelectorProps = TableFilterRowBase.FilterSelectorProps;
}

export namespace TableFilterRow {
  /** Describes properties passed to a component that renders a filter selector icon. */
  export type IconProps = TableFilterRowBase.IconProps;
}

export namespace TableFilterRow {
  /** Describes properties passed to a component that renders a filter editor. */
  export type EditorProps = TableFilterRowBase.EditorProps;
}

export interface TableFilterRowProps {
  /** A component that renders a filter cell. */
  cellComponent?: React.ComponentType<TableFilterRowBase.CellProps>;
  /** A component that renders a filter row. */
  rowComponent?: React.ComponentType<TableBase.RowProps>;
  /** A component that renders a filter selector. */
  filterSelectorComponent?: React.ComponentType<TableFilterRowBase.FilterSelectorProps>;
  /** A component that renders filter selector icons. */
  iconComponent?: React.ComponentType<TableFilterRowBase.IconProps>;
  /** A component that renders a filter editor. */
  editorComponent?: React.ComponentType<TableFilterRowBase.EditorProps>;
  /** Specifies whether the FilterSelector should be displayed. */
  showFilterSelector?: boolean;
  /** The filter row's height. */
  rowHeight?: number;
  /** An object that specifies localization messages. */
  messages?: TableFilterRowBase.LocalizationMessages;
}

/** A plugin that renders a filter row. */
export declare const TableFilterRow: React.ComponentType<TableFilterRowProps> & {
  /** A component that renders a filter row cell. */
  Cell: React.ComponentType<TableFilterRowBase.CellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a filter row. */
  Row: React.ComponentType<TableBase.RowProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a filter selector. */
  FilterSelector: React.ComponentType<TableFilterRowBase.FilterSelectorProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders filter selector icons. */
  Icon: React.ComponentType<TableFilterRowBase.IconProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a filter editor. */
  Editor: React.ComponentType<TableFilterRowBase.EditorProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// TableGroupRow
// -------------------------------------------------------------------------------------------------

import {
  TableGroupRow as TableGroupRowBase,
} from '@devexpress/dx-react-grid';


export namespace TableGroupRow {
  /** Describes additional column properties that the plugin can handle. */
  export type ColumnExtension = TableGroupRowBase.ColumnExtension;
}

export namespace TableGroupRow {
  /** Describes properties passed to a component that renders a group cell. */
  export type CellProps = TableGroupRowBase.CellProps;
}

export namespace TableGroupRow {
  /** Describes properties passed to a component that renders a group row. */
  export type RowProps = TableGroupRowBase.RowProps;
}

export namespace TableGroupRow {
  /** Describes properties passed to a component that renders a group indent cell. */
  export type IndentCellProps = TableGroupRowBase.IndentCellProps;
}

export interface TableGroupRowProps {
  /** A Boolean value that specifies whether the grid's table displays a column by which data is grouped. */
  showColumnsWhenGrouped?: boolean;
  /** Additional column properties that the plugin can handle. */
  columnExtensions?: Array<TableGroupRowBase.ColumnExtension>;
  /** A component that renders a group cell. */
  cellComponent?: React.ComponentType<TableGroupRowBase.CellProps>;
  /** A component that renders a group row. */
  rowComponent?: React.ComponentType<TableGroupRowBase.RowProps>;
  /** A component that renders a group indent cell. */
  indentCellComponent?: React.ComponentType<TableGroupRowBase.IndentCellProps>;
  /** The group indent column's width. */
  indentColumnWidth?: number;
}

/** A plugin that renders group rows and enables them to expand and collapse. */
export declare const TableGroupRow: React.ComponentType<TableGroupRowProps> & {
  /** A component that renders a group row. */
  Row: React.ComponentType<TableGroupRowBase.RowProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a group cell. */
  Cell: React.ComponentType<TableGroupRowBase.CellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// TableHeaderRow
// -------------------------------------------------------------------------------------------------

import {
  TableHeaderRow as TableHeaderRowBase,
} from '@devexpress/dx-react-grid';


export namespace TableHeaderRow {
  /** Describes properties used to render a table header cell. */
  export type CellProps = TableHeaderRowBase.CellProps;
}

export namespace TableHeaderRow {
  /** Describes properties used to render a sort label. */
  export type SortLabelProps = TableHeaderRowBase.SortLabelProps;
}

export namespace TableHeaderRow {
  /** Describes properties used to render a cell content. */
  export type ContentProps = TableHeaderRowBase.ContentProps;
}

export interface TableHeaderRowProps {
  /** A component that renders a header cell. */
  cellComponent?: React.ComponentType<TableHeaderRowBase.CellProps>;
  /** A component that renders a header row. */
  rowComponent?: React.ComponentType<TableBase.RowProps>;
  /** A component that renders a header cell's content. */
  contentComponent?: React.ComponentType<TableHeaderRowBase.ContentProps>;
  /** A component that renders a sort label. */
  sortLabelComponent?: React.ComponentType<TableHeaderRowBase.SortLabelProps>;
  /** A component that renders a title. */
  titleComponent?: React.ComponentType<object>;
  /** Specifies whether to render controls that toggle the column's sorting state. Requires the SortingState dependency. */
  showSortingControls?: boolean;
  /** Specifies whether to display a button that groups data by column. Requires the GroupingState dependency. */
  showGroupingControls?: boolean;
  /** An object that specifies localization messages. */
  messages?: TableHeaderRowBase.LocalizationMessages;
}

/** A plugin that renders the table's header row. The Column's `title` field specifies the column's title in the header row.The plugin also allows you to manage a column's sorting and grouping state and initiate column dragging. */
export declare const TableHeaderRow: React.ComponentType<TableHeaderRowProps> & {
  /** A component that renders a header row. */
  Row: React.ComponentType<TableBase.RowProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a header cell. */
  Cell: React.ComponentType<TableHeaderRowBase.CellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a cell content. */
  Content: React.ComponentType<TableHeaderRowBase.ContentProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a sort label. */
  SortLabel: React.ComponentType<TableHeaderRowBase.SortLabelProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a title. */
  Title: React.ComponentType<object & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// TableRowDetail
// -------------------------------------------------------------------------------------------------

import {
  TableRowDetail as TableRowDetailBase,
} from '@devexpress/dx-react-grid';


export namespace TableRowDetail {
  /** Describes properties passed to a component that renders a detail row's content. */
  export type ContentProps = TableRowDetailBase.ContentProps;
}

export namespace TableRowDetail {
  /** Describes properties passed to a component that renders a detail cell. */
  export type CellProps = TableRowDetailBase.CellProps;
}

export namespace TableRowDetail {
  /** Describes properties passed to a component that renders a detail row. */
  export type RowProps = TableRowDetailBase.RowProps;
}

export namespace TableRowDetail {
  /** Describes properties passed to a component that renders a cell containing the expand/collapse control. */
  export type ToggleCellProps = TableRowDetailBase.ToggleCellProps;
}

export interface TableRowDetailProps {
  /** A component that renders the detail row's content within the detail cell. */
  contentComponent?: React.ComponentType<TableRowDetailBase.ContentProps>;
  /** A component that renders a detail cell. */
  cellComponent?: React.ComponentType<TableRowDetailBase.CellProps>;
  /** A component that renders a detail row. */
  rowComponent?: React.ComponentType<TableRowDetailBase.RowProps>;
  /** A component that renders a cell containing the expand/collapse control. */
  toggleCellComponent?: React.ComponentType<TableRowDetailBase.ToggleCellProps>;
  /** Specifies the width of the column containing expand/collapse controls. */
  toggleColumnWidth?: number;
  /** Specifies the detail row height. */
  rowHeight?: number;
}

/** A plugin that renders detail rows. */
export declare const TableRowDetail: React.ComponentType<TableRowDetailProps> & {
  /** A component that renders a detail cell. */
  Cell: React.ComponentType<TableRowDetailBase.CellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a detail row. */
  Row: React.ComponentType<TableRowDetailBase.RowProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a cell containing the expand/collapse control. */
  ToggleCell: React.ComponentType<TableRowDetailBase.ToggleCellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// TableSelection
// -------------------------------------------------------------------------------------------------

import {
  TableSelection as TableSelectionBase,
} from '@devexpress/dx-react-grid';


export namespace TableSelection {
  /** Describes properties passed to a component that renders a cell containing the Select All checkbox. */
  export type HeaderCellProps = TableSelectionBase.HeaderCellProps;
}

export namespace TableSelection {
  /** Describes properties passed to a component that renders a cell containing a selection checkbox. */
  export type CellProps = TableSelectionBase.CellProps;
}

export interface TableSelectionProps {
  /** Specifies whether to highlight the selected rows. Note that `Table` plugin's `rowComponent` is ignored in this case. */
  highlightRow?: boolean;
  /** Specifies whether a user can select/deselect a row by clicking it. Note that `Table` plugin's `rowComponent` is ignored in this case. */
  selectByRowClick?: boolean;
  /** Specifies whether to render the Select All checkbox in the header row. */
  showSelectAll?: boolean;
  /** Specifies whether to render the selection column that displays selection checkboxes. */
  showSelectionColumn?: boolean;
  /** A component that renders a selection cell . */
  cellComponent?: React.ComponentType<TableSelectionBase.CellProps>;
  /** A component that renders a cell containing the Select All checkbox. */
  headerCellComponent?: React.ComponentType<TableSelectionBase.HeaderCellProps>;
  /** The selection column's width. */
  selectionColumnWidth?: number;
}

/** A plugin that visualizes table rows' selection state by rendering selection checkboxes and highlighting the selected rows. */
export declare const TableSelection: React.ComponentType<TableSelectionProps> & {
  /** A component that renders a cell with the selection control inside the heading row. */
  HeaderCell: React.ComponentType<TableSelectionBase.HeaderCellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a cell with selection control. */
  Cell: React.ComponentType<TableSelectionBase.CellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// TableSummaryRow
// -------------------------------------------------------------------------------------------------

import {
  TableSummaryRow as TableSummaryRowBase,
} from '@devexpress/dx-react-grid';


export namespace TableSummaryRow {
  /** Describes properties passed to a component that renders a cell in a summary row. */
  export type CellProps = TableSummaryRowBase.CellProps;
}

export namespace TableSummaryRow {
  /** Describes properties passed to a component that renders a cell's content. */
  export type ContentProps = TableSummaryRowBase.ContentProps;
}

export namespace TableSummaryRow {
  /** Describes properties passed to a component that renders an indent used to identify a row's level. */
  export type IndentProps = TableSummaryRowBase.IndentProps;
}

export interface TableSummaryRowProps {
  /** An array of summary types that the `DataTypeProvider` plugin should not format. */
  formatlessSummaryTypes?: Array<string>;
  /** A component that renders the total summary row. */
  totalRowComponent?: React.ComponentType<TableBase.RowProps>;
  /** A component that renders a group summary row. */
  groupRowComponent?: React.ComponentType<TableBase.RowProps>;
  /** A component that renders a tree summary row. */
  treeRowComponent?: React.ComponentType<TableBase.RowProps>;
  /** A component that renders a total summary cell. */
  totalCellComponent?: React.ComponentType<TableSummaryRowBase.CellProps>;
  /** A component that renders a group summary cell. */
  groupCellComponent?: React.ComponentType<TableSummaryRowBase.CellProps>;
  /** A component that renders a tree summary cell. */
  treeCellComponent?: React.ComponentType<TableSummaryRowBase.CellProps>;
  /** A component that renders a summary cell within a tree column. */
  treeColumnCellComponent?: React.ComponentType<TableSummaryRowBase.CellProps>;
  /** A component that renders a summary cell's content within a tree column. */
  treeColumnContentComponent?: React.ComponentType<TableSummaryRowBase.ContentProps>;
  /** A component that renders an indent used to identify a tree row level within a tree column. */
  treeColumnIndentComponent?: React.ComponentType<TableSummaryRowBase.IndentProps>;
  /** A component that renders a summary item. */
  itemComponent?: React.ComponentType<object>;
  /** An object that specifies localization messages. */
  messages?: TableSummaryRowBase.LocalizationMessages;
}

/** A plugin that renders table rows that display a total, group, and tree summary. */
export declare const TableSummaryRow: React.ComponentType<TableSummaryRowProps> & {
  /** A component that renders a cell within a data row. */
  Cell: React.ComponentType<TableSummaryRowBase.CellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders the total summary row. */
  totalRowComponent: React.ComponentType<TableBase.RowProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a group summary row. */
  GroupRow: React.ComponentType<React.ComponentType<TableBase.RowProps> & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a tree summary row. */
  TreeRow: React.ComponentType<React.ComponentType<TableBase.RowProps> & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a total summary cell. */
  TotalCell: React.ComponentType<React.ComponentType<TableSummaryRowBase.CellProps> & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a group summary cell. */
  GroupCell: React.ComponentType<React.ComponentType<TableSummaryRowBase.CellProps> & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a tree summary cell. */
  TreeCell: React.ComponentType<React.ComponentType<TableSummaryRowBase.CellProps> & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a summary cell within a tree column. */
  TreeColumnCell: React.ComponentType<React.ComponentType<TableSummaryRowBase.CellProps> & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a summary cell's content within a tree column. */
  TreeColumnContent: React.ComponentType<React.ComponentType<TableSummaryRowBase.ContentProps> & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders an indent used to identify a tree row's level in a tree column. */
  TreeColumnIndent: React.ComponentType<React.ComponentType<TableSummaryRowBase.IndentProps> & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a summary item. */
  Item: React.ComponentType<React.ComponentType<object> & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// TableTreeColumn
// -------------------------------------------------------------------------------------------------

import {
  TableTreeColumn as TableTreeColumnBase,
} from '@devexpress/dx-react-grid';


export namespace TableTreeColumn {
  /** Describes properties passed to a component that renders a cell within a data row. */
  export type CellProps = TableTreeColumnBase.CellProps;
}

export namespace TableTreeColumn {
  /** Describes properties passed to a component that renders a cell's content. */
  export type ContentProps = TableTreeColumnBase.ContentProps;
}

export namespace TableTreeColumn {
  /** Describes properties passed to a component that renders an indent used to identify a row level. */
  export type IndentProps = TableTreeColumnBase.IndentProps;
}

export namespace TableTreeColumn {
  /** Describes properties passed to a component that renders a button used to controls a row's expanded state. */
  export type ExpandButtonProps = TableTreeColumnBase.ExpandButtonProps;
}

export namespace TableTreeColumn {
  /** Describes properties passed to a component that renders a checkbox used to control selection. */
  export type CheckboxProps = TableTreeColumnBase.CheckboxProps;
}

export interface TableTreeColumnProps {
  /** The name of a column that should be represented as a tree. */
  for?: string;
  /** A component that renders a cell within a data row. */
  cellComponent?: React.ComponentType<TableTreeColumnBase.CellProps>;
  /** A component that renders a cell's content. */
  contentComponent?: React.ComponentType<TableTreeColumnBase.ContentProps>;
  /** A component that renders an indent used to identify a row level. */
  indentComponent?: React.ComponentType<TableTreeColumnBase.IndentProps>;
  /** A component that renders a button that controls the row's expanded state. */
  expandButtonComponent?: React.ComponentType<TableTreeColumnBase.ExpandButtonProps>;
  /** A component that renders a checkbox used to control selection. */
  checkboxComponent?: React.ComponentType<TableTreeColumnBase.CheckboxProps>;
  /** Specifies whether to render selection controls. Requires the SelectionState plugin. */
  showSelectionControls?: boolean;
  /** Specifies whether to render Select All checkbox. Requires the IntegratedSelection plugin. */
  showSelectAll?: boolean;
}

/** A plugin that renders a table column with a toggle button and sorting indicators. */
export declare const TableTreeColumn: React.ComponentType<TableTreeColumnProps> & {
  /** A component that renders a cell within a data row. */
  Cell: React.ComponentType<TableTreeColumnBase.CellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a cell's content. */
  Content: React.ComponentType<TableTreeColumnBase.ContentProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders an indent used to identify a row level. */
  Indent: React.ComponentType<TableTreeColumnBase.IndentProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a button used to controls a row's expanded state. */
  ExpandButton: React.ComponentType<TableTreeColumnBase.ExpandButtonProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a checkbox used to control selection. */
  Checkbox: React.ComponentType<TableTreeColumnBase.CheckboxProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// Table
// -------------------------------------------------------------------------------------------------

import {
  Table as TableBase,
} from '@devexpress/dx-react-grid';


export namespace Table {
  /** Describes additional column properties that the plugin can handle. */
  export type ColumnExtension = TableBase.ColumnExtension;
}

export namespace Table {
  /** Describes properties passed to a component that renders a generic table cell. */
  export type CellProps = TableBase.CellProps;
}

export namespace Table {
  /** Describes properties passed to a component that renders a table cell. */
  export type DataCellProps = TableBase.DataCellProps;
}

export namespace Table {
  /** Describes properties passed to a component that renders a table cell when the table is empty. */
  export type NoDataCellProps = TableBase.NoDataCellProps;
}

export namespace Table {
  /** Describes properties passed to a component that renders a generic table row. */
  export type RowProps = TableBase.RowProps;
}

export namespace Table {
  /** Describes properties passed to a component that renders a table row. */
  export type DataRowProps = TableBase.DataRowProps;
}

export interface TableProps {
  /** Additional column properties that the plugin can handle. */
  columnExtensions?: Array<TableBase.ColumnExtension>;
  /** A component that renders a table. */
  tableComponent?: React.ComponentType<object>;
  /** A component that renders a table head. */
  headComponent?: React.ComponentType<object>;
  /** A component that renders a table body. */
  bodyComponent?: React.ComponentType<object>;
  /** A component that renders a table footer. */
  footerComponent?: React.ComponentType<object>;
  /** A component that renders a table's container. */
  containerComponent?: React.ComponentType<object>;
  /** A component that renders a table cell. */
  cellComponent?: React.ComponentType<TableBase.DataCellProps>;
  /** A component that renders a table row. */
  rowComponent?: React.ComponentType<TableBase.DataRowProps>;
  /** A component that renders a table cell when the table is empty. */
  noDataCellComponent?: React.ComponentType<TableBase.NoDataCellProps>;
  /** A component that renders a table row when the table is empty. */
  noDataRowComponent?: React.ComponentType<TableBase.RowProps>;
  /** A component that renders a stub table row if the row type is not recognized. */
  stubRowComponent?: React.ComponentType<TableBase.RowProps>;
  /** A component that renders a stub table cell if the cell value is not provided. */
  stubCellComponent?: React.ComponentType<TableBase.CellProps>;
  /** A component that renders a stub header cell if the cell value is not provided. */
  stubHeaderCellComponent?: React.ComponentType<TableBase.CellProps>;
  /** An object that specifies the localization messages. */
  messages?: TableBase.LocalizationMessages;
}

/** A plugin that renders Grid data as a table. This plugin enables you to customize table rows and columns, and contains the Table Row and Table Cell components that can be extended by other plugins */
export declare const Table: React.ComponentType<TableProps> & {
  /** A component that renders a table. */
  Table: React.ComponentType<object & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a table head. */
  TableHead: React.ComponentType<object & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a table body. */
  TableBody: React.ComponentType<object & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a table's container. */
  Container: React.ComponentType<object & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a table data cell. */
  Cell: React.ComponentType<TableBase.DataCellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a table data row. */
  Row: React.ComponentType<TableBase.DataRowProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a table cell when the table is empty. */
  NoDataCell: React.ComponentType<TableBase.NoDataCellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a table row when the table is empty. */
  NoDataRow: React.ComponentType<TableBase.RowProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a stub table row. */
  StubRow: React.ComponentType<TableBase.RowProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a stub table cell. */
  StubCell: React.ComponentType<TableBase.CellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a stub table header cell. */
  StubHeaderCell: React.ComponentType<TableBase.CellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// Toolbar
// -------------------------------------------------------------------------------------------------

import {
  Toolbar as ToolbarBase,
} from '@devexpress/dx-react-grid';


export namespace Toolbar {
  /** Describes properties passed to a component that renders the toolbar root element. */
  export type RootProps = ToolbarBase.RootProps;
}

export interface ToolbarProps {
  /** A component that renders the toolbar root element. */
  rootComponent?: React.ComponentType<ToolbarBase.RootProps>;
}

/** A plugin that renders the Grid toolbar. */
export declare const Toolbar: React.ComponentType<ToolbarProps> & {
  /** A component that renders the toolbar root element. */
  Root: React.ComponentType<ToolbarBase.RootProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// VirtualTable
// -------------------------------------------------------------------------------------------------

import {
  VirtualTable as VirtualTableBase,
} from '@devexpress/dx-react-grid';

export interface VirtualTableProps {
  /** The virtual table's height. */
  height?: number | string;
  /** Estimated row height. Specify the average value for a table whose rows have different heights. */
  estimatedRowHeight?: number;
  /** Additional column properties that the plugin can handle. */
  columnExtensions?: Array<TableBase.ColumnExtension>;
  /** A component that renders a table. */
  tableComponent?: React.ComponentType<object>;
  /** A component that renders a table head. */
  headComponent?: React.ComponentType<object>;
  /** A component that renders a table body. */
  bodyComponent?: React.ComponentType<object>;
  /** A component that renders a table footer. */
  footerComponent?: React.ComponentType<object>;
  /** A component that renders a table's container. */
  containerComponent?: React.ComponentType<object>;
  /** A component that renders a table cell. */
  cellComponent?: React.ComponentType<TableBase.DataCellProps>;
  /** A component that renders a table row. */
  rowComponent?: React.ComponentType<TableBase.DataRowProps>;
  /** A component that renders a table cell when the table is empty. */
  noDataCellComponent?: React.ComponentType<TableBase.NoDataCellProps>;
  /** A component that renders a table row when the table is empty. */
  noDataRowComponent?: React.ComponentType<TableBase.RowProps>;
  /** A component that renders a stub table row if the row type is not recognized. */
  stubRowComponent?: React.ComponentType<TableBase.RowProps>;
  /** A component that renders a stub table cell if the cell value is not provided. */
  stubCellComponent?: React.ComponentType<TableBase.CellProps>;
  /** A component that renders a stub header cell if the cell value is not provided. */
  stubHeaderCellComponent?: React.ComponentType<TableBase.CellProps>;
  /** An object that specifies the localization messages. */
  messages?: TableBase.LocalizationMessages;
}

/** A plugin that renders a scrollable table instead of a static table. Contains the VirtualTable.Row and VirtualTable.Cell components that provide ways to customize virtual table rows and columns. These components can be extended by other plugins. */
export declare const VirtualTable: React.ComponentType<VirtualTableProps> & {
  /** A component that renders a table. */
  Table: React.ComponentType<object & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a table head. */
  TableHead: React.ComponentType<object & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a table body. */
  TableBody: React.ComponentType<object & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a table's container. */
  Container: React.ComponentType<object & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** Renders a table data cell. */
  Cell: React.ComponentType<TableBase.DataCellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** Renders a table data row. */
  Row: React.ComponentType<TableBase.DataRowProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** Renders a table cell when the table is empty. */
  NoDataCell: React.ComponentType<TableBase.CellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** Renders a table row when the table is empty. */
  NoDataRow: React.ComponentType<TableBase.RowProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a stub table row. */
  StubRow: React.ComponentType<TableBase.RowProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** Renders a stub table cell. */
  StubCell: React.ComponentType<TableBase.CellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** Renders a stub table header cell. */
  StubHeaderCell: React.ComponentType<TableBase.CellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};
