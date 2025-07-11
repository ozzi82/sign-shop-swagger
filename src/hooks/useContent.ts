import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface ContentItem {
  id: string;
  content_type: string;
  title: string;
  subtitle: string;
  description: string;
  image_url: string;
  button_text: string;
  button_url: string;
  additional_data: any;
  is_active: boolean;
}

export const useContent = (contentType?: string) => {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      setError(null);

      let query = supabase
        .from('website_content')
        .select('*')
        .eq('is_active', true);

      if (contentType) {
        query = query.eq('content_type', contentType as any);
      }

      const { data, error: fetchError } = await query.order('created_at', { ascending: false });

      if (fetchError) {
        setError(fetchError.message);
      } else {
        setContent(data || []);
      }
      setLoading(false);
    };

    fetchContent();
  }, [contentType]);

  return { content, loading, error };
};

export const useContentByType = (contentType: string) => {
  const { content, loading, error } = useContent(contentType);
  return { 
    content: content.length > 0 ? content[0] : null, 
    loading, 
    error 
  };
};