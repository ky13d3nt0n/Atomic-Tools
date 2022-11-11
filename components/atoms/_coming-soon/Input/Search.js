/**
 * @module Input Search
 * @description
 */
import styles from './Search.module.css';

/**
 * @function InputSearch
 * @description
 */
const InputSearch = ( {
  onInput = handleInput
} ) => {

  /**
   * @function handleInput
   * @description
   */
  const handleInput = () => {
    alert( 'Handling input data, time to set a custom handler' );
  }

  return (
    <input
      type="search"
      onInput={ onInput }
      placeholder="Search"
    />
  );
}

export default InputSearch;
