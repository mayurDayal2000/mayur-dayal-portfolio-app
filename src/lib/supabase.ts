import { createClient } from "@supabase/supabase-js";

interface ContactFormTypes {
  name: string;
  email: string;
  message: string;
}

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

export async function insertContactFormData(values: ContactFormTypes) {
  const { data, error } = await supabase.from("contacted").insert([
    {
      name: values.name,
      email: values.email,
      message: values.message,
    },
  ]);

  if (error) {
    console.error("Unable to insert data: ", error);
    return { success: false, error: error.message };
  }

  console.log("Data submitted successfully:");
  return { success: true, data };
}
