const sortDataAscending = (data: any[], columnKey: string) => {
	return data.sort((a, b) => {
		const valueA = a[columnKey];
		const valueB = b[columnKey];
		
		if (typeof valueA === 'string' && typeof valueB === 'string') {
			return valueA.localeCompare(valueB);
		} else if (typeof valueA === 'number' && typeof valueB === 'number') {
			return valueA - valueB;
		} else {
			return 0;
		}
	});
};

const sortDataDescending = (data: any[], columnKey: string) => {
	return sortDataAscending(data, columnKey).reverse();
};

export default {
	sortDataAscending,
	sortDataDescending
}
