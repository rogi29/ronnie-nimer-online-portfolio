import type { Link } from "../types/Link";

export const buildHomeLink = () => "/";
export const buildProjectLink = (projectSlug: string) =>
  `/project/${projectSlug}`;

export default [
  {
    title: "Home",
    href: buildHomeLink(),
  },
  {
    title: "Portfolio",
    href: buildProjectLink("portfolio"),
  },
] satisfies Link[];
