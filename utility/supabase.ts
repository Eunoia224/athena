import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL: any = process.env.NEXT_PUBLIC_SUPABASE_URL;
const PUBLIC_ANON_KEY: any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const supabase = createClient(SUPABASE_URL, PUBLIC_ANON_KEY);
