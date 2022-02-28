import './styles/App.scss';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <div className="App">
        <Header/>
        <main>
          <Meals/>
        </main>
    </div>
  );
}

export default App;
