const swap = (arr: number[], i: number, j: number): void => {
	const temp: number = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};

const insertionSort = (array: number[]): any[] => {
	const array2: number[] = array.slice();
	const order: any[] = [];

	let j: number;

	for (let i = 0; i < array2.length; i++) {
		j = i - 1;

		while (j >= 0 && array2[j] > array2[j + 1]) {
			swap(array2, j, j + 1);
			order.push([j, j + 1, null, null]);
			order.push([j, j + 1, array2.slice(), null]);
			j--;
		}
	}

	for (let i = 0; i < array2.length; i++) {
		order.push([null, null, null, i]);
	}

	return order;
};

export default insertionSort;
