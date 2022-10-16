/**
 * @module Row
 * @description
 */
import useConditionalClasses from '@hooks/useConditionalClasses';
import styles from './Row.module.css';

/**
 * @function Row
 * @description
 */
const Row = ( {
  children,
  className = '',
  matchHeight,
  pullRight,
  reorder2Col,
  center, verticalCenter,
  noGutters, noWrap,
  spaceEvenly, spaceAround, spaceBetween,
  fixedCol2, fixedCol3, fixedCol4, fixedCol5
 } ) => {
  const classes = {
    matchHeight,
    pullRight,
    reorder2Col,
    center, verticalCenter,
    noGutters, noWrap,
    spaceEvenly, spaceAround, spaceBetween,
    fixedCol2, fixedCol3, fixedCol4, fixedCol5
  };
  const modifierClasses = useConditionalClasses( styles, classes );

  return (
    <div
      className={ `
        ${ styles.row }
        ${ modifierClasses }
        ${ className }
      ` }
    >
      { children }
    </div>
  );
};

export default Row;
