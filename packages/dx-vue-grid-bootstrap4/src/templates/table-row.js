export const TableRow = {
  name: 'TableRow',
  props: {
    row: null,
    tableRow: {
      type: Object,
    },
  },
  render() {
    return (
      <tr
        {...{ attrs: this.$attrs, on: this.$listeners }}
        class={`${this.$attrs.class} ${this.row ? this.row.classname : null}`}
      >
        {this.$slots.default}
      </tr>
    );
  },
};
