/**
 * @module List Item
 * @description
 */
import styles from './ListItem.module.css';

/**
 * @function ListItem
 * @description
 */
const ListItem = ( {
  children,
  content,
  className = '',
} ) => {
  return (
    <li
      className={ `
        ${ styles.li }
        ${ className }
      ` }
    >
      { content }
      { children }
    </li>
  );
}

export default ListItem;
