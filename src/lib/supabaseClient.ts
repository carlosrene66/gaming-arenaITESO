import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ovgindhckozcyunncddq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92Z2luZGhja296Y3l1bm5jZGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2ODk5NzYsImV4cCI6MjA2ODI2NTk3Nn0.MmOVyQ7CmrlXXHB5YuG3dD-x9Cl_wWzV1ZzfaojOBTM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
