/**
 * @module KBD
 * @description
 */
import styles from './index.module.css';

/**
 * @function Lead
 * @description
 */
const Kbd = ( {
  children,
  className,
  ...props
} ) => {
  return (
    <kbd
      className={ `
        ${ styles.kbd }
        ${ className }
      ` }
      { ...props }
      >
      { children }
    </kbd>
  );
}

export default Kbd;
