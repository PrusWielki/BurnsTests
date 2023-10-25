const DEPRESSION_TEST_DESCRIPTION_HELP = ['Not at all', 'Somewhat', 'Moderately', 'A lot'];
const ANXIETY_TEST_DESCRIPTION_HELP = DEPRESSION_TEST_DESCRIPTION_HELP;
const RELATIONSHIPS_TEST_DESCRIPTION_HELP = [
	'Very Dissatisfied',
	'Moderately Dissatisfied',
	'Slightly Dissatisfied',
	'Neautral',
	'Slightly Satisfied',
	'Moderately Satisfied',
	'Very Satisfied'
];
const HAPPINESS_TEST_DESCRIPTION_HELP = [
	'Not at all',
	'Somewhat',
	'Moderately',
	'A lot',
	'Extremely'
];
const ADDICTIONS_TEST_DESCRIPTION_HELP = [
	'Not at all',
	'Slightly true',
	'Moderately true',
	'Very true',
	'Completely true'
];

const GENERAL_DEPRESSION_TEST_DESCRIPTION_HELP =
	'Please have a look at the questions and select a number on the scale corresponding to how strongly you feel in a particular area. You can think of last 2 weeks, or a week or today.';
const GENERAL_ANXIETY_TEST_DESCRIPTION_HELP = GENERAL_DEPRESSION_TEST_DESCRIPTION_HELP;
const GENERAL_RELATIONSHIPS_TEST_DESCRIPTION_HELP =
	'Think of a relationship of Your choice. It can be a friend, a family member, a colleague or a partner. Answer the questions according to the scale below.';
const GENERAL_HAPPINESS_TEST_DESCRIPTION_HELP = GENERAL_DEPRESSION_TEST_DESCRIPTION_HELP;
const GENERAL_ADDICTIONS_TEST_DESCRIPTION_HELP = GENERAL_DEPRESSION_TEST_DESCRIPTION_HELP;
export const TEST_DESCRIPTION_HELP = [
	{ test: 'Anxiety', data: ANXIETY_TEST_DESCRIPTION_HELP },
	{ test: 'Depression', data: DEPRESSION_TEST_DESCRIPTION_HELP },
	{ test: 'Relationships', data: RELATIONSHIPS_TEST_DESCRIPTION_HELP },
	{ test: 'Happiness', data: HAPPINESS_TEST_DESCRIPTION_HELP },
	{ test: 'Addictions', data: ADDICTIONS_TEST_DESCRIPTION_HELP }
];
export const GENERAL_TEST_DESCRIPTION_HELP = [
	{ test: 'Anxiety', data: GENERAL_ANXIETY_TEST_DESCRIPTION_HELP },
	{ test: 'Depression', data: GENERAL_DEPRESSION_TEST_DESCRIPTION_HELP },
	{ test: 'Relationships', data: GENERAL_RELATIONSHIPS_TEST_DESCRIPTION_HELP },
	{ test: 'Happiness', data: GENERAL_HAPPINESS_TEST_DESCRIPTION_HELP },
	{ test: 'Addictions', data: GENERAL_ADDICTIONS_TEST_DESCRIPTION_HELP }
];
