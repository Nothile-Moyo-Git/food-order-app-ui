import './styles/App.scss';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modal';

function App() {
  return (
    <div className="App">
        <Header/>
        <main>
          <Meals/>
        </main>
        { /* <Modal/> */ }
    </div>
  );
}

export default App;
