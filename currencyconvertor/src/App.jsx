import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setTocurrency] = useState("inr");

  const currencyInfo = useCurrencyInfo(fromCurrency);
  console.log(currencyInfo)
  const convertedAmount = amount * (currencyInfo[toCurrency] || 0);

  const swap = () => {
    setFromCurrency(toCurrency);
    setTocurrency(fromCurrency);
    setAmount(convertedAmount);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-96 bg-white p-4 rounded-lg space-y-4">

        <InputBox
          label="From"
          amount={amount}
          onAmountChange={setAmount}
          currencyOptions={Object.keys(currencyInfo)}
          selectCurrency={fromCurrency}
          onCurrencyChange={setFromCurrency}
        />

        <button
          onClick={swap}
          className="bg-blue-600 text-white w-full py-2 rounded-md"
        >
          Swap
        </button>

        <InputBox
          label="To"
          amount={convertedAmount}
          amountDisabled
          currencyOptions={Object.keys(currencyInfo)}
          selectCurrency={toCurrency}
          onCurrencyChange={setTocurrency}
        />

      </div>
    </div>
  );
}

export default App;
