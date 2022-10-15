/**
 * @module Home
 * @description Home Page
 */
import Head from 'next/head';
import Container from '@atoms/Layouts/Container';

/**
 * @function Page
 * @description Page
 */
const Page = () => (
  <>
    <Head>
      <title>Home | Atomic Tools</title>
    </Head>

    <Container>
      <h1>Container</h1>
    </Container>

    <Container weightedRight>
      <h1>Container</h1>
    </Container>

    <Container weightedLeft>
      <h1>Container</h1>
    </Container>
  </>
);

export default Page;
