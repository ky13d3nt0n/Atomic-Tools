/**
 * @module Ordered List
 * @description
 */
import styles from './OrderedList.module.css';

/**
 * @function OrderedList
 * @description
 */
const OrderedList = ( {
  children,
  className = ''
} ) => {
  return (
    <ol
      className={ `
        ${ styles.list }
        ${ className }
      ` }
    >
      { children }
    </ol>
  );
}

export default OrderedList;
