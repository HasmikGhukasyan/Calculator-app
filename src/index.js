import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './components/Calculator/Calculator';

const App = () => {
  return (
    <div className='App'> <Calculator/></div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
