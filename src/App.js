import './App.css';
import Tictactoe from './components/Tictactoe/Tictactoe';
import CompteurJours from './components/appcompteurJours/CompteurJours';

/* import ParentComponent from './components/ParentComponent' */

function App() {
  return (
    <div className="App">
        {/*<ParentComponent/> */}     
       <CompteurJours/>
<Tictactoe/>
    </div>
  );
}

export default App;
