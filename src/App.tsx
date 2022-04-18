import { useState } from 'react';
import './App.css';
import PopupWrapper from './Components/Modal/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
       <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <PopupWrapper isOpen={isOpen} onClose={setIsOpen}>
        <div>Hi There</div>
      </PopupWrapper>
    </div>
  );
}

export default App;
