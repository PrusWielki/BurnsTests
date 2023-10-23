import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '../../types/supabase';

export const getTestsData = async (
	from: number,
	to: number,
	supabase: SupabaseClient<Database>
) => {
	return await supabase
		.from('Tests')
		.select()
		.order('created_at', { ascending: false })
		.range(from, to);
};

export const getTestDataByType = async (
	from: number,
	to: number,
	supabase: SupabaseClient<Database>,
	type: string
) => {
	return await supabase
		.from('Tests')
		.select()
		.eq('type', type)
		.order('created_at', { ascending: false })
		.range(from, to);
};
export const getTestDataByDate = async (
	supabase: SupabaseClient<Database>,
	dateFrom: Date,
	dateTo: Date
) => {
	return await supabase
		.from('Tests')
		.select()
		.lt('created_at', dateTo.toISOString())
		.gt('created_at', dateFrom.toISOString())
		.order('created_at', { ascending: true });
};
export const insertTest = async (
	supabase: SupabaseClient<Database>,
	answerSet: Array<number>,
	title: string,
	description: string
) => {
	return await supabase.from('Tests').insert({
		questions: answerSet,
		type: title,
		description: description,
		created_at: new Date(),
		questions_sum: answerSet.reduce((a, b) => a + b, 0)
	});
};
