/**
 * @module Section
 * @description Atom - Section
 */
import styles from './index.module.css';

/**
 * @function Section
 * @description The <section> tag defines a section in a document.
 * @param {node} children
 * @param {string} className
 * @param {object} props
 */
const Section = ( {
  children,
  className = '',
  ...props
} ) => (
  <section
    className={ `
      ${ styles.section }
      ${ className }
    ` }
    { ...props }
  >
    { children }
  </section>
);

export default Section;
