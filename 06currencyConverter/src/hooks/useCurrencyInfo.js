import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`)
      .then((res) => res.json()) //convert data
      .then((res) => {
       console.log(res.rates);
  console.log(Object.keys(res.rates).slice(0, 10));
  setData(res.rates);
      })
      .catch((err)=>console.error(err));
  }, [currency]);
  return data;
}
export default useCurrencyInfo;
