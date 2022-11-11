/**
 * @module Heading
 * @description Atom - Heading
 */
import useConditionalClasses from '@hooks/useConditionalClasses';
import styles from './index.module.css';

/**
 * @function Heading
 * @description The <h1> to <h6> tags are used to define HTML headings.
 * @param {node} children
 * @param {string} className
 * @param {object} props
 */
const Heading = ( {
  children,
  content,
  className = '',
  level = 2,
  appearH1, appearH2, appearH3, appearH4, appearH5, appearH6,
  ...props
} ) => {
  const tagName = `h${ level }`
  const DynamicHeading = tagName;
  const classes = {
    appearH1,
    appearH2,
    appearH3,
    appearH4,
    appearH5,
    appearH6
  };
  const modifierClasses = useConditionalClasses( styles, classes );

  if( Number( level ) < 0 || Number( level ) > 6 ) {
    return( 'Not a valid heading' );
  }

  return (
    <DynamicHeading
      className={ `
        ${ styles.heading }
        ${ modifierClasses ? modifierClasses : ( tagName ? styles[ tagName ] : '' ) }
        ${ className }
      ` }
      { ...props }
    >
      { content ? content : children }
    </DynamicHeading>
  );
}

export default Heading;
