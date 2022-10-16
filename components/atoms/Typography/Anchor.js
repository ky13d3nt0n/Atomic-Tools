/**
 * @module Link
 * @description
 */
import Link from 'next/link';
import styles from './Lead.module.css';

/**
 * @function Anchor
 * @description
 */
const Anchor = ( {
  href = '#',
  title,
  target
} ) => {
  return (
    <Link href={ href }>
      <a
        className={ styles.a }
        target={ target }
        title={ title }
      >
        { title }
      </a>
    </Link>
  );
}

export default Anchor;
