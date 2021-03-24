import React, { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import capitalize from "lodash/capitalize";

import { withStyles } from "@material-ui/core";
import styles from "./styles";
import TableContext from "../TableContext";
import TableSectionContext from "../TableSectionContext";

const defaultComponent = "td";

/**
 * `HvTableCell` acts as a `td` element and inherits styles from its context
 */
const HvTableCell = forwardRef(function HvTableCell(props, ref) {
  const {
    children,

    component,

    className,
    style,
    classes,

    align: alignProp,
    padding: paddingProp,

    variant: variantProp,

    stickyColumn = false,
    stickyColumnMostLeft = false,
    stickyColumnLeastRight = false,

    rtCol = {},

    ...others
  } = props;

  const tableContext = useContext(TableContext);
  const tableSectionContext = useContext(TableSectionContext);
  const { align: rtAlign, padding: rtPadding } = rtCol;

  const variant = variantProp ?? tableSectionContext?.variant;

  const align = alignProp ?? rtAlign ?? "inherit";
  const padding = paddingProp ?? rtPadding ?? tableSectionContext?.padding ?? "default";

  const Component = component || tableContext?.components?.Td || defaultComponent;

  return (
    <Component
      ref={ref}
      role={Component === defaultComponent ? null : "cell"}
      style={style}
      className={clsx(className, classes.root, classes[variant], {
        [classes[`align${capitalize(align)}`]]: align !== "inherit",
        [classes[`padding${capitalize(padding)}`]]: padding !== "default",

        [classes.stickyColumn]: stickyColumn,
        [classes.stickyColumnMostLeft]: stickyColumnMostLeft,
        [classes.stickyColumnLeastRight]: stickyColumnLeastRight,
      })}
      {...others}
    >
      {children}
    </Component>
  );
});

HvTableCell.propTypes = {
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   * Defaults to td.
   */
  component: PropTypes.elementType,

  /**
   * Content to be rendered
   */
  children: PropTypes.node,

  /**
   * Class names to be applied.
   */
  className: PropTypes.string,
  /**
   * Inline styles to be applied to the root element.
   */
  style: PropTypes.instanceOf(Object),

  /**
   * Set the text-align on the table cell content.
   */
  align: PropTypes.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * Sets the padding applied to the cell.
   * By default, the Table parent component set the value, which is the default padding specified by Design System.
   */
  padding: PropTypes.oneOf(["checkbox", "default", "none"]),

  /**
   * Specify the cell type.
   * The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.
   */
  variant: PropTypes.oneOf(["body", "footer", "head"]),

  /**
   * The cell is part of a sticky column.
   */
  stickyColumn: PropTypes.bool,
  /**
   * The cell is part of the last sticky to the left column.
   */
  stickyColumnMostLeft: PropTypes.bool,
  /**
   * The cell is part of the first sticky to the right column.
   */
  stickyColumnLeastRight: PropTypes.bool,

  /**
   * React Table column instance. Also contains other props passed as `data`
   * https://react-table.tanstack.com/docs/api/useTable#column-options
   */
  rtCol: PropTypes.instanceOf(Object),

  /**
   * A Jss Object used to override or extend the styles applied.
   */
  classes: PropTypes.shape({
    /**
     * Styles applied to the component root class.
     */
    root: PropTypes.string,

    /**
     * Styles applied to the cell when it's in the table head.
     */
    head: PropTypes.string,
    /**
     * Styles applied to the cell when it's in the table body.
     */
    body: PropTypes.string,
    /**
     * Styles applied to the cell when it's in the table footer.
     */
    footer: PropTypes.string,

    /**
     * Styles applied to the cell when it's part of a sticky column.
     */
    stickyColumn: PropTypes.string,
    /**
     * Styles applied to the cell when it's part of the last sticky to the left column.
     */
    stickyColumnMostLeft: PropTypes.string,
    /**
     * Styles applied to the cell when it's part of the first right sticky column.
     */
    stickyColumnLeastRight: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles, { name: "HvTableCell" })(HvTableCell);
