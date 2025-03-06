import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import InvoicePage from './pages/InvoicePage';
import ProductPage from './pages/ProductPage';

function App() {
    return (
      <Router>
        <div className="App">
          <h1>Store Management</h1>
          <Routes>
            <Route path="/invoices" element={<InvoicePage />} />
            <Route path="/products" element={<ProductPage />} />
          </Routes>
        </div>     
      </Router>  
    );
}

export default App;