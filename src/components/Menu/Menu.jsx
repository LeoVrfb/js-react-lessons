import React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul className='menu'>
        <li className='items'>
          <NavLink to='/'>Accueil</NavLink>
        </li>
        <li className='items' id='item-2'>
          Javascript
          <ul className='dropdown' id='dd2'>
            <li className='sous-items'>
              <NavLink to='/notionsdejs/lesbouclesjs'>
                Les boucles en js
              </NavLink>
            </li>
            <li className='sous-items'>
              <NavLink to='/notionsdejs/Fonctionsettableaux'>
                Fonctions et tableaux
              </NavLink>
            </li>
            <li className='sous-items'>
              <NavLink to='/notionsdejs/controlerledom'>
                Controler le DOM
              </NavLink>
            </li>
            <li className='sous-items'>
              <NavLink to='/notionsdejs/dixhacks'>Dix Hacks</NavLink>
            </li>
            <li className='sous-items'>
              Méthodes en JS
              <ul className='submenu' id='submenu'>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/notionsdejs/methodesjsmutatrices'>
                    Méthodes mutatrices
                  </NavLink>
                </li>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/notionsdejs/methodesjsnonmutatrices'>
                    Méthodes non mutatrices
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className='sous-items'>
              Callback fonctions
              <ul className='submenu ' id='submenu'>
                <li className=' sous-items sous_items_2 '>
                  <NavLink to='/notionsdejs/why'>Why</NavLink>
                </li>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/notionsdejs/usefull'>UseFull</NavLink>
                </li>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/notionsdejs/callback'>Callback</NavLink>
                </li>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/notionsdejs/promises'>Promises</NavLink>
                </li>
              </ul>
            </li>

            <li className='sous-items'>
              Les objets en js
              <ul className='submenu ' id='submenu'>
                <li className=' sous-items sous_items_2 '>
                  <NavLink to='/notionsdejs/array'>Array</NavLink>
                </li>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/notionsdejs/object'>Object</NavLink>
                </li>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/notionsdejs/date'>Date</NavLink>
                </li>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/notionsdejs/set'>Set</NavLink>
                </li>
              </ul>
            </li>

            <li className='sous-items'>
              Mes tests perso
              <ul className='submenu' id='submenu'>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/notionsdejs/tester'>Tester</NavLink>
                </li>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/notionsdejs/testerchild'>Tester child</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className='items' id='item-3'>
          React
          <ul className='dropdown' id='dd3'>
            <li className='sous-items'>
              <NavLink to='/react/tictactoe'>Tictactoe</NavLink>
            </li>
            <li className='sous-items'>
              Le cycle de vie
              <ul className='submenu' id='submenu'>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/react/cycledevie'>Cycles de vie</NavLink>
                </li>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/react/chronoclasse'>Chronometre Classe</NavLink>
                </li>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/react/chronofuncnouseff'>
                    ChronoFuncNoUseff
                  </NavLink>
                </li>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/react/chronofuncuseff'>ChronoFuncUseff</NavLink>
                </li>
              </ul>
            </li>
            <li className='sous-items'>
              Les références
              <ul className='submenu' id='submenu'>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/react/refclasse'>RefClasse</NavLink>
                </li>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/react/useref'>UseRef</NavLink>
                </li>
              </ul>
            </li>
            <li className='sous-items'>
              Les contextes
              <ul className='submenu' id='submenu'>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/react/usecontextlvl1'>UseContextLVL1</NavLink>
                </li>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/react/usecontextlvl2'>usecontextlv2</NavLink>
                </li>
              </ul>
            </li>
            <li className='sous-items'>
              useReducer
              <ul className='submenu' id='submenu'>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/react/usereducerlvl1'>useReducerLV1</NavLink>
                </li>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/react/usereducerlvl2'>useReducerLV2</NavLink>
                </li>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/react/usereducerlvl3'>useReducerLV3</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className='items' id='item-4'>
          Typescript
          <ul className='dropdown' id='dd4'>
            <li className='sous-items'>
              L'objet Interface
              <ul className='submenu' id='submenu'>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/typescript/objetinterface'>
                    InterfaceObject
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className='sous-items'>
              Les classes
              <ul className='submenu' id='submenu'>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/typescript/classes'>Les classes</NavLink>
                </li>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/typescript/privatevsprotected'>
                    Les classes
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className='sous-items'>
              TaskManager
              <ul className='submenu' id='submenu'>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/typescript/tachemanager'>TaskManager</NavLink>
                </li>
              </ul>
            </li>
            <li className='sous-items'>
              as const
              <ul className='submenu' id='submenu'>
                <li className='sous-items sous_items_2'>
                  <NavLink to='/typescript/asconst'>As const</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
