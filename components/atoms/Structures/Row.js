/**
 * @module Row
 * @description
 */
import styles from './Row.module.css';

/**
 * @function Row
 * @description
 */
const Row = ( {
  children,
  className,
  center = '',
  noGutters = '',
  noWrap = '',
  pullRight = '',
  spaceEvenly = '',
  spaceAround = '',
  spaceBetween = '',
  matchHeight = '',
  verticalCenter = ''
 } ) => {
  return (
    <div
      className={ `
        ${ styles.row }
        ${ className }
        ${ center && styles.center }
        ${ verticalCenter && styles.verticalCenter }
        ${ noGutters && styles.noGutters }
        ${ noWrap && styles.noWrap }
        ${ pullRight && styles.pullRight }
        ${ spaceEvenly && styles.spaceEvenly }
        ${ spaceAround && styles.spaceAround }
        ${ spaceBetween && styles.spaceBetween }
        ${ matchHeight && styles.matchHeight }
      ` }
    >
      { children }
    </div>
  );
};

export default Row;
