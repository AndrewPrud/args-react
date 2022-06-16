import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import React from 'react';
import ExpenseItem from './ExpenseItem';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
root.render(<ExpenseItem/>);