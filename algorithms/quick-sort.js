const swap = require('./swap');

function quickSort(inputArray, isAsc) {
	this.inputArray = [...inputArray];
	this.isAsc = isAsc;

	this.run = () => {
		return this.sort(this.inputArray, 0, this.inputArray.length - 1);
	};

	this.sort = (array, startKey, endKey) => {
		// condition to break recursive process
		if (endKey <= startKey) {
			return array;
		}

		// get pivot key and resort two partition by pivot key
		let pivot = this.partition(array, startKey, endKey);

		// recursion the left array  and the right array
		this.sort(array, 0, pivot - 1);				// the left array not include the pivot
		this.sort(array, pivot + 1, endKey);	// the right array not include the pivot

		return array;
	};

	this.partition = (array, startKey, endKey) => {
		// in this demo, I choose pivot is key of the end item.
		let pivotValue = array[endKey];

		let lastSmallerKey = startKey - 1;

		for (let key = startKey; key < endKey; key++) {
			if (( this.isAsc && array[key] <= pivotValue) ||		// sort asc
				(!this.isAsc && array[key] >= pivotValue)) {		// sort desc
				// swap current item with the next position of the last smaller position
				swap(array, ++lastSmallerKey, key);
			}
		}
		
		// swap pivot with the next position of the last smaller position
		swap(array, ++lastSmallerKey, endKey);
		
		return lastSmallerKey;
	};
}

const main = (inputArray, isAsc = 1) => {
	if (inputArray.length < 2) return;

	let sort = new quickSort(inputArray, isAsc);
	let res = sort.run();

	return res;
}

module.exports = main;