/**
 * @module Site Header
 * @description
 */
import Container from '@atoms/Structures/Container';
import Header from '@atoms/Regions/Header';
import HeaderNavigation from '@organisms/Navigation/HeaderNavigation';
import styles from './SiteHeader.module.css';

/**
 * @function SiteHeader
 * @description
 */
const SiteHeader = () => (
  <Header>
    <Container>
      <HeaderNavigation />
    </Container>
  </Header>
);

export default SiteHeader;
