/**
 * @module Hero Image Right
 * @description
 */
import Container from '@atoms/Structures/Container';
import Row from '@atoms/Structures/Row';
import Column from '@atoms/Structures/Column';
import Paragraph from '@atoms/Typography/Heading';
import Heading from '@atoms/Typography/Heading';
import Button from '@atoms/Inputs/Button';
import useConditionalClasses from '@hooks/useConditionalClasses';
import styles from './HeroSplit.module.css';

/**
 * @function HeroSplit
 * @description
 */
const HeroSplit = ( {
  background = 'hero-1.jpg',
  reverseLayout
} ) => {
  const classes = { reverseLayout };
  const modifierClasses = useConditionalClasses( styles, classes );
  return (
    <div className={ `${ styles.hero } ${ modifierClasses }` }>
      <div
        className={ styles.background }
        style={ { backgroundImage: `url( "/img/${ background }" )` } }
      />

      <Container>
        <div className={ styles.content }>
          <em className={ styles.pretitle }>Hero Pretitle</em>
          <Heading
            content="Hero Title"
            className={ styles.title }
          />
          <p className={ styles.subtitle }>Hero Subtitle</p>
          <Button>Click Here</Button>
        </div>
      </Container>
    </div>
  );
}

export default HeroSplit;
