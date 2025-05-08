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
      <div className="cursor-default p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-600 transition-all duration-300 ease-in-out">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg group-hover:scale-[1.05] transition-transform duration-300 ease-out">
            <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 ease-out">
              {icon}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 ease-out">
              {title}
            </h3>
            <p className="text-slate-300 group-hover:text-slate-300 transition-colors duration-300 ease-out">
              {descriptionStart}
              {code && (
                <code className="bg-slate-800 px-2 py-1 rounded-md font-mono text-sm text-slate-200">
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
