/**
 * @module Landing
 * @description
 */
import SiteHeader from '@organisms/Regions/SiteHeader';
import SiteFooter from '@organisms/Regions/SiteFooter';
import Container from '@atoms/Structures/Container';
import Main from '@atoms/Regions/Main';
import styles from './Landing.module.css';

/**
 * @function LandingTemplate
 * @description
 */
const LandingTemplate = ( {
  hero,
  main
} ) => (
  <>
    <SiteHeader />

    { hero }

    <Container>
      <Main>
        { main }
      </Main>
    </Container>

    <SiteFooter />
  </>
);

export default LandingTemplate;
