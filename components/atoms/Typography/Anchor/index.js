/**
 * @module Anchor
 * @description Atom - Anchor
 */
import Link from 'next/link';
import styles from './index.module.css';

/**
 * @function Anchor
 * @description The <a> tag defines a hyperlink, which is used to link from one page to another.
 */
const Anchor = ( {
  children,
  href = '#',
  title,
  target,
  className = '',
  isButton,
  ...props
} ) => (
  <Link href={ href }>
    <a
      className={ `
        ${ ! isButton ? styles.anchor : '' }
        ${ className }
      ` }
      target={ target }
      title={ title }
      { ...props }
    >
      { title || children }
    </a>
  </Link>
);

export default Anchor;
