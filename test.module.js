"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "rmor",
			"path": "rmor/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/rmor.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"rmor": "rmor"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const rmor = require( "./rmor.js" );
//: @end-server

//: @client:
const rmor = require( "./rmor.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "rmor", ( ) => {

	describe( "`rmor with object that have 3 levels or depth", ( ) => {
		it( "should create safe copy of data that can be parsed by JSON parser ", ( ) => {

			let test = {
				"hello": {
					"world": {
						"yeah": 1,
						"ugh": false,
						"hi": [
							{
								"weeeh": {
									"yehey": 123
								}
							},
							{
								"weeeh": {
									"yehey": 1234
								}
							},
							"hello world",
							123,
							{
								"weeeeeeh": 12345
							}
						]
					}
				}
			};

			let test2 = JSON.stringify( test );
			assert.deepEqual( test, JSON.parse( test2 ) );

		} );
	} );

	// describe( "`rmor( global )`", ( ) => {
	// 	it( "should return object type", ( ) => {
	//
	// 		let test = rmor( global );
	// 		let test2 = JSON.stringify( test );
	//
	// 		assert.deepEqual( test, JSON.parse( test2 ) );
	//
	// 	} ).timeout( 15000 );
	// } );

} );

//: @end-server


//: @client:

describe( "rmor", ( ) => {

	describe( "`rmor with object that have 3 levels or depth", ( ) => {
		it( "should create safe copy of data that can be parsed by JSON parser ", ( ) => {

			let test = {
				"hello": {
					"world": {
						"yeah": 1,
						"ugh": false,
						"hi": [
							{
								"weeeh": {
									"yehey": 123
								}
							},
							{
								"weeeh": {
									"yehey": 1234
								}
							},
							"hello world",
							123,
							{
								"weeeeeeh": 12345
							}
						]
					}
				}
			};

			let test2 = JSON.stringify( test );
			assert.deepEqual( test, JSON.parse( test2 ) );

		} );
	} );

} );

//: @end-client


//: @bridge:



//: @end-bridge
