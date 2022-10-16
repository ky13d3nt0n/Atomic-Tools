/**
 * @module Site Footer
 * @description
 */
import Container from '@atoms/Structures/Container';
import Footer from '@atoms/Regions/Footer';
import FooterNavigation from '@organisms/Navigation/FooterNavigation';
import styles from './SiteHeader.module.css';

/**
 * @function SiteFooter
 * @description
 */
const SiteFooter = () => (
  <Footer>
    <Container>
      <FooterNavigation />
    </Container>
  </Footer>
);

export default SiteFooter;
