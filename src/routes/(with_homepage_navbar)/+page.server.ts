import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { getSession } }) => {
	const session = await getSession();
	console.log(session);
	if (session) {
		throw redirect(302, '/tests');
	}
	return { session: session };
};
