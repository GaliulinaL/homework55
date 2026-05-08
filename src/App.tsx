import './App.css';
import {useState} from 'react';
import Burger from './components/Burger';
import Control from './components/Control';

import meatImage from './assets/meat.jpg';
import cheeseImage from './assets/cheese.jpg';
import saladImage from './assets/salad.jpg';
import baconImage from './assets/bacon.jpg';

const INGREDIENTS = [
    {
        name: 'Meat',
        price: 80,
        image: meatImage
    },
    {
        name: 'Cheese',
        price: 50,
        image: cheeseImage
    },
    {
        name: 'Salad',
        price: 10,
        image: saladImage
    },
    {
        name: 'Bacon',
        price: 60,
        image: baconImage
    }
];

const App = () => {

    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0}
    ]);

    const addIngredient = (name: string) => {

        const updatedIngredients = ingredients.map(item => {

            if (item.name === name) {
                return {
                    ...item,
                    count: item.count + 1
                };
            }

            return item;
        });

        setIngredients(updatedIngredients);
    };

    const deleteIngredient = (name: string) => {

        const updatedIngredients = ingredients.map(item => {

            if (item.name === name && item.count > 0) {
                return {
                    ...item,
                    count: item.count - 1
                };
            }

            return item;
        });

        setIngredients(updatedIngredients);
    };

    let totalPrice = 30;

    ingredients.forEach(item => {

        const ingredient = INGREDIENTS.find(i => i.name === item.name);

        if (ingredient) {
            totalPrice += ingredient.price * item.count;
        }
    });

    return (
        <div className="container">

            <div className="controls">

                {INGREDIENTS.map(item => {

                    const currentIngredient = ingredients.find(i => i.name === item.name);

                    return (
                        <Control
                            key={item.name}
                            name={item.name}
                            image={item.image}
                            count={currentIngredient ? currentIngredient.count : 0}
                            add={() => addIngredient(item.name)}
                            remove={() => deleteIngredient(item.name)}
                        />
                    );
                })}

            </div>

            <div className="burger-block">

                <Burger ingredients={ingredients}/>

                <h2>Price: {totalPrice} сом</h2>

            </div>

        </div>
    );
};

export default App;