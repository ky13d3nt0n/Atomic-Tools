/**
 * @module Container
 * @description
 */
import useConditionalClasses from '@hooks/useConditionalClasses';
import styles from './index.module.css';

/**
 * @function Container
 * @description
 */
const Container = ( {
  children,
  weightedLeft, weightedRight,
  className = ''
} ) => {
  const classes = {
    weightedLeft,
    weightedRight
  };
  const modifierClasses = useConditionalClasses( styles, classes );

  return (
    <div className={ `
      ${ styles.container }
      ${ modifierClasses }
      ${ className }
    ` }
    >
      { children }
    </div>
  );
};

export default Container;
