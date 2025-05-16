import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Tooltip open>
        <TooltipTrigger className="invisible h-[1px] w-[1px]">
          Text
        </TooltipTrigger>
        <TooltipContent>This is a tooltip</TooltipContent>
      </Tooltip>
    </main>
  );
}
