/**
 * @module Container
 * @description
 */
import styles from './Container.module.css';

/**
 * @function Container
 * @description
 */
const Container = ( { children, weightedLeft, weightedRight, className } ) => {
  return (
    <div
      className={ `
        ${ styles.container }
        ${ weightedLeft ? styles.weightedLeft : '' }
        ${ weightedRight ? styles.weightedRight : '' }
        ${ className }
      ` }
    >
      { children }
    </div>
  );
};

export default Container;
