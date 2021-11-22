const swap = (arr: number[], i: number, j: number): void => {
	const temp: number = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};

const bubbleSortOrder = (array: number[]): number[] => {
	const array2: number[] = array.slice();
	const order: any = [];

	let i: number | null, j: number | null;

	for (i = 0; i < array2.length; i++) {
		for (j = 0; j < array2.length - i - 1; j++) {
			order.push([j, j + 1, null, null]);
			if (array2[j] > array2[j + 1]) {
				swap(array2, j, j + 1);
				order.push([j, j + 1, array2.slice(), null]);
			}
		}
		order.push([null, null, null, j]);
	}

	return order;
	// console.log(order);
};

export default bubbleSortOrder;
