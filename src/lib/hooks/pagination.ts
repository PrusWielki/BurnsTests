export const getPagination = (page: number, size = 10) => {
	const limit = size ? +size : 10;
	const from = page ? page * limit : 0;
	const to = page ? from + size - 1 : size - 1;

	return { from, to };
};
