import { getTestsData } from '$lib/hooks/test_data.js';
import { error, json } from '@sveltejs/kit';

export async function GET({ locals: { supabase }, url }) {
	const response = { success: true, reason: '' };
	let data: unknown;
	const from = url.searchParams.get('from');
	const to = url.searchParams.get('to');

	if (from && to)
		await getTestsData(+from, +to, supabase).then((result) => {
			data = result;
		});

	if (!response.success) error(400, response.reason);
	else return json({ code: 200, data: data });
}
