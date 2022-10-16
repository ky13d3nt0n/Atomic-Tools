/**
 * @module Icon
 * @description
 */
import styles from './Icon.module.css';

/**
 * @function Icon
 * @description
 */
const Icon = ( {
  icon,
  className = ''
} ) => ( <i className={ `${ styles.icon } ${ icon } ${ className }` } /> );

export default Icon;
