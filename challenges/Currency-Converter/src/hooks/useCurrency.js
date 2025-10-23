import { useEffect, useState } from 'react';

export function useCurrency(fromCurrency = 'USD', toCurrency = 'INR') {
  const [currency, setCurrency] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
        const data = await response.json();
        setExchangeRate(data.rates[toCurrency]);
        setCurrency(Object.keys(data.rates));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  return {
    fromCurrency,
    toCurrency,
    exchangeRate,
    currency,
    loading,
    error
  };
}
