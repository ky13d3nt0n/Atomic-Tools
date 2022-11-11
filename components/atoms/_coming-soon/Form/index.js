/**
 * @module Form
 * @description
 */
import styles from './index.module.css';

/**
 * @function Form
 * @description
 */
const Form = ( {
  children,
  onSubmit = handleSubmit
} ) => {

  /**
   * @function handleInput
   * @description
   */
  const handleInput = () => {
    alert( 'Handling submit, time to set a custom event' );
  }

  return (
    <form onSubmit={ onSubmit }>
      { children }
    </form>
  );
}

export default Form;
