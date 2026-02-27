-- Create site_settings table for editable site content
create table if not exists public.site_settings (
  key text primary key,
  value text not null
);

-- Enable Row Level Security
alter table public.site_settings enable row level security;

-- Create Policies
-- Allow anyone to read the settings
create policy "Allow public read access"
on public.site_settings for select
using (true);

-- Allow authenticated users (Admins) to perform all actions
create policy "Allow authenticated admin access"
on public.site_settings for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

-- Insert default settings
insert into public.site_settings (key, value) values
  ('contact_email', 'admin@selvabhoomiproperties.in'),
  ('contact_phone', '+91 93630 88689'),
  ('hero_title', 'SECURE THE'),
  ('hero_subtitle', 'ORIGIN'),
  ('hero_tag', 'PARANDUR AIRPORT CORRIDOR'),
  ('hero_description', 'Own a piece of tomorrow. Legally verified, professionally curated land assets in high-growth infrastructure corridors.'),
  ('hero_image', 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop'),
  -- About Page Defaults
  ('about_hero_subtitle', 'Future Homes'),
  ('about_hero_description', '"Selvabhoomi Properties is bringing absolute transparency and professional management to land investment. We help you build a secure future with ease."'),
  ('about_vision', '"To be the most trusted name in land investment, helping families build generational wealth through secure, high-value assets."'),
  ('about_mission', '"We are committed to 100% legal transparency and end-to-end management, making farmland ownership simple and profitable for everyone."'),
  -- Contact Page Defaults
  ('contact_hero_subtitle', 'Touch'),
  ('contact_hero_description', '"Ready to find your perfect land or managed farm? Our experts are here to guide you through every step, from selection to seamless ownership."')
on conflict (key) do nothing;
