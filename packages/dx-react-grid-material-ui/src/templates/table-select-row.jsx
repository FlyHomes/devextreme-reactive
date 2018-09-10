import React from 'react';
import PropTypes from 'prop-types';
import { TableRow } from 'material-ui/Table';

export const TableSelectRow = ({
  selected,
  children,
  style,
  onToggle,
  selectByRowClick,
  tableRow,
}) => (
  <TableRow
    style={style}
    selected={selected}
    className={tableRow && tableRow.row && tableRow.row.className}
    onClick={(e) => {
      if (!selectByRowClick) return;
      e.stopPropagation();
      onToggle();
    }}
  >
    {children}
  </TableRow>
);

TableSelectRow.propTypes = {
  children: PropTypes.node,
  onToggle: PropTypes.func,
  selected: PropTypes.bool,
  selectByRowClick: PropTypes.bool,
  style: PropTypes.object,
  tableRow: PropTypes.object,
};

TableSelectRow.defaultProps = {
  children: null,
  onToggle: () => {},
  selected: false,
  selectByRowClick: false,
  style: null,
  tableRow: null,
};
