/**
 * @module Small
 * @description Atom - Strong
 */
import styles from './index.module.css';

/**
 * @function Small
 * @description The <small> tag defines smaller text (like copyright and other side-comments).
 * @param {node} children
 * @param {string} className
 * @param {object} props
 */
const Small = ( {
  children,
  className = '',
  ...props
} ) => (
    <small
      className={ `
        ${ styles.small }
        ${ className }
      ` }
      { ...props }
      >
      { children }
    </small>
  );
}

export default Small;
