/**
 * @module Main
 * @description
 */
import styles from './Main.module.css';

/**
 * @function Main
 * @description
 */
const Main = ( { children } ) => (
  <main
    className={ styles.main }
    role="main"
  >
    { children }
  </main>
);

export default Main;
