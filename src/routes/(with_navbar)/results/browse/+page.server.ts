import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const { data } = await supabase
		.from('Tests')
		.select()
		.order('created_at', { ascending: false })
		.range(0, 20);

	return { testData: data };
};
