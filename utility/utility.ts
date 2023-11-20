import { supabase } from "./supabase";
type userType = {
  email: string;
  password: string;
  username?: string;
  firstName?: string;
  lastName?: string;
};
export const createNewUser = async ({
  email,
  password,
  username,
  firstName,
  lastName,
}: userType) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
        username,
      },
    },
  });
  return { data, error };
};
export const loginUser = async ({ email, password }: userType) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};
export const retrieveSession = async () => {
  const {
    data: { session },
    // error,
  } = await supabase.auth.getSession();
  if (session) {
    return { session };
  }
};

export const logUserOut = async () => {
  const { error } = await supabase.auth.signOut();
  return error;
};

export const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};




















// michael.alazar.am@gmail.com
// &munsEHe49$Q4Mswt@L@^Dn4Xr6B&i5E5AL9Q8*x
