import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Save, X } from "lucide-react";

interface ContentItem {
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

const ContentManager = () => {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<ContentItem>>({});
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    const { data, error } = await supabase
      .from('website_content')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch content",
        variant: "destructive",
      });
    } else {
      setContent(data || []);
    }
    setLoading(false);
  };

  const startEditing = (item: ContentItem) => {
    setEditingId(item.id);
    setEditForm({
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      image_url: item.image_url,
      button_text: item.button_text,
      button_url: item.button_url,
      additional_data: item.additional_data
    });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveChanges = async (id: string) => {
    const { error } = await supabase
      .from('website_content')
      .update({
        title: editForm.title,
        subtitle: editForm.subtitle,
        description: editForm.description,
        image_url: editForm.image_url,
        button_text: editForm.button_text,
        button_url: editForm.button_url,
        additional_data: editForm.additional_data
      })
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update content",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Content updated successfully",
      });
      fetchContent();
      setEditingId(null);
      setEditForm({});
    }
  };

  const updateAdditionalData = (key: string, value: any) => {
    setEditForm(prev => ({
      ...prev,
      additional_data: {
        ...prev.additional_data,
        [key]: value
      }
    }));
  };

  if (loading) {
    return <div className="text-center py-8">Loading content...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Content Management</h2>
      </div>

      <div className="grid gap-6">
        {content.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="capitalize">{item.content_type} Section</CardTitle>
                <div className="flex gap-2">
                  {editingId === item.id ? (
                    <>
                      <Button 
                        onClick={() => saveChanges(item.id)} 
                        size="sm"
                        className="text-white"
                      >
                        <Save className="w-4 h-4 mr-1" />
                        Save
                      </Button>
                      <Button 
                        onClick={cancelEditing} 
                        variant="outline" 
                        size="sm"
                      >
                        <X className="w-4 h-4 mr-1" />
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button 
                      onClick={() => startEditing(item)} 
                      variant="outline" 
                      size="sm"
                    >
                      <Pencil className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {editingId === item.id ? (
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={editForm.title || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev, title: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="subtitle">Subtitle</Label>
                    <Input
                      id="subtitle"
                      value={editForm.subtitle || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev, subtitle: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={editForm.description || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev, description: e.target.value }))}
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="image_url">Image URL</Label>
                    <Input
                      id="image_url"
                      value={editForm.image_url || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev, image_url: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="button_text">Button Text</Label>
                    <Input
                      id="button_text"
                      value={editForm.button_text || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev, button_text: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="button_url">Button URL</Label>
                    <Input
                      id="button_url"
                      value={editForm.button_url || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev, button_url: e.target.value }))}
                    />
                  </div>
                  {item.content_type === 'hero' && editForm.additional_data && (
                    <div>
                      <Label htmlFor="tagline">Tagline</Label>
                      <Input
                        id="tagline"
                        value={editForm.additional_data?.tagline || ''}
                        onChange={(e) => updateAdditionalData('tagline', e.target.value)}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-2">
                  <div><strong>Title:</strong> {item.title}</div>
                  <div><strong>Subtitle:</strong> {item.subtitle}</div>
                  <div><strong>Description:</strong> {item.description}</div>
                  <div><strong>Image URL:</strong> {item.image_url}</div>
                  <div><strong>Button Text:</strong> {item.button_text}</div>
                  <div><strong>Button URL:</strong> {item.button_url}</div>
                  {item.additional_data?.tagline && (
                    <div><strong>Tagline:</strong> {item.additional_data.tagline}</div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContentManager;