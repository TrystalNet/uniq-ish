declare module "uniq-ish" {
  export function base62encode(i: number): string;
  export function randomId(len: number, validator?: (id: string) => boolean): string;
}
