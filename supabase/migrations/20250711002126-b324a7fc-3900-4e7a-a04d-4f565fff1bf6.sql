-- Extend the content_type enum to include page management types
ALTER TYPE content_type ADD VALUE IF NOT EXISTS 'page_hero';
ALTER TYPE content_type ADD VALUE IF NOT EXISTS 'page_content';
ALTER TYPE content_type ADD VALUE IF NOT EXISTS 'page_meta';

-- Create pages table for managing different pages
CREATE TABLE IF NOT EXISTS public.pages (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  meta_description text,
  meta_keywords text,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on pages table
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;

-- Create policies for pages table
CREATE POLICY "Anyone can view active pages" 
ON public.pages 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Admins can manage all pages" 
ON public.pages 
FOR ALL 
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Add trigger for updating timestamps
CREATE TRIGGER update_pages_updated_at
BEFORE UPDATE ON public.pages
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default pages
INSERT INTO public.pages (slug, title, meta_description) VALUES
('home', 'Home', 'Wholesale channel letters and signage manufacturing for sign companies'),
('products', 'Products', 'Premium channel letters, acrylic letters, and signage products'),
('about', 'About', 'Leading wholesale signage manufacturer with 25+ years experience'),
('contact', 'Contact', 'Contact our wholesale signage manufacturing team')
ON CONFLICT (slug) DO NOTHING;