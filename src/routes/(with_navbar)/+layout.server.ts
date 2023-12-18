import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = async ({ locals: { getSession } }) => {
	const session = await getSession();
	if (!session) {
		redirect(302, '/');
	}
	return { session: session };
};
