/**
 * @module Header
 * @description
 */
import styles from './Header.module.css';

/**
 * @function Header
 * @description
 */
const Header = ( { children } ) => (
  <header
    role="header"
    className={ styles.header }
  >
    { children }
  </header>
);

export default Header;
