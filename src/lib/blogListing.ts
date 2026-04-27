import { getSinglePage } from "@/lib/contentParser.astro";
import { sortByDate } from "@/lib/utils/sortFunctions";
import type { CollectionEntry } from "astro:content";

export type BlogOrder = "newest" | "oldest";

export const normalizeBlogOrder = (order?: string): BlogOrder =>
  order === "oldest" ? "oldest" : "newest";

export const getBlogListing = async (order: BlogOrder) => {
  const posts = await getSinglePage("blog");
  const sortedPosts = sortByDate(posts, order === "oldest" ? "asc" : "desc");
  const featuredPosts = sortedPosts.filter((item) => item.data.featured);
  const regularPosts = sortedPosts.filter((item) => !item.data.featured);

  return {
    featuredPosts,
    regularPosts,
    sortedPosts,
  } as {
    featuredPosts: CollectionEntry<"blog">[];
    regularPosts: CollectionEntry<"blog">[];
    sortedPosts: CollectionEntry<"blog">[];
  };
};
