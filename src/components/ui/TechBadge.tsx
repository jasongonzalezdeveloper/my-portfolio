interface TechBadgeProps {
  label: string;
  variant?: "cyan" | "amber" | "neutral";
}

const variantClasses: Record<NonNullable<TechBadgeProps["variant"]>, string> = {
  cyan: "border-[#00d4ff]/30 text-[#00d4ff] bg-[#00d4ff]/5",
  amber: "border-[#f59e0b]/30 text-[#f59e0b] bg-[#f59e0b]/5",
  neutral: "border-white/10 text-[#7a8ba8] bg-white/3",
};

export default function TechBadge({
  label,
  variant = "neutral",
}: TechBadgeProps) {
  return (
    <span
      className={`inline-block border rounded-full px-3 py-1 text-xs font-medium tracking-wide ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
}
