export function compareValues(options, desc, isSorted, toSort) {
	const sorted = options.sort((a, b) => {
		return a.properties[desc] - b.properties[desc];
	});
	console.log(sorted);
	if (isSorted === 1) {
		toSort((isSorted += 1));
		return sorted;
	} else {
		toSort(1);
		return sorted.reverse();
	}
}

export function comparePlaceValues(options, desc, isSorted, toSort) {
	const sorted = options.sort((a, b) => {
		a = parseInt(a.properties[desc], 10);
		b = parseInt(b.properties[desc], 10);
		return a - b;
	});
	console.log(sorted);
	if (isSorted === 1) {
		toSort((isSorted += 1));
		return sorted;
	} else {
		toSort(1);
		return sorted.reverse();
	}
}
