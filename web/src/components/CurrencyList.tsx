import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { Query } from "../types";

const CURRENCY_LIST = gql`
  {
    currencies {
      name
      symbol
    }
  }
`;

export const CurrencyList: React.FC = () => {
  const { loading, error, data } = useQuery<Query>(CURRENCY_LIST);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!data || !data.currencies) {
    return null;
  }

  return (
    <ul>
      {data.currencies.map((currency) => (
        <li key={currency?.name}>{currency?.name}</li>
      ))}
    </ul>
  );
};

//  # query GetCurrencyRate($baseCurrency: CurrencyType!, $refCurrency: CurrencyType!, $samples: Int) {
//   #   rates(baseCurrency: $baseCurrency, refCurrency: $refCurrency, samples: $samples) {
//   #     value,
//   #     baseCurrency,
//   #     refCurrency,
//   #     timestamp
//   #   }
//   # }

//   # query GetCurrencyRates($baseCurrency: CurrencyType!, $samples:Int) {
//   #   currencyRates(baseCurrency: $baseCurrency, samples: $samples) {
//   #     USD {
//   #       value,
//   #       timestamp
//   #     }
//   #   }
//   # }
