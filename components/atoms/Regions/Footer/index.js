/**
 * @module Footer
 * @description
 */
import styles from './index.module.css';

/**
 * @function Footer
 * @description The <footer> tag defines a footer for a document or section.
 * @param {node} children
 * @param {string} className
 * @param {object} props
 */
const Footer = ( {
  children,
  className = '',
  ...props
} ) => (
  <footer
    role="content-info"
    className={ `
      ${ styles.footer }
      ${ className }
    ` }
    { ...props }
  >
    { children }
  </footer>
);

export default Footer;
