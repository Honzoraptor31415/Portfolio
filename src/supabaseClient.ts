import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(import.meta.env.REACT_APP_SUPABASE_APP_URL, import.meta.env.REACT_APP_SUPABASE_APP_ANON_KEY)