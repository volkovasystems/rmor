"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "rmor",
              			"path": "rmor/rmor.js",
              			"file": "rmor.js",
              			"module": "rmor",
              			"author": "Richeve S. Bebedor",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/rmor.git",
              			"test": "rmor-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Creates a safe copy of data that can be parsed by JSON parser.
              	@end-module-documentation
              
              	@include:
              		{
              			"asea": "asea",
              			"depher": "depher",
              			"falzy": "falzy",
              			"fluctuate": "fluctuate",
              			"loosen": "loosen",
              			"protype": "protype",
              			"shft": "shft"
              		}
              	@end-include
              */

var asea = require("asea");
var depher = require("depher");
var falzy = require("falzy");
var fluctuate = require("fluctuate");
var loosen = require("loosen");
var protype = require("protype");
var shft = require("shft");

var rmor = function rmor(entity, depth, limiter) {
	/*;
                                                  	@meta-configuration:
                                                  		{
                                                  			"entity:required": "object",
                                                  			"depth": "number",
                                                  			"limiter": "function"
                                                  		}
                                                  	@end-meta-configuration
                                                  */

	if (falzy(entity) || !protype(entity, OBJECT)) {
		throw new Error("invalid entity");
	}

	var parameter = shft(arguments);

	depth = depher(parameter, NUMBER, Infinity);

	limiter = depher(parameter, FUNCTION, function limiter(element, key) {
		/*;
                                                                       	@note:
                                                                       		This is an internal security feature, if the entity is global.
                                                                       	@end-note
                                                                       */
		if (asea.server && global === entity && /^process/.test(key)) {
			return true;
		}

		return protype(element, FUNCTION);
	});

	return fluctuate(loosen(entity, true, depth, limiter));
};

module.exports = rmor;

//# sourceMappingURL=rmor.support.js.map