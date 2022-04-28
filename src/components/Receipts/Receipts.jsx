import React, { useState } from 'react';
import Ingredients from '../Ingredients/Ingredients';

const Receipts = () => {
    const [meal, setMeal] = useState(0);

    return (
        <div>
            <form> <p classname ="text-meal">Choose the meal</p>
    <input type="radio" name="radio" id="1" 
   onClick={(e)=>setMeal(e.target.id)} />
    <label htmlFor="1">Лaгман</label>

   <input type="radio" name="radio" id="2"
   onClick={(e)=>setMeal(e.target.id)} />
    <label htmlFor="2">Манты</label>

   <input type="radio" name="radio" id="3"
   onClick={(e)=>setMeal(e.target.id)} />
    <label htmlFor="3">Шорпо</label>
    </form>
    <Ingredients meal = {meal}/>
        </div>
    );

};

export default Receipts;
