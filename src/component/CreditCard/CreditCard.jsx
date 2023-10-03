import React, { useContext, useState } from "react";
import "./CreditCard.scss";
import { DataContext } from "../../context/DataContext";

export default function CreditCard() {
  const [CreditCardValue, setCreditCardValue] = useContext(DataContext)

  return (
    <div className="credit-card">

      <div className="credit-card-front">
        <svg width="60" height="55">
          <circle cx="40" cy="40" r="15" fill="#FEFFFF" />
        </svg>
        <svg width="50" height="50">
          <circle cx="9" cy="35" r="5" stroke="#FEFFFF" strokeWidth="1" fill="transparent"/>
        </svg>
        <div className="credit-card-front-content">
          <div className="card-number">{CreditCardValue.cardNumber}</div>
          <div className="card-holder-name-and-year">
            <div className="card-holder-name">{CreditCardValue.cardHolderName}</div>
            <div className="exp-date">
              {CreditCardValue.expMonth}/{CreditCardValue.expYear}
            </div>
          </div>
        </div>
      </div>

      <div className="credit-card-back">
        <div className="credit-card-back-black-div"></div>
        <div className="credit-card-back-cvv">{CreditCardValue.cvv}</div>
        <div className="credit-card-back-end">
          <div className="first">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
          </div>
          <div className="second">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
          </div>
          <div className="third">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
