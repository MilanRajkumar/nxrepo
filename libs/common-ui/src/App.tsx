import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import CommonUi from './lib/common-ui';



function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-lg text-blue-400">Vite + React</h1>
      <CommonUi/>
    </div>
  );
}

export default App;
