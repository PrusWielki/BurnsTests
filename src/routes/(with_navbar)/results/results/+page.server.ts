import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw error(401, { message: 'Unauthorized' });
	}
	const { data } = await supabase
		.from('Tests')
		.select()
		.order('created_at', { ascending: false })
		.range(0, 10);

	return { session: session, testData: data };
};
