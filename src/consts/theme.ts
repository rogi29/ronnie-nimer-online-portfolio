export const mq = (
  key: `${"min" | "max"}-${"width" | "height"}`,
  value: ScreenWidth,
): `${key}: ${value}px` => `(${key}: ${value}px)`;

export const calcHeight = (ratio: number, width: number) =>
  Math.round(ratio * width);

export const ScreenWidths = {
  XXL: 4096,
  XL: 2048,
  LARGE: 1920,
  MEDIUM: 1024,
  SMALL: 768,
  XS: 480,
} as const;

export const MediaQueries = {
  [ScreenWidths.XXL]: mq("min-width", ScreenWidths.XL + 1),
  [ScreenWidths.XL]: mq("max-width", ScreenWidths.XL),
  [ScreenWidths.LARGE]: mq("max-width", ScreenWidths.LARGE),
  [ScreenWidths.MEDIUM]: mq("max-width", ScreenWidths.MEDIUM),
  [ScreenWidths.SMALL]: mq("max-width", ScreenWidths.SMALL),
  [ScreenWidths.XS]: mq("max-width", ScreenWidths.XS),
} as const;
