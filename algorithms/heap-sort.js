const swap = require('./swap');

function heapSort (inputArray, isAsc) {
	this.inputArray = [...inputArray];
	this.isAsc = isAsc;
	this.sortedArray = [];

	this.run = () => {
		this.sort(this.inputArray);
		return this.sortedArray;
	};

	this.sort = (array) => {
		// condition to break recursively
		if (array.length < 2) {
			this.sortedArray.unshift(array[array.length - 1]);
			return;
		}

		// transform array like binary heap
		this.heapify(array);

		// swrap the root node and the last node
		swap(array, 0, array.length - 1);

		// set the max value of current array to the first of sorted array
		this.sortedArray.unshift(array[array.length - 1]);
		array.splice(array.length - 1, 1);

		// recursive sort
		this.sort(array);
	}

	this.heapify = (array) => {
		let swapped = false;
		for (const key in array) {
			let leftChildKey = key * 2 + 1;
			let rightChildKey = key * 2 + 2;
			if (( this.isAsc && array[key] < array[leftChildKey]) || 		// make max-heap for sort asc
				(!this.isAsc && array[key] > array[leftChildKey])) {		// make min-heap for sort desc
				// compare current root to the left child
				swap(array, key, leftChildKey);
				swapped = true;
				break;
			}
			if (( this.isAsc && array[key] < array[rightChildKey]) || 		// make max-heap for sort asc
				(!this.isAsc && array[key] > array[rightChildKey])) {		// make min-heap for sort desc
				// compare current root to the right child
				swap(array, key, rightChildKey);
				swapped = true;
				break;
			}
		}
		if (swapped) {
			this.heapify(array);
		}
		return;
	};
}

const main = (inputArray, isAsc = 1) => {
	if (inputArray.length < 2) return [];

	let sort = new heapSort(inputArray, isAsc);
	let res = sort.run();

	return res;
}

module.exports = main;