const assert = require( "assert" );
const rmor = require( "./rmor.js" );

assert.equal( typeof rmor( global ) == "object", true, "should be of object data type" );

assert.deepEqual( rmor( { "hello": "world" } ), { "hello": "world" }, "should be equal to { 'hello': 'world' }" );

console.log( "ok" );
