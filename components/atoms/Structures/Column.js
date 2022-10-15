/**
 * @module Column
 * @description
 */
import styles from './Column.module.css';

/**
 * @function Column
 * @description
 */
const Column = ( { children, mods = [], className } ) => {
  console.log( mods );
  return (
    <div
      className={ `
        ${ styles.col }
        ${ className }
        ${ mods.map( ( mod ) => styles[ mod ] ).join( ' ' ) }
      ` }
    >
      { children }
    </div>
  );
};

export default Column;
