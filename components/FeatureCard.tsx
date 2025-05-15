interface FeatureCardProps {
  icon: React.ReactElement;
  title: string;
  descriptionStart: string;
  code?: string;
  descriptionEnd?: string;
}

function FeatureCard({
  icon,
  title,
  descriptionStart,
  code,
  descriptionEnd,
}: FeatureCardProps) {
  return (
    <div className="relative group">
      <div className="cursor-default p-6 rounded-lg bg-card backdrop-blur-sm border border-border hover:border-ring transition-all duration-300 ease-in-out">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-muted via-accent/20 to-accent/40 hover:via-accent/50 rounded-sm group-hover:scale-[1.05] transition-transform duration-300 ease-out">
            <div className="text-primary group-hover:text-primary-foreground transition-colors duration-300 ease-out">
              {icon}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 ease-out">
              {title}
            </h3>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 ease-out">
              {descriptionStart}
              {code && (
                <code className="bg-card px-2 py-1 rounded-sm font-mono text-sm text-foreground">
                  {code}
                </code>
              )}
              {descriptionEnd}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
