const assert = require( "assert" );
const rmor = require( "./rmor.js" );

assert.deepEqual( rmor( { "hello": "world" } ), { "hello": "world" } );
assert.deepEqual( rmor( global ), { } );

console.log( "ok" );
