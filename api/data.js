var crypto = require("crypto");

const currencies = [
  {
    name: "USD",
    symbol: "$",
  },
  {
    name: "PLN",
    symbol: "zł",
  },
  {
    name: "EUR",
    symbol: "€",
  },
];

const baseRates = [
  {
    baseCurrency: "USD",
    refCurrency: "PLN",
    value: 4.24,
  },
  {
    baseCurrency: "EUR",
    refCurrency: "PLN",
    value: 4.51,
  },
  {
    baseCurrency: "EUR",
    refCurrency: "USD",
    value: 1.08,
  },
  {
    baseCurrency: "USD",
    refCurrency: "EUR",
    value: 0.92,
  },
  {
    baseCurrency: "PLN",
    refCurrency: "USD",
    value: 0.24,
  },
  {
    baseCurrency: "PLN",
    refCurrency: "EUR",
    value: 0.22,
  },
];

const generateRandomValue = (value) => {
  const factor = Math.random() * 0.1 - 0.05;
  const result = (value * (1 - factor)).toFixed(4);
  return result;
};

const rates = [
  ...baseRates,
  ...baseRates,
  ...baseRates,
  ...baseRates,
  ...baseRates,
].map((rate) => ({
  id: crypto.randomBytes(20).toString("hex"),
  ...rate,
  value: generateRandomValue(rate.value),
  timestamp: Date.now() - Math.ceil(Math.random() * 20),
}));

module.exports = { currencies, rates };
