/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {

    if(functions.length === 0){
        return function (x){
            return x
        }
    }
	return functions.reduce(function (f,g) {
        return function (x){
            return f(g(x));
        }
    })
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */