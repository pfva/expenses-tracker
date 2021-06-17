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

export type Month = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'
