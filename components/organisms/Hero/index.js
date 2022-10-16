/**
 * @module Hero
 * @description
 */
import Container from '@atoms/Structures/Container';
import Paragraph from '@atoms/Typography/Heading';
import Heading from '@atoms/Typography/Heading';
import Button from '@atoms/Button';
import styles from './index.module.css';

/**
 * @function Hero
 * @description
 */
const Hero = ( {
  background = 'hero-1.jpg',
} ) => (
  <div className={ styles.hero } style={ { backgroundImage: `url( "/img/${ background }" );` }}>
    <Container>
      <em className={ styles.pretitle }>Hero Pretitle</em>
      <Heading
        content="Hero Title"
        className={ styles.title }
      />
      <p className={ styles.subtitle }>Hero Subtitle</p>
      <Button>Click Here</Button>
    </Container>
  </div>
);

export default Hero;
