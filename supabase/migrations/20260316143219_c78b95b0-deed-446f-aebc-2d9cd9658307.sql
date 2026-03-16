-- Create table for early access signups
CREATE TABLE public.early_access_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.early_access_signups ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (from edge function with anon key)
CREATE POLICY "Allow anonymous insert" ON public.early_access_signups
  FOR INSERT WITH CHECK (true);