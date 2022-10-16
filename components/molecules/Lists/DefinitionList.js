/**
 * @module Definition List
 * @description
 */
import styles from './DefinitionList.module.css';

/**
 * @function DefinitionList
 * @description
 */
const DefinitionList = ( {
  className = '',
  items
} ) => {
  return (
    <dl
      className={ `
        ${ styles.ul }
        ${ className }
      ` }
    >
      { items }
    </dl>
  );
}

export default DefinitionList;
