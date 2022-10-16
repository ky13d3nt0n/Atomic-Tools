/**
 * @module Divider
 * @description
 */
import styles from './index.module.css';

/**
 * @function Divider
 * @description
 */
const Divider = ( {
  children,
  className = '',
} ) => {
  return (
    <hr className={ styles.divider } />
  );
}

export default Divider;
