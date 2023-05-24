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
