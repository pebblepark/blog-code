import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [response, setResponse] = useState(null);
  
  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get('/welcome');
      setResponse(response.data);
    };

    fetchApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {response}
        </p>
      </header>
    </div>
  );
}

export default App;
