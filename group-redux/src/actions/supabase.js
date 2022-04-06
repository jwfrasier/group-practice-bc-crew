import { createClient } from "@supabase/supabase-js";
let supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDE0NTg3OCwiZXhwIjoxOTM1NzIxODc4fQ.0qra9FQYuKCkgMteZ0ZAe2wrMx2v1IFGwsU60Oi4KwY";
let supabaseUrl = "https://mxakcphctxajogkuteth.supabase.co";
const supabase = createClient(supabaseUrl, supabaseKey);

const userSignUp = async (email, password) => {
  const { user, session, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    return error;
  }
  return user;
};

const userSignIn = async (email, password) => {
  console.log(email, password);
  const { user, session, error } = await supabase.auth.signIn({
    email: email,
    password: password,
  });
  if (error) {
    return error;
  }
  return user;
};

export { supabase, supabaseUrl, supabaseKey, userSignUp, userSignIn };
