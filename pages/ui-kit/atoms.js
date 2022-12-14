/**
 * @module Typography
 * @description UI Kit
 */
import { useEffect } from 'react';
import Head from 'next/head';
import Container from '@atoms/Structures/Container';
import Row from '@atoms/Structures/Row';
import Column from '@atoms/Structures/Column';

import Heading from '@atoms/Typography/Heading';
import Button from '@atoms/Inputs/Button';
import styles from './layouts.module.css';

/**
 * @function Page
 * @description Grid Examples
 */
const Page = () => {
  return (
    <>
      <Head>
        <title>Typography | Atomic Tools</title>
      </Head>

      <Container className={ styles.colorKey }>
        <Heading level="1" className="text-line">Atoms</Heading>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.colorKey }>
        <Heading level="1" className="text-line">Typography</Heading>
        <Heading level="1" content="Heading Level 1" />
        <Heading level="2" content="Heading Level 2" />
        <Heading level="3" content="Heading Level 3" />
        <Heading level="4" content="Heading Level 4" />
        <Heading level="5" content="Heading Level 5" />
        <Heading level="6" content="Heading Level 6" />
      </Container>

      <Container className={ styles.colorKey }>
        <Heading level="1" className="text-line">Buttons</Heading>
        <Button>Button Default</Button>

        <Heading level="2" content="Contextual Variations" />
        <Button primary>Button Primary</Button>
        <Button secondary>Button Secondary</Button>
        <Button tertiary>Button Tertiary</Button>

        <Heading level="2" content="Disabled" />
        <Button disabled>Button Disabled</Button>

        <Heading level="2" content="Sizes" />
        <Button large>Button Large</Button>
        <Button medium>Button Medium</Button>
        <Button small>Button Small</Button>

        <Heading level="2" content="Block" />
        <Button block>Button Block</Button>
        <Button block>Button Block</Button>
        <Button blockOnlySM>Button Block</Button>
      </Container>
    </>
  );
};

export default Page;
