/**
 * @module App
 * @description Our NextJS App
 */
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import '@styles/globals.css';

/**
 * @function App
 * @description Our NextJS App
 */
const App = ( { Component, pageProps } ) => {
  const router = useRouter();

  /**
   * @function useEffect
   * @description Load a11y conditional
   */
  useEffect( () => {
    if ( process.env.environment === 'local' || 'a11y' in router.query ) {
      import( '@khanacademy/tota11y' );
    }
  }, [ router.query ] );

  return (
    <Component { ...pageProps } />
  );
};

export default App;
