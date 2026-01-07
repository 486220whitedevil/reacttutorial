import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false
}) {
  const amountInputId = useId();

  return (
    <div className="border rounded-lg p-4 bg-gray-100">
      
      {/* Label */}
      <div className="flex justify-between mb-2 font-semibold">
        <label htmlFor={amountInputId}>{label}</label>
        <span>Currency</span>
      </div>

      {/* Input + Select */}
      <div className="flex gap-3">
        <input
          id={amountInputId}
          type="number"
          placeholder="Enter value"
          value={amount}
          disabled={amountDisabled}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="w-full border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
        />

        <select
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisabled}
          className="border rounded-md px-2 cursor-pointer"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
