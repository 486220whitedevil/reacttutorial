import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onChangeAmount,
    onChangeCurrency,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
}) {
    const useInputId = useId()

    return (
        
            
                <div className='bg-black h-3/10 w-9/10 mx-auto rounded-lg flex flex-col relative justify-between'>
                    <label htmlFor={useInputId} className='text-green-400 font-bold absolute top-7 left-10'>{label}</label>
                    <input
                        className='bg-white w-60 left-10 top-14 absolute rounded-md'
                        type="number"
                        id={useInputId}
                        value={amount}
                        onChange={(e) => onChangeAmount && onChangeAmount(Number(e.target.value))}
                        disabled={amountDisabled}
                    />
                    <label htmlFor='amount' className='text-green-400 font-bold absolute top-7 right-24'>Currency</label>
                    <select 
                    className='bg-white w-30 right-10 top-14 absolute cursor-pointer rounded-sm'
                    value={selectedCurrency}
                    onChange={(e) => onChangeCurrency && onChangeCurrency(e.target.value)}
                    disabled={currencyDisabled}
                     >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                        ))}
                    </select>
                </div>
    )
}

export default InputBox
