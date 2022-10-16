/**
 * @module Home
 * @description
 */
import Head from 'next/head';
import LandingTemplate from '@templates/Landing';
import Hero from '@organisms/Hero';
import HeroSplit from '@organisms/Hero/HeroSplit';

/**
 * @function Home
 * @description Home
 */
const Home = () => (
  <>
    <Head>
      <title>Home | Atomic Tools</title>
    </Head>

    <LandingTemplate
      hero={
        <>
          <Hero/>
          <HeroSplit />
          <HeroSplit reverseLayout background="hero-2.jpg" />
        </>
      }
      main={
        <>
          Main
        </>
      }
      aside={
        <>
          Aside
        </>
      }
    />
  </>
);

export default Home;
