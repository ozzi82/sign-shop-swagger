import { useContentByType } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DynamicContentProps {
  contentType: string;
  className?: string;
  variant?: 'hero' | 'card' | 'section';
}

const DynamicContent = ({ contentType, className = "", variant = 'section' }: DynamicContentProps) => {
  const { content, loading, error } = useContentByType(contentType);

  if (loading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  if (error || !content) {
    return null;
  }

  const renderHero = () => (
    <section className={`py-20 bg-gradient-hero text-primary-foreground ${className}`}>
      <div className="container mx-auto px-4 text-center">
        {content.title && (
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-100">
            {content.title}
          </h1>
        )}
        {content.subtitle && (
          <p className="text-xl mb-8 opacity-90 text-gray-200">
            {content.subtitle}
          </p>
        )}
        {content.description && (
          <p className="text-lg mb-8 opacity-80 text-gray-300 max-w-3xl mx-auto">
            {content.description}
          </p>
        )}
        {content.additional_data?.tagline && (
          <p className="text-lg mb-8 font-semibold text-accent">
            {content.additional_data.tagline}
          </p>
        )}
        {content.button_text && content.button_url && (
          <Button asChild size="lg" variant="cta">
            <a href={content.button_url}>{content.button_text}</a>
          </Button>
        )}
        {content.image_url && (
          <div className="mt-12">
            <img 
              src={content.image_url} 
              alt={content.title}
              className="mx-auto rounded-lg shadow-2xl max-w-4xl w-full"
            />
          </div>
        )}
      </div>
    </section>
  );

  const renderCard = () => (
    <Card className={className}>
      {content.title && (
        <CardHeader>
          <CardTitle>{content.title}</CardTitle>
          {content.subtitle && (
            <p className="text-muted-foreground">{content.subtitle}</p>
          )}
        </CardHeader>
      )}
      <CardContent>
        {content.image_url && (
          <img 
            src={content.image_url} 
            alt={content.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}
        {content.description && (
          <p className="text-muted-foreground mb-4">{content.description}</p>
        )}
        {content.button_text && content.button_url && (
          <Button asChild>
            <a href={content.button_url}>{content.button_text}</a>
          </Button>
        )}
      </CardContent>
    </Card>
  );

  const renderSection = () => (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {content.title && (
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            {content.title}
          </h2>
        )}
        {content.subtitle && (
          <p className="text-xl text-center text-muted-foreground mb-8">
            {content.subtitle}
          </p>
        )}
        {content.image_url && (
          <div className="text-center mb-8">
            <img 
              src={content.image_url} 
              alt={content.title}
              className="mx-auto rounded-lg shadow-lg max-w-2xl w-full"
            />
          </div>
        )}
        {content.description && (
          <div className="prose prose-lg max-w-4xl mx-auto text-center mb-8">
            <p>{content.description}</p>
          </div>
        )}
        {content.button_text && content.button_url && (
          <div className="text-center">
            <Button asChild size="lg">
              <a href={content.button_url}>{content.button_text}</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );

  switch (variant) {
    case 'hero':
      return renderHero();
    case 'card':
      return renderCard();
    default:
      return renderSection();
  }
};

export default DynamicContent;