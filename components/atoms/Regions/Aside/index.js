/**
 * @module Aside
 * @description Atom - Aside
 */
import styles from './index.module.css';

/**
 * @function Aside
 * @description The <aside> tag defines some content aside from the content it is placed in.
 * @param {node} children
 * @param {string} className
 * @param {object} props
 */
const Aside = ( {
  children,
  className = '',
  ...props
} ) => (
  <aside
    role="complementary"
    className={ `
      ${ styles.aside }
      ${ className }
    ` }
    { ...props }
  >
    { children }
  </aside>
);

export default Aside;
