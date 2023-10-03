import React, {useState} from 'react';
import CreditCardForm from '../component/CreditCardForm/CreditCardForm'
import CreditCard from '../component/CreditCard/CreditCard'

const DataContext = React.createContext(0);

export function DataProvider({CreditCardForm,CreditCard}) {
  const [count, setCount] = useState(0);
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000")
  const [cardHolderName, setCardHolderName] = useState("RASHIKA SAHU")
  const [expMonth, setExpMonth] = useState("12")
  const [expYear, setExpYear] = useState("2000")
  const [cvv, setCvv] = useState("000")


  return (
    <DataContext.Provider value={count}>
      {CreditCard}
      {CreditCardForm}
    </DataContext.Provider>
  );
}

export default ParentContext;
