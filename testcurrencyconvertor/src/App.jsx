import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import './App.css'
import InputBox from './components/InputBox'

function App() {
  const [amount, setAmount] = useState()
  const [fromCurrency, setFromCurrency] = useState("usd")
  const [toCurrency, setToCurrency] = useState("inr")
  function swap() {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setAmount(amount * (useCurrencyInfo(fromCurrency)[toCurrency] || 0))
  }



  return (
    <div className='flex justify-center items-center h-screen bg-gray-900 '>
      <div className='flex h-3/5 w-6/10 p-10 bg-gray-800 rounded-lg relative flex-col text-center  font-bold '>
      <h1 className='text-3xl mb-10 text-orange-700 shadow-2xl'>Currency Convertor</h1>
        <InputBox
          label="From"
          amount={amount}
          onChangeAmount={setAmount}
          currencyOptions={Object.keys(useCurrencyInfo(fromCurrency))}
          selectedCurrency={fromCurrency}
          onChangeCurrency={setFromCurrency}
        />
        <button
          onClick={swap}
          className='h-12 w-20 bg-red-600 text-white  mx-auto top-47 border-2 border-black z-10 rounded-md font-semibold cursor-pointer'>Swap</button>
        <InputBox
          label="To"
          amount={amount * (useCurrencyInfo(fromCurrency)[toCurrency] || 0)}
          amountDisabled
          currencyOptions={Object.keys(useCurrencyInfo(toCurrency))}
          selectedCurrency={toCurrency}
          onChangeCurrency={setToCurrency}
        />

        <button className='w-6/10 h-12 bg-red-600 mx-auto mt-10 rounded-lg text-white font-semibold cursor-pointer'>Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}</button>

      </div>

    </div>
  )
}

export default App
