/**
*
*	VALIDATE: anagram
*
*
*	DESCRIPTION:
*		- Validates if a value is an anagram.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isString = require( 'validate.io-string' );


// FUNCTIONS //

/**
* FUNCTION: ascending( a, b )
*	Comparator function for sorting characters in ascending order.
*
* @private
* @param {String} a - character
* @param {String} b - character
* @returns {Number} comparison value
*/
function ascending( a, b ) {
	if ( a < b ) {
		return -1;
	}
	if ( a === b ) {
		return 0;
	}
	return 1;
} // end FUNCTION ascending()


// ANAGRAM //

/**
* FUNCTION: anagram( str, x )
*	Validates if a value is an anagram.
*
* @param {String} str - comparison string
* @param {*} x - value to validate
* @returns {Boolean} boolean indicating if a value is an anagram
*/
function anagram( str, x ) {
	if ( !isString( str ) ) {
		throw new TypeError( 'anagram()::invalid input argument. First argument must be a string. Value: `' + str + '`.' );
	}
	if ( !isString( x ) ) {
		return false;
	}
	str = str.toLowerCase()
		.replace( /[^a-z0-9]/g, '' );
	x = x.toLowerCase()
		.replace( /[^a-z0-9]/g, '' );
	if ( str.length !== x.length ) {
		return false;
	}
	str = str.split( '' )
		.sort( ascending )
		.join( '' );
	x = x.split( '' )
		.sort( ascending )
		.join( '' );
	return ( str === x );
} // end FUNCTION anagram()


// EXPORTS //

module.exports = anagram;
