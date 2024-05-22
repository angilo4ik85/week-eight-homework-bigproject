import { useEffect, useState } from 'react';
import video from './Food.mp4';
import search from './search.png';
import RecipesComponent from './RecipesComponent';

function Home() {
    const [mySearch, setMySearch] = useState("");
    const [myRecipe, setMyRecipe] = useState([]);
    const [wordSubmit, setWordSubmit] = useState("");


    useEffect(() => {
        const getRecipe = async () => {
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmit}&app_id=7a0399a2&app_key=298dc73cf0efb147612c58e9cb64f276`);
            const data = await response.json();
            setMyRecipe(data.hits);
    }
    getRecipe()
    }, [wordSubmit])

    const myRecipeSearch =(e)=> {
        setMySearch(e.target.value);
    }

    const finalSearch =(e)=> {
        e.preventDefault();
        setWordSubmit(mySearch);
    }

    return(<div className="App">
        <div className="container">
            <video autoPlay muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
        <div className="container">
            <h1>Find a recipe</h1>
        </div>
        <div className='container'>
            <form onSubmit={finalSearch}>
                <input className='search' onChange={myRecipeSearch} value={mySearch} placeholder='input any ingredients ...'/>
                <button onClick={finalSearch}>
                    <img src={search} className='img' alt='search'/>
                </button>
            </form>
        </div>
        {myRecipe.map((element, index) => (
            <RecipesComponent key={index}
                label={element.recipe.label}
                image={element.recipe.image}
                calories={element.recipe.calories}
                ingredients={element.recipe.ingredientLines}
            />
            
        ))}
    </div>
    )
}

export default Home;


