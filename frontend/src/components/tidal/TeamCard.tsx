import { cn } from "@/lib/cn";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  avatarUrl?: string;
  initials?: string;
  className?: string;
}

export function TeamCard({
  name,
  role,
  avatarUrl,
  initials,
  className,
}: TeamCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300",
        className
      )}
    >
      <div className="flex justify-center mb-4">
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={name}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full object-cover ring-4 ring-accent-primary/20"
          />
        ) : (
          <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center ring-4 ring-accent-primary/20">
            <span className="text-xl font-bold text-white">
              {initials || name.split(" ").map((w) => w[0]).join("")}
            </span>
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-text-dark">{name}</h3>
      <p className="text-sm text-accent-primary mt-1">{role}</p>
    </div>
  );
}
