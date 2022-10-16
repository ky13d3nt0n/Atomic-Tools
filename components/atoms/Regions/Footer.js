/**
 * @module Footer
 * @description
 */
import styles from './Footer.module.css';

/**
 * @function Footer
 * @description
 */
const Footer = ( { children } ) => (
  <footer
    role="content-info"
    className={ styles.footer }
  >
    { children }
  </footer>
);

export default Footer;
