import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://fqwtfohqcstvlurpodxy.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxd3Rmb2hxY3N0dmx1cnBvZHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE4MjYxMzUsImV4cCI6MTk5NzQwMjEzNX0.aAHbvJUJcVs3rwsjdh3S6HGoRNZItuihQ4obaz9Cg2w'
);
