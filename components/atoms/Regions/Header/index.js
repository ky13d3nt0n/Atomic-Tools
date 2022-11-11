/**
 * @module Header
 * @description Atom - Header
 */
import styles from './index.module.css';

/**
 * @function Header
 * @description The <header> element represents a container for introductory content or a set of navigational links.
 * @param {node} children
 * @param {string} className
 * @param {object} props
 */
const Header = ( {
  children,
  className = '',
  ...props
} ) => (
  <header
    role="header"
    className={ `
      ${ styles.header }
      ${ className }
    ` }
    { ...props }
  >
    { children }
  </header>
);

export default Header;
