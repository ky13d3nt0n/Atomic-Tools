/**
 * @module Menu Item
 * @description
 */
import styles from './MenuItem.module.css';

/**
 * @function MenuItem
 * @description
 */
const MenuItem = ( { children } ) => ( <li className={ styles.li }>{ children }</li> );

export default MenuItem;
