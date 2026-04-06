import type { Pagination } from '../types/pagination.types';

export const fetchPagination = (pageParam?: string, limitParam?: string): Pagination => {
	const page = pageParam ? Number.parseInt(pageParam, 10) : undefined;
	const limit = limitParam ? Number.parseInt(limitParam, 10) : undefined;

	const pagination: Pagination = {
		page,
		limit,
	};

	return pagination;
};