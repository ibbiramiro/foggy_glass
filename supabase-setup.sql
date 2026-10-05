-- Jalankan di Supabase Dashboard > SQL Editor.

-- 1. Bucket publik (link foto bisa dibuka siapa saja yang punya URL-nya).
--    Batas 5 MB, hanya JPEG.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('fog-glass', 'fog-glass', true, 5242880, array['image/jpeg'])
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- 2. Izinkan role anon HANYA upload (insert) ke folder photos/ dengan ekstensi .jpg.
--    Tidak ada policy select/update/delete untuk anon, jadi anon tidak bisa
--    list, menimpa, atau menghapus foto. Akses baca lewat public URL tetap jalan.
drop policy if exists "fog-glass anon upload" on storage.objects;
create policy "fog-glass anon upload"
on storage.objects for insert
to anon
with check (
  bucket_id = 'fog-glass'
  and (storage.foldername(name))[1] = 'photos'
  and lower(storage.extension(name)) = 'jpg'
);
