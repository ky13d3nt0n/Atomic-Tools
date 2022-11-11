/**
 * @module Input - Text
 * @description Atom - Input
 */
import styles from './index.module.css';

/**
 * @function InputText
 * @description The <input> tag specifies an input field where the user can enter data.
 * @param {string} className
 * @param {function} onInput
 * @param {string} placeholder
 * @param {object} props
 */
const InputText = ( {
  className = '',
  onInput = handleInput,
  placeholder = '...',
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
      type="text"
      onInput={ onInput }
      placeholder={ placeholder }
      className={ `
        ${ styles.input }
        ${ className }
      ` }
      { ...props }
    />
  );
}

export default InputText;
