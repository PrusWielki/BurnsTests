import { BASE_URL } from '$lib/constants/url.js';
import { json } from '@sveltejs/kit';

export async function GET({ locals: { supabase } }) {
	await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: `${BASE_URL}callback`
		}
	});

	json({ code: 200 });
}
