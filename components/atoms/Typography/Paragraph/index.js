/**
 * @module Paragraph
 * @description Atom - Paragraph
 */
import styles from './Paragraph.module.css';

/**
 * @function Paragraph
 * @description The HTML <p> element defines a paragraph.
 * @param {node} children
 * @param {string} className
 * @param {object} props
 */
const Paragraph = ( {
  children,
  className = '',
  ...props
} ) => (
  <p
    className={ `
      ${ styles.paragraph }
      ${ className }
    ` }
    { ...props }
  >
    { children }
  </p>
);

export default Paragraph;
