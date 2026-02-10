-- Create the admin user
-- NOTE: This user creation might need to be run in the Auth section of Supabase or via a specific function if direct insert isn't allowed, 
-- but this is the standard SQL way if you have permissions.
-- Ideally, you should 'Sign Up' this user once via the frontend or Supabase Dashboard to get a proper UID, 
-- but here is a script to INSERT if you are running as superuser.

-- However, for Supabase, it is often better to just sign up the user manually or use the `auth.users` table IF you have access.
-- A safer way for a script you give to the user is to just tell them to sign up, OR to use the following if they run it in the SQL editor:

INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  uuid_generate_v4(),
  'authenticated',
  'authenticated',
  'admin@selvabhoomiproperties.in',
  crypt('Selvabhoomiproperties@6282', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"provider":"email","providers":["email"]}',
  '{}',
  now(),
  now(),
  '',
  '',
  '',
  ''
);

-- Update RLS Policies to allow Authenticated users (the admin) to Modify data

-- Policy for INSERT
create policy "Allow authenticated users to insert properties"
  on public.properties
  for insert
  to authenticated
  with check (true);

-- Policy for UPDATE
create policy "Allow authenticated users to update properties"
  on public.properties
  for update
  to authenticated
  using (true);

-- Policy for DELETE
create policy "Allow authenticated users to delete properties"
  on public.properties
  for delete
  to authenticated
  using (true);
