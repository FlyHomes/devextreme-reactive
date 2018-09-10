import React from 'react';
import PropTypes from 'prop-types';

export const TableSelectRow = ({
  selected,
  children,
  style,
  onToggle,
  selectByRowClick,
  tableRow,
}) => (
  <tr
    style={style}
    className={`${selected ? 'active' : ''} ${tableRow.row && tableRow.row.className}`}
    onClick={(e) => {
      if (!selectByRowClick) return;
      e.stopPropagation();
      onToggle();
    }}
  >
    {children}
  </tr>
);

TableSelectRow.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.node,
  onToggle: PropTypes.func,
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
