export type ElementMetadata =
  | {
      tag: ElementTag.H1;
      textContent: string;
    }
  | {
      tag: ElementTag.H2;
      textContent: string;
    }
  | {
      tag: ElementTag.H3;
      textContent: string;
    }
  | {
      tag: ElementTag.H4;
      textContent: string;
    }
  | {
      tag: ElementTag.P;
      textContent: string;
    }
  | {
      tag: ElementTag.IMG;
      id: string;
      src: string;
      title: string;
      alt: string;
      originalWidth: number;
      originalHeight: number;
      loading?: HTMLImageElement["loading"];
      fetchpriority?: "high" | "low" | "auto";
    }
  | {
      tag: ElementTag.VIDEO;
      src: { url: string; type: string }[];
      poster: string;
      title: string;
      id: string;
      autoplay?: boolean;
      loop?: boolean;
    };

export enum ElementTag {
  H1 = "h1",
  H2 = "H2",
  H3 = "h3",
  H4 = "h4",
  P = "P",
  IMG = "img",
  VIDEO = "video",
}
