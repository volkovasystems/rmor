const assert = require( "assert" );
const rmor = require( "./rmor.js" );

assert.deepEqual( rmor( { "hello": "world" } ), { "hello": "world" }, "should be deeply equal" );

assert.equal( typeof rmor( global ), "object", "should return 'object'" );

console.log( "ok" );
