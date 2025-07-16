create table public.user_tournaments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  tournament_id uuid references public.tournaments(id) on delete cascade,
  registered_at timestamp with time zone default timezone('utc', now()),
  unique(user_id, tournament_id)
);
