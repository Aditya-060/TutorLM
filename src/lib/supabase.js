import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nsouktlfcgimdkdcqygg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zb3VrdGxmY2dpbWRrZGNxeWdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3NDA1MDksImV4cCI6MjA4NzMxNjUwOX0.4QjkSlpH8E5MK1R0VYAOmG9tf68fsKch_UmiVMzPQno';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
