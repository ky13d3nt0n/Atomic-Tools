/**
 * @module Picture
 * @description
 */
import Image from 'next/image';
import styles from './index.module.css';

/**
 * @function Picture
 * @description
 */
const Picture = ( {
  src,
  alt
} ) => {

  return (
    <Image
      src={ src }
      alt={ alt }
    />
  );
}

export default Picture;
