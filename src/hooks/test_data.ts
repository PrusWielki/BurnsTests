import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

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
		.gt('created_at', dateFrom)
		.lt('created_at', dateTo)
		.order('created_at', { ascending: false });
};
