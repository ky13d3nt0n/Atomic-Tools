/**
 * @module Lead
 * @description
 */
import Paragraph from '@atoms/Paragraph';
import styles from './index.module.css';

/**
 * @function Lead
 * @description Lead defines a paragraph that has more emphasis ( bolded, larger )
 * @param {node} children
 * @param {string} className
 * @param {object} props
 */
const Lead = ( {
  children,
  className = '',
  ...props
} ) => (
  <Paragraph
    className={ `
      ${ styles.lead }
      ${ className }
    ` }
    { ...props }
    >
      { children }
  </Paragraph>
);

export default Lead;
