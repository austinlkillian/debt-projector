import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  incomeSources: [{
    id: 'income',
    name: '',
    amount: ''
  }],
  billSources: [{
    id: 'bill',
    name: '',
    amount: ''
  }],
  debtSources: [{
    id: 'payment',
    name: '',
    amount: '',
  }],
  totals: {
    totalIncome: 0,
    totalBills: 0,
    totalDebt: 0,
  },
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveIncomeSources: (state, action) => {
      state.incomeSources = action.payload
      let totalIncome = 0
      action.payload.forEach(source => {
        totalIncome += Number(source.amount)
      })
      state.totals.totalIncome = totalIncome
    },
    saveBillSources: (state, action) => {
      state.billSources = action.payload
      let totalBills = 0
      action.payload.forEach(source => {
        totalBills += Number(source.amount)
      })
      state.totals.totalBills = totalBills
    },
    saveDebtSources: (state, action) => {
      state.debtSources = action.payload
      let totalDebt = 0
      action.payload.forEach(source => {
        totalDebt += Number(source.amount)
      })
      state.totals.totalDebt = totalDebt
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveIncomeSources, saveBillSources, saveDebtSources } = formSlice.actions

export default formSlice.reducer