
const range = (amount: number, fn?: () => unknown) => {
	const arr = Array.from(Array(amount).keys());

	if (fn) {
		return arr.map(fn);
	}

	return arr;
};

export const ListUtil = { range };

console.log(ListUtil.range(5, () => 'test'));