import React, { useRef, useState } from "react";
import clsx from "clsx";

type TSnippetType = "default" | "success" | "warning" | "error";

interface SnippetProps {
  text: string | string[];
  width?: string;
  onCopy?: () => void;
  prompt?: boolean;
  dark?: boolean;
  type?: TSnippetType;
}

const variant = {
  default: {
    background: "bg-white/5",
    border: "border-cyan-400/30",
    text: "text-cyan-100",
    fill: "fill-cyan-400",
    glow: "hover:shadow-[inset_0_0_20px_rgba(6,182,212,0.15)]"
  },
  success: {
    background: "bg-green-500/10",
    border: "border-green-400/30",
    text: "text-green-100",
    fill: "fill-green-400",
    glow: "hover:shadow-[inset_0_0_20px_rgba(34,197,94,0.15)]"
  },
  warning: {
    background: "bg-amber-500/10",
    border: "border-amber-400/30",
    text: "text-amber-100",
    fill: "fill-amber-400",
    glow: "hover:shadow-[inset_0_0_20px_rgba(251,191,36,0.15)]"
  },
  error: {
    background: "bg-red-500/10",
    border: "border-red-400/30",
    text: "text-red-100",
    fill: "fill-red-400",
    glow: "hover:shadow-[inset_0_0_20px_rgba(239,68,68,0.15)]"
  }
};

const getVariant = (type: TSnippetType | undefined) => {
  switch (type) {
    case "success":
      return variant.success;
    case "warning":
      return variant.warning;
    case "error":
      return variant.error;
    default:
      return variant.default;
  }
};

export const Snippet = ({
  text,
  width = "100%",
  onCopy,
  prompt = true,
  type = "default"
}: SnippetProps) => {
  const [animation, setAnimation] = useState<boolean>(false);
  const animationTimeout = useRef<NodeJS.Timeout | null>(null);
  const _text = typeof text === "string" ? [text] : text;
  const colors = getVariant(type);

  const onClick = () => {
    if (animationTimeout.current) {
      clearTimeout(animationTimeout.current);
    }
    setAnimation(true);
    animationTimeout.current = setTimeout(() => setAnimation(false), 2000);

    navigator.clipboard.writeText(_text.reduce((prev, curr) => prev + "\n" + curr));

    if (onCopy) {
      onCopy();
    }
  };

  return (
    <div
      className={clsx(
        "flex px-4 py-3 rounded-lg border backdrop-blur-sm transition-all duration-300",
        colors.background,
        colors.border,
        colors.glow
      )}
      style={{ width: width }}
    >
      <div className="mr-3 flex-1 overflow-x-auto">
        {_text.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className={clsx(
              "font-mono text-[13px] whitespace-nowrap",
              prompt && "before:content-['$_'] before:text-cyan-400",
              colors.text
            )}>
            {item}
          </div>
        ))}
      </div>
      <div className="ml-auto cursor-pointer relative flex-shrink-0 w-4 h-4">
        <svg
          height="16"
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width="16"
          className={clsx(
            "absolute right-0 z-10 transition-all duration-200",
            _text.length > 1 ? "top-0" : "top-1/2 -translate-y-1/2",
            colors.fill,
            animation ? "opacity-0 scale-50" : "opacity-100 scale-100"
          )}
          onClick={onClick}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.75 0.5C1.7835 0.5 1 1.2835 1 2.25V9.75C1 10.7165 1.7835 11.5 2.75 11.5H3.75H4.5V10H3.75H2.75C2.61193 10 2.5 9.88807 2.5 9.75V2.25C2.5 2.11193 2.61193 2 2.75 2H8.25C8.38807 2 8.5 2.11193 8.5 2.25V3H10V2.25C10 1.2835 9.2165 0.5 8.25 0.5H2.75ZM7.75 4.5C6.7835 4.5 6 5.2835 6 6.25V13.75C6 14.7165 6.7835 15.5 7.75 15.5H13.25C14.2165 15.5 15 14.7165 15 13.75V6.25C15 5.2835 14.2165 4.5 13.25 4.5H7.75ZM7.5 6.25C7.5 6.11193 7.61193 6 7.75 6H13.25C13.3881 6 13.5 6.11193 13.5 6.25V13.75C13.5 13.8881 13.3881 14 13.25 14H7.75C7.61193 14 7.5 13.8881 7.5 13.75V6.25Z"
          />
        </svg>
        <svg
          height="16"
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width="16"
          className={clsx(
            "absolute right-0 transition-all duration-200",
            _text.length > 1 ? "top-0" : "top-1/2 -translate-y-1/2",
            colors.fill,
            animation ? "opacity-100 scale-100" : "opacity-0 scale-50"
          )}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z"
          />
        </svg>
      </div>
    </div>
  );
};
