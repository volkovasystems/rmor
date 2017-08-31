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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"shft": "shft"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var asea = require("asea");
var depher = require("depher");
var falzy = require("falzy");
var fluctuate = require("fluctuate");
var loosen = require("loosen");
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

	if (falzy(entity) || (typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) != "object") {
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

		return typeof element == "function";
	});

	return fluctuate(loosen(entity, true, depth, limiter));
};

module.exports = rmor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJtb3Iuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc2VhIiwicmVxdWlyZSIsImRlcGhlciIsImZhbHp5IiwiZmx1Y3R1YXRlIiwibG9vc2VuIiwic2hmdCIsInJtb3IiLCJlbnRpdHkiLCJkZXB0aCIsImxpbWl0ZXIiLCJFcnJvciIsInBhcmFtZXRlciIsImFyZ3VtZW50cyIsIk5VTUJFUiIsIkluZmluaXR5IiwiRlVOQ1RJT04iLCJlbGVtZW50Iiwia2V5Iiwic2VydmVyIiwiZ2xvYmFsIiwidGVzdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkRBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFlBQVlILFFBQVMsV0FBVCxDQUFsQjtBQUNBLElBQU1JLFNBQVNKLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUssT0FBT0wsUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTU0sT0FBTyxTQUFTQSxJQUFULENBQWVDLE1BQWYsRUFBdUJDLEtBQXZCLEVBQThCQyxPQUE5QixFQUF1QztBQUNuRDs7Ozs7Ozs7OztBQVVBLEtBQUlQLE1BQU9LLE1BQVAsS0FBbUIsUUFBT0EsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUF4QyxFQUFrRDtBQUNqRCxRQUFNLElBQUlHLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUMsWUFBWU4sS0FBTU8sU0FBTixDQUFoQjs7QUFFQUosU0FBUVAsT0FBUVUsU0FBUixFQUFtQkUsTUFBbkIsRUFBMkJDLFFBQTNCLENBQVI7O0FBRUFMLFdBQVVSLE9BQVFVLFNBQVIsRUFBbUJJLFFBQW5CLEVBQTZCLFNBQVNOLE9BQVQsQ0FBa0JPLE9BQWxCLEVBQTJCQyxHQUEzQixFQUFnQztBQUN0RTs7Ozs7QUFLQSxNQUFJbEIsS0FBS21CLE1BQUwsSUFBZUMsV0FBV1osTUFBMUIsSUFBc0MsVUFBRixDQUFlYSxJQUFmLENBQXFCSCxHQUFyQixDQUF4QyxFQUFvRTtBQUNuRSxVQUFPLElBQVA7QUFDQTs7QUFFRCxTQUFPLE9BQU9ELE9BQVAsSUFBa0IsVUFBekI7QUFDQSxFQVhTLENBQVY7O0FBYUEsUUFBT2IsVUFBV0MsT0FBUUcsTUFBUixFQUFnQixJQUFoQixFQUFzQkMsS0FBdEIsRUFBNkJDLE9BQTdCLENBQVgsQ0FBUDtBQUNBLENBakNEOztBQW1DQVksT0FBT0MsT0FBUCxHQUFpQmhCLElBQWpCIiwiZmlsZSI6InJtb3Iuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJybW9yXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcInJtb3Ivcm1vci5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJybW9yLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwicm1vclwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9ybW9yLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJybW9yLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0Q3JlYXRlcyBhIHNhZmUgY29weSBvZiBkYXRhIHRoYXQgY2FuIGJlIHBhcnNlZCBieSBKU09OIHBhcnNlci5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzZWFcIjogXCJhc2VhXCIsXHJcblx0XHRcdFwiZGVwaGVyXCI6IFwiZGVwaGVyXCIsXHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcImZsdWN0dWF0ZVwiOiBcImZsdWN0dWF0ZVwiLFxyXG5cdFx0XHRcImxvb3NlblwiOiBcImxvb3NlblwiLFxyXG5cdFx0XHRcInNoZnRcIjogXCJzaGZ0XCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xyXG5jb25zdCBkZXBoZXIgPSByZXF1aXJlKCBcImRlcGhlclwiICk7XHJcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XHJcbmNvbnN0IGZsdWN0dWF0ZSA9IHJlcXVpcmUoIFwiZmx1Y3R1YXRlXCIgKTtcclxuY29uc3QgbG9vc2VuID0gcmVxdWlyZSggXCJsb29zZW5cIiApO1xyXG5jb25zdCBzaGZ0ID0gcmVxdWlyZSggXCJzaGZ0XCIgKTtcclxuXHJcbmNvbnN0IHJtb3IgPSBmdW5jdGlvbiBybW9yKCBlbnRpdHksIGRlcHRoLCBsaW1pdGVyICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCJvYmplY3RcIixcclxuXHRcdFx0XHRcImRlcHRoXCI6IFwibnVtYmVyXCIsXHJcblx0XHRcdFx0XCJsaW1pdGVyXCI6IFwiZnVuY3Rpb25cIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6eSggZW50aXR5ICkgfHwgdHlwZW9mIGVudGl0eSAhPSBcIm9iamVjdFwiICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlbnRpdHlcIiApO1xyXG5cdH1cclxuXHJcblx0bGV0IHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cyApO1xyXG5cclxuXHRkZXB0aCA9IGRlcGhlciggcGFyYW1ldGVyLCBOVU1CRVIsIEluZmluaXR5ICk7XHJcblxyXG5cdGxpbWl0ZXIgPSBkZXBoZXIoIHBhcmFtZXRlciwgRlVOQ1RJT04sIGZ1bmN0aW9uIGxpbWl0ZXIoIGVsZW1lbnQsIGtleSApe1xyXG5cdFx0Lyo7XHJcblx0XHRcdEBub3RlOlxyXG5cdFx0XHRcdFRoaXMgaXMgYW4gaW50ZXJuYWwgc2VjdXJpdHkgZmVhdHVyZSwgaWYgdGhlIGVudGl0eSBpcyBnbG9iYWwuXHJcblx0XHRcdEBlbmQtbm90ZVxyXG5cdFx0Ki9cclxuXHRcdGlmKCBhc2VhLnNlcnZlciAmJiBnbG9iYWwgPT09IGVudGl0eSAmJiAoIC9ecHJvY2Vzcy8gKS50ZXN0KCBrZXkgKSApe1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdHlwZW9mIGVsZW1lbnQgPT0gXCJmdW5jdGlvblwiO1xyXG5cdH0gKTtcclxuXHJcblx0cmV0dXJuIGZsdWN0dWF0ZSggbG9vc2VuKCBlbnRpdHksIHRydWUsIGRlcHRoLCBsaW1pdGVyICkgKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm1vcjtcclxuIl19
//# sourceMappingURL=rmor.support.js.map
