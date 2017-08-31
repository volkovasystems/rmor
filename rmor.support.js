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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJtb3Iuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc2VhIiwicmVxdWlyZSIsImRlcGhlciIsImZhbHp5IiwiZmx1Y3R1YXRlIiwibG9vc2VuIiwic2hmdCIsInJtb3IiLCJlbnRpdHkiLCJkZXB0aCIsImxpbWl0ZXIiLCJFcnJvciIsInBhcmFtZXRlciIsImFyZ3VtZW50cyIsIk5VTUJFUiIsIkluZmluaXR5IiwiRlVOQ1RJT04iLCJlbGVtZW50Iiwia2V5Iiwic2VydmVyIiwiZ2xvYmFsIiwidGVzdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkRBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFlBQVlILFFBQVMsV0FBVCxDQUFsQjtBQUNBLElBQU1JLFNBQVNKLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUssT0FBT0wsUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTU0sT0FBTyxTQUFTQSxJQUFULENBQWVDLE1BQWYsRUFBdUJDLEtBQXZCLEVBQThCQyxPQUE5QixFQUF1QztBQUNuRDs7Ozs7Ozs7OztBQVVBLEtBQUlQLE1BQU9LLE1BQVAsS0FBbUIsUUFBT0EsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUF4QyxFQUFrRDtBQUNqRCxRQUFNLElBQUlHLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUMsWUFBWU4sS0FBTU8sU0FBTixDQUFoQjs7QUFFQUosU0FBUVAsT0FBUVUsU0FBUixFQUFtQkUsTUFBbkIsRUFBMkJDLFFBQTNCLENBQVI7O0FBRUFMLFdBQVVSLE9BQVFVLFNBQVIsRUFBbUJJLFFBQW5CLEVBQTZCLFNBQVNOLE9BQVQsQ0FBa0JPLE9BQWxCLEVBQTJCQyxHQUEzQixFQUFnQztBQUN0RTs7Ozs7QUFLQSxNQUFJbEIsS0FBS21CLE1BQUwsSUFBZUMsV0FBV1osTUFBMUIsSUFBc0MsVUFBRixDQUFlYSxJQUFmLENBQXFCSCxHQUFyQixDQUF4QyxFQUFvRTtBQUNuRSxVQUFPLElBQVA7QUFDQTs7QUFFRCxTQUFPLE9BQU9ELE9BQVAsSUFBa0IsVUFBekI7QUFDQSxFQVhTLENBQVY7O0FBYUEsUUFBT2IsVUFBV0MsT0FBUUcsTUFBUixFQUFnQixJQUFoQixFQUFzQkMsS0FBdEIsRUFBNkJDLE9BQTdCLENBQVgsQ0FBUDtBQUNBLENBakNEOztBQW1DQVksT0FBT0MsT0FBUCxHQUFpQmhCLElBQWpCIiwiZmlsZSI6InJtb3Iuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwicm1vclwiLFxuXHRcdFx0XCJwYXRoXCI6IFwicm1vci9ybW9yLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJybW9yLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInJtb3JcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3Jtb3IuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJybW9yLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Q3JlYXRlcyBhIHNhZmUgY29weSBvZiBkYXRhIHRoYXQgY2FuIGJlIHBhcnNlZCBieSBKU09OIHBhcnNlci5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNlYVwiOiBcImFzZWFcIixcblx0XHRcdFwiZGVwaGVyXCI6IFwiZGVwaGVyXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiZmx1Y3R1YXRlXCI6IFwiZmx1Y3R1YXRlXCIsXG5cdFx0XHRcImxvb3NlblwiOiBcImxvb3NlblwiLFxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xuY29uc3QgZGVwaGVyID0gcmVxdWlyZSggXCJkZXBoZXJcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGZsdWN0dWF0ZSA9IHJlcXVpcmUoIFwiZmx1Y3R1YXRlXCIgKTtcbmNvbnN0IGxvb3NlbiA9IHJlcXVpcmUoIFwibG9vc2VuXCIgKTtcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xuXG5jb25zdCBybW9yID0gZnVuY3Rpb24gcm1vciggZW50aXR5LCBkZXB0aCwgbGltaXRlciApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XHRcImRlcHRoXCI6IFwibnVtYmVyXCIsXG5cdFx0XHRcdFwibGltaXRlclwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggZW50aXR5ICkgfHwgdHlwZW9mIGVudGl0eSAhPSBcIm9iamVjdFwiICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZW50aXR5XCIgKTtcblx0fVxuXG5cdGxldCBwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMgKTtcblxuXHRkZXB0aCA9IGRlcGhlciggcGFyYW1ldGVyLCBOVU1CRVIsIEluZmluaXR5ICk7XG5cblx0bGltaXRlciA9IGRlcGhlciggcGFyYW1ldGVyLCBGVU5DVElPTiwgZnVuY3Rpb24gbGltaXRlciggZWxlbWVudCwga2V5ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0VGhpcyBpcyBhbiBpbnRlcm5hbCBzZWN1cml0eSBmZWF0dXJlLCBpZiB0aGUgZW50aXR5IGlzIGdsb2JhbC5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIGFzZWEuc2VydmVyICYmIGdsb2JhbCA9PT0gZW50aXR5ICYmICggL15wcm9jZXNzLyApLnRlc3QoIGtleSApICl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHlwZW9mIGVsZW1lbnQgPT0gXCJmdW5jdGlvblwiO1xuXHR9ICk7XG5cblx0cmV0dXJuIGZsdWN0dWF0ZSggbG9vc2VuKCBlbnRpdHksIHRydWUsIGRlcHRoLCBsaW1pdGVyICkgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcm1vcjtcbiJdfQ==
//# sourceMappingURL=rmor.support.js.map
