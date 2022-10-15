/**
 * @module functions
 * @description PostCSS JS Functions
 */
const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH || 'https://tundra.frontier.redventures.io/migration';

/**
 * @function cleanString
 * @description Clean our input
 */
const cleanString = ( value ) => value.replace( /px|em|%|rem/, '' );

/**
 * @function rem
 * @description Convert px to rem
 */
const rem = ( fontSize ) => `${ ( cleanString( fontSize ) / 16 ) }rem`;

/**
 * @function lh
 * @description Convert lh to decimal
 */
const lh = ( fontSize, lineHeight ) => ( cleanString( lineHeight ) / cleanString( fontSize ) ).toFixed( 2 );

/**
 * @function img
 * @description Return img url
 */
const img = ( pathname ) => {
  if ( ! pathname ) {
    return;
  }

  const url = `${ imagePath }${ pathname.replace( /['"]+/g, '' ) }`;

  return `url( '${ url }' )`;
};

module.exports = {
  rem,
  lh,
  img
};
