import * as React from 'react';
import * as PropTypes from 'prop-types';
import TableRowMUI from '@material-ui/core/TableRow';

export const TableRow = ({
  children,
  row, tableRow,
  ...restProps
}) => (
  <TableRowMUI
    {...restProps}
    className={`${restProps.className ? restProps.className : null} ${row ? row.className : null}`}
  >
    {children}
  </TableRowMUI>
);

TableRow.propTypes = {
  children: PropTypes.node,
  row: PropTypes.any,
  tableRow: PropTypes.object,
};

TableRow.defaultProps = {
  children: undefined,
  row: undefined,
  tableRow: undefined,
};
