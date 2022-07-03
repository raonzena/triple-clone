// https://easings.net/ko#easeOutExpo
export const easeOutExpo = (x: number): number => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}
