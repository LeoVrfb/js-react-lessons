import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './components/React-Lessons/useContext/useContextLVL2/AuthProvider';
import Menu from './components/Menu/Menu';
import LesBoucles from './components/Js-lessons/LesBoucles';
import FonctionsEtTableaux from './components/Js-lessons/FonctionsEtTableaux';
import ControlerLeDom from './components/Js-lessons/ControlerLeDom';
import DixHacksJs from './components/Js-lessons/DixHacksJs';
import MethodesModify from './components/Js-lessons/lesMethodesEnJs/MethodesModify';
import MethodesNotModify from './components/Js-lessons/lesMethodesEnJs/MethodesNotModify';
import Why from './components/Js-lessons/CallBackFonctions/Why';
import UseFull from './components/Js-lessons/CallBackFonctions/UseFull';
import CallBack from './components/Js-lessons/CallBackFonctions/CallBack';
import Promises from './components/Js-lessons/CallBackFonctions/Promises';
import Tester from './components/Js-lessons/TestsPerso/Tester';
import TesterChild from './components/Js-lessons/TestsPerso/TesterChild';
import CycleDeVie from './components/React-Lessons/CycleDeVieComposants/CycleDeVie';
import Chronometre from './components/React-Lessons/CycleDeVieComposants/Chronometre';
import ChronometreFunc from './components/React-Lessons/CycleDeVieComposants/ChronometreFuncSansUseEffect';
import ChronometreFuncWithUseEffect from './components/React-Lessons/CycleDeVieComposants/ChronometreFuncWithUseEffect';
import ChronometreFuncUse from './components/React-Lessons/CycleDeVieComposants/ChronometreFuncWithUseEffect';
import RefClasse from './components/React-Lessons/References/RefClasse';
import UseRef from './components/React-Lessons/References/UseRef';
import UseContextLVL1 from './components/React-Lessons/useContext/useContextLVL1/UseContextLVL1';
import UseContextLVL2 from './components/React-Lessons/useContext/useContextLVL2/UseContextLVL2';
import UseReducerLVL1 from './components/React-Lessons/useReducer/useReducerLVL1';
import UseReducerLVL2 from './components/React-Lessons/useReducer/useReducerLVL2';
import UseReducerLVL3 from './components/React-Lessons/useReducer/ComplexUseReducer/useReducerLVL3';
import Tictactoe from './components/React-Lessons/Tictactoe/Tictactoe';
import TacheManager from './components/TP-Lesson/CreateComponentGPT/TacheManager';
import Classes from './components/TP-Lesson/Classes/Classes';
import ObjetInterface from './components/TP-Lesson/ObjetInterface/ObjetInterface';
import PrivateVsProtected from './components/TP-Lesson/Classes/PrivateVsProtected.tsx';
import DateObject from './components/Js-lessons/ObjetsJs/Date';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Menu />
          <Routes>
            <Route path='/notionsdejs/lesbouclesjs' element={<LesBoucles />} />
            <Route
              path='/notionsdejs/fonctionsettableaux'
              element={<FonctionsEtTableaux />}
            />
            <Route
              path='/notionsdejs/controlerledom'
              element={<ControlerLeDom />}
            />
            <Route path='/notionsdejs/dixhacks' element={<DixHacksJs />} />
            <Route
              path='/notionsdejs/methodesjsmutatrices'
              element={<MethodesModify />}
            />
            <Route
              path='/notionsdejs/methodesjsnonmutatrices'
              element={<MethodesNotModify />}
            />
            <Route path='/notionsdejs/why' element={<Why />} />
            <Route path='/notionsdejs/usefull' element={<UseFull />} />
            <Route path='/notionsdejs/callback' element={<CallBack />} />
            <Route path='/notionsdejs/promises' element={<Promises />} />
            <Route path='/notionsdejs/date' element={<DateObject />} />
            <Route path='/notionsdejs/tester' element={<Tester />} />
            <Route path='/notionsdejs/testerchild' element={<TesterChild />} />
            <Route path='/react/cycledevie' element={<CycleDeVie />} />
            <Route path='/react/chronoclasse' element={<Chronometre />} />
            <Route
              path='/react/chronofuncnouseff'
              element={<ChronometreFunc />}
            />
            <Route
              path='/react/chronofuncuseff'
              element={<ChronometreFuncUse />}
            />
            <Route
              path='/react/chronofuncuseff'
              element={<ChronometreFuncWithUseEffect />}
            />
            <Route path='/react/refclasse' element={<RefClasse />} />
            <Route path='/react/useref' element={<UseRef />} />
            <Route path='/react/usecontextlvl1' element={<UseContextLVL1 />} />
            <Route path='/react/usecontextlvl2' element={<UseContextLVL2 />} />
            <Route path='/react/usereducerlvl1' element={<UseReducerLVL1 />} />
            <Route path='/react/usereducerlvl2' element={<UseReducerLVL2 />} />
            <Route path='/react/usereducerlvl3' element={<UseReducerLVL3 />} />
            <Route path='/react/tictactoe' element={<Tictactoe />} />
            <Route path='/typescript/tachemanager' element={<TacheManager />} />
            <Route path='/typescript/classes' element={<Classes />} />
            <Route
              path='/typescript/objetinterface'
              element={<ObjetInterface />}
            />
            <Route
              path='/typescript/privatevsprotected'
              element={<PrivateVsProtected />}
            />
            <Route
              path='/typescript/asconst'
              element={<PrivateVsProtected />}
            />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
