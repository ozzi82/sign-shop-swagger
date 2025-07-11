import { useState, useEffect } from "react";
import { useContent } from "@/hooks/useContent";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Edit, Save, X, Eye } from "lucide-react";
import { ContentItem } from "@/hooks/useContent";

const WebsiteEditor = () => {
  const { content, loading } = useContent();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<ContentItem>>({});
  const [previewMode, setPreviewMode] = useState(true);
  const { toast } = useToast();

  const groupedContent = content.reduce((acc, item) => {
    if (!acc[item.content_type]) {
      acc[item.content_type] = [];
    }
    acc[item.content_type].push(item);
    return acc;
  }, {} as Record<string, ContentItem[]>);

  const startEditing = (item: ContentItem) => {
    setEditingId(item.id);
    setEditForm(item);
    setPreviewMode(false);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditForm({});
    setPreviewMode(true);
  };

  const saveContent = async () => {
    if (!editingId || !editForm) return;

    try {
      const { error } = await supabase
        .from('website_content')
        .update({
          title: editForm.title,
          subtitle: editForm.subtitle,
          description: editForm.description,
          button_text: editForm.button_text,
          button_url: editForm.button_url,
          image_url: editForm.image_url,
        })
        .eq('id', editingId);

      if (error) throw error;

      toast({
        title: "Content updated",
        description: "Your changes have been saved successfully.",
      });

      setEditingId(null);
      setEditForm({});
      window.location.reload(); // Refresh to show updated content
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const renderWebsitePreview = (item: ContentItem) => {
    const isEditing = editingId === item.id;

    if (isEditing) {
      return (
        <div className="space-y-4 p-4 border-2 border-primary rounded-lg bg-muted/20">
          <div className="flex justify-between items-center">
            <Label className="text-sm font-medium text-primary">Editing Content</Label>
            <div className="flex gap-2">
              <Button size="sm" onClick={saveContent} className="bg-primary">
                <Save className="w-4 h-4 mr-1" />
                Save
              </Button>
              <Button size="sm" variant="outline" onClick={cancelEditing}>
                <X className="w-4 h-4 mr-1" />
                Cancel
              </Button>
            </div>
          </div>

          <div className="grid gap-3">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={editForm.title || ''}
                onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                placeholder="Enter title"
              />
            </div>

            <div>
              <Label htmlFor="subtitle">Subtitle</Label>
              <Input
                id="subtitle"
                value={editForm.subtitle || ''}
                onChange={(e) => setEditForm({...editForm, subtitle: e.target.value})}
                placeholder="Enter subtitle"
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={editForm.description || ''}
                onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                placeholder="Enter description"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="button_text">Button Text</Label>
                <Input
                  id="button_text"
                  value={editForm.button_text || ''}
                  onChange={(e) => setEditForm({...editForm, button_text: e.target.value})}
                  placeholder="Button text"
                />
              </div>
              <div>
                <Label htmlFor="button_url">Button URL</Label>
                <Input
                  id="button_url"
                  value={editForm.button_url || ''}
                  onChange={(e) => setEditForm({...editForm, button_url: e.target.value})}
                  placeholder="Button URL"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="image_url">Image URL</Label>
              <Input
                id="image_url"
                value={editForm.image_url || ''}
                onChange={(e) => setEditForm({...editForm, image_url: e.target.value})}
                placeholder="Image URL"
              />
            </div>
          </div>
        </div>
      );
    }

    // Website-style preview
    return (
      <div className="relative group">
        <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="sm"
            onClick={() => startEditing(item)}
            className="bg-primary/90 hover:bg-primary"
          >
            <Edit className="w-4 h-4 mr-1" />
            Edit
          </Button>
        </div>

        {/* Render content as it appears on website */}
        <div className="bg-background border rounded-lg overflow-hidden">
          {item.image_url && (
            <div className="relative h-48 overflow-hidden">
              <img 
                src={item.image_url} 
                alt={item.title || 'Content image'}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-6 space-y-4">
            {item.title && (
              <h2 className="text-2xl font-bold text-foreground">{item.title}</h2>
            )}
            
            {item.subtitle && (
              <h3 className="text-lg text-muted-foreground">{item.subtitle}</h3>
            )}
            
            {item.description && (
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            )}
            
            {item.button_text && (
              <Button className="bg-primary hover:bg-primary/90">
                {item.button_text}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return <div className="text-center py-8">Loading website content...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Eye className="w-5 h-5" />
          <h2 className="text-2xl font-bold">Website Editor</h2>
        </div>
        <div className="text-sm text-muted-foreground">
          Hover over content to edit • Changes appear instantly on your website
        </div>
      </div>

      {Object.entries(groupedContent).map(([contentType, items]) => (
        <Card key={contentType}>
          <CardHeader>
            <CardTitle className="capitalize">
              {contentType.replace('_', ' ')} Section
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {items.map((item) => (
                <div key={item.id}>
                  {renderWebsitePreview(item)}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {Object.keys(groupedContent).length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">
              No content found. Create content in the Content Management tab first.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default WebsiteEditor;