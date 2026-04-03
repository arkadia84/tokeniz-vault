CREATE TABLE public.leads (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name   text NOT NULL,
  email        text NOT NULL,
  contact      text,
  entity       text,
  tier         text,
  answers      jsonb,
  created_at   timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;