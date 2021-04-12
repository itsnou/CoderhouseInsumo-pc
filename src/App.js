import NavBar from './components/NavBar';
import Lista from './container/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <header className="w-100">
        <NavBar />
      </header>
      <main className="text-center p-3">
        <Lista greeting='HOLA CODERS'/>
      </main>
    </div>
  );
}

export default App;
