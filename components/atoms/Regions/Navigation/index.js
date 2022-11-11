/**
 * @module Navigation
 * @description Atom - Navigation
 */
import styles from './index.module.css';

/**
 * @function Navigation
 * @description
 * @param {node} children
 * @param {string} className
 * @param {object} props
 */
const Navigation = ( {
  children,
  className = '',
  ...props
 } ) => (
  <nav
    role="navigation"
    className={ `
      ${ styles.navigation }
      ${ className }
    `}
    { ...props }
  >
    { children }
  </nav>
);

export default Navigation;
