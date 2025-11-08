import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@lib/utils';

type SkeletonCardProps = {
  className?: string;
  width?: number;
  height?: number;
};

export function SkeletonCard({ className = '', width = 300, height = 400 }: SkeletonCardProps) {
  return (
    <div className={cn('w-fulll m-6 flex flex-col space-y-3 rounded-xl', className)}>
      <Skeleton className={`h-[${height}px] w-[${width}px] rounded-xl`} />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
