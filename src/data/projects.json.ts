export interface Template {
  url: string;
  description: string;
  title: string;
  image: string;
};
const projectOne: Template = {
  url: "https://marketplace.visualstudio.com/items?itemName=wicked-labs.wvsc-serendipity",
  title: "Serendipity Theme",
  description: "Elegant, minimal, and clean color palette to give your eyes rest on different interfaces",
  image: "https://github.com/Serendipity-Theme/serendipity/blob/master/midnight-screenshots/midnight-cpp.png?raw=true",
};
const projectTwo: Template = {
  url: "https://www.figma.com/community/file/1254395113022695090/diagonal",
  image: "/images/diagonal.svg",
  description: "A set of 28 dark & light mesh gradients in 5k resolution to use on your design projects, as backgrounds, wallpapers, presentations,.. and anywhere you can think of",
  title: "Diagonal",
};
const projectThree: Template = {
  url: "https://www.figma.com/community/file/1254393856683700911/onda",
  image: "/images/onda.svg",
  description: "A set of wave 8 wallpapers in 5k for desktop and mobile resolution to use on your design projects.",
  title: "Onda",
};
const projectfour: Template = {
  url: "/https://www.figma.com/community/file/1284100224206308057",
  image: "/images/figmax.svg",
  description: "FigMax is a set of covers for your projects on Figma where you can preview the owner, description team and status.",
  title: "FigMax90",
};
export const byName = {
  projectfour,
  projectThree,
  projectTwo,
  projectOne,
};
export const projects = Object.values(byName);