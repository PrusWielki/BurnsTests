export const getPagination = (page: number, size = 100) => {
	const limit = size ? +size : 100;
	const from = page ? page * limit : 0;
	const to = page ? from + size - 1 : size - 1;

	return { from, to };
};
