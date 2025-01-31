/* eslint-disable @typescript-eslint/no-explicit-any */
export const t = (text: string, dictionary: any) =>
  dictionary?.[text as keyof typeof dictionary];
