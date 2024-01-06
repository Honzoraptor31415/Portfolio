import { createClient } from '@supabase/supabase-js';

export const supabase = createClient("https://wkoaclnrbrydhqtsnisf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indrb2FjbG5yYnJ5ZGhxdHNuaXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyMTA5MzIsImV4cCI6MjAxOTc4NjkzMn0.Zw-JOVRAcpHRlV2W7ArBbPM9N_VdxHXYcyBIVTnwaKc")