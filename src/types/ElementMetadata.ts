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
      src: string;
      alt: string;
      title: string;
      id: string;
    }
  | {
      tag: ElementTag.VIDEO;
      src: string;
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
