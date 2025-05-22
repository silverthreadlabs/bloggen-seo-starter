import React from "react";
import { Text } from "@/components/ui/text";

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
      <div className="cursor-default p-6 rounded-xl bg-primary-base/50 backdrop-blur-sm border border-fg-border hover:border-primary-border-hover transition-all duration-300 ease-in-out">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg group-hover:scale-[1.05] transition-transform duration-300 ease-out">
            <div className="text-primary-text group-hover:text-primary-text-contrast transition-colors duration-300 ease-out">
              {icon}
            </div>
          </div>
          <div>
            <Text renderAs="h5" className="mb-2 group-hover:text-primary-text transition-colors duration-300 ease-out">
              {title}
            </Text>
            <Text renderAs="p" className="text-sm group-hover:text-fg-text-contrast transition-colors duration-300 ease-out">
              {descriptionStart}
              {code && (
                <code className="bg-primary-base px-2 py-1 rounded-md font-mono text-sm text-fg-text-contrast">
                  {code}
                </code>
              )}
              {descriptionEnd}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;