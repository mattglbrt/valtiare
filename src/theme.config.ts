export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "The Valtiare",
  /** your name */
  author: "Hobbinomicon",
  /** website description */
  desc: "The Hobby Blog of Matt Gilbert",
  /** your deployed domain */
  website: "https://valtiare.com/",
  /** your locale */
  locale: "en-us",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://github.com/mattglbrt",
    },
    {
      name: "rss",
      href: "/atom.xml",
    },
    {
      name: "twitter",
      href: "https://x.co/hobbinomicon",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/Hobbinomicon",
    }
  ],
  /** your header info */
  header: {
    twitter: "@hobbinomicon",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories"
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    { name: "categories", path: "categories" },
  ]
  
}

