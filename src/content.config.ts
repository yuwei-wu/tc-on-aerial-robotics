import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

// Homepage Collection Schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner: z.object({
      title: z.string(),
      content: z.string().optional(),
      image: z.string(),
      button: z
        .object({
          label: z.string(),
          link: z.string(),
          enable: z.boolean().default(true),
        })
        .optional(),
    }),

    service: z.object({
      homepage_tab: z.object({
        title: z.string(),
        description: z.string(),
        tab_list: z
          .array(
            z.object({
              title: z.string(),
              content: z.string(),
              icon: z.string(),
              image: z.string(),
            }),
          )
          .optional(),
      }),

      our_scope: z.array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          image: z.string().optional(),
          image_secondary: z.string().optional(),
          image_width: z.string().optional(),
          list: z.array(z.string()).optional(),
          video: z
            .object({
              thumbnail: z.string(),
              video_id: z.string(),
            })
            .optional(),
          button: z
            .object({
              label: z.string(),
              link: z.string(),
              enable: z.boolean().default(true),
            })
            .optional(),
        }),
      ),
    }),
    testimonial: z.object({
      title: z.string(),
      description: z.string(),
      testimonial_list: z
        .array(
          z.object({
            author: z.string(),
            avatar: z.string(),
            organization: z.string(),
            rating: z.enum(["one", "two", "three", "four", "five"]),
            content: z.string(),
          }),
        )
        .optional(),
    }),
  }),
});

// About Collection Schema
const aboutCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/about" }),
  schema: z.object({
    title: z.string(),
    page_title: z.string(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    buttons: z
      .array(
        z.object({
          label: z.string(),
          link: z.string(),
          outline: z.boolean().optional(),
          enable: z.boolean().default(true),
        }),
      )
      .optional(),

    // Counter
    counter: z
      .array(
        z.object({
          name: z.string(),
          number: z.union([z.number(), z.string()]), // Support both numeric and string types (e.g., 'M', 'K')
          measurement: z.string(),
          color: z.string(),
        }),
      )
      .optional(),

    // Gallery
    gallery: z
      .object({
        title: z.string(),
        images: z.array(z.string()),
      })
      .optional(),

    // Our Work
    features: z
      .object({
        title: z.string(),
        button: z.object({
          label: z.string(),
          link: z.string(),
          enable: z.boolean().default(true),
        }),
        features_list: z.array(
          z.object({
            title: z.string(),
            content: z.string(),
          }),
        ),
      })
      .optional(),

    // Team Members
    members: z.object({
      title: z.string(),
      description: z.string(),
      member_list: z.array(
        z.object({
          name: z.string(),
          field: z.string(),
          image: z.string(),
          email: z.string().optional(),
          webpage: z.string().optional(),
        }),
      ),
    }),
  }),
});

// Blog collection schema
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    page_title: z.string().optional(),
    subtitle: z.string().optional(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    categories: z.array(z.string()).default(() => ["others"]),
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
  }),
});

// Contact collection schema
const contactCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/contact" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    page_title: z.string(),
    image: z.string().optional(),
  }),
});

// Careers collection schema
const careersCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/careers" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    page_title: z.string().optional(),
    image: z.string().optional(),
    benefits: z
      .object({
        title: z.string(),
        description: z.string(),
        benefit_list: z.array(
          z
            .object({
              title: z.string(),
              content: z.string(),
              color: z.string(),
              icon: z.string(),
            })
            .optional(),
        ),
      })
      .optional(),
    sidebar_content: z
      .object({
        title: z.string(),
        content: z.string(),
        button: z.object({
          label: z.string(),
          link: z.string(),
          enable: z.boolean().default(true),
        }),
        enable: z.boolean().default(true),
      })
      .optional(),
    career: z
      .object({
        title: z.string(),
        subtitle: z.string(),
      })
      .optional(),
    excerpt: z.string().optional(),
    job_nature: z.string().optional(),
    location: z.string().optional(),
    categories: z.array(z.string()).default(() => ["developer"]),
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const integrationsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/integrations" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    page_title: z.string().optional(),
    name: z.string().optional(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).default(() => ["social media"]).optional(),
    button: z
      .object({
        label: z.string(),
        link: z.string(),
      })
      .optional(),
    draft: z.boolean().default(false).optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  homepage: homepageCollection,
  about: aboutCollection,
  blog: blogCollection,
  contact: contactCollection,
  careers: careersCollection,
  integrations: integrationsCollection,
  pages: pagesCollection,
};
