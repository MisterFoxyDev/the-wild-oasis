import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dqawtcpouotkcdisfhao.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxYXd0Y3BvdW90a2NkaXNmaGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0MDk2NDksImV4cCI6MjA0MTk4NTY0OX0.5zekiCe5hOzQ7YBLp7vX1JsebPZz-2l9YdcdXNwOOrE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
