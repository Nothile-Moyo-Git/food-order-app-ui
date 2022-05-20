import './styles/App.scss';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modal';
import { useState } from "react";
import CartProvider from './store/CartProvider';


function App() {

  // Set set the initial cart state to false we we only want to load it when we click on the botton
  // We pass it through to the header for the onClick and to the modal so the user can close it
  const [showCartModal, setShowCartModal] = useState(false);

  return (
    <CartProvider>
      <div className="App">
          <Header showModal={ setShowCartModal }/>
          <main>
            <Meals/>
          </main>
          { showCartModal === true && <Modal showModal={ setShowCartModal }/> }

        <div className="animation-box"> 
          <ul className="box-area">
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
          </ul>
        </div>
      </div>

    </CartProvider>
  );
}

export default App;
