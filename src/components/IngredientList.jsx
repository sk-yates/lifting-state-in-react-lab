import Ingredient from "./Ingredient";

const IngredientList = (props) => {
    // console.log("IngList items:", props.availableIngredients)

    // console.log("Prop ingredient:", props.addToBurger)

    return (
        <div>
            <ul>
                {props.availableIngredients.length > 0 ? props.availableIngredients.map((ingredient, index) => (
  
                        <Ingredient key={index} index={index} ingredient={ingredient} addToBurger={props.addToBurger} />
                ))
                    :
                    <p> Not found </p>
                }
            </ul>
        </div>
    );
};

export default IngredientList;