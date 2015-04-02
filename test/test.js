/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isAnagram = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-anagram', function tests() {

	it( 'should export a function', function test() {
		expect( isAnagram ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided a base string', function test() {
		var values = [
			5,
			null,
			undefined,
			NaN,
			true,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				isAnagram( value );
			};
		}
	});

	it( 'should positively validate', function test() {
		assert.ok( isAnagram( 'bat', 'tab' ) );
		assert.ok( isAnagram( 'bat', 'TaB' ) );
		assert.ok( isAnagram( 'bat', 't a b' ) );
		assert.ok( isAnagram( 'bat', new String( 'TAB' ) ) );
		assert.ok( isAnagram( 'William Shakespeare', 'I am a weakish speller' ) );
		assert.ok( isAnagram( 'bat 321', 'tab 123' ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
			'abbt',
			'bbt',
			5,
			null,
			undefined,
			true,
			NaN,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( isAnagram( 'bat', values[ i ] ) );
		}
	});

});
