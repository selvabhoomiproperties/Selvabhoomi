import { cn } from '../../lib/utils';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
    className?: string;
}

export function SectionHeading({ title, subtitle, center, className }: SectionHeadingProps) {
    return (
        <div className={cn('mb-12', center && 'text-center', className)}>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary-dark">
                {title}
            </h2>
            {subtitle && (
                <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className={cn("h-1 w-20 bg-accent mt-4 rounded-full", center && "mx-auto")} />
        </div>
    );
}
