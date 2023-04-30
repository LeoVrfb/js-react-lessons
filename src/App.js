import './App.css';
// import CallBack from './components/Js-lessons/CallBackFonctions/CallBack';
// import Promises from './components/Js-lessons/CallBackFonctions/Promises';
// import UseFull from './components/Js-lessons/CallBackFonctions/UseFull';
// import Why from './components/Js-lessons/CallBackFonctions/Why';
// import ControlerLeDom from './components/Js-lessons/ControlerLeDom';
// import DixHacksJs from './components/Js-lessons/DixHacksJs';
// import FonctionsEtTableaux from './components/Js-lessons/FonctionsEtTableaux';
// import LesBoucles from './components/Js-lessons/LesBoucles';
// import MethodesModify from './components/Js-lessons/lesMethodesEnJs/MethodesModify';
// import MethodesNotModify from './components/Js-lessons/lesMethodesEnJs/MethodesNotModify';
// import Tester from './components/Js-lessons/TestsPerso/Tester';
import Chronometre from './components/React-Lessons/CycleDeVieComposants/Chronometre';
import ChronometreFunc from './components/React-Lessons/CycleDeVieComposants/ChronometreFuncSansUseEffect';
import CycleDeVie from './components/React-Lessons/CycleDeVieComposants/CycleDeVie';
import UseRef from './components/React-Lessons/References/UseRef';
import UseReducerLVL3 from './components/React-Lessons/useReducer/ComplexUseReducer/useReducerLVL3';
import CounterWithReducer from './components/React-Lessons/useReducer/useReducerLVL1';
// import TesterChild from './components/Js-lessons/TesterChild';
// import Tictactoe from './components/Tictactoe/Tictactoe';
// import CompteurJours from './components/appcompteurJours/CompteurJours';


function App() {
  return (
    <div className="App">

      {/* <Tictactoe />  */}
      {/* <CompteurJours />
      <MethodesModify />
      < MethodesNotModify /> */}
      {/* <FonctionsEtTableaux /> */}
      {/* <LesBoucles /> */}
      {/* <ControlerLeDom /> */}
      {/* < DixHacksJs /> */}
      {/* <Why /> */}
      {/* <CallBack /> */}
      {/* <UseFull /> */}
      {/* < Tester /> */}
      {/* < Promises /> */}
      <UseRef />
      <CycleDeVie />
      <Chronometre />
      <ChronometreFunc />
      <CounterWithReducer />
      <UseReducerLVL3 />
    </div>
  );
}

export default App;
