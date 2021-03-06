'use strict';

module.exports = {
		checkifsorted: checkifsorted,
		runningtime: runningtime
	};

var ms = require('./mergesort.js'),
	ra = require('./randomarray.js');

function checkifsorted(array) {
	for (var i = 1; i < array.length; ++i) {
		if (array[i] < array[i - 1]) {
			return false;
		}
	}
	return true;
}

function runningtime() {
	// must keep the arrays local to this function;
	// otherwise, subsequent calls to the function will run our algorithm on already sorted arrays
	var bigarrms = ra(4000000),
		bigarrnative = bigarrms.slice(0);

	console.time('4000000-elements-mstime');
	ms(bigarrms);
	console.timeEnd('4000000-elements-mstime');

	console.time('4000000-elements-nativesorttime');
	bigarrnative.sort(function(a, b) {
		return (a < b)? -1 : (a === b)? 0 : 1;
	});
	console.timeEnd('4000000-elements-nativesorttime');

	return checkifsorted(bigarrms);
}
