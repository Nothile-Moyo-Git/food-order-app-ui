import './styles/App.scss';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modal';
import { useState } from "react";
import CartProvider from './store/CartProvider';
import AnimatedBackdrop from './components/UI/AnimatedBackdrop';

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
            { showCartModal === true && <Modal showModal={ setShowCartModal }/> }
            <AnimatedBackdrop/>
          </main>
      </div>

    </CartProvider>
  );
}

export default App;
