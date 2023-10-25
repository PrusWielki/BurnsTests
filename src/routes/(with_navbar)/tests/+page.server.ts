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
		const bodyValues = Object.values(body);
		const questionsResults = bodyValues
			.slice(1, bodyValues.length - 1)
			.map((value) => parseInt(value as string));

		if (
			!questionsResults ||
			!bodyValues[0] ||
			body['description'] === null ||
			body['description'] === undefined
		)
			return fail(400);
		const { error: err } = await supabase.from('Tests').insert({
			questions: questionsResults,
			type: body['testName'],
			description: body['description'],
			questions_sum: questionsResults.reduce((a, b) => a + b, 0)
		});
		if (err) {
			return fail(400, {
				err
			});
		}
		return { success: true, total: questionsResults.reduce((a, b) => a + b, 0) };
	}
};
