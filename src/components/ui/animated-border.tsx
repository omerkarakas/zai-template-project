"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedBorderProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  horizontalColor?: string;
  verticalColor?: string;
}

export function AnimatedBorder({
  children,
  className,
  speed = 0.5,
  horizontalColor = "via-purple-500/50",
  verticalColor = "via-indigo-500/50",
}: AnimatedBorderProps) {
  const topRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;

    const animateBorder = () => {
      const now = Date.now() / 1000;

      const topX = Math.sin(now * speed) * 100;
      const rightY = Math.cos(now * speed) * 100;
      const bottomX = Math.sin(now * speed + Math.PI) * 100;
      const leftY = Math.cos(now * speed + Math.PI) * 100;

      if (topRef.current) topRef.current.style.transform = `translateX(${topX}%)`;
      if (rightRef.current) rightRef.current.style.transform = `translateY(${rightY}%)`;
      if (bottomRef.current) bottomRef.current.style.transform = `translateX(${bottomX}%)`;
      if (leftRef.current) leftRef.current.style.transform = `translateY(${leftY}%)`;

      animationId = requestAnimationFrame(animateBorder);
    };

    animationId = requestAnimationFrame(animateBorder);
    return () => cancelAnimationFrame(animationId);
  }, [speed]);

  return (
    <div className={cn("relative overflow-hidden rounded-2xl", className)}>
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-0.5 overflow-hidden">
        <div
          ref={topRef}
          className={cn(
            "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-transparent",
            horizontalColor
          )}
        />
      </div>

      {/* Right border */}
      <div className="absolute top-0 right-0 w-0.5 h-full overflow-hidden">
        <div
          ref={rightRef}
          className={cn(
            "absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-transparent",
            verticalColor
          )}
        />
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
        <div
          ref={bottomRef}
          className={cn(
            "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-transparent",
            horizontalColor
          )}
        />
      </div>

      {/* Left border */}
      <div className="absolute top-0 left-0 w-0.5 h-full overflow-hidden">
        <div
          ref={leftRef}
          className={cn(
            "absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-transparent",
            verticalColor
          )}
        />
      </div>

      {children}
    </div>
  );
}
