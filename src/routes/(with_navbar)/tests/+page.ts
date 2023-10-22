import { TEST_NAMES_LOWER, BACKGROUND_NAMES } from '$lib/cms/tests/tests';
import { QUESTION_SET } from '$lib/cms/tests/questions';
import { TITLES } from '$lib/cms/tests/titles';
import { MAX_RANGES, MIN_RANGES } from '$lib/cms/tests/ranges';
import { GENERAL_TEST_DESCRIPTION_HELP, TEST_DESCRIPTION_HELP } from '$lib/cms/tests/description';
import {
	SCORES_MEANING_RANGES,
	SCORES_MEANING_SHORT_DESCRIPTION
} from '$lib/cms/tests/scores_meaning.js';

export const _getTestData = (testName: string) => {
	const index = TEST_NAMES_LOWER.indexOf(testName);
	if (-1 === index) return null;

	return {
		title: TITLES[index],
		questions: QUESTION_SET[index],
		minRange: MIN_RANGES[index],
		maxRange: MAX_RANGES[index],
		helpDescription: TEST_DESCRIPTION_HELP[index],
		generalHelpDescription: GENERAL_TEST_DESCRIPTION_HELP[index],
		backgroundName: BACKGROUND_NAMES[index],
		scoresMeaningRanges: SCORES_MEANING_RANGES[index],
		scoresMeaningShortDescription: SCORES_MEANING_SHORT_DESCRIPTION[index]
	};
};
