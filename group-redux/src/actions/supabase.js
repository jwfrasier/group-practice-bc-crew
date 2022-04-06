import { createClient } from "@supabase/supabase-js";
let supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDE0NTg3OCwiZXhwIjoxOTM1NzIxODc4fQ.0qra9FQYuKCkgMteZ0ZAe2wrMx2v1IFGwsU60Oi4KwY";
let supabaseUrl = "https://mxakcphctxajogkuteth.supabase.co";
const supabase = createClient(supabaseUrl, supabaseKey);

const { user, session, error } = await supabase.auth.signIn({
  email: "example@email.com",
  password: "example-password",
});

export { supabase, supabaseUrl, supabaseKey };
