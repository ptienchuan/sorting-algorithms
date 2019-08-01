const swap = require('./swap');

const main = (inputArray, isAsc = 1) => {
	if (inputArray.length < 2) return;
	
	for (const rootKey in inputArray) {
		let targetKey = parseInt(rootKey);

		for (let compareKey = targetKey + 1; compareKey < inputArray.length; compareKey++) {
			if (( isAsc && inputArray[compareKey] < inputArray[targetKey] ) ||		// sort asc
				(!isAsc && inputArray[compareKey] > inputArray[targetKey] ) ) {		// sort desc
				targetKey = compareKey;
			}
				
		}
	
		swap(inputArray, rootKey, targetKey);
	}
	return;
}

module.exports = main;