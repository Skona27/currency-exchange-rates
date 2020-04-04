const { gql } = require("apollo-server");

const typeDefs = gql`
  enum CurrencyType {
    EUR
    USD
    PLN
  }

  type Currency {
    name: CurrencyType!
    symbol: String!
  }

  type Rate {
    id: ID!
    baseCurrency: CurrencyType!
    refCurrency: CurrencyType!
    value: String!
    timestamp: String!
  }

  type RateGroup {
    EUR: [Rate]
    USD: [Rate]
    PLN: [Rate]
  }

  type Query {
    currencies: [Currency]
    currencyRates(baseCurrency: CurrencyType!, samples: Int): RateGroup
    rates(
      baseCurrency: CurrencyType!
      refCurrency: CurrencyType!
      samples: Int
    ): [Rate]
  }
`;

module.exports = typeDefs;
