/**
 * @module Code
 * @description
 */
import styles from './index.module.css';

/**
 * @function Code
 * @description
 */
const Code = ( {
  children,
  className,
  ...props
} ) => {
  return (
    <code
      className={ `
        ${ styles.code }
        ${ className }
      ` }
      { ...props }
    >
      { children }
    </code>
  );
}

export default Code;
