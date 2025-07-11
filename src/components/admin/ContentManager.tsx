import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Save, X, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  const [newContentForm, setNewContentForm] = useState<Partial<ContentItem>>({});
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const contentTypes = [
    'hero', 'about', 'services', 'contact', 'testimonial', 
    'page_hero', 'page_content', 'page_meta'
  ];

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

  const createNewContent = async () => {
    if (!newContentForm.content_type) {
      toast({
        title: "Error",
        description: "Content type is required",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase
      .from('website_content')
      .insert({
        content_type: newContentForm.content_type as any,
        title: newContentForm.title || '',
        subtitle: newContentForm.subtitle || '',
        description: newContentForm.description || '',
        image_url: newContentForm.image_url || '',
        button_text: newContentForm.button_text || '',
        button_url: newContentForm.button_url || '',
        additional_data: newContentForm.additional_data || {},
        is_active: newContentForm.is_active ?? true
      });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to create content",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Content created successfully",
      });
      fetchContent();
      setNewContentForm({});
      setIsDialogOpen(false);
    }
  };

  const toggleContentStatus = async (id: string, isActive: boolean) => {
    const { error } = await supabase
      .from('website_content')
      .update({ is_active: !isActive })
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update content status",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: `Content ${!isActive ? 'activated' : 'deactivated'} successfully`,
      });
      fetchContent();
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading content...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Content Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-1" />
              Add New Content
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Content</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4 max-h-96 overflow-y-auto">
              <div>
                <Label htmlFor="new-content-type">Content Type</Label>
                <Select
                  value={newContentForm.content_type || ''}
                  onValueChange={(value) => setNewContentForm(prev => ({ ...prev, content_type: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                    {contentTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="new-title">Title</Label>
                <Input
                  id="new-title"
                  value={newContentForm.title || ''}
                  onChange={(e) => setNewContentForm(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="new-subtitle">Subtitle</Label>
                <Input
                  id="new-subtitle"
                  value={newContentForm.subtitle || ''}
                  onChange={(e) => setNewContentForm(prev => ({ ...prev, subtitle: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="new-description">Description</Label>
                <Textarea
                  id="new-description"
                  value={newContentForm.description || ''}
                  onChange={(e) => setNewContentForm(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="new-image-url">Image URL</Label>
                <Input
                  id="new-image-url"
                  value={newContentForm.image_url || ''}
                  onChange={(e) => setNewContentForm(prev => ({ ...prev, image_url: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="new-button-text">Button Text</Label>
                <Input
                  id="new-button-text"
                  value={newContentForm.button_text || ''}
                  onChange={(e) => setNewContentForm(prev => ({ ...prev, button_text: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="new-button-url">Button URL</Label>
                <Input
                  id="new-button-url"
                  value={newContentForm.button_url || ''}
                  onChange={(e) => setNewContentForm(prev => ({ ...prev, button_url: e.target.value }))}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="new-is-active"
                  checked={newContentForm.is_active ?? true}
                  onCheckedChange={(checked) => setNewContentForm(prev => ({ ...prev, is_active: checked }))}
                />
                <Label htmlFor="new-is-active">Active</Label>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={createNewContent}>
                Create Content
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6">
        {content.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <CardTitle className="capitalize">{item.content_type.replace('_', ' ')} Section</CardTitle>
                  <span className={`px-2 py-1 rounded-full text-xs ${item.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {item.is_active ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => toggleContentStatus(item.id, item.is_active)}
                    variant="outline"
                    size="sm"
                  >
                    {item.is_active ? 'Deactivate' : 'Activate'}
                  </Button>
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