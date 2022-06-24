// mockdata
interface ArrayType {
  triper: number[]
  review: number[]
  calendar: number[]
}
export const database: ArrayType = {
  triper: Array(700)
    .fill('triper')
    .map((ele) => {
      return ele
    }),
  review: Array(100)
    .fill('review')
    .map((ele) => {
      return ele
    }),
  calendar: Array(470)
    .fill('calendar')
    .map((ele) => {
      return ele
    }),
}
