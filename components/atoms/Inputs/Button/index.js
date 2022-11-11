/**
 * @module Button
 * @description Atom - Button
 */
import useConditionalClasses from '@hooks/useConditionalClasses';
import styles from './index.module.css';

/**
 * @function Button
 * @description The <button> tag defines a clickable button.
 */
const Button = ( {
  children,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  primary, secondary, tertiary,
  small, medium, large,
  block,
  blockOnlyXS, blockOnlySM, blockOnlyMD, blockOnlyLG, blockOnlyXL
} ) => {
  const classes = {
    primary, secondary, tertiary,
    small, medium, large,
    block,
    blockOnlyXS, blockOnlySM, blockOnlyMD, blockOnlyLG, blockOnlyXL
  };
  const modifierClasses = useConditionalClasses( styles, classes );

  /**
   * @function handleClick
   * @description
   */
  const handleClick = () => {
    alert( 'Button has been clicked, go ahead and attach your custom event.' );
  };

  return (
    <button
      className={ `
        ${ styles.button }
        ${ modifierClasses }
        ${ className }
      ` }
      type={ type }
      role="button"
      disabled={ disabled }
      onClick={ onClick || handleClick }
    >
      { children }
    </button>
  );
}

export default Button;
