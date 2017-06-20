const assert = require( "assert" );
const rmor = require( "./rmor.js" );

assert.deepEqual( rmor( { "hello": "world" } ), { "hello": "world" }, "should be deeply equal" );

assert.equal( typeof rmor( global ) == "object", true, "should return true" );

console.log( "ok" );
