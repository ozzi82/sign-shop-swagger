-- Create enum for content types
CREATE TYPE public.content_type AS ENUM ('hero', 'about', 'features', 'testimonials');

-- Create table for managing website content
CREATE TABLE public.website_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  content_type content_type NOT NULL,
  title TEXT,
  subtitle TEXT,
  description TEXT,
  image_url TEXT,
  button_text TEXT,
  button_url TEXT,
  additional_data JSONB,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.website_content ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Anyone can view active content" 
ON public.website_content 
FOR SELECT 
USING (is_active = true);

-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Admin policies for content management
CREATE POLICY "Admins can manage all content" 
ON public.website_content 
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Users can view their own roles
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
TO authenticated
USING (user_id = auth.uid());

-- Admins can manage all roles
CREATE POLICY "Admins can manage all roles" 
ON public.user_roles 
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_website_content_updated_at
  BEFORE UPDATE ON public.website_content
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default hero content
INSERT INTO public.website_content (
  content_type,
  title,
  subtitle,
  description,
  image_url,
  button_text,
  button_url,
  additional_data
) VALUES (
  'hero',
  'Wholesale Trimless Channel Letters &',
  'Cast Block Acrylic',
  'UL-listed trimless channel letters and precision-cut cast block acrylic letters. German engineering precision meets Florida speed - serving sign companies across USA and Canada.',
  '/lovable-uploads/b65672d5-65aa-4d28-b91a-f20d6649be08.png',
  'Request Wholesale Quote',
  '/contact',
  '{"tagline": "Engineered for Sign Professionals", "secondaryButtonText": "View Product Catalog", "secondaryButtonUrl": "/products", "stats": [{"icon": "Factory", "value": "25+ Years", "label": "Manufacturing"}, {"icon": "Truck", "value": "24-48h", "label": "Quote Response"}, {"icon": "Award", "value": "UL Listed", "label": "Components"}, {"icon": "Zap", "value": "LED", "label": "Efficient Lighting"}]}'::jsonb
);