import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./graphql";
import { CurrencyList } from "./components/CurrencyList";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container mx-auto px-4">
        <CurrencyList />
      </div>
    </ApolloProvider>
  );
}

export default App;
