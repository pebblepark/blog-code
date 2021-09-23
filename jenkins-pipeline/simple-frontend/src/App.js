
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
    <div >
      {response}
    </div>
  );
}

export default App;
