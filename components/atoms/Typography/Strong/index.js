/**
 * @module Strong
 * @description Atom - Strong
 */
import styles from './index.module.css';

/**
 * @function Strong
 * @description The <strong> tag is used to define text with strong importance. The content inside is typically displayed in bold.
 * @param {node} children
 * @param {string} className
 * @param {object} props
 */
const Strong = ( {
  children,
  className = '',
  ...props
} ) => {
  return (
    <strong
      className={ `
        ${ style.strong }
        ${ className }
      ` }
      { ...props }
      >
      { children }
    </strong>
  );
}

export default Strong;
