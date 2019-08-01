const swap = require('./swap');

const looping = (array, isAsc) => {
	let swapped = false;
	for (const key in array) {
		let index = parseInt(key);
		if (typeof array[index + 1] !== "undefined") {
			// compare current item and next item
			if (( isAsc && array[index + 1] < array[index]) ||		// sort ASC
				(!isAsc && array[index + 1] > array[index]) ) {		// sort DESC
				swap(array, index, index + 1);
				swapped = true;
			}
		}
	}
	
	return (swapped) ? false : true;
}

const main = (inputArray, isAsc = 1) => {
	if (inputArray.length < 2) return;
	
	let sorted = false;
	while (!sorted) {
		sorted = looping(inputArray, isAsc);
	}

	return;
}

module.exports = main;