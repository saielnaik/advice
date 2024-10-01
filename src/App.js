import './App.css';
import Card from './Card';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='bg-[#cfceff] flex flex-col justify-center items-center lg:p-5 rounded-lg shadow-lg p-6 m-6'>
        <input 
          type='text' 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          name='advice'
          placeholder='Enter text'
          className="mb-4 p-2 font-semibold text-center bg-[#6966ff] border border-gray-300 rounded-lg text-[#cfceff]"
        />
        <Card input={input} />
      </div>
    </div>

  );
}

export default App;
