
import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';

function App() {

  const[books, setBooks] = useState();

  const getBooks =async() =>{
    try{
      const response = await api.get("/api/books");
      setBooks(response.data);

    }catch(err){
      console.log(err);
    }

  }

  useEffect(()=>{
    getBooks();
  },[])

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/"element={<Home books ={books}/>}></Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
