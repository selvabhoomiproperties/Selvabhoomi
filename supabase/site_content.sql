-- Create site_content table for generic editable content
create table public.site_content (
  key text primary key,
  value text not null
);

-- Insert default content rows
insert into public.site_content (key, value) values
  ('hero_image', 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop'),
  ('hero_title', 'Secure Land Assets'),
  ('hero_subtitle', 'Built for Legacy'),
  ('contact_email', 'admin@selvabhoomiproperties.in'),
  ('contact_phone', '+91 91 76002 530');
