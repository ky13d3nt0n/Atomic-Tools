/**
 * @module Menu
 * @description
 */
import Navigation from '@atoms/Regions/Navigation';
import UnorderedList from '@molecules/Lists/UnorderedList';
import styles from './index.module.css';

/**
 * @function Menu
 * @description
 */
const Menu = ( { children } ) => (
  <Navigation>
    <UnorderedList
      className={ styles.menu }
    >
      { children }
    </UnorderedList>
  </Navigation>
);

export default Menu;
