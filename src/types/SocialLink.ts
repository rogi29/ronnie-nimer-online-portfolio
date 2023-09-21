export interface SocialLink {
  href: string;
  title: string;
  icon: {
    pack: "mdi";
    name: string;
    color?: string;
  };
}
