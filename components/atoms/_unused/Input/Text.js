/**
 * @module Input Text
 * @description
 */
import styles from './index.module.css';

/**
 * @function InputText
 * @description
 */
const InputText = ( {
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
      type="text"
      onInput={ onInput }
    />
  );
}

export default InputText;
