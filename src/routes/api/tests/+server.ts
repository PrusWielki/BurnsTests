import { getTestsData } from '$lib/hooks/test_data.js';

export async function GET({ locals: { supabase } }) {
	const response: PlansGetResponse = { success: true, reason: '', data: undefined };

	await getTestsData(from, to, supabase).then((result) => {
		if (testData !== null && result.data !== null) {
			returnedTestData = result.data;
			testData = testData.concat(result.data);
		}
		fetching = false;
	});
	if (!response.success) return json({ code: 400, response });

	return json({ code: 200, data: response.data });
}
