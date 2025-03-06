import React, { useEffect, useState } from 'react';
import invoicesData from '../data/invoices.json'; // Import mock data

function InvoicePage() {
  const [invoices, setInvoices] = useState([]);
  
  
  useEffect(() => {
    setInvoices(invoicesData);
  }, []);

  
  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div>
      <h2>Invoice Management</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.orderId}>
            <h3>{invoice.storeName} - Order ID: {invoice.orderId}</h3>
            <p>Date: {invoice.date}</p>
            <ul>
              {invoice.items.map((item, index) => (
                <li key={index}>{item.name}: {item.quantity} x ${item.price}</li>
              ))}
            </ul>
            <p>Total: ${calculateTotal(invoice.items)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvoicePage;
