import './App.css';

import { useState } from 'react';
import availableIngredients from './components/IngredientsData';
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';




const App = () => {

  const [stack, setStack] = useState([]);

  const addToBurger = (newIng) => {
    setStack([newIng, ...stack]);
  };

  const removeFromBurger = (ingToRemove) => {
    setStack((items) => items.filter((_, index) => index !== ingToRemove))
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      
      <IngredientList availableIngredients={availableIngredients} addToBurger={addToBurger}/>
      
      <BurgerStack stack={stack} removeFromBurger={removeFromBurger}/>

      </section>
    </main>
  );
};

export default App;