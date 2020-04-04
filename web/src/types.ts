export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Currency = {
   __typename?: 'Currency';
  name: CurrencyType;
  symbol: Scalars['String'];
};

export enum CurrencyType {
  Eur = 'EUR',
  Usd = 'USD',
  Pln = 'PLN'
}

export type Query = {
   __typename?: 'Query';
  currencies?: Maybe<Array<Maybe<Currency>>>;
  currencyRates?: Maybe<RateGroup>;
  rates?: Maybe<Array<Maybe<Rate>>>;
};


export type QueryCurrencyRatesArgs = {
  baseCurrency: CurrencyType;
  samples?: Maybe<Scalars['Int']>;
};


export type QueryRatesArgs = {
  baseCurrency: CurrencyType;
  refCurrency: CurrencyType;
  samples?: Maybe<Scalars['Int']>;
};

export type Rate = {
   __typename?: 'Rate';
  id: Scalars['ID'];
  baseCurrency: CurrencyType;
  refCurrency: CurrencyType;
  value: Scalars['String'];
  timestamp: Scalars['String'];
};

export type RateGroup = {
   __typename?: 'RateGroup';
  EUR?: Maybe<Array<Maybe<Rate>>>;
  USD?: Maybe<Array<Maybe<Rate>>>;
  PLN?: Maybe<Array<Maybe<Rate>>>;
};

