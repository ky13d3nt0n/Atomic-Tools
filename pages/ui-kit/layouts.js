/**
 * @module Grid
 * @description UI Kit
 */
import { useEffect } from 'react';
import Head from 'next/head';
import Container from '@atoms/Structures/Container';
import Row from '@atoms/Structures/Row';
import Column from '@atoms/Structures/Column';
import styles from './layouts.module.css';

/**
 * @function Page
 * @description Grid Examples
 */
const Page = () => {
  return (
    <>
      <Head>
        <title>Grids | Atomic Tools</title>
      </Head>

      <Container className={ styles.colorKey }>
        <h1 className="text-line">Grid</h1>
        <p className="lead">Key</p>
        <p>Containers are <span className={ styles.bgRed }>red</span>. Rows are <span className={ styles.bgBlack }>black</span>. Columns are <span className={ styles.bgWhite }>white</span>.</p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Default Container</p>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;&lt;/Container&gt;
        </pre>

        <p>Grid width is variable, inspect to check out <code>var( --grid-width-default );</code> property set on the container.</p>
        <p>Container does have padding that keeps content aligned if no rows or columns are within.</p>
      </Container>

      <Container className={ styles.exampleContainer }>
        <Row className={ styles.exampleRow } center>
          <p className={ styles.exampleGridTitle }>Default Container + Row</p>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&gt;&lt;/Row&gt;<br/>
          &lt;/Container&gt;<br/>
        </pre>

        <p>Row has a negative margin to allow for columns to take advantage of full size of container.</p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Default Container + Row + Col</p>
        <Row className={ styles.exampleRow } center>
          <Column className={ styles.exampleCol }>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol }>
            <p>Column Two</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column&gt;Column One&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column&gt;Column Two&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;<br/>
          &lt;/Container&gt;<br/>
        </pre>

        <p>Columns without modifier classes are full-width by default.</p>
        <p>Default padding within columns give the content room to breathe, but also keep everything aligned to any content that isn't placed within columns.</p>
      </Container>


{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container>
        <h1 className="text-line">Container Layouts</h1>
      </Container>

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Weighted-Left</p>
        <Container weightedLeft>
          <main>
            <pre>Main</pre>

            <pre className={ styles.examplePre }>
              &lt;Container weightedLeft&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;main&gt;&lt;/main&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;aside&gt;&lt;/aside&gt;<br/>
              &lt;/Container&gt;<br/>
            </pre>

            <p>Weighted-left is useful for setting up full-page layouts that contain body-content and a sidebar.</p>
            <p>Notice there is no need for rows or columns.</p>
          </main>
          <aside>
            <pre>Sidebar</pre>
          </aside>
        </Container>
      </Container>

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Weighted-Right</p>
        <Container weightedRight>
          <aside>
            <pre>Sidebar</pre>
          </aside>
          <main>
            <pre>Main</pre>

            <pre className={ styles.examplePre }>
              &lt;Container weightedRight&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;aside&gt;&lt;/aside&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;main&gt;&lt;/main&gt;<br/>
              &lt;/Container&gt;<br/>
            </pre>

            <p>Weighted-right allows you to do the reverse of the weighted-left layout.</p>
          </main>
        </Container>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container>
        <h1 className="text-line">Dynamic Columns</h1>
      </Container>

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>2 Columns</p>
        <Row className={ styles.exampleRow }>
          <Column className={ styles.exampleCol } oneHalf>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } oneHalf>
            <p>Column Two</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneHalf&gt;Column One&lt;/Column One&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneHalf&gt;Column Two&lt;/Column Two&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;<br/>
          &lt;/Container&gt;<br/>
        </pre>

        <p>Columns <strong>without</strong> viewport modifiers will stack on mobile up to tablet.</p>
        <p>Next example demonstrates viewport modifier <code>.g-col--one-half<strong>--large</strong></code></p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>2 Columns (Large)</p>
        <Row className={ styles.exampleRow }>
          <Column className={ styles.exampleCol } oneHalfLarge>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } oneHalfLarge>
            <p>Column Two</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneHalfLarge&gt;Column One&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneHalfLarge&gt;Column Two&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;<br/>
          &lt;/Container&gt;<br/>
        </pre>

        <p>Columns <strong>with</strong> viewport modifiers <code>oneHalfLarge</code> will stack on mobile up to desktop.</p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>3 Columns</p>
        <Row className={ styles.exampleRow }>
          <Column className={ styles.exampleCol } oneThird>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } oneThird>
            <p>Column Two</p>
          </Column>
          <Column className={ styles.exampleCol } oneThird>
            <p>Column Three</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneThird&gt;Column One&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneThird&gt;Column Two&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneThird&gt;Column Three&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;<br/>
          &lt;/Container&gt;<br/>
        </pre>

        <p>Modifier props include: <code>oneThirdLarge</code></p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>4 Columns</p>
        <Row className={ styles.exampleRow }>
          <Column className={ styles.exampleCol } oneFourth>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } oneFourth>
            <p>Column Two</p>
          </Column>
          <Column className={ styles.exampleCol } oneFourth>
            <p>Column Three</p>
          </Column>
          <Column className={ styles.exampleCol } oneFourth>
            <p>Column Four</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneFourth&gt;Column One&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneFourth&gt;Column Two&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneFourth&gt;Column Three&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneFourth&gt;Column Four&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;<br/>
          &lt;/Container&gt;<br/>
        </pre>

        <p>Modifier props include: <code>oneFourthLarge</code></p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>5 Columns</p>
        <Row className={ styles.exampleRow }>
          <Column className={ styles.exampleCol } oneFifth>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } oneFifth>
            <p>Column Two</p>
          </Column>
          <Column className={ styles.exampleCol } oneFifth>
            <p>Column Three</p>
          </Column>
          <Column className={ styles.exampleCol } oneFifth>
            <p>Column Four</p>
          </Column>
          <Column className={ styles.exampleCol } oneFifth>
            <p>Column Five</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneFifth&gt;Column One&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneFifth&gt;Column Two&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneFifth&gt;Column Three&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneFifth&gt;Column Four&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneFifth&gt;Column Five&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;<br/>
          &lt;/Container&gt;<br/>
        </pre>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Two-Thirds + One-Third</p>
        <Row className={ styles.exampleRow }>
          <Column className={  styles.exampleCol } twoThirds>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } oneThird>
            <p>Column Two</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column twoThirds&gt;Column One&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneThird&gt;Column Two&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;<br/>
          &lt;/Container&gt;<br/>
        </pre>

        <p>These can also be flipped using <code>reorder2Col</code></p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Two-Fifths + Three-Fifths</p>
        <Row className={ styles.exampleRow }>
          <Column className={ styles.exampleCol } twoFifths>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } threeFifths>
            <p>Column Two</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column twoFifths&gt;Column One&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column threeFifths&gt;Column Two&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;<br/>
          &lt;/Container&gt;<br/>
        </pre>

        <p>Columns work on the rule of fractions so any combination of fraction that is equally to 1 will fill an entire row. (Example: 1/4 + 3/4)</p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

        <Container>
          <h1 className="text-line">Fixed Columns</h1>
        </Container>

        <Container className={ styles.exampleContainer }>
          <p className={ styles.exampleGridTitle }>2 Columns</p>
          <Row className={ styles.exampleRow } fixedCol2>
            <Column className={ styles.exampleCol }>
              <p>Column One</p>
            </Column>
            <Column className={ styles.exampleCol }>
              <p>Column Two</p>
            </Column>
          </Row>

          <pre className={ styles.examplePre }>
            &lt;Container&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row fixedCol2&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column&gt;Column One&lt;/Column&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column&gt;Column Two&lt;/Column&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;<br/>
            &lt;/Container&gt;<br/>
          </pre>

          <p>Fixed columns will never stack; despite viewport size. No modifier classes are needed on the columns. </p>
          <p>Notice the <code>fixedCol2</code> prop set on the row.</p>
          <p>Other options include: <code>fixedCol3, fixedCol4, fixedCol5</code></p>
        </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container>
        <h1 className="text-line">Modifiers / Helpers</h1>
      </Container>{ /* <!-- .l-container --> */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Vertically Centered Columns</p>
        <Row className={ styles.exampleRow } verticalCenter>
          <Column className={ styles.exampleCol } oneFifth>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } oneFifth>
            <p>Column Two</p>
          </Column>
          <Column className={ styles.exampleCol } oneFifth>
            <p>Column Three</p>
            <p>Here's some more text.</p>
          </Column>
          <Column className={ styles.exampleCol } oneFifth>
            <p>Column Four</p>
          </Column>
          <Column className={ styles.exampleCol } oneFifth>
            <p>Column Five</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row verticalCenter&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneFifth&gt;Column One&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneFifth&gt;Column Two&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneFifth&gt;Column Three&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneFifth&gt;Column Four&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneFifth&gt;Column Five&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;<br/>
          &lt;/Container&gt;<br/>
        </pre>

        <p>Columns are flex items and will grow and shrink depending on space. Vertically centering columns forces each item to be only the height they need, but centered to the large item.</p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Matched Height Columns</p>
        <Row className={ styles.exampleRow } matchHeight>
          <Column className={ styles.exampleCol } oneFourth>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } oneFourth>
            <p>Column Two</p>
          </Column>
          <Column className={ styles.exampleCol } oneFourth>
            <p>Column Three</p>
            <p>Here's some more text.</p>
          </Column>
          <Column className={ styles.exampleCol } oneFourth>
            <p>Column Four</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row matchHeight&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneFourth&gt;Column One&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneFourth&gt;Column Two&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneFourth&gt;Column Three&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneFourth&gt;Column Four&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/Container&gt;<br/>
        </pre>

        <p>Columns can be flexed to match height of sibling columns.</p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Space-Between</p>
        <Row className={ styles.exampleRow } spaceBetween>
          <Column className={ styles.exampleCol } oneThird>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } oneThird>
            <p>Column Two</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row spaceBetween&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneThird&gt;Column One&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneThird&gt;Column Two&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;<br/>
          &lt;/Container&gt;<br/>
        </pre>

        <p>Notice the <code>spaceBetween</code> prop</p>
      </Container>


{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Space-Around</p>
        <Row className={  styles.exampleRow } spaceAround>
          <Column className={ styles.exampleCol } oneThird>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } oneThird>
            <p>Column Two</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row spaceAround&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneThird&gt;Column One&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneThird&gt;Column Two&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;<br/>
          &lt;/Container&gt;<br/>
        </pre>

        <p>Space around places columns evenly spaced from the edges of the row.</p>
        <p>Notice the <code>spaceAround</code> prop</p>
      </Container>


{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Space-Evenly</p>
        <Row className={ styles.exampleRow } spaceEvenly>
          <Column className={ styles.exampleCol } oneThird>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } oneThird>
            <p>Column Two</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row spaceEvenly&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneThird&gt;Column One&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneThird&gt;Column Two&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;<br/>
          &lt;/Container&gt;<br/>
        </pre>

        <p>Space evenly places columns evenly spaced from both the edges of row as well as from the center.</p>
        <p>Notice the <code>spaceEvenly</code> prop</p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Pull-Right</p>
        <Row className={ styles.exampleRow } pullRight>
          <Column className={ styles.exampleCol } oneThird>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } oneThird>
            <p>Column Two</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row pullRight&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneThird&gt;Column One&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneThird&gt;Column Two&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;<br/>
          &lt;/Container&gt;<br/>
        </pre>

        <p>Columns can be pulled to right/end of row.</p>
        <p>Notice the <code>pullRight</code> prop.</p>
      </Container>


{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>No-Wrap</p>
        <Row className={ styles.exampleRow } noWrap>
          <Column className={ styles.exampleCol } oneThird>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } oneThird>
            <p>Column Two</p>
          </Column>
          <Column className={ styles.exampleCol } oneThird>
            <p>Column Three</p>
          </Column>
          <Column className={ styles.exampleCol } oneThird>
            <p>Column Four</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row center noWrap&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneThird&gt;Column One&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneThird&gt;Column Two&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneThird&gt;Column Three&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneThird&gt;Column Four&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;<br/>
          &lt;/Container&gt;<br/>
        </pre>

        <p>No wrap essentially renders the columns modifiers useless. Columns will act like fixed columns never stacking.</p>
        <p>Notice the <code>noWrap</code> prop.</p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Row with no gutters</p>
        <Row className={ styles.exampleRow } noGutters>
          <Column className={ styles.exampleCol } oneHalf>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } oneHalf>
            <p>Column Two</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row noGutters&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneHalf&gt;Column One&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneHalf&gt;Column Two&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;<br/>
          &lt;/Container&gt;<br/>
        </pre>

        <p>Notice how the padding within the columns is removed, aligning text up to edge of column.</p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Reordered Columns</p>
        <Row className={ styles.exampleRow } reorder2Col>
          <Column className={ styles.exampleCol } oneHalf>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } oneHalf>
            <p>Column Two</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;Container&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row reorder2Col&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneHalf&gt;Column One&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Column oneHalf&gt;Column Two&lt;/Column&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;<br/>
          &lt;/Container&gt;<br/>
        </pre>

        <p>Column order can be manipulated. Can be scoped to just large viewports with: (<code>reorder2Col</code>)</p>
        <p>Notice source order of columns.</p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }
    </>
  );
};

export default Page;
