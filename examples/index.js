'use strict';

var isAnagram = require( './../lib' );

var bool = isAnagram( 'I am a weakish speller', 'William Shakespeare' );
console.log( bool );
// returns true

bool = isAnagram( 'bat', 'tab' );
console.log( bool );
// returns true

bool = isAnagram( 'bat', 'TAB' );
console.log( bool );
// returns true

bool = isAnagram( 'bat', 't a b' );
console.log( bool );
// returns true

bool = isAnagram( 'bat 321', 'tab 123' );
console.log( bool );
// returns true

bool = isAnagram( 'bat', 'tabba' );
console.log( bool );
// returns false

bool = isAnagram( 'bat', 5 );
console.log( bool );
// returns false

bool = isAnagram( '123', 321 );
console.log( bool );
// returns false
