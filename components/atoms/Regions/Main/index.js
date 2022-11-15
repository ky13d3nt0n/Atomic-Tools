/**
 * @module Main
 * @description
 */
import styles from './index.module.css';

/**
 * @function Main
 * @description The <main> tag specifies the main content of a document.
 * @param {node} children
 * @param {string} className
 * @param {object} props
 */
const Main = ( {
  children,
  className = '',
  ...props
} ) => (
  <main
    role="main"
    className={ `
      ${ styles.main }
      ${ className }
    ` }
    { ...props }
  >
    { children }
  </main>
);

export default Main;
