/**
 * @module Input Search
 * @description Atom - Input
 */
import styles from './index.module.css';

/**
 * @function InputSearch
 * @description The <input> tag specifies an input field where the user can enter data.
 * @param {string} className
 * @param {function} onInput
 * @param {string} placeholder
 * @param {object} props
 */
const InputSearch = ( {
  className = '',
  onInput = handleInput,
  placeholder = 'Search',
  ...props
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
      placeholder={ placeholder }
      className={ `
        ${ styles.input }
        ${ className }
      `}
      { ...props }
    />
  );
}

export default InputSearch;
