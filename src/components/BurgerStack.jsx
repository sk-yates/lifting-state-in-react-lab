import Ingredient from "./Ingredient";

const BurgerStack = (props) => {

    // console.log("Props.Stack:", props.stack)


    return (
        <div>
            <h1> Stack </h1>
            <ul>
                {props.stack.length > 0 ? props.stack.map((ingredient, index) => (
                    
                    <Ingredient key={index} index={index} ingredient={ingredient} removeFromBurger={props.removeFromBurger} />

                ))
                    :
                    <p> No ingredients </p>
                }
            </ul>
        </div>
    );
};

export default BurgerStack;