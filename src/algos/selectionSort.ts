const swap = (arr: number[], i: number, j: number): void => {
	const temp: number = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};

const selectionSort = (array: number[]): number[] => {
	const array2: number[] = array.slice();
	const order: any = [];

	for (let i = 0; i < array2.length; i++) {
		for (let j = i; j < array2.length; j++) {
			order.push([i, j, null, null]);

			if (array2[i] > array2[j]) {
				swap(array2, i, j);
				order.push([i, j, array2.slice(), null]);
			}
		}

		order.push([null, null, null, i]);
	}

	return order;
};

export default selectionSort;
