/**
 * @module Default
 * @description
 */
import SiteHeader from '@organisms/Regions/SiteHeader';
import SiteFooter from '@organisms/Regions/SiteFooter';
import Container from '@atoms/Structures/Container';
import Main from '@atoms/Regions/Main';
import Aside from '@atoms/Regions/Aside';
import styles from './Default.module.css';

/**
 * @function DefaultTemplate
 * @description
 */
const DefaultTemplate = ( {
  hero,
  main,
  aside
} ) => (
  <>
    <SiteHeader />

    { hero }

    <Container weightedLeft>
      <Main>
        { main }
      </Main>

      <Aside>
        { aside }
      </Aside>
    </Container>

    <SiteFooter />
  </>
);

export default DefaultTemplate;
