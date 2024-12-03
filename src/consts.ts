import type { Metadata, Site } from "@types";

export const SITE: Site = {
  TITLE: "The Book of Valtiare",
  DESCRIPTION: "Following the muse.",
  EMAIL: "valtiare@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 10,
  NUM_PUBLICATIONS_ON_HOMEPAGE: 3,
  SITEURL: 'https://valtiare.com' // Update here to link the RSS icon to your website rss
};

export const HIGHLIGHTAUTHOR = "Valtiare"

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "The Book of Valtiare",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of research notes, ramblings, and smaller articles.",
};

export const RESEARCH: Metadata = {
  TITLE: "Publications",
  DESCRIPTION:
    "A collection of my publications with links to paper, repositories and live demos.",
};

export const TAGS: Metadata = {
  TITLE: "TAGS",
  DESCRIPTION:
    "blog tag filter",
};

export const ABOUT: Metadata = {
  TITLE: "ABOUT",
  DESCRIPTION:
    "A self-intro",
};