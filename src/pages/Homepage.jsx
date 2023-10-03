import React from 'react'
import './Homepage.scss'
import CreditCardForm from '../component/CreditCardForm/CreditCardForm'
import CreditCard from '../component/CreditCard/CreditCard'
import DataContextProvider from '../context/DataContext';

export default function Homepage() {
  
  return (
      <DataContextProvider>
        <div className="homepage">
          <div className="left-container">
            <CreditCard/>
          </div>
          <div className="right-container">
            <CreditCardForm/>  
          </div>
      </div>
    </DataContextProvider>
    
    
  )
}

