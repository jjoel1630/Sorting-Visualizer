let order: any[] = [];

const swap = (arr: number[], i: number, j: number): void => {
	const temp: number = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};

const quickSort = (array: number[], first: number, last: number) => {
	if (first >= last) {
		if (first === last) order.push([null, null, null, first]);
		return;
	}

	const pivot: number = Math.floor(Math.random() * (last - first)) + first;
	swap(array, first, pivot);
	order.push([first, pivot, array.slice(), null]);

	const pivoti: number = partition(array, first, last);

	quickSort(array, first, pivoti - 1);
	quickSort(array, pivoti + 1, last);

	return;
};

const partition = (array: number[], first: number, last: number): number => {
	let pivotElem: number = first;
	let i: number = first;

	for (let j = first + 1; j <= last; j++) {
		order.push([j, pivotElem, null, null]);
		if (array[j] < array[pivotElem]) {
			i++;
			swap(array, j, i);
			order.push([j, i, array.slice(), null]);
		}
	}

	swap(array, pivotElem, i);
	order.push([pivotElem, i, array.slice(), null]);
	order.push([null, null, null, i]);
	return i;
};

const quickSortAlgo = (array: number[]): any[] => {
	const newArray = array.slice();
	order = [];

	quickSort(newArray, 0, array.length - 1);

	return order;
};

export default quickSortAlgo;
