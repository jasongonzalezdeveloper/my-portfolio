import React from "react";

type ValidTag = keyof React.JSX.IntrinsicElements;

interface GlassCardProps<T extends ValidTag = "div"> {
  as?: T;
  glow?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function GlassCard<T extends ValidTag = "div">({
  as,
  glow = false,
  className = "",
  children,
  ...rest
}: GlassCardProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof GlassCardProps<T>>) {
  const Tag = (as ?? "div") as ValidTag;
  return (
    <Tag
      className={`glass rounded-xl p-6 transition-colors duration-300 ${glow ? "glow-accent" : ""} ${className}`}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </Tag>
  );
}
