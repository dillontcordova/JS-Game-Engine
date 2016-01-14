var Polymorphism = (function() {
	return {
		singletonClass: function(_staticInstanceVar) {
			Assert.is( _staticInstanceVar, 'Can not re-instantiate a singleton!');
		},
		abstractClass: function(_instance, _arguments) {
			var constructor = _instance.constructor;
			Assert.is( constructor === _arguments.callee, '"' + constructor.caller.name + ' can not instantiate abstract class: "' + _arguments.callee.name + '"!' );
		},
		abstractMethod: function(_instance) {
			var constructor = _instance.constructor;
			throw new Error('Function-Class "' + constructor.name + '" has not overriden all parent abstract methods!');
		},
		inherits: function(_child, _parent) {
			Assert.is( !_child || !_parent, 'Both a Child and a Parent Function-Class must be present in order to properly call the inherits method!');
			function TempConstructor(){}
			TempConstructor.prototype = _parent.prototype;
			_child.prototype = new TempConstructor();
			_child.prototype.constructor = _child;
		}
	};
})();
