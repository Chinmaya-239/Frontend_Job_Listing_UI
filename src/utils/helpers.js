export function highlight(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase()
      ? `<mark key="${i}">${part}</mark>`
      : part
  ).join("");
}

export function timeAgo(dateStr) {
  const diff = Math.floor((Date.now() - new Date(dateStr)) / 86400000);
  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  if (diff < 7) return `${diff} days ago`;
  if (diff < 14) return "1 week ago";
  if (diff < 30) return `${Math.floor(diff / 7)} weeks ago`;
  return `${Math.floor(diff / 30)} months ago`;
}

export const TYPE_STYLES = {
  "Full-time":  { bg: "#EBF4FF", color: "#1A56DB" },
  "Internship": { bg: "#ECFDF5", color: "#047857" },
  "Contract":   { bg: "#FFFBEB", color: "#B45309" },
  "Part-time":  { bg: "#FDF2F8", color: "#9D174D" },
};
