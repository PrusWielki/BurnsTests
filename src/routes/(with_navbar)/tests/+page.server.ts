import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const load: PageServerLoad = async ({ locals: { getSession } }) => {
	const session = await getSession();
	if (!session) {
		throw redirect(302, '/');
	}
	return { session: session };
};

export const actions: Actions = {
	saveTest: async ({ request, locals: { supabase } }) => {
		const body = Object.fromEntries(await request.formData());
		console.log(body);
		if (!body.testName) return;
		const { data, error: err } = await supabase.from('Tests').insert({
			questions: answerSet,
			type: body.testName,
			description: description,
			created_at: new Date(),
			questions_sum: answerSet.reduce((a, b) => a + b, 0)
		});
		if (err) {
			return fail(400, {
				err
			});
		}
	}
};
