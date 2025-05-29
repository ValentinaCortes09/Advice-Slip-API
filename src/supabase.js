import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fgqrjoqghzlbkngxdgzf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZncXJqb3FnaHpsYmtuZ3hkZ3pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NDU0MjcsImV4cCI6MjA2NDEyMTQyN30.Zxo6HWqnFcuq5UQ9om0Pd9Qzou9BeRrTO5XNhXXdL8w';
export const supabase = createClient(supabaseUrl, supabaseKey);