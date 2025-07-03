

interface FeatureCardProps {
    icon: React.ReactElement;
    title: string;
    descriptionStart: string;
    code?: string;
    descriptionEnd?: string;
}

function FeatureCard({ icon, title, descriptionStart, code, descriptionEnd }: FeatureCardProps) {
    return (
        <div className='group relative'>
            <div className='bg-canvas-bg-hover border-canvas-bg-active hover:border-canvas-line cursor-default rounded-xl border p-6 backdrop-blur-sm transition-all duration-300 ease-in-out'>
                <div className='flex items-start gap-4'>
                    {/* <div className='rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-3 transition-transform duration-300 ease-out group-hover:scale-[1.05]'> */}
                    <div className='rounded-lg bg-gradient-to-br from-canvas-bg-hover to-canvas-border p-3 transition-transform duration-300 ease-out group-hover:scale-[1.05]'>
                        <div className='text-canvas-text group-hover:text-primary-text transition-colors duration-300 ease-out'>
                            {icon}
                        </div>
                    </div>
                    <div>
                        <h5 className='text-fg-text-contrast group-hover:text-primary-text mb-2 text-lg leading-relaxed font-semibold tracking-normal transition-colors duration-300 ease-out md:text-xl'>
                            {title}
                        </h5>
                        <p className='text-fg-text text-sm leading-relaxed font-normal tracking-normal transition-colors duration-300 ease-out md:text-lg'>
                            {descriptionStart}
                            {code && (
                                <code className='bg-canvas-bg-active border-canvas-line text-canvas-text-contrast rounded-md border px-2 py-1 font-mono text-sm'>
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
