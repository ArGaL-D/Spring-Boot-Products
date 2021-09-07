import './App.css';
import ProductTable from "./components/ProductTable";
import Navbar from "./components/Navbar";
import ProductForm from './components/ProductForm';
import Options from './components/Options';
import { useState } from 'react';

function App() {

  const [isClicked,setClicked] = useState(false);

  const openModal = () => {
      setClicked(!isClicked);
  }

  return (
    <div className="App">
        <Navbar />

        <Options openModal={openModal} />

        <ProductForm openModal={openModal} isClicked={isClicked} />


        <div className="table-container">
          <ProductTable />
        </div>
    </div>
  );
}

export default App;
