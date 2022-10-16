/**
 * @module Aside
 * @description
 */
import styles from './Aside.module.css';

/**
 * @function Aside
 * @description
 */
const Aside = ( { children } ) => (
  <aside className={ styles.aside } role="complementary">
    { children }
  </aside>
);

export default Aside;
