/**
 * @module useConditionalClasses
 * @description
 */

/**
 * @function useConditionalClasses
 * @description
 * @params
 */
const useConditionalClasses = ( styles, classes = {} ) => {
  const classesToReturn = [];

  Object.keys( classes ).forEach( ( c ) => {
    if( classes[ c ] === true && styles[ c ] ) {
      classesToReturn.push( styles[ c ] );
    }
  } );

  if( ! classesToReturn.length ) {
    return '';
  }

  return ` ${ classesToReturn.join( ' ' ) } `
}

export default useConditionalClasses;
