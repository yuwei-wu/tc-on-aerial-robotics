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
  const [pathname, suffix = ""] = path.split(/([?#].*)/, 2);
  const normalizedPath = pathname.startsWith("/") ? pathname.slice(1) : pathname;
  const hasTrailingSlash = pathname.endsWith("/");
  const hasFileExtension = /\.[^/]+$/.test(pathname.split("/").pop() || "");
  const shouldAppendTrailingSlash =
    normalizedPath !== "" && !hasTrailingSlash && !hasFileExtension;

  return `${normalizedBase}${normalizedPath}${shouldAppendTrailingSlash ? "/" : ""}${suffix}`;
}
