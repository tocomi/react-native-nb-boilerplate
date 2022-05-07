export const average = (numbers: number[]) => {
  const reducer = (
    accumulator: number,
    currentValue: number,
    _: number,
    { length }: { length: number }
  ) => accumulator + currentValue / length
  return Math.floor(numbers.reduce(reducer, 0))
}
