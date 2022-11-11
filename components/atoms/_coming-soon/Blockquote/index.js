/**
 * @module Blockquote
 * @description
 */
import styles from './index.module.css';

/**
 * @function Blockquote
 * @description
 */
const Blockquote = ( {
  children,
  ...props
} ) => {
  return (
    <blockquote
      className={ `
        ${ styles.blockquote }
        ${ className }
      `}
      { ...props }
      >
      { children }
    </blockquote>
  );
}

export default Blockquote;
