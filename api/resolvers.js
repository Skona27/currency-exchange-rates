const { currencies, rates } = require("./data");

const sortByDate = (a, b) => {
  if (a.timestamp > b.timestamp) {
    return -1;
  }
  return 1;
};

const groupByKey = (array, key, limit = 1) => {
  const result = {};

  for (const element of array) {
    const value = element[key];

    if (value in result) {
      if (result[value].length < limit) {
        result[value].push(element);
      }
    } else {
      result[value] = [element];
    }
  }
  return result;
};

const sortedRates = rates.sort(sortByDate);

module.exports = {
  Query: {
    currencies: () => currencies,
    rates: (_, { baseCurrency, refCurrency, samples }) =>
      sortedRates.reduce((acc, rate) => {
        const isBaseMatching = rate.baseCurrency === baseCurrency;
        const isRefMatching = rate.refCurrency === refCurrency;

        if (acc.length >= samples) {
          return acc;
        }
        if (isBaseMatching && isRefMatching) {
          acc.push(rate);
        }
        return acc;
      }, []),
    currencyRates: (_, { baseCurrency, samples }) => {
      const filteredRates = sortedRates.filter(
        (rate) => rate.baseCurrency === baseCurrency
      );

      return groupByKey(filteredRates, "refCurrency", samples);
    },
  },
};
