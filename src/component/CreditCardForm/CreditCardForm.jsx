import React, { useContext, useState } from 'react'
import './CreditCardForm.scss'
import { DataContext } from '../../context/DataContext'

export default function CreditCardForm() {
  const [CreditCardValue, setCreditCardValue] = useContext(DataContext)

  const [inputValue, setInputValue] = useState({
    cardHolderName : '',
    cardNumber : '',
    expMonth : '',
    expYear : '',
    cvv : ''
  })
  const [inputError, setInputError] = useState({
    cardHolderName : '',
    cardNumber : '',
    expMonth : '',
    expYear : '',
    cvv : ''
  })

  function changeHandler(e){
    const {name,value} = e.target
    setInputValue({
      ...inputValue,
      [name]:value
    })
    // console.log(name,value)
  }

  
  function handleFormSubmit(e){
    e.preventDefault();
    
    if(validateForm()){
      setCreditCardValue({
        cardHolderName : inputValue.cardHolderName.split("").map((char) => char.toUpperCase()).join(""),
        cardNumber : addSpaceAfterEvery4thChar(inputValue.cardNumber),
        expMonth : inputValue.expMonth,
        expYear : inputValue.expYear,
        cvv : inputValue.cvv
      })
      
      // reset the values
      setInputValue({
        cardHolderName: '',
        cardNumber: '',
        expMonth: '',
        expYear: '',
        cvv: ''
      });
      
      
    }
    else{
      return
    }
    
  }

  function validateForm(){
    let validate = true

    if(!isNaN(inputValue.cardHolderName)){
      setInputError(prevState => ({
        ...prevState,
        cardHolderName: 'Enter correct name'
      }))
      validate=false
    }
    else{
      setInputError(prevState => ({
        ...prevState,
        cardHolderName: ''
      }))
    }

    if(isNaN(inputValue.cardNumber) || inputValue.cardNumber.length!==12){
      setInputError(prevState => ({
        ...prevState,
        cardNumber: 'Enter correct card number'
      }))
      validate=false
    }
    else{
      setInputError(prevState => ({
        ...prevState,
        cardNumber: ''
      }))
    }

    if(isNaN(inputValue.expMonth) || Number(inputValue.expMonth)>12 || Number(inputValue.expMonth)===0){
      setInputError(prevState => ({
        ...prevState,
        expMonth: 'Enter correct month'
      }))
      validate=false
    }
    else{
      setInputError(prevState => ({
      ...prevState,
      expMonth: ''
    }))
    }
    
    if(isNaN(inputValue.expYear) || inputValue.expYear.length!==2 ){
      setInputError(prevState => ({
        ...prevState,
        expYear: 'Enter correct year'
      }))
      validate=false
    }
    else{
      setInputError(prevState => ({
        ...prevState,
        expYear: ''
      }))
    }

    if(isNaN(inputValue.cvv) || inputValue.cvv.length!==3){
      setInputError(prevState => ({
        ...prevState,
        cvv: 'Enter correct CVV'
      }))
      
      validate=false
    }
    else{
      setInputError(prevState => ({
        ...prevState,
        cvv: ''
      }))
      
    }
    return validate
  }

  return (
    <div className="credit-card-form-div">
      <form className="credit-card-form" onSubmit={handleFormSubmit}>

        <div className="form-field">
          <label htmlFor="cardHolderName" className="credit-card-label">CARDHOLDER NAME</label><br />
          <input type="text" className="credit-card-input-field" name="cardHolderName"  id="cardHolderName" value={inputValue.cardHolderName} onChange={changeHandler} placeholder='e.g. RASHIKA SAHU' required/>
          <p className='input-error'>{inputError.cardHolderName}</p><br />
        </div>

        <div className="form-field">
          <label htmlFor="cardNumber" className="credit-card-label">CARD NUMBER</label><br />
          <input type="text" className="credit-card-input-field" name="cardNumber" id="cardNumber" value={inputValue.cardNumber} onChange={changeHandler} placeholder='e.g. 1234 5678 9123 0000' required/>
          <p className='input-error'>{inputError.cardNumber}</p><br/>
        </div>
        
        <div className="expDate-and-cvv">

          <div className="expDate">
            <label htmlFor="expDate" className="credit-card-label">EXP DATE (MM/YY)</label><br />
              <div className="form-field-expMonth-and-year">
                <div className="form-field-expMonth">
                  <input type="text" className="expDate-input-field" name="expMonth" id="expMonth" value={inputValue.expMonth} onChange={changeHandler} placeholder='MM' required/>
                  <p className='input-error'>{inputError.expMonth}</p>
                </div>
                <div className="form-field-expYear">
                  <input type="text" className="expDate-input-field" name="expYear" id="expYear" value={inputValue.expYear} onChange={changeHandler} placeholder='YY'required/>
                  <p className='input-error'>{inputError.expYear}</p>
                </div>
              </div>
          </div>

          <div className="cvv" >
            <label htmlFor="cvv" className="credit-card-label">CVV</label><br />
            <input type="text" className="cvv-input-field" name="cvv" id="cvv" value={inputValue.cvv} onChange={changeHandler} placeholder='e.g. 123' required/>
            <p className='input-error'>{inputError.cvv}</p>
          </div>

        </div>
         <button className='submit-form' >Confirm</button>   
      </form>
    </div>
  )
}

function addSpaceAfterEvery4thChar(string) {
  let result = "";
  for (let i = 0; i < 12; i++) {
    if (i % 4 === 0 && i !== 0) {
      result += " ";
    }
    result += string[i];
  }
  return result;
}






