interface TechBadgeProps {
  label: string;
  variant?: "accent" | "neutral";
}

const variantClasses: Record<NonNullable<TechBadgeProps["variant"]>, string> = {
  accent: "border-accent/30 text-accent bg-accent/5",
  neutral: "border-border text-text-muted bg-text-muted/5",
};

export default function TechBadge({
  label,
  variant = "neutral",
}: TechBadgeProps) {
  return (
    <span
      className={`inline-block border rounded-full px-3 py-1 text-xs font-mono font-medium tracking-wide ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
}
