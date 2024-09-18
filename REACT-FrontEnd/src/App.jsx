// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Contact from './assets/Contact';
import Counter from './assets/Counter';
import Hello from './assets/Hello';

function App() {
  const helloData = [
    {name: 'Jason', message: 'Hi there' },
    {name: 'Tom', message: 'Hello..'}
  ];

  return (
    <div className='App'>
      < Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}
      
      <Contact email="Noppakun@gmail.com" phone ="0830014877" />
    </div>
  );
}

export default App;