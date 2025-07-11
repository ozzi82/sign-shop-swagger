import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Save, X, Plus, Eye, EyeOff } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PageItem {
  id: string;
  slug: string;
  title: string;
  meta_description: string;
  meta_keywords: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const PageManager = () => {
  const [pages, setPages] = useState<PageItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<PageItem>>({});
  const [newPageForm, setNewPageForm] = useState<Partial<PageItem>>({});
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    const { data, error } = await supabase
      .from('pages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch pages",
        variant: "destructive",
      });
    } else {
      setPages(data || []);
    }
    setLoading(false);
  };

  const startEditing = (item: PageItem) => {
    setEditingId(item.id);
    setEditForm({
      slug: item.slug,
      title: item.title,
      meta_description: item.meta_description,
      meta_keywords: item.meta_keywords,
      is_active: item.is_active
    });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveChanges = async (id: string) => {
    const { error } = await supabase
      .from('pages')
      .update({
        slug: editForm.slug,
        title: editForm.title,
        meta_description: editForm.meta_description,
        meta_keywords: editForm.meta_keywords,
        is_active: editForm.is_active
      })
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update page",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Page updated successfully",
      });
      fetchPages();
      setEditingId(null);
      setEditForm({});
    }
  };

  const createNewPage = async () => {
    if (!newPageForm.slug || !newPageForm.title) {
      toast({
        title: "Error",
        description: "Slug and title are required",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase
      .from('pages')
      .insert({
        slug: newPageForm.slug,
        title: newPageForm.title,
        meta_description: newPageForm.meta_description || '',
        meta_keywords: newPageForm.meta_keywords || '',
        is_active: newPageForm.is_active ?? true
      });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to create page",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Page created successfully",
      });
      fetchPages();
      setNewPageForm({});
      setIsDialogOpen(false);
    }
  };

  const togglePageStatus = async (id: string, isActive: boolean) => {
    const { error } = await supabase
      .from('pages')
      .update({ is_active: !isActive })
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update page status",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: `Page ${!isActive ? 'activated' : 'deactivated'} successfully`,
      });
      fetchPages();
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading pages...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Page Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-1" />
              Add New Page
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Page</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="new-slug">Slug</Label>
                <Input
                  id="new-slug"
                  value={newPageForm.slug || ''}
                  onChange={(e) => setNewPageForm(prev => ({ ...prev, slug: e.target.value }))}
                  placeholder="e.g., about-us"
                />
              </div>
              <div>
                <Label htmlFor="new-title">Title</Label>
                <Input
                  id="new-title"
                  value={newPageForm.title || ''}
                  onChange={(e) => setNewPageForm(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Page Title"
                />
              </div>
              <div>
                <Label htmlFor="new-meta-description">Meta Description</Label>
                <Textarea
                  id="new-meta-description"
                  value={newPageForm.meta_description || ''}
                  onChange={(e) => setNewPageForm(prev => ({ ...prev, meta_description: e.target.value }))}
                  placeholder="SEO meta description"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="new-meta-keywords">Meta Keywords</Label>
                <Input
                  id="new-meta-keywords"
                  value={newPageForm.meta_keywords || ''}
                  onChange={(e) => setNewPageForm(prev => ({ ...prev, meta_keywords: e.target.value }))}
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="new-is-active"
                  checked={newPageForm.is_active ?? true}
                  onCheckedChange={(checked) => setNewPageForm(prev => ({ ...prev, is_active: checked }))}
                />
                <Label htmlFor="new-is-active">Active</Label>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={createNewPage}>
                Create Page
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6">
        {pages.map((page) => (
          <Card key={page.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <CardTitle>/{page.slug}</CardTitle>
                  {page.is_active ? (
                    <Eye className="w-4 h-4 text-green-500" />
                  ) : (
                    <EyeOff className="w-4 h-4 text-gray-400" />
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => togglePageStatus(page.id, page.is_active)}
                    variant="outline"
                    size="sm"
                  >
                    {page.is_active ? 'Deactivate' : 'Activate'}
                  </Button>
                  {editingId === page.id ? (
                    <>
                      <Button 
                        onClick={() => saveChanges(page.id)} 
                        size="sm"
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
                      onClick={() => startEditing(page)} 
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
              {editingId === page.id ? (
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      value={editForm.slug || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev, slug: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={editForm.title || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev, title: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="meta_description">Meta Description</Label>
                    <Textarea
                      id="meta_description"
                      value={editForm.meta_description || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev, meta_description: e.target.value }))}
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="meta_keywords">Meta Keywords</Label>
                    <Input
                      id="meta_keywords"
                      value={editForm.meta_keywords || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev, meta_keywords: e.target.value }))}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="is_active"
                      checked={editForm.is_active || false}
                      onCheckedChange={(checked) => setEditForm(prev => ({ ...prev, is_active: checked }))}
                    />
                    <Label htmlFor="is_active">Active</Label>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div><strong>Title:</strong> {page.title}</div>
                  <div><strong>Meta Description:</strong> {page.meta_description}</div>
                  <div><strong>Meta Keywords:</strong> {page.meta_keywords}</div>
                  <div><strong>Status:</strong> {page.is_active ? 'Active' : 'Inactive'}</div>
                  <div><strong>Created:</strong> {new Date(page.created_at).toLocaleDateString()}</div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PageManager;