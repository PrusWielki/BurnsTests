import { error } from '@sveltejs/kit';
import { TEST_NAMES_LOWER, BACKGROUND_NAMES } from '$lib/cms/tests/tests';
import { QUESTION_SET } from '$lib/cms/tests/questions';
import { TITLES } from '$lib/cms/tests/titles';
import { MAX_RANGES, MIN_RANGES } from '$lib/cms/tests/ranges';
import { TEST_DESCRIPTION_HELP } from '$lib/cms/tests/description';

export function load({ params }) {
	const index = TEST_NAMES_LOWER.indexOf(params.testName);
	if (-1 === index) throw error(404, 'Not found');

	return {
		title: TITLES[index],
		questions: QUESTION_SET[index],
		minRange: MIN_RANGES[index],
		maxRange: MAX_RANGES[index],
		helpDescription: TEST_DESCRIPTION_HELP[index],
		backgroundName: BACKGROUND_NAMES[index]
	};
}
