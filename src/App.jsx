import './App.css';

import { useState } from 'react';

import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';

import availableIngredients from './components/IngredientsData';

const App = () => {

  const [stack, setStack] = useState('')

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      {/* List & Stack components */}
      <IngredientList/>
      <BurgerStack/>
      </section>
    </main>
  );
};

export default App;