
import { useState } from 'react';
import './App.css'
import InputBox from './components/InputBox'
import { useCurrency } from './hooks/useCurrency'
import { CgArrowsExchangeAltV } from "react-icons/cg";

function App() {

  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { exchangeRate, currency, loading, error } = useCurrency(fromCurrency, toCurrency);

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  }

  const handleConvert = () => {
    if (exchangeRate) {
      const newConvertedAmount = amount * exchangeRate;
      setConvertedAmount(newConvertedAmount);
    }
  }

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center gap-8 bg-zinc-800">
        <h1 className="text-4xl font-bold text-lime-600">Currency Converter App</h1>

        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleConvert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="FROM"
                  amount={amount}
                  onAmountChange={(amount) => { setAmount(amount); }}
                  onCurrencyChange={(currency) => setFromCurrency(currency)}
                  currencyOption={currency}
                  selectedCurrency={fromCurrency}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-500 text-white px-2 pb-0.5"
                  onClick={handleSwap}
                >
                  swap
                  <CgArrowsExchangeAltV className="inline-block ml-0.5" />
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="TO"
                  amount={convertedAmount}
                  onAmountChange={() => { }}
                  onCurrencyChange={(currency) => setToCurrency(currency)}
                  currencyOption={currency}
                  selectedCurrency={toCurrency}
                  amountDisabled={true}
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {`${fromCurrency} to ${toCurrency}`}
              </button>
            </form>
            <div className="mt-4 text-center text-sm text-gray-700">
              {loading && <p>Loading exchange rate...</p>}
              {error && <p className="text-red-500">Error fetching exchange rate.</p>}
              {!loading && !error && exchangeRate && (
                <p className='text-zinc-300'>Exchange Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
