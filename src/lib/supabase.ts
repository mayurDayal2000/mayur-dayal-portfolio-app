import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function selectData() {
  const { data, error } = await supabase
    .from("resume")
    .select("data")
    .eq("id", 1)
    .single();

  if (error) {
    console.error("Unable to find data: ", error);
    return null;
  }

  console.log("Data fetched successfully:");
  return data.data;
}
