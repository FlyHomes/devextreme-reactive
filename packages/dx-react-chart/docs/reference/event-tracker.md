# EventTracker Plugin Reference

The `EventTracker` plugin allows you to handle a click on the chart's plot.

## Import

Use the following statement to import the plugin:

```js
import { EventTracker } from '@devexpress/dx-react-chart';
```

## User Reference

### Properties

Name | Type | Default | Description
-----|------|---------|------------
onClick? | (target: [ClickData](#clickdata)) => void | | A function that is executed when the chart's plot is clicked.

## Interfaces

### ClickData

The click event data.

Field | Type | Description
------|------|------------
location | Array&lt;number&gt; | The clicked point's coordinates `[x, y]` (relative to the chart's plot).
targets | Array&lt;[SeriesRef](#seriesref)&gt; | An array of clicked series.

### SeriesRef

The object that points at a clicked series.

Field | Type | Description
------|------|------------
series | string | Series name.
index? | number | The point's index within the `data` array (`undefined` if no series points are clicked).
