/**
 * @module Grid
 * @description UI Kit
 */
import { useEffect } from 'react';
import Head from 'next/head';
import Container from '@atoms/Layouts/Container';
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
          &lt;div class="l-container"&gt;&lt;/div&gt;
        </pre>

        <p>Grid width is variable, inspect to check out <code>var( --grid-width-default );</code> property set on the container.</p>
        <p>Container does have padding that keeps content aligned if no rows or columns are within.</p>
      </Container>

      <Container className={ styles.exampleContainer }>
        <Row className={ styles.exampleRow } mods={ [ 'center' ] }>
          <p className={ styles.exampleGridTitle }>Default Container + Row</p>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;div class="l-container"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row"&gt;&lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
        </pre>

        <p>Row has a negative margin to allow for columns to take advantage of full size of container.</p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Default Container + Row + Col</p>
        <Row className={ styles.exampleRow } mods={ ['center' ] }>
          <div className={ `g-col ${ styles.exampleCol }` }>
            <p>Column One</p>
          </div>
          <div className={ `g-col ${ styles.exampleCol }` }>
            <p>Column Two</p>
          </div>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;div class="l-container"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
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
              &lt;div class="l-container l-weighted-left"&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;main&gt;&lt;/main&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;aside&gt;&lt;/aside&gt;<br/>
              &lt;/div&gt;<br/>
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
              &lt;div class="l-container l-weighted-left"&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;aside&gt;&lt;/aside&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;main&gt;&lt;/main&gt;<br/>
              &lt;/div&gt;<br/>
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
        <Row className={ styles.exampleRow } mods={ [ 'center' ] }>
          <div className={ `g-col g-col--one-half ${ styles.exampleCol }` }>
            <p>Column One</p>
          </div>
          <div className={ `g-col g-col--one-half ${ styles.exampleCol }` }>
            <p>Column Two</p>
          </div>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;div class="l-container"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-half"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-half"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
        </pre>

        <p>Columns <strong>without</strong> viewport modifiers will stack on mobile up to tablet.</p>
        <p>Next example demonstrates viewport modifier <code>.g-col--one-half<strong>--large</strong></code></p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>2 Columns (Large)</p>
        <Row className={ styles.exampleRow } mods={ [ 'center' ] }>
          <div className={ `g-col g-col--one-half--large ${ styles.exampleCol }` }>
            <p>Column One</p>
          </div>
          <div className={ `g-col g-col--one-half--large ${ styles.exampleCol }` }>
            <p>Column Two</p>
          </div>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;div class="l-container"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-half--large"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-half--large"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
        </pre>

        <p>Columns <strong>with</strong> viewport modifiers <code>.g-col--one-half<strong>--large</strong></code> will stack on mobile up to desktop.</p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>3 Columns</p>
        <Row className={ styles.exampleRow } mods={ [ 'center' ] }>
          <div className={ `g-col g-col--one-third ${ styles.exampleCol }` }>
            <p>Column One</p>
          </div>
          <div className={ `g-col g-col--one-third ${ styles.exampleCol }` }>
            <p>Column Two</p>
          </div>
          <div className={ `g-col g-col--one-third ${ styles.exampleCol }` }>
            <p>Column Three</p>
          </div>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;div class="l-container"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-third"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-third"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-third"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
        </pre>

        <p>Modifier classes include: <code>.g-col--one-third<strong>--large</strong></code></p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>4 Columns</p>
        <Row className={ styles.exampleRow } mods={ ['center' ] }>
          <div className={ `g-col g-col--one-fourth ${ styles.exampleCol }` }>
            <p>Column One</p>
          </div>
          <div className={ `g-col g-col--one-fourth ${ styles.exampleCol }` }>
            <p>Column Two</p>
          </div>
          <div className={ `g-col g-col--one-fourth ${ styles.exampleCol }` }>
            <p>Column Three</p>
          </div>
          <div className={ `g-col g-col--one-fourth ${ styles.exampleCol }` }>
            <p>Column Four</p>
          </div>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;div class="l-container"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-fourth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-fourth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-fourth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-fourth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
        </pre>

        <p>Modifier classes include: <code>.g-col--one-fourth<strong>--large</strong></code></p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>5 Columns</p>
        <Row className={ styles.exampleRow } mods={ [ 'center' ] }>
          <div className={ `g-col g-col--one-fifth ${ styles.exampleCol }` }>
            <p>Column One</p>
          </div>
          <div className={ `g-col g-col--one-fifth ${ styles.exampleCol }` }>
            <p>Column Two</p>
          </div>
          <div className={ `g-col g-col--one-fifth ${ styles.exampleCol }` }>
            <p>Column Three</p>
          </div>
          <div className={ `g-col g-col--one-fifth ${ styles.exampleCol }` }>
            <p>Column Four</p>
          </div>
          <div className={ `g-col g-col--one-fifth ${ styles.exampleCol }` }>
            <p>Column Five</p>
          </div>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;div class="l-container"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-fifth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-fifth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-fifth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-fifth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-fifth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
        </pre>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Two-Thirds + One-Third</p>
        <Row className={ styles.exampleRow } mods={ [ 'center' ] }>
          <div className={ `g-col g-col--two-thirds ${ styles.exampleCol }` }>
            <p>Column One</p>
          </div>
          <div className={ `g-col g-col--one-third ${ styles.exampleCol }` }>
            <p>Column Two</p>
          </div>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;div class="l-container"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--two-thirds"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-third"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
        </pre>

        <p>These can also be flipped using <code>.g-row--reorder-2-col</code></p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Two-Fifths + Three-Fifths</p>
        <Row className={ styles.exampleRow } mods={ [ 'center' ] }>
          <div className={ `g-col g-col--two-fifths ${ styles.exampleCol }` }>
            <p>Column One</p>
          </div>
          <div className={ `g-col g-col--three-fifths ${ styles.exampleCol }` }>
            <p>Column Two</p>
          </div>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;div class="l-container"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--two-fifths"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--three-fifths"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
        </pre>

        <p>Columns work on the rule of fractions so any combination of fraction that is equally to 1 will fill an entire row. (Example: 1/4 + 3/4)</p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

        <Container>
          <h1 className="text-line">Fixed Columns</h1>
        </Container>

        <Container className={ styles.exampleContainer }>
          <p className={ styles.exampleGridTitle }>2 Columns</p>
          <Row className={ `g-row--col-2 ${ styles.exampleRow }` }>
            <div className={ `g-col ${ styles.exampleCol }` }>
              <p>Column One</p>
            </div>
            <div className={ `g-col ${ styles.exampleCol }` }>
              <p>Column Two</p>
            </div>
          </Row>

          <pre className={ styles.examplePre }>
            &lt;div class="l-container"&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row g-row--col-2"&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col"&gt;&lt;/div&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col"&gt;&lt;/div&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
            &lt;/div&gt;<br/>
          </pre>

          <p>Fixed columns will never stack; despite viewport size. No modifier classes are needed on the columns. </p>
          <p>Notice the <code>.g-row--col-2</code> class set on the row.</p>
          <p>Other options include: <code>.g-row--col-3, .g-row--col-4, .g-row--col-5</code></p>
        </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container>
        <h1 className="text-line">Modifiers / Helpers</h1>
      </Container>{ /* <!-- .l-container --> */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Vertically Centered Columns</p>
        <Row className={ styles.exampleRow } center verticalCenter>
          <Column className={ styles.exampleCol } mods={ [ 'oneFifth' ] }>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } mods={ [ 'oneFifth' ] }>
            <p>Column Two</p>
          </Column>
          <Column className={ styles.exampleCol } mods={ [ 'oneFifth' ] }>
            <p>Column Three</p>
            <p>Here's some more text.</p>
          </Column>
          <Column className={ styles.exampleCol } mods={ [ 'oneFifth' ] }>
            <p>Column Four</p>
          </Column>
          <Column className={ styles.exampleCol } mods={ [ 'oneFifth' ] }>
            <p>Column Five</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;div class="l-container"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row g-row--vertical-center"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-fifth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-fifth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-fifth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-fifth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-fifth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
        </pre>

        <p>Columns are flex items and will grow and shrink depending on space. Vertically centering columns forces each item to be only the height they need, but centered to the large item.</p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Matched Height Columns</p>
        <Row className={ styles.exampleRow } center matchHeight>
          <Column className={ styles.exampleCol } mods={ [ 'oneFourth' ] }>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } mods={ [ 'oneFourth' ] }>
            <p>Column Two</p>
          </Column>
          <Column className={ styles.exampleCol } mods={ [ 'oneFourth' ] }>
            <p>Column Three</p>
            <p>Here's some more text.</p>
          </Column>
          <Column className={ styles.exampleCol } mods={ [ 'oneFourth' ] }>
            <p>Column Four</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;div class="l-container"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row g-row--match-height"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-fourth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-fourth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-fourth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-fourth"&gt;&lt;/div&gt;<br/>

            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
        </pre>

        <p>Columns can be flexed to match height of sibling columns.</p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Space-Between</p>
        <Row className={ styles.exampleRow } center spaceBetween>
          <Column className={ styles.exampleCol } mods={ [ 'oneThird' ] }>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } mods={ [ 'oneThird' ] }>
            <p>Column Two</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;div class="l-container"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row g-row--space-between"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-third"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-third"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
        </pre>

        <p>Notice the <code>.g-row--space-between</code> class</p>
      </Container>


{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Space-Around</p>
        <Row className={  styles.exampleRow } center spaceAround>
          <Column className={ styles.exampleCol } mods={ [ 'oneThird' ] }>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } mods={ [ 'oneThird' ] }>
            <p>Column Two</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;div class="l-container"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row g-row--space-around"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-third"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-third"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
        </pre>

        <p>Space around places columns evenly spaced from the edges of the row.</p>
        <p>Notice the <code>.g-row--space-around</code> class</p>
      </Container>


{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Space-Evenly</p>
        <Row className={ styles.exampleRow } center spaceEvenly>
          <Column className={ styles.exampleCol } mods={ [ 'oneThird' ] }>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } mods={ [ 'oneThird' ] }>
            <p>Column Two</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;div class="l-container"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row g-row--space-evenly"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-third"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-third"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
        </pre>

        <p>Space evenly places columns evenly spaced from both the edges of row as well as from the center.</p>
        <p>Notice the <code>.g-row--space-evenly</code> class</p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Pull-Right</p>
        <Row className={ styles.exampleRow } center pullRight>
          <Column className={ styles.exampleCol } mods={ [ 'oneThird' ] }>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } mods={ [ 'oneThird' ] }>
            <p>Column Two</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;div class="l-container"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row g-row--pull-right"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-third"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-third"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
        </pre>

        <p>Columns can be pulled to right/end of row.</p>
        <p>Notice the <code>.g-row--pull-right</code> class.</p>
      </Container>


{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>No-Wrap</p>
        <Row className={ styles.exampleRow } center noWrap>
          <Column className={ styles.exampleCol } mods={ [ 'oneThird' ] }>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } mods={ [ 'oneThird' ] }>
            <p>Column Two</p>
          </Column>
          <Column className={ styles.exampleCol } mods={ [ 'oneThird' ] }>
            <p>Column Three</p>
          </Column>
          <Column className={ styles.exampleCol } mods={ [ 'oneThird' ] }>
            <p>Column Four</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;div class="l-container"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row g-row--no-wrap"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-third"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-third"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-third"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-third"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
        </pre>

        <p>No wrap essentially renders the columns modifiers useless. Columns will act like fixed columns never stacking.</p>
        <p>Notice the <code>.g-row--nowrap</code> class.</p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Row with no gutters</p>
        <Row className={ styles.exampleRow } center noGutters>
          <Column className={ styles.exampleCol } mods={ [ 'oneHalf' ] }>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } mods={ [ 'oneHalf' ] }>
            <p>Column Two</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;div class="l-container"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row g-row--space-between"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-half"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-half"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
        </pre>

        <p>Notice how the padding within the columns is removed, aligning text up to edge of column.</p>
      </Container>

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }

      <Container className={ styles.exampleContainer }>
        <p className={ styles.exampleGridTitle }>Reordered Columns</p>
        <Row className={ styles.exampleRow } center reorder2Col>
          <Column className={ styles.exampleCol } mods={ [ 'oneHalf' ] }>
            <p>Column One</p>
          </Column>
          <Column className={ styles.exampleCol } mods={ [ 'oneHalf' ] }>
            <p>Column Two</p>
          </Column>
        </Row>

        <pre className={ styles.examplePre }>
          &lt;div class="l-container"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-row g-row--reorder-2-col"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-half"&gt;Column One&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="g-col g-col--one-half"&gt;Column Two&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;<br/>
        </pre>

        <p>Column order can be manipulated. Can be scoped to just large viewports with: (<code>.g-row--reorder-2-col--large</code>)</p>
        <p>Notice source order of columns.</p>
      </Container>{ /* <!-- .l-container --> */ }

{ /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ }
    </>
  );
};

export default Page;
