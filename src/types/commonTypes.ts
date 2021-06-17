// Does not yet have id assigned
export type ExpenseDataInputType = {
  title: string
  amount: number
  date: Date
}

// With id field
export type ExpenseDataType = ExpenseDataInputType & {
  id: string
}
