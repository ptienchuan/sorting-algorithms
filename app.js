const selectionSort = require('./algorithms/selection-sort');
const bubleSort = require('./algorithms/bubble-sort');
const insertionSort = require('./algorithms/insertion-sort');

const mergeSort = require('./algorithms/merge-sort');
const heapSort = require('./algorithms/heap-sort');
const quickSort = require('./algorithms/quick-sort');

process.stdin.setEncoding('utf8');

console.log("\r\nPlease input the array that you want to sort:");
console.log("(Enter \"done\" when finished)");
console.log("(Enter \"exit\" to close program)\r\n");
console.log("Array items:");

let arrayToSort = new Array();
let inputArrayIsDone = false;

process.stdin.on('readable', () => {
	let input = '';
	while ((input = process.stdin.read()) !== null) {
		if (input == 'exit\r\n') {
			process.exit();
		}
		else if (input == 'done\r\n') {
			if (arrayToSort.length === 0) {
				process.exit();
			}
			inputArrayIsDone = true;
			console.log("\r\nThe array you want to sort is:");
			console.log(arrayToSort);
			console.log("Please choose the algorithm you want to use:");
			console.log("\t1. Selection sort");
			console.log("\t2. Bubble sort");
			console.log("\t3. Insertion sort");
			console.log("\t4. Merge sort");
			console.log("\t5. Heap sort");
			console.log("\t6. Quick sort");
			console.log("\tThe default is Quicksort");
		}
		else if (input !== '\r\n' && input !== null) {
			if (!inputArrayIsDone) {
				input = parseFloat(input);
				arrayToSort.push(input);
				console.log(arrayToSort);
			}
			else {
				let ascArray = [...arrayToSort];
				let descArray = [...arrayToSort];
				switch (input) {
					case "1\r\n":
						console.log("You choosed Selection sort.\r\n");
						selectionSort(ascArray, 1);
						selectionSort(descArray, 0);
						break;
					case "2\r\n":
						console.log("You choosed Bubble sort.\r\n");
						bubleSort(ascArray, 1);
						bubleSort(descArray, 0);
						break;
					case "3\r\n":
						console.log("You choosed Insertion sort.\r\n");
						insertionSort(ascArray, 1);
						insertionSort(descArray, 0);
						break;
					case "4\r\n":
						console.log("You choosed Merge sort.\r\n");
						ascArray = mergeSort(ascArray, 1);
						descArray = mergeSort(descArray, 0);
						break;
					case "5\r\n":
						console.log("You choosed Heap sort.\r\n");
						ascArray = heapSort(ascArray, 1);
						descArray = heapSort(descArray, 0);
						break;
					default:
						console.log("You choosed Quick sort.\r\n");
						ascArray = quickSort(ascArray, 1);
						descArray = quickSort(descArray, 0);
						break;
				}
				console.log('ASC array:');
				console.log(ascArray);
				console.log('DESC array:');
				console.log(descArray);
				process.exit();
			}
		}
	}
});