import React, { useEffect, useState } from "react";
import "../src/styles/main.css";
import bubbleSortOrder from "./algos/bubbleSort";
import insertionSort from "./algos/insertionSort";
import mergeSortAlgo from "./algos/mergeSort";
import quickSortAlgo from "./algos/quickSort";
import selectionSort from "./algos/selectionSort";

function App() {
	const [array, setArray] = useState<number[]>([]);
	const [selectedAlgorithm, setSelectedAlgorithm] = useState("bubbleSort");
	const [length, setLength] = useState<number>(30);
	const [sorting, setSorting] = useState<boolean>(false);
	const [completed, setCompleted] = useState<boolean>(true);
	const [speed, setSpeed] = useState<number>(250);
	const [comparedEls, setComparedEls] = useState<number[]>([]);
	const [swapEls, setSwapEls] = useState<number[]>([]);
	const [sortedIndex, setSortedIndex] = useState<number[]>([]);

	function sleep(ms: number) {
		console.log(ms);
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	const genArray = () => {
		let newArray: number[] = [];
		setSortedIndex([]);
		for (let i = 0; i < length; i++) {
			newArray = [...newArray, Math.floor(Math.random() * 500) + 10];
		}

		return newArray;
	};

	const changeAlgorithm = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedAlgorithm(event.target.value);
	};

	const handleSort = () => {
		const sortArr = (order: any) => {
			(function loop(i) {
				setTimeout(() => {
					const [j, k, arr, index] = order[i];
					setComparedEls([j, k]);
					setSwapEls([]);

					if (index !== null) {
						setSortedIndex((prevState) => [...prevState, index]);
					}

					if (arr) {
						setArray(arr);
						if (j !== null || k != null) setSwapEls([j, k]);
					}

					if (++i < order.length) {
						loop(i);
					} else {
						setSorting(false);
						setCompleted(true);
					}
				}, speed);
			})(0);
		};

		setSorting(true);

		selectedAlgorithm === "bubbleSort"
			? sortArr(bubbleSortOrder(array))
			: selectedAlgorithm === "selectionSort"
			? sortArr(selectionSort(array))
			: selectedAlgorithm === "mergeSort"
			? sortArr(mergeSortAlgo(array))
			: selectedAlgorithm === "quickSort"
			? sortArr(quickSortAlgo(array))
			: selectedAlgorithm === "insertionSort"
			? sortArr(insertionSort(array))
			: (() => {
					setSorting(false);
					setCompleted(true);
			  })();
	};

	useEffect(() => setArray([...genArray()]), [length]);
	useEffect(() => setArray([...genArray()]), []);

	const changeLength = (event: React.ChangeEvent<HTMLInputElement>) =>
		setLength(parseInt(event.target.value));

	const changeSpeed = (event: React.ChangeEvent<HTMLInputElement>) =>
		setSpeed(parseInt(event.target.value));

	return (
		<div>
			<div className="navbar">
				{/* <form onSubmit={handleSort}>
					<label>
						<select value={selectedAlgorithm} onChange={changeAlgorithm}>
							<option value="bubbleSort">Bubble Sort</option>
							<option value="selectionSort">Selection Sort</option>
							<option value="mergeSort">Merge Sort</option>
							<option value="quickSort">Quick Sort</option>
							<option value="insertionSort">Insertion Sort</option>
						</select>
					</label>
					<input type="submit" value="Submit" disabled={sorting} />
				</form> */}
				<div className="length">
					<label htmlFor="length">Change Length</label>
					<input
						type="range"
						min="10"
						max="150"
						value={length}
						onChange={changeLength}
						id="length"
						disabled={sorting}
					/>
				</div>
				<div className="speed">
					<label htmlFor="speed">Change Speed</label>
					<input
						id="speed"
						type="range"
						min="10"
						max="1000"
						value={speed}
						onChange={changeSpeed}
						disabled={sorting}
					/>
				</div>
				<div className="select-cont">
					<select value={selectedAlgorithm} onChange={changeAlgorithm}>
						<option value="bubbleSort">Bubble Sort</option>
						<option value="selectionSort">Selection Sort</option>
						<option value="mergeSort">Merge Sort</option>
						<option value="quickSort">Quick Sort</option>
						<option value="insertionSort">Insertion Sort</option>
					</select>
				</div>
				<button onClick={handleSort} disabled={sorting}>
					SORT!
				</button>
				<button onClick={() => setArray([...genArray()])} disabled={sorting}>
					Generate New Array
				</button>
			</div>
			<div className="array-container">
				<div className="array-bar">
					{array.map((block: number, i: number) => {
						const height = (block * 10) / array.length;
						let bg = "turquoise";

						if (comparedEls && (i === comparedEls[0] || i === comparedEls[1])) {
							bg = "#ffff50";
						}

						if (swapEls && (i === swapEls[0] || i === swapEls[1])) {
							bg = "red";
						}
						if (sortedIndex && sortedIndex.includes(i)) {
							bg = "#4bc52e";
						}

						const style = {
							backgroundColor: bg,
							color: "black",
							height: `${block}px`,
							width: "6px",
						};
						return <div key={i} className="block" style={style}></div>;
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
