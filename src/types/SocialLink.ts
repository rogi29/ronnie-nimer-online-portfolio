import type { Link } from "./Link";

export interface SocialLink extends Link {
  icon: {
    pack: "mdi" | "clarity" | "dashicons";
    name: string;
    color?: string;
  };
}
