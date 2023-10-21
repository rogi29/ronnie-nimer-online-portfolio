export type ElementMetadata =
  | H1Metadata
  | H2Metadata
  | H3Metadata
  | H4Metadata
  | ParagraphMetadata
  | ImageMetadata
  | VideoMetadata;

export interface H1Metadata {
  tag: ElementTag.P;
  textContent: string;
}

export interface H2Metadata {
  tag: ElementTag.P;
  textContent: string;
}

export interface H3Metadata {
  tag: ElementTag.P;
  textContent: string;
}

export interface H4Metadata {
  tag: ElementTag.P;
  textContent: string;
}

export interface ParagraphMetadata {
  tag: ElementTag.P;
  textContent: string;
}

export interface ImageMetadata {
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

export interface VideoMetadata {
  tag: ElementTag.VIDEO;
  src: { url: string; type: string }[];
  poster: string;
  title: string;
  id: string;
  autoplay?: boolean;
  loop?: boolean;
  controls?: boolean;
}

export enum ElementTag {
  H1 = "h1",
  H2 = "H2",
  H3 = "h3",
  H4 = "h4",
  P = "P",
  IMG = "img",
  VIDEO = "video",
}
