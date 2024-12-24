import { useState } from "react";

export default function Description({
  description,
  maxLength = 350,
}: {
  description: string;
  maxLength?: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedDescription =
    description.length > maxLength
      ? `${description.slice(0, maxLength)}...`
      : description;

  return (
    <div className="">
      <span className="text-sm font-light leading-relaxed">
        {isExpanded ? description : truncatedDescription}
      </span>
      {description.length > maxLength && (
        <span
          role="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-semibold"
        >
          {isExpanded ? "- Less" : "+ More"}
        </span>
      )}
    </div>
  );
}
