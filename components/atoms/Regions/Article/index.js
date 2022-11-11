/**
 * @module Article
 * @description Atom - Article
 */
import styles from './index.module.css';

/**
 * @function Article
 * @description The <article> tag specifies independent, self-contained content.
 * @param {node} children
 * @param {string} className
 * @param {object} props
 */
const Article = ( {
  children,
  className = '',
  ...props
} ) => (
  <article
    className={ `
      ${ styles.article }
      ${ className }
    ` }
    { ...props }
  >
    { children }
  </article>
);

export default Article;
