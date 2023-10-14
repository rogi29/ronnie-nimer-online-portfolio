export interface SocialLink {
  href: string;
  title: string;
  icon: {
    pack: "mdi" | "clarity" | "dashicons";
    name: string;
    color?: string;
  };
}
