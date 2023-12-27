import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import PostCard from './components/PostCard/PostCard';
function App() {
  // Backend bağlantısı - http isteği
  // bağlantı sonucu gelen değeri ekranda göstermek
  // componentler arası veri iletişimi
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [])


  // es6
  const fetchItems = async () => {
    // axios.get("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => { console.log(response) })
    //   .catch((error) => { console.log(error) })
    //   .finally(() => { console.log("async işlem bitti") });

    try {
      let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data)
    } catch (e) {
      console.log(e);
    }

  }

  return (
    <div className="App" >
      {/* Parent-Child */}
      {posts.map((post) => <PostCard post={post} />)}
    </div>
  );
}

export default App;
