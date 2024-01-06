import { createClient } from '@supabase/supabase-js';

const appUrl = process.env.REACT_APP_SUPABASE_APP_URL
const key = process.env.REACT_APP_SUPABASE_APP_ANON_KEY

export const supabase = createClient(appUrl!, key!)