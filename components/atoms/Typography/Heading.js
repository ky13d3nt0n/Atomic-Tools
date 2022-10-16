/**
 * @module Heading
 * @description
 */
import useConditionalClasses from '@hooks/useConditionalClasses';
import styles from './Heading.module.css';

/**
 * @function Heading
 * @description
 */
const Heading = ( {
  children,
  content,
  className = '',
  level = 2,
  appearH1, appearH2, appearH3, appearH4, appearH5, appearH6
} ) => {
  if( Number( level ) < 0 || Number( level ) > 6 ) {
    return( 'Not a valid heading' );
  }

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

  return (
    <DynamicHeading
      className={ `
        ${ styles.heading }
        ${ modifierClasses ? modifierClasses : ( tagName ? styles[ tagName ] : '' ) }
        ${ className }
      ` }
    >
      { content ? content : children }
    </DynamicHeading>
  );
}

export default Heading;
