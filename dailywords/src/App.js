import './App.css';
import Header from './components/Header/Header';
import Definition from './components/Definition/Definition';
import WordGuess from './components/WordGuess/WordGuess';
import AddGuess from './components/AddGuess/AddGuess';
import Footer from './components/Footer/Footer';
import { ApiContextProvider } from './Utils/apiService';

const App = () => {
  return (
    <ApiContextProvider>
      <div className="App">
        <div>
          <Header />
          <Definition def={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, deserunt sit? Impedit porro, illo odio dolore enim at, delectus eius qui consequatur tenetur sed obcaecati autem illum fuga deleniti veniam!"}/>
          <WordGuess />
          <AddGuess />
        </div>
        
        
        <Footer />
      </div>
    </ApiContextProvider>
  )
}

export default App;
