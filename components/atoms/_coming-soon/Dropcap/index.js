/**
 * @module Dropcap
 * @description
 */
import styles from './index.module.css';

/**
 * @function Dropcap
 * @description
 */
const Dropcap = ( {
  children,
  className,
  ...props
} ) => {
  return (
    <em
      className={ `
        ${ styles.dropcap }
        ${ className }
      ` }
      { ...props }
    >
      { children }
    </em>
  );
}

export default Dropcap;
