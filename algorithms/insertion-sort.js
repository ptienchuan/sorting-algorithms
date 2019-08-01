const swap = require('./swap');

const main = (inputArray, isAsc = 1) => {
	if (inputArray.length < 2) return;

	// loop item of input array
	for (const key in inputArray) {
		let rootKey = parseInt(key);

		// if the item front of current item is exist
		if (typeof inputArray[rootKey - 1] !== 'undefined') {

			// loop item of the array front of current item
			for (let subKey = rootKey; subKey >= 0; subKey--) {

				// swap item
				if (( isAsc && inputArray[subKey - 1] > inputArray[subKey]) ||		// sort ASC
					(!isAsc && inputArray[subKey - 1] < inputArray[subKey]) ) {		// sort DESC
					swap(inputArray, subKey - 1, subKey);
				}

			}
			// --- END loop item of the array front of current item

		}
	}
	// --- END loop item of input array

	return;
}

module.exports = main;