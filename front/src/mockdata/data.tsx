// mockdata
interface ArrayType {
  triper: number[]
  review: number[]
  calendar: number[]
}
export const database: ArrayType = {
  triper: Array(7000000)
    .fill('triper')
    .map((ele, idx) => {
      return ele
    }),
  review: Array(1000000)
    .fill('review')
    .map((ele, idx) => {
      return ele
    }),
  calendar: Array(4700000)
    .fill('calendar')
    .map((ele, idx) => {
      return ele
    }),
}
