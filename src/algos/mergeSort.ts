let order: any = [];

const halfArr = (array: number[], left: number, right: number): void => {
	if (left >= right) return;

	const mid = Math.floor((left + right) / 2);

	halfArr(array, left, mid);
	halfArr(array, mid + 1, right);

	merge(array, left, mid, right);
};

const merge = (array: number[], left: number, mid: number, right: number): void => {
	let i: number = left,
		j: number = mid + 1;
	let newArr: number[] = [];

	while (i <= mid && j <= right) {
		order.push([i, j, null, null]);
		if (array[i] >= array[j]) {
			newArr.push(array[j++]);
		} else {
			newArr.push(array[i++]);
		}
	}

	while (i <= mid) {
		order.push([i, null, null, null]);
		newArr.push(array[i++]);
	}

	while (j <= right) {
		order.push([null, j, null, null]);
		newArr.push(array[j++]);
	}

	for (i = left; i <= right; i++) {
		array[i] = newArr[i - left];
		order.push([i, null, array.slice(), null]);
	}
};

const mergeSortAlgo = (array: number[]) => {
	order = [];
	const newArr = array.slice();

	halfArr(newArr, 0, newArr.length - 1);

	for (let i = 0; i < newArr.length; i++) {
		order.push([null, null, null, i]);
	}

	return order;
};

export default mergeSortAlgo;
