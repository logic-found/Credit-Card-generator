import React from 'react'
import './Homepage.scss'
import { createContext, useContext, useState } from 'react';
import CreditCardForm from '../component/CreditCardForm/CreditCardForm'
import CreditCard from '../component/CreditCard/CreditCard'

export const DataContext = React.createContext();

export default function Homepage() {
  const [CreditCardValue, setCreditCardValue] = useState({
    cardHolderName : 'RASHIKA SAHU',
    cardNumber : '1111 1111 1111 1111',
    expMonth : '12',
    expYear : '23',
    cvv : '111'
  })
  return (
      <DataContext.Provider value={[CreditCardValue, setCreditCardValue]}>
        <div className="homepage">
          <div className="left-container">
            <CreditCard/>
          </div>
          <div className="right-container">
            <CreditCardForm/>  
          </div>
      </div>
    </DataContext.Provider>
    
    
  )
}

