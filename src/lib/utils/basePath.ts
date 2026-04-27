import config from "@/config/config.json";

export function withBasePath(path?: string) {
  if (!path) {
    return "";
  }

  if (
    path.startsWith("http") ||
    path.startsWith("#") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:")
  ) {
    return path;
  }

  const base = config.site.base_path || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  return normalizedPath ? `${normalizedBase}${normalizedPath}` : normalizedBase;
}
