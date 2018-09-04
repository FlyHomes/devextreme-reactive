import * as React from 'react';
import * as PropTypes from 'prop-types';

export const TableRow = ({
  children, row, tableRow,
  ...restProps
}) => (
  <tr
    {...restProps}
    className={`${restProps.className ? restProps.className : null} ${row ? row.className : null}`}
  >
    {children}
  </tr>
);

TableRow.propTypes = {
  children: PropTypes.node,
  row: PropTypes.any,
  tableRow: PropTypes.object,
};

TableRow.defaultProps = {
  children: null,
  row: undefined,
  tableRow: undefined,
};
