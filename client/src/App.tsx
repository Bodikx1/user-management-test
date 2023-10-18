import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p className='text-3xl font-bold mb-10'>User Info Stepper</p>
        <button
          className='bg-blue-500 px-6 py-1.5 rounded-lg text-white hover:bg-blue-600'
          onClick={() => setShowForm(true)}
        >
          Start
        </button>
      </header>
      <MultiStepForm showForm={showForm} />
    </div>
  );
}

export default App;
