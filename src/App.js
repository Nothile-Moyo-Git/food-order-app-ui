import logo from './logo.svg';
import './styles/App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Moyos Munch!!
        </a>
        Ross Kemp!!
        <Header></Header>
      </header>
    </div>
  );
}

export default App;
