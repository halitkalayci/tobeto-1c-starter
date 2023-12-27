import { useEffect } from 'react';
import './App.css';
import { Button } from 'semantic-ui-react'
import axios from "axios";

function App() {
  // Backend bağlantısı - http isteği
  // bağlantı sonucu gelen değeri ekranda göstermek
  // componentler arası veri iletişimi

  useEffect(() => {
    fetchItems();
  }, [])



  const fetchItems = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => { console.log(response) })
      .catch((error) => { console.log(error) })
      .finally(() => { console.log("async işlem bitti") });
  }

  return (
    <div className="App">
      <Button>Click!</Button>
    </div>
  );
}

export default App;
