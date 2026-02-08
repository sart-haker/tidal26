import { cn } from "@/lib/cn";

interface ScheduleEvent {
  time: string;
  event: string;
}

interface ScheduleDay {
  label: string;
  events: ScheduleEvent[];
}

interface ScheduleTimelineProps {
  days: ScheduleDay[];
  className?: string;
}

export function ScheduleTimeline({ days, className }: ScheduleTimelineProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-bg-light/60 p-6 md:p-10",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 relative">
        {/* Center divider (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-accent-primary/30 -translate-x-1/2">
          {/* Top circle */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-accent-primary/40 bg-bg-light" />
          {/* Middle circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-accent-primary/40 bg-bg-light" />
          {/* Bottom circle */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-accent-primary/40 bg-bg-light" />
          {/* Horizontal line through middle */}
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[150%] w-[300%] h-px bg-accent-primary/30" />
        </div>

        {days.map((day, dayIndex) => (
          <div
            key={day.label}
            className={cn(
              "space-y-4",
              dayIndex === 0 ? "md:pr-12" : "md:pl-12"
            )}
          >
            <h3 className="font-bubble text-xl text-accent-blue mb-6 text-center">
              {day.label}
            </h3>
            {day.events.map((evt, i) => (
              <div key={i} className="flex items-baseline gap-6">
                <span className="text-sm font-bold text-accent-primary w-20 flex-shrink-0 text-right">
                  {evt.time}
                </span>
                <span className="text-sm font-semibold text-text-secondary">
                  {evt.event}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
