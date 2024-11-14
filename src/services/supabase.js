import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://etnckncpodjdghvzycds.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bmNrbmNwb2RqZGdodnp5Y2RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0MzY3NTcsImV4cCI6MjA0NzAxMjc1N30.slPxqCnPLz4_l91mA4g_WEFjc23ZAFC4X-w55sotowg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
