/**
 * @module Column
 * @description
 */
import useConditionalClasses from '@hooks/useConditionalClasses';
import styles from './Column.module.css';

/**
 * @function Column
 * @description
 */
const Column = ( {
  children,
  className = '',
  oneHalf, oneHalfLarge,
  oneThird, oneThirdLarge,
  twoThirds, twoThirdsLarge,
  oneFourth, oneFourthLarge,
  threeFourths, threeFourthsLarge,
  oneFifth, oneFifthLarge,
  twoFifths, twoFifthsLarge,
  threeFifths, threeFifthsLarge,
  fourFifths, fourFifthsLarge,
  ...props
} ) => {
  const classes = {
    oneHalf, oneHalfLarge,
    oneThird, oneThirdLarge,
    twoThirds, twoThirdsLarge,
    oneFourth, oneFourthLarge,
    threeFourths, threeFourthsLarge,
    oneFifth, oneFifthLarge,
    twoFifths, twoFifthsLarge,
    threeFifths, threeFifthsLarge,
    fourFifths, fourFifthsLarge
  };
  const modifierClasses = useConditionalClasses( styles, classes );

  return (
    <div
      className={ `
        ${ styles.col }
        ${ modifierClasses }
        ${ className }
      ` }
      { ...props }
    >
      { children }
    </div>
  );
}

export default Column;
