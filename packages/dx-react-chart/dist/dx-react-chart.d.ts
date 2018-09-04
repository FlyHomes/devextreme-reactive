import * as React from 'react';

// -------------------------------------------------------------------------------------------------
// AreaSeries
// -------------------------------------------------------------------------------------------------

export namespace AreaSeries {
  /** Describes properties passed to a component that renders the series. */
  export interface SeriesProps {
    /** The x coordinate of the top left corner of the series' rendering area. */
    x: number;
    /** The y coordinate of the top left corner of the series' rendering area. */
    y: number;
    /** Coordinates of the series' points. */
    coordinates: Array<{ x: number, y: number, y1: number }>;
    /** A function used to calculate the series' path. */
    path: (coordinates: Array<any>) => string;
  }
}

export interface AreaSeriesProps {
  /** A series name. */
  name: string;
  /** The name of a data field that provides series point values. */
  valueField: string;
  /** The name of a data field that provides series point argument values. */
  argumentField: string;
  /** The associated axis. */
  axisName?: string;
  /** The associated stack. */
  stack?: string;
  /** A component that renders the series. */
  seriesComponent: React.ComponentType<AreaSeries.SeriesProps>;
}

/** The AreaSeries plugin visualizes the area series. */
export declare const AreaSeries: React.ComponentType<AreaSeriesProps>;

// -------------------------------------------------------------------------------------------------
// ArgumentAxis
// -------------------------------------------------------------------------------------------------

export namespace ArgumentAxis {
  /** Describes properties passed to a component that renders the axis's root layout. */
  export interface RootProps {
    /** The x coordinate of the top left corner of the axis's rendering area. */
    x: number;
    /** The y coordinate of the top left corner of the series' rendering area. */
    y: number;
    /** A React node used to render the axis. */
    children: React.ReactNode;
  }
}

export namespace ArgumentAxis {
  /** Describes properties passed to a component that renders a tick line. */
  export interface TickProps {
    /** The x coordinate of the line's start. */
    x1: number;
    /** The x coordinate of the line's end. */
    x2: number;
    /** The y coordinate of the line's start. */
    y1: number;
    /** The y coordinate of the line's end. */
    y2: number;
  }
}

export namespace ArgumentAxis {
  /** Describes properties passed to a component that renders the axis's label. */
  export interface LabelProps {
    /** The label text. */
    text: string | number;
    /** The x coordinate of the label's top left corner. */
    x: number;
    /** The y coordinate of the label's top left corner. */
    y: number;
    /** The label's baseline. */
    dominantBaseline: 'hanging' | 'middle' | 'baseline';
    /** The label's text alignment. */
    textAnchor: 'start' | 'middle' | 'end';
  }
}

export namespace ArgumentAxis {
  /** Describes properties passed to a component that renders the axis's line. */
  export interface LineProps {
    /** The line width. */
    width: number;
    /** The line height. */
    height: number;
    /** The axis orientation. */
    orientation: 'horizontal' | 'vertical';
  }
}

export interface ArgumentAxisProps {
  /** The tick size. */
  tickSize?: number;
  /** The axis position. */
  position?: 'bottom' | 'top';
  /** The axis name. */
  name?: string;
  /** The indent from the axis. */
  indentFromAxis?: number;
  /** Axis type. */
  type?: 'band' | 'linear';
  /** A function that returns a tick formatter function. */
  tickForamt?: (scale: object) => (tick: string) => string;
  /** A component that renders the axis's root layout. */
  rootComponent: React.ComponentType<ArgumentAxis.RootProps>;
  /** A component that renders a tick. */
  tickComponent: React.ComponentType<ArgumentAxis.TickProps>;
  /** A component that renders the axis's label. */
  labelComponent: React.ComponentType<ArgumentAxis.LabelProps>;
  /** A component that renders the axis's line. */
  lineComponent: React.ComponentType<ArgumentAxis.LineProps>;
}

/** The ArgumentAxis plugin visualizes the argument axis. */
export declare const ArgumentAxis: React.ComponentType<ArgumentAxisProps>;

// -------------------------------------------------------------------------------------------------
// BarSeries
// -------------------------------------------------------------------------------------------------

export namespace BarSeries {
  /** Describes properties passed to a component that renders a bar. */
  export interface PointProps {
    /** The bar's x coordinate. */
    x: number;
    /** The bar's y coordinate. */
    y: number;
    /** The bar width. */
    width: number;
    /** The bar height. */
    height: number;
    /** The bar's value. */
    value: number;
  }
}

export interface BarSeriesProps {
  /** A series name. */
  name: string;
  /** The name of a data field that provides series point values. */
  valueField: string;
  /** The name of a data field that provides series point argument values. */
  argumentField: string;
  /** The associated axis. */
  axisName?: string;
  /** The associated stack. */
  stack?: string;
  /** The bar width in relative units. */
  barWidth?: number;
  /** The bar group width in relative units. */
  groupWidth?: number;
  /** A component that renders a bar. */
  pointComponent: React.ComponentType<BarSeries.PointProps>;
}

/** The BarSeries plugin visualizes the bar series. */
export declare const BarSeries: React.ComponentType<BarSeriesProps>;

// -------------------------------------------------------------------------------------------------
// Chart
// -------------------------------------------------------------------------------------------------

export namespace Chart {
  /** Describes properties passed to a component that renders the chart root layout. */
  export interface RootProps {
    /** A React node to be placed in the root layout. */
    children: React.ReactNode;
  }
}

export interface ChartProps {
  /** An array containing custom data. */
  data: Array<any>;
  /** Chart width. */
  width?: number;
  /** Chart height. */
  height?: number;
  /** A component that renders the chart root layout. */
  rootComponent: React.ComponentType<Chart.RootProps>;
}

/** The Chart is a root container component designed to process and display data specified via the `data` property. The Chart's functionality  is implemented in several plugins specified as child components. */
export declare const Chart: React.ComponentType<ChartProps>;

// -------------------------------------------------------------------------------------------------
// Grid
// -------------------------------------------------------------------------------------------------

export namespace Grid {
  /** Describes properties passed to a component that renders a grid line. */
  export interface LineProps {
    /** The line start's x coordinate. */
    x1: number;
    /** The line end's x coordinate. */
    x2: number;
    /** The line start's y coordinate. */
    y1: number;
    /** The line end's y coordinate. */
    y2: number;
  }
}

export interface GridProps {
  /** An axis name. */
  name?: string;
  /** A component that renders a grid line. */
  lineComponent: React.ComponentType<Grid.LineProps>;
}

/** The Grid plugin visualizes a grid for the specified axis. */
export declare const Grid: React.ComponentType<GridProps>;

// -------------------------------------------------------------------------------------------------
// Legend
// -------------------------------------------------------------------------------------------------

export namespace Legend {
  /** Describes properties passed to a component that renders the label. */
  export interface LabelProps {
    /** Item text. */
    text: string | number;
  }
}

export namespace Legend {
  /** Describes properties passed to a component that renders the legend's root layout. */
  export interface RootProps {
    /** A React node used to render the legend's root layout. */
    children: React.ReactNode;
  }
}

export namespace Legend {
  /** Describes properties passed to a component that renders a legend item. */
  export interface ItemProps {
    /** A React node used to render an item. */
    children: React.ReactNode;
  }
}

export interface LegendProps {
  /** A component that renders a marker. */
  markerComponent: React.ComponentType<object>;
  /** A component that renders the legend label. */
  labelComponent: React.ComponentType<Legend.LabelProps>;
  /** A component that renders the legend's root layout. */
  rootComponent: React.ComponentType<Legend.RootProps>;
  /** A component that renders a legend item. */
  itemComponent: React.ComponentType<Legend.ItemProps>;
  /** The legend position. */
  position?: 'left' | 'right' | 'top' | 'bottom';
}

/** The Legend plugin visualizes the legend. */
export declare const Legend: React.ComponentType<LegendProps>;

// -------------------------------------------------------------------------------------------------
// LineSeries
// -------------------------------------------------------------------------------------------------

export namespace LineSeries {
  /** Describes properties passed to a component that renders the series. */
  export interface SeriesProps {
    /** The x coordinate of the top left corner of the series' rendering area. */
    x: number;
    /** The y coordinate of the top left corner of the series' rendering area. */
    y: number;
    /** Coordinates of the series' points. */
    coordinates: Array<{ x: number, y: number }>;
    /** A function used to calculate the series' path. */
    path: (coordinates: Array<any>) => string;
  }
}

export interface LineSeriesProps {
  /** A series name. */
  name: string;
  /** The name of a data field that provides series point values. */
  valueField: string;
  /** The name of a data field that provides series point argument values. */
  argumentField: string;
  /** The associated axis. */
  axisName?: string;
  /** The associated stack. */
  stack?: string;
  /** A component that renders the series. */
  seriesComponent: React.ComponentType<LineSeries.SeriesProps>;
}

/** The LineSeries plugin visualizes the line series. */
export declare const LineSeries: React.ComponentType<LineSeriesProps>;

// -------------------------------------------------------------------------------------------------
// PieSeries
// -------------------------------------------------------------------------------------------------

export namespace PieSeries {
  /** Describes properties passed to a component that renders the slice. */
  export interface PointProps {
    /** The slice's x coordinate. */
    x: number;
    /** The slice's y coordinate. */
    y: number;
    /** The slice's path(https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d). */
    d: string;
    /** The slice's value. */
    value: number;
  }
}

export interface PieSeriesProps {
  /** A series name. */
  name: string;
  /** The name of a data field that provides series point values. */
  valueField: string;
  /** The name of a data field that provides series point argument values. */
  argumentField: string;
  /** The inner radius in relative units. */
  innerRadius?: number;
  /** The outer radius in relative units. */
  outerRadius?: number;
  /** A component that renders a slice. */
  pointComponent: React.ComponentType<PieSeries.PointProps>;
}

/** The PieSeries plugin visualizes pie series. */
export declare const PieSeries: React.ComponentType<PieSeriesProps>;

// -------------------------------------------------------------------------------------------------
// Scale
// -------------------------------------------------------------------------------------------------

/**  */
export interface scaleOptions {
  /** A scale type. */
  type?: string;
  /** A function that constructs a custom scale. */
  constructor?: () => object;
}

export interface ScaleProps {
  /** An array of scales with constructors. */
  extensions?: Array<scaleOptions>;
}

/** The `Scale` plugin extends user data with service information that is required to render axes and series. */
export declare const Scale: React.ComponentType<ScaleProps>;

// -------------------------------------------------------------------------------------------------
// ScatterSeries
// -------------------------------------------------------------------------------------------------

export namespace ScatterSeries {
  /** Describes properties passed to a component that renders the point. */
  export interface PointProps {
    /** The point's x coordinate. */
    x: number;
    /** The point's y coordinate. */
    y: number;
    /** The point's path(https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d). */
    d: string;
    /** The point's value. */
    value: number;
  }
}

export namespace ScatterSeries {
  /** Describes properties passed to a component that renders the series. */
  export interface SeriesProps {
    /** A component that renders a series point. */
    pointComponent: React.ComponentType<ScatterSeries.PointProps>;
    /** Coordinates of the series' points. */
    coordinates: Array<{ x: number, y: number }>;
    /** Point options. */
    point?: { size : number };
  }
}

export interface ScatterSeriesProps {
  /** A series name. */
  name: string;
  /** The name of a data field that provides series point values. */
  valueField: string;
  /** The name of a data field that provides series point argument values. */
  argumentField: string;
  /** The associated axis. */
  axisName?: string;
  /** Point options. */
  point?: { size : number };
  /** A component that renders a series point. */
  pointComponent: React.ComponentType<ScatterSeries.PointProps>;
}

/** The ScatterSeries plugin visualizes the scatter series. */
export declare const ScatterSeries: React.ComponentType<ScatterSeriesProps>;

// -------------------------------------------------------------------------------------------------
// SplineSeries
// -------------------------------------------------------------------------------------------------

export namespace SplineSeries {
  /** Describes properties passed to a component that renders the series. */
  export interface SeriesProps {
    /** The x coordinate of the top left corner of the series' rendering area. */
    x: number;
    /** The y coordinate of the top left corner of the series' rendering area. */
    y: number;
    /** Coordinates of the series' points. */
    coordinates: Array<{ x: number, y: number }>;
    /** A function used to calculate the series' path. */
    path: (coordinates: Array<any>) => string;
  }
}

export interface SplineSeriesProps {
  /** A series name. */
  name: string;
  /** The name of a data field that provides series point values. */
  valueField: string;
  /** The name of a data field that provides series point argument values. */
  argumentField: string;
  /** The associated axis. */
  axisName?: string;
  /** The associated stack. */
  stack?: string;
  /** A component that renders the series. */
  seriesComponent: React.ComponentType<SplineSeries.SeriesProps>;
}

/** The SplineSeries plugin visualizes the spline series. */
export declare const SplineSeries: React.ComponentType<SplineSeriesProps>;

// -------------------------------------------------------------------------------------------------
// Stack
// -------------------------------------------------------------------------------------------------

/** SeriesData contains data for a single series. It is array of points . Each point is an array that defines the baseline and a value. For example, following array specifies a series containing points with values 10, 20, and 30 and baseline at 0: [[0, 10], [0, 20], [0, 30]]. */
export interface SeriesData {
}

export interface StackProps {
  /** A function that gets an array of series data and returns the series order. */
  order?: (data: Array<SeriesData>) => { [index: number]: number };
  /** A function that adds the appropriate offsets to series data array depending on the series order. */
  offset?: (data: Array<SeriesData>, order: { [index: number]: number }) => void;
}

/** The `Stack` plugin is used to display series points side-by-side or one under another other. */
export declare const Stack: React.ComponentType<StackProps>;

// -------------------------------------------------------------------------------------------------
// Title
// -------------------------------------------------------------------------------------------------

export namespace Title {
  /** Describes properties passed to a component that renders the title. */
  export interface TextProps {
    /** The title text. */
    text: string;
  }
}

export interface TitleProps {
  /** A component that renders the title. */
  textComponent: React.ComponentType<Title.TextProps>;
  /** The title text. */
  text: string;
  /** The title position. */
  position?: 'top' | 'bottom' | 'left' | 'right';
}

/** The Title plugin renders the chart title. */
export declare const Title: React.ComponentType<TitleProps>;

// -------------------------------------------------------------------------------------------------
// ValueAxis
// -------------------------------------------------------------------------------------------------

export namespace ValueAxis {
  /** Describes properties passed to a component that renders the axis root layout. */
  export interface RootProps {
    /** The x coordinate of the top left corner of the axis' rendering area. */
    x: number;
    /** The y coordinate of the top left corner of the series' rendering area. */
    y: number;
    /** A React node used to render the axis. */
    children: React.ReactNode;
  }
}

export namespace ValueAxis {
  /** Describes properties passed to a component that renders a tick line. */
  export interface TickProps {
    /** The line start's x coordinate. */
    x1: number;
    /** The line end's x coordinate. */
    x2: number;
    /** The line start's y coordinate. */
    y1: number;
    /** The line end's y coordinate. */
    y2: number;
  }
}

export namespace ValueAxis {
  /** Describes properties passed to a component that renders the axis label. */
  export interface LabelProps {
    /** The label text. */
    text: string | number;
    /** The x coordinate of the label's top left corner. */
    x: number;
    /** The y coordinate of the label's top left corner. */
    y: number;
    /** The label's baseline. */
    dominantBaseline: 'hanging' | 'middle' | 'baseline';
    /** The label's text alignment. */
    textAnchor: 'start' | 'middle' | 'end';
  }
}

export namespace ValueAxis {
  /** Describes properties passed to a component that renders the axis line. */
  export interface LineProps {
    /** The line width. */
    width: number;
    /** The line height. */
    height: number;
    /** The axis orientation. */
    orientation: 'horizontal' | 'vertical';
  }
}

export interface ValueAxisProps {
  /** The tick size. */
  tickSize?: number;
  /** The axis position. */
  position?: 'left' | 'right';
  /** The axis name. */
  name: string;
  /** The indent from the axis. */
  indentFromAxis?: number;
  /** Axis type. */
  type?: 'band' | 'linear';
  /** A function that returns a tick formatter function. */
  tickForamt?: (scale: object) => (tick: string) => string;
  /** A component that renders the axis root layout. */
  rootComponent: React.ComponentType<ValueAxis.RootProps>;
  /** A component that renders a tick. */
  tickComponent: React.ComponentType<ValueAxis.TickProps>;
  /** A component that renders the axis label. */
  labelComponent: React.ComponentType<ValueAxis.LabelProps>;
  /** A component that renders the axis line. */
  lineComponent: React.ComponentType<ValueAxis.LineProps>;
}

/** The ValueAxis plugin visualizes the value axis. */
export declare const ValueAxis: React.ComponentType<ValueAxisProps>;
