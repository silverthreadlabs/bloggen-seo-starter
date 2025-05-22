import React from "react";

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
      <div className="cursor-default p-6 rounded-xl bg-bg-bg backdrop-blur-sm border border-bg-bg-active hover:border-fg-line transition-all duration-300 ease-in-out">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg group-hover:scale-[1.05] transition-transform duration-300 ease-out">
            <div className="text-fg-text group-hover:text-primary-text transition-colors duration-300 ease-out">
              {icon}
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-lg md:text-xl leading-relaxed tracking-normal text-fg-text-contrast mb-2 group-hover:text-primary-text transition-colors duration-300 ease-out">
              {title}
            </h5>
            <p className="font-normal md:text-lg leading-relaxed tracking-normal text-fg-text text-sm transition-colors duration-300 ease-out">
              {descriptionStart}
              {code && (
                <code className="bg-bg-bg-active border border-fg-line px-2 py-1 rounded-md font-mono text-sm text-fg-text-contrast">
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