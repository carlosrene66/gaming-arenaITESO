create table public.tournaments (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  date date not null,
  description text,
  created_by uuid references auth.users(id),
  created_at timestamp with time zone default timezone('utc', now())
);
