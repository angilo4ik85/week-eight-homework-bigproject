function RecipesComponent({label, image, calories, ingredients}) {
    return(<div className="recipes">
        
            <div className='item'>
                <img src={image} className="image" alt="dish"/>
            
                <h2>{label}</h2>
                <p>{calories.toFixed()} calories</p>
            
            <ul className='list'>
                {ingredients.map((ingredient, index) => (
                    <li key={index}> 
                       {/* <img src={check} width='30px' alt='icon'/> */}
                        {ingredient}
                    </li>
                ))}
            </ul>
        </div>
        </div>
    )
}
export default RecipesComponent;