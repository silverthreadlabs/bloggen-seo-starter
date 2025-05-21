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
      <div className="cursor-default group p-6 rounded-lg bg-bg-bg backdrop-blur-sm border border-fg-border hover:border-primary-solid transition-all duration-300 ease-in-out">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-bg-bg via-primary-bg-subtle to-primary-bg group-hover:via-primary-bg hover:to-primary-bg-hover rounded-sm group-hover:scale-[1.05] transition-transform duration-300 ease-out">
            <div className="text-primary-text group-hover:text-primary-text-contrast transition-colors duration-300 ease-out">
              {icon}
            </div>
          </div>
          <div>
            <Text
              renderAs="h5"
              className="text-fg-text text-xl mb-2 group-hover:text-primary-text transition-colors duration-300 ease-out"
            >
              {title}
            </Text>
            <Text
              renderAs="p"
              className="group-hover:text-primary-on-primary transition-colors duration-300 ease-out"
            >
              {descriptionStart}
              {code && (
                <Text
                  renderAs="span"
                  className="font-mono bg-transparent border-none text-primary-on-primary"
                >
                  {code}
                </Text>
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
