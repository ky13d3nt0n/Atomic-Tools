/**
 * @module SiteNavigation
 * @description
 */
import Anchor from '@atoms/Typography/Anchor';
import Menu from '@molecules/Menu';
import MenuItem from '@molecules/Menu/MenuItem';
import styles from './HeaderNavigation.module.css';

const links = [
  { title: 'Home', href: '#' },
  { title: 'About', href: '/about' },
  { title: 'Services', href: '/services' }
];

/**
 * @function SiteNavigation
 * @description
 */
const SiteNavigation = () => (
  <Menu>
    { links.map( ( link, index ) => {
      const { title, href } = link;
      return (
        <MenuItem key={ index }>
          <Anchor href={ href } title={ title } />
        </MenuItem>
      );
    } ) }
  </Menu>
);

export default SiteNavigation;
