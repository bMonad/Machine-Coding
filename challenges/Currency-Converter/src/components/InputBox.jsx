import { useId } from 'react'

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectedCurrency,
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) => {

  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex gap-4 items-center ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          min={0}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          placeholder={"0"}
          disabled={amountDisabled}
          className="outline outline-blue-100 rounded w-full bg-transparent py-1.5 px-1"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisabled}
        >
          {currencyOption.map((currency) => (
            <option
              key={currency}
              value={currency}
            >
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox