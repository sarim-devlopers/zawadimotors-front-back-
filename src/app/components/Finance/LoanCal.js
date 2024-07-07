"use client"

import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const LoanCalculator = () => {
  const [price, setPrice] = useState(0);
  const [interestRate, setInterestRate] = useState(0.01);
  const [period, setPeriod] = useState(10);
  const [downPayment, setDownPayment] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayments, setTotalPayments] = useState(0);

  useEffect(() => {
    calculateLoan();
  }, [price, interestRate, period, downPayment]);

  const calculateLoan = () => {
    const principal = price - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = period;
    
    const monthlyPayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    setMonthlyPayment(monthlyPayment.toFixed(2));
    setTotalInterest(totalInterest.toFixed(2));
    setTotalPayments(totalPayment.toFixed(2));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Loan Calculator</h2>
      <p className="mb-4">
        Use our loan calculator to calculate payments over the life of your loan. Enter your information to see how much your monthly payments could be. You can adjust the length of the loan, down payment, and interest rate to see how those changes raise or lower your payments.
      </p>
      <p className="mb-4 font-bold text-red-500">PLEASE NOTE WE DO NOT CHARGE INTEREST</p>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Price *</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Interest Rate *</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Period (months) *</label>
        <input
          type="number"
          value={period}
          onChange={(e) => setPeriod(parseFloat(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Down Payment</label>
        <input
          type="number"
          value={downPayment}
          onChange={(e) => setDownPayment(parseFloat(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Monthly Payment</label>
        <input
          type="text"
          value={`KSH ${monthlyPayment}`}
          readOnly
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Total Interest</label>
        <input
          type="text"
          value={`KSH ${totalInterest}`}
          readOnly
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Total Payments</label>
        <input
          type="text"
          value={`KSH ${totalPayments}`}
          readOnly
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
        />
      </div>

      <p className="mt-4 text-gray-600 text-sm">
        Title and other fees and incentives are not included in this calculation, which is an estimate only. Monthly payment estimates are for informational purposes and do not represent a financing offer from the seller of this vehicle. Other taxes may apply.
      </p>

      <div className="mt-6 flex justify-center space-x-4">
        <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook size={24} /></a>
        <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={24} /></a>
        <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin size={24} /></a>
      </div>
    </div>
  );
};

export default LoanCalculator;
