import React from 'react';
import './index.css';
import Logo from './assets/logo192.png'
function App() {
  return (
    <div className='w-screen h-screen bg-fundo flex flex-col items-center justify-center'>
     <header className='flex flex-col items-center'>
      <img src={Logo} />
      <h1 className="text-3xl font-bold  text-text1 ">
        Etec Paulistano 
      </h1>
      <h2 className="text-lg  text-text2 ">
        Faça login e comece a usar
      </h2>
     </header>
     <form>
      <label type='text'>
       
      </label>
     </form>
  </div>
  
  );
}

export default App;
