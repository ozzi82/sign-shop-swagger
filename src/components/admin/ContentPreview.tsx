import { useContent } from "@/hooks/useContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye } from "lucide-react";

const ContentPreview = () => {
  const { content, loading } = useContent();

  if (loading) {
    return <div className="text-center py-8">Loading content preview...</div>;
  }

  const groupedContent = content.reduce((acc, item) => {
    if (!acc[item.content_type]) {
      acc[item.content_type] = [];
    }
    acc[item.content_type].push(item);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Eye className="w-5 h-5" />
        <h2 className="text-2xl font-bold">Content Preview</h2>
      </div>

      {Object.entries(groupedContent).map(([contentType, items]) => (
        <Card key={contentType}>
          <CardHeader>
            <CardTitle className="capitalize">
              {contentType.replace('_', ' ')} Content ({items.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {items.map((item, index) => (
                <div key={item.id} className="border rounded-lg p-4 bg-muted/20">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      {item.title && (
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      )}
                      {item.subtitle && (
                        <p className="text-muted-foreground mb-2">{item.subtitle}</p>
                      )}
                      {item.description && (
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {item.description}
                        </p>
                      )}
                      {item.button_text && (
                        <div className="mt-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                            Button: {item.button_text}
                          </span>
                        </div>
                      )}
                    </div>
                    {item.image_url && (
                      <div className="flex justify-center">
                        <img 
                          src={item.image_url} 
                          alt={item.title || 'Content image'}
                          className="w-full max-w-xs h-32 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {Object.keys(groupedContent).length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">No active content found.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ContentPreview;