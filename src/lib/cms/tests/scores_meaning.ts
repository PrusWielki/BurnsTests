const SCORES_MEANING_RANGES_DEPRESSION = ['0', '3-5', '6-13', '14-25', '26-38', '39-45'];
const SCORES_MEANING_RANGES_ANXIETY = ['0', '1-10', '11-25', '26-50', '51-75', '76-99'];
const SCORES_MEANING_RANGES_RELATIONSHIPS = ['0-16', '7-23', '23-28', '29-34', '35-39', '40-42'];
const SCORES_MEANING_RANGES_HAPPINESS = ['0-1', '2-4', '3-5', '6-10', '11-15', '16-19', '20'];
const SCORES_MEANING_RANGES_ADDICTIONS = ['0-16', '7-23', '23-28', '29-34', '35-39', '40-42'];

const SCORE_MEANING_SHORT_DESCRIPTION_DEPRESSION = [
	'No symptoms',
	'Borderline',
	'Mild',
	'Moderate',
	'Severe',
	'Extreme'
];
const SCORE_MEANING_SHORT_DESCRIPTION_ANXIETY = [
	'No symptoms',
	'Borderline',
	'Mild',
	'Moderate',
	'Severe',
	'Extreme'
];
const SCORE_MEANING_SHORT_DESCRIPTION_RELATIONSHIPS = [
	'Extremely dissatisfied',
	'Very dissatisfied',
	'Moderately dissatisfied',
	'Somewhat satisfied',
	'Moderately satisfied',
	'Extremely satisfied'
];
const SCORE_MEANING_SHORT_DESCRIPTION_HAPPINESS = [
	'No happiness',
	'Minimal happiness',
	'Some happiness',
	'Moderate happiness',
	'A lot of happiness',
	'Extreme happiness',
	'Tremendous happiness'
];
const SCORE_MEANING_SHORT_DESCRIPTION_ADDICTIONS = [
	'The higher the score, the worse the addiction'
];
export const SCORES_MEANING_RANGES = [
	{ test: 'Anxiety', data: SCORES_MEANING_RANGES_ANXIETY },
	{ test: 'Depression', data: SCORES_MEANING_RANGES_DEPRESSION },
	{ test: 'Relationships', data: SCORES_MEANING_RANGES_RELATIONSHIPS },
	{ test: 'Happiness', data: SCORES_MEANING_RANGES_HAPPINESS },
	{ test: 'Addictions', data: SCORES_MEANING_RANGES_ADDICTIONS }
];

export const SCORES_MEANING_SHORT_DESCRIPTION = [
	{ test: 'Anxiety', data: SCORE_MEANING_SHORT_DESCRIPTION_ANXIETY },
	{ test: 'Depression', data: SCORE_MEANING_SHORT_DESCRIPTION_DEPRESSION },
	{ test: 'Relationships', data: SCORE_MEANING_SHORT_DESCRIPTION_RELATIONSHIPS },
	{ test: 'Happiness', data: SCORE_MEANING_SHORT_DESCRIPTION_HAPPINESS },
	{ test: 'Addictions', data: SCORE_MEANING_SHORT_DESCRIPTION_ADDICTIONS }
];
