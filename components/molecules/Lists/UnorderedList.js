/**
 * @module Unordered List
 * @description
 */
import useConditionalClasses from '@hooks/useConditionalClasses';
import styles from './UnorderedList.module.css';

/**
 * @function UnorderedList
 * @description
 */
const UnorderedList = ( {
  children,
  className = '',
  withIcons
} ) => {
  const classes = {
    withIcons
  };
  const modifierClasses = useConditionalClasses( styles, classes );

  return (
    <ul
      className={ `
        ${ styles.ul }
        ${ modifierClasses }
        ${ className }
      ` }
    >
      { children }
    </ul>
  );
}

export default UnorderedList;
