function mergeSort(inputArray, isAsc) {
	this.inputArray = inputArray;
	this.isAsc = isAsc;

	this.run = () => {
		return this.sort(this.inputArray);
	};

	this.sort = (array) => {
		// condition to end recursive process
		if (array.length < 2) {
			return array;
		}

		let middleIndex = array.length / 2;
		let leftArray = array.slice(0, middleIndex);
		let rightArray = array.slice(middleIndex);

		// recursive split process, until each of half array has one item
		leftArray = this.sort(leftArray);
		rightArray = this.sort(rightArray);
		
		let sortedArray = this.merge(leftArray, rightArray);

		return sortedArray;
	}

	this.merge = (leftArray = [], rightArray = []) => {
		let sortedArray = [];
		while (leftArray.length > 0 && rightArray.length > 0) {
			if (( this.isAsc && leftArray[0] < rightArray[0]) || 		// sort ASC
				(!this.isAsc && leftArray[0] > rightArray[0]) ) {		// sort DESC
				// push to result array and remove from the half array
				sortedArray.push(leftArray[0]);
				leftArray.splice(0, 1);
			}
			else {
				// push to result array and remove from the half array
				sortedArray.push(rightArray[0]);
				rightArray.splice(0, 1);
			}
		}
		// if the left array is not empty, put all items of the left array to end of sorted array
		if (leftArray.length > 0) {
			sortedArray.splice(sortedArray.length, 0, leftArray);
		}
		// if the right array is not empty, put all items of the right array to end of sorted array
		if (rightArray.length > 0) {
			sortedArray.splice(sortedArray.length, 0, rightArray);
		}

		return sortedArray;
	}
};

const main = (inputArray, isAsc = 1) => {
	if (inputArray.length < 2) return inputArray;

	let sort = new mergeSort(inputArray, isAsc);
	let res = sort.run();

	return res;
}

module.exports = main;