import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/container/NavBar/NavBar';
import Lista from './components/container/ItemList/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="w-100">
        <NavBar />
      </header>
      <main className="text-center p-3">
        <Lista/>
      </main>
    </div>
  );
}

export default App;
