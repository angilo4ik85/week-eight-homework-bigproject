import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slideUp from './slide-up.png';

function Meal({meal, video}) {
    const [myRecipe, setMyRecipe] = useState([]);


    useEffect(() => {
        const getRecipe = async () => {
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=7a0399a2&app_key=298dc73cf0efb147612c58e9cb64f276&mealType=${meal}`);
            const data = await response.json();
            setMyRecipe(data.hits);
    }
    getRecipe()
    },)

    return(<div className="App">
        <div className="container">
            <video autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
        </div>
        <h2 className="container">{meal} recipes:</h2>
        {myRecipe.map((element, index) => (
            <div className='item recipes' key={index}>
                <p>{index+1}</p>
                <img src={element.recipe.image} className="image" alt="dish"/>
                <h2>{element.recipe.label}</h2>
                <p>({element.recipe.mealType})</p>
                <p>
                    <span> {element.recipe.calories.toFixed()} calories / </span> 
                    <span> {element.recipe.yield} servings</span>
                </p>

                <ul className='list'>Ingredients:
                    {element.recipe.ingredientLines.map((ingredient, index) => (
                        <li key={index}> 
                            {ingredient}
                        </li>
                    ))}
                </ul>
                <Link className="slideUp" to={element.recipe.url} target='_blank'>
                    Directions
                    <img src={slideUp} alt='icon' width='35px'/>
                </Link>
            </div>
        ))}
    </div>
    )
}
export default Meal;