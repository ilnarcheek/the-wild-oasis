import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wfnknsvfebfszoakgqxl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indmbmtuc3ZmZWJmc3pvYWtncXhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyMDgzMTUsImV4cCI6MjAzMTc4NDMxNX0.1bJcBhgAACvejKU1l8MOaaxiKXT3XfuQGZV_p-Dz64g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
