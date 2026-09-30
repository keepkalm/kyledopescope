create table if not exists visits (
  id integer primary key,
  total integer not null default 0
);

insert into visits (id, total)
values (1, 0)
on conflict (id) do nothing;
