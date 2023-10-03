import React, {useState} from 'react';

export const DataContext = React.createContext();

export function DataContextProvider({children}) {
  const [CreditCardValue, setCreditCardValue] = useState({
    cardHolderName : 'RASHIKA SAHU',
    cardNumber : '0000 0000 0000 0000',
    expMonth : '12',
    expYear : '23',
    cvv : '111'
  })
  return (
    <DataContext.Provider value={[CreditCardValue, setCreditCardValue]}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
